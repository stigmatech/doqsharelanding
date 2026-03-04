/**
 * Utilitaires pour l'accessibilité
 */

/**
 * Vérifie si un élément est visible dans le viewport
 */
export function isElementVisible(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

/**
 * Vérifie si un élément est focusable
 */
export function isFocusable(element: HTMLElement): boolean {
  const tabIndex = element.getAttribute("tabindex")
  const isDisabled = element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true"
  const isHidden = element.hasAttribute("hidden") || element.style.display === "none" || element.style.visibility === "hidden"
  
  if (isDisabled || isHidden) return false
  
  // Éléments naturellement focusables
  const focusableTags = ["button", "input", "select", "textarea", "a", "area"]
  if (focusableTags.includes(element.tagName.toLowerCase())) {
    return true
  }
  
  // Éléments avec tabindex >= 0
  if (tabIndex && parseInt(tabIndex) >= 0) {
    return true
  }
  
  return false
}

/**
 * Obtient tous les éléments focusables dans un conteneur
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const elements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  
  return Array.from(elements).filter((element) => 
    isFocusable(element as HTMLElement)
  ) as HTMLElement[]
}

/**
 * Gère le focus dans une liste d'éléments
 */
export function focusNextElement(
  elements: HTMLElement[], 
  currentElement: HTMLElement, 
  loop: boolean = false
): HTMLElement | null {
  const currentIndex = elements.indexOf(currentElement)
  
  if (currentIndex === -1) return elements[0] || null
  
  const nextIndex = currentIndex + 1
  
  if (nextIndex >= elements.length) {
    return loop ? elements[0] || null : null
  }
  
  return elements[nextIndex] || null
}

export function focusPreviousElement(
  elements: HTMLElement[], 
  currentElement: HTMLElement, 
  loop: boolean = false
): HTMLElement | null {
  const currentIndex = elements.indexOf(currentElement)
  
  if (currentIndex === -1) return elements[elements.length - 1] || null
  
  const prevIndex = currentIndex - 1
  
  if (prevIndex < 0) {
    return loop ? elements[elements.length - 1] || null : null
  }
  
  return elements[prevIndex] || null
}

/**
 * Vérifie le contraste des couleurs selon WCAG
 */
export function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)
  
  if (!rgb1 || !rgb2) return 0
  
  const luminance1 = getLuminance(rgb1)
  const luminance2 = getLuminance(rgb2)
  
  const lighter = Math.max(luminance1, luminance2)
  const darker = Math.min(luminance1, luminance2)
  
  return (lighter + 0.05) / (darker + 0.05)
}

export function isContrastSufficient(color1: string, color2: string, level: "AA" | "AAA" = "AA"): boolean {
  const ratio = getContrastRatio(color1, color2)
  return level === "AA" ? ratio >= 4.5 : ratio >= 7
}

/**
 * Convertit une couleur hex en RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1]!, 16),
    g: parseInt(result[2]!, 16),
    b: parseInt(result[3]!, 16)
  } : null
}

/**
 * Calcule la luminance relative d'une couleur
 */
function getLuminance(rgb: { r: number; g: number; b: number }): number {
  const { r, g, b } = rgb
  
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  })
  
  return 0.2126 * (rs || 0) + 0.7152 * (gs || 0) + 0.0722 * (bs || 0)
}

/**
 * Génère des couleurs avec un contraste suffisant
 */
export function generateAccessibleColors(
  baseColor: string, 
  _targetContrast: number = 4.5
): { foreground: string; background: string } {
  const rgb = hexToRgb(baseColor)
  if (!rgb) return { foreground: "#000000", background: "#ffffff" }
  
  const luminance = getLuminance(rgb)
  
  // Si la couleur est sombre, utiliser un texte clair
  if (luminance < 0.5) {
    return { foreground: "#ffffff", background: baseColor }
  } else {
    return { foreground: "#000000", background: baseColor }
  }
}

/**
 * Vérifie si une couleur est accessible
 */
export function isColorAccessible(
  foreground: string, 
  background: string, 
  level: "AA" | "AAA" = "AA"
): boolean {
  return isContrastSufficient(foreground, background, level)
}

/**
 * Génère des styles CSS pour l'accessibilité
 */
export function generateAccessibleStyles(
  baseColor: string,
  options: {
    hoverColor?: string
    focusColor?: string
    activeColor?: string
    disabledColor?: string
  } = {}
) {
  const { hoverColor, focusColor, activeColor, disabledColor } = options
  
  return {
    base: {
      color: baseColor,
      backgroundColor: "transparent"
    },
    hover: {
      color: hoverColor || baseColor,
      backgroundColor: "rgba(0, 0, 0, 0.05)"
    },
    focus: {
      color: focusColor || baseColor,
      backgroundColor: "transparent",
      outline: "2px solid #3b82f6",
      outlineOffset: "2px"
    },
    active: {
      color: activeColor || baseColor,
      backgroundColor: "rgba(0, 0, 0, 0.1)"
    },
    disabled: {
      color: disabledColor || "#9ca3af",
      backgroundColor: "transparent",
      cursor: "not-allowed"
    }
  }
}

/**
 * Gère les attributs ARIA
 */
export function getAriaAttributes(
  element: HTMLElement,
  options: {
    label?: string
    description?: string
    expanded?: boolean
    selected?: boolean
    checked?: boolean
    disabled?: boolean
    required?: boolean
    invalid?: boolean
  } = {}
) {
  const attributes: Record<string, string> = {}
  
  if (options.label) attributes["aria-label"] = options.label
  if (options.description) attributes["aria-describedby"] = options.description
  if (options.expanded !== undefined) attributes["aria-expanded"] = String(options.expanded)
  if (options.selected !== undefined) attributes["aria-selected"] = String(options.selected)
  if (options.checked !== undefined) attributes["aria-checked"] = String(options.checked)
  if (options.disabled !== undefined) attributes["aria-disabled"] = String(options.disabled)
  if (options.required !== undefined) attributes["aria-required"] = String(options.required)
  if (options.invalid !== undefined) attributes["aria-invalid"] = String(options.invalid)
  
  return attributes
}

/**
 * Gère les rôles ARIA
 */
export function getAriaRole(
  element: HTMLElement,
  options: {
    role?: string
    live?: "polite" | "assertive" | "off"
    atomic?: boolean
    busy?: boolean
  } = {}
) {
  const attributes: Record<string, string> = {}
  
  if (options.role) attributes.role = options.role
  if (options.live) attributes["aria-live"] = options.live
  if (options.atomic !== undefined) attributes["aria-atomic"] = String(options.atomic)
  if (options.busy !== undefined) attributes["aria-busy"] = String(options.busy)
  
  return attributes
}

/**
 * Gère les états ARIA
 */
export function getAriaStates(
  element: HTMLElement,
  options: {
    pressed?: boolean
    expanded?: boolean
    selected?: boolean
    checked?: boolean
    disabled?: boolean
    required?: boolean
    invalid?: boolean
  } = {}
) {
  const attributes: Record<string, string> = {}
  
  if (options.pressed !== undefined) attributes["aria-pressed"] = String(options.pressed)
  if (options.expanded !== undefined) attributes["aria-expanded"] = String(options.expanded)
  if (options.selected !== undefined) attributes["aria-selected"] = String(options.selected)
  if (options.checked !== undefined) attributes["aria-checked"] = String(options.checked)
  if (options.disabled !== undefined) attributes["aria-disabled"] = String(options.disabled)
  if (options.required !== undefined) attributes["aria-required"] = String(options.required)
  if (options.invalid !== undefined) attributes["aria-invalid"] = String(options.invalid)
  
  return attributes
}
