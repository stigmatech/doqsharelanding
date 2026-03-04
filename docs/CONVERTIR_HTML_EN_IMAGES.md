# 🖼️ Guide : Convertir les HTML en Images Open Graph

## ✅ Fichiers HTML Créés

10 fichiers HTML ont été créés dans `temp-og/` avec le même style que la homepage :
- `og-case-studies.html`
- `og-analytics.html`
- `og-help.html`
- `og-docs.html`
- `og-integrations.html`
- `og-legal-data-room.html`
- `og-real-estate-data-room.html`
- `og-startups.html`
- `og-freelance.html`
- `og-education.html`

---

## 🎯 Méthode 1 : Screenshot avec Navigateur (Recommandé)

### Étapes :

1. **Ouvrir le fichier HTML** dans Chrome/Firefox
   ```bash
   # Depuis le terminal, dans le dossier doqsharelanding
   open temp-og/og-case-studies.html
   # ou
   firefox temp-og/og-case-studies.html
   ```

2. **Ajuster le viewport à 1200x630px**
   - Appuyer sur **F12** (DevTools)
   - Appuyer sur **Cmd+Shift+P** (Mac) ou **Ctrl+Shift+P** (Windows)
   - Taper "device" → sélectionner "Toggle device toolbar"
   - Cliquer sur "Edit" → ajouter un device personnalisé :
     - Name: "OG Image"
     - Width: 1200
     - Height: 630
   - Sélectionner ce device

3. **Capturer l'écran**
   - **Option A :** DevTools → Cmd+Shift+P → "Capture full size screenshot"
   - **Option B :** Utiliser un outil de screenshot (CleanShot X, Snipping Tool, etc.)

4. **Sauvegarder**
   - Nom : `og-case-studies.jpg` (ou le nom correspondant)
   - Format : JPG
   - Qualité : 85-90%
   - Emplacement : `/public/images/`

5. **Répéter** pour les 9 autres fichiers

---

## 🎯 Méthode 2 : Service en ligne (Plus Rapide)

### Option A : htmlcsstoimage.com

1. Aller sur https://htmlcsstoimage.com/
2. Pour chaque fichier HTML :
   - Ouvrir le fichier HTML dans un éditeur
   - Copier tout le contenu HTML
   - Coller dans htmlcsstoimage.com
   - Dimensions : 1200x630px
   - Format : JPG
   - Qualité : 85-90%
   - Télécharger
   - Renommer selon le nom du fichier (ex: `og-case-studies.jpg`)
   - Placer dans `/public/images/`

### Option B : screenshotapi.net

1. Aller sur https://www.screenshotapi.net/
2. Pour chaque fichier HTML :
   - Héberger le fichier HTML localement (ou utiliser un service comme GitHub Pages)
   - Entrer l'URL dans screenshotapi.net
   - Dimensions : 1200x630
   - Format : JPG
   - Télécharger

---

## 🎯 Méthode 3 : Script Puppeteer (Automatique)

Si vous voulez automatiser complètement :

1. **Installer Puppeteer**
   ```bash
   npm install puppeteer
   ```

2. **Créer un script de conversion** (je peux le créer si vous voulez)

3. **Exécuter le script**
   ```bash
   node scripts/convert-html-to-images.js
   ```

---

## 📐 Spécifications Finales

Pour chaque image :

- ✅ **Dimensions :** 1200x630px exactement
- ✅ **Format :** JPG
- ✅ **Qualité :** 85-90%
- ✅ **Taille :** < 500KB (idéalement 200-300KB)
- ✅ **Nom :** Correspond au nom du fichier HTML (ex: `og-case-studies.html` → `og-case-studies.jpg`)
- ✅ **Emplacement :** `/public/images/`

---

## ✅ Checklist

Après avoir créé chaque image :

- [ ] Dimensions correctes (1200x630px)
- [ ] Format JPG
- [ ] Taille < 500KB
- [ ] Nom correct (ex: `og-case-studies.jpg`)
- [ ] Placée dans `/public/images/`
- [ ] Style cohérent avec `og-homepage.jpg`
- [ ] Texte lisible et professionnel

---

## 🎨 Vérification du Style

Comparez chaque image avec `og-homepage.jpg` pour vérifier :
- ✅ Même fond (blanc avec pattern de points subtil)
- ✅ Badge "SOC2, HIPAA & GDPR Compliant" en haut
- ✅ Logo DoQshare (carré bleu avec D + texte)
- ✅ Titre en bleu foncé (#1e40af)
- ✅ Sous-titre en gris (#4b5563)
- ✅ Description en gris clair (#6b7280)
- ✅ Features avec checkmarks verts
- ✅ Boutons CTA (bleu et blanc)

---

## 🚀 Après Création

Une fois les 10 images créées :

1. **Vérifier** qu'elles sont toutes dans `/public/images/`
2. **Tester** avec les outils de validation :
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

3. **Redéployer** sur Vercel pour activer les nouvelles images

---

## 💡 Astuce

Si vous utilisez un Mac avec CleanShot X ou un outil similaire :
1. Ouvrir le HTML dans le navigateur
2. Ajuster le viewport à 1200x630px
3. Utiliser CleanShot X pour capturer la zone
4. Sauvegarder directement en JPG dans `/public/images/`

C'est la méthode la plus rapide et précise !

