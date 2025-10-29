"use client"

import { forwardRef, ReactNode } from "react"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

interface AccessibleButtonProps {
  children: ReactNode
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg"
  asChild?: boolean
  loading?: boolean
  loadingText?: string
  description?: string
  ariaDescribedBy?: string
  className?: string
  disabled?: boolean
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  role?: string
  "aria-label"?: string
  "aria-describedby"?: string
  "aria-disabled"?: boolean
  tabIndex?: number
  id?: string
  name?: string
  value?: string
  form?: string
  formAction?: string
  formEncType?: string
  formMethod?: string
  formNoValidate?: boolean
  formTarget?: string
  autoFocus?: boolean
  autoComplete?: string
  [key: string]: any
}

/**
 * Bouton accessible avec support complet des lecteurs d'écran
 */
const AccessibleButton = forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  ({ 
    children, 
    loading = false, 
    loadingText = "Chargement...",
    description,
    ariaDescribedBy,
    className,
    disabled,
    asChild,
    ...props 
  }, ref) => {
    const isDisabled = disabled || loading

    // Si asChild est utilisé, on ne peut pas avoir plusieurs enfants
    if (asChild) {
      return (
        <Button
          ref={ref}
          disabled={isDisabled}
          aria-disabled={isDisabled}
          aria-describedby={description ? undefined : ariaDescribedBy}
          className={cn(
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
            "transition-all duration-200",
            className
          )}
          {...props}
        >
          {children}
        </Button>
      )
    }

    return (
      <Button
        ref={ref}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-describedby={description ? undefined : ariaDescribedBy}
        className={cn(
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
          "transition-all duration-200",
          className
        )}
        {...props}
      >
        {loading && (
          <span className="sr-only" aria-live="polite">
            {loadingText}
          </span>
        )}
        <span aria-hidden={loading ? "true" : "false"}>
          {children}
        </span>
        {description && (
          <span id={ariaDescribedBy} className="sr-only">
            {description}
          </span>
        )}
      </Button>
    )
  }
)

AccessibleButton.displayName = "AccessibleButton"

export default AccessibleButton
