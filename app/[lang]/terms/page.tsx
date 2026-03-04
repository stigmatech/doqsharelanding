import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Shield, Scale, AlertCircle, Lock, Users, CreditCard, Ban, ExternalLink } from "lucide-react";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

interface TermsPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  const { lang } = await params;
  
  return generateSEOMetadata({
    title: "Terms of Service - DoQshare",
    description: "Terms of Service for DoQshare. Read our terms and conditions for using our secure document sharing platform. Compliant with Quebec Law 25, Canadian privacy laws, and GDPR.",
    keywords: [
      "terms of service",
      "terms and conditions",
      "DoQshare terms",
      "user agreement",
      "legal terms",
      "Quebec Law 25",
      "GDPR compliance",
      "Canadian privacy laws"
    ],
    canonical: `/${lang}/terms`,
  });
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const terms = dictionary.terms_page;
  
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <FileText className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{terms.header.title}</h1>
        <p className="text-lg text-muted-foreground">
          {terms.header.last_updated} {new Date().toLocaleDateString(lang === 'fr' ? 'fr-CA' : 'en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{terms.sections.introduction.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            <strong>{terms.header.effective_date}</strong> {new Date().toLocaleDateString(lang === 'fr' ? 'fr-CA' : 'en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p dangerouslySetInnerHTML={{ __html: terms.sections.introduction.content.terms_description }} />
          <p>{terms.sections.introduction.content.other_terms}</p>
          <p dangerouslySetInnerHTML={{ __html: terms.sections.introduction.content.organization_note }} />
          <p>{terms.sections.introduction.content.compliance_intro}</p>
        </CardContent>
      </Card>

      {/* Services */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>2. Services</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <div>
            <h4 className="font-semibold text-foreground mb-2">2.1 Provision</h4>
            <p>
              These Terms govern access to, and use of, the Services, and any associated Software, ordered by Customer through 
              an Order Form or online registration. Customer may access and use the Services in accordance with the Terms.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">2.2 Modifications</h4>
            <p>
              DoQshare may update the Services from time to time. If DoQshare changes the Services in a manner that materially 
              reduces their functionality, DoQshare will notify Customer at the email address associated with the account, and 
              Customer may provide notice within thirty days of the change to terminate the Terms. This termination right will 
              not apply to updates made to features provided on a beta or evaluation basis.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">2.3 Software</h4>
            <p className="mb-2">
              <strong>Generally.</strong> Some of the Services may allow Customer and End Users to download Software that may 
              update automatically. DoQshare hereby grants to Customer during the Term a limited non-exclusive license to use 
              the Software solely in connection with the Services and in accordance with the Terms. This license is non-transferable 
              (subject to Section 16.2), irrevocable (except as set forth in Section 12), non-sublicensable, and will be fully 
              paid up upon Customer's payment of the Fees.
            </p>
            <p>
              <strong>Open Source.</strong> If any component of the Software is offered under an open source license, DoQshare 
              will make the license available to Customer and to the extent the provisions of that license grant Customer additional 
              rights, those provisions will expressly override some provisions of the Terms solely with respect to that component 
              of the Software.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">2.4 Service-Specific Terms</h4>
            <p>
              Certain Services, or portions thereof, may be subject to additional terms, including third party terms and conditions, 
              that are specific to the particular Services. By accessing or using Services covered by any Service-Specific Terms, 
              you agree to the applicable Service-Specific Terms. If there is a conflict between these Terms and the Service-Specific 
              Terms, the Service-Specific Terms will control with respect to the applicable Services or portions thereof. Your use 
              of the Services may also be subject to additional policies, guidelines, or rules we post on the Services or make 
              available to you.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">2.5 Reference Materials</h4>
            <p>
              DoQshare may make certain reference Materials, including without limitation templates, available through the Services. 
              Such Materials are for informational purposes only and DoQshare makes no representations or warranties as to their 
              validity, reliability or sufficiency. The Materials are not intended to (a) constitute legal advice or (b) create an 
              attorney-client relationship. Customer acknowledges and agrees that each situation is highly fact-specific and requires 
              a knowledge of both state and federal laws. Therefore any party should seek legal advice from a licensed attorney 
              in the relevant jurisdictions.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">2.6 DoQshare Rights</h4>
            <p>
              DoQshare reserves the right to access Customer's account as necessary in order to provide the Services. Further, 
              Customer agrees that we may, but are not required to: (a) monitor the Services or Customer Data for violations of 
              these Terms and for compliance with our policies; (b) refuse, restrict access to or the availability of, or remove 
              or disable access to the Materials or Customer Data or any portion thereof, without prior notice to Customer, at any 
              time for any reason (including upon receipt of claims or allegations from third parties or authorities relating to 
              Customer Data), or for no reason at all; (c) report to law enforcement authorities and/or take legal action against 
              anyone who violates these Terms; or (d) manage the Services in a manner designed to protect our and third parties' 
              rights and property or to facilitate the proper functioning of the Service.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">2.7 Third Party Services and Materials</h4>
            <p>
              The Services may contain links to Third Party Services and Third Party Materials. DoQshare does not own, or operate 
              these Third Party Services, and we do not endorse any Third Party Services or Third Party Materials. If Customer 
              accesses or uses any Third Party Services or Third Party Materials: (a) Customer is solely responsible for this 
              access and use; (b) DoQshare is not responsible for any act or omission of the third party or the availability, 
              accuracy, the related content, products or services of Third Party Services or Third Party Materials; and (c) these 
              Terms do not apply to the Third Party Services. Before accessing or using a Third Party Service, you should review 
              the Third Party Service's terms and conditions, privacy policy, and all of Third Party Service's other documents, 
              and inform yourself of the terms, policies, and practices of the Third Party Service.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Customer Obligations */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <CardTitle>3. Customer Obligations</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <div>
            <h4 className="font-semibold text-foreground mb-2">3.1 Registration</h4>
            <p>
              In order to use the Services, Customers and End Users must first register with us through our on-line registration 
              process and authenticate following the authentication protocols provided by Customer. Account information must be 
              accurate, current, and complete, and Customer agrees to keep this information up-to-date. Account information will 
              be governed by DoQshare Privacy Policy for the applicable Services.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">3.2 End Users</h4>
            <p className="mb-2">
              <strong>Provisioning.</strong> Customer may provision End User Accounts up to the number of End User Licenses purchased 
              through one or more Order Forms. Each End User Account requires a paid End User License, and End User Accounts may 
              not be shared by multiple individuals.
            </p>
            <p>
              <strong>Additional End Users.</strong> The Services may be configured to allow Administrators or End Users to purchase 
              additional End User Licenses. Customer is responsible for understanding the settings and controls of the Services for 
              purchasing End User Licenses and provisioning new End User Accounts. DoQshare will charge Customer the applicable 
              pro-rated amount for additional End User Licenses based on Customer's then-current price unless otherwise set forth 
              on the Order Form.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">3.3 Customer Authentication</h4>
            <p>
              Customers are responsible for maintaining the confidentiality of the authentication methods they use to access the 
              Services, including their Authentication Credentials. Customer and its End Users may not share the Authentication 
              Credentials or, without DoQshare's permission, give others access to or transfer Customer's account or any End User Account.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">3.4 Unauthorized Use or Access</h4>
            <p>
              Customer will prevent unauthorized use of the Services by its End Users and terminate any unauthorized use of or access 
              to the Services. The Services are not intended for End Users under the age of 13 in the United States or 16 outside 
              of the United States. Customer will ensure that it does not allow any person under 13 within the United States or 16 
              outside the United States to use the Services. Customer is responsible for any activity using its account, whether or 
              not Customer authorized that activity. You should immediately notify DoQshare in writing of any unauthorized use of 
              your account by sending an email to support@doqshare.com.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">3.5 Restrictions</h4>
            <p className="mb-2">
              Customer may access and use the Services only for lawful purposes. Customer will not (and will not allow any third 
              party to):
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>sublicense, resell, rent, lease, transfer, assign, time share, or otherwise commercially exploit or make the Services, 
              Software, or any End User Licenses available to any third party;</li>
              <li>use the Services in any unlawful manner (including in violation of any data, privacy or export control laws) or in 
              any manner that interferes with or disrupts the integrity or performance of the Services or its components;</li>
              <li>modify, adapt or hack the Services to, or otherwise attempt to, gain unauthorized access to the Services or its 
              related systems or networks;</li>
              <li>circumvent, disable or otherwise interfere with security related features of the Services or features that prevent 
              or restrict use or copying of any Materials or enforce limitations on use of Materials; or</li>
              <li>copy, modify, create a derivative work of, reverse engineer, reverse assemble or otherwise attempt to discover any 
              source code.</li>
            </ul>
            <p className="mt-2">
              Customer will comply with any codes of conduct, policies, or other notices DoQshare provides or publishes in connection 
              with the Services, and Customer will promptly notify DoQshare if it learns of a security breach related to the Services.
            </p>
          </div>
        </CardContent>
      </Card>



      {/* Fees and Payment */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            <CardTitle>4. Fees and Payment</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <div>
            <h4 className="font-semibold text-foreground mb-2">4.1 Fees</h4>
            <p>
              Customer will pay DoQshare the Fees set forth in the Order Form. Fees are based on Services purchased and not actual 
              usage. Payment obligations are non-cancelable and Fees paid are non-refundable, except as required by law or as otherwise 
              set forth in these Terms.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">4.2 Invoicing and Payment</h4>
            <p>
              Fees will be invoiced in advance and otherwise in accordance with the relevant Order Form. Unless otherwise stated in 
              the Order Form, invoiced charges are due net 30 days from the invoice date. Customer is responsible for providing 
              complete and accurate billing and contact information to DoQshare and notifying DoQshare of any changes to such information.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">4.3 Overdue Charges</h4>
            <p>
              If any invoiced amount is not received by DoQshare by the due date, then without limiting DoQshare's rights or remedies, 
              (a) those charges may accrue late interest at the rate of 1.5% of the outstanding balance per month, or the maximum 
              rate permitted by law, whichever is lower, and/or (b) DoQshare may condition future subscription renewals and Order Forms 
              on payment terms shorter than those specified in Section 4.2.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">4.4 Suspension of Service</h4>
            <p>
              If any charge owing by Customer under this or any other agreement for Services is overdue, DoQshare may, without limiting 
              its other rights and remedies, accelerate Customer's unpaid fee obligations under such agreements so that all such 
              obligations become immediately due and payable, and suspend Services until such amounts are paid in full, provided that, 
              other than for customers paying by credit card or direct debit whose payment has been declined, DoQshare will give 
              Customer at least 10 days' prior notice that its account is overdue, in accordance with Section 15.1 ("Manner of Giving 
              Notice"), before suspending Services to Customer.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">4.5 Payment Disputes</h4>
            <p>
              DoQshare will not exercise its rights under Section 4.3 ("Overdue Charges") or 4.4 ("Suspension of Service") above if 
              Customer is disputing the applicable charges reasonably and in good faith and is cooperating diligently to resolve the 
              dispute.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">4.6 Taxes</h4>
            <p>
              Fees do not include any taxes, levies, duties or similar governmental assessments of any nature, including, for example, 
              value-added, sales, use or withholding taxes, assessable by any jurisdiction whatsoever (collectively, "<strong>Taxes</strong>"). 
              Customer is responsible for paying all Taxes associated with its purchases hereunder. If DoQshare has the legal obligation 
              to pay or collect Taxes for which Customer is responsible under this Section 4.6, DoQshare will invoice Customer and 
              Customer will pay that amount unless Customer provides DoQshare with a valid tax exemption certificate authorized by the 
              appropriate taxing authority.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Intellectual Property Rights */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>5. Intellectual Property Rights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <div>
            <h4 className="font-semibold text-foreground mb-2">5.1 Customer Data</h4>
            <p>
              Customer retains all ownership rights in and to Customer Data. Customer grants DoQshare and its Affiliates a worldwide, 
              royalty-free, non-exclusive license to host, copy, transmit and display Customer Data, solely as necessary for DoQshare 
              to provide the Services in accordance with these Terms. Subject to the limited licenses granted herein, DoQshare acquires 
              no right, title or interest from Customer or Customer's licensors under these Terms in or to any Customer Data.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">5.2 DoQshare Intellectual Property</h4>
            <p>
              Except as expressly set forth herein, DoQshare and its licensors exclusively own all right, title and interest in and 
              to the Services and Software, including all associated Intellectual Property Rights. Customer acknowledges that the 
              Services and Software are protected by copyright, trademark, and other laws. Customer will not remove, alter or obscure 
              any proprietary notices (including copyright and trademark notices) of DoQshare or its licensors on the Services or 
              Software or any copies thereof.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">5.3 Feedback</h4>
            <p>
              Customer may from time to time provide DoQshare suggestions or comments for enhancements or improvements, new features or 
              functionality or other concepts, suggestions, comments, improvements, or other feedback ("<strong>Feedback</strong>"). 
              DoQshare will have full discretion to determine whether or not to proceed with the development of any requested 
              enhancements, new features or functionality. Customer hereby grants DoQshare a royalty-free, fully paid up, worldwide, 
              transferable, sublicensable, irrevocable, perpetual license to use, modify, commercialize and/or incorporate such 
              Feedback into the Services and/or Software without any payment or attribution to Customer.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Privacy and Data Protection */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <CardTitle>7. Privacy and Data Protection</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Your privacy is important to us. Our collection, use, and protection of your personal information is governed by 
            our Privacy Policy, which is incorporated into these Terms by reference.
          </p>
          <p>
            <strong>Compliance with Privacy Laws:</strong> We are committed to compliance with:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Quebec Law 25:</strong> We comply with Quebec's privacy legislation, including requirements for 
            consent, transparency, and data breach notification.</li>
            <li><strong>PIPEDA (Canada):</strong> We adhere to the Personal Information Protection and Electronic Documents 
            Act, ensuring proper handling of personal information.</li>
            <li><strong>GDPR (EU):</strong> For users in the European Union, we comply with the General Data Protection 
            Regulation, including rights to access, rectification, erasure, and data portability.</li>
          </ul>
          <p>
            <strong>Your Rights:</strong> You have the right to access, correct, or delete your personal information. 
            You may also object to processing or request data portability. To exercise these rights, please contact us at 
            the address provided in Section 15.
          </p>
          <p>
            <strong>Data Processing:</strong> We process personal data only as necessary to provide the Service and as 
            described in our Privacy Policy. We implement appropriate technical and organizational measures to protect 
            your data.
          </p>
        </CardContent>
      </Card>

      {/* Confidentiality */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-primary" />
            <CardTitle>6. Confidentiality</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Each party ("<strong>Receiving Party</strong>") understands that the other party ("<strong>Disclosing Party</strong>") 
            has disclosed or may disclose business, technical or financial information relating to the Disclosing Party's business 
            (hereinafter referred to as "<strong>Proprietary Information</strong>" of the Disclosing Party). Proprietary Information 
            of DoQshare includes non-public information regarding features, functionality and performance of the Service. Proprietary 
            Information of Customer includes Customer Data. The Receiving Party agrees: (i) to take reasonable precautions to protect 
            such Proprietary Information, and (ii) not to use (except in performance of the Services or as otherwise permitted herein) 
            or divulge to any third person any such Proprietary Information. The Disclosing Party agrees that the foregoing will not 
            apply with respect to any information after five (5) years following the disclosure thereof or any information that the 
            Receiving Party can document (a) is or becomes generally available to the public, or (b) was in its possession or known 
            by it prior to receipt from the Disclosing Party, or (c) was rightfully disclosed to it without restriction by a third 
            party, or (d) was independently developed without use of any Proprietary Information of the Disclosing Party or (e) is 
            required to be disclosed by law.
          </p>
        </CardContent>
      </Card>

      {/* Term and Termination */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>7. Term and Termination</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <div>
            <h4 className="font-semibold text-foreground mb-2">7.1 Term</h4>
            <p>
              These Terms will remain in effect until terminated in accordance with this Section 7. The term for each Service will 
              be set forth in the applicable Order Form (the "<strong>Services Term</strong>"). Unless otherwise set forth in an 
              Order Form, Services will automatically renew for additional periods of the same duration as the expiring Services Term 
              (each a "<strong>Renewal Term</strong>"), unless either party gives the other notice of non-renewal at least 30 days 
              before the end of the relevant Services Term.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">7.2 Termination for Cause</h4>
            <p>
              A party may terminate these Terms for cause (a) upon 30 days written notice to the other party of a material breach 
              if such breach remains uncured at the expiration of such period, or (b) if the other party becomes the subject of a 
              petition in bankruptcy or any other proceeding relating to insolvency, receivership, liquidation or assignment for the 
              benefit of creditors.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">7.3 Termination for Convenience</h4>
            <p>
              Customer may terminate these Terms or any Services for convenience at any time with 30 days' prior written notice to 
              DoQshare. DoQshare may terminate these Terms or any Services for convenience with 90 days' prior written notice to Customer.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">7.4 Effect of Termination</h4>
            <p>
              Upon termination of these Terms, (a) all rights and access to the Services will immediately terminate (including access 
              to Customer Data), and (b) each party will return or destroy all Confidential Information of the other party. If Customer 
              terminates these Terms for DoQshare's breach in accordance with Section 7.2, DoQshare will refund Customer any prepaid 
              Fees covering the remainder of the Services Term after the effective date of termination. If DoQshare terminates these 
              Terms for Customer's breach in accordance with Section 7.2, Customer will pay any unpaid Fees covering the remainder of 
              the Services Term. In no event will termination relieve Customer of its obligation to pay any Fees payable to DoQshare 
              for the period prior to the effective date of termination.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">7.5 Data Export</h4>
            <p>
              During the Services Term, Customer may export Customer Data at any time. After termination or expiration of these Terms, 
              DoQshare will have no obligation to maintain or provide any Customer Data, and may thereafter, unless legally prohibited, 
              delete all Customer Data in its systems or otherwise in its possession or under its control.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Warranties and Disclaimers */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>8. Warranties and Disclaimers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <div>
            <h4 className="font-semibold text-foreground mb-2">8.1 Warranties</h4>
            <p>
              Each party represents and warrants that it has the legal power and authority to enter into these Terms. DoQshare 
              represents and warrants that it will provide the Services in a manner consistent with general industry standards 
              reasonably applicable to the provision thereof and that the Services will perform substantially in accordance with 
              the online DoQshare help documentation under normal use circumstances.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">8.2 Disclaimers</h4>
            <p>
              EXCEPT AS EXPRESSLY PROVIDED HEREIN, NEITHER PARTY MAKES ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY 
              OR OTHERWISE, AND EACH PARTY SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING ANY WARRANTIES OF MERCHANTABILITY, 
              FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT OR QUIET ENJOYMENT, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW. 
              THE SERVICES AND SOFTWARE ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Indemnification */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>9. Indemnification</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <div>
            <h4 className="font-semibold text-foreground mb-2">9.1 By Customer</h4>
            <p>
              Customer will indemnify, defend and hold harmless DoQshare from and against any and all claims, causes of action, 
              demands, recoveries, losses, damages, fines, penalties or other costs or expenses of any kind or nature including but 
              not limited to reasonable legal and accounting fees, brought by third parties as a result of: (a) Customer's or any 
              End Users' use of the Services; (b) Customer's or any End Users' violation of these Terms; (c) Customer's or any End 
              Users' violation of any rights of another party; or (d) Customer Data.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">9.2 By DoQshare</h4>
            <p>
              DoQshare will indemnify, defend and hold harmless Customer from and against any and all claims, causes of action, 
              demands, recoveries, losses, damages, fines, penalties or other costs or expenses of any kind or nature including 
              but not limited to reasonable legal and accounting fees, brought by third parties as a result of DoQshare's violation 
              of these Terms or DoQshare's infringement of any third party intellectual property rights. DoQshare will have no 
              indemnification obligation to Customer if the alleged infringement is based on (a) a combination of the Services with 
              software, hardware, data or processes not provided by DoQshare, (b) Customer Data, (c) modifications to the Services 
              not made by DoQshare, or (d) use of the Services in violation of these Terms.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Limitation of Liability */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-primary" />
            <CardTitle>10. Limitation of Liability</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            EXCEPT FOR CUSTOMER'S BREACH OF SECTION 3.5 ("RESTRICTIONS") OR SECTION 6 ("CONFIDENTIALITY"), NEITHER PARTY'S LIABILITY 
            WITH RESPECT TO ANY SINGLE INCIDENT ARISING OUT OF OR RELATED TO THESE TERMS WILL EXCEED THE AMOUNT PAID BY CUSTOMER 
            HEREUNDER IN THE 12 MONTHS PRECEDING THE INCIDENT, PROVIDED THAT IN NO EVENT WILL EITHER PARTY'S AGGREGATE LIABILITY 
            ARISING OUT OF OR RELATED TO THESE TERMS EXCEED THE TOTAL AMOUNT PAID BY CUSTOMER HEREUNDER. THE ABOVE LIMITATIONS WILL 
            APPLY WHETHER AN ACTION IS IN CONTRACT OR TORT AND REGARDLESS OF THE THEORY OF LIABILITY. HOWEVER, THE ABOVE LIMITATIONS 
            WILL NOT LIMIT CUSTOMER'S PAYMENT OBLIGATIONS UNDER SECTION 4 ("FEES AND PAYMENT").
          </p>
          <p>
            EXCEPT FOR CUSTOMER'S BREACH OF SECTION 3.5 ("RESTRICTIONS") OR SECTION 6 ("CONFIDENTIALITY"), IN NO EVENT WILL EITHER 
            PARTY HAVE ANY LIABILITY TO THE OTHER PARTY OR TO ANY THIRD PARTY FOR ANY LOST PROFITS OR REVENUES OR FOR ANY INDIRECT, 
            SPECIAL, INCIDENTAL, CONSEQUENTIAL, COVER OR PUNITIVE DAMAGES HOWEVER CAUSED, WHETHER IN CONTRACT, TORT OR UNDER ANY 
            OTHER THEORY OF LIABILITY, AND WHETHER OR NOT THE PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING 
            DISCLAIMER WILL NOT APPLY TO THE EXTENT PROHIBITED BY APPLICABLE LAW.
          </p>
          <p>
            Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so some of the above 
            limitations may not apply to you.
          </p>
        </CardContent>
      </Card>

      {/* Export Compliance */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>11. Export Compliance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            The Services utilize software and technology that may be subject to Canadian, United States and other export control 
            and sanctions laws. Customer agrees to comply with all such applicable export control laws and regulations. Customer 
            will not, directly or indirectly, export, re-export, or transfer the Services to any country, territory, or person 
            prohibited by such laws or regulations, without first obtaining all required authorizations or licenses.
          </p>
        </CardContent>
      </Card>

      {/* Dispute Resolution */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>12. Dispute Resolution</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            If a dispute arises between the parties relating to these Terms, the parties will first attempt to resolve the dispute 
            through good faith negotiations. If the parties are unable to resolve the dispute through negotiations, the dispute will 
            be resolved through binding arbitration in accordance with the rules of the Canadian Arbitration Association, or through 
            the courts of Québec, Canada, as applicable.
          </p>
        </CardContent>
      </Card>

      {/* General Provisions */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-primary" />
            <CardTitle>13. General Provisions</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <div>
            <h4 className="font-semibold text-foreground mb-2">13.1 Governing Law</h4>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Province of Québec, Canada, 
              without regard to its conflict of law provisions. Any disputes arising out of or relating to these Terms or the 
              Service shall be subject to the exclusive jurisdiction of the courts of Québec, Canada.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">13.2 Manner of Giving Notice</h4>
            <p>
              Except as otherwise specified in these Terms, all notices, permissions and approvals hereunder shall be in writing 
              and shall be deemed to have been given upon: (i) personal delivery, (ii) the second business day after mailing, 
              (iii) the second business day after sending by confirmed facsimile, or (iv) the first business day after sending 
              by email (provided email shall not be sufficient for notices of termination or an indemnifiable claim). Notices to 
              Customer will be addressed to the system administrator designated by Customer for Customer's relevant Services account, 
              and in the case of billing-related notices, to the relevant billing contact designated by Customer. Notices to DoQshare 
              should be addressed to: DoQshare, Laval, Québec, Canada, Attn: Legal Department.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">13.3 Assignment</h4>
            <p>
              Neither party may assign any of its rights or obligations hereunder, whether by operation of law or otherwise, 
              without the other party's prior written consent (not to be unreasonably withheld); provided, however, either party 
              may assign these Terms in their entirety (including all Order Forms), without the other party's consent to its 
              affiliate or in connection with a merger, acquisition, corporate reorganization, or sale of all or substantially all 
              of its assets. Notwithstanding the foregoing, if a party is acquired by, sells substantially all of its assets to, 
              or undergoes a change of control in favor of, a direct competitor of the other party, then such other party may 
              terminate these Terms upon written notice. In the event of such a termination, DoQshare will refund to Customer any 
              prepaid Fees covering the remainder of the Services Term of all Order Forms after the effective date of termination. 
              Subject to the foregoing, these Terms will bind and inure to the benefit of the parties, their respective successors 
              and permitted assigns.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">13.4 Severability</h4>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or 
              eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">13.5 Waiver</h4>
            <p>
              No failure or delay by either party in exercising any right under these Terms will constitute a waiver of that right. 
              No waiver under these Terms will be effective unless made in writing and signed by an authorized representative of 
              the party being deemed to have granted the waiver.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">13.6 Privacy</h4>
            <p>
              Customer acknowledges that information you share with us may be collected, used, and disclosed as described in the 
              Privacy Policy. Please carefully review our{" "}
              <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> to understand how DoQshare collects 
              and uses personal information.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">13.7 Entire Agreement</h4>
            <p>
              Both parties agree that these Terms are the complete and exclusive statement of the mutual understanding of the parties 
              and supersede and cancel all previous written and oral agreements, communications and other understandings relating to 
              the subject matter of these Terms, and that all waivers and modifications must be in a writing signed by both parties, 
              except as otherwise provided.
            </p>
          </div>
          <Separator className="my-4" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">13.8 Survival</h4>
            <p>
              The following will survive any termination of these Terms: Sections 1.5, 1.7, 3.3, 3.4, 4, 6, 7.4, 8, 9, 10, 11, 13, 
              and 14; all indemnity provisions and all disclaimers and limitations of warranties and damages set forth in these Terms 
              or otherwise existing at law all definitions used in the foregoing sections, regardless of where located; and all 
              perpetual licenses granted under these Terms that are not expressly terminated.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Definitions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>14. Definitions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <div className="space-y-3 text-sm">
            <p>
              <strong>"Administrator"</strong> means a Customer-designated End User who administers the Services to End Users on 
              Customer's behalf, through multiple tiers.
            </p>
            <p>
              <strong>"Affiliate"</strong> means any entity that controls, is controlled by or is under common control with a party, 
              where "control" means the ability to direct the management and policies of an entity.
            </p>
            <p>
              <strong>"Authentication Credentials"</strong> means user names, passwords, and other authentication information.
            </p>
            <p>
              <strong>"Beta Services"</strong> means services or features identified as alpha, beta, preview, early access, or 
              evaluation, or words or phrases with similar meanings.
            </p>
            <p>
              <strong>"Customer Data"</strong> means the data, information, documents, records, text, content and other materials 
              that you upload, share, post, deliver, provide or otherwise transmit or store using the Services.
            </p>
            <p>
              <strong>"Effective Date"</strong> means the date these Terms are entered into by the parties, either by acceptance 
              online or by the signing of an Order Form.
            </p>
            <p>
              <strong>"End Users"</strong> means users of Customer's Services account. End Users may include Customer's and its 
              Affiliate's employees, consultants, agents, representatives, students, or any other person authorized by Customer to 
              use the Services through Customer's account.
            </p>
            <p>
              <strong>"End User Account"</strong> means an account provisioned by Customer through the Services for an End User.
            </p>
            <p>
              <strong>"End User License"</strong> means a user license purchased by Customer which enables Customer to provision an 
              End User Account.
            </p>
            <p>
              <strong>"Fees"</strong> means the amounts invoiced to Customer or charged by DoQshare in accordance with the Order Form.
            </p>
            <p>
              <strong>"Intellectual Property Rights"</strong> means current and future worldwide rights under patent, copyright, trade 
              secret, trademark, moral rights, and other similar rights.
            </p>
            <p>
              <strong>"Materials"</strong> means all of the content on the Service, including the trademarks, service marks, and logos 
              contained on the Service, except for Customer Data.
            </p>
            <p>
              <strong>"Order Form"</strong> means an ordering document, order page, or user interface through which Customer purchases 
              a subscription to, activates, or registers for the Services.
            </p>
            <p>
              <strong>"Privacy Policy"</strong> means the DoQshare Privacy Policy available at{" "}
              <a href="/privacy" className="text-primary hover:underline">https://doqshare.com/privacy</a>.
            </p>
            <p>
              <strong>"Services"</strong> means the DoQshare services, which include: (a) the DoQshare website (https://doqshare.com); 
              (b) the communication and information sharing services and related technologies, including the interactive features and 
              features for communication with others, available through the website; (c) other services we make available to you as 
              described in an Order Form; (d) Software; and (e) the Materials.
            </p>
            <p>
              <strong>"Services Term"</strong> means the Initial Services Term and all Renewal Terms for the applicable Services.
            </p>
            <p>
              <strong>"Software"</strong> means any software provided by DoQshare as part of the Services, either directly by DoQshare 
              or through third party distribution channels such as app stores.
            </p>
            <p>
              <strong>"Sub-processor"</strong> means an entity who agrees to process Customer Data on DoQshare's behalf, or on behalf 
              of another DoQshare sub-processor, in order to deliver the Services.
            </p>
            <p>
              <strong>"Taxes"</strong> means any sales, use, value added, goods and services, consumption, excise, local stamp, or 
              other tax, duty or other charge of any kind or nature excluding tax that is based on DoQshare's net income, associated 
              with the Services or Software, including any related penalties or interest.
            </p>
            <p>
              <strong>"Term"</strong> means the term of these Terms, which will begin on the Effective Date and continue until the 
              earlier of: (i) the end of all applicable Services Terms; or (ii) the Agreement is terminated as set forth herein.
            </p>
            <p>
              <strong>"Third Party Service"</strong> means a third-party service, application, website, or other resource.
            </p>
            <p>
              <strong>"Third Party Materials"</strong> means any materials, opinions, goods, or services made available through a 
              Third Party Service.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{terms.sections.contact.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>{terms.sections.contact.content.intro}</p>
          <div className="bg-muted/50 rounded-lg p-6 space-y-3">
            <p><strong>{terms.sections.contact.content.company}</strong></p>
            <p>{terms.sections.contact.content.location}</p>
            <p>
              <strong>{terms.sections.contact.content.email}</strong>{" "}
              <a href="mailto:legal@doqshare.com" className="text-primary hover:underline">
                {terms.sections.contact.content.legal_email}
              </a>
            </p>
            <p>
              <strong>{terms.sections.contact.content.phone}</strong> {terms.sections.contact.content.phone_number}
            </p>
            <p>
              <strong>{terms.sections.contact.content.privacy_officer}</strong> {terms.sections.contact.content.privacy_officer_note}{" "}
              <a href="mailto:privacy@doqshare.com" className="text-primary hover:underline">
                {terms.sections.contact.content.privacy_email}
              </a>
            </p>
          </div>
        </CardContent>
      </Card>


      {/* Acknowledgment */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border-2 border-blue-200 dark:border-blue-800">
        <p className="text-sm text-muted-foreground">
          <strong>{terms.sections.acknowledgment}</strong>
        </p>
      </div>
    </div>
  );
}

