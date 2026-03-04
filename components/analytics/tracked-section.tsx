"use client";

import { useAnalytics } from "@/hooks/use-analytics";
import { ReactNode, useEffect, useRef } from "react";

interface TrackedSectionProps {
  children: ReactNode;
  sectionName: string;
  className?: string;
}

export default function TrackedSection({
  children,
  sectionName,
  className,
}: TrackedSectionProps) {
  const { trackCustomEvent } = useAnalytics();
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            trackCustomEvent("section_view", "engagement", sectionName);
            hasTracked.current = true;
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionName, trackCustomEvent]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
