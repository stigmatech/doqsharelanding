"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface SkipLink {
  id: string
  label: string
  href: string
  target?: string
}

const skipLinks: SkipLink[] = [
  {
    id: "skip-to-main",
    label: "Aller au contenu principal",
    href: "#main-content"
  },
  {
    id: "skip-to-navigation",
    label: "Aller à la navigation",
    href: "#main-navigation"
  },
  {
    id: "skip-to-search",
    label: "Aller à la recherche",
    href: "#search"
  },
  {
    id: "skip-to-footer",
    label: "Aller au pied de page",
    href: "#footer"
  }
]

export default function SkipLinks() {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Afficher les liens de saut avec Tab
      if (event.key === "Tab" && !isVisible) {
        setIsVisible(true)
      }
      
      // Masquer les liens de saut avec Escape
      if (event.key === "Escape" && isVisible) {
        setIsVisible(false)
      }
    }

    const handleClick = () => {
      // Masquer les liens de saut après un clic
      setTimeout(() => setIsVisible(false), 100)
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("click", handleClick)
    }
  }, [isVisible])

  const handleSkipLinkClick = (href: string, target?: string) => {
    if (target === "_blank") {
      return // Laisser le comportement par défaut pour les liens externes
    }

    // Navigation interne
    if (href.startsWith("#")) {
      const element = document.querySelector(href) as HTMLElement
      if (element) {
        element.focus()
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else if (href.startsWith("/")) {
      router.push(href)
    }
  }

  if (!isVisible) return null

  return (
    <div 
      className="fixed top-0 left-0 z-50 w-full bg-slate-900 text-white p-2 shadow-lg"
      role="navigation"
      aria-label="Liens de saut"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-2">
          {skipLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              target={link.target}
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              onClick={(e) => {
                e.preventDefault()
                handleSkipLinkClick(link.href, link.target)
              }}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setIsVisible(false)}
            className="inline-block px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white text-sm font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="Masquer les liens de saut"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  )
}
