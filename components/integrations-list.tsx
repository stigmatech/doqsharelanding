"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/scroll-animation";
import {
  FileText,
  MessageSquare,
  Code,
  Webhook,
  Zap,
  Mail,
  Calendar,
  Database,
  Github,
  Chrome,
  Link as LinkIcon,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const integrations = [
  {
    name: "Notion",
    description: "Share documents directly from your Notion workspace with seamless integration. Embed DoQshare links and track engagement.",
    icon: FileText,
    status: "available",
    category: "Productivity",
    link: "/help/integrations/notion",
  },
  {
    name: "Slack",
    description: "Share secure document links directly in Slack channels and conversations. Get notified when documents are viewed.",
    icon: MessageSquare,
    status: "available",
    category: "Communication",
    link: "/help/integrations/slack",
  },
  {
    name: "REST API",
    description: "Build custom integrations with our powerful REST API. Full control over documents, analytics, and user management.",
    icon: Code,
    status: "available",
    category: "Developer",
    link: "/docs#endpoints",
  },
  {
    name: "Webhooks",
    description: "Receive real-time notifications when events occur. Document views, downloads, and access changes.",
    icon: Webhook,
    status: "available",
    category: "Developer",
    link: "/docs#webhooks",
  },
  {
    name: "Zapier",
    description: "Connect DoQshare with 5000+ apps through Zapier. Automate workflows and sync data across platforms.",
    icon: Zap,
    status: "available",
    category: "Automation",
    link: "/help/integrations/zapier",
  },
  {
    name: "Email",
    description: "Share documents via email with tracking. Get notified when recipients open and view your documents.",
    icon: Mail,
    status: "available",
    category: "Communication",
    link: "/help/integrations/email",
  },
  {
    name: "Google Calendar",
    description: "Schedule document sharing and set expiration dates. Automatically revoke access after meetings.",
    icon: Calendar,
    status: "available",
    category: "Productivity",
    link: "/help/integrations/google-calendar",
  },
  {
    name: "Salesforce",
    description: "Sync document analytics with Salesforce. Track engagement and qualify leads automatically.",
    icon: Database,
    status: "coming-soon",
    category: "CRM",
    link: "#",
  },
  {
    name: "GitHub",
    description: "Share technical documentation and track developer engagement. Perfect for open source projects.",
    icon: Github,
    status: "available",
    category: "Developer",
    link: "/help/integrations/github",
  },
  {
    name: "Chrome Extension",
    description: "Share documents directly from your browser. One-click sharing from any webpage.",
    icon: Chrome,
    status: "available",
    category: "Browser",
    link: "/help/integrations/chrome-extension",
  },
  {
    name: "Custom Links",
    description: "Generate branded sharing links with custom domains. Perfect for white-label solutions.",
    icon: LinkIcon,
    status: "available",
    category: "Branding",
    link: "/help/integrations/custom-links",
  },
];

const IntegrationsList = () => {
  return (
    <div className="w-full py-12 lg:py-16">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4">
              Available Integrations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect DoQshare with the tools your team already uses. From productivity apps to developer tools, we've got you covered.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{integration.name}</CardTitle>
                          <Badge variant="outline" className="mt-1 text-xs">
                            {integration.category}
                          </Badge>
                        </div>
                      </div>
                      {integration.status === "available" ? (
                        <Badge variant="default" className="bg-green-500">
                          Available
                        </Badge>
                      ) : (
                        <Badge variant="secondary">Coming Soon</Badge>
                      )}
                    </div>
                    <CardDescription>{integration.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {integration.status === "available" && integration.link !== "#" ? (
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href={integration.link}>
                          View Guide
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="w-full" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default IntegrationsList;

