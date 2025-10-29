"use client";

import { Button } from "@workspace/ui/components/button";
import { ComponentProps } from "react";
import { useAnalytics } from "@/hooks/use-analytics";
import { ReactNode } from "react";

interface TrackedButtonProps extends ComponentProps<typeof Button> {
  children: ReactNode;
  action?: string;
  category?: string;
  label?: string;
  value?: number;
  onClick?: () => void;
}

export default function TrackedButton({
  children,
  action,
  category = "engagement",
  label,
  value,
  onClick,
  asChild,
  ...props
}: TrackedButtonProps) {
  const { trackCustomEvent } = useAnalytics();

  const handleClick = () => {
    if (action) {
      trackCustomEvent(action, category, label, value);
    }
    if (onClick) {
      onClick();
    }
  };

  // Si asChild est utilisé, on ne peut pas avoir plusieurs enfants
  if (asChild) {
    return (
      <Button onClick={handleClick} {...props}>
        {children}
      </Button>
    );
  }

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}
