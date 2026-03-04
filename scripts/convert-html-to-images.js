/**
 * Script pour convertir les fichiers HTML en images JPG
 * Utilise Puppeteer pour capturer chaque page HTML
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tempDir = path.join(__dirname, '../temp-og');
const outputDir = path.join(__dirname, '../public/images');

// Dimensions des images Open Graph
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

// Liste des fichiers HTML à convertir
const htmlFiles = [
  'og-case-studies.html',
  'og-analytics.html',
  'og-help.html',
  'og-docs.html',
  'og-integrations.html',
  'og-legal-data-room.html',
  'og-real-estate-data-room.html',
  'og-startups.html',
  'og-freelance.html',
  'og-education.html',
];

async function convertHTMLToImage(htmlFile, browser) {
  const htmlPath = path.join(tempDir, htmlFile);
  const outputFile = htmlFile.replace('.html', '.jpg');
  const outputPath = path.join(outputDir, outputFile);

  // Vérifier que le fichier HTML existe
  if (!fs.existsSync(htmlPath)) {
    console.log(`⚠️  Fichier non trouvé: ${htmlFile}`);
    return false;
  }

  try {
    console.log(`📸 Conversion de ${htmlFile}...`);

    // Créer une nouvelle page
    const page = await browser.newPage();

    // Définir la taille de la viewport
    await page.setViewport({
      width: OG_WIDTH,
      height: OG_HEIGHT,
      deviceScaleFactor: 1,
    });

    // Charger le fichier HTML
    const fileUrl = `file://${htmlPath}`;
    await page.goto(fileUrl, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Attendre que le contenu soit rendu
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Capturer la screenshot
    await page.screenshot({
      path: outputPath,
      type: 'jpeg',
      quality: 90,
      fullPage: false,
      clip: {
        x: 0,
        y: 0,
        width: OG_WIDTH,
        height: OG_HEIGHT,
      },
    });

    // Fermer la page
    await page.close();

    // Vérifier la taille du fichier
    const stats = fs.statSync(outputPath);
    const fileSizeKB = (stats.size / 1024).toFixed(2);

    console.log(`✅ ${outputFile} créé (${fileSizeKB} KB)`);

    return true;
  } catch (error) {
    console.error(`❌ Erreur lors de la conversion de ${htmlFile}:`, error.message);
    return false;
  }
}

async function main() {
  console.log(`
🖼️  Conversion HTML → Images Open Graph
========================================

📁 Fichiers HTML: ${tempDir}
📁 Images de sortie: ${outputDir}
📐 Dimensions: ${OG_WIDTH}x${OG_HEIGHT}px

`);

  // Vérifier que le dossier temp-og existe
  if (!fs.existsSync(tempDir)) {
    console.error(`❌ Le dossier ${tempDir} n'existe pas.`);
    console.log(`💡 Exécutez d'abord: node scripts/generate-og-from-homepage.js`);
    process.exit(1);
  }

  // Créer le dossier de sortie s'il n'existe pas
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`📁 Dossier créé: ${outputDir}`);
  }

  // Vérifier que Puppeteer est installé
  try {
    await import('puppeteer');
  } catch (error) {
    console.error(`❌ Puppeteer n'est pas installé.`);
    console.log(`💡 Installez-le avec: npm install puppeteer`);
    process.exit(1);
  }

  console.log(`🚀 Démarrage du navigateur...\n`);

  // Lancer le navigateur
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  let successCount = 0;
  let failCount = 0;

  // Convertir chaque fichier HTML
  for (const htmlFile of htmlFiles) {
    const success = await convertHTMLToImage(htmlFile, browser);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
  }

  // Fermer le navigateur
  await browser.close();

  // Résumé
  console.log(`
========================================
✅ Conversion terminée!

📊 Résultats:
   - ✅ Réussies: ${successCount}
   - ❌ Échouées: ${failCount}
   - 📁 Total: ${htmlFiles.length}

📁 Images créées dans: ${outputDir}

💡 Prochaines étapes:
   1. Vérifier les images dans public/images/
   2. Tester avec Facebook Sharing Debugger
   3. Redéployer sur Vercel
`);

  if (failCount > 0) {
    process.exit(1);
  }
}

// Exécuter
main().catch((error) => {
  console.error('❌ Erreur:', error);
  process.exit(1);
});

