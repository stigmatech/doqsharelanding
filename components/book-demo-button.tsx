"use client";

import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface BookDemoButtonProps {
  className?: string;
  variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
  calLink?: string;
  calNamespace?: string;
  ariaLabel?: string;
  dictionary?: {
    common?: {
      book_demo?: string;
      schedule_demo?: string;
    };
  };
}

export function BookDemoButton({
  className,
  variant = "outline",
  size = "lg",
  children,
  calLink = "stigmatech/doqshare",
  calNamespace = "doqshare",
  ariaLabel,
  dictionary,
}: BookDemoButtonProps) {
  const defaultChildren = dictionary?.common?.book_demo || "Book a Demo";
  const defaultAriaLabel = dictionary?.common?.schedule_demo || "Schedule a demo with DoQshare";
  const [calReady, setCalReady] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: calNamespace });
        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
        });
        setCalReady(true);
      } catch (error) {
        console.error("Failed to load Cal.com", error);
      }
    })();
  }, [calNamespace]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (calReady) {
      // Cal.com will handle the click via data attributes
      return;
    }
    // Fallback: open Cal.com link directly if not ready
    e.preventDefault();
    window.open(`https://cal.com/${calLink}`, "_blank");
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(className)}
      onClick={handleClick}
      data-cal-namespace={calNamespace}
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
      aria-label={ariaLabel || defaultAriaLabel}
    >
      {children || defaultChildren}
    </Button>
  );
}

