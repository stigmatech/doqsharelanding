"use client";

import OptimizedImage from "./optimized-image";
import { cn } from "@workspace/ui/lib/utils";

interface ProductImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  showBadge?: boolean;
  badgeText?: string;
}

export default function ProductImage({
  src,
  alt,
  width = 400,
  height = 300,
  className,
  priority = false,
  showBadge = false,
  badgeText = "Nouveau",
}: ProductImageProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <OptimizedImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={85}
        className="object-cover w-full h-full"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
      />
      {showBadge && (
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
          {badgeText}
        </div>
      )}
    </div>
  );
}
