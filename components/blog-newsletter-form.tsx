"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface BlogNewsletterFormProps {
  dictionary?: {
    forms?: {
      newsletter_form?: {
        email_placeholder?: string;
        button_text?: string;
        submitting?: string;
        success_title?: string;
        success_description?: string;
      };
    };
  };
}

export function BlogNewsletterForm({ dictionary }: BlogNewsletterFormProps = {}) {
  const form = dictionary?.forms?.newsletter_form;
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, source: "blog" }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setIsSuccess(true);
      setEmail("");
    } catch (err: any) {
      setError(err.message || "Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
        <div className="flex items-center justify-center mb-2">
          <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-green-800 dark:text-green-200 font-semibold mb-1">
          {form?.success_title || "Successfully Subscribed!"}
        </h3>
        <p className="text-green-700 dark:text-green-300 text-sm">
          {form?.success_description || "Thank you for subscribing to our newsletter."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300 text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <div className="flex-1 relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={form?.email_placeholder || "Enter your email"}
            required
            disabled={isSubmitting}
            className="pl-10 h-12"
          />
        </div>
        <Button type="submit" disabled={isSubmitting || !email.trim()} size="lg">
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              {form?.submitting || "Subscribing..."}
            </>
          ) : (
            form?.button_text || "Subscribe"
          )}
        </Button>
      </div>
    </form>
  );
}

