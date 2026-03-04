const fs = require('fs');
const path = require('path');

// Configuration des images OG à générer
const ogImages = [
  {
    filename: 'og-homepage.jpg',
    title: 'DoQshare',
    subtitle: 'Secure Document Sharing Platform',
    description: 'Advanced analytics, GDPR/HIPAA/SOC2 compliance',
    color: '#2563eb', // blue-600
  },
  {
    filename: 'og-pricing.jpg',
    title: 'DoQshare Pricing',
    subtitle: 'Transparent Plans for Secure Data Rooms',
    description: 'Free, Pro, Business, Data Rooms plans',
    color: '#2563eb',
  },
  {
    filename: 'og-enterprise.jpg',
    title: 'DoQshare Enterprise',
    subtitle: 'Advanced Security & Complete Compliance',
    description: 'Military-grade security, 99.9% SLA, dedicated support',
    color: '#1e40af', // blue-800
  },
  {
    filename: 'og-data-room.jpg',
    title: 'DoQshare Data Room',
    subtitle: 'Secure Virtual Data Room',
    description: 'Due diligence, fundraising, M&A, investment rounds',
    color: '#2563eb',
  },
  {
    filename: 'og-features.jpg',
    title: 'DoQshare Features',
    subtitle: 'Advanced Analytics & Security',
    description: 'Real-time tracking, dynamic watermarking, compliance',
    color: '#2563eb',
  },
  {
    filename: 'og-about.jpg',
    title: 'About DoQshare',
    subtitle: 'Our Mission and Team',
    description: '41,000+ companies trust us with their documents',
    color: '#2563eb',
  },
  {
    filename: 'og-contact.jpg',
    title: 'Contact DoQshare',
    subtitle: 'Support and Sales',
    description: '24/7 support, free demonstrations, personalized assistance',
    color: '#2563eb',
  },
  {
    filename: 'og-security.jpg',
    title: 'DoQshare Security',
    subtitle: 'SOC2, HIPAA, GDPR Compliance',
    description: 'Military-grade encryption, secure data centers, 2FA, SSO',
    color: '#1e40af',
  },
  {
    filename: 'og-how-it-works.jpg',
    title: 'How DoQshare Works',
    subtitle: '3-Step Guide',
    description: 'Upload, share securely, track engagement',
    color: '#2563eb',
  },
  {
    filename: 'og-image.jpg',
    title: 'DoQshare',
    subtitle: 'Secure Document Sharing',
    description: 'Advanced analytics and enterprise-grade security',
    color: '#2563eb',
  },
];

// Template HTML pour générer les images (sera utilisé avec Puppeteer ou Canvas)
const generateOGImageHTML = (config) => {
  return `
<!DOCTYPE html>
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
      background: linear-gradient(135deg, ${config.color}15 0%, ${config.color}05 100%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 80px;
      position: relative;
      overflow: hidden;
    }
    .background-pattern {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.03;
      background-image: 
        radial-gradient(circle at 2px 2px, ${config.color} 1px, transparent 0);
      background-size: 40px 40px;
    }
    .content {
      z-index: 1;
      text-align: center;
      max-width: 900px;
    }
    .logo {
      font-size: 48px;
      font-weight: 800;
      color: ${config.color};
      margin-bottom: 20px;
      letter-spacing: -1px;
    }
    .title {
      font-size: 64px;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 16px;
      line-height: 1.1;
      letter-spacing: -2px;
    }
    .subtitle {
      font-size: 36px;
      font-weight: 500;
      color: #4b5563;
      margin-bottom: 24px;
      line-height: 1.2;
    }
    .description {
      font-size: 24px;
      color: #6b7280;
      line-height: 1.5;
      max-width: 800px;
      margin: 0 auto;
    }
    .badge {
      position: absolute;
      top: 40px;
      right: 40px;
      background: ${config.color};
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 18px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="background-pattern"></div>
  <div class="content">
    <div class="logo">DoQshare</div>
    <h1 class="title">${config.title}</h1>
    <p class="subtitle">${config.subtitle}</p>
    <p class="description">${config.description}</p>
  </div>
  <div class="badge">doqshare.com</div>
</body>
</html>
  `;
};

// Fonction pour créer les fichiers HTML temporaires
const createHTMLFiles = () => {
  const tempDir = path.join(__dirname, '../temp-og');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  ogImages.forEach((config) => {
    const html = generateOGImageHTML(config);
    const htmlPath = path.join(tempDir, `${config.filename.replace('.jpg', '.html')}`);
    fs.writeFileSync(htmlPath, html);
  });

  console.log('✅ HTML files created in temp-og/');
  return tempDir;
};

// Instructions pour l'utilisateur
console.log(`
📸 Script de génération d'images Open Graph

Ce script crée des fichiers HTML qui peuvent être convertis en images.

Options pour générer les images:

1. **Avec Puppeteer (recommandé):**
   npm install puppeteer
   node scripts/generate-og-images-puppeteer.js

2. **Avec un service en ligne:**
   - Utilisez https://htmlcsstoimage.com/
   - Ou https://www.screenshotapi.net/
   - Copiez le HTML depuis temp-og/ et convertissez-le

3. **Avec un outil local:**
   - Utilisez wkhtmltoimage
   - Ou utilisez un outil de design comme Figma/Canva

Les fichiers HTML sont créés dans: temp-og/
`);

// Créer les fichiers HTML
createHTMLFiles();

console.log(`
📋 Images à générer:
${ogImages.map(img => `  - ${img.filename}`).join('\n')}

💡 Prochaines étapes:
1. Les fichiers HTML sont dans temp-og/
2. Utilisez un outil pour convertir HTML → JPG (1200x630px)
3. Placez les images dans public/images/
`);

