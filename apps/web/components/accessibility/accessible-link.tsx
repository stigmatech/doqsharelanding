"use client"

import { forwardRef, ReactNode } from "react"
import Link, { LinkProps } from "next/link"
import { cn } from "@workspace/ui/lib/utils"

interface AccessibleLinkProps extends LinkProps {
  children: ReactNode
  external?: boolean
  description?: string
  ariaDescribedBy?: string
  className?: string
  target?: string
  rel?: string
}

/**
 * Lien accessible avec support complet des lecteurs d'écran
 */
const AccessibleLink = forwardRef<HTMLAnchorElement, AccessibleLinkProps>(
  ({ 
    children, 
    external = false,
    description,
    ariaDescribedBy,
    className,
    target,
    rel,
    ...props 
  }, ref) => {
    const isExternal = external || target === "_blank"
    const linkRel = isExternal ? "noopener noreferrer" : rel
    const linkTarget = isExternal ? "_blank" : target

    return (
      <Link
        ref={ref}
        target={linkTarget}
        rel={linkRel}
        className={cn(
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
          "transition-all duration-200",
          "underline-offset-4 hover:underline",
          className
        )}
        aria-describedby={description ? undefined : ariaDescribedBy}
        {...props}
      >
        {children}
        {isExternal && (
          <span className="sr-only"> (ouvre dans un nouvel onglet)</span>
        )}
        {description && (
          <span id={ariaDescribedBy} className="sr-only">
            {description}
          </span>
        )}
      </Link>
    )
  }
)

AccessibleLink.displayName = "AccessibleLink"

export default AccessibleLink
