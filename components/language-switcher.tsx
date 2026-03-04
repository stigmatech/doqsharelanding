"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function LanguageSwitcher({ lang }: { lang: string }) {
  const pathname = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/"
    const segments = pathname.split("/")
    // segments[0] is empty string because pathname starts with /
    // segments[1] is the locale (e.g. "en" or "fr")
    segments[1] = locale
    return segments.join("/")
  }

  return (
    <div className="flex gap-1">
      <Button
        variant={lang === "en" ? "secondary" : "ghost"}
        size="sm"
        className="h-8 w-8 p-0"
        asChild
      >
        <Link href={redirectedPathName("en")}>EN</Link>
      </Button>
      <Button
        variant={lang === "fr" ? "secondary" : "ghost"}
        size="sm"
        className="h-8 w-8 p-0"
        asChild
      >
        <Link href={redirectedPathName("fr")}>FR</Link>
      </Button>
    </div>
  )
}

