"use client"

import { useEffect, useRef, ReactNode } from "react"

interface FocusTrapProps {
  children: ReactNode
  active?: boolean
  returnFocus?: boolean
  className?: string
}

export default function FocusTrap({ 
  children, 
  active = true, 
  returnFocus = true,
  className = ""
}: FocusTrapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!active || !containerRef.current) return

    // Sauvegarder l'élément actuellement focusé
    previousActiveElement.current = document.activeElement as HTMLElement

    const focusableElements = containerRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    // Focuser le premier élément focusable
    if (firstElement) {
      firstElement.focus()
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        if (event.shiftKey) {
          // Shift + Tab : aller au dernier élément si on est sur le premier
          if (document.activeElement === firstElement) {
            event.preventDefault()
            lastElement?.focus()
          }
        } else {
          // Tab : aller au premier élément si on est sur le dernier
          if (document.activeElement === lastElement) {
            event.preventDefault()
            firstElement?.focus()
          }
        }
      }

      if (event.key === "Escape") {
        // Retourner le focus à l'élément précédent
        if (returnFocus && previousActiveElement.current) {
          previousActiveElement.current.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      
      // Restaurer le focus à l'élément précédent
      if (returnFocus && previousActiveElement.current) {
        previousActiveElement.current.focus()
      }
    }
  }, [active, returnFocus])

  return (
    <div 
      ref={containerRef}
      className={className}
      role="dialog"
      aria-modal="true"
    >
      {children}
    </div>
  )
}
