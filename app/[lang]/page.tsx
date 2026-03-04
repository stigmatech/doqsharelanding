import { Metadata } from "next"
import Hero from "@/components/hero"
import LogoCloud from "@/components/logo-cloud"
import { Feature3 } from "@/components/feature3"
import { Feature5 } from "@/components/feature5"
import { CTA1 } from "@/components/cta1"
import { Testimonials1 } from "@/components/testimonials1"
import { Stats2 } from "@/components/stats2"
import { Pricing1 } from "@/components/pricing1"
import { FAQ1 } from "@/components/faq1"
import { Blog1 } from "@/components/blog1"
import { ScrollAnimation } from "@/components/scroll-animation"
import { generateMetadata as generateSEOMetadata, generateFAQSchema, generateReviewsSchema } from "@/lib/seo"
import { reviewsData, aggregateRating } from "@/lib/reviews-data"
import ScrollTracking from "@/components/analytics/scroll-tracking"
import TimeTracking from "@/components/analytics/time-tracking"
import { getDictionary } from "../../get-dictionary"
import { type Locale } from "../../i18n-config"

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const homepage = dictionary.homepage;

  return generateSEOMetadata({
    title: homepage.metadata.title,
    description: homepage.metadata.description,
    keywords: homepage.metadata.keywords,
    canonical: `/${lang}`,
    ogImage: "/images/og-homepage.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "DoQshare",
      "description": homepage.metadata.description,
      "url": "https://doqshare.com",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "14-day free trial",
        "availability": "https://schema.org/InStock"
      },
      "creator": {
        "@type": "Organization",
        "name": "DoQshare",
        "url": "https://doqshare.com"
      },
      "featureList": [
        "Secure document sharing",
        "Advanced analytics",
        "Virtual data rooms",
        "GDPR/HIPAA/SOC2 compliance",
        "Dynamic watermarking",
        "Granular access control",
        "Complete audit trail"
      ],
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://doqshare.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  });
}

interface PageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  // FAQ data for structured data - using dictionary
  const faqData = dictionary.faq1.faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer
  }));

  const faqSchema = generateFAQSchema(faqData);
  const reviewsSchemas = generateReviewsSchema({
    reviews: reviewsData,
    aggregateRating,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      {reviewsSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <ScrollTracking />
      <TimeTracking pageName="home" />
      <Hero dictionary={dictionary} lang={lang} />
      <ScrollAnimation>
        <LogoCloud dictionary={dictionary} />
      </ScrollAnimation>
      <ScrollAnimation delay={0.1}>
        <Feature3 dictionary={dictionary} />
      </ScrollAnimation>
      <ScrollAnimation delay={0.2}>
        <Feature5 dictionary={dictionary} />
      </ScrollAnimation>
      <ScrollAnimation delay={0.1}>
        <CTA1 dictionary={dictionary} lang={lang} />
      </ScrollAnimation>
      <ScrollAnimation delay={0.2}>
        <Testimonials1 dictionary={dictionary} />
      </ScrollAnimation>
      <ScrollAnimation delay={0.1}>
        <Stats2 dictionary={dictionary} />
      </ScrollAnimation>
      <ScrollAnimation delay={0.2}>
        <Pricing1 dictionary={dictionary} lang={lang} />
      </ScrollAnimation>
      <ScrollAnimation delay={0.1}>
        <FAQ1 dictionary={dictionary} />
      </ScrollAnimation>
      <ScrollAnimation delay={0.2}>
        <Blog1 dictionary={dictionary} lang={lang} />
      </ScrollAnimation>
    </>
  )
}
