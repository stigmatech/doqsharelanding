# ✅ Checklist Finale - Mise en Production

## 🎯 Statut Actuel

### ✅ Ce qui est fait
- ✅ Page `/case-studies` créée
- ✅ Google Tag Manager configuré (GTM-PKTGS8TQ)
- ✅ Variable `.env` configurée localement
- ✅ Script GTM injecté directement dans le HTML (détectable par Google)
- ✅ Noscript GTM placé juste après `<body>`
- ✅ Configuration de sécurité (headers, rate limiting)
- ✅ SEO de base (métadonnées, sitemap, robots.txt)
- ✅ Consent manager (c15t) intégré
- ✅ Routes API avec validation et sécurité

---

## 🔴 Priorité 1 — AVANT LE DÉPLOIEMENT (OBLIGATOIRE)

### 1. Tests Finaux Locaux

```bash
# 1. Linting
npm run lint

# 2. Type checking
npm run typecheck

# 3. Build de production
npm run build

# 4. Démarrer en mode production pour tester
npm run start
```

**Actions :**
- [ ] Exécuter `npm run lint` et corriger les erreurs
- [ ] Exécuter `npm run typecheck` et corriger les erreurs TypeScript
- [ ] Exécuter `npm run build` et vérifier qu'il n'y a pas d'erreurs
- [ ] Tester le site en mode production local (`npm run start`)

### 2. Configuration Vercel - Variables d'Environnement

**⚠️ CRITIQUE :** Configurer toutes ces variables dans Vercel Dashboard avant le déploiement.

1. Allez dans **Vercel Dashboard** → Votre projet → **Settings** → **Environment Variables**
2. Ajoutez chaque variable ci-dessous pour **Production**, **Preview** et **Development** :

```env
# Base URL
NEXT_PUBLIC_BASE_URL=https://doqshare.com

# Analytics
NEXT_PUBLIC_GA_ID=G-PREJEDTML2
NEXT_PUBLIC_GTM_ID=GTM-PKTGS8TQ

# Email (Resend)
RESEND_API_KEY=re_77bTN1VW_DRVb7HbyJVc5jFhy3APVVRuk

# Site Verification
GOOGLE_SITE_VERIFICATION=TCoiBuMfK0536O2Cm8BJEQNBGQ_ClZeVtxGYR7nU6fg

# Consent Manager
NEXT_PUBLIC_C15T_URL=https://doqs-us-east-onboarding.c15t.dev/

# Cal.com
NEXT_PUBLIC_CALCOM_NAMESPACE=doqshare
NEXT_PUBLIC_CALCOM_LINK=stigmatech/doqshare

# Environment
NODE_ENV=production
```

**Actions :**
- [ ] Configurer toutes les variables dans Vercel
- [ ] Vérifier que chaque variable est bien définie
- [ ] Redéployer après configuration

### 3. Tests Manuels Essentiels

**Actions :**
- [ ] Tester toutes les pages principales (homepage, pricing, features, etc.)
- [ ] Tester le formulaire de contact (`/contact`)
- [ ] Tester le formulaire de demo (`/api/demo`)
- [ ] Tester le formulaire newsletter
- [ ] Tester le consent manager (banner s'affiche, préférences sauvegardées)
- [ ] Tester les boutons "Book a Demo" (Cal.com)
- [ ] Tester le responsive design (mobile, tablette, desktop)
- [ ] Vérifier que toutes les images se chargent
- [ ] Vérifier que tous les liens fonctionnent
- [ ] Tester la navigation (menu, footer)

### 4. Vérification Google Tag Manager

**Actions :**
- [ ] Redémarrer le serveur de développement après les modifications GTM
- [ ] Vérifier le code source (Ctrl+U) - le script GTM doit être visible dans `<head>`
- [ ] Utiliser Google Tag Assistant pour vérifier que GTM se charge
- [ ] Vérifier dans la console du navigateur : `window.dataLayer` doit exister
- [ ] Tester dans Google Tag Manager Preview Mode
- [ ] Attendre 24-48h et vérifier dans Google Search Console

---

## 🟡 Priorité 2 — AMÉLIORATIONS IMPORTANTES (1-2 semaines)

### 5. Images Open Graph

**Actions :**
- [ ] Créer `/public/images/og-homepage.jpg` (1200x630px)
- [ ] Créer `/public/images/og-pricing.jpg`
- [ ] Créer `/public/images/og-features.jpg`
- [ ] Créer `/public/images/og-case-studies.jpg`
- [ ] Créer `/public/images/og-analytics.jpg`
- [ ] Créer `/public/images/og-security.jpg`
- [ ] Créer `/public/images/og-enterprise.jpg`
- [ ] Créer `/public/images/og-data-room.jpg`

**Format :** 1200x630px, JPG ou PNG

### 6. Tests d'Accessibilité

**Actions :**
- [ ] Tester avec un lecteur d'écran (VoiceOver, NVDA)
- [ ] Vérifier la navigation au clavier
- [ ] Vérifier le contraste des couleurs (WCAG AA)
- [ ] Utiliser Lighthouse pour un audit d'accessibilité
- [ ] Corriger les problèmes identifiés

### 7. Optimisation Performance

**Actions :**
- [ ] Exécuter Lighthouse et viser un score > 90
- [ ] Optimiser les Core Web Vitals
- [ ] Vérifier que les images sont optimisées (WebP, AVIF)
- [ ] Vérifier le lazy loading des images
- [ ] Tester la vitesse de chargement

---

## 🟢 Priorité 3 — AMÉLIORATIONS OPTIONNELLES (1-2 mois)

### 8. Monitoring et Analytics

**Actions :**
- [ ] Configurer Sentry pour l'error tracking (optionnel)
- [ ] Activer Vercel Analytics pour le performance monitoring
- [ ] Configurer les alertes pour les erreurs critiques

### 9. Amélioration Consent Manager

**Actions :**
- [ ] Configurer un backend pour stocker les consentements (optionnel)
- [ ] Activer la géolocalisation pour la conformité GDPR
- [ ] Configurer l'audit logging

### 10. Tests Automatisés (Optionnel)

**Actions :**
- [ ] Configurer Jest/Vitest pour les tests unitaires
- [ ] Configurer Playwright/Cypress pour les tests E2E
- [ ] Configurer Lighthouse CI

---

## 📋 Checklist Rapide de Déploiement

### Avant de déployer
- [ ] ✅ Tests locaux passent (`npm run lint`, `npm run typecheck`, `npm run build`)
- [ ] ✅ Variables d'environnement configurées dans Vercel
- [ ] ✅ Tests manuels effectués
- [ ] ✅ GTM vérifié et fonctionnel

### Après le déploiement
- [ ] ✅ Tester toutes les pages sur l'URL de production
- [ ] ✅ Vérifier que les formulaires envoient des emails
- [ ] ✅ Vérifier que GTM fonctionne en production
- [ ] ✅ Vérifier que le consent manager s'affiche
- [ ] ✅ Tester sur différents navigateurs
- [ ] ✅ Tester sur mobile et tablette
- [ ] ✅ Vérifier les logs Vercel pour des erreurs

---

## 🚀 Commandes Utiles

```bash
# Tests
npm run lint          # Vérifier le linting
npm run typecheck     # Vérifier TypeScript
npm run build         # Build de production
npm run start         # Démarrer en mode production

# Développement
npm run dev           # Démarrer le serveur de développement

# Vérifications
curl http://localhost:3000/sitemap.xml    # Vérifier le sitemap
curl http://localhost:3000/robots.txt     # Vérifier robots.txt
```

---

## 📝 Notes Importantes

1. **GTM** : Le script est maintenant injecté directement dans le HTML, Google devrait le détecter. Attendre 24-48h pour Google Search Console.

2. **Variables d'environnement** : ⚠️ **CRITIQUE** - Toutes les variables doivent être configurées dans Vercel avant le déploiement en production.

3. **Tests** : Ne pas déployer sans avoir testé localement avec `npm run build` et `npm run start`.

4. **Images Open Graph** : Optionnel pour le MVP, mais recommandé pour le SEO.

5. **Monitoring** : Sentry et Vercel Analytics sont optionnels mais fortement recommandés pour la production.

---

## ✅ Prochaines Étapes Immédiates

1. **Maintenant** : Exécuter les tests locaux (`npm run lint`, `npm run typecheck`, `npm run build`)
2. **Ensuite** : Configurer les variables d'environnement dans Vercel
3. **Puis** : Effectuer les tests manuels
4. **Enfin** : Déployer et vérifier en production

---

**Dernière mise à jour :** Après configuration GTM et correction du script injection

