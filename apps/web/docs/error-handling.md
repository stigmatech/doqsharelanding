# Gestion d'erreurs - Documentation

## Vue d'ensemble

Le système de gestion d'erreurs de DoqShare fournit une expérience utilisateur robuste avec des pages d'erreur personnalisées, un tracking complet et une récupération automatique.

## 🎯 Fonctionnalités

### Pages d'erreur personnalisées
- **404 (Not Found)** : Page non trouvée avec navigation alternative
- **500 (Server Error)** : Erreur serveur avec options de récupération
- **Error Boundary** : Capture des erreurs React avec fallback

### Tracking et monitoring
- **Google Analytics** : Tracking des erreurs avec contexte
- **Google Tag Manager** : Événements d'erreur détaillés
- **API de monitoring** : Envoi d'erreurs à des services externes
- **Logs détaillés** : Stack traces et contexte utilisateur

### Composants réutilisables
- **ErrorDisplay** : Interface d'erreur personnalisable
- **ErrorToast** : Notifications d'erreur non bloquantes
- **ErrorBoundary** : Capture d'erreurs React
- **GlobalErrorHandler** : Gestionnaire d'erreurs global

## 📁 Structure des fichiers

```
components/error/
├── error-display.tsx          # Interface d'erreur réutilisable
├── error-boundary.tsx         # Error Boundary React
├── error-toast.tsx           # Notifications d'erreur
└── global-error-handler.tsx  # Gestionnaire global

app/
├── not-found.tsx             # Page 404
├── error.tsx                 # Page 500
└── api/errors/route.ts       # API de monitoring

lib/
└── error-tracking.ts         # Utilitaires de tracking
```

## 🚀 Utilisation

### Pages d'erreur automatiques

Les pages d'erreur sont automatiquement gérées par Next.js :

```typescript
// Page 404 - automatiquement affichée pour les routes non trouvées
// app/not-found.tsx

// Page 500 - automatiquement affichée pour les erreurs serveur
// app/error.tsx
```

### Error Boundary personnalisé

```tsx
import ErrorBoundary from "@/components/error/error-boundary"

function MyComponent() {
  return (
    <ErrorBoundary
      fallback={<CustomErrorFallback />}
      onError={(error, errorInfo) => {
        console.log("Error caught:", error)
        // Logique personnalisée
      }}
    >
      <RiskyComponent />
    </ErrorBoundary>
  )
}
```

### Error Display personnalisé

```tsx
import ErrorDisplay from "@/components/error/error-display"

function CustomError() {
  return (
    <ErrorDisplay
      title="Erreur personnalisée"
      description="Description de l'erreur"
      errorCode="CUSTOM_001"
      showRetry={true}
      showHome={true}
      onRetry={() => window.location.reload()}
    >
      {/* Contenu personnalisé */}
    </ErrorDisplay>
  )
}
```

### Error Toast

```tsx
import ErrorToast from "@/components/error/error-toast"

function MyComponent() {
  const [error, setError] = useState(null)

  return (
    <>
      {/* Votre contenu */}
      {error && (
        <ErrorToast
          error={error}
          onRetry={() => setError(null)}
          onDismiss={() => setError(null)}
          autoHide={true}
          duration={5000}
        />
      )}
    </>
  )
}
```

## 📊 Tracking des erreurs

### Configuration automatique

Le tracking est automatiquement configuré dans `layout.tsx` :

```tsx
<ErrorBoundary>
  <GlobalErrorHandler>
    {/* Votre application */}
  </GlobalErrorHandler>
</ErrorBoundary>
```

### Tracking manuel

```tsx
import { trackError } from "@/lib/error-tracking"

try {
  // Code risqué
} catch (error) {
  trackError(error, {
    userId: "user123",
    page: "/dashboard",
    sessionId: "session456"
  })
}
```

### Événements trackés

#### Google Analytics
- `exception` : Erreurs JavaScript avec contexte
- `error_occurred` : Erreurs détaillées via GTM

#### Google Tag Manager
- `error_occurred` : Erreurs client avec stack trace
- `error_boundary_triggered` : Erreurs React capturées
- `unhandledrejection` : Promesses rejetées

## 🔧 Configuration

### Variables d'environnement

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Monitoring externe (optionnel)
SENTRY_DSN=https://...
LOGGING_SERVICE_URL=https://...
LOGGING_SERVICE_TOKEN=...
```

### Intégration avec services externes

#### Sentry (optionnel)
```typescript
// Dans app/api/errors/route.ts
if (process.env.SENTRY_DSN) {
  const Sentry = require('@sentry/nextjs')
  Sentry.captureException(new Error(errorReport.message), {
    tags: { component: 'client_error' },
    extra: { context: errorReport.context }
  })
}
```

#### Service de logging personnalisé
```typescript
// Dans app/api/errors/route.ts
if (process.env.LOGGING_SERVICE_URL) {
  await fetch(process.env.LOGGING_SERVICE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.LOGGING_SERVICE_TOKEN}`
    },
    body: JSON.stringify(errorReport)
  })
}
```

## 🎨 Personnalisation

### Thèmes d'erreur

Les composants utilisent les classes Tailwind par défaut, mais peuvent être personnalisés :

```tsx
<ErrorDisplay
  className="custom-error-theme"
  title="Erreur personnalisée"
  description="Description avec style personnalisé"
>
  {/* Contenu personnalisé */}
</ErrorDisplay>
```

### Actions personnalisées

```tsx
<ErrorDisplay
  title="Erreur"
  description="Description"
  onRetry={() => {
    // Logique de retry personnalisée
    window.location.reload()
  }}
  onBack={() => {
    // Navigation personnalisée
    router.push('/dashboard')
  }}
>
  {/* Actions supplémentaires */}
  <Button onClick={() => contactSupport()}>
    Contacter le support
  </Button>
</ErrorDisplay>
```

## 📈 Monitoring et alertes

### Métriques importantes
- **Taux d'erreur** : Pourcentage d'erreurs par page
- **Erreurs critiques** : ChunkLoadError, CSS loading errors
- **Erreurs par utilisateur** : Patterns d'erreurs individuels
- **Stack traces** : Analyse des causes racines

### Alertes recommandées
- **Erreurs 500** : Alertes immédiates
- **ChunkLoadError** : Problèmes de cache
- **Erreurs répétées** : Patterns suspects
- **Nouveaux types d'erreurs** : Détection de régression

## 🧪 Tests

### Tests d'erreurs
```typescript
// Test de la page 404
it('should display 404 page for unknown routes', () => {
  render(<NotFound />)
  expect(screen.getByText('Page non trouvée')).toBeInTheDocument()
})

// Test de l'Error Boundary
it('should catch errors and display fallback', () => {
  const ThrowError = () => {
    throw new Error('Test error')
  }
  
  render(
    <ErrorBoundary>
      <ThrowError />
    </ErrorBoundary>
  )
  
  expect(screen.getByText('Une erreur s\'est produite')).toBeInTheDocument()
})
```

### Simulation d'erreurs
```typescript
// Dans le navigateur
window.dispatchEvent(new ErrorEvent('error', {
  error: new Error('Test error'),
  message: 'Test error message'
}))
```

## 🔍 Débogage

### Console logs
- **Erreurs client** : Loggées automatiquement
- **Stack traces** : Disponibles en mode développement
- **Contexte utilisateur** : User ID, session, page

### Outils de développement
- **React DevTools** : Inspection des Error Boundaries
- **Network tab** : Erreurs de chargement de ressources
- **Console** : Erreurs JavaScript et promesses rejetées

## 📚 Bonnes pratiques

### 1. Gestion des erreurs
- **Toujours capturer** les erreurs asynchrones
- **Fournir des fallbacks** pour les composants critiques
- **Loguer avec contexte** pour faciliter le débogage

### 2. UX d'erreur
- **Messages clairs** et actionables
- **Options de récupération** (retry, navigation)
- **Design cohérent** avec l'application

### 3. Monitoring
- **Alertes proactives** pour les erreurs critiques
- **Analyse des patterns** d'erreurs
- **Métriques de performance** liées aux erreurs

### 4. Performance
- **Lazy loading** des composants d'erreur
- **Minimiser l'impact** des erreurs sur l'UX
- **Récupération automatique** quand possible

## 🚀 Déploiement

### Vérifications pré-déploiement
- [ ] Pages 404 et 500 fonctionnelles
- [ ] Error Boundary configuré
- [ ] Tracking d'erreurs actif
- [ ] Variables d'environnement configurées

### Monitoring post-déploiement
- [ ] Vérifier les logs d'erreurs
- [ ] Tester les pages d'erreur
- [ ] Valider le tracking GA/GTM
- [ ] Configurer les alertes

Le système de gestion d'erreurs est maintenant prêt et fournira une expérience utilisateur robuste avec un monitoring complet ! 🎉
