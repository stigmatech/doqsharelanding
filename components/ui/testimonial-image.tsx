"use client";

import OptimizedImage from "./optimized-image";
import { cn } from "@/lib/utils";

interface TestimonialImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function TestimonialImage({
  src,
  alt,
  width = 80,
  height = 80,
  className,
  priority = false,
}: TestimonialImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={90}
      className={cn("object-cover rounded-full", className)}
      sizes="(max-width: 768px) 60px, 80px"
      placeholder="blur"
    />
  );
}
