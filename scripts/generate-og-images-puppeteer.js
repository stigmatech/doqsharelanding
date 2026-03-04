import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ogImages = [
  {
    filename: 'og-homepage.jpg',
    title: 'DoQshare',
    subtitle: 'Secure Document Sharing Platform',
    description: 'Advanced analytics, GDPR/HIPAA/SOC2 compliance',
    color: '#2563eb',
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
    color: '#1e40af',
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

async function generateOGImages() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const outputDir = path.join(__dirname, '../public/images');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('🚀 Génération des images Open Graph...\n');

  for (const config of ogImages) {
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 630 });
      await page.setContent(generateOGImageHTML(config), { waitUntil: 'networkidle0' });
      
      const outputPath = path.join(outputDir, config.filename);
      await page.screenshot({
        path: outputPath,
        type: 'jpeg',
        quality: 90,
        clip: { x: 0, y: 0, width: 1200, height: 630 },
      });

      await page.close();
      console.log(`✅ ${config.filename}`);
    } catch (error) {
      console.error(`❌ Erreur pour ${config.filename}:`, error.message);
    }
  }

  await browser.close();
  console.log(`\n✨ ${ogImages.length} images générées dans public/images/`);
}

generateOGImages().catch(console.error);

