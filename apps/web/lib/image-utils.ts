// Utilitaires pour la gestion et l'optimisation des images

// Génération de blur data URL pour les placeholders
export function generateBlurDataURL(width: number = 10, height: number = 10): string {
  const canvas = typeof window !== 'undefined' ? document.createElement('canvas') : null;
  if (!canvas) {
    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";
  }
  
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";
  }
  
  // Créer un gradient simple
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f3f4f6');
  gradient.addColorStop(1, '#e5e7eb');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL('image/jpeg', 0.1);
}

// Configuration des tailles d'images responsive
export const IMAGE_SIZES = {
  hero: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  logo: "(max-width: 768px) 80px, 120px",
  compliance: "(max-width: 768px) 88px, 112px",
  thumbnail: "(max-width: 768px) 150px, 200px",
  card: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw",
  avatar: "40px",
} as const;

// Configuration de qualité par type d'image
export const IMAGE_QUALITY = {
  hero: 85,
  logo: 90,
  compliance: 80,
  thumbnail: 75,
  card: 80,
  avatar: 95,
} as const;

// Vérification du support WebP
export function supportsWebP(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(false);
      return;
    }
    
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
}

// Génération d'URLs d'images optimisées
export function getOptimizedImageUrl(
  src: string,
  _width: number,
  _height?: number,
  _quality: number = 75
): string {
  // Si c'est une image externe, retourner l'URL telle quelle
  if (src.startsWith('http')) {
    return src;
  }
  
  // Pour les images locales, Next.js s'occupe de l'optimisation automatiquement
  return src;
}

// Préchargement d'images critiques
export function preloadImage(src: string, priority: boolean = false): void {
  if (typeof window === 'undefined' || !priority) return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
}

// Lazy loading avec intersection observer
export function createImageObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver | null {
  if (typeof window === 'undefined') return null;
  
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  });
}

// Configuration des images par défaut
export const DEFAULT_IMAGE_CONFIG = {
  quality: 75,
  placeholder: 'blur' as const,
  loading: 'lazy' as const,
  sizes: IMAGE_SIZES.card,
} as const;
