import { Geist, Geist_Mono } from "next/font/google"
import { Metadata } from "next"

import "@workspace/ui/globals.css"
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

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  ...defaultSEO,
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://doqshare.com'),
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <GoogleTagManager />
      </head>
            <body
              className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
            >
              <GoogleTagManagerNoScript />
              <GoogleAnalytics />
              <SkipLinks />
              <ErrorBoundary>
                <GlobalErrorHandler>
                  <AnnouncerProvider>
                    <Providers>
                      <Header />
                      <main id="main-content" className="min-h-screen" role="main">
                        {children}
                      </main>
                      <ModernFooter />
                    </Providers>
                  </AnnouncerProvider>
                </GlobalErrorHandler>
              </ErrorBoundary>
            </body>
    </html>
  )
}
