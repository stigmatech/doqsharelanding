"use client"

import * as React from "react"
import Link from "next/link"
import { NavigationMenuDemo } from "./navigation"
import AccessibleButton from "./accessibility/accessible-button"
import { LanguageSwitcher } from "./language-switcher"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"

// Logo component for DoQshare
const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-lg">D</span>
      </div>
      <span className="font-bold text-xl">DoQshare</span>
    </div>
  );
};

interface HeaderProps {
  dictionary: any;
  lang: string;
}

export default function Header({ dictionary, lang }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const isMobile = useIsMobile()

  const getLink = (path: string) => path.startsWith("http") || path.startsWith("#") ? path : `/${lang}${path}`;

  // Structure du menu mobile alignée avec le menu web
  const menuCategories = {
    doqshare: {
      title: "DoQshare",
      items: [
        { title: dictionary?.features || "Features", href: "/features" },
        { title: dictionary?.how_it_works || "How it Works", href: "/how-it-works" },
        { title: dictionary?.api || "API", href: "#api" },
        { title: dictionary?.integrations || "Integrations", href: "#integrations" },
        { title: dictionary?.security || "Security", href: "/security" },
        { title: dictionary?.analytics || "Analytics", href: "/analytics" },
      ]
    },
    main: {
      title: null, // Pas de titre pour les liens principaux
      items: [
        { title: dictionary?.data_room || "Data Room", href: "/data-room" },
        { title: dictionary?.pricing || "Pricing", href: "/pricing" },
        { title: dictionary?.enterprise || "Enterprise", href: "/enterprise" },
      ]
    },
    solutions: {
      title: dictionary?.solutions || "Solutions",
      items: [
        { title: dictionary?.enterprise || "Enterprise", href: "/enterprise" },
        { title: dictionary?.startups || "Startups", href: "/startups" },
        { title: dictionary?.freelance || "Freelance", href: "/freelance" },
      ]
    },
    resources: {
      title: dictionary?.resources || "Resources",
      items: [
        { title: dictionary?.documentation || "Documentation", href: "/docs" },
        { title: dictionary?.support || "Support", href: "/help" },
        { title: dictionary?.blog || "Blog", href: "/blog" },
      ]
    }
  }

  return (
    <header 
      id="main-navigation"
      className="relative sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
      role="banner"
    >
      {/* Remove any decorative elements */}
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Logo and Navigation - Center */}
        <div className="flex flex-1 items-center justify-between md:justify-center md:space-x-8">
          <div className="flex items-center space-x-4">
            <Link 
              href={`/${lang}`}
              className="flex items-center space-x-2 no-underline hover:no-underline focus:no-underline cursor-pointer"
              aria-label="DoQshare - Back to home"
            >
              <Logo />
            </Link>
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden min-w-[44px] min-h-[44px] touch-manipulation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
          <nav className="hidden md:flex" role="navigation" aria-label="Main navigation">
            <NavigationMenuDemo dictionary={dictionary} lang={lang} />
          </nav>
        </div>
        
        {/* Auth buttons - Right side */}
        <div className="flex items-center space-x-2" role="group" aria-label="User actions">
          <LanguageSwitcher lang={lang} />
          <AccessibleButton variant="ghost" size="sm" asChild className="hidden sm:inline-flex min-h-[44px]">
            <Link href="https://dashboard.doqshare.com">{dictionary?.sign_in || "Sign In"}</Link>
          </AccessibleButton>
          <AccessibleButton size="sm" asChild className="hidden sm:inline-flex min-h-[44px]">
            <Link href="https://dashboard.doqshare.com">{dictionary?.get_started || "Get Started"}</Link>
          </AccessibleButton>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain">
          <nav className="container py-6" role="navigation" aria-label="Mobile navigation">
            <div className="space-y-6">
              {/* DoQshare section */}
              <div>
                <h3 className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {menuCategories.doqshare.title}
                </h3>
                <ul className="space-y-0.5">
                  {menuCategories.doqshare.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={getLink(item.href)}
                        className="block px-4 py-3.5 text-base font-medium rounded-lg active:bg-accent active:text-accent-foreground transition-colors no-underline min-h-[44px] flex items-center touch-manipulation"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label={item.title}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Main links section */}
              <div>
                <ul className="space-y-0.5">
                  {menuCategories.main.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={getLink(item.href)}
                        className="block px-4 py-3.5 text-base font-medium rounded-lg active:bg-accent active:text-accent-foreground transition-colors no-underline min-h-[44px] flex items-center touch-manipulation"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label={item.title}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions section */}
              <div>
                <h3 className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {menuCategories.solutions.title}
                </h3>
                <ul className="space-y-0.5">
                  {menuCategories.solutions.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={getLink(item.href)}
                        className="block px-4 py-3.5 text-base font-medium rounded-lg active:bg-accent active:text-accent-foreground transition-colors no-underline min-h-[44px] flex items-center touch-manipulation"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label={item.title}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources section */}
              <div>
                <h3 className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {menuCategories.resources.title}
                </h3>
                <ul className="space-y-0.5">
                  {menuCategories.resources.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={getLink(item.href)}
                        className="block px-4 py-3.5 text-base font-medium rounded-lg active:bg-accent active:text-accent-foreground transition-colors no-underline min-h-[44px] flex items-center touch-manipulation"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label={item.title}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Auth buttons */}
              <div className="border-t pt-6 mt-6 space-y-3 px-4">
                <Link
                  href="https://dashboard.doqshare.com"
                  className="block px-6 py-3.5 text-base font-medium rounded-lg active:bg-accent active:text-accent-foreground transition-colors no-underline text-center min-h-[44px] flex items-center justify-center touch-manipulation border"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label={dictionary?.sign_in || "Sign In"}
                >
                  {dictionary?.sign_in || "Sign In"}
                </Link>
                <Link
                  href="https://dashboard.doqshare.com"
                  className="block px-6 py-3.5 text-base font-semibold rounded-lg bg-primary text-primary-foreground active:bg-primary/90 transition-colors no-underline text-center min-h-[44px] flex items-center justify-center touch-manipulation"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label={dictionary?.get_started || "Get Started"}
                >
                  {dictionary?.get_started || "Get Started"}
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
