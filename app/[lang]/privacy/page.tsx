import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, FileX, CheckCircle2, AlertCircle, Users, Building2, ExternalLink } from "lucide-react";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

interface PrivacyPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { lang } = await params;
  
  return generateSEOMetadata({
    title: "Privacy Policy - DoQshare",
    description: "Privacy Policy for DoQshare. Learn how we protect your data. Compliant with Quebec Law 25, Canadian privacy laws (PIPEDA), and GDPR. Zero-knowledge architecture ensures we cannot access your documents.",
    keywords: [
      "privacy policy",
      "data protection",
      "DoQshare privacy",
      "Quebec Law 25",
      "PIPEDA compliance",
      "GDPR compliance",
      "zero-knowledge",
      "document security",
      "data privacy"
    ],
    canonical: `/${lang}/privacy`,
  });
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const privacy = dictionary.privacy_page;
  
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <Shield className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{privacy.header.title}</h1>
        <p className="text-lg text-muted-foreground">
          {privacy.header.last_updated} {new Date().toLocaleDateString(lang === 'fr' ? 'fr-CA' : 'en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{privacy.sections.introduction.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p dangerouslySetInnerHTML={{ __html: privacy.sections.introduction.content.welcome }} />
          <p dangerouslySetInnerHTML={{ __html: privacy.sections.introduction.content.service_description }} />
          <p>{privacy.sections.introduction.content.policy_governs}</p>
          <p dangerouslySetInnerHTML={{ __html: privacy.sections.introduction.content.data_use }} />
          <p dangerouslySetInnerHTML={{ __html: privacy.sections.introduction.content.terms_agreement }} />
          <p>{privacy.sections.introduction.content.compliance_intro}</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>{privacy.sections.introduction.content.laws.law25}</li>
            <li>{privacy.sections.introduction.content.laws.pipeda}</li>
            <li>{privacy.sections.introduction.content.laws.gdpr}</li>
            <li>{privacy.sections.introduction.content.laws.ccpa}</li>
          </ul>
        </CardContent>
      </Card>

      {/* Definitions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{privacy.sections.definitions.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p dangerouslySetInnerHTML={{ __html: privacy.sections.definitions.content.service }} />
          <p dangerouslySetInnerHTML={{ __html: privacy.sections.definitions.content.personal_data }} />
          <p dangerouslySetInnerHTML={{ __html: privacy.sections.definitions.content.usage_data }} />
          <p dangerouslySetInnerHTML={{ __html: privacy.sections.definitions.content.cookies }} />
          <p dangerouslySetInnerHTML={{ __html: privacy.sections.definitions.content.data_controller }} />
          <p dangerouslySetInnerHTML={{ __html: privacy.sections.definitions.content.data_processors }} />
          <p dangerouslySetInnerHTML={{ __html: privacy.sections.definitions.content.data_subject }} />
          <p dangerouslySetInnerHTML={{ __html: privacy.sections.definitions.content.user }} />
        </CardContent>
      </Card>

      {/* Zero-Knowledge Architecture - Section importante */}
      <Card className="mb-8 border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-primary" />
            <CardTitle>{privacy.sections.zero_knowledge.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-3 mb-4">
              <FileX className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">{privacy.sections.zero_knowledge.content.cannot_access}</h4>
                <p className="mb-3" dangerouslySetInnerHTML={{ __html: privacy.sections.zero_knowledge.content.zero_knowledge_intro }} />
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li dangerouslySetInnerHTML={{ __html: privacy.sections.zero_knowledge.content.no_superadmin }} />
                  <li dangerouslySetInnerHTML={{ __html: privacy.sections.zero_knowledge.content.client_encryption }} />
                  <li dangerouslySetInnerHTML={{ __html: privacy.sections.zero_knowledge.content.no_content_access }} />
                  <li dangerouslySetInnerHTML={{ __html: privacy.sections.zero_knowledge.content.privacy_by_design }} />
                </ul>
              </div>
            </div>
          </div>
          <p>{privacy.sections.zero_knowledge.content.zero_knowledge_benefits}</p>
          <p dangerouslySetInnerHTML={{ __html: privacy.sections.zero_knowledge.content.compliance_benefits }} />
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>{privacy.sections.zero_knowledge.content.benefit1}</li>
            <li>{privacy.sections.zero_knowledge.content.benefit2}</li>
            <li>{privacy.sections.zero_knowledge.content.benefit3}</li>
            <li>{privacy.sections.zero_knowledge.content.benefit4}</li>
          </ul>
        </CardContent>
      </Card>

      {/* Information We Collect */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>4. Information Collection and Use</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            We collect several different types of information for various purposes to provide and improve our Service to you.
          </p>
        </CardContent>
      </Card>

      {/* Types of Data Collected */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>5. Types of Data Collected</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <div>
            <h4 className="font-semibold text-foreground mb-3">Personal Data</h4>
            <p className="mb-2">
              While using our Service, we may ask you to provide us with certain personally identifiable information that 
              can be used to contact or identify you ("<strong>Personal Data</strong>"). Personally identifiable information 
              may include, but is not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Company name (optional)</li>
              <li>Phone number (optional)</li>
              <li>Billing address and payment information (for paid plans)</li>
              <li>Cookies and Usage Data</li>
            </ul>
            <p className="mt-3">
              We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other 
              information that may be of interest to you. You may opt out of receiving any, or all, of these communications 
              from us by following the unsubscribe link or by contacting us directly.
            </p>
          </div>

          <div className="border-t pt-4 mt-4">
            <h4 className="font-semibold text-foreground mb-3">Usage Data</h4>
            <p className="mb-2">
              We may also collect information that your browser sends whenever you visit our Service or when you access 
              Service by or through a mobile device ("<strong>Usage Data</strong>").
            </p>
            <p className="mb-2">
              This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), 
              browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the 
              time spent on those pages, unique device identifiers and other diagnostic data.
            </p>
            <p>
              When you access Service with a mobile device, this Usage Data may include information such as the type of 
              mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile 
              operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.
            </p>
          </div>

          <div className="border-t pt-4 mt-4">
            <h4 className="font-semibold text-foreground mb-3">Tracking Cookies Data</h4>
            <p className="mb-2">
              We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.
            </p>
            <p className="mb-2">
              Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent 
              to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, 
              tags and scripts to collect and track information and to improve and analyze our Service.
            </p>
            <p className="mb-2">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you 
              do not accept cookies, you may not be able to use some portions of our Service.
            </p>
            <p>
              Examples of Cookies we use:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Session Cookies:</strong> We use Session Cookies to operate our Service.</li>
              <li><strong>Preference Cookies:</strong> We use Preference Cookies to remember your preferences and various settings.</li>
              <li><strong>Security Cookies:</strong> We use Security Cookies for security purposes.</li>
              <li><strong>Advertising Cookies:</strong> Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests.</li>
            </ul>
            <p className="mt-3">
              For more detailed information, please see our{" "}
              <a href="/cookies" className="text-primary hover:underline">Cookie Policy</a>.
            </p>
          </div>

          <div className="border-t pt-4 mt-4">
            <h4 className="font-semibold text-foreground mb-3">Document Metadata</h4>
            <p className="mb-2">
              We collect metadata about your documents, but <strong>NOT the content</strong>:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>File names</li>
              <li>File sizes</li>
              <li>Upload dates and times</li>
              <li>File types</li>
              <li>Sharing settings and permissions</li>
            </ul>
          </div>

          <div className="border-t pt-4 mt-4">
            <h4 className="font-semibold text-foreground mb-3">Analytics Data</h4>
            <p className="mb-2">
              We collect analytics about document access:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Who accessed your documents (email addresses of viewers)</li>
              <li>When documents were accessed</li>
              <li>Time spent viewing documents (page-by-page analytics)</li>
              <li>Download events</li>
              <li>IP addresses (for security and fraud prevention)</li>
            </ul>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 mt-4">
            <p className="text-sm">
              <strong>Important:</strong> We do NOT collect, store, or have access to the actual content of your documents. 
              Your documents are encrypted and stored in a way that prevents us from accessing their content.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Use of Data */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>6. Use of Data</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>DoQshare uses the collected data for various purposes:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>to provide and maintain our Service;</li>
            <li>to notify you about changes to our Service;</li>
            <li>to allow you to participate in interactive features of our Service when you choose to do so;</li>
            <li>to provide customer support;</li>
            <li>to gather analysis or valuable information so that we can improve our Service;</li>
            <li>to monitor the usage of our Service;</li>
            <li>to detect, prevent and address technical issues;</li>
            <li>to fulfill any other purpose for which you provide it;</li>
            <li>to carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection;</li>
            <li>to provide you with notices about your account and/or subscription, including expiration and renewal notices, email-instructions, etc.;</li>
            <li>to provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information;</li>
            <li>in any other way we may describe when you provide the information;</li>
            <li>for any other purpose with your consent.</li>
          </ol>
          <p className="mt-4">
            <strong>Legal Basis (GDPR):</strong> For users in the European Union, we process your personal data based on:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Your consent (for marketing communications)</li>
            <li>Performance of a contract (to provide the Service)</li>
            <li>Legitimate interests (security, fraud prevention, service improvement)</li>
            <li>Legal obligations (compliance with applicable laws)</li>
          </ul>
        </CardContent>
      </Card>

      {/* Retention of Data */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>7. Retention of Data</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. 
            We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, 
            if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal 
            agreements and policies.
          </p>
          <p>
            We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period, 
            except when this data is used to strengthen the security or to improve the functionality of our Service, or we are 
            legally obligated to retain this data for longer time periods.
          </p>
          <p>
            <strong>Document Retention:</strong> When you delete a document, it is permanently removed from our systems. 
            Since we cannot access document content, deleted documents cannot be recovered by us.
          </p>
        </CardContent>
      </Card>

      {/* Transfer of Data */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>8. Transfer of Data</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Your information, including Personal Data, may be transferred to – and maintained on – computers located outside 
            of your state, province, country or other governmental jurisdiction where the data protection laws may differ from 
            those of your jurisdiction.
          </p>
          <p>
            If you are located outside Canada and choose to provide information to us, please note that we transfer the data, 
            including Personal Data, to Canada and process it there.
          </p>
          <p>
            Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
          </p>
          <p>
            DoQshare will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance 
            with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country 
            unless there are adequate controls in place including the security of your data and other personal information.
          </p>
          <p>
            We ensure that appropriate safeguards are in place for international transfers, including:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Standard contractual clauses approved by the European Commission</li>
            <li>Adequacy decisions where applicable</li>
            <li>Other legally recognized transfer mechanisms</li>
          </ul>
        </CardContent>
      </Card>

      {/* Disclosure of Data */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>9. Disclosure of Data</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            We do not sell your personal information. We may disclose personal information that we collect, or you provide:
          </p>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-foreground mb-2">Disclosure for Law Enforcement.</p>
              <p>
                Under certain circumstances, we may be required to disclose your Personal Data if required to do so by law 
                or in response to valid requests by public authorities.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">Business Transaction.</p>
              <p>
                If we or our subsidiaries are involved in a merger, acquisition or asset sale, your Personal Data may be transferred.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">Other cases. We may disclose your information also:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>to our subsidiaries and affiliates;</li>
                <li>to contractors, service providers, and other third parties we use to support our business;</li>
                <li>to fulfill the purpose for which you provide it;</li>
                <li>with your consent for any other purpose disclosed by us when you provide the information.</li>
              </ul>
            </div>
          </div>
          <div className="bg-muted/50 rounded-lg p-4 mt-4">
            <p className="text-sm">
              <strong>Document Content:</strong> Since we cannot access your document content, we cannot and will not 
              share, sell, or disclose it to any third party, even if legally requested. We can only provide metadata 
              and analytics data that we actually possess.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Security of Data */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-primary" />
            <CardTitle>10. Security of Data</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            We implement industry-standard security measures to protect your information:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Encryption:</strong> All data is encrypted in transit (TLS/SSL) and at rest (AES-256)</li>
            <li><strong>Zero-Knowledge Architecture:</strong> Document content is encrypted client-side before upload</li>
            <li><strong>Access Controls:</strong> Strict access controls and authentication mechanisms</li>
            <li><strong>Regular Security Audits:</strong> We conduct regular security assessments and penetration testing</li>
            <li><strong>Compliance Certifications:</strong> We maintain SOC 2 Type II, ISO 27001, and other relevant certifications</li>
            <li><strong>Data Backup:</strong> Regular encrypted backups to ensure data availability</li>
          </ul>
          <p>
            However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive 
            to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
          </p>
        </CardContent>
      </Card>

      {/* Your Data Protection Rights Under GDPR */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <CardTitle>11. Your Data Protection Rights Under General Data Protection Regulation (GDPR)</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your personal information ("right to be forgotten")</li>
            <li><strong>Right to Restrict Processing:</strong> Request limitation of how we process your information</li>
            <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service provider</li>
            <li><strong>Right to Object:</strong> Object to processing of your personal information</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
            <li><strong>Right to File a Complaint:</strong> File a complaint with your local data protection authority</li>
          </ul>
          <p>
            If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection 
            rights, covered by GDPR. – See more at{" "}
            <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              https://eur-lex.europa.eu/eli/reg/2016/679/oj
            </a>
          </p>
          <p>
            We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
          </p>
          <p>
            If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, 
            please email us at{" "}
            <a href="mailto:privacy@doqshare.com" className="text-primary hover:underline">
              privacy@doqshare.com
            </a>
            .
          </p>
          <p>
            In certain circumstances, you have the following data protection rights:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>The right to access, update or to delete the information we have on you.</strong> Whenever made possible, 
            you can access, update or request deletion of your Personal Data directly within your account settings section. 
            If you are unable to perform these actions yourself, please contact us to assist you.</li>
            <li><strong>The right of rectification.</strong> You have the right to have your information rectified if that 
            information is inaccurate or incomplete.</li>
            <li><strong>The right to object.</strong> You have the right to object to our processing of your Personal Data.</li>
            <li><strong>The right of restriction.</strong> You have the right to request that we restrict the processing of 
            your personal information.</li>
            <li><strong>The right to data portability.</strong> You have the right to be provided with a copy of your Personal 
            Data in a structured, machine-readable and commonly used format.</li>
            <li><strong>The right to withdraw consent.</strong> You also have the right to withdraw your consent at any time 
            where DoQshare relied on your consent to process your personal information.</li>
          </ul>
          <p>
            Please note that we may ask you to verify your identity before responding to such requests. You have the right to 
            complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, 
            please contact your local data protection authority in the European Economic Area (EEA).
          </p>
          <p className="mt-4">
            <strong>Quebec Law 25:</strong> Under Quebec's privacy law, you have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Be informed about the collection and use of your personal information</li>
            <li>Access your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Be notified of security incidents affecting your information</li>
          </ul>
        </CardContent>
      </Card>

      {/* Your Data Protection Rights under CCPA */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>12. Your Data Protection Rights under the California Consumer Privacy Act (CCPA)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            If you are a California resident, you are entitled to learn what data we collect about you, ask to delete your 
            data and not to sell (share) it. To exercise your data protection rights, you can make certain requests and ask us:
          </p>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-foreground mb-2">
                1. <strong>What personal information we have about you.</strong> If you make this request, we will return to you:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The categories of personal information we have collected about you.</li>
                <li>The categories of sources from which we collect your personal information.</li>
                <li>The business or commercial purpose for collecting or selling your personal information.</li>
                <li>The categories of third parties with whom we share personal information.</li>
                <li>The specific pieces of personal information we have collected about you.</li>
                <li>A list of categories of personal information that we have sold, along with the category of any other company 
                we sold it to. If we have not sold your personal information, we will inform you of that fact.</li>
                <li>A list of categories of personal information that we have disclosed for a business purpose, along with the 
                category of any other company we shared it with.</li>
              </ul>
              <p className="mt-2 text-sm">
                Please note, you are entitled to ask us to provide you with this information up to two times in a rolling 
                twelve-month period. When you make this request, the information provided may be limited to the personal 
                information we collected about you in the previous 12 months.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">
                2. <strong>To delete your personal information.</strong> If you make this request, we will delete the personal 
                information we hold about you as of the date of your request from our records and direct any service providers 
                to do the same. In some cases, deletion may be accomplished through de-identification of the information. If 
                you choose to delete your personal information, you may not be able to use certain functions that require your 
                personal information to operate.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">
                3. <strong>To stop selling your personal information.</strong> We don't sell or rent your personal information 
                to any third parties for any purpose. You are the only owner of your Personal Data and can request disclosure or 
                deletion at any time.
              </p>
            </div>
          </div>
          <p className="mt-4">
            Please note, if you ask us to delete or stop selling your data, it may impact your experience with us, and you may 
            not be able to participate in certain programs or membership services which require the usage of your personal 
            information to function. But in no circumstances, we will discriminate against you for exercising your rights.
          </p>
          <p className="mt-4">
            To exercise your California data protection rights described above, please send your request(s) by email to{" "}
            <a href="mailto:privacy@doqshare.com" className="text-primary hover:underline">
              privacy@doqshare.com
            </a>
            .
          </p>
          <p className="text-sm mt-4">
            Your data protection rights, described above, are covered by the CCPA, short for the California Consumer Privacy Act. 
            To find out more, visit the official California Legislative Information website. The CCPA took effect on 01/01/2020.
          </p>
        </CardContent>
      </Card>

      {/* Service Providers */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            <CardTitle>13. Service Providers</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            We may employ third party companies and individuals to facilitate our Service ("<strong>Service Providers</strong>"), 
            provide Service on our behalf, perform Service-related services or assist us in analysing how our Service is used.
          </p>
          <p>
            These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated 
            not to disclose or use it for any other purpose.
          </p>
          <p>
            For a current list of our subprocessors, please contact us at{" "}
            <a href="mailto:privacy@doqshare.com" className="text-primary hover:underline">
              privacy@doqshare.com
            </a>
            .
          </p>
        </CardContent>
      </Card>

      {/* Analytics */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>14. Analytics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            We may use third-party Service Providers to monitor and analyze the use of our Service.
          </p>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-foreground mb-2">Google Analytics</p>
              <p>
                Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google 
                uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. 
                Google may use the collected data to contextualize and personalize the ads of its own advertising network.
              </p>
              <p className="mt-2">
                You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google 
                Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and 
                gtag.js) from sharing information with Google Analytics about visits activity.
              </p>
              <p className="mt-2">
                For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page:{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                  https://policies.google.com/privacy
                  <ExternalLink className="h-3 w-3" />
                </a>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payments */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>15. Payments</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            We may provide paid products and/or services within Service. In that case, we use third-party services for payment 
            processing (e.g. payment processors).
          </p>
          <p>
            We will not store or collect your payment card details. That information is provided directly to our third-party 
            payment processors whose use of your personal information is governed by their Privacy Policy. These payment 
            processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint 
            effort of brands like Visa, Mastercard, American Express and Discover. PCI-DSS requirements help ensure the secure 
            handling of payment information.
          </p>
          <p className="font-semibold text-foreground mb-2">The payment processors we work with are:</p>
          <div className="space-y-2">
            <p>
              <strong>Stripe:</strong> Their Privacy Policy can be viewed at{" "}
              <a href="https://stripe.com/us/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                https://stripe.com/us/privacy
                <ExternalLink className="h-3 w-3" />
              </a>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Links to Other Sites */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>16. Links to Other Sites</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will 
            be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
          </p>
          <p>
            We have no control over and assume no responsibility for the content, privacy policies or practices of any third party 
            sites or services.
          </p>
        </CardContent>
      </Card>

      {/* Children's Privacy */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>17. Children's Privacy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Our Service is not intended for children under 18 years of age. We do not knowingly collect personal 
            information from children under 18. If you believe we have collected information from a child under 18, 
            please contact us immediately, and we will take steps to delete such information.
          </p>
        </CardContent>
      </Card>

      {/* Do Not Track */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>18. Our Policy on "Do Not Track" Signals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track browser 
            mechanism is in place. Do Not Track is a preference you can set in your web browser to inform websites that you 
            do not want to be tracked.
          </p>
          <p>
            You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.
          </p>
        </CardContent>
      </Card>

      {/* Data Breach Notification */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-primary" />
            <CardTitle>19. Data Breach Notification</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            In the event of a data breach that poses a risk to your rights and freedoms, we will:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Notify you without undue delay (within 72 hours for GDPR, as soon as possible for Quebec Law 25)</li>
            <li>Notify relevant data protection authorities as required by law</li>
            <li>Provide information about the nature of the breach and measures taken to address it</li>
            <li>Recommend steps you can take to protect yourself</li>
          </ul>
          <div className="bg-muted/50 rounded-lg p-4 mt-4">
            <p className="text-sm">
              <strong>Zero-Knowledge Protection:</strong> Due to our zero-knowledge architecture, even in the event of a 
              security incident affecting our systems, your document content would remain protected and inaccessible, as 
              we do not possess the encryption keys or the ability to decrypt your documents.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Changes to Privacy Policy */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>20. Changes to This Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
            Policy on this page.
          </p>
          <p>
            We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and 
            update "effective date" at the top of this Privacy Policy.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are 
            effective when they are posted on this page.
          </p>
          <p>
            We will notify you of any material changes by:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Posting the updated Privacy Policy on this page</li>
            <li>Sending an email notification to the address associated with your account</li>
            <li>Displaying a prominent notice within the Service</li>
          </ul>
          <p>
            Your continued use of the Service after such modifications constitutes your acceptance of the updated Privacy Policy.
          </p>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{privacy.sections.contact.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>{privacy.sections.contact.content.intro}</p>
          <div className="bg-muted/50 rounded-lg p-6 space-y-3">
            <p><strong>{privacy.sections.contact.content.company}</strong></p>
            <p>{privacy.sections.contact.content.location}</p>
            <p>
              <strong>{privacy.sections.contact.content.privacy_officer}</strong>{" "}
              <a href="mailto:privacy@doqshare.com" className="text-primary hover:underline">
                {privacy.sections.contact.content.privacy_email}
              </a>
            </p>
            <p>
              <strong>{privacy.sections.contact.content.general_inquiries}</strong>{" "}
              <a href="mailto:contact@doqshare.com" className="text-primary hover:underline">
                {privacy.sections.contact.content.contact_email}
              </a>
            </p>
            <p>
              <strong>{privacy.sections.contact.content.phone}</strong> {privacy.sections.contact.content.phone_number}
            </p>
            <p className="text-sm mt-4 pt-4 border-t">
              <strong>{privacy.sections.contact.content.authorities.title}</strong> {privacy.sections.contact.content.authorities.quebec}<br />
              <strong>{privacy.sections.contact.content.authorities.canada}</strong> {privacy.sections.contact.content.authorities.canada_authority}<br />
              <strong>{privacy.sections.contact.content.authorities.eu}</strong> {privacy.sections.contact.content.authorities.eu_note}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Acknowledgment */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border-2 border-blue-200 dark:border-blue-800">
        <p className="text-sm text-muted-foreground">
          <strong>{privacy.sections.acknowledgment}</strong>
        </p>
      </div>
    </div>
  );
}

