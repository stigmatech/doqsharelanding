"use client";

import OptimizedImage from "./optimized-image";
import { cn } from "@/lib/utils";

interface BackgroundImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  overlay?: boolean;
  overlayOpacity?: number;
}

export default function BackgroundImage({
  src,
  alt,
  className,
  priority = false,
  overlay = false,
  overlayOpacity = 0.5,
}: BackgroundImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={80}
        className="object-cover"
        sizes="100vw"
        placeholder="blur"
      />
      {overlay && (
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  );
}
