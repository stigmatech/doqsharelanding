"use client"

import { useEffect, useState, createContext, useContext, ReactNode } from "react"

interface AnnouncerContextType {
  announce: (message: string, priority?: "polite" | "assertive") => void
  clear: () => void
}

const AnnouncerContext = createContext<AnnouncerContextType | null>(null)

interface AnnouncerProviderProps {
  children: ReactNode
}

/**
 * Provider pour gérer les annonces aux lecteurs d'écran
 */
export function AnnouncerProvider({ children }: AnnouncerProviderProps) {
  const [message, setMessage] = useState("")
  const [priority, setPriority] = useState<"polite" | "assertive">("polite")

  const announce = (newMessage: string, newPriority: "polite" | "assertive" = "polite") => {
    setMessage(newMessage)
    setPriority(newPriority)
  }

  const clear = () => {
    setMessage("")
  }

  return (
    <AnnouncerContext.Provider value={{ announce, clear }}>
      {children}
      <div
        aria-live={priority}
        aria-atomic="true"
        className="sr-only"
        role="status"
      >
        {message}
      </div>
    </AnnouncerContext.Provider>
  )
}

/**
 * Hook pour utiliser l'annonceur
 */
export function useAnnouncer() {
  const context = useContext(AnnouncerContext)
  if (!context) {
    throw new Error("useAnnouncer must be used within an AnnouncerProvider")
  }
  return context
}

/**
 * Composant pour annoncer des messages aux lecteurs d'écran
 */
interface AnnouncerProps {
  message: string
  priority?: "polite" | "assertive"
  clearAfter?: number
}

export default function Announcer({ 
  message, 
  priority = "polite", 
  clearAfter 
}: AnnouncerProps) {
  const { announce, clear } = useAnnouncer()

  useEffect(() => {
    if (message) {
      announce(message, priority)
      
      if (clearAfter) {
        const timer = setTimeout(clear, clearAfter)
        return () => clearTimeout(timer)
      }
    }
  }, [message, priority, clearAfter, announce, clear])

  return null
}

/**
 * Composant pour annoncer des changements d'état
 */
interface StatusAnnouncerProps {
  status: string
  loading?: boolean
  error?: string
  success?: string
}

export function StatusAnnouncer({ 
  status, 
  loading = false, 
  error, 
  success 
}: StatusAnnouncerProps) {
  const { announce } = useAnnouncer()

  useEffect(() => {
    if (loading) {
      announce("Chargement en cours...", "polite")
    } else if (error) {
      announce(`Erreur: ${error}`, "assertive")
    } else if (success) {
      announce(`Succès: ${success}`, "polite")
    } else if (status) {
      announce(status, "polite")
    }
  }, [status, loading, error, success, announce])

  return null
}
