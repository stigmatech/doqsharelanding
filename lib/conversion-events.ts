// Configuration des événements de conversion pour DoQshare

export const CONVERSION_EVENTS = {
  // Événements de conversion principaux
  TRIAL_START: {
    action: 'trial_started',
    category: 'conversion',
    label: 'free_trial',
    value: 0
  },
  
  DEMO_REQUEST: {
    action: 'demo_requested', 
    category: 'conversion',
    label: 'demo_request',
    value: 0
  },
  
  ENTERPRISE_INQUIRY: {
    action: 'enterprise_inquiry',
    category: 'conversion', 
    label: 'enterprise_contact',
    value: 0
  },
  
  CONTACT_FORM: {
    action: 'contact_form_submitted',
    category: 'conversion',
    label: 'contact_form',
    value: 0
  },
  
  // Événements d'engagement
  PRICING_VIEW: {
    action: 'pricing_viewed',
    category: 'engagement',
    label: 'pricing_page',
    value: 0
  },
  
  FEATURES_VIEW: {
    action: 'features_viewed',
    category: 'engagement', 
    label: 'features_page',
    value: 0
  },
  
  SECURITY_VIEW: {
    action: 'security_viewed',
    category: 'engagement',
    label: 'security_page', 
    value: 0
  },
  
  COMPLIANCE_VIEW: {
    action: 'compliance_viewed',
    category: 'engagement',
    label: 'compliance_section',
    value: 0
  },
  
  // Événements de navigation
  NAVIGATION: {
    action: 'navigation_click',
    category: 'navigation',
    label: 'menu_click',
    value: 0
  },
  
  // Événements de scroll
  SCROLL_25: {
    action: 'scroll_depth',
    category: 'engagement',
    label: '25%',
    value: 25
  },
  
  SCROLL_50: {
    action: 'scroll_depth', 
    category: 'engagement',
    label: '50%',
    value: 50
  },
  
  SCROLL_75: {
    action: 'scroll_depth',
    category: 'engagement', 
    label: '75%',
    value: 75
  },
  
  SCROLL_100: {
    action: 'scroll_depth',
    category: 'engagement',
    label: '100%', 
    value: 100
  }
} as const;

// Types pour TypeScript
export type ConversionEvent = keyof typeof CONVERSION_EVENTS;
export type EventAction = typeof CONVERSION_EVENTS[ConversionEvent]['action'];
export type EventCategory = typeof CONVERSION_EVENTS[ConversionEvent]['category'];
