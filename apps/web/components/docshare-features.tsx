import { Card } from '@workspace/ui/components/card'
import { Button } from '@workspace/ui/components/button'
import { 
  Upload, 
  Shield, 
  BarChart3, 
  Users, 
  FileText, 
  Zap,
  Smartphone,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export default function DocShareFeatures() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything you need to share documents securely
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DoQShare combines the best  Docsend with advanced security, 
            real-time analytics, and seamless collaboration features.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Document Upload & Management */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-muted rounded-lg mr-4">
                <Upload className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Smart Document Upload</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Upload PDFs, Word docs, Excel files, and presentations with drag-and-drop simplicity. 
              Automatic format detection and optimization.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Support for 20+ file formats
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Automatic file optimization
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Bulk upload capabilities
              </li>
            </ul>
          </Card>

          {/* Advanced Security */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-muted rounded-lg mr-4">
                <Shield className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Enterprise Security</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Bank-level encryption, password protection, and granular access controls 
              to keep your documents secure.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                AES-256 encryption
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Password protection
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Expiration dates
              </li>
            </ul>
          </Card>

          {/* Real-time Analytics */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-muted rounded-lg mr-4">
                <BarChart3 className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Real-time Analytics</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Track document engagement with detailed insights on views, time spent, 
              and user behavior patterns.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                View tracking & heatmaps
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Time spent analysis
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Download reports
              </li>
            </ul>
          </Card>

          {/* Team Collaboration */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-muted rounded-lg mr-4">
                <Users className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Team Collaboration</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Share documents with your team, set permissions, and collaborate 
              in real-time with comments and annotations.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Team workspaces
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Comment & annotation
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Version control
              </li>
            </ul>
          </Card>

          {/* Mobile Access */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-muted rounded-lg mr-4">
                <Smartphone className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Mobile-First Design</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Access and share documents from anywhere with our responsive design 
              and native mobile apps.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                iOS & Android apps
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Offline access
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Push notifications
              </li>
            </ul>
          </Card>

          {/* API & Integrations */}
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-muted rounded-lg mr-4">
                <Zap className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold">API & Integrations</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Connect DoqShare with your existing tools via REST API, 
              webhooks, and native integrations.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                REST API access
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Webhook support
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Slack & Teams integration
              </li>
            </ul>
          </Card>
        </div>

        {/* Comparison Section */}
        <div className="bg-muted/50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Why choose DoqShare over SharePoint & Docsend?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-muted rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileText className="h-8 w-8 text-foreground" />
              </div>
              <h4 className="font-semibold mb-2">SharePoint Alternative</h4>
              <p className="text-sm text-muted-foreground">
                All SharePoint features plus better analytics, easier sharing, 
                and modern user interface designed for document collaboration.
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-muted rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-foreground" />
              </div>
              <h4 className="font-semibold mb-2">Docsend Alternative</h4>
              <p className="text-sm text-muted-foreground">
                Better analytics than Docsend with real-time tracking, 
                heatmaps, and detailed engagement reports.
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-muted rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-foreground" />
              </div>
              <h4 className="font-semibold mb-2">Enterprise Ready</h4>
              <p className="text-sm text-muted-foreground">
                Built for enterprise with SSO, audit logs, compliance, 
                and advanced security features.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of teams who trust DoqShare for their document sharing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-12">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-12">
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
