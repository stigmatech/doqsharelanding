"use client"

import { ReactNode } from "react"

interface ScreenReaderOnlyProps {
  children: ReactNode
  className?: string
}

/**
 * Composant pour masquer visuellement du contenu tout en le gardant accessible aux lecteurs d'écran
 */
export default function ScreenReaderOnly({ 
  children, 
  className = "" 
}: ScreenReaderOnlyProps) {
  return (
    <span 
      className={`sr-only ${className}`}
      aria-hidden="false"
    >
      {children}
    </span>
  )
}

/**
 * Composant pour masquer du contenu des lecteurs d'écran
 */
export function VisuallyHidden({ 
  children, 
  className = "" 
}: ScreenReaderOnlyProps) {
  return (
    <span 
      className={`sr-only ${className}`}
      aria-hidden="true"
    >
      {children}
    </span>
  )
}

/**
 * Composant pour les descriptions de contexte pour les lecteurs d'écran
 */
export function ScreenReaderDescription({ 
  children, 
  className = "" 
}: ScreenReaderOnlyProps) {
  return (
    <div 
      className={`sr-only ${className}`}
      role="note"
      aria-live="polite"
    >
      {children}
    </div>
  )
}
