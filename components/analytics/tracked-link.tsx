"use client";

import Link from "next/link";
import { useAnalytics } from "@/hooks/use-analytics";
import { ReactNode } from "react";

interface TrackedLinkProps {
  href: string;
  children: ReactNode;
  trackingAction?: string;
  trackingCategory?: string;
  trackingLabel?: string;
  trackingValue?: number;
  className?: string;
}

export default function TrackedLink({
  href,
  children,
  trackingAction,
  trackingCategory = "navigation",
  trackingLabel,
  trackingValue,
  className,
}: TrackedLinkProps) {
  const { trackCustomEvent } = useAnalytics();

  const handleClick = () => {
    if (trackingAction) {
      trackCustomEvent(trackingAction, trackingCategory, trackingLabel, trackingValue);
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
