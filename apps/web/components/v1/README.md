# Skiper39 Component

Un composant d'animation de foule utilisant GSAP et Canvas pour créer des animations fluides de personnages.

## Composants

### `CrowdCanvas`

Canvas principal pour l'animation de foule avec personnages animés.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | **Requis.** Chemin vers l'image sprite sheet contenant les frames des personnages |
| `rows` | `number` | `15` | Nombre de lignes dans le sprite sheet |
| `cols` | `number` | `7` | Nombre de colonnes dans le sprite sheet |

#### Exemple d'utilisation

```tsx
import { CrowdCanvas } from "@/components/v1/skiper39";

// Utilisation basique
<CrowdCanvas src="/images/peeps/all-peeps.png" />

// Avec dimensions personnalisées
<CrowdCanvas 
  src="/images/peeps/all-peeps.png" 
  rows={15} 
  cols={7} 
/>
```

### `Skiper39`

Composant complet avec titre et animation de foule.

#### Props

Aucune prop requise. Le composant utilise des valeurs par défaut.

#### Exemple d'utilisation

```tsx
import { Skiper39 } from "@/components/v1/skiper39";

// Utilisation simple
<Skiper39 />
```

## Format du Sprite Sheet

Le sprite sheet doit être organisé en grille :

- **Format supporté** : PNG, SVG, JPG
- **Organisation** : Grille de personnages (ex: 7x7 = 49 personnages)
- **Dimensions** : Chaque personnage doit avoir la même taille
- **Espacement** : Pas d'espacement entre les personnages

### Exemple de structure

```
Sprite Sheet (7x7)
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│ P1  │ P2  │ P3  │ P4  │ P5  │ P6  │ P7  │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│ P8  │ P9  │ P10 │ P11 │ P12 │ P13 │ P14 │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│ P15 │ P16 │ P17 │ P18 │ P19 │ P20 │ P21 │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│ P22 │ P23 │ P24 │ P25 │ P26 │ P27 │ P28 │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│ P29 │ P30 │ P31 │ P32 │ P33 │ P34 │ P35 │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│ P36 │ P37 │ P38 │ P39 │ P40 │ P41 │ P42 │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│ P43 │ P44 │ P45 │ P46 │ P47 │ P48 │ P49 │
└─────┴─────┴─────┴─────┴─────┴─────┴─────┘
```

## Fonctionnalités

- **Animation fluide** avec GSAP
- **Direction aléatoire** (gauche/droite)
- **Vitesses variables** pour un effet naturel
- **Effet de saut** pendant la marche
- **Performance optimisée** avec Canvas
- **Responsive** et adaptatif

## Personnalisation

### Changer le nombre de personnages

```tsx
// Plus de personnages (15x7 = 105)
<CrowdCanvas src="/images/peeps/all-peeps.svg" rows={15} cols={7} />

// Moins de personnages (5x5 = 25)
<CrowdCanvas src="/images/peeps/all-peeps.svg" rows={5} cols={5} />
```

### Utilisation dans un Hero

```tsx
import { CrowdCanvas } from "@/components/v1/skiper39";

const Hero = () => (
  <div className="relative h-[600px] w-full overflow-hidden rounded-lg border">
    <CrowdCanvas src="/images/peeps/all-peeps.svg" rows={7} cols={7} />
  </div>
);
```

## Dépendances

- **GSAP** : Animation et tweening
- **React** : Composant React
- **Canvas API** : Rendu des personnages

## Performance

- **Canvas 2D** pour de meilleures performances
- **Sprite sheet** pour réduire les requêtes HTTP
- **Animation optimisée** avec GSAP
- **Responsive** avec gestion des redimensionnements
