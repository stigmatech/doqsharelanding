"use client";

import OptimizedImage from "./optimized-image";
import { cn } from "@workspace/ui/lib/utils";

interface LogoImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function LogoImage({
  src,
  alt,
  width = 120,
  height = 40,
  className,
  priority = false,
}: LogoImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={90}
      className={cn("object-contain", className)}
      sizes="(max-width: 768px) 80px, 120px"
    />
  );
}
