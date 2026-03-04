"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  BarChart3, 
  Zap, 
  Lock, 
  Users, 
  Clock,
  CheckCircle2
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption, password protection, and granular access controls. Your documents are protected with military-grade security.",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/30"
  },
  {
    icon: BarChart3,
    title: "Page-by-Page Analytics",
    description: "See exactly which pages your viewers spent time on, track downloads, and understand engagement patterns to optimize your documents.",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/30"
  },
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Get started in minutes. Upload, share, and track documents without complex configurations or lengthy onboarding processes.",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/30"
  },
  {
    icon: Lock,
    title: "Complete Control",
    description: "Set expiration dates, password protection, download restrictions, and revoke access instantly. You're always in control.",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/30"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share documents with your team, set permissions, add comments, and collaborate seamlessly on sensitive documents.",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/30"
  },
  {
    icon: Clock,
    title: "Real-Time Tracking",
    description: "Get instant notifications when documents are viewed, downloaded, or shared. Never miss an important interaction.",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/30"
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to share documents securely
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for teams who need more than just file sharing. Get the security, 
            analytics, and control your business demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader>
                  <div className={`inline-flex rounded-xl ${benefit.bgColor} p-4 mb-4`}>
                    <Icon className={`h-8 w-8 ${benefit.color}`} />
                  </div>
                  <CardTitle className="text-2xl mb-2">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-16 border-t">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                256-bit
              </div>
              <div className="text-sm text-muted-foreground">AES Encryption</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-sm text-muted-foreground">Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

