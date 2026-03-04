import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import ContactSection from "@/components/contact";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

interface ContactPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return generateSEOMetadata({
    title: dictionary.contact_page?.metadata?.title || "Contact DoQshare",
    description: dictionary.contact_page?.metadata?.description,
    keywords: dictionary.contact_page?.metadata?.keywords,
    canonical: `/${lang}/contact`,
    ogImage: "/images/og-contact.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact DoQshare",
      "description": dictionary.contact_page?.metadata?.description || "Contact page for support and sales",
      "mainEntity": {
        "@type": "Organization",
        "name": "DoQshare",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "hello@doqshare.com"
          }
        ]
      }
    }
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return <ContactSection dictionary={dictionary} />;
}
