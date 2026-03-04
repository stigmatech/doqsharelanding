"use client";

import OptimizedImage from "./optimized-image";
import { cn } from "@/lib/utils";

interface GalleryImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  onClick?: () => void;
}

export default function GalleryImage({
  src,
  alt,
  width = 300,
  height = 200,
  className,
  priority = false,
  onClick,
}: GalleryImageProps) {
  return (
    <div 
      className={cn("relative overflow-hidden rounded-lg cursor-pointer group", className)}
      onClick={onClick}
    >
      <OptimizedImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={85}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        placeholder="blur"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
    </div>
  );
}
