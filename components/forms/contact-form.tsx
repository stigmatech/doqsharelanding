"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "@/hooks/use-form";
import { useAnalytics } from "@/hooks/use-analytics";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  dictionary?: {
    forms?: {
      contact_form?: {
        title?: string;
        description?: string;
        first_name?: string;
        last_name?: string;
        email?: string;
        company?: string;
        subject?: string;
        message?: string;
        first_name_placeholder?: string;
        last_name_placeholder?: string;
        email_placeholder?: string;
        company_placeholder?: string;
        subject_placeholder?: string;
        message_placeholder?: string;
        submit?: string;
        submitting?: string;
        success_title?: string;
        success_description?: string;
        success_button?: string;
      };
    };
  };
}

export default function ContactForm({ dictionary }: ContactFormProps = {}) {
  const form = dictionary?.forms?.contact_form;
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const { trackContactAction } = useAnalytics();
  const { isSubmitting, isSuccess, error, submitForm, resetForm } = useForm({
    onSuccess: () => {
      trackContactAction('contact_form');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitForm('/api/contact', formData);
    } catch {
      // Error is handled by the hook
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  if (isSuccess) {
    return (
      <Card>
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-green-800">{form?.success_title || "Message sent successfully!"}</CardTitle>
          <CardDescription>
            {form?.success_description || "Thank you for your message. We'll get back to you as soon as possible."}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button onClick={resetForm} variant="outline">
            {form?.success_button || "Send another message"}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{form?.title || "Send us a message"}</CardTitle>
        <CardDescription>
          {form?.description || "Fill out the form below and we'll get back to you within 24 hours."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">{form?.first_name || "First Name"} *</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                placeholder={form?.first_name_placeholder || "John"}
              />
            </div>
            <div>
              <Label htmlFor="lastName">{form?.last_name || "Last Name"} *</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                placeholder={form?.last_name_placeholder || "Doe"}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">{form?.email || "Email"} *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder={form?.email_placeholder || "john.doe@company.com"}
            />
          </div>

          <div>
            <Label htmlFor="company">{form?.company || "Company"}</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder={form?.company_placeholder || "Your company name"}
            />
          </div>

          <div>
            <Label htmlFor="subject">{form?.subject || "Subject"} *</Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder={form?.subject_placeholder || "How can we help you?"}
            />
          </div>

          <div>
            <Label htmlFor="message">{form?.message || "Message"} *</Label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={form?.message_placeholder || "Describe your request in detail..."}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                {form?.submitting || "Sending..."}
              </>
            ) : (
              form?.submit || "Send message"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
