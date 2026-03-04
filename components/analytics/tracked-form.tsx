"use client";

import { useAnalytics } from "@/hooks/use-analytics";
import { ReactNode, FormEvent } from "react";

interface TrackedFormProps {
  children: ReactNode;
  formType: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  className?: string;
}

export default function TrackedForm({
  children,
  formType,
  onSubmit,
  className,
}: TrackedFormProps) {
  const { trackContactAction } = useAnalytics();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    trackContactAction(formType);
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
}
