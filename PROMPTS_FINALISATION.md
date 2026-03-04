# 🚀 Prompts pour Finaliser le Projet et Mise en Ligne

## 📋 Priorité 1 — Avant le Déploiement (OBLIGATOIRE)

### 1. Configuration des Variables d'Environnement dans Vercel

**Prompt :**
```
Configure toutes les variables d'environnement dans Vercel Dashboard :
- NEXT_PUBLIC_BASE_URL=https://doqshare.com
- NEXT_PUBLIC_GA_ID=G-PREJEDTML2
- NEXT_PUBLIC_GTM_ID=GTM-PKTGS8TQ (✅ Configuré)
- RESEND_API_KEY=re_77bTN1VW_DRVb7HbyJVc5jFhy3APVVRuk
- GOOGLE_SITE_VERIFICATION=TCoiBuMfK0536O2Cm8BJEQNBGQ_ClZeVtxGYR7nU6fg
- NEXT_PUBLIC_C15T_URL=https://doqs-us-east-onboarding.c15t.dev/
- NODE_ENV=production

Vérifie que toutes les variables sont bien configurées pour Production, Preview et Development.
```

### 2. Remplacement de GTM-XXXXXXX par l'ID Réel

**Prompt :**
```
Remplace tous les GTM-XXXXXXX dans le code par le vrai ID Google Tag Manager :
1. Vérifie dans lib/analytics.ts
2. Vérifie dans components/analytics/google-tag-manager.tsx
3. Vérifie dans env.example
4. Vérifie dans PRODUCTION.md et VERCEL_ENV.md
5. Configure l'ID réel dans Vercel
```

### 3. Tests Finaux Avant Production

**Prompt :**
```
Exécute tous les tests finaux avant le déploiement :
1. npm run lint — vérifie qu'il n'y a pas d'erreurs de linting
2. npm run typecheck — vérifie qu'il n'y a pas d'erreurs TypeScript
3. npm run build — teste le build de production
4. Tests manuels sur toutes les pages principales
5. Tests des formulaires (contact, demo, newsletter)
6. Tests du consent manager (c15t)
7. Tests responsive (mobile, tablette, desktop)
8. Vérifie que toutes les images se chargent correctement
9. Vérifie que tous les liens fonctionnent
```

### 4. Vérification des Routes API

**Prompt :**
```
Vérifie que toutes les routes API fonctionnent correctement :
1. /api/contact — test avec un formulaire de contact
2. /api/demo — test avec un formulaire de demo
3. /api/newsletter — test avec un formulaire newsletter
4. /api/c15t/* — vérifie que les routes consent manager fonctionnent
5. Vérifie que RESEND_API_KEY est bien validé avant l'envoi d'emails
6. Vérifie que le rate limiting fonctionne
7. Vérifie que les security headers sont appliqués
```

### 5. Vérification SEO

**Prompt :**
```
Vérifie que le SEO est correctement configuré :
1. Vérifie que toutes les pages ont des métadonnées (title, description, keywords)
2. Vérifie que le sitemap.xml est accessible et à jour
3. Vérifie que robots.txt est correctement configuré
4. Vérifie que les structured data (Schema.org) sont présents
5. Vérifie que les Open Graph images existent (ou crée-les)
6. Vérifie que les Twitter Cards sont configurées
7. Teste avec Google Search Console (si configuré)
```

---

## 📋 Priorité 2 — Améliorations Importantes (1-2 semaines)

### 6. Création des Images Open Graph

**Prompt :**
```
Crée des images Open Graph pour toutes les pages principales :
- /images/og-homepage.jpg
- /images/og-pricing.jpg
- /images/og-features.jpg
- /images/og-case-studies.jpg
- /images/og-analytics.jpg
- /images/og-security.jpg
- /images/og-enterprise.jpg
- /images/og-data-room.jpg

Format recommandé : 1200x630px, format JPG ou PNG
```

### 7. Amélioration du Consent Manager (c15t)

**Prompt :**
```
Améliore les routes API c15t pour la production :
1. Ajoute un stockage en base de données pour les consentements (optionnel)
2. Améliore la validation des entrées avec Zod
3. Ajoute des logs pour le debugging
4. Configure la géolocalisation pour la conformité GDPR
5. Ajoute l'audit logging pour les consentements
6. Teste que le banner s'affiche correctement
7. Teste que les préférences sont sauvegardées
```

### 8. Configuration du Monitoring

**Prompt :**
```
Configure le monitoring pour la production :
1. Intègre Sentry pour l'error tracking (optionnel mais recommandé)
2. Active Vercel Analytics pour le performance monitoring
3. Configure les alertes pour les erreurs critiques
4. Configure le monitoring d'uptime
5. Configure les logs centralisés
6. Teste que les erreurs sont bien trackées
```

### 9. Optimisation des Images

**Prompt :**
```
Optimise toutes les images du projet :
1. Convertis les images en WebP et AVIF
2. Vérifie que toutes les images utilisent next/image
3. Ajoute des alt text descriptifs pour l'accessibilité
4. Vérifie que les images se chargent en lazy loading
5. Optimise la taille des images (compression)
6. Vérifie que les images Open Graph sont optimisées
```

### 10. Tests d'Accessibilité

**Prompt :**
```
Effectue un audit d'accessibilité complet :
1. Teste avec un lecteur d'écran (VoiceOver, NVDA)
2. Vérifie la navigation au clavier sur toutes les pages
3. Vérifie le contraste des couleurs (WCAG AA minimum)
4. Vérifie que tous les boutons ont des aria-labels
5. Vérifie que tous les formulaires ont des labels
6. Vérifie que les erreurs de formulaire sont annoncées
7. Utilise axe-core ou Lighthouse pour un audit automatique
```

---

## 📋 Priorité 3 — Fonctionnalités Avancées (1-2 mois)

### 11. Système de Blog Complet

**Prompt :**
```
Améliore le système de blog existant :
1. Ajoute une recherche dans le blog
2. Ajoute un système de catégories et tags
3. Crée un RSS feed pour le blog
4. Ajoute une newsletter intégrée au blog
5. Améliore la navigation entre articles
6. Ajoute des articles suggérés
7. Ajoute des métadonnées SEO pour chaque article
```

### 12. Multilingue (i18n)

**Prompt :**
```
Implémente le support multilingue :
1. Configure Next.js i18n
2. Traduis toutes les pages en français
3. Crée un sélecteur de langue
4. Configure les URLs localisées (/fr/, /en/)
5. Traduis tous les composants
6. Traduis les métadonnées SEO
7. Teste que le changement de langue fonctionne
```

### 13. Pages de Conformité

**Prompt :**
```
Crée les pages de conformité détaillées :
1. /gdpr — Détails sur la conformité GDPR
2. /hipaa — Détails sur la conformité HIPAA
3. /soc2 — Détails sur la conformité SOC2
4. /compliance — Vue d'ensemble de la conformité
5. Ajoute des liens vers ces pages dans le footer
6. Optimise le SEO pour ces pages
```

### 14. Tests Automatisés

**Prompt :**
```
Configure les tests automatisés :
1. Configure Jest ou Vitest pour les tests unitaires
2. Configure Playwright ou Cypress pour les tests E2E
3. Configure Lighthouse CI pour les tests de performance
4. Configure axe-core pour les tests d'accessibilité
5. Crée des tests pour les routes API
6. Crée des tests pour les composants critiques
7. Configure CI/CD pour exécuter les tests automatiquement
```

---

## 📋 Checklist Finale de Déploiement

### Avant le Déploiement

**Prompt :**
```
Avant de déployer en production, vérifie cette checklist :
1. ✅ Toutes les variables d'environnement sont configurées dans Vercel
2. ✅ GTM-PKTGS8TQ est configuré
3. ✅ npm run build fonctionne sans erreurs
4. ✅ npm run lint ne montre pas d'erreurs critiques
5. ✅ npm run typecheck ne montre pas d'erreurs
6. ✅ Tous les formulaires fonctionnent et envoient des emails
7. ✅ Le consent manager (c15t) fonctionne correctement
8. ✅ Toutes les pages se chargent correctement
9. ✅ Le responsive design fonctionne sur mobile, tablette et desktop
10. ✅ Les images se chargent correctement
11. ✅ Tous les liens fonctionnent
12. ✅ Le sitemap.xml est accessible
13. ✅ robots.txt est correctement configuré
14. ✅ Les métadonnées SEO sont présentes sur toutes les pages
15. ✅ Les structured data (Schema.org) sont présents
```

### Après le Déploiement

**Prompt :**
```
Après le déploiement, effectue ces vérifications :
1. Teste toutes les pages sur l'URL de production
2. Vérifie que les formulaires envoient bien des emails
3. Vérifie que Google Analytics et GTM fonctionnent
4. Vérifie que le consent manager s'affiche
5. Teste la performance avec Lighthouse
6. Vérifie les Core Web Vitals
7. Teste sur différents navigateurs (Chrome, Firefox, Safari, Edge)
8. Teste sur différents appareils (mobile, tablette, desktop)
9. Vérifie que le sitemap.xml est accessible
10. Soumets le sitemap à Google Search Console
11. Vérifie que les erreurs sont bien trackées (Sentry si configuré)
12. Vérifie les logs Vercel pour des erreurs
```

---

## 🔧 Commandes Utiles

### Tests Locaux

```bash
# Linting
npm run lint

# Type checking
npm run typecheck

# Build de production
npm run build

# Démarrer en mode production
npm run start

# Tests (si configurés)
npm run test
```

### Vérifications

```bash
# Vérifier les variables d'environnement
cat .env

# Vérifier la configuration Next.js
cat next.config.mjs

# Vérifier le sitemap
curl http://localhost:3000/sitemap.xml

# Vérifier robots.txt
curl http://localhost:3000/robots.txt
```

---

## 📝 Notes Importantes

1. **Variables d'environnement** : Ne jamais commiter les variables sensibles. Utiliser Vercel Dashboard pour la production.

2. **GTM ID** : ✅ `GTM-PKTGS8TQ` est configuré.

3. **Consent Manager** : Le mode 'offline' fonctionne mais pour une meilleure conformité GDPR, considérer un backend avec stockage.

4. **Monitoring** : Sentry et Vercel Analytics sont optionnels mais fortement recommandés pour la production.

5. **Tests** : Les tests automatisés ne sont pas obligatoires pour le MVP mais recommandés pour la stabilité.

6. **Multilingue** : Peut être ajouté après le lancement initial si nécessaire.

---

## 🎯 Ordre Recommandé d'Exécution

1. **Jour 1-2** : Configuration Vercel + Tests finaux
2. **Jour 3-4** : Remplacement GTM ID + Vérification SEO
3. **Jour 5-6** : Tests d'accessibilité + Optimisation images
4. **Jour 7** : Déploiement et vérifications post-déploiement
5. **Semaine 2** : Monitoring + Améliorations c15t
6. **Semaine 3-4** : Open Graph images + Tests automatisés (optionnel)

---

## ✅ Statut Actuel

- ✅ Page `/case-studies` créée
- ✅ Variables d'environnement documentées
- ✅ Configuration de sécurité (headers, rate limiting)
- ✅ SEO de base configuré
- ✅ Consent manager (c15t) intégré
- ✅ GTM-PKTGS8TQ configuré
- ⚠️ Tests finaux à effectuer
- ⚠️ Images Open Graph à créer
- ⚠️ Monitoring à configurer

