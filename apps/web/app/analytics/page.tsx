import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";
import { BarChart3, Eye, Clock, Download, Users, TrendingUp, AlertCircle } from "lucide-react";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Analytics Documents DoqShare - Suivi et Métriques Avancées",
  description: "Analytics avancés pour documents : suivi page par page, temps de lecture, téléchargements, engagement. Métriques détaillées pour optimiser votre stratégie documentaire.",
  keywords: [
    "analytics documents",
    "suivi documents",
    "métriques documents",
    "engagement documents",
    "temps de lecture",
    "téléchargements documents",
    "statistiques documents",
    "rapports documents"
  ],
  canonical: "/analytics",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DoqShare Analytics",
    "description": "Analytics avancés pour le suivi des documents",
    "applicationCategory": "AnalyticsApplication",
    "operatingSystem": "Web",
    "featureList": [
      "Suivi page par page",
      "Temps de lecture",
      "Métriques d'engagement",
      "Rapports détaillés"
    ]
  }
});

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Document Analytics</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Get detailed insights into how your documents are being viewed, shared, and engaged with. 
          Make data-driven decisions to optimize your document strategy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button size="lg">
            View Analytics
          </Button>
          <Button size="lg" variant="outline">
            See Demo
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,543</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4m 32s</div>
            <p className="text-xs text-muted-foreground">
              +12.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Downloads</CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              +8.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Viewers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">892</div>
            <p className="text-xs text-muted-foreground">
              +15.3% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <BarChart3 className="h-8 w-8 text-blue-600 mb-2" />
            <CardTitle>Page-by-Page Tracking</CardTitle>
            <CardDescription>
              See exactly which pages get the most attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Track time spent on each page, scroll depth, and engagement metrics 
              to understand what content resonates most with your audience.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
            <CardTitle>Engagement Trends</CardTitle>
            <CardDescription>
              Monitor engagement patterns over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Identify trends in document engagement, peak viewing times, 
              and seasonal patterns to optimize your sharing strategy.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Users className="h-8 w-8 text-purple-600 mb-2" />
            <CardTitle>Audience Insights</CardTitle>
            <CardDescription>
              Understand your document viewers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Get detailed information about your viewers including location, 
              device type, and viewing behavior patterns.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <AlertCircle className="h-8 w-8 text-orange-600 mb-2" />
            <CardTitle>Real-time Notifications</CardTitle>
            <CardDescription>
              Stay informed about document activity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Receive instant notifications when documents are viewed, 
              downloaded, or shared to stay on top of important activities.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Download className="h-8 w-8 text-red-600 mb-2" />
            <CardTitle>Download Tracking</CardTitle>
            <CardDescription>
              Monitor document downloads and sharing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Track when documents are downloaded, who downloaded them, 
              and how they're being shared with others.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Clock className="h-8 w-8 text-indigo-600 mb-2" />
            <CardTitle>Time Analytics</CardTitle>
            <CardDescription>
              Measure document engagement duration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Understand how long viewers spend with your documents 
              and identify the most engaging content sections.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Dashboard Preview */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Analytics Dashboard</h2>
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Document Performance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Pitch Deck Q4 2024</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Financial Model</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '72%'}}></div>
                    </div>
                    <span className="text-sm font-medium">72%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Market Analysis</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '68%'}}></div>
                    </div>
                    <span className="text-sm font-medium">68%</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">John Doe viewed Pitch Deck</span>
                  <span className="text-xs text-muted-foreground">2 min ago</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Jane Smith downloaded Financial Model</span>
                  <span className="text-xs text-muted-foreground">15 min ago</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Mike Johnson shared Market Analysis</span>
                  <span className="text-xs text-muted-foreground">1 hour ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Start tracking your documents today</h2>
        <p className="text-muted-foreground mb-6">
          Get detailed insights into document performance and optimize your sharing strategy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline">
            View Pricing
          </Button>
        </div>
      </div>
    </div>
  );
}
