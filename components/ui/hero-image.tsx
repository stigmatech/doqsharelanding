"use client";

import OptimizedImage from "./optimized-image";
import { cn } from "@/lib/utils";

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function HeroImage({
  src,
  alt,
  className,
  priority = true,
}: HeroImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      fill
      priority={priority}
      quality={85}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={cn("object-cover", className)}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    />
  );
}
