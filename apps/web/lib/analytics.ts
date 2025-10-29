// Google Analytics 4 Configuration
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX';

// Google Analytics 4 Events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Page view tracking
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Custom events for DoqShare
export const trackDocumentShare = (documentType: string) => {
  trackEvent('document_shared', 'engagement', documentType);
};

export const trackPricingView = (planName: string) => {
  trackEvent('pricing_viewed', 'engagement', planName);
};

export const trackContactForm = (formType: string) => {
  trackEvent('contact_form_submitted', 'conversion', formType);
};

export const trackTrialStart = () => {
  trackEvent('trial_started', 'conversion', 'free_trial');
};

export const trackDemoRequest = () => {
  trackEvent('demo_requested', 'conversion', 'demo_request');
};

export const trackEnterpriseInquiry = () => {
  trackEvent('enterprise_inquiry', 'conversion', 'enterprise_contact');
};

// E-commerce tracking for pricing plans
export const trackPurchase = (planName: string, value: number, currency: string = 'EUR') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: Date.now().toString(),
      value: value,
      currency: currency,
      items: [{
        item_id: planName,
        item_name: planName,
        category: 'subscription',
        quantity: 1,
        price: value,
      }],
    });
  }
};

// User engagement tracking
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', 'engagement', `${percentage}%`);
};

export const trackTimeOnPage = (timeInSeconds: number) => {
  trackEvent('time_on_page', 'engagement', `${timeInSeconds}s`);
};

// Conversion funnel tracking
export const trackLandingPageView = (pageName: string) => {
  trackEvent('landing_page_view', 'funnel', pageName);
};

export const trackFeatureInterest = (featureName: string) => {
  trackEvent('feature_interest', 'engagement', featureName);
};

export const trackSecurityInterest = () => {
  trackEvent('security_interest', 'engagement', 'security_page');
};

export const trackComplianceInterest = () => {
  trackEvent('compliance_interest', 'engagement', 'compliance_page');
};
