import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Cookie, Settings, Shield, BarChart3, Target, AlertCircle } from "lucide-react";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

interface CookiesPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: CookiesPageProps): Promise<Metadata> {
  const { lang } = await params;
  
  return generateSEOMetadata({
    title: "Cookie Policy - DoQshare",
    description: "Cookie Policy for DoQshare. Learn about how we use cookies and similar technologies. Compliant with Quebec Law 25, Canadian privacy laws, and GDPR.",
    keywords: [
      "cookie policy",
      "cookies",
      "DoQshare cookies",
      "tracking technologies",
      "privacy cookies",
      "GDPR cookies",
      "Quebec Law 25",
      "cookie consent"
    ],
    canonical: `/${lang}/cookies`,
  });
}

export default async function CookiesPage({ params }: CookiesPageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const cookies = dictionary.cookies_page;
  
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <Cookie className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{cookies.header.title}</h1>
        <p className="text-lg text-muted-foreground">
          {cookies.header.last_updated} {new Date().toLocaleDateString(lang === 'fr' ? 'fr-CA' : 'en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{cookies.sections.introduction.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p dangerouslySetInnerHTML={{ __html: cookies.sections.introduction.content.policy_explains }} />
          <p>{cookies.sections.introduction.content.consent}</p>
          <p>{cookies.sections.introduction.content.compliance}</p>
        </CardContent>
      </Card>

      {/* What are Cookies */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{cookies.sections.what_are_cookies.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>{cookies.sections.what_are_cookies.content.definition}</p>
          <p>{cookies.sections.what_are_cookies.content.purpose}</p>
          <p>{cookies.sections.what_are_cookies.content.similar_tech}</p>
        </CardContent>
      </Card>

      {/* Types of Cookies We Use */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            <CardTitle>3. Types of Cookies We Use</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 text-muted-foreground">
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-600" />
              Essential Cookies (Strictly Necessary)
            </h4>
            <p className="mb-2">
              These cookies are essential for the Service to function properly. They enable core functionality such as 
              security, network management, and accessibility.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li><strong>Purpose:</strong> Authentication, session management, security</li>
              <li><strong>Examples:</strong> Login status, CSRF protection, session IDs</li>
              <li><strong>Duration:</strong> Session cookies (deleted when you close your browser) or persistent (up to 30 days)</li>
              <li><strong>Can be disabled:</strong> No - these cookies are necessary for the Service to work</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-purple-600" />
              Analytics and Performance Cookies
            </h4>
            <p className="mb-2">
              These cookies help us understand how visitors interact with our Service by collecting and reporting information 
              anonymously. They allow us to improve the performance and user experience of our platform.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li><strong>Purpose:</strong> Website analytics, performance monitoring, error tracking</li>
              <li><strong>Examples:</strong> Google Analytics, page view tracking, user behavior analysis</li>
              <li><strong>Duration:</strong> Up to 2 years</li>
              <li><strong>Can be disabled:</strong> Yes - you can opt out through your browser settings or our cookie preferences</li>
            </ul>
            <div className="bg-muted/50 rounded-lg p-4 mt-3">
              <p className="text-sm">
                <strong>Note:</strong> We use analytics cookies to understand how users interact with our Service, but we 
                do not use them to track individual document content or access document files.
              </p>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Target className="h-4 w-4 text-green-600" />
              Functional Cookies
            </h4>
            <p className="mb-2">
              These cookies enable enhanced functionality and personalization, such as remembering your preferences and choices.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li><strong>Purpose:</strong> Remember preferences, language settings, user interface customization</li>
              <li><strong>Examples:</strong> Theme preferences (light/dark mode), language selection, dashboard layout</li>
              <li><strong>Duration:</strong> Up to 1 year</li>
              <li><strong>Can be disabled:</strong> Yes - but this may limit certain features</li>
            </ul>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              Marketing and Advertising Cookies
            </h4>
            <p className="mb-2">
              These cookies are used to deliver relevant advertisements and track the effectiveness of our marketing campaigns. 
              Currently, we use minimal marketing cookies.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li><strong>Purpose:</strong> Marketing campaign tracking, conversion measurement</li>
              <li><strong>Examples:</strong> Campaign attribution, conversion tracking</li>
              <li><strong>Duration:</strong> Up to 90 days</li>
              <li><strong>Can be disabled:</strong> Yes - you can opt out through cookie preferences</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Specific Cookies Used */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>4. Specific Cookies We Use</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold text-foreground">Cookie Name</th>
                  <th className="text-left p-3 font-semibold text-foreground">Purpose</th>
                  <th className="text-left p-3 font-semibold text-foreground">Duration</th>
                  <th className="text-left p-3 font-semibold text-foreground">Type</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">session_id</td>
                  <td className="p-3">Maintains your login session</td>
                  <td className="p-3">Session</td>
                  <td className="p-3">Essential</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">csrf_token</td>
                  <td className="p-3">Security protection against cross-site request forgery</td>
                  <td className="p-3">Session</td>
                  <td className="p-3">Essential</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">preferences</td>
                  <td className="p-3">Stores your UI preferences (theme, language)</td>
                  <td className="p-3">1 year</td>
                  <td className="p-3">Functional</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">_ga</td>
                  <td className="p-3">Google Analytics - distinguishes users</td>
                  <td className="p-3">2 years</td>
                  <td className="p-3">Analytics</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">_gid</td>
                  <td className="p-3">Google Analytics - distinguishes users</td>
                  <td className="p-3">24 hours</td>
                  <td className="p-3">Analytics</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">cookie_consent</td>
                  <td className="p-3">Remembers your cookie preferences</td>
                  <td className="p-3">1 year</td>
                  <td className="p-3">Essential</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Third-Party Cookies */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>5. Third-Party Cookies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Some cookies are placed by third-party services that appear on our pages. We use the following third-party services:
          </p>
          <ul className="list-disc list-inside space-y-3 ml-4">
            <li>
              <strong>Google Analytics:</strong> Helps us understand how visitors use our Service. You can opt out of 
              Google Analytics by installing the{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </li>
            <li>
              <strong>Payment Processors:</strong> When you make a payment, our payment processors (Stripe, PayPal) may 
              set cookies to process your transaction securely.
            </li>
            <li>
              <strong>Customer Support:</strong> If you use our chat or support features, third-party support tools may 
              set cookies to provide assistance.
            </li>
          </ul>
          <p>
            We do not control these third-party cookies. Please refer to the respective privacy policies of these 
            third-party services for more information.
          </p>
        </CardContent>
      </Card>

      {/* Cookie Consent */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>6. Cookie Consent and Your Choices</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            <strong>Consent Management:</strong> When you first visit our Service, we will ask for your consent to use 
            non-essential cookies. You can accept all cookies, reject non-essential cookies, or customize your preferences.
          </p>
          <p>
            <strong>Managing Cookies:</strong> You can control and manage cookies in several ways:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or accept cookies, delete existing 
            cookies, or be notified when cookies are set. However, disabling essential cookies may prevent the Service 
            from functioning properly.</li>
            <li><strong>Cookie Preferences:</strong> You can manage your cookie preferences through your account settings 
            on our platform.</li>
            <li><strong>Opt-Out Tools:</strong> You can use browser extensions or opt-out tools provided by third-party 
            services (e.g., Google Analytics opt-out).</li>
          </ul>
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
            <p className="text-sm">
              <strong>Important:</strong> If you disable cookies, some features of our Service may not function correctly. 
              Essential cookies cannot be disabled as they are necessary for the Service to operate.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Do Not Track */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>7. Do Not Track Signals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not 
            want to have your online activity tracked. Currently, there is no standard for how DNT signals should be 
            interpreted, and our Service does not currently respond to DNT browser signals.
          </p>
          <p>
            However, you can control tracking through your cookie preferences and browser settings as described above.
          </p>
        </CardContent>
      </Card>

      {/* Updates to Cookie Policy */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>8. Updates to This Cookie Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, 
            operational, or regulatory reasons. We will notify you of any material changes by:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Posting the updated Cookie Policy on this page</li>
            <li>Updating the "Last updated" date at the top of this page</li>
            <li>Sending an email notification for significant changes</li>
            <li>Displaying a notice within the Service</li>
          </ul>
          <p>
            Your continued use of the Service after such modifications constitutes your acceptance of the updated 
            Cookie Policy.
          </p>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{cookies.sections.contact.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>{cookies.sections.contact.content.intro}</p>
          <div className="bg-muted/50 rounded-lg p-6 space-y-3">
            <p><strong>{cookies.sections.contact.content.company}</strong></p>
            <p>{cookies.sections.contact.content.location}</p>
            <p>
              <strong>{cookies.sections.contact.content.email}</strong>{" "}
              <a href="mailto:privacy@doqshare.com" className="text-primary hover:underline">
                {cookies.sections.contact.content.privacy_email}
              </a>
            </p>
            <p>
              <strong>{cookies.sections.contact.content.phone}</strong> {cookies.sections.contact.content.phone_number}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>10. Additional Resources</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>For more information about cookies and how to manage them, you may find these resources helpful:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                All About Cookies
              </a> - General information about cookies
            </li>
            <li>
              <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Your Online Choices
              </a> - European Interactive Digital Advertising Alliance
            </li>
            <li>
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Google Analytics Opt-out
              </a> - Opt out of Google Analytics
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Acknowledgment */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border-2 border-blue-200 dark:border-blue-800">
        <p className="text-sm text-muted-foreground">
          <strong>{cookies.sections.acknowledgment}</strong>
        </p>
      </div>
    </div>
  );
}

