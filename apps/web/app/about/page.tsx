import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";
import { Users, Target, Shield, Zap } from "lucide-react";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "About DoqShare - Our Mission and Team",
  description: "Discover the DoqShare team and our mission: revolutionizing secure document sharing. 41,000+ companies trust us with their most sensitive documents.",
  keywords: [
    "about DoqShare",
    "DoqShare team",
    "DoqShare mission",
    "DoqShare history",
    "DoqShare founders",
    "DoqShare company",
    "DoqShare values",
    "DoqShare culture"
  ],
  canonical: "/about",
  ogImage: "/images/og-about.jpg",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About DoqShare",
    "description": "About DoqShare and our team",
    "mainEntity": {
      "@type": "Organization",
      "name": "DoqShare",
      "description": "Secure document sharing platform",
      "foundingDate": "2020",
      "numberOfEmployees": "50-100",
      "founder": [
        {
          "@type": "Person",
          "name": "John Doe",
          "jobTitle": "CEO & Founder"
        },
        {
          "@type": "Person", 
          "name": "Jane Smith",
          "jobTitle": "CTO & Co-Founder"
        }
      ]
    }
  }
});

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About DoqShare</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're on a mission to revolutionize how teams share, track, and secure their most important documents.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-4">
            At DoqShare, we believe that document security shouldn't come at the cost of usability. 
            We're building the future of secure document sharing, where every interaction is tracked, 
            every access is controlled, and every deal is protected.
          </p>
          <p className="text-lg text-muted-foreground">
            Our platform empowers teams to share documents with confidence, knowing that their 
            sensitive information is protected by enterprise-grade security while maintaining 
            the simplicity that modern teams demand.
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4">By the Numbers</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Companies</span>
              <span className="font-bold">41,000+</span>
            </div>
            <div className="flex justify-between">
              <span>Documents</span>
              <span className="font-bold">215,000+</span>
            </div>
            <div className="flex justify-between">
              <span>Links Viewed</span>
              <span className="font-bold">1,200,000+</span>
            </div>
            <div className="flex justify-between">
              <span>Countries</span>
              <span className="font-bold">150+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Security First</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Every feature is built with security as the foundation, not an afterthought.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>User-Centric</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We listen to our users and build exactly what they need to succeed.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Target className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Transparency</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Clear pricing, honest communication, and no hidden fees or surprises.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-orange-600 mb-2" />
              <CardTitle>Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Constantly pushing the boundaries of what's possible in document security.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">JD</span>
              </div>
              <CardTitle>John Doe</CardTitle>
              <CardDescription>CEO & Founder</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Former security engineer with 10+ years experience in enterprise document management.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">JS</span>
              </div>
              <CardTitle>Jane Smith</CardTitle>
              <CardDescription>CTO & Co-Founder</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Full-stack engineer passionate about building secure, scalable systems.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-purple-600">MJ</span>
              </div>
              <CardTitle>Mike Johnson</CardTitle>
              <CardDescription>Head of Security</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Security expert with certifications in cloud security and compliance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-muted-foreground mb-6">
          Join thousands of companies who trust DoqShare with their most important documents.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            Start for Free
          </Button>
          <Button size="lg" variant="outline">
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
}
