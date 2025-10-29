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
} from "@workspace/ui/components/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Features",
    href: "/features",
    description:
      "Discover all DoqShare features and capabilities for secure document sharing.",
  },
  {
    title: "How it Works",
    href: "/how-it-works",
    description:
      "Learn how DoqShare works in 3 simple steps.",
  },
  {
    title: "API",
    href: "#api",
    description:
      "Integrate DoqShare into your applications with our REST API.",
  },
  {
    title: "Integrations",
    href: "#integrations",
    description: "Connect DoqShare to your existing tools and workflows.",
  },
  {
    title: "Security",
    href: "#security",
    description:
      "Enterprise-grade security with encryption and compliance features.",
  },
  {
    title: "Analytics",
    href: "#analytics",
    description:
      "Track document engagement with detailed analytics and insights.",
  },
]

export function NavigationMenuDemo() {
  const isMobile = useIsMobile()

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
        {/* Home *
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                    href="/"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">
                      DoqShare
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Secure document sharing made simple for teams and enterprises.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/features" title="Features">
                Discover all DoqShare features and capabilities.
              </ListItem>
              <ListItem href="/how-it-works" title="How it Works">
                Learn how DoqShare works in 3 simple steps.
              </ListItem>
              <ListItem href="/enterprise" title="Enterprise">
                Advanced security and compliance for large organizations.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
*/}
        <NavigationMenuItem>
          <NavigationMenuTrigger>DoQshare</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/data-room">Data Room</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/pricing">Pricing</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/enterprise">Enterprise</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/enterprise">
                    <div className="font-medium">Enterprise</div>
                    <div className="text-muted-foreground">
                      Advanced security and compliance for large organizations.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#startup">
                    <div className="font-medium">Startup</div>
                    <div className="text-muted-foreground">
                      Perfect for growing startups and small teams.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#freelance">
                    <div className="font-medium">Freelance</div>
                    <div className="text-muted-foreground">
                      Simple and affordable for individual professionals.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#documentation">Documentation</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#support">Support</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#blog">Blog</Link>
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