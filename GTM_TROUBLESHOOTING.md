# 🔍 Dépannage Google Tag Manager

## Problème : "Votre balise Google n'a pas été détectée"

### Modifications effectuées

1. ✅ **Composant GoogleTagManager** : Changé de `next/script` avec `strategy="afterInteractive"` vers un `<script>` HTML standard
2. ✅ **Suppression de "use client"** : Le composant est maintenant rendu côté serveur pour être dans le HTML source
3. ✅ **Script dans `<head>`** : Le script GTM est injecté directement dans le `<head>`
4. ✅ **Noscript après `<body>`** : Le fallback noscript est bien placé juste après `<body>`

### Vérifications à faire

#### 1. Vérifier que le script est dans le HTML source

1. Ouvrez votre site en production ou en développement
2. Faites un clic droit → "Afficher le code source" (ou Ctrl+U / Cmd+Option+U)
3. Recherchez `GTM-PKTGS8TQ` dans le code source
4. Vous devriez voir :
   ```html
   <script>
     (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
     })(window,document,'script','dataLayer','GTM-PKTGS8TQ');
   </script>
   ```

#### 2. Vérifier dans la console du navigateur

1. Ouvrez les outils de développement (F12)
2. Allez dans l'onglet "Console"
3. Tapez : `window.dataLayer`
4. Vous devriez voir un tableau avec des objets GTM

#### 3. Utiliser Google Tag Assistant

1. Installez l'extension [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Visitez votre site
3. Cliquez sur l'extension
4. Vérifiez que GTM-PKTGS8TQ est détecté

#### 4. Vérifier dans Google Tag Manager

1. Allez dans [Google Tag Manager](https://tagmanager.google.com)
2. Sélectionnez votre conteneur GTM-PKTGS8TQ
3. Cliquez sur "Aperçu" (Preview)
4. Entrez l'URL de votre site
5. Vérifiez que la connexion est établie

### Solutions si le problème persiste

#### Solution 1 : Vérifier la variable d'environnement

Assurez-vous que `NEXT_PUBLIC_GTM_ID` est bien définie :

```bash
# Dans votre terminal
cd doqsharelanding
cat .env | grep GTM
```

Devrait afficher : `NEXT_PUBLIC_GTM_ID=GTM-PKTGS8TQ` (sans espace)

#### Solution 2 : Redémarrer le serveur

```bash
# Arrêtez le serveur (Ctrl+C)
# Puis redémarrez
npm run dev
```

#### Solution 3 : Vérifier le build de production

```bash
# Build de production
npm run build

# Démarrer en mode production
npm run start
```

Puis vérifiez le code source de la page.

#### Solution 4 : Vérifier dans Vercel (si déployé)

1. Allez dans Vercel Dashboard
2. Vérifiez que `NEXT_PUBLIC_GTM_ID=GTM-PKTGS8TQ` est configurée dans Environment Variables
3. Redéployez l'application

### Code actuel

Le composant `GoogleTagManager` génère maintenant :

```html
<script>
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-PKTGS8TQ');
</script>
```

### Structure du layout

```tsx
<html>
  <head>
    {/* ... autres scripts ... */}
    <GoogleTagManager /> {/* Script GTM ici */}
  </head>
  <body>
    <GoogleTagManagerNoScript /> {/* Noscript fallback ici */}
    {/* ... reste du contenu ... */}
  </body>
</html>
```

### Délai de détection

⚠️ **Important** : Google Search Console peut prendre jusqu'à 24-48 heures pour détecter la balise après le déploiement. 

Si vous venez de déployer :
1. Attendez quelques heures
2. Utilisez "Tester l'URL" dans Google Search Console
3. Vérifiez avec Google Tag Assistant en temps réel

### Contact

Si le problème persiste après ces vérifications, il peut s'agir d'un problème de cache ou de configuration Google Tag Manager. Vérifiez que :
- Le conteneur GTM-PKTGS8TQ est bien publié dans Google Tag Manager
- L'URL de votre site correspond à celle configurée dans Google Search Console
- Il n'y a pas de bloqueurs de publicité qui bloquent GTM

