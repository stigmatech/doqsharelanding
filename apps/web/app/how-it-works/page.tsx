import { Metadata } from "next";
import { Button } from "@workspace/ui/components/button";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-six";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Comment Fonctionne DoqShare - Guide d'Utilisation en 3 Étapes",
  description: "Découvrez comment utiliser DoqShare en 3 étapes simples : upload, partage sécurisé, analytics. Guide complet pour débuter avec le partage de documents sécurisé.",
  keywords: [
    "comment utiliser DoqShare",
    "guide DoqShare",
    "tutoriel partage documents",
    "étapes DoqShare",
    "débuter DoqShare",
    "utilisation DoqShare",
    "guide utilisateur",
    "tutoriel sécurité documents"
  ],
  canonical: "/how-it-works",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Comment utiliser DoqShare",
    "description": "Guide étape par étape pour utiliser DoqShare",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Upload des documents",
        "text": "Téléchargez vos documents sécurisés"
      },
      {
        "@type": "HowToStep", 
        "name": "Partage sécurisé",
        "text": "Partagez avec contrôle d'accès"
      },
      {
        "@type": "HowToStep",
        "name": "Analytics",
        "text": "Suivez l'engagement en temps réel"
      }
    ]
  }
});

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* How it Works Section */}
      <FeaturesSection />

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of companies who trust DoqShare with their most important documents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
}