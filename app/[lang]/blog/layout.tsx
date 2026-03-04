import { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

interface BlogLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: BlogLayoutProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  
  const blogTitle = lang === 'fr' 
    ? "Blog DoQshare - Insights sur le Partage Sécurisé de Documents"
    : "Blog DoQshare - Insights on Secure Document Sharing";
  const blogDescription = lang === 'fr'
    ? "Découvrez les derniers insights, conseils et meilleures pratiques pour le partage sécurisé de documents, les data rooms, la conformité GDPR/HIPAA et la sécurité entreprise."
    : "Discover the latest insights, tips, and best practices for secure document sharing, data rooms, GDPR/HIPAA compliance, and enterprise security.";
  const blogKeywords = lang === 'fr'
    ? [
        "blog sécurité documentaire",
        "blog partage de documents sécurisé",
        "meilleures pratiques data room",
        "guide conformité GDPR",
        "conseils conformité HIPAA",
        "insights analytics documentaires",
        "blog sécurité entreprise",
        "conseils levée de fonds",
        "meilleures pratiques fusions-acquisitions"
      ]
    : [
        "blog document security",
        "secure document sharing blog",
        "data room best practices",
        "GDPR compliance guide",
        "HIPAA compliance tips",
        "document analytics insights",
        "enterprise security blog",
        "fundraising advice",
        "M&A best practices"
      ];

  return generateSEOMetadata({
    title: `${blogTitle} - DoQshare`,
    description: blogDescription,
    keywords: blogKeywords,
    canonical: `/${lang}/blog`,
    ogImage: "/images/og-blog.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": blogTitle,
      "description": blogDescription,
      "url": `https://doqshare.com/${lang}/blog`,
      "publisher": {
        "@type": "Organization",
        "name": "DoQshare",
        "logo": {
          "@type": "ImageObject",
          "url": "https://doqshare.com/images/logo.png"
        }
      }
    }
  });
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

