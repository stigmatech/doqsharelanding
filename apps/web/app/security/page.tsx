import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Shield, Lock, Eye, Globe, CheckCircle } from "lucide-react";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Sécurité DoqShare - Conformité SOC2, HIPAA, GDPR et Chiffrement",
  description: "Découvrez les mesures de sécurité DoqShare : chiffrement AES-256, conformité SOC2/HIPAA/GDPR, centres de données sécurisés, 2FA, SSO. Sécurité de niveau militaire.",
  keywords: [
    "sécurité DoqShare",
    "chiffrement AES-256",
    "conformité SOC2",
    "HIPAA compliant",
    "GDPR compliant",
    "sécurité documents",
    "chiffrement militaire",
    "centres données sécurisés",
    "2FA SSO",
    "audit sécurité"
  ],
  canonical: "/security",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sécurité DoqShare",
    "description": "Mesures de sécurité et conformité de DoqShare",
    "mainEntity": {
      "@type": "Organization",
      "name": "DoqShare",
      "security": [
        "Chiffrement AES-256",
        "Conformité SOC2",
        "Conformité HIPAA",
        "Conformité GDPR"
      ]
    }
  }
});

export default function SecurityPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Security as DNA</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our priority is your document security. We know that the key to deal success is absolute control over your data.
        </p>
      </div>

      {/* Compliance Badges */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
          SOC2 Compliant
        </div>
        <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
          HIPAA Compliant
        </div>
        <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
          GDPR & CCPA Compliant
        </div>
        <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-medium">
          CCPA Compliant
        </div>
      </div>

      {/* Security Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <Shield className="h-8 w-8 text-blue-600 mb-2" />
            <CardTitle>SOC 2 Compliant</CardTitle>
            <CardDescription>
              Service Organization Control compliance with commitment to full security
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Regular audits and assessments to ensure the highest standards of security and availability.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Lock className="h-8 w-8 text-green-600 mb-2" />
            <CardTitle>Military-grade Encryption</CardTitle>
            <CardDescription>
              All data is secured with AES-256 encryption, the same standard used by governments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your documents are protected with the same encryption standards used by military and government agencies.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Globe className="h-8 w-8 text-purple-600 mb-2" />
            <CardTitle>Global Data Centers</CardTitle>
            <CardDescription>
              EU, US, UAE. Choose where your data resides with our flexible data center options
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Select the data center location that meets your compliance and performance requirements.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Eye className="h-8 w-8 text-orange-600 mb-2" />
            <CardTitle>GDPR & CCPA Compliant</CardTitle>
            <CardDescription>
              Full compliance with European and California privacy regulations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Built-in privacy controls and data protection measures to meet international privacy standards.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Shield className="h-8 w-8 text-red-600 mb-2" />
            <CardTitle>HIPAA Compliant</CardTitle>
            <CardDescription>
              Healthcare industry specific compliance for sensitive medical data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Specialized security measures for healthcare organizations handling protected health information.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Lock className="h-8 w-8 text-indigo-600 mb-2" />
            <CardTitle>2FA & SSO</CardTitle>
            <CardDescription>
              Advanced user security authentication and single sign-on integration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Multi-factor authentication and enterprise SSO integration for enhanced security.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Security Features List */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Security Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>End-to-end encryption</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Access controls and permissions</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Audit logs and monitoring</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Data backup and recovery</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Secure file sharing</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Watermarking and tracking</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Session management</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Regular security updates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Trusted by 41,000+ companies</h2>
        <p className="text-muted-foreground mb-8">
          Join thousands of companies who trust DoqShare with their most sensitive documents
        </p>
        <div className="flex flex-wrap justify-center gap-8 opacity-60">
          <div className="text-2xl font-bold">TechCorp</div>
          <div className="text-2xl font-bold">InnovateLab</div>
          <div className="text-2xl font-bold">DataFlow</div>
          <div className="text-2xl font-bold">StartupX</div>
        </div>
      </div>
    </div>
  );
}
