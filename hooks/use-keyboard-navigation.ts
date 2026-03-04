"use client"

import { useEffect, useCallback } from "react"

interface KeyboardNavigationOptions {
  onEnter?: () => void
  onEscape?: () => void
  onArrowUp?: () => void
  onArrowDown?: () => void
  onArrowLeft?: () => void
  onArrowRight?: () => void
  onSpace?: () => void
  onTab?: () => void
  onShiftTab?: () => void
  onHome?: () => void
  onEnd?: () => void
  onPageUp?: () => void
  onPageDown?: () => void
  enabled?: boolean
}

/**
 * Hook pour gérer la navigation au clavier
 */
export function useKeyboardNavigation(options: KeyboardNavigationOptions = {}) {
  const {
    onEnter,
    onEscape,
    onArrowUp,
    onArrowDown,
    onArrowLeft,
    onArrowRight,
    onSpace,
    onTab,
    onShiftTab,
    onHome,
    onEnd,
    onPageUp,
    onPageDown,
    enabled = true
  } = options

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!enabled) return

    // Empêcher le comportement par défaut pour les touches personnalisées
    const preventDefault = (callback?: () => void) => {
      if (callback) {
        event.preventDefault()
        event.stopPropagation()
        callback()
      }
    }

    switch (event.key) {
      case "Enter":
        preventDefault(onEnter)
        break
      case "Escape":
        preventDefault(onEscape)
        break
      case "ArrowUp":
        preventDefault(onArrowUp)
        break
      case "ArrowDown":
        preventDefault(onArrowDown)
        break
      case "ArrowLeft":
        preventDefault(onArrowLeft)
        break
      case "ArrowRight":
        preventDefault(onArrowRight)
        break
      case " ":
        preventDefault(onSpace)
        break
      case "Tab":
        if (event.shiftKey) {
          preventDefault(onShiftTab)
        } else {
          preventDefault(onTab)
        }
        break
      case "Home":
        preventDefault(onHome)
        break
      case "End":
        preventDefault(onEnd)
        break
      case "PageUp":
        preventDefault(onPageUp)
        break
      case "PageDown":
        preventDefault(onPageDown)
        break
    }
  }, [
    enabled,
    onEnter,
    onEscape,
    onArrowUp,
    onArrowDown,
    onArrowLeft,
    onArrowRight,
    onSpace,
    onTab,
    onShiftTab,
    onHome,
    onEnd,
    onPageUp,
    onPageDown
  ])

  useEffect(() => {
    if (enabled) {
      document.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown, enabled])
}

/**
 * Hook pour gérer la navigation au clavier dans une liste
 */
export function useListKeyboardNavigation<T>(
  items: T[],
  onSelect: (item: T, index: number) => void,
  options: {
    enabled?: boolean
    loop?: boolean
    orientation?: "horizontal" | "vertical"
  } = {}
) {
  const { enabled = true, loop = false, orientation = "vertical" } = options

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!enabled) return

    const currentIndex = items.findIndex((_, index) => {
      const element = document.querySelector(`[data-index="${index}"]`)
      return element === document.activeElement
    })

    if (currentIndex === -1) return

    let newIndex = currentIndex

    switch (event.key) {
      case "ArrowDown":
        if (orientation === "vertical") {
          event.preventDefault()
          newIndex = loop ? (currentIndex + 1) % items.length : Math.min(currentIndex + 1, items.length - 1)
        }
        break
      case "ArrowUp":
        if (orientation === "vertical") {
          event.preventDefault()
          newIndex = loop ? (currentIndex - 1 + items.length) % items.length : Math.max(currentIndex - 1, 0)
        }
        break
      case "ArrowRight":
        if (orientation === "horizontal") {
          event.preventDefault()
          newIndex = loop ? (currentIndex + 1) % items.length : Math.min(currentIndex + 1, items.length - 1)
        }
        break
      case "ArrowLeft":
        if (orientation === "horizontal") {
          event.preventDefault()
          newIndex = loop ? (currentIndex - 1 + items.length) % items.length : Math.max(currentIndex - 1, 0)
        }
        break
      case "Home":
        event.preventDefault()
        newIndex = 0
        break
      case "End":
        event.preventDefault()
        newIndex = items.length - 1
        break
      case "Enter":
      case " ":
        event.preventDefault()
        onSelect(items[currentIndex]!, currentIndex)
        return
    }

    if (newIndex !== currentIndex) {
      const newElement = document.querySelector(`[data-index="${newIndex}"]`) as HTMLElement
      newElement?.focus()
    }
  }, [items, onSelect, enabled, loop, orientation])

  useEffect(() => {
    if (enabled) {
      document.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown, enabled])
}
