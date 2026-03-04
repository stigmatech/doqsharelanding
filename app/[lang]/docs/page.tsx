import { Metadata } from "next";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Key, Webhook, Book, Terminal, Shield, FileText, BarChart3, FolderOpen, AlertCircle, CheckCircle2, Zap, Lightbulb } from "lucide-react";
import { BackgroundPattern } from "@/components/background-pattern";
import Link from "next/link";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";
import { ApiEndpointCard } from "@/components/api-endpoint-card";

interface DocsPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: DocsPageProps): Promise<Metadata> {
  const { lang } = await params;
  
  return generateSEOMetadata({
    title: "DoQshare API Documentation - Developer Guide and Integration",
    description: "Complete API documentation for DoQshare. Learn how to integrate secure document sharing, analytics, and management into your applications. RESTful API with comprehensive examples and SDKs.",
    keywords: [
      "DoQshare API",
      "API documentation",
      "document sharing API",
      "REST API",
      "developer guide",
      "API integration",
      "webhooks",
      "SDK",
      "document management API",
      "secure document API",
      "analytics API",
      "API reference"
    ],
    canonical: `/${lang}/docs`,
    ogImage: "/images/og-docs.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "DoQshare API Documentation",
      "description": "Complete API documentation for integrating DoQshare into your applications",
      "author": {
        "@type": "Organization",
        "name": "DoQshare"
      }
    }
  });
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const docs = dictionary.docs_page;
  
  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-[60vh] flex items-center justify-center px-6 py-12 lg:py-16">
        <BackgroundPattern />
        <div className="relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Code className="h-4 w-4" />
            {dictionary.hero_docs.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter mb-6">
            {dictionary.hero_docs.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {dictionary.hero_docs.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full text-base" asChild>
              <Link href="#getting-started">
                {dictionary.hero_docs.cta_primary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
              asChild
            >
              <Link href="https://api.doqshare.com" target="_blank" rel="noopener noreferrer">
                {dictionary.hero_docs.cta_secondary}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <ScrollAnimation>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          <Link href="#authentication" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Key className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg">{docs.quick_links.authentication.title}</CardTitle>
                <CardDescription>{docs.quick_links.authentication.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="#endpoints" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Terminal className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg">{docs.quick_links.endpoints.title}</CardTitle>
                <CardDescription>{docs.quick_links.endpoints.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="#webhooks" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Webhook className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg">{docs.quick_links.webhooks.title}</CardTitle>
                <CardDescription>{docs.quick_links.webhooks.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="#sdks" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Book className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg">{docs.quick_links.sdks.title}</CardTitle>
                <CardDescription>{docs.quick_links.sdks.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="#integration-guides" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Zap className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg">{docs.api_integration_guides.title}</CardTitle>
                <CardDescription>{lang === "fr" ? "Guides d'intégration" : "Integration guides"}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          </div>
        </div>
      </ScrollAnimation>

      {/* Getting Started Section */}
      <ScrollAnimation delay={0.1}>
        <section id="getting-started" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{docs.getting_started.title}</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{docs.getting_started.step1.title}</CardTitle>
                <CardDescription>{docs.getting_started.step1.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  <div className="text-muted-foreground">{docs.getting_started.step1.instruction1}</div>
                  <div className="text-muted-foreground">{docs.getting_started.step1.instruction2}</div>
                  <div className="mt-2 text-foreground">API_KEY=your_api_key_here</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{docs.getting_started.step2.title}</CardTitle>
                <CardDescription>{docs.getting_started.step2.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Badge variant="outline" className="mb-2">cURL</Badge>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <div className="text-muted-foreground">curl https://api.doqshare.com/v1/documents \</div>
                      <div className="text-muted-foreground ml-4">-H "Authorization: Bearer YOUR_API_KEY"</div>
                    </div>
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">JavaScript</Badge>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <div className="text-foreground">const response = await fetch(</div>
                      <div className="text-foreground ml-4">'https://api.doqshare.com/v1/documents',</div>
                      <div className="text-foreground ml-4">{'{'}</div>
                      <div className="text-foreground ml-8">headers: {'{'}</div>
                      <div className="text-foreground ml-12">'Authorization': 'Bearer YOUR_API_KEY'</div>
                      <div className="text-foreground ml-8">{'}'}</div>
                      <div className="text-foreground ml-4">{'}'}</div>
                      <div className="text-foreground">);</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </ScrollAnimation>

      {/* Authentication Section */}
      <ScrollAnimation delay={0.2}>
        <section id="authentication" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Key className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">{docs.authentication.title}</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              {docs.authentication.description}
            </p>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{docs.authentication.api_key_auth.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">{docs.authentication.api_key_auth.header_format}</p>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                      Authorization: Bearer YOUR_API_KEY
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">{docs.authentication.api_key_auth.example_request}</p>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <div className="text-foreground">curl -X GET \</div>
                      <div className="text-foreground ml-4">https://api.doqshare.com/v1/documents \</div>
                      <div className="text-foreground ml-4">-H "Authorization: Bearer sk_live_..."</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-2">{docs.authentication.security_best_practices.title}</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>{docs.authentication.security_best_practices.practice1}</li>
                    <li>{docs.authentication.security_best_practices.practice2}</li>
                    <li>{docs.authentication.security_best_practices.practice3}</li>
                    <li>{docs.authentication.security_best_practices.practice4}</li>
                    <li>{docs.authentication.security_best_practices.practice5}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>

      {/* Base URL Section */}
      <ScrollAnimation delay={0.1}>
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Terminal className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{docs.endpoints.base_url}</span>
                </div>
                <code className="text-lg font-mono text-foreground">{docs.endpoints.base_url_value}</code>
              </CardContent>
            </Card>
          </div>
        </section>
      </ScrollAnimation>

      {/* Endpoints Section */}
      <ScrollAnimation delay={0.1}>
        <section id="endpoints" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">{docs.endpoints.title}</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-12">
            {docs.endpoints.description}
          </p>

          {/* Documents Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Documents</h3>
            </div>
            <div className="space-y-6">
              <ApiEndpointCard
                method="GET"
                path="/documents"
                title={docs.endpoints.list_documents.title}
                description={docs.endpoints.list_documents.description}
                queryParams={docs.endpoints.list_documents.query_params}
                responseExample={`{
  "data": [
    {
      "id": "doc_123",
      "name": "example.pdf",
      "size": 1024000,
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}`}
                lang={lang}
              />

              <ApiEndpointCard
                method="GET"
                path="/documents/{id}"
                title={docs.endpoints.get_document.title}
                description={docs.endpoints.get_document.description}
                responseExample={`{
  "id": "doc_123",
  "name": "example.pdf",
  "size": 1024000,
  "mime_type": "application/pdf",
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-01-01T00:00:00Z",
  "settings": {
    "password_protected": false,
    "watermark_enabled": true,
    "allow_download": true
  }
}`}
                lang={lang}
              />

              <ApiEndpointCard
                method="POST"
                path="/documents"
                title={docs.endpoints.create_document.title}
                description={docs.endpoints.create_document.description}
                requestBody={docs.endpoints.create_document.request_body}
                responseExample={`{
  "id": "doc_123",
  "name": "document.pdf",
  "share_url": "https://doqshare.com/s/abc123",
  "created_at": "2024-01-01T00:00:00Z"
}`}
                lang={lang}
              />

              <ApiEndpointCard
                method="PUT"
                path="/documents/{id}"
                title={docs.endpoints.update_document.title}
                description={docs.endpoints.update_document.description}
                requestBody={{
                  name: "Updated document name",
                  password: "New password (optional)",
                  expires_at: "2024-12-31T23:59:59Z (optional)"
                }}
                lang={lang}
              />

              <ApiEndpointCard
                method="DELETE"
                path="/documents/{id}"
                title={docs.endpoints.delete_document.title}
                description={docs.endpoints.delete_document.description}
                responseExample={`{
  "success": true,
  "message": "Document deleted successfully"
}`}
                lang={lang}
              />
            </div>
          </div>

          {/* Sharing Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Key className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">{lang === "fr" ? "Partage" : "Sharing"}</h3>
            </div>
            <div className="space-y-6">
              <ApiEndpointCard
                method="POST"
                path="/documents/{id}/share"
                title={docs.endpoints.share_document.title}
                description={docs.endpoints.share_document.description}
                requestBody={docs.endpoints.share_document.request_body}
                responseExample={`{
  "id": "share_123",
  "url": "https://doqshare.com/s/abc123",
  "expires_at": "2024-12-31T23:59:59Z",
  "max_views": 10,
  "created_at": "2024-01-01T00:00:00Z"
}`}
                lang={lang}
              />

              <ApiEndpointCard
                method="GET"
                path="/documents/{id}/shares"
                title={docs.endpoints.list_shares.title}
                description={docs.endpoints.list_shares.description}
                responseExample={`{
  "data": [
    {
      "id": "share_123",
      "url": "https://doqshare.com/s/abc123",
      "views": 5,
      "created_at": "2024-01-01T00:00:00Z"
    }
  ]
}`}
                lang={lang}
              />

              <ApiEndpointCard
                method="DELETE"
                path="/documents/{id}/shares/{share_id}"
                title={docs.endpoints.revoke_share.title}
                description={docs.endpoints.revoke_share.description}
                responseExample={`{
  "success": true,
  "message": "Share link revoked"
}`}
                lang={lang}
              />
            </div>
          </div>

          {/* Analytics Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">{lang === "fr" ? "Analyses" : "Analytics"}</h3>
            </div>
            <div className="space-y-6">
              <ApiEndpointCard
                method="GET"
                path="/documents/{id}/analytics"
                title={docs.endpoints.get_analytics.title}
                description={docs.endpoints.get_analytics.description}
                queryParams={docs.endpoints.get_analytics.query_params}
                responseExample={`{
  "document_id": "doc_123",
  "total_views": 150,
  "unique_viewers": 45,
  "total_downloads": 12,
  "average_time_spent": 180,
  "period": {
    "start_date": "2024-01-01",
    "end_date": "2024-01-31"
  }
}`}
                lang={lang}
              />

              <ApiEndpointCard
                method="GET"
                path="/documents/{id}/analytics/views"
                title={docs.endpoints.get_analytics_views.title}
                description={docs.endpoints.get_analytics_views.description}
                responseExample={`{
  "data": [
    {
      "page": 1,
      "views": 120,
      "average_time": 45,
      "unique_viewers": 35
    },
    {
      "page": 2,
      "views": 95,
      "average_time": 30,
      "unique_viewers": 28
    }
  ]
}`}
                lang={lang}
              />

              <ApiEndpointCard
                method="GET"
                path="/documents/{id}/analytics/downloads"
                title={docs.endpoints.get_analytics_downloads.title}
                description={docs.endpoints.get_analytics_downloads.description}
                responseExample={`{
  "total_downloads": 12,
  "downloads": [
    {
      "downloaded_at": "2024-01-15T10:30:00Z",
      "viewer_email": "user@example.com",
      "ip_address": "192.168.1.1"
    }
  ]
}`}
                lang={lang}
              />
            </div>
          </div>

          {/* Data Rooms Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FolderOpen className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">{lang === "fr" ? "Salles de données" : "Data Rooms"}</h3>
            </div>
            <div className="space-y-6">
              <ApiEndpointCard
                method="GET"
                path="/data-rooms"
                title={docs.endpoints.list_data_rooms.title}
                description={docs.endpoints.list_data_rooms.description}
                responseExample={`{
  "data": [
    {
      "id": "dr_123",
      "name": "M&A Data Room",
      "created_at": "2024-01-01T00:00:00Z"
    }
  ]
}`}
                lang={lang}
              />

              <ApiEndpointCard
                method="GET"
                path="/data-rooms/{id}"
                title={docs.endpoints.get_data_room.title}
                description={docs.endpoints.get_data_room.description}
                lang={lang}
              />

              <ApiEndpointCard
                method="POST"
                path="/data-rooms"
                title={docs.endpoints.create_data_room.title}
                description={docs.endpoints.create_data_room.description}
                requestBody={docs.endpoints.create_data_room.request_body}
                lang={lang}
              />

              <ApiEndpointCard
                method="PUT"
                path="/data-rooms/{id}"
                title={docs.endpoints.update_data_room.title}
                description={docs.endpoints.update_data_room.description}
                lang={lang}
              />

              <ApiEndpointCard
                method="DELETE"
                path="/data-rooms/{id}"
                title={docs.endpoints.delete_data_room.title}
                description={docs.endpoints.delete_data_room.description}
                lang={lang}
              />

              <ApiEndpointCard
                method="POST"
                path="/data-rooms/{id}/files"
                title={docs.endpoints.upload_file_to_data_room.title}
                description={docs.endpoints.upload_file_to_data_room.description}
                lang={lang}
              />

              <ApiEndpointCard
                method="GET"
                path="/data-rooms/{id}/files"
                title={docs.endpoints.list_data_room_files.title}
                description={docs.endpoints.list_data_room_files.description}
                lang={lang}
              />

              <ApiEndpointCard
                method="DELETE"
                path="/data-rooms/{id}/files/{file_id}"
                title={docs.endpoints.delete_data_room_file.title}
                description={docs.endpoints.delete_data_room_file.description}
                lang={lang}
              />
            </div>
          </div>

          {/* Rate Limiting Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">{docs.endpoints.rate_limiting.title}</h3>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>{docs.endpoints.rate_limiting.description}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="font-medium">{lang === "fr" ? "Plan gratuit" : "Free Plan"}</span>
                    <code className="text-sm">{docs.endpoints.rate_limiting.free_plan}</code>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="font-medium">{lang === "fr" ? "Plan Pro" : "Pro Plan"}</span>
                    <code className="text-sm">{docs.endpoints.rate_limiting.pro_plan}</code>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="font-medium">{lang === "fr" ? "Plan Business" : "Business Plan"}</span>
                    <code className="text-sm">{docs.endpoints.rate_limiting.business_plan}</code>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="font-medium">{lang === "fr" ? "Plan Enterprise" : "Enterprise Plan"}</span>
                    <code className="text-sm">{docs.endpoints.rate_limiting.enterprise_plan}</code>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <h4 className="font-semibold mb-2">{lang === "fr" ? "En-têtes de réponse" : "Response Headers"}</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <div><span className="text-muted-foreground">X-RateLimit-Limit:</span> <span className="text-foreground">{docs.endpoints.rate_limiting.headers.x_rate_limit_limit}</span></div>
                    <div><span className="text-muted-foreground">X-RateLimit-Remaining:</span> <span className="text-foreground">{docs.endpoints.rate_limiting.headers.x_rate_limit_remaining}</span></div>
                    <div><span className="text-muted-foreground">X-RateLimit-Reset:</span> <span className="text-foreground">{docs.endpoints.rate_limiting.headers.x_rate_limit_reset}</span></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Error Codes Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">{docs.endpoints.error_codes.title}</h3>
            </div>
            <p className="text-muted-foreground mb-6">{docs.endpoints.error_codes.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">{docs.endpoints.error_codes["400"].code}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{docs.endpoints.error_codes["400"].description}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">{docs.endpoints.error_codes["401"].code}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{docs.endpoints.error_codes["401"].description}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">{docs.endpoints.error_codes["403"].code}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{docs.endpoints.error_codes["403"].description}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">{docs.endpoints.error_codes["404"].code}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{docs.endpoints.error_codes["404"].description}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">{docs.endpoints.error_codes["429"].code}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{docs.endpoints.error_codes["429"].description}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">{docs.endpoints.error_codes["500"].code}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{docs.endpoints.error_codes["500"].description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>

      {/* Webhooks Section */}
      <ScrollAnimation delay={0.2}>
        <section id="webhooks" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Webhook className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">{docs.webhooks.title}</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-12">
              {docs.webhooks.description}
            </p>

            {/* Getting Started with Webhooks */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">{docs.webhooks.getting_started.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{docs.webhooks.getting_started.step1.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{docs.webhooks.getting_started.step1.description}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{docs.webhooks.getting_started.step2.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{docs.webhooks.getting_started.step2.description}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{docs.webhooks.getting_started.step3.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{docs.webhooks.getting_started.step3.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Available Events */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">{docs.webhooks.available_events.title}</h3>
              <p className="text-muted-foreground mb-6">{docs.webhooks.available_events.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <code className="text-sm font-mono">document.created</code>
                    </div>
                    <p className="text-xs text-muted-foreground">{docs.webhooks.available_events.document_created}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <code className="text-sm font-mono">document.updated</code>
                    </div>
                    <p className="text-xs text-muted-foreground">{docs.webhooks.available_events.document_updated}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <code className="text-sm font-mono">document.deleted</code>
                    </div>
                    <p className="text-xs text-muted-foreground">{docs.webhooks.available_events.document_deleted}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <code className="text-sm font-mono">document.viewed</code>
                    </div>
                    <p className="text-xs text-muted-foreground">{docs.webhooks.available_events.document_viewed}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <code className="text-sm font-mono">document.downloaded</code>
                    </div>
                    <p className="text-xs text-muted-foreground">{docs.webhooks.available_events.document_downloaded}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <code className="text-sm font-mono">document.shared</code>
                    </div>
                    <p className="text-xs text-muted-foreground">{docs.webhooks.available_events.document_shared}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <code className="text-sm font-mono">share.revoked</code>
                    </div>
                    <p className="text-xs text-muted-foreground">{docs.webhooks.available_events.share_revoked}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <code className="text-sm font-mono">data_room.created</code>
                    </div>
                    <p className="text-xs text-muted-foreground">{docs.webhooks.available_events.data_room_created}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <code className="text-sm font-mono">data_room.updated</code>
                    </div>
                    <p className="text-xs text-muted-foreground">{docs.webhooks.available_events.data_room_updated}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <code className="text-sm font-mono">data_room.deleted</code>
                    </div>
                    <p className="text-xs text-muted-foreground">{docs.webhooks.available_events.data_room_deleted}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <code className="text-sm font-mono">file.uploaded</code>
                    </div>
                    <p className="text-xs text-muted-foreground">{docs.webhooks.available_events.file_uploaded}</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Webhook Payload */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">{docs.webhooks.webhook_payload.title}</h3>
              <p className="text-muted-foreground mb-4">{docs.webhooks.webhook_payload.description}</p>
              <Card>
                <CardContent className="p-6">
                  <div className="bg-muted p-4 rounded-lg font-mono text-xs overflow-x-auto mb-4">
                    <div className="text-foreground">{'{'}</div>
                    <div className="text-foreground ml-4">
                      <span className="text-blue-600 dark:text-blue-400">"event"</span>: <span className="text-green-600 dark:text-green-400">"document.viewed"</span>,
                    </div>
                    <div className="text-foreground ml-4">
                      <span className="text-blue-600 dark:text-blue-400">"data"</span>: {'{'}
                    </div>
                    <div className="text-foreground ml-8">
                      <span className="text-blue-600 dark:text-blue-400">"document_id"</span>: <span className="text-green-600 dark:text-green-400">"doc_123"</span>,
                    </div>
                    <div className="text-foreground ml-8">
                      <span className="text-blue-600 dark:text-blue-400">"viewer_email"</span>: <span className="text-green-600 dark:text-green-400">"user@example.com"</span>
                    </div>
                    <div className="text-foreground ml-4">{'}'},</div>
                    <div className="text-foreground ml-4">
                      <span className="text-blue-600 dark:text-blue-400">"timestamp"</span>: <span className="text-green-600 dark:text-green-400">"2024-01-01T00:00:00Z"</span>,
                    </div>
                    <div className="text-foreground ml-4">
                      <span className="text-blue-600 dark:text-blue-400">"webhook_id"</span>: <span className="text-green-600 dark:text-green-400">"wh_123"</span>
                    </div>
                    <div className="text-foreground">{'}'}</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div><strong>{docs.webhooks.webhook_payload.structure.event}:</strong> {docs.webhooks.webhook_payload.structure.event}</div>
                    <div><strong>{docs.webhooks.webhook_payload.structure.data}:</strong> {docs.webhooks.webhook_payload.structure.data}</div>
                    <div><strong>{docs.webhooks.webhook_payload.structure.timestamp}:</strong> {docs.webhooks.webhook_payload.structure.timestamp}</div>
                    <div><strong>{docs.webhooks.webhook_payload.structure.webhook_id}:</strong> {docs.webhooks.webhook_payload.structure.webhook_id}</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Webhook Security */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">{docs.webhooks.security.title}</h3>
              <Card>
                <CardHeader>
                  <CardTitle>{docs.webhooks.security.description}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">{lang === "fr" ? "En-tête de signature" : "Signature Header"}:</p>
                      <code className="bg-muted px-3 py-1 rounded text-sm">{docs.webhooks.security.signature_header}</code>
                    </div>
                    <p className="text-sm text-muted-foreground">{docs.webhooks.security.verification}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Retry Policy */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">{docs.webhooks.retry_policy.title}</h3>
              <Card>
                <CardHeader>
                  <CardTitle>{docs.webhooks.retry_policy.description}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm font-medium">{lang === "fr" ? "Planification des nouvelles tentatives" : "Retry Schedule"}:</p>
                    <p className="text-sm text-muted-foreground">{docs.webhooks.retry_policy.retry_schedule}</p>
                    <p className="text-sm font-medium mt-4">{lang === "fr" ? "Nombre maximum de tentatives" : "Maximum Retries"}:</p>
                    <p className="text-sm text-muted-foreground">{docs.webhooks.retry_policy.max_retries}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Webhook Endpoints */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">{lang === "fr" ? "Endpoints Webhook" : "Webhook Endpoints"}</h3>
              <div className="space-y-6">
                <ApiEndpointCard
                  method="GET"
                  path="/webhooks"
                  title={docs.webhooks.endpoints.list.title}
                  description={lang === "fr" ? "Récupérez tous les webhooks configurés dans votre compte." : "Retrieve all webhooks configured in your account."}
                  lang={lang}
                />
                <ApiEndpointCard
                  method="POST"
                  path="/webhooks"
                  title={docs.webhooks.endpoints.create.title}
                  description={lang === "fr" ? "Créez un nouveau webhook pour recevoir des notifications d'événements." : "Create a new webhook to receive event notifications."}
                  requestBody={docs.webhooks.endpoints.create.request_body}
                  lang={lang}
                />
                <ApiEndpointCard
                  method="GET"
                  path="/webhooks/{id}"
                  title={docs.webhooks.endpoints.get.title}
                  description={lang === "fr" ? "Obtenez les détails d'un webhook spécifique." : "Get details of a specific webhook."}
                  lang={lang}
                />
                <ApiEndpointCard
                  method="PUT"
                  path="/webhooks/{id}"
                  title={docs.webhooks.endpoints.update.title}
                  description={lang === "fr" ? "Mettez à jour les paramètres d'un webhook." : "Update webhook settings."}
                  lang={lang}
                />
                <ApiEndpointCard
                  method="DELETE"
                  path="/webhooks/{id}"
                  title={docs.webhooks.endpoints.delete.title}
                  description={lang === "fr" ? "Supprimez un webhook." : "Delete a webhook."}
                  lang={lang}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollAnimation>

      {/* SDKs Section */}
      <ScrollAnimation delay={0.1}>
        <section id="sdks" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Book className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">{docs.sdks.title}</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8">
            {docs.sdks.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>JavaScript/TypeScript</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm mb-4">
                  npm install @doqshare/sdk
                </div>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href="https://github.com/doqshare/js-sdk" target="_blank" rel="noopener noreferrer">
                    {docs.sdks.view_on_github}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Python</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm mb-4">
                  pip install doqshare
                </div>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href="https://github.com/doqshare/python-sdk" target="_blank" rel="noopener noreferrer">
                    {docs.sdks.view_on_github}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>PHP</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm mb-4">
                  composer require doqshare/sdk
                </div>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href="https://github.com/doqshare/php-sdk" target="_blank" rel="noopener noreferrer">
                    {docs.sdks.view_on_github}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </ScrollAnimation>

      {/* Integration Guides Section */}
      <ScrollAnimation delay={0.1}>
        <section id="integration-guides" className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">{docs.api_integration_guides.title}</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-12">
                {docs.api_integration_guides.description}
              </p>

              {/* Step-by-Step Guide */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6">{docs.api_integration_guides.step_by_step.title}</h3>
                <p className="text-muted-foreground mb-8">{docs.api_integration_guides.step_by_step.description}</p>
                <div className="space-y-6">
                  {[
                    { step: docs.api_integration_guides.step_by_step.step1, number: 1 },
                    { step: docs.api_integration_guides.step_by_step.step2, number: 2 },
                    { step: docs.api_integration_guides.step_by_step.step3, number: 3 },
                    { step: docs.api_integration_guides.step_by_step.step4, number: 4 },
                    { step: docs.api_integration_guides.step_by_step.step5, number: 5 },
                  ].map(({ step, number }) => (
                    <Card key={number}>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                            {number}
                          </div>
                          <CardTitle className="text-xl">{step.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Language-Specific Examples */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6">{docs.api_integration_guides.language_examples.title}</h3>
                <p className="text-muted-foreground mb-8">{docs.api_integration_guides.language_examples.description}</p>
                
                <div className="space-y-8">
                  {/* JavaScript Example */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{docs.api_integration_guides.language_examples.javascript.title}</CardTitle>
                      <CardDescription>{docs.api_integration_guides.language_examples.javascript.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-medium mb-2">{lang === "fr" ? "Installation" : "Installation"}:</p>
                        <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                          {docs.api_integration_guides.language_examples.javascript.install}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">{docs.api_integration_guides.language_examples.javascript.example.title}:</p>
                        <div className="bg-muted p-4 rounded-lg font-mono text-xs overflow-x-auto">
                          <pre className="whitespace-pre-wrap text-foreground">{`import { DoQshare } from '@doqshare/sdk';

const client = new DoQshare(process.env.DOQSHARE_API_KEY);

// ${docs.api_integration_guides.language_examples.javascript.example.upload}
const document = await client.documents.create({
  name: 'example.pdf',
  file: fs.readFileSync('./example.pdf', 'base64'),
  password: 'optional-password',
  watermark: true
});

// ${docs.api_integration_guides.language_examples.javascript.example.share}
const share = await client.documents.share(document.id, {
  expires_at: '2024-12-31T23:59:59Z',
  max_views: 10
});

// ${docs.api_integration_guides.language_examples.javascript.example.analytics}
const analytics = await client.documents.analytics(document.id);
console.log('Total views:', analytics.total_views);`}</pre>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Python Example */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{docs.api_integration_guides.language_examples.python.title}</CardTitle>
                      <CardDescription>{docs.api_integration_guides.language_examples.python.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-medium mb-2">{lang === "fr" ? "Installation" : "Installation"}:</p>
                        <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                          {docs.api_integration_guides.language_examples.python.install}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">{docs.api_integration_guides.language_examples.python.example.title}:</p>
                        <div className="bg-muted p-4 rounded-lg font-mono text-xs overflow-x-auto">
                          <pre className="whitespace-pre-wrap text-foreground">{`from doqshare import DoQshare
import os

client = DoQshare(api_key=os.getenv('DOQSHARE_API_KEY'))

# ${docs.api_integration_guides.language_examples.python.example.upload}
with open('example.pdf', 'rb') as f:
    document = client.documents.create(
        name='example.pdf',
        file=f.read(),
        password='optional-password',
        watermark=True
    )

# ${docs.api_integration_guides.language_examples.python.example.share}
share = client.documents.share(
    document_id=document.id,
    expires_at='2024-12-31T23:59:59Z',
    max_views=10
)

# ${docs.api_integration_guides.language_examples.python.example.analytics}
analytics = client.documents.analytics(document_id=document.id)
print(f"Total views: {analytics.total_views}")`}</pre>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* PHP Example */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{docs.api_integration_guides.language_examples.php.title}</CardTitle>
                      <CardDescription>{docs.api_integration_guides.language_examples.php.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-medium mb-2">{lang === "fr" ? "Installation" : "Installation"}:</p>
                        <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                          {docs.api_integration_guides.language_examples.php.install}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">{docs.api_integration_guides.language_examples.php.example.title}:</p>
                        <div className="bg-muted p-4 rounded-lg font-mono text-xs overflow-x-auto">
                          <pre className="whitespace-pre-wrap text-foreground">{`<?php
require 'vendor/autoload.php';

use DoQshare\\DoQshare;

$client = new DoQshare(getenv('DOQSHARE_API_KEY'));

// ${docs.api_integration_guides.language_examples.php.example.upload}
$fileContent = base64_encode(file_get_contents('example.pdf'));
$document = $client->documents->create([
    'name' => 'example.pdf',
    'file' => $fileContent,
    'password' => 'optional-password',
    'watermark' => true
]);

// ${docs.api_integration_guides.language_examples.php.example.share}
$share = $client->documents->share($document->id, [
    'expires_at' => '2024-12-31T23:59:59Z',
    'max_views' => 10
]);

// ${docs.api_integration_guides.language_examples.php.example.analytics}
$analytics = $client->documents->analytics($document->id);
echo "Total views: " . $analytics->total_views;
?>`}</pre>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* cURL Example */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{docs.api_integration_guides.language_examples.curl.title}</CardTitle>
                      <CardDescription>{docs.api_integration_guides.language_examples.curl.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-medium mb-2">{docs.api_integration_guides.language_examples.curl.example.upload}:</p>
                        <div className="bg-muted p-4 rounded-lg font-mono text-xs overflow-x-auto">
                          <pre className="whitespace-pre-wrap text-foreground">{`curl -X POST https://api.doqshare.com/v1/documents \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "example.pdf",
    "file": "base64_encoded_file_content",
    "password": "optional-password",
    "watermark": true
  }'`}</pre>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">{docs.api_integration_guides.language_examples.curl.example.share}:</p>
                        <div className="bg-muted p-4 rounded-lg font-mono text-xs overflow-x-auto">
                          <pre className="whitespace-pre-wrap text-foreground">{`curl -X POST https://api.doqshare.com/v1/documents/doc_123/share \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "expires_at": "2024-12-31T23:59:59Z",
    "max_views": 10
  }'`}</pre>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">{docs.api_integration_guides.language_examples.curl.example.analytics}:</p>
                        <div className="bg-muted p-4 rounded-lg font-mono text-xs overflow-x-auto">
                          <pre className="whitespace-pre-wrap text-foreground">{`curl -X GET https://api.doqshare.com/v1/documents/doc_123/analytics \\
  -H "Authorization: Bearer YOUR_API_KEY"`}</pre>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Use Cases */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6">{docs.api_integration_guides.use_cases.title}</h3>
                <p className="text-muted-foreground mb-8">{docs.api_integration_guides.use_cases.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    docs.api_integration_guides.use_cases.case1,
                    docs.api_integration_guides.use_cases.case2,
                    docs.api_integration_guides.use_cases.case3,
                    docs.api_integration_guides.use_cases.case4,
                  ].map((useCase, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{useCase.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">{useCase.description}</p>
                        <div className="bg-muted/50 p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground">
                            <strong>{lang === "fr" ? "Scénario" : "Scenario"}:</strong> {useCase.scenario}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Best Practices */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">{docs.api_integration_guides.best_practices.title}</h3>
                <p className="text-muted-foreground mb-8">{docs.api_integration_guides.best_practices.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Security */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        <CardTitle>{docs.api_integration_guides.best_practices.security.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{docs.api_integration_guides.best_practices.security.practice1}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{docs.api_integration_guides.best_practices.security.practice2}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{docs.api_integration_guides.best_practices.security.practice3}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{docs.api_integration_guides.best_practices.security.practice4}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{docs.api_integration_guides.best_practices.security.practice5}</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Performance */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary" />
                        <CardTitle>{docs.api_integration_guides.best_practices.performance.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{docs.api_integration_guides.best_practices.performance.practice1}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{docs.api_integration_guides.best_practices.performance.practice2}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{docs.api_integration_guides.best_practices.performance.practice3}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{docs.api_integration_guides.best_practices.performance.practice4}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{docs.api_integration_guides.best_practices.performance.practice5}</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Error Handling */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-primary" />
                        <CardTitle>{docs.api_integration_guides.best_practices.error_handling.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{docs.api_integration_guides.best_practices.error_handling.practice1}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{docs.api_integration_guides.best_practices.error_handling.practice2}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{docs.api_integration_guides.best_practices.error_handling.practice3}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{docs.api_integration_guides.best_practices.error_handling.practice4}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{docs.api_integration_guides.best_practices.error_handling.practice5}</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Testing */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-primary" />
                        <CardTitle>{docs.api_integration_guides.best_practices.testing.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{docs.api_integration_guides.best_practices.testing.practice1}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{docs.api_integration_guides.best_practices.testing.practice2}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{docs.api_integration_guides.best_practices.testing.practice3}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{docs.api_integration_guides.best_practices.testing.practice4}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{docs.api_integration_guides.best_practices.testing.practice5}</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation delay={0.2}>
        <div className="container mx-auto px-4 py-16">
        <div className="bg-muted/50 rounded-lg p-8 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">{docs.cta.title}</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {docs.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="https://dashboard.doqshare.com">
                {docs.cta.get_api_key}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={`/${lang}/contact`}>
                {docs.cta.contact_support}
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            {docs.cta.help_text} <Link href={`/${lang}/help`} className="text-primary hover:underline">{docs.cta.help_center}</Link> {docs.cta.or} <Link href={`/${lang}/contact`} className="text-primary hover:underline">{docs.cta.contact_us}</Link>.
          </p>
        </div>
      </div>
      </ScrollAnimation>
    </div>
  );
}

