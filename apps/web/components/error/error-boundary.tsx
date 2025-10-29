"use client"

import { Component, ErrorInfo, ReactNode } from "react"
import ErrorDisplay from "./error-display"

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log l'erreur pour le monitoring
    console.error("ErrorBoundary caught an error:", error, errorInfo)
    
    // Appeler le callback personnalisé
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // Envoyer l'erreur à Google Analytics
    if (typeof window !== "undefined") {
      if (window.gtag) {
        window.gtag("event", "exception", {
          description: error.message,
          fatal: true,
        })
      }
      
      // Google Tag Manager
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "error_boundary_triggered",
          error_message: error.message,
          error_stack: error.stack,
          error_component_stack: errorInfo.componentStack,
        })
      }
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined })
  }

  handleBack = () => {
    if (typeof window !== "undefined") {
      window.history.back()
    }
  }

  render() {
    if (this.state.hasError) {
      // Utiliser le fallback personnalisé si fourni
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Afficher l'interface d'erreur par défaut
      return (
        <ErrorDisplay
          title="Une erreur s'est produite"
          description="Une erreur inattendue s'est produite dans l'application. Nous avons été notifiés et travaillons à résoudre le problème."
          errorCode="BOUNDARY"
          onRetry={this.handleRetry}
          onBack={this.handleBack}
        >
          {/* Détails de l'erreur en mode développement */}
          {process.env.NODE_ENV === "development" && this.state.error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-sm font-medium text-red-800 dark:text-red-200">
                  Détails de l'erreur (mode développement)
                </span>
              </div>
              <pre className="text-xs text-red-700 dark:text-red-300 overflow-auto">
                {this.state.error.message}
                {this.state.error.stack && `\n\nStack trace:\n${this.state.error.stack}`}
              </pre>
            </div>
          )}
        </ErrorDisplay>
      )
    }

    return this.props.children
  }
}
