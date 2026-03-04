# Configuration Analytics DoqShare

## Vue d'ensemble

Ce document explique comment configurer et utiliser le système d'analytics pour le site DoqShare.

## Configuration

### Variables d'environnement

Ajoutez ces variables à votre fichier `.env.local` :

```env
# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Tag Manager (optionnel)
NEXT_PUBLIC_GTM_ID=GTM-PKTGS8TQ

# Base URL
NEXT_PUBLIC_BASE_URL=https://doqshare.com
```

### Configuration Google Analytics

1. Créez un compte Google Analytics 4
2. Obtenez votre ID de mesure (format: G-XXXXXXXXXX)
3. Ajoutez l'ID à la variable d'environnement `NEXT_PUBLIC_GA_ID`

### Configuration Google Tag Manager (optionnel)

1. Créez un compte Google Tag Manager
2. Obtenez votre ID de conteneur (format: GTM-PKTGS8TQ)
3. Ajoutez l'ID à la variable d'environnement `NEXT_PUBLIC_GTM_ID`

## Utilisation

### Composants de tracking

#### TrackedButton
```tsx
import TrackedButton from "@/components/analytics/tracked-button";

<TrackedButton
  trackingAction="trial_start_click"
  trackingCategory="conversion"
  trackingLabel="hero_cta"
>
  Start Free Trial
</TrackedButton>
```

#### TrackedLink
```tsx
import TrackedLink from "@/components/analytics/tracked-link";

<TrackedLink
  href="/pricing"
  trackingAction="pricing_click"
  trackingCategory="navigation"
  trackingLabel="header_menu"
>
  Pricing
</TrackedLink>
```

#### TrackedForm
```tsx
import TrackedForm from "@/components/analytics/tracked-form";

<TrackedForm formType="contact">
  {/* Contenu du formulaire */}
</TrackedForm>
```

#### TrackedSection
```tsx
import TrackedSection from "@/components/analytics/tracked-section";

<TrackedSection sectionName="compliance">
  {/* Contenu de la section */}
</TrackedSection>
```

### Hook useAnalytics

```tsx
import { useAnalytics } from "@/hooks/use-analytics";

function MyComponent() {
  const { trackCustomEvent, trackTrialAction } = useAnalytics();
  
  const handleClick = () => {
    trackTrialAction();
    // ou
    trackCustomEvent('custom_action', 'category', 'label', 100);
  };
}
```

### Tracking automatique

Les composants suivants ajoutent automatiquement le tracking :

- **ScrollTracking** : Track la profondeur de scroll (25%, 50%, 75%, 100%)
- **TimeTracking** : Track le temps passé sur la page
- **GoogleAnalytics** : Configuration GA4
- **GoogleTagManager** : Configuration GTM

## Événements trackés

### Événements de conversion
- `trial_started` : Démarrage d'essai gratuit
- `demo_requested` : Demande de démonstration
- `enterprise_inquiry` : Demande entreprise
- `contact_form_submitted` : Soumission formulaire contact

### Événements d'engagement
- `pricing_viewed` : Vue de la page tarification
- `features_viewed` : Vue de la page fonctionnalités
- `security_viewed` : Vue de la page sécurité
- `compliance_viewed` : Vue de la section conformité
- `scroll_depth` : Profondeur de scroll
- `time_on_page` : Temps passé sur la page

### Événements de navigation
- `navigation_click` : Clics dans le menu
- `section_view` : Vue de sections spécifiques

## Configuration avancée

### Événements personnalisés

```tsx
import { trackEvent } from "@/lib/analytics";

// Événement simple
trackEvent('button_click', 'engagement', 'hero_cta');

// Événement avec valeur
trackEvent('purchase', 'conversion', 'premium_plan', 29);
```

### E-commerce tracking

```tsx
import { trackPurchase } from "@/lib/analytics";

trackPurchase('premium_plan', 29, 'EUR');
```

## Débogage

### Mode développement

En mode développement, les événements sont loggés dans la console.

### Vérification

1. Ouvrez les outils de développement
2. Allez dans l'onglet "Network"
3. Filtrez par "google-analytics" ou "gtm"
4. Vérifiez que les requêtes sont envoyées

### Google Analytics DebugView

1. Ouvrez Google Analytics
2. Allez dans "DebugView" 
3. Vérifiez que les événements apparaissent en temps réel

## Bonnes pratiques

1. **Nommage cohérent** : Utilisez des noms d'événements descriptifs
2. **Catégorisation** : Groupez les événements par catégories logiques
3. **Labels informatifs** : Ajoutez des labels pour plus de contexte
4. **Valeurs numériques** : Utilisez les valeurs pour les métriques quantifiables
5. **Test** : Testez toujours en mode développement avant la production

## Support

Pour toute question sur l'analytics, consultez :
- [Documentation Google Analytics 4](https://developers.google.com/analytics/devguides/collection/ga4)
- [Documentation Google Tag Manager](https://developers.google.com/tag-manager)
