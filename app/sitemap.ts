import type { MetadataRoute } from 'next'
import { business } from '@/content/business'
import { services } from '@/content/services'
import { projects } from '@/content/projects'
import { cities } from '@/content/cities'
import lastmod from '@/content/lastmod.json'

/**
 * lastmod komt uit content/lastmod.json (gegenereerd door scripts/lastmod.mjs
 * uit de git-historie), NIET uit new Date(). Met het buildmoment beweerde elke
 * deploy dat alle 24 pagina's waren gewijzigd — gemeten 2 sep 2026: 24/24
 * identieke lastmod. Dan negeert Google het signaal (platform-regel A8).
 *
 * Ontbreekt een pad in de kaart, dan laten we lastmod WEG. Een ontbrekende
 * lastmod is eerlijk; een verzonnen datum is dat niet.
 */
const paden = lastmod.paden as Record<string, string | null>

function entry(
  pad: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
) {
  const datum = paden[pad]
  return {
    url: pad === '/' ? business.url : `${business.url}${pad}`,
    ...(datum ? { lastModified: new Date(datum) } : {}),
    priority,
    changeFrequency,
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry('/', 1, 'monthly'),
    entry('/diensten', 0.9, 'monthly'),
    entry('/projecten', 0.8, 'weekly'),
    entry('/tegelzetter', 0.9, 'monthly'),
    entry('/over-ons', 0.6, 'yearly'),
    entry('/werkgebied', 0.6, 'yearly'),
    entry('/contact', 0.7, 'yearly'),
    // Antwoordeenheid (antwoordlaag) — één klantvraag, volledig beantwoord
    entry('/badkamer-betegelen-tot-plafond', 0.8, 'monthly'),
    entry('/tegelen-op-houten-ondervloer', 0.8, 'monthly'),
    entry('/losse-tegels-en-scheurende-voegen', 0.8, 'monthly'),
    entry('/tegelvloer-belopen-en-vloerverwarming-aanzetten', 0.8, 'monthly'),
    ...services.map((s) => entry(`/diensten/${s.slug}`, 0.8, 'monthly')),
    ...projects.map((p) => entry(`/projecten/${p.slug}`, 0.7, 'yearly')),
    // Lokale SEO landingspagina's per plaats
    ...cities.map((c) => entry(`/tegelzetter/${c.slug}`, 0.85, 'monthly')),
  ]
}
