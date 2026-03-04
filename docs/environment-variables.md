# 📝 Variables d'Environnement

## Ordre de Chargement des Fichiers .env

Next.js charge les fichiers d'environnement dans cet ordre de priorité (du plus prioritaire au moins prioritaire) :

1. **`.env.local`** - Toujours chargé (sauf en test), priorité la plus haute
2. **`.env.development`**, **`.env.production`**, **`.env.test`** - Selon `NODE_ENV`
3. **`.env`** - Toujours chargé, priorité la plus basse

⚠️ **Important** : Si une variable existe dans plusieurs fichiers, la valeur du fichier avec la priorité la plus haute sera utilisée.

## Fichiers Actuels

### `.env` (Fichier principal)
Ce fichier contient toutes les variables d'environnement de base :
- `NEXT_PUBLIC_BASE_URL`
- `GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_C15T_URL`
- `RESEND_API_KEY` ✅
- `NODE_ENV`

### `.env.local` (Fichier local, non commité)
Ce fichier contient des variables spécifiques au développement local :
- `NEXT_PUBLIC_C15T_URL`

## Configuration Actuelle

✅ **RESEND_API_KEY est configuré dans `.env`**

Comme `.env.local` ne contient pas `RESEND_API_KEY`, la valeur de `.env` sera utilisée.

## Pour la Production (Vercel)

Dans Vercel, configurez toutes les variables dans le dashboard :
- **Settings** → **Environment Variables**

Les variables configurées dans Vercel ont la priorité sur les fichiers `.env` locaux.

## Bonnes Pratiques

1. **`.env`** - Variables partagées par toute l'équipe (exemple dans `.env.example`)
2. **`.env.local`** - Variables spécifiques à votre machine (non commité)
3. **Vercel Dashboard** - Variables de production (non commité)

## Variables Sensibles

⚠️ **Ne jamais commiter** ces variables :
- `RESEND_API_KEY`
- `GOOGLE_SITE_VERIFICATION`
- Toute clé API ou secret

Ces fichiers sont dans `.gitignore` et ne seront pas commités.

