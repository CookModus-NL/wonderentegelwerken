/**
 * Portfolio. Vul aan met echte project-informatie van Van Wonderen.
 * Voor nu: groeperingen op basis van gescrapete foto-batches.
 */

export type Project = {
  slug: string
  title: string
  location: string
  date: string // YYYY-MM
  surface?: string
  tileType?: string
  category: 'badkamer' | 'vloer' | 'wand' | 'buiten' | 'maatwerk'
  description: string
  hero: string
  gallery: string[]
  quote?: { text: string; author: string }
}

export const projects: Project[] = [
  {
    slug: 'badkamer-juli-2025',
    title: 'Moderne badkamer met grootformaat tegels',
    location: 'Breda',
    date: '2025-07',
    surface: '6 m²',
    tileType: 'Keramiek 60×120 antraciet',
    category: 'badkamer',
    description: 'Complete badkamerrenovatie met inloopdouche, grootformaat wandtegels en betonlook vloer.',
    hero: '/images/projects/portfolio-2025-07-laag-1.webp',
    gallery: [
      '/images/projects/portfolio-2025-07-laag-1.webp',
      '/images/projects/portfolio-2025-07-laag-2.webp',
      '/images/projects/portfolio-2025-07-laag-13.webp',
      '/images/projects/portfolio-2025-07-laag-14.webp',
      '/images/projects/portfolio-2025-07-laag-15.webp',
    ],
  },
  {
    slug: 'vloer-maart-2025',
    title: 'Strakke woonkamer-vloer in betonlook',
    location: 'Teteringen',
    date: '2025-03',
    surface: '42 m²',
    tileType: 'Keramiek 80×80 betonlook',
    category: 'vloer',
    description: 'Naadloze betonlook vloer in open woonkamer-keuken, inclusief egaliseren van de bestaande ondervloer.',
    hero: '/images/projects/portfolio-2025-03-wa0006.webp',
    gallery: [
      '/images/projects/portfolio-2025-03-wa0006.webp',
      '/images/projects/portfolio-2025-03-wa0007.webp',
      '/images/projects/portfolio-2025-03-wa0008.webp',
      '/images/projects/portfolio-2025-03-wa0009.webp',
      '/images/projects/portfolio-2025-03-wa0010.webp',
    ],
  },
  {
    slug: 'badkamer-januari-2025',
    title: 'Klassieke badkamer met witte wandtegels',
    location: 'Oosterhout',
    date: '2025-01',
    surface: '5 m²',
    tileType: 'Wand: 10×30 wit, vloer: hexagon mozaïek',
    category: 'badkamer',
    description: 'Tijdloze badkamer met traditionele 10×30 wandtegels en een hexagon-mozaïek vloer.',
    hero: '/images/projects/portfolio-2025-01-wa0076.webp',
    gallery: [
      '/images/projects/portfolio-2025-01-wa0076.webp',
      '/images/projects/portfolio-2025-01-wa0077.webp',
      '/images/projects/portfolio-2025-01-wa0078.webp',
      '/images/projects/portfolio-2025-01-wa0059.webp',
      '/images/projects/portfolio-2025-01-wa0060.webp',
    ],
  },
]
