/**
 * JSON-LD structured data — kritisch voor lokale SEO.
 * Wordt geïnjecteerd via <script type="application/ld+json"> in layout.tsx.
 *
 * Geverifieerd tegen schema.org/LocalBusiness + Google's lokale rich-result guidelines.
 */

import { business } from '@/content/business'
import { services } from '@/content/services'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${business.url}/#business`,
    name: business.name,
    alternateName: 'Jaap van Wonderen',
    description: business.description,
    slogan: business.tagline,
    url: business.url,
    logo: `${business.url}/logo.svg`,
    image: `${business.url}/opengraph-image`,
    telephone: business.phoneE164,
    email: business.email,
    foundingDate: business.founded,
    knowsLanguage: ['nl-NL'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      postalCode: business.address.postalCode,
      addressLocality: business.address.city,
      addressRegion: business.address.province,
      addressCountry: business.address.country,
    },
    areaServed: business.serviceArea.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.5719, // Breda Zandberg (Leistraat)
      longitude: 4.7831,
    },
    identifier: [
      { '@type': 'PropertyValue', name: 'KvK', value: business.kvk },
    ],
    openingHoursSpecification: business.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.opens,
      closes: h.closes,
    })),
    priceRange: '€€',
    paymentAccepted: 'Cash, Pin, Bank transfer, Tikkie',
    currenciesAccepted: 'EUR',
    sameAs: [
      // Voeg toe na GBP/social setup
    ].filter(Boolean),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Diensten',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.short,
          url: `${business.url}/diensten/${s.slug}`,
        },
      })),
    },
  }
}

export function serviceSchema(slug: string) {
  const service = services.find((s) => s.slug === slug)
  if (!service) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.long,
    provider: { '@id': `${business.url}/#business` },
    areaServed: business.serviceArea.map((c) => ({ '@type': 'City', name: c })),
    url: `${business.url}/diensten/${slug}`,
  }
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
