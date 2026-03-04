"use client"

import * as React from "react"
import Link from "next/link"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

interface NavigationMenuDemoProps {
  dictionary: any;
  lang: string;
}

export function NavigationMenuDemo({ dictionary, lang }: NavigationMenuDemoProps) {
  const isMobile = useIsMobile()

  // Helper to simplify links with lang
  const getLink = (path: string) => path.startsWith("http") || path.startsWith("#") ? path : `/${lang}${path}`;

  const components: { title: string; href: string; description: string }[] = [
    {
      title: dictionary?.features || "Features",
      href: "/features",
      description: lang === 'fr' 
        ? "Découvrez toutes les fonctionnalités et capacités de DoQshare pour le partage sécurisé de documents."
        : "Discover all DoQshare features and capabilities for secure document sharing.",
    },
    {
      title: dictionary?.how_it_works || "How it Works",
      href: "/how-it-works",
      description: lang === 'fr'
        ? "Apprenez comment DoQshare fonctionne en 3 étapes simples."
        : "Learn how DoQshare works in 3 simple steps.",
    },
    {
      title: dictionary?.api || "API",
      href: "#api",
      description: lang === 'fr'
        ? "Intégrez DoQshare dans vos applications avec notre API REST."
        : "Integrate DoQshare into your applications with our REST API.",
    },
    {
      title: dictionary?.integrations || "Integrations",
      href: "#integrations",
      description: lang === 'fr'
        ? "Connectez DoQshare à vos outils et flux de travail existants."
        : "Connect DoQshare to your existing tools and workflows.",
    },
    {
      title: dictionary?.security || "Security",
      href: "/security",
      description: lang === 'fr'
        ? "Sécurité de niveau entreprise avec chiffrement et fonctionnalités de conformité."
        : "Enterprise-grade security with encryption and compliance features.",
    },
    {
      title: dictionary?.analytics || "Analytics",
      href: "/analytics",
      description: lang === 'fr'
        ? "Suivez l'engagement documentaire avec des analyses et des informations détaillées."
        : "Track document engagement with detailed analytics and insights.",
    },
  ]

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger>DoQshare</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={getLink(component.href)}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href={getLink("/data-room")}>{dictionary?.data_room || "Data Room"}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href={getLink("/pricing")}>{dictionary?.pricing || "Pricing"}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href={getLink("/enterprise")}>{dictionary?.enterprise || "Enterprise"}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>{dictionary?.solutions || "Solutions"}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href={getLink("/enterprise")}>
                    <div className="font-medium">{dictionary?.enterprise || "Enterprise"}</div>
                    <div className="text-muted-foreground">
                      {lang === 'fr' ? "Sécurité avancée et conformité pour les grandes organisations." : "Advanced security and compliance for large organizations."}
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href={getLink("/startups")}>
                    <div className="font-medium">{dictionary?.startups || "Startups"}</div>
                    <div className="text-muted-foreground">
                      {lang === 'fr' ? "Parfait pour les startups en croissance et les petites équipes." : "Perfect for growing startups and small teams."}
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href={getLink("/freelance")}>
                    <div className="font-medium">{dictionary?.freelance || "Freelance"}</div>
                    <div className="text-muted-foreground">
                      {lang === 'fr' ? "Simple et abordable pour les professionnels indépendants." : "Simple and affordable for individual professionals."}
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>{dictionary?.resources || "Resources"}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href={getLink("/docs")}>{dictionary?.documentation || "Documentation"}</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href={getLink("/help")}>{dictionary?.support || "Support"}</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href={getLink("/blog")}>{dictionary?.blog || "Blog"}</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div>
            <div className="text-sm leading-none font-medium">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
