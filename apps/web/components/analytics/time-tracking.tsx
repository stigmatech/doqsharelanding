"use client";

import { useEffect } from "react";
import { trackTimeOnPage } from "@/lib/analytics";

interface TimeTrackingProps {
  pageName: string;
}

export default function TimeTracking({ pageName }: TimeTrackingProps) {
  useEffect(() => {
    const startTime = Date.now();
    let timeInterval: NodeJS.Timeout;

    // Track time on page every 30 seconds
    timeInterval = setInterval(() => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackTimeOnPage(timeSpent);
    }, 30000);

    // Track final time when user leaves the page
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackTimeOnPage(timeSpent);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearInterval(timeInterval);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pageName]);

  return null;
}
