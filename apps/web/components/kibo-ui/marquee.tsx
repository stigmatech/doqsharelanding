"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Marquee = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    pauseOnHover?: boolean;
  }
>(({ className, pauseOnHover = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex overflow-hidden [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
      pauseOnHover && "hover:[animation-play-state:paused]",
      className
    )}
    {...props}
  />
));
Marquee.displayName = "Marquee";

const MarqueeContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    pauseOnHover?: boolean;
  }
>(({ className, pauseOnHover = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex min-w-full shrink-0 animate-marquee flex-row items-center [animation-duration:var(--duration)] [animation-play-state:running]",
      pauseOnHover && "group-hover:[animation-play-state:paused]",
      className
    )}
    {...props}
  />
));
MarqueeContent.displayName = "MarqueeContent";

const MarqueeItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-center", className)}
    {...props}
  />
));
MarqueeItem.displayName = "MarqueeItem";

const MarqueeFade = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    side: "left" | "right";
  }
>(({ className, side, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "pointer-events-none absolute top-0 z-10 h-full w-20",
      side === "left" && "left-0 bg-gradient-to-r from-background to-transparent",
      side === "right" && "right-0 bg-gradient-to-l from-background to-transparent",
      className
    )}
    {...props}
  />
));
MarqueeFade.displayName = "MarqueeFade";

export { Marquee, MarqueeContent, MarqueeItem, MarqueeFade };
