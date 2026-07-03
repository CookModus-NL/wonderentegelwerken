import type { MetadataRoute } from 'next'
import { business } from '@/content/business'
import { services } from '@/content/services'
import { projects } from '@/content/projects'
import { cities } from '@/content/cities'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.url
  const now = new Date()
  return [
    { url: base, lastModified: now, priority: 1, changeFrequency: 'monthly' },
    { url: `${base}/diensten`, lastModified: now, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/projecten`, lastModified: now, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${base}/tegelzetter`, lastModified: now, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/over-ons`, lastModified: now, priority: 0.6, changeFrequency: 'yearly' },
    { url: `${base}/werkgebied`, lastModified: now, priority: 0.6, changeFrequency: 'yearly' },
    { url: `${base}/contact`, lastModified: now, priority: 0.7, changeFrequency: 'yearly' },
    ...services.map((s) => ({
      url: `${base}/diensten/${s.slug}`,
      lastModified: now, priority: 0.8, changeFrequency: 'monthly' as const,
    })),
    ...projects.map((p) => ({
      url: `${base}/projecten/${p.slug}`,
      lastModified: now, priority: 0.7, changeFrequency: 'yearly' as const,
    })),
    // Lokale SEO landingspagina's per plaats
    ...cities.map((c) => ({
      url: `${base}/tegelzetter/${c.slug}`,
      lastModified: now, priority: 0.85, changeFrequency: 'monthly' as const,
    })),
  ]
}
