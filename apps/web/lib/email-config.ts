// Configuration des services email pour DoqShare

export const EMAIL_CONFIG = {
  // Configuration Resend
  RESEND: {
    API_KEY: process.env.RESEND_API_KEY,
    FROM_EMAIL: 'DoqShare <noreply@doqshare.com>',
    CONTACT_EMAIL: 'contact@doqshare.com',
    SALES_EMAIL: 'sales@doqshare.com',
    SUPPORT_EMAIL: 'support@doqshare.com',
    NEWSLETTER_EMAIL: 'newsletter@doqshare.com',
  },
  
  // Configuration EmailJS (alternative)
  EMAILJS: {
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    TEMPLATE_ID_CONTACT: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT,
    TEMPLATE_ID_NEWSLETTER: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_NEWSLETTER,
    TEMPLATE_ID_DEMO: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_DEMO,
    PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  },
  
  // Configuration SendGrid (alternative)
  SENDGRID: {
    API_KEY: process.env.SENDGRID_API_KEY,
    FROM_EMAIL: 'DoqShare <noreply@doqshare.com>',
  },
  
  // Configuration SMTP (alternative)
  SMTP: {
    HOST: process.env.SMTP_HOST,
    PORT: process.env.SMTP_PORT,
    USER: process.env.SMTP_USER,
    PASS: process.env.SMTP_PASS,
    FROM: process.env.SMTP_FROM,
  },
} as const;

// Templates d'emails
export const EMAIL_TEMPLATES = {
  CONTACT_CONFIRMATION: {
    subject: 'Merci pour votre message - DoqShare',
    template: 'contact-confirmation',
  },
  NEWSLETTER_WELCOME: {
    subject: 'Bienvenue dans la newsletter DoqShare !',
    template: 'newsletter-welcome',
  },
  DEMO_CONFIRMATION: {
    subject: 'Démonstration DoqShare - Confirmation de votre demande',
    template: 'demo-confirmation',
  },
  TEAM_NOTIFICATION: {
    subject: 'Nouveau message de contact',
    template: 'team-notification',
  },
} as const;

// Validation des emails
export const EMAIL_VALIDATION = {
  REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  MAX_LENGTH: 254,
  MIN_LENGTH: 5,
} as const;

// Rate limiting
export const RATE_LIMITS = {
  CONTACT_FORM: {
    MAX_REQUESTS: 5,
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes
  },
  NEWSLETTER: {
    MAX_REQUESTS: 3,
    WINDOW_MS: 60 * 60 * 1000, // 1 hour
  },
  DEMO_REQUEST: {
    MAX_REQUESTS: 2,
    WINDOW_MS: 24 * 60 * 60 * 1000, // 24 hours
  },
} as const;
