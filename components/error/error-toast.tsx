"use client"

import { useEffect, useState } from "react"
import { AlertTriangle, X, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import TrackedButton from "@/components/analytics/tracked-button"

interface ErrorToastProps {
  error: Error
  onRetry?: () => void
  onDismiss?: () => void
  autoHide?: boolean
  duration?: number
}

export default function ErrorToast({
  error,
  onRetry,
  onDismiss,
  autoHide = true,
  duration = 5000
}: ErrorToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        onDismiss?.()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [autoHide, duration, onDismiss])

  const handleRetry = () => {
    onRetry?.()
    setIsVisible(false)
  }

  const handleDismiss = () => {
    setIsVisible(false)
    onDismiss?.()
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-4 right-4 z-50 max-w-md w-full">
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg shadow-lg p-4 animate-in slide-in-from-right duration-300">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-medium text-red-800 dark:text-red-200">
              Erreur
            </h4>
            <p className="text-sm text-red-700 dark:text-red-300 mt-1">
              {error.message}
            </p>
            
            {/* Actions */}
            <div className="flex items-center space-x-2 mt-3">
              {onRetry && (
                <TrackedButton
                  onClick={handleRetry}
                  size="sm"
                  variant="outline"
                  className="text-red-700 dark:text-red-300 border-red-300 dark:border-red-700 hover:bg-red-100 dark:hover:bg-red-800"
                  action="retry_from_toast"
                  category="error_handling"
                  label="error_toast"
                >
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Réessayer
                </TrackedButton>
              )}
              
              <Button
                onClick={handleDismiss}
                size="sm"
                variant="ghost"
                className="text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-800 p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
