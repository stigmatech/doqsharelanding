import { Metadata } from "next";
import Error from '@/components/shadcn-studio/blocks/error-page-01/error-page-01'
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

interface ErrorPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: ErrorPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  
  const title = lang === 'fr'
    ? "Page d'Erreur - DoQshare"
    : "Error Page - DoQshare";
  const description = lang === 'fr'
    ? "Une erreur s'est produite. Retournez à la page d'accueil DoQshare."
    : "An error occurred. Return to DoQshare homepage.";
  const keywords = lang === 'fr'
    ? [
        "erreur",
        "page erreur",
        "DoQshare erreur"
      ]
    : [
        "error",
        "error page",
        "DoQshare error"
      ];

  return generateSEOMetadata({
    title: `${title} - DoQshare`,
    description,
    keywords,
    canonical: `/${lang}/error-page-01`,
    noIndex: true,
  });
}

export default async function ErrorPage({ params }: ErrorPageProps) {
  return <Error />
}
