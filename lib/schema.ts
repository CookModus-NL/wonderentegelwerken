/**
 * JSON-LD structured data — kritisch voor lokale SEO.
 * Wordt geïnjecteerd via <script type="application/ld+json"> in layout.tsx.
 *
 * Geverifieerd tegen schema.org/LocalBusiness + Google's lokale rich-result guidelines.
 */

import { business } from '@/content/business'
import { services } from '@/content/services'
import { tegelwinkels } from '@/content/partners'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${business.url}/#business`,
    name: business.name,
    // Tot 05-11-2026 stond hier alternateName 'Jaap van Wonderen': een persoonsnaam als alias
    // van het bedrijf. Jaap is nu zijn eigen knoop (founder), zoals de GEO-audit van die dag vroeg.
    founder: {
      '@type': 'Person',
      '@id': `${business.url}/#jaap`,
      name: `${business.ownerFirstName} van Wonderen`,
      jobTitle: 'Tegelzetter',
      worksFor: { '@id': `${business.url}/#business` },
      url: `${business.url}/over-ons`,
    },
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
      business.social.google,
      business.social.facebook,
      business.social.instagram,
    ].filter(Boolean),
    ...(business.social.google ? { hasMap: business.social.google } : {}),
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
    // GEEN aggregateRating en GEEN review op dit blok — en dat is één besluit, geen twee.
    //
    // De zin waar het op staat, letterlijk: "If the entity that's being reviewed controls
    // the reviews about itself, their pages that use LocalBusiness or any other type of
    // Organization structured data are ineligible for star review feature."
    // (developers.google.com/search/docs/appearance/structured-data/review-snippet,
    // bijgewerkt 08-09-2026, opnieuw gelezen 29-10-2026.) Het onderwerp van die zin is de
    // PAGINA, niet het gemiddelde: wie zijn eigen reviews beheert komt met LocalBusiness of
    // welk Organization-subtype dan ook niet in aanmerking voor de sterrenweergave. Van
    // Wonderen beheert deze zeven citaten zelf op zijn eigen site, dus dit is precies het
    // geval dat die zin uitsluit.
    //
    // Op 23-09-2026 is op die grond de aggregateRating hier weggehaald
    // (TAAK-20260920-WONDEREN-ZELFBEOORDELING, commit 792578f), maar de zeven losse
    // Review-objecten bleven staan omdat die taak er niet om vroeg. Dat was inconsistent:
    // de ingeroepen regel sluit de hele sterrenweergave uit, en zowel aggregateRating als
    // review voeden alleen die weergave.
    //
    // 29-10-2026, TAAK-20260923-WONDEREN-ZELFREVIEW-MARKUP — de vraag "levert dit blok nog
    // enige weergave op?" is nagelopen en het antwoord is NEE:
    //   1. Sterrenweergave (review snippet): expliciet uitgesloten door de zin hierboven.
    //   2. Een andere Google-zoekweergave die `review` op een Organization-subtype leest,
    //      staat niet in de documentatie — de reviewdocumentatie kent alleen de
    //      sterrenweergave, en de overige weergaven (Product, Recipe, Event, Book, Movie,
    //      Course, Software App) gelden voor andere typen dan dit blok.
    //   3. De markup is niet verboden en levert geen handmatige maatregel op; ze wordt
    //      genegeerd. Dode markup dus, geen risico — maar ook geen opbrengst.
    // Daarom weg. De zichtbare reviewsectie op de homepage blijft ongemoeid: de citaten
    // staan gewoon in de tekst van de pagina (components/klant-citaat.tsx), dus wat een
    // lezer of een assistent van die reviews kan weten verandert hier niet.
    // Komt er ooit een onafhankelijke bron (Google Business-profiel, een beoordelingssite),
    // dan is dat een ander geval dan dit en pas dan weer een afweging.
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

/**
 * De tegelwinkels die de pagina bij naam noemt (components/tegelwinkels.tsx). Bewust
 * `mentions` op de WebPage en niets op #business: schema.org kent geen "partner", en
 * memberOf, brand, affiliation of seller zouden een relatie claimen die er niet is.
 * Designtegels' tegelzetterslijst staat als hún WebPage die #business noemt; geen sameAs,
 * want die pagina is niet van Van Wonderen en noemt ook andere tegelzetters.
 */
export function tegelwinkelsSchema(paginaUrl: string) {
  const winkelId = (slug: string) => `${business.url}/#winkel-${slug}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${paginaUrl}#webpage`,
        url: paginaUrl,
        isPartOf: { '@id': `${business.url}/#website` },
        about: { '@id': `${business.url}/#business` },
        mentions: tegelwinkels.map((w) => ({ '@id': winkelId(w.slug) })),
      },
      ...tegelwinkels.map((w) => ({
        '@type': 'HomeGoodsStore',
        '@id': winkelId(w.slug),
        name: w.officieel ?? (w.filiaal ? `${w.naam} ${w.plaats}` : w.naam),
        url: w.url,
        // Een filiaal hangt aan de organisatie; de socials zijn van die organisatie, niet van
        // het filiaal. Zonder filiaal is de winkel zelf de organisatie.
        ...(w.hoofdUrl
          ? { branchOf: { '@type': 'Organization', name: w.naam, url: w.hoofdUrl, ...(w.sameAs ? { sameAs: w.sameAs } : {}) } }
          : w.sameAs ? { sameAs: w.sameAs } : {}),
        address: {
          '@type': 'PostalAddress',
          streetAddress: w.straat,
          postalCode: w.postcode,
          addressLocality: w.plaats,
          addressCountry: 'NL',
        },
      })),
      ...tegelwinkels
        .filter((w) => w.vermeldtMij)
        .map((w) => ({
          '@type': 'WebPage',
          '@id': w.vermeldtMij,
          url: w.vermeldtMij,
          publisher: { '@id': winkelId(w.slug) },
          mentions: { '@id': `${business.url}/#business` },
        })),
    ],
  }
}

/** De site als geheel; elke WebPage-knoop hangt hier met isPartOf aan. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${business.url}/#website`,
    url: business.url,
    name: business.name,
    inLanguage: 'nl-NL',
    publisher: { '@id': `${business.url}/#business` },
  }
}
