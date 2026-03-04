"use client"

import { useEffect, useRef, ReactNode } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import FocusTrap from "./focus-trap"
import { useAnnouncer } from "./announcer"

interface AccessibleModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
  description?: string
  size?: "sm" | "md" | "lg" | "xl" | "full"
  className?: string
}

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-full"
}

export default function AccessibleModal({
  isOpen,
  onClose,
  title,
  children,
  description,
  size = "md",
  className = ""
}: AccessibleModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const { announce } = useAnnouncer()

  useEffect(() => {
    if (isOpen) {
      // Annoncer l'ouverture de la modal
      announce(`Modal ouverte: ${title}`, "polite")
      
      // Empêcher le scroll du body
      document.body.style.overflow = "hidden"
      
      // Focuser la modal
      setTimeout(() => {
        modalRef.current?.focus()
      }, 100)
    } else {
      // Restaurer le scroll du body
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen, title, announce])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby={description ? "modal-description" : undefined}
    >
      <FocusTrap active={isOpen} returnFocus={true}>
        <div
          ref={modalRef}
          className={`
            relative w-full ${sizeClasses[size]} bg-white dark:bg-slate-800 
            rounded-lg shadow-xl border border-slate-200 dark:border-slate-700
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            ${className}
          `}
          tabIndex={-1}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
            <div>
              <h2 id="modal-title" className="text-lg font-semibold text-slate-900 dark:text-white">
                {title}
              </h2>
              {description && (
                <p id="modal-description" className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {description}
                </p>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
              aria-label="Fermer la modal"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-6">
            {children}
          </div>
        </div>
      </FocusTrap>

      {/* Overlay pour fermer en cliquant */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
        aria-hidden="true"
      />
    </div>,
    document.body
  )
}
