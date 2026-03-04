"use client";

import OptimizedImage from "./optimized-image";
import { cn } from "@/lib/utils";

interface ComplianceImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ComplianceImage({
  src,
  alt,
  width = 112,
  height = 112,
  className,
}: ComplianceImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={80}
      className={cn("object-contain opacity-50 grayscale dark:invert", className)}
      sizes="(max-width: 768px) 88px, 112px"
    />
  );
}
