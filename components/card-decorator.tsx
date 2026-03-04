"use client";

import { ReactNode } from "react";

interface CardDecoratorProps {
  children: ReactNode;
}

export default function CardDecorator({ children }: CardDecoratorProps) {
  return (
    <div className="relative mx-auto size-36 duration-500 ease-in transition-all bg-blue-50 [--color-border:color-mix(in_oklab,var(--color-zinc-950)_10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)_20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)_15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)_20%,transparent)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="bg-blue-50 absolute inset-0"></div>
      <div className="bg-blue-50 absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
        {children}
      </div>
    </div>
  );
}

