import { DM_Sans } from "next/font/google"
import { Metadata } from "next"

import "../globals.css"
import { Providers } from "@/components/providers"
import Header from "@/components/header"
import ModernFooter from "@/components/modern-footer"
import { defaultSEO, structuredData } from "@/lib/seo"
import GoogleAnalytics from "@/components/analytics/google-analytics"
import GoogleTagManager, { GoogleTagManagerNoScript } from "@/components/analytics/google-tag-manager"
import ErrorBoundary from "@/components/error/error-boundary"
import GlobalErrorHandler from "@/components/error/global-error-handler"
import SkipLinks from "@/components/accessibility/skip-links"
import { AnnouncerProvider } from "@/components/accessibility/announcer"
import { ConsentManager } from "../consent-manager";

import { i18n, type Locale } from "../../i18n-config";
import { getDictionary } from "../../get-dictionary";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const dmsans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  ...defaultSEO,
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://doqshare.com'),
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: '/icon.svg',
  },
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  // params is a Promise in Next.js 15+ or recent versions, awaiting it is safer
  const resolvedParams = await params;
  const dictionary = await getDictionary(resolvedParams.lang as Locale);

  return (
    <html lang={resolvedParams.lang} suppressHydrationWarning>
      <head>
        {structuredData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(data),
            }}
          />
        ))}
        <GoogleTagManager />
      </head>
      <body
        className={`${dmsans.variable} font-sans antialiased`}
      >
        {/* Google Tag Manager (noscript) - Doit être juste après <body> */}
        <GoogleTagManagerNoScript />
        <ConsentManager>

          <GoogleAnalytics />
          <SkipLinks />
          <ErrorBoundary>
            <GlobalErrorHandler>
              <AnnouncerProvider>
                <Providers>

                  <Header dictionary={dictionary.navigation} lang={resolvedParams.lang} />
                  <main id="main-content" className="min-h-screen" role="main">
                    {children}
                  </main>
                  <ModernFooter dictionary={dictionary} lang={resolvedParams.lang} />
                </Providers>
              </AnnouncerProvider>
            </GlobalErrorHandler>
          </ErrorBoundary>
          <Analytics />
          <SpeedInsights />
        </ConsentManager>
      </body>
    </html>
  )
}
