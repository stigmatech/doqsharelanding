/**
 * Utilitaires pour le tracking et la gestion d'erreurs
 */

export interface ErrorContext {
  userId?: string
  sessionId?: string
  page?: string
  userAgent?: string
  timestamp?: string
  url?: string
  referrer?: string
}

export interface ErrorDetails {
  message: string
  stack?: string
  name?: string
  digest?: string
  componentStack?: string
  context?: ErrorContext
}

/**
 * Envoie une erreur à Google Analytics
 */
export function trackErrorToGA(error: ErrorDetails) {
  if (typeof window === "undefined" || !window.gtag) return

  window.gtag("event", "exception", {
    description: error.message,
    fatal: false,
    custom_map: {
      error_name: error.name,
      error_stack: error.stack,
      error_digest: error.digest,
      page: error.context?.page,
      user_id: error.context?.userId,
    },
  })
}

/**
 * Envoie une erreur à Google Tag Manager
 */
export function trackErrorToGTM(error: ErrorDetails) {
  if (typeof window === "undefined" || !window.dataLayer) return

  window.dataLayer.push({
    event: "error_occurred",
    error_message: error.message,
    error_name: error.name,
    error_stack: error.stack,
    error_digest: error.digest,
    error_component_stack: error.componentStack,
    page: error.context?.page,
    user_id: error.context?.userId,
    session_id: error.context?.sessionId,
    user_agent: error.context?.userAgent,
    timestamp: error.context?.timestamp || new Date().toISOString(),
    url: error.context?.url,
    referrer: error.context?.referrer,
  })
}

/**
 * Envoie une erreur à un service de monitoring externe
 */
export async function trackErrorToMonitoring(error: ErrorDetails) {
  try {
    const response = await fetch("/api/errors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...error,
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV,
        version: process.env.NEXT_PUBLIC_APP_VERSION,
      }),
    })

    if (!response.ok) {
      console.warn("Failed to send error to monitoring service:", response.status)
    }
  } catch (err) {
    console.warn("Failed to send error to monitoring service:", err)
  }
}

/**
 * Track une erreur avec tous les services disponibles
 */
export function trackError(error: Error, context?: ErrorContext) {
  const errorDetails: ErrorDetails = {
    message: error.message,
    stack: error.stack,
    name: error.name,
    digest: (error as any).digest,
    context: {
      ...context,
      timestamp: new Date().toISOString(),
      url: typeof window !== "undefined" ? window.location.href : undefined,
      referrer: typeof window !== "undefined" ? document.referrer : undefined,
      userAgent: typeof window !== "undefined" ? navigator.userAgent : undefined,
    },
  }

  // Track avec Google Analytics
  trackErrorToGA(errorDetails)

  // Track avec Google Tag Manager
  trackErrorToGTM(errorDetails)

  // Track avec le service de monitoring (en arrière-plan)
  trackErrorToMonitoring(errorDetails).catch(() => {
    // Ignore les erreurs de tracking pour éviter les boucles
  })
}

/**
 * Track une erreur JavaScript globale
 */
export function trackGlobalError(error: ErrorEvent) {
  const errorDetails: ErrorDetails = {
    message: error.message,
    stack: error.error?.stack,
    name: error.error?.name,
    context: {
      timestamp: new Date().toISOString(),
      url: error.filename,
    },
  }

  trackErrorToGA(errorDetails)
  trackErrorToGTM(errorDetails)
}

/**
 * Track une erreur de promesse rejetée
 */
export function trackUnhandledRejection(event: PromiseRejectionEvent) {
  const error = event.reason instanceof Error ? event.reason : new Error(String(event.reason))
  
  const errorDetails: ErrorDetails = {
    message: error.message,
    stack: error.stack,
    name: error.name,
    context: {
      timestamp: new Date().toISOString(),
      url: typeof window !== "undefined" ? window.location.href : undefined,
    },
  }

  trackErrorToGA(errorDetails)
  trackErrorToGTM(errorDetails)
}

/**
 * Initialise le tracking d'erreurs globales
 */
export function initializeErrorTracking() {
  if (typeof window === "undefined") return

  // Erreurs JavaScript
  window.addEventListener("error", trackGlobalError)

  // Promesses rejetées
  window.addEventListener("unhandledrejection", trackUnhandledRejection)

  // Erreurs de ressources (images, scripts, etc.)
  window.addEventListener("error", (event) => {
    if (event.target !== window) {
      const errorDetails: ErrorDetails = {
        message: `Resource error: ${(event.target as any).src || (event.target as any).href}`,
        context: {
          timestamp: new Date().toISOString(),
          url: (event.target as any).src || (event.target as any).href,
        },
      }

      trackErrorToGTM(errorDetails)
    }
  }, true)
}

/**
 * Nettoie les listeners d'erreurs
 */
export function cleanupErrorTracking() {
  if (typeof window === "undefined") return

  window.removeEventListener("error", trackGlobalError)
  window.removeEventListener("unhandledrejection", trackUnhandledRejection)
}
