"use client";

import OptimizedImage from "./optimized-image";
import { cn } from "@/lib/utils";

interface BlogImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function BlogImage({
  src,
  alt,
  width = 400,
  height = 250,
  className,
  priority = false,
}: BlogImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={80}
      className={cn("object-cover rounded-lg", className)}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      placeholder="blur"
    />
  );
}
