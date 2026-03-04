import { Metadata } from "next";
import AppIntegration from '@/components/shadcn-studio/blocks/app-integration-01/app-integration-01'
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

interface AppIntegrationPageProps {
  params: Promise<{ lang: Locale }>;
}

export async function generateMetadata({ params }: AppIntegrationPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const appIntegrationPage = dictionary.app_integration_page;

  return generateSEOMetadata({
    title: `${appIntegrationPage.metadata.title} - DoQshare`,
    description: appIntegrationPage.metadata.description,
    keywords: appIntegrationPage.metadata.keywords,
    canonical: `/${lang}/app-integration-01`,
  });
}

export default async function AppIntegrationPage({ params }: AppIntegrationPageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const appIntegrationPage = dictionary.app_integration_page;

  // Map dictionary integrations to component format
  const integrations = appIntegrationPage.integrations.map((integration, index) => {
    // Images URLs - these remain the same regardless of language
    const imageUrls = [
      'https://cdn.shadcnstudio.com/ss-assets/brand-logo/microsoft-icon.png',
      'https://cdn.shadcnstudio.com/ss-assets/brand-logo/spotify-icon.png',
      'https://cdn.shadcnstudio.com/ss-assets/brand-logo/github-white.png'
    ];

    return {
      name: integration.name,
      description: integration.description,
      image: imageUrls[index],
      alt: integration.alt
    };
  });

  return <AppIntegration integrations={integrations} />
}
