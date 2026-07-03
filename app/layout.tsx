import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppFloating } from '@/components/whatsapp-floating'
import { localBusinessSchema } from '@/lib/schema'
import { business } from '@/content/business'
import '@fontsource-variable/inter'
import '@fontsource-variable/fraunces'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: 'Tegelzetter Breda | Van Wonderen Tegelwerken',
    template: '%s | Van Wonderen Tegelwerken',
  },
  description:
    'Tegelzetter Jaap van Wonderen in Breda. Vakwerk voor badkamer, vloer, wand, terras en kitwerk. Eén vakman, geen onderaannemers. Vrijblijvende offerte via WhatsApp.',
  keywords: [
    'tegelzetter Breda', 'tegelzetter in Breda', 'tegelzetter Zandberg',
    'badkamer renoveren Breda', 'badkamer renovatie Breda', 'vloertegels Breda',
    'wandtegels Breda', 'kitwerk Breda', 'tegelzetter Teteringen',
    'tegelzetter Oosterhout', 'tegelzetter Etten-Leur', 'tegelzetter Tilburg',
    'buitentegelwerk Breda', 'tegelzetter West-Brabant',
  ],
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  applicationName: business.name,
  category: 'Tegelzetter',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: business.url,
    siteName: business.name,
    title: 'Tegelzetter Breda | Van Wonderen Tegelwerken',
    description:
      'Jaap van Wonderen, tegelzetter in Breda. Eén vakman voor badkamer, vloer, wand, terras en kitwerk. Vrijblijvende offerte via WhatsApp.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Van Wonderen Tegelwerken' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tegelzetter Breda | Van Wonderen Tegelwerken',
    description: 'Jaap van Wonderen, tegelzetter in Breda. Eén vakman voor alles.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    // Voeg later toe na Google Search Console verificatie
    // google: 'jouw-verificatie-code',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloating />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
