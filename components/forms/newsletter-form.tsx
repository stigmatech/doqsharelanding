"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "@/hooks/use-form";
import { useAnalytics } from "@/hooks/use-analytics";
import { CheckCircle, AlertCircle, Loader2, Mail } from "lucide-react";

interface NewsletterFormProps {
  source?: string;
  className?: string;
  placeholder?: string;
  buttonText?: string;
  showIcon?: boolean;
  dictionary?: {
    forms?: {
      newsletter_form?: {
        email_placeholder?: string;
        button_text?: string;
        submitting?: string;
        success_title?: string;
        success_description?: string;
        success_button?: string;
        privacy_text?: string;
      };
    };
  };
}

export default function NewsletterForm({
  source = 'website',
  className = '',
  placeholder,
  buttonText,
  showIcon = true,
  dictionary,
}: NewsletterFormProps) {
  const form = dictionary?.forms?.newsletter_form;
  const defaultPlaceholder = placeholder || form?.email_placeholder || "Your email address";
  const defaultButtonText = buttonText || form?.button_text || "Subscribe";
  const [email, setEmail] = useState('');
  const { trackCustomEvent } = useAnalytics();
  
  const { isSubmitting, isSuccess, error, submitForm, resetForm } = useForm({
    onSuccess: () => {
      trackCustomEvent('newsletter_signup', 'conversion', source);
      setEmail('');
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    try {
      await submitForm('/api/newsletter', { email, source });
    } catch {
      // Error is handled by the hook
    }
  };

  if (isSuccess) {
    return (
      <div className={`text-center p-6 bg-green-50 border border-green-200 rounded-lg ${className}`}>
        <div className="flex items-center justify-center mb-2">
          <CheckCircle className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="text-green-800 font-semibold mb-1">{form?.success_title || "Subscription successful!"}</h3>
        <p className="text-green-700 text-sm">
          {form?.success_description || "Thank you for subscribing to our newsletter."}
        </p>
        <Button 
          onClick={resetForm} 
          variant="outline" 
          size="sm" 
          className="mt-3"
        >
          {form?.success_button || "Subscribe again"}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1 relative">
          {showIcon && (
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          )}
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={defaultPlaceholder}
            required
            disabled={isSubmitting}
            className={showIcon ? "pl-10" : ""}
          />
        </div>
        <Button 
          type="submit" 
          disabled={isSubmitting || !email.trim()}
          className="sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {form?.submitting || "Sending..."}
            </>
          ) : (
            defaultButtonText
          )}
        </Button>
      </div>
      
      <p className="text-xs text-gray-500 text-center">
        {form?.privacy_text || "By subscribing, you agree to receive our emails. You can unsubscribe at any time."}
      </p>
    </form>
  );
}
