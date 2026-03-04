"use client"

import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TrackedButton from "@/components/analytics/tracked-button"
import { Home, RefreshCw, AlertTriangle, Bug, Mail } from "lucide-react"
import Link from "next/link"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log l'erreur pour le monitoring
    console.error("Application Error:", error)
    
    // Envoyer l'erreur à votre service de monitoring
    if (typeof window !== "undefined") {
      // Google Analytics
      if (window.gtag) {
        window.gtag("event", "exception", {
          description: error.message,
          fatal: false,
        })
      }
      
      // Google Tag Manager
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "error_occurred",
          error_message: error.message,
          error_stack: error.stack,
          error_digest: error.digest,
        })
      }
    }
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <Card className="border-0 shadow-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="mx-auto mb-6 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-12 h-12 text-white" />
            </div>
            <CardTitle className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Oops! An error occurred
            </CardTitle>
            <CardDescription className="text-lg text-slate-600 dark:text-slate-300">
              We are experiencing a technical issue. Our team has been notified.
              <br />
              <span className="text-sm text-slate-500 dark:text-slate-400">
                Error code: 500
              </span>
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Error details (in development mode) */}
            {process.env.NODE_ENV === "development" && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Bug className="w-4 h-4 text-red-600 dark:text-red-400 mr-2" />
                  <span className="text-sm font-medium text-red-800 dark:text-red-200">
                    Error details (development mode)
                  </span>
                </div>
                <pre className="text-xs text-red-700 dark:text-red-300 overflow-auto">
                  {error.message}
                  {error.digest && `\nDigest: ${error.digest}`}
                </pre>
              </div>
            )}

            {/* Main actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TrackedButton
                onClick={reset}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                action="retry_action"
                category="error_handling"
                label="500_page"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </TrackedButton>
              
              <TrackedButton
                asChild
                variant="outline"
                size="lg"
                action="navigate_home"
                category="error_handling"
                label="500_page"
              >
                <Link href="/">
                  <Home className="w-5 h-5 mr-2" />
                  Back to Home
                </Link>
              </TrackedButton>
            </div>

            {/* Suggested solutions */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 text-center">
                Suggested Solutions
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-300">1</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                      Refresh the page
                    </p>
                    <p className="text-xs text-blue-700 dark:text-blue-300">
                      Sometimes a simple refresh resolves the issue
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-green-600 dark:text-green-300">2</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-900 dark:text-green-100">
                      Check your connection
                    </p>
                    <p className="text-xs text-green-700 dark:text-green-300">
                      Make sure your internet connection is stable
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="w-6 h-6 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-300">3</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-purple-900 dark:text-purple-100">
                      Contact support
                    </p>
                    <p className="text-xs text-purple-700 dark:text-purple-300">
                      If the problem persists, our team will help you
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact support */}
            <div className="text-center pt-4">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                Problem persists?
              </p>
              <TrackedButton
                asChild
                variant="link"
                action="contact_support"
                category="error_handling"
                label="500_page"
              >
                <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact technical support
                </Link>
              </TrackedButton>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
