"use client";

import { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card";
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

const TIME_SLOTS = [
  'Lundi matin (9h-12h)',
  'Lundi après-midi (14h-17h)',
  'Mardi matin (9h-12h)',
  'Mardi après-midi (14h-17h)',
  'Mercredi matin (9h-12h)',
  'Mercredi après-midi (14h-17h)',
  'Jeudi matin (9h-12h)',
  'Jeudi après-midi (14h-17h)',
  'Vendredi matin (9h-12h)',
  'Vendredi après-midi (14h-17h)',
  'Autre (préciser dans le message)',
];

export default function DemoForm() {
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
          <CardTitle className="text-green-800">Demande envoyée avec succès !</CardTitle>
          <CardDescription>
            Notre équipe commerciale vous contactera dans les 24 heures pour planifier votre démonstration personnalisée.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button onClick={resetForm} variant="outline">
            Demander une autre démonstration
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
          Demander une démonstration
        </CardTitle>
        <CardDescription>
          Planifiez une démonstration personnalisée de 30-45 minutes avec notre équipe.
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
              <Label htmlFor="firstName">Prénom *</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                placeholder="Jean"
              />
            </div>
            <div>
              <Label htmlFor="lastName">Nom *</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                placeholder="Dupont"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email professionnel *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder="jean.dupont@entreprise.com"
            />
          </div>

          <div>
            <Label htmlFor="company">Entreprise *</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder="Nom de votre entreprise"
            />
          </div>

          <div>
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="+33 1 23 45 67 89"
            />
          </div>

          <div>
            <Label htmlFor="preferredTime" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Créneau préféré
            </Label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Sélectionnez un créneau</option>
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Label htmlFor="message">Message (optionnel)</Label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Décrivez vos besoins spécifiques ou questions..."
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
                Envoi en cours...
              </>
            ) : (
              'Demander la démonstration'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
