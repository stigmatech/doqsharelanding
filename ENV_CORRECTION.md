# ⚠️ Correction du fichier .env

## Problème détecté

Dans votre fichier `.env`, il y a un **espace après le `=`** :

```env
NEXT_PUBLIC_GTM_ID= GTM-PKTGS8TQ  ❌ (incorrect - espace après =)
```

## Correction nécessaire

Supprimez l'espace après le `=` :

```env
NEXT_PUBLIC_GTM_ID=GTM-PKTGS8TQ  ✅ (correct - pas d'espace)
```

## Pourquoi c'est important

Les variables d'environnement doivent être au format :
```
VARIABLE_NAME=valeur
```

Sans espace entre le `=` et la valeur. Sinon, la valeur sera lue avec un espace au début, ce qui peut causer des problèmes.

## Vérification

Après correction, vérifiez que la variable est bien chargée :

```bash
# Dans votre terminal
node -e "console.log('GTM ID:', process.env.NEXT_PUBLIC_GTM_ID)"
```

Ou redémarrez votre serveur de développement et vérifiez dans la console du navigateur que GTM se charge correctement.

## Configuration complète recommandée dans .env

```env
# Base URL
NEXT_PUBLIC_BASE_URL=https://doqshare.com

# Analytics
NEXT_PUBLIC_GA_ID=G-PREJEDTML2
NEXT_PUBLIC_GTM_ID=GTM-PKTGS8TQ

# Email Configuration (Resend)
RESEND_API_KEY=re_77bTN1VW_DRVb7HbyJVc5jFhy3APVVRuk

# Site Verification
GOOGLE_SITE_VERIFICATION=TCoiBuMfK0536O2Cm8BJEQNBGQ_ClZeVtxGYR7nU6fg

# Consent Manager
NEXT_PUBLIC_C15T_URL=https://doqs-us-east-onboarding.c15t.dev/

# Environment
NODE_ENV=development
```

## Important pour la production

N'oubliez pas de configurer `NEXT_PUBLIC_GTM_ID=GTM-PKTGS8TQ` (sans espace) dans **Vercel Dashboard** :
- Settings → Environment Variables
- Ajoutez la variable pour Production, Preview et Development

