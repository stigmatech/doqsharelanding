"use client";

import OptimizedImage from "./optimized-image";
import { cn } from "@workspace/ui/lib/utils";

interface AvatarImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function AvatarImage({
  src,
  alt,
  width = 40,
  height = 40,
  className,
  priority = false,
}: AvatarImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={95}
      className={cn("object-cover rounded-full", className)}
      sizes="40px"
      placeholder="blur"
    />
  );
}
