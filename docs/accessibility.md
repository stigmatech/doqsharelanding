# Accessibilité - Documentation

## Vue d'ensemble

Le système d'accessibilité de DoqShare garantit une expérience utilisateur inclusive pour tous, en respectant les standards WCAG 2.1 AA et en fournissant des fonctionnalités avancées pour les utilisateurs de technologies d'assistance.

## 🎯 Fonctionnalités d'accessibilité

### Navigation et structure
- **Liens de saut** : Navigation rapide vers les sections principales
- **Landmarks ARIA** : Structure sémantique claire (banner, main, navigation, footer)
- **Navigation clavier** : Support complet de la navigation au clavier
- **Focus management** : Gestion intelligente du focus

### Lecteurs d'écran
- **Annonces contextuelles** : Messages pour les changements d'état
- **Descriptions détaillées** : Contexte pour les éléments interactifs
- **Rôles ARIA** : Sémantique appropriée pour tous les composants
- **États ARIA** : Communication des états dynamiques

### Contraste et couleurs
- **Contraste WCAG AA** : Ratios de contraste conformes
- **Couleurs accessibles** : Génération automatique de couleurs contrastées
- **Indicateurs visuels** : Pas de dépendance à la couleur seule
- **Mode sombre** : Support complet du mode sombre

### Composants accessibles
- **Boutons** : Support complet des lecteurs d'écran
- **Liens** : Indication des liens externes
- **Modales** : Piégeage du focus et navigation
- **Formulaires** : Validation et messages d'erreur

## 📁 Structure des fichiers

```
components/accessibility/
├── skip-links.tsx              # Liens de saut
├── focus-trap.tsx              # Piégeage du focus
├── screen-reader-only.tsx     # Masquage pour lecteurs d'écran
├── accessible-button.tsx       # Boutons accessibles
├── accessible-link.tsx         # Liens accessibles
├── accessible-modal.tsx       # Modales accessibles
└── announcer.tsx               # Annonces pour lecteurs d'écran

hooks/
├── use-keyboard-navigation.ts  # Navigation clavier
└── use-focus-management.ts     # Gestion du focus

lib/
└── accessibility-utils.ts       # Utilitaires d'accessibilité
```

## 🚀 Utilisation

### Liens de saut

Les liens de saut sont automatiquement intégrés dans le layout :

```tsx
// Apparaissent automatiquement avec Tab
<SkipLinks />
```

### Navigation clavier

```tsx
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation"

function MyComponent() {
  useKeyboardNavigation({
    onEnter: () => console.log("Enter pressed"),
    onEscape: () => console.log("Escape pressed"),
    onArrowUp: () => console.log("Arrow up"),
    onArrowDown: () => console.log("Arrow down"),
  })
}
```

### Gestion du focus

```tsx
import { useFocusManagement } from "@/hooks/use-focus-management"

function MyComponent() {
  const { containerRef, restorePreviousFocus } = useFocusManagement({
    trapFocus: true,
    restoreFocus: true,
    onFocusChange: (element) => console.log("Focus changed", element)
  })

  return (
    <div ref={containerRef}>
      {/* Contenu avec focus piégé */}
    </div>
  )
}
```

### Composants accessibles

#### Boutons accessibles

```tsx
import AccessibleButton from "@/components/accessibility/accessible-button"

function MyComponent() {
  return (
    <AccessibleButton
      loading={isLoading}
      loadingText="Chargement en cours..."
      description="Ce bouton lance le processus de sauvegarde"
      ariaDescribedBy="button-description"
    >
      Sauvegarder
    </AccessibleButton>
  )
}
```

#### Liens accessibles

```tsx
import AccessibleLink from "@/components/accessibility/accessible-link"

function MyComponent() {
  return (
    <AccessibleLink
      href="https://example.com"
      external={true}
      description="Lien vers le site externe Example"
    >
      Visiter Example
    </AccessibleLink>
  )
}
```

#### Modales accessibles

```tsx
import AccessibleModal from "@/components/accessibility/accessible-modal"

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AccessibleModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Confirmer l'action"
      description="Cette action est irréversible"
      size="md"
    >
      <p>Êtes-vous sûr de vouloir continuer ?</p>
    </AccessibleModal>
  )
}
```

### Annonces pour lecteurs d'écran

```tsx
import { useAnnouncer } from "@/components/accessibility/announcer"

function MyComponent() {
  const { announce } = useAnnouncer()

  const handleSuccess = () => {
    announce("Opération réussie", "polite")
  }

  const handleError = () => {
    announce("Une erreur s'est produite", "assertive")
  }
}
```

## 🎨 Personnalisation

### Styles d'accessibilité

```tsx
import { generateAccessibleStyles } from "@/lib/accessibility-utils"

const styles = generateAccessibleStyles("#3b82f6", {
  hoverColor: "#2563eb",
  focusColor: "#1d4ed8",
  activeColor: "#1e40af",
  disabledColor: "#9ca3af"
})
```

### Vérification du contraste

```tsx
import { isContrastSufficient, getContrastRatio } from "@/lib/accessibility-utils"

const isAccessible = isContrastSufficient("#000000", "#ffffff", "AA")
const ratio = getContrastRatio("#000000", "#ffffff")
```

### Attributs ARIA

```tsx
import { getAriaAttributes, getAriaStates } from "@/lib/accessibility-utils"

const attributes = getAriaAttributes(element, {
  label: "Bouton de sauvegarde",
  description: "Sauvegarde le document actuel",
  expanded: false,
  disabled: false
})

const states = getAriaStates(element, {
  pressed: false,
  selected: true,
  checked: false
})
```

## 🧪 Tests d'accessibilité

### Tests automatiques

```bash
# Installer les outils de test
npm install --save-dev @testing-library/jest-axe

# Tests avec jest-axe
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

test('should not have accessibility violations', async () => {
  const { container } = render(<MyComponent />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

### Tests manuels

#### Navigation clavier
1. **Tab** : Navigation vers l'élément suivant
2. **Shift + Tab** : Navigation vers l'élément précédent
3. **Entrée** : Activation des éléments interactifs
4. **Échap** : Fermeture des modales/menus
5. **Flèches** : Navigation dans les listes

#### Lecteurs d'écran
1. **NVDA** (Windows) : Test avec lecteur d'écran gratuit
2. **JAWS** (Windows) : Test avec lecteur d'écran professionnel
3. **VoiceOver** (macOS) : Test avec lecteur d'écran intégré
4. **TalkBack** (Android) : Test sur mobile

### Outils de test

#### Extensions navigateur
- **axe DevTools** : Extension Chrome/Firefox
- **WAVE** : Extension Web Accessibility Evaluator
- **Lighthouse** : Audit d'accessibilité intégré

#### Tests en ligne
- **WebAIM WAVE** : Analyse en ligne
- **aXe-core** : Tests automatisés
- **Pa11y** : Tests en ligne de commande

## 📊 Métriques d'accessibilité

### Indicateurs clés
- **Score Lighthouse** : Accessibilité > 90
- **Violations WCAG** : 0 critique, < 5 mineures
- **Contraste** : 100% des éléments conformes
- **Navigation clavier** : 100% des éléments accessibles

### Tests de conformité
- **WCAG 2.1 AA** : Niveau de conformité cible
- **Section 508** : Conformité gouvernementale US
- **EN 301 549** : Conformité européenne

## 🔧 Configuration

### Variables d'environnement

```env
# Mode d'accessibilité
NEXT_PUBLIC_ACCESSIBILITY_MODE=enhanced

# Contraste minimum
NEXT_PUBLIC_MIN_CONTRAST_RATIO=4.5

# Support des lecteurs d'écran
NEXT_PUBLIC_SCREEN_READER_SUPPORT=true
```

### Configuration Tailwind

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Couleurs avec contraste suffisant
        'accessible-blue': '#1e40af',
        'accessible-green': '#166534',
        'accessible-red': '#dc2626',
      }
    }
  }
}
```

## 🎯 Bonnes pratiques

### 1. Structure sémantique
- **Utiliser les balises HTML appropriées** (h1, h2, nav, main, etc.)
- **Éviter les divs pour les éléments interactifs**
- **Maintenir une hiérarchie de titres logique**

### 2. Navigation clavier
- **Tous les éléments interactifs doivent être accessibles au clavier**
- **Ordre de tabulation logique**
- **Indicateurs de focus visibles**

### 3. Lecteurs d'écran
- **Labels descriptifs pour tous les éléments**
- **Annonces pour les changements d'état**
- **Contexte suffisant pour comprendre l'interface**

### 4. Contraste et couleurs
- **Ratio de contraste minimum 4.5:1**
- **Ne pas dépendre uniquement de la couleur**
- **Indicateurs visuels multiples**

### 5. Formulaires
- **Labels associés à tous les champs**
- **Messages d'erreur clairs et contextuels**
- **Validation en temps réel**

## 🚀 Déploiement

### Vérifications pré-déploiement
- [ ] Tests d'accessibilité automatisés passés
- [ ] Navigation clavier fonctionnelle
- [ ] Lecteurs d'écran testés
- [ ] Contraste des couleurs vérifié
- [ ] Liens de saut fonctionnels

### Monitoring post-déploiement
- [ ] Métriques Lighthouse surveillées
- [ ] Retours utilisateurs collectés
- [ ] Tests d'accessibilité réguliers
- [ ] Mise à jour des standards

## 📚 Ressources

### Documentation
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Resources](https://webaim.org/)

### Outils
- [axe-core](https://github.com/dequelabs/axe-core)
- [Pa11y](https://pa11y.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Tests
- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Color Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/)

Le système d'accessibilité est maintenant prêt et garantit une expérience inclusive pour tous les utilisateurs ! 🎉
