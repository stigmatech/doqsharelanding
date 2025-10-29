"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu";
import { cn } from "@/lib/utils";

// Logo component for DoqShare
const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-lg">D</span>
      </div>
      <span className="font-bold text-xl">DoqShare</span>
    </div>
  );
};

// List item component for navigation menu
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function ModernNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>DoQshare</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                    <ListItem href="/features" title="Features">
                      Discover all DoqShare features and capabilities.
                    </ListItem>
                    <ListItem href="/how-it-works" title="How it Works">
                      Learn how DoqShare works in 3 simple steps.
                    </ListItem>
                    <ListItem href="#api" title="API">
                      Integrate DoqShare into your applications.
                    </ListItem>
                    <ListItem href="#integrations" title="Integrations">
                      Connect DoqShare to your existing tools.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                    <ListItem href="/enterprise" title="Enterprise">
                      Advanced security and compliance for large organizations.
                    </ListItem>
                    <ListItem href="#startup" title="Startup">
                      Perfect for growing startups and small teams.
                    </ListItem>
                    <ListItem href="#freelance" title="Freelance">
                      Simple and affordable for individual professionals.
                    </ListItem>
                    <ListItem href="#education" title="Education">
                      Special pricing for educational institutions.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="mr-6 flex items-center space-x-2 md:hidden">
              <Logo />
            </Link>
          </div>
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="#signin">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="#getstarted">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
