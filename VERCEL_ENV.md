# 🔐 Variables d'Environnement Vercel

## Variables à configurer dans Vercel Dashboard

### Variables Requises (Production)

```env
# Base URL
NEXT_PUBLIC_BASE_URL=https://doqshare.com

# Cal.com Configuration
NEXT_PUBLIC_CALCOM_NAMESPACE=doqshare
NEXT_PUBLIC_CALCOM_LINK=stigmatech/doqshare

# Analytics
NEXT_PUBLIC_GA_ID=G-PREJEDTML2
NEXT_PUBLIC_GTM_ID=GTM-PKTGS8TQ  # ✅ Configuré

# Email Configuration (Resend)
RESEND_API_KEY=re_77bTN1VW_DRVb7HbyJVc5jFhy3APVVRuk  # ✅ Configuré

# Site Verification
GOOGLE_SITE_VERIFICATION=your-google-verification-code
YANDEX_VERIFICATION=your-yandex-verification-code
YAHOO_VERIFICATION=your-yahoo-verification-code

# Environment
NODE_ENV=production
```

## 📝 Instructions de Configuration

### 1. Accéder aux Variables d'Environnement dans Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Sélectionnez votre projet
3. Allez dans **Settings** → **Environment Variables**
4. Ajoutez chaque variable ci-dessus

### 2. Variables par Environnement

Vous pouvez configurer différentes valeurs pour :
- **Production** : Variables pour la production
- **Preview** : Variables pour les preview deployments
- **Development** : Variables pour le développement local

### 3. Variables Sensibles

⚠️ **Ne jamais commiter** ces variables dans le code :
- `RESEND_API_KEY`
- `GOOGLE_SITE_VERIFICATION`
- `NEXTAUTH_SECRET` (si utilisé)

### 4. Vérification

Après avoir configuré les variables :
1. Redéployez votre application
2. Vérifiez les logs pour confirmer que les variables sont chargées
3. Testez les fonctionnalités qui utilisent ces variables (formulaires, analytics, etc.)

---

## ✅ Checklist de Configuration

- [x] `RESEND_API_KEY` - Configuré
- [ ] `NEXT_PUBLIC_GTM_ID` - À configurer
- [ ] `GOOGLE_SITE_VERIFICATION` - À configurer
- [ ] `YANDEX_VERIFICATION` - Optionnel
- [ ] `YAHOO_VERIFICATION` - Optionnel

---

## 🔗 Liens Utiles

- [Documentation Vercel - Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Resend Documentation](https://resend.com/docs)
- [Google Tag Manager](https://tagmanager.google.com/)
- [Google Search Console](https://search.google.com/search-console)

