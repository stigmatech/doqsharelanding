"use client"

import * as React from "react"
import Link from "next/link"
import { NavigationMenuDemo } from "./navigation"
import AccessibleButton from "./accessibility/accessible-button"
import AccessibleLink from "./accessibility/accessible-link"

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

export default function Header() {
  return (
    <header 
      id="main-navigation"
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Logo and Navigation - Center */}
        <div className="flex flex-1 items-center justify-center space-x-8">
          <AccessibleLink 
            href="/" 
            className="flex items-center space-x-2"
            aria-label="DoqShare - Back to home"
          >
            <Logo />
          </AccessibleLink>
          <nav className="hidden md:flex" role="navigation" aria-label="Main navigation">
            <NavigationMenuDemo />
          </nav>
        </div>
        
        {/* Auth buttons - Right side */}
        <div className="flex items-center space-x-2" role="group" aria-label="User actions">
          <AccessibleButton variant="ghost" size="sm" asChild>
            <Link href="https://dashboard.doqshare.com">Sign In</Link>
          </AccessibleButton>
          <AccessibleButton size="sm" asChild>
            <Link href="https://dashboard.doqshare.com">Get Started</Link>
          </AccessibleButton>
        </div>
      </div>
    </header>
  )
}