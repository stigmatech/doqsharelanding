"use client";

import { useCallback } from "react";
import {
  trackEvent,
  trackDocumentShare,
  trackPricingView,
  trackContactForm,
  trackTrialStart,
  trackDemoRequest,
  trackEnterpriseInquiry,
  trackLandingPageView,
  trackFeatureInterest,
  trackSecurityInterest,
  trackComplianceInterest,
} from "@/lib/analytics";

export function useAnalytics() {
  const trackPageView = useCallback((pageName: string) => {
    trackLandingPageView(pageName);
  }, []);

  const trackDocumentAction = useCallback((documentType: string) => {
    trackDocumentShare(documentType);
  }, []);

  const trackPricingAction = useCallback((planName: string) => {
    trackPricingView(planName);
  }, []);

  const trackContactAction = useCallback((formType: string) => {
    trackContactForm(formType);
  }, []);

  const trackTrialAction = useCallback(() => {
    trackTrialStart();
  }, []);

  const trackDemoAction = useCallback(() => {
    trackDemoRequest();
  }, []);

  const trackEnterpriseAction = useCallback(() => {
    trackEnterpriseInquiry();
  }, []);

  const trackFeatureAction = useCallback((featureName: string) => {
    trackFeatureInterest(featureName);
  }, []);

  const trackSecurityAction = useCallback(() => {
    trackSecurityInterest();
  }, []);

  const trackComplianceAction = useCallback(() => {
    trackComplianceInterest();
  }, []);

  const trackCustomEvent = useCallback((
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    trackEvent(action, category, label, value);
  }, []);

  return {
    trackPageView,
    trackDocumentAction,
    trackPricingAction,
    trackContactAction,
    trackTrialAction,
    trackDemoAction,
    trackEnterpriseAction,
    trackFeatureAction,
    trackSecurityAction,
    trackComplianceAction,
    trackCustomEvent,
  };
}
