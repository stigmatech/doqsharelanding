"use client";

import { useEffect } from "react";
import { trackScrollDepth } from "@/lib/analytics";

export default function ScrollTracking() {
  useEffect(() => {
    let maxScroll = 0;
    const scrollThresholds = [25, 50, 75, 90, 100];
    const trackedThresholds = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);

      if (scrollPercentage > maxScroll) {
        maxScroll = scrollPercentage;
      }

      // Track scroll depth milestones
      scrollThresholds.forEach((threshold) => {
        if (scrollPercentage >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold);
          trackScrollDepth(threshold);
        }
      });
    };

    // Throttle scroll events
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  return null;
}
