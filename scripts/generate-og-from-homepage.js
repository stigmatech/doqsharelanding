/**
 * Script pour générer les images Open Graph manquantes
 * en utilisant le style de og-homepage.jpg comme template
 * 
 * Ce script crée des fichiers HTML qui peuvent être convertis en images
 * avec le même style que la homepage
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration des 10 images à créer
const ogImagesToCreate = [
  {
    filename: 'og-case-studies.jpg',
    title: 'Case Studies',
    subtitle: 'Success Stories from Our Clients',
    description: 'Real-world examples of how DoQshare transforms document sharing',
  },
  {
    filename: 'og-analytics.jpg',
    title: 'Document Analytics',
    subtitle: 'Page-by-Page Insights',
    description: 'Track engagement, time spent, and viewer behavior in real-time',
  },
  {
    filename: 'og-help.jpg',
    title: 'Help Center',
    subtitle: 'Get Support & Documentation',
    description: 'Find answers, guides, and tutorials to get the most out of DoQshare',
  },
  {
    filename: 'og-docs.jpg',
    title: 'Documentation',
    subtitle: 'API & Integration Guides',
    description: 'Complete API documentation, SDKs, and integration examples',
  },
  {
    filename: 'og-integrations.jpg',
    title: 'Integrations',
    subtitle: 'Connect with Your Tools',
    description: 'Seamlessly integrate DoQshare with Notion, Slack, and more',
  },
  {
    filename: 'og-legal-data-room.jpg',
    title: 'Legal Data Room',
    subtitle: 'Secure Virtual Data Room for Legal',
    description: 'Due diligence, M&A, and legal document management',
  },
  {
    filename: 'og-real-estate-data-room.jpg',
    title: 'Real Estate Data Room',
    subtitle: 'Secure Document Sharing for Real Estate',
    description: 'Property transactions, due diligence, and deal management',
  },
  {
    filename: 'og-startups.jpg',
    title: 'For Startups',
    subtitle: 'Secure Document Sharing for Growing Companies',
    description: 'Fundraising, pitch decks, and investor relations made simple',
  },
  {
    filename: 'og-freelance.jpg',
    title: 'For Freelancers',
    subtitle: 'Professional Document Sharing',
    description: 'Share proposals, contracts, and deliverables securely with clients',
  },
  {
    filename: 'og-education.jpg',
    title: 'For Education',
    subtitle: 'Secure Document Sharing for Schools',
    description: 'Course materials, research papers, and academic collaboration',
  },
];

// Template HTML basé sur le style de la homepage
const generateOGImageHTML = (config) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      width: 1200px;
      height: 630px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 80px;
      position: relative;
      overflow: hidden;
    }
    
    /* Pattern de points subtil comme sur la homepage */
    .background-pattern {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.03;
      background-image: 
        radial-gradient(circle at 2px 2px, #6b7280 1px, transparent 0);
      background-size: 40px 40px;
    }
    
    .content {
      z-index: 1;
      text-align: center;
      max-width: 900px;
      width: 100%;
    }
    
    /* Badge SOC2, HIPAA & GDPR Compliant */
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #1f2937;
      color: #ffffff;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 32px;
    }
    
    /* Logo DoQshare */
    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin-bottom: 24px;
    }
    .logo-square {
      width: 48px;
      height: 48px;
      background: #2563eb;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 28px;
      font-weight: 800;
    }
    .logo-text {
      font-size: 32px;
      font-weight: 800;
      color: #1e40af;
      letter-spacing: -0.5px;
    }
    
    /* Titre principal */
    .title {
      font-size: 64px;
      font-weight: 700;
      color: #1e40af;
      margin-bottom: 20px;
      line-height: 1.1;
      letter-spacing: -2px;
    }
    
    /* Sous-titre */
    .subtitle {
      font-size: 28px;
      font-weight: 500;
      color: #4b5563;
      margin-bottom: 32px;
      line-height: 1.3;
    }
    
    /* Description */
    .description {
      font-size: 20px;
      color: #6b7280;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto 40px;
    }
    
    /* Features avec checkmarks */
    .features {
      display: flex;
      justify-content: center;
      gap: 32px;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }
    .feature {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;
      color: #4b5563;
    }
    .checkmark {
      width: 20px;
      height: 20px;
      background: #10b981;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 12px;
      font-weight: bold;
    }
    
    /* Boutons CTA */
    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
    }
    .btn-primary {
      background: #2563eb;
      color: white;
      padding: 14px 28px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      border: none;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .btn-secondary {
      background: white;
      color: #1f2937;
      padding: 14px 28px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      border: 2px solid #e5e7eb;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  </style>
</head>
<body>
  <div class="background-pattern"></div>
  
  <div class="content">
    <div class="badge">
      SOC2, HIPAA & GDPR Compliant →
    </div>
    
    <div class="logo">
      <div class="logo-square">D</div>
      <div class="logo-text">DoQshare</div>
    </div>
    
    <h1 class="title">${config.title}</h1>
    <p class="subtitle">${config.subtitle}</p>
    <p class="description">${config.description}</p>
    
    <div class="features">
      <div class="feature">
        <div class="checkmark">✓</div>
        <span>Zero-Knowledge Architecture</span>
      </div>
      <div class="feature">
        <div class="checkmark">✓</div>
        <span>14-Day Free Trial</span>
      </div>
      <div class="feature">
        <div class="checkmark">✓</div>
        <span>No Credit Card Required</span>
      </div>
    </div>
    
    <div class="cta-buttons">
      <button class="btn-primary">
        Start Free Trial →
      </button>
      <button class="btn-secondary">
        Schedule Demo ▶
      </button>
    </div>
  </div>
</body>
</html>`;
};

// Créer les fichiers HTML
const createHTMLFiles = () => {
  const tempDir = path.join(__dirname, '../temp-og');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  ogImagesToCreate.forEach((config) => {
    const html = generateOGImageHTML(config);
    const htmlPath = path.join(tempDir, `${config.filename.replace('.jpg', '.html')}`);
    fs.writeFileSync(htmlPath, html);
    console.log(`✅ Created: ${config.filename.replace('.jpg', '.html')}`);
  });

  console.log(`\n✅ ${ogImagesToCreate.length} HTML files created in temp-og/`);
  return tempDir;
};

// Instructions
console.log(`
📸 Génération des Images Open Graph - Style Homepage

Ce script crée des fichiers HTML avec le même style que la homepage.
Vous pouvez ensuite les convertir en images JPG (1200x630px).

📋 Images à générer (${ogImagesToCreate.length}):
${ogImagesToCreate.map(img => `  - ${img.filename}`).join('\n')}

🛠️ Options pour convertir HTML → JPG:

1. **Avec Puppeteer (recommandé):**
   npm install puppeteer
   node scripts/generate-og-images-puppeteer.js

2. **Avec un service en ligne:**
   - https://htmlcsstoimage.com/
   - https://www.screenshotapi.net/
   - Ouvrir chaque HTML dans le navigateur et capturer

3. **Avec un outil de design:**
   - Ouvrir le HTML dans le navigateur
   - Capturer avec un outil de screenshot
   - Retoucher si nécessaire dans Photoshop/Figma

💡 Les fichiers HTML sont créés dans: temp-og/
   Chaque fichier peut être ouvert dans un navigateur pour prévisualisation.
`);

// Exécuter
createHTMLFiles();

console.log(`
📝 Prochaines étapes:

1. Les fichiers HTML sont dans temp-og/
2. Ouvrir chaque HTML dans le navigateur (1200x630px viewport)
3. Capturer l'écran ou utiliser un service de conversion
4. Sauvegarder en JPG dans public/images/
5. Vérifier la taille (< 500KB) et optimiser si nécessaire

🎨 Style:
- Même design que og-homepage.jpg
- Badge "SOC2, HIPAA & GDPR Compliant"
- Logo DoQshare
- Titre, sous-titre, description personnalisés
- Features avec checkmarks
- Boutons CTA
`);

