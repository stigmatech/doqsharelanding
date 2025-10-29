# Optimisation des Images avec Next.js

## Vue d'ensemble

Ce document explique comment optimiser les images sur le site DoqShare en utilisant `next/image` et les composants personnalisés.

## Composants d'images disponibles

### 1. OptimizedImage (Base)
Composant de base avec toutes les fonctionnalités d'optimisation.

```tsx
import OptimizedImage from "@/components/ui/optimized-image";

<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero image"
  width={800}
  height={600}
  priority={true}
  quality={85}
  className="rounded-lg"
/>
```

### 2. HeroImage
Pour les images de héros (priorité élevée).

```tsx
import HeroImage from "@/components/ui/hero-image";

<HeroImage
  src="/images/hero.jpg"
  alt="Hero image"
  priority={true}
/>
```

### 3. LogoImage
Pour les logos d'entreprises.

```tsx
import LogoImage from "@/components/ui/logo-image";

<LogoImage
  src="/images/logo.svg"
  alt="Company logo"
  width={120}
  height={40}
/>
```

### 4. ComplianceImage
Pour les images de conformité (GDPR, HIPAA, etc.).

```tsx
import ComplianceImage from "@/components/ui/compliance-image";

<ComplianceImage
  src="/images/gdpr.svg"
  alt="GDPR compliant"
  width={112}
  height={112}
/>
```

### 5. BlogImage
Pour les images d'articles de blog.

```tsx
import BlogImage from "@/components/ui/blog-image";

<BlogImage
  src="/images/blog-post.jpg"
  alt="Blog post image"
  width={400}
  height={250}
/>
```

### 6. AvatarImage
Pour les avatars d'utilisateurs.

```tsx
import AvatarImage from "@/components/ui/avatar-image";

<AvatarImage
  src="/images/avatar.jpg"
  alt="User avatar"
  width={40}
  height={40}
/>
```

### 7. TestimonialImage
Pour les images de témoignages.

```tsx
import TestimonialImage from "@/components/ui/testimonial-image";

<TestimonialImage
  src="/images/customer.jpg"
  alt="Customer testimonial"
  width={80}
  height={80}
/>
```

### 8. GalleryImage
Pour les images de galerie avec effet hover.

```tsx
import GalleryImage from "@/components/ui/gallery-image";

<GalleryImage
  src="/images/gallery-1.jpg"
  alt="Gallery image"
  width={300}
  height={200}
  onClick={() => openModal()}
/>
```

### 9. ProductImage
Pour les images de produits avec badges.

```tsx
import ProductImage from "@/components/ui/product-image";

<ProductImage
  src="/images/product.jpg"
  alt="Product image"
  width={400}
  height={300}
  showBadge={true}
  badgeText="Nouveau"
/>
```

### 10. BackgroundImage
Pour les images de fond avec overlay.

```tsx
import BackgroundImage from "@/components/ui/background-image";

<BackgroundImage
  src="/images/background.jpg"
  alt="Background image"
  overlay={true}
  overlayOpacity={0.5}
/>
```

## Configuration Next.js

### next.config.mjs
```javascript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'deifkwefumgah.cloudfront.net',
        pathname: '/shadcnblocks/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
  },
}
```

## Bonnes pratiques

### 1. Priorité des images
- **Hero images** : `priority={true}`
- **Above the fold** : `priority={true}`
- **Autres images** : `priority={false}` (lazy loading)

### 2. Tailles d'images
- **Hero** : 1920x1080px
- **Cards** : 400x300px
- **Avatars** : 40x40px
- **Logos** : 120x40px
- **Compliance** : 112x112px

### 3. Qualité
- **Hero** : 85%
- **Logos** : 90%
- **Avatars** : 95%
- **Autres** : 75-80%

### 4. Formats
- **WebP** : Format moderne, meilleure compression
- **AVIF** : Format le plus récent, compression maximale
- **Fallback** : JPEG/PNG pour compatibilité

### 5. Lazy Loading
- **Automatique** : Toutes les images sauf priority
- **Intersection Observer** : Chargement quand visible
- **Placeholder** : Blur ou couleur de fond

## Utilitaires

### image-utils.ts
```typescript
import { generateBlurDataURL, IMAGE_SIZES, IMAGE_QUALITY } from "@/lib/image-utils";

// Générer un placeholder blur
const blurDataURL = generateBlurDataURL(10, 10);

// Utiliser les tailles prédéfinies
const sizes = IMAGE_SIZES.hero;

// Utiliser les qualités prédéfinies
const quality = IMAGE_QUALITY.hero;
```

## Performance

### Métriques à surveiller
- **LCP** (Largest Contentful Paint) : < 2.5s
- **CLS** (Cumulative Layout Shift) : < 0.1
- **FID** (First Input Delay) : < 100ms

### Optimisations
1. **Compression** : WebP/AVIF
2. **Lazy loading** : Chargement différé
3. **Responsive** : Tailles adaptées
4. **Caching** : TTL approprié
5. **CDN** : Distribution globale

## Débogage

### Outils
- **Lighthouse** : Audit de performance
- **WebPageTest** : Analyse détaillée
- **Chrome DevTools** : Network tab

### Vérifications
1. Images WebP/AVIF servies
2. Lazy loading fonctionnel
3. Tailles responsive correctes
4. Placeholders affichés
5. Erreurs de chargement gérées

## Migration

### Avant (img tag)
```html
<img src="/image.jpg" alt="Image" width="400" height="300" />
```

### Après (next/image)
```tsx
<OptimizedImage
  src="/image.jpg"
  alt="Image"
  width={400}
  height={300}
  quality={80}
  placeholder="blur"
/>
```

## Support

Pour toute question sur l'optimisation des images :
- [Documentation Next.js Image](https://nextjs.org/docs/api-reference/next/image)
- [Web.dev Image Optimization](https://web.dev/fast/#optimize-your-images)
- [Lighthouse Performance](https://developers.google.com/web/tools/lighthouse)
