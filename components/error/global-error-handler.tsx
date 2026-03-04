"use client"

import { useEffect } from "react"
import { initializeErrorTracking, cleanupErrorTracking } from "@/lib/error-tracking"
import ErrorToast from "./error-toast"
import { useState } from "react"

interface GlobalErrorHandlerProps {
  children: React.ReactNode
}

export default function GlobalErrorHandler({ children }: GlobalErrorHandlerProps) {
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    // Initialiser le tracking d'erreurs globales
    initializeErrorTracking()

    // Gestionnaire d'erreurs personnalisé pour les erreurs non capturées
    const handleError = (event: ErrorEvent) => {
      console.error("Global error caught:", event.error)
      setError(event.error)
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error("Unhandled promise rejection:", event.reason)
      setError(event.reason instanceof Error ? event.reason : new Error(String(event.reason)))
    }

    // Ajouter les listeners
    window.addEventListener("error", handleError)
    window.addEventListener("unhandledrejection", handleUnhandledRejection)

    // Nettoyage
    return () => {
      cleanupErrorTracking()
      window.removeEventListener("error", handleError)
      window.removeEventListener("unhandledrejection", handleUnhandledRejection)
    }
  }, [])

  const handleRetry = () => {
    setError(null)
    // Optionnel : recharger la page si nécessaire
    // window.location.reload()
  }

  const handleDismiss = () => {
    setError(null)
  }

  return (
    <>
      {children}
      {error && (
        <ErrorToast
          error={error}
          onRetry={handleRetry}
          onDismiss={handleDismiss}
          autoHide={false}
        />
      )}
    </>
  )
}
