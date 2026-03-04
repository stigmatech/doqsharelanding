"use client"

import { ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TrackedButton from "@/components/analytics/tracked-button"
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface ErrorDisplayProps {
  title: string
  description: string
  errorCode?: string
  showRetry?: boolean
  showHome?: boolean
  showBack?: boolean
  onRetry?: () => void
  onBack?: () => void
  children?: ReactNode
  className?: string
}

export default function ErrorDisplay({
  title,
  description,
  errorCode,
  showRetry = true,
  showHome = true,
  showBack = true,
  onRetry,
  onBack,
  children,
  className = ""
}: ErrorDisplayProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4 ${className}`}>
      <div className="max-w-2xl w-full">
        <Card className="border-0 shadow-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="mx-auto mb-6 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-12 h-12 text-white" />
            </div>
            <CardTitle className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {title}
            </CardTitle>
            <CardDescription className="text-lg text-slate-600 dark:text-slate-300">
              {description}
              {errorCode && (
                <>
                  <br />
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    Code d'erreur : {errorCode}
                  </span>
                </>
              )}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Contenu personnalisé */}
            {children}

            {/* Actions principales */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {showRetry && onRetry && (
                <TrackedButton
                  onClick={onRetry}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                  action="retry_action"
                  category="error_handling"
                  label={`${errorCode || 'error'}_page`}
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Réessayer
                </TrackedButton>
              )}
              
              {showBack && onBack && (
                <TrackedButton
                  onClick={onBack}
                  variant="outline"
                  size="lg"
                  action="go_back"
                  category="error_handling"
                  label={`${errorCode || 'error'}_page`}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Retour en arrière
                </TrackedButton>
              )}
              
              {showHome && (
                <TrackedButton
                  asChild
                  variant={showRetry || showBack ? "outline" : "default"}
                  size="lg"
                  action="navigate_home"
                  category="error_handling"
                  label={`${errorCode || 'error'}_page`}
                >
                  <Link href="/">
                    <Home className="w-5 h-5 mr-2" />
                    Retour à l'accueil
                  </Link>
                </TrackedButton>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
