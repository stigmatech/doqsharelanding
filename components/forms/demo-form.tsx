"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "@/hooks/use-form";
import { useAnalytics } from "@/hooks/use-analytics";
import { CheckCircle, AlertCircle, Loader2, Calendar, Clock } from "lucide-react";

interface DemoFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  preferredTime: string;
}

interface DemoFormProps {
  dictionary?: {
    forms?: {
      demo_form?: {
        title?: string;
        description?: string;
        first_name?: string;
        last_name?: string;
        email?: string;
        company?: string;
        phone?: string;
        preferred_time?: string;
        message?: string;
        first_name_placeholder?: string;
        last_name_placeholder?: string;
        email_placeholder?: string;
        company_placeholder?: string;
        phone_placeholder?: string;
        time_placeholder?: string;
        message_placeholder?: string;
        submit?: string;
        submitting?: string;
        success_title?: string;
        success_description?: string;
        success_button?: string;
        time_slots?: string[];
      };
    };
  };
}

export default function DemoForm({ dictionary }: DemoFormProps = {}) {
  const form = dictionary?.forms?.demo_form;
  const TIME_SLOTS = form?.time_slots || [
    'Monday morning (9am-12pm)',
    'Monday afternoon (2pm-5pm)',
    'Tuesday morning (9am-12pm)',
    'Tuesday afternoon (2pm-5pm)',
    'Wednesday morning (9am-12pm)',
    'Wednesday afternoon (2pm-5pm)',
    'Thursday morning (9am-12pm)',
    'Thursday afternoon (2pm-5pm)',
    'Friday morning (9am-12pm)',
    'Friday afternoon (2pm-5pm)',
    'Other (specify in message)',
  ];
  const [formData, setFormData] = useState<DemoFormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    preferredTime: '',
  });

  const { trackDemoAction } = useAnalytics();
  const { isSubmitting, isSuccess, error, submitForm, resetForm } = useForm({
    onSuccess: () => {
      trackDemoAction();
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        preferredTime: '',
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitForm('/api/demo', formData);
    } catch {
      // Error is handled by the hook
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          <CardTitle className="text-green-800">{form?.success_title || "Request sent successfully!"}</CardTitle>
          <CardDescription>
            {form?.success_description || "Our sales team will contact you within 24 hours to schedule your personalized demonstration."}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button onClick={resetForm} variant="outline">
            {form?.success_button || "Request another demo"}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          {form?.title || "Request a demo"}
        </CardTitle>
        <CardDescription>
          {form?.description || "Schedule a personalized 30-45 minute demonstration with our team."}
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
            <Label htmlFor="email">{form?.email || "Professional Email"} *</Label>
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
            <Label htmlFor="company">{form?.company || "Company"} *</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder={form?.company_placeholder || "Your company name"}
            />
          </div>

          <div>
            <Label htmlFor="phone">{form?.phone || "Phone"}</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder={form?.phone_placeholder || "+1 234 567 8900"}
            />
          </div>

          <div>
            <Label htmlFor="preferredTime" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {form?.preferred_time || "Preferred time slot"}
            </Label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">{form?.time_placeholder || "Select a time slot"}</option>
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Label htmlFor="message">{form?.message || "Message (optional)"}</Label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={form?.message_placeholder || "Describe your specific needs or questions..."}
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
              form?.submit || "Request demo"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
