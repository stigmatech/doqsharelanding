"use client"

import { useEffect, useRef, useCallback } from "react"

interface FocusManagementOptions {
  trapFocus?: boolean
  restoreFocus?: boolean
  initialFocus?: HTMLElement | null
  onFocusChange?: (element: HTMLElement | null) => void
}

/**
 * Hook pour gérer le focus de manière accessible
 */
export function useFocusManagement(options: FocusManagementOptions = {}) {
  const {
    trapFocus = false,
    restoreFocus = true,
    initialFocus,
    onFocusChange
  } = options

  const containerRef = useRef<HTMLElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)
  const focusHistory = useRef<HTMLElement[]>([])

  // Sauvegarder l'élément actuellement focusé
  useEffect(() => {
    if (restoreFocus) {
      previousActiveElement.current = document.activeElement as HTMLElement
    }
  }, [restoreFocus])

  // Focuser l'élément initial
  useEffect(() => {
    if (initialFocus) {
      initialFocus.focus()
    } else if (containerRef.current) {
      const firstFocusable = containerRef.current.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as HTMLElement
      firstFocusable?.focus()
    }
  }, [initialFocus])

  // Gérer le piégeage du focus
  useEffect(() => {
    if (!trapFocus || !containerRef.current) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        const focusableElements = containerRef.current!.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault()
            lastElement?.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault()
            firstElement?.focus()
          }
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [trapFocus])

  // Gérer les changements de focus
  const handleFocusChange = useCallback((element: HTMLElement | null) => {
    if (onFocusChange) {
      onFocusChange(element)
    }

    // Ajouter à l'historique du focus
    if (element && !focusHistory.current.includes(element)) {
      focusHistory.current.push(element)
      if (focusHistory.current.length > 10) {
        focusHistory.current.shift()
      }
    }
  }, [onFocusChange])

  // Restaurer le focus précédent
  const restorePreviousFocus = useCallback(() => {
    if (restoreFocus && previousActiveElement.current) {
      previousActiveElement.current.focus()
    }
  }, [restoreFocus])

  // Focuser l'élément suivant dans l'historique
  const focusNext = useCallback(() => {
    const currentIndex = focusHistory.current.indexOf(document.activeElement as HTMLElement)
    const nextIndex = (currentIndex + 1) % focusHistory.current.length
    focusHistory.current[nextIndex]?.focus()
  }, [])

  // Focuser l'élément précédent dans l'historique
  const focusPrevious = useCallback(() => {
    const currentIndex = focusHistory.current.indexOf(document.activeElement as HTMLElement)
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusHistory.current.length - 1
    focusHistory.current[prevIndex]?.focus()
  }, [])

  return {
    containerRef,
    restorePreviousFocus,
    focusNext,
    focusPrevious,
    handleFocusChange
  }
}

/**
 * Hook pour gérer le focus dans une liste
 */
export function useListFocusManagement<T>(
  items: T[],
  onSelect: (item: T, index: number) => void,
  options: {
    enabled?: boolean
    loop?: boolean
    orientation?: "horizontal" | "vertical"
  } = {}
) {
  const { enabled = true, loop = false, orientation = "vertical" } = options
  const currentIndexRef = useRef<number>(0)

  const focusItem = useCallback((index: number) => {
    const element = document.querySelector(`[data-index="${index}"]`) as HTMLElement
    element?.focus()
    currentIndexRef.current = index
  }, [])

  const focusNext = useCallback(() => {
    if (!enabled) return

    const currentIndex = currentIndexRef.current
    let newIndex = currentIndex

    if (orientation === "vertical") {
      newIndex = loop ? (currentIndex + 1) % items.length : Math.min(currentIndex + 1, items.length - 1)
    } else {
      newIndex = loop ? (currentIndex + 1) % items.length : Math.min(currentIndex + 1, items.length - 1)
    }

    focusItem(newIndex)
  }, [enabled, loop, orientation, items.length, focusItem])

  const focusPrevious = useCallback(() => {
    if (!enabled) return

    const currentIndex = currentIndexRef.current
    let newIndex = currentIndex

    if (orientation === "vertical") {
      newIndex = loop ? (currentIndex - 1 + items.length) % items.length : Math.max(currentIndex - 1, 0)
    } else {
      newIndex = loop ? (currentIndex - 1 + items.length) % items.length : Math.max(currentIndex - 1, 0)
    }

    focusItem(newIndex)
  }, [enabled, loop, orientation, items.length, focusItem])

  const focusFirst = useCallback(() => {
    focusItem(0)
  }, [focusItem])

  const focusLast = useCallback(() => {
    focusItem(items.length - 1)
  }, [items.length, focusItem])

  const selectCurrent = useCallback(() => {
    if (enabled && items[currentIndexRef.current]) {
      onSelect(items[currentIndexRef.current]!, currentIndexRef.current)
    }
  }, [enabled, items, onSelect])

  return {
    focusItem,
    focusNext,
    focusPrevious,
    focusFirst,
    focusLast,
    selectCurrent
  }
}
