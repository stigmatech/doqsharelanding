import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { 
  Database,
  Building2,
  BarChart3,
  Droplet,
  Shield,
  Lock,
  FileCheck,
  Sparkles,
  FileLock,
  CheckCircle
} from 'lucide-react'

interface Feature {
  icon: React.ComponentType<{ className?: string }> | null;
  title: string;
  description: string;
  highlights: string[];
  customIcon?: string;
}

const features: Feature[] = [
  {
    icon: Database,
    title: "Data Room",
    description: "Create secure virtual data rooms for due diligence, fundraising, and M&A transactions. Organize documents in structured folders with granular access controls.",
    highlights: [
      "Unlimited data rooms and folders",
      "Multi-level access permissions",
      "Organized document structure",
      "Bulk document upload",
      "Version control and history",
      "Q&A management system"
    ]
  },
  {
    icon: Building2,
    title: "Enterprise",
    description: "Enterprise-grade security and compliance features designed for large organizations. SSO, advanced integrations, and dedicated support.",
    highlights: [
      "Single Sign-On (SSO)",
      "Advanced API access",
      "Custom integrations",
      "Dedicated account manager",
      "99.9% SLA guarantee",
      "On-premise deployment option"
    ]
  },
  {
    icon: BarChart3,
    title: "Page by Page Analytics",
    description: "Track engagement at the most granular level. See exactly which pages viewers spend time on, when they viewed them, and for how long.",
    highlights: [
      "Page-by-page view tracking",
      "Time spent per page",
      "Viewer engagement heatmaps",
      "Real-time notifications",
      "Exportable reports",
      "Historical analytics data"
    ]
  },
  {
    icon: Droplet,
    title: "Dynamic Watermarking",
    description: "Automatically add personalized watermarks to every document view. Include viewer name, email, timestamp, and custom text for complete traceability.",
    highlights: [
      "Personalized viewer information",
      "Custom watermark text",
      "Timestamp and date stamps",
      "IP address tracking",
      "Multiple watermark positions",
      "Branded watermark designs"
    ]
  },
  {
    icon: Shield,
    title: "Screenshot Protection",
    description: "Advanced protection against screenshots and screen recording. Prevent unauthorized capture of sensitive document content.",
    highlights: [
      "Screenshot detection and blocking",
      "Screen recording prevention",
      "Print screen protection",
      "Browser extension blocking",
      "Mobile screenshot alerts",
      "Violation notifications"
    ]
  },
  {
    icon: Lock,
    title: "Password Protection",
    description: "Add an extra layer of security with password protection. Control who can access your documents with custom passwords and access policies.",
    highlights: [
      "Custom password requirements",
      "Per-document passwords",
      "Password expiration",
      "Two-factor authentication",
      "Email verification",
      "Access attempt logging"
    ]
  },
  {
    icon: FileCheck,
    title: "One-Click NDA",
    description: "Require viewers to accept NDAs before accessing documents. Streamline the legal process with automated agreement management.",
    highlights: [
      "Pre-access NDA requirement",
      "Customizable NDA templates",
      "Digital signature collection",
      "Agreement tracking",
      "Legal compliance records",
      "Automated reminders"
    ]
  },
  {
    icon: Sparkles,
    title: "AI Document Assistant",
    description: "Leverage AI to interact with your documents and data rooms. Ask questions, get summaries, and extract insights using advanced language models.",
    highlights: [
      "Document Q&A",
      "Intelligent summaries",
      "Key information extraction",
      "Multi-document analysis",
      "Natural language queries",
      "Context-aware responses"
    ]
  },
  {
    icon: null,
    title: "Notion Sharing",
    description: "Seamlessly share documents directly from Notion. Integrate your document sharing workflow with your existing knowledge base.",
    highlights: [
      "Direct Notion integration",
      "Embed documents in pages",
      "Sync document updates",
      "Notion-native sharing",
      "Team collaboration",
      "Unified workspace"
    ],
    customIcon: "notion"
  },
  {
    icon: FileLock,
    title: "Secure File Sharing",
    description: "Share files securely with advanced controls. Set expiration dates, limit downloads, control access, and track every interaction.",
    highlights: [
      "Secure link generation",
      "Expiration date controls",
      "Download restrictions",
      "Access revocation",
      "View tracking",
      "Email notifications"
    ]
  }
];

export default function FeaturesMain() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything you need to share documents securely
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DoQshare combines advanced security, real-time analytics, and seamless collaboration features 
            to give you complete control over your document sharing.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg mr-4 flex items-center justify-center">
                    {feature.customIcon === "notion" ? (
                      <Image
                        src="https://www.notion.so/images/logo-ios.png"
                        alt="Notion logo"
                        width={24}
                        height={24}
                        className="dark:invert"
                      />
                    ) : Icon ? (
                      <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    ) : null}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {feature.highlights.slice(0, 3).map((highlight, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}

