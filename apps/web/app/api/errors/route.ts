import { NextRequest, NextResponse } from "next/server"

interface ErrorReport {
  message: string
  stack?: string
  name?: string
  digest?: string
  componentStack?: string
  context?: {
    userId?: string
    sessionId?: string
    page?: string
    userAgent?: string
    timestamp?: string
    url?: string
    referrer?: string
    line?: number
    column?: number
  }
  timestamp: string
  environment: string
  version?: string
}

export async function POST(request: NextRequest) {
  try {
    const errorReport: ErrorReport = await request.json()

    // Validation basique
    if (!errorReport.message || !errorReport.timestamp) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Log l'erreur pour le monitoring
    console.error("Client Error Report:", {
      message: errorReport.message,
      stack: errorReport.stack,
      name: errorReport.name,
      digest: errorReport.digest,
      page: errorReport.context?.page,
      url: errorReport.context?.url,
      userAgent: errorReport.context?.userAgent,
      timestamp: errorReport.timestamp,
      environment: errorReport.environment,
    })

    // Ici vous pouvez ajouter l'intégration avec vos services de monitoring :
    // - Sentry
    // - LogRocket
    // - Bugsnag
    // - DataDog
    // - New Relic
    // etc.

    // Exemple d'intégration avec Sentry (décommentez si vous utilisez Sentry)
    /*
    if (process.env.SENTRY_DSN) {
      const Sentry = require('@sentry/nextjs')
      Sentry.captureException(new Error(errorReport.message), {
        tags: {
          component: 'client_error',
          environment: errorReport.environment,
        },
        extra: {
          stack: errorReport.stack,
          componentStack: errorReport.componentStack,
          context: errorReport.context,
        },
      })
    }
    */

    // Exemple d'intégration avec un service de logging (décommentez si nécessaire)
    /*
    if (process.env.LOGGING_SERVICE_URL) {
      await fetch(process.env.LOGGING_SERVICE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.LOGGING_SERVICE_TOKEN}`,
        },
        body: JSON.stringify({
          level: 'error',
          message: errorReport.message,
          stack: errorReport.stack,
          metadata: {
            ...errorReport.context,
            environment: errorReport.environment,
            version: errorReport.version,
          },
        }),
      })
    }
    */

    // Envoyer une notification par email pour les erreurs critiques
    if (errorReport.name === "ChunkLoadError" || 
        errorReport.message.includes("Loading chunk") ||
        errorReport.message.includes("Loading CSS chunk")) {
      
      // Ces erreurs sont souvent liées à des problèmes de cache
      // et peuvent nécessiter une attention particulière
      console.warn("Critical chunk loading error detected:", errorReport.message)
      
      // Ici vous pouvez ajouter l'envoi d'une notification par email
      // ou Slack pour alerter l'équipe de développement
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing error report:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
