/**
 * Per-city landing pages voor lokale SEO.
 * Elke stad heeft unieke copy zodat Google ze als losse pagina rankt
 * voor "tegelzetter [stad]" zoekopdrachten.
 */

export type City = {
  slug: string
  name: string
  /** Wijk- of dorpsaanduiding voor variatie */
  region: string
  /** Afstand van Breda — gebruikt in copy */
  distance: string
  /** Korte intro die uniek is per stad */
  intro: string
  /** Lokale projecten of context */
  localContext: string
  /** Welke project-slug toont gerelateerd werk */
  featuredProjectSlug?: string
  /** Featured image */
  heroImage: string
}

export const cities: City[] = [
  {
    slug: 'breda',
    name: 'Breda',
    region: 'centrum en wijken',
    distance: '0 km. Thuisbasis.',
    intro:
      'Breda is mijn thuisbasis. Ik werk vanuit Leistraat in Zandberg en sta vaak binnen het kwartier bij je deur. Of het nu gaat om losse tegels of een complete badkamerrenovatie.',
    localContext:
      'Of je nu in het centrum, Princenhage, Boeimeer, Zandberg of Heusdenhout woont. Als Bredanaar ken ik de stad goed. Veel huizen in de oudere wijken hebben krappe trappen of speciale leidingsituaties. Daar denk ik in mee.',
    featuredProjectSlug: 'badkamer-juli-2025',
    heroImage: '/images/projects/portfolio-2025-07-laag-1.webp',
  },
  {
    slug: 'teteringen',
    name: 'Teteringen',
    region: 'gemeente Breda',
    distance: '5 km',
    intro:
      'Teteringen ligt op vijf minuten rijden. Voor badkamers in de nieuwere wijken en klassieke renovaties in de dorpskern kun je bij me terecht.',
    localContext:
      'Teteringen is populair bij jonge gezinnen. Veel woningen uit de jaren ’90 en ’00 zijn toe aan een eerste badkamerrenovatie. Voor de oudere boerderijwoningen in het buitengebied werk ik met natuursteen en speciale buitentegelwerk-oplossingen voor terrassen.',
    featuredProjectSlug: 'vloer-maart-2025',
    heroImage: '/images/projects/portfolio-2025-03-wa0006.webp',
  },
  {
    slug: 'oosterhout',
    name: 'Oosterhout',
    region: 'Noord-Brabant',
    distance: '12 km',
    intro:
      'In Oosterhout werk ik regelmatig. Van complete badkamers in nieuwbouwwijken tot strakke vloeren in vooroorlogse huizen in het centrum.',
    localContext:
      'Oosterhout heeft een mix van oude lintbebouwing en nieuwbouwwijken. In de oudbouw houd ik rekening met onregelmatige ondervloeren en historisch metselwerk. In de nieuwbouw werk ik vaak met grootformaat keramiek voor een moderne uitstraling.',
    featuredProjectSlug: 'badkamer-januari-2025',
    heroImage: '/images/projects/portfolio-2025-01-wa0076.webp',
  },
  {
    slug: 'etten-leur',
    name: 'Etten-Leur',
    region: 'West-Brabant',
    distance: '10 km',
    intro:
      'Etten-Leur ligt vlak bij Breda en is een regelmatige bestemming. Vooral badkamerrenovaties en grote vloertegelprojecten in de nieuwere wijken.',
    localContext:
      'Etten-Leur is een groeigemeente. Veel woningen uit de jaren ’80 en ’90 worden nu gerenoveerd. Daar leg ik vaak grootformaat keramiek (60×120 of 80×80) in de woonkamer en verzorg ik de complete badkamerrenovatie.',
    heroImage: '/images/projects/portfolio-2025-07-laag-2.webp',
  },
  {
    slug: 'tilburg',
    name: 'Tilburg',
    region: 'Midden-Brabant',
    distance: '25 km',
    intro:
      'In Tilburg werk ik regelmatig aan badkamers, vloeren en terrassen. Van een complete renovatie tot een vernieuwde gevelwand. Stuur me een berichtje met foto’s, dan kijk ik graag mee.',
    localContext:
      'De Tilburgse arbeiderswoningen in het centrum vragen vaak om slimme oplossingen door beperkte ruimte en oude leidingen. In de nieuwere wijken werk ik veel met grootformaat keramiek en moderne badkamers. Of het nu een halve dag of drie weken werk is, ik denk graag met je mee.',
    heroImage: '/images/projects/portfolio-2025-07-laag-14.webp',
  },
  {
    slug: 'rijen',
    name: 'Rijen',
    region: 'gemeente Gilze en Rijen',
    distance: '15 km',
    intro:
      'Rijen ligt tussen Breda en Tilburg. Een korte rit voor me. Veel klanten daar voor badkamers en vloertegels in de typische jaren ’70 en ’80 woningen.',
    localContext:
      'In Rijen werk ik veel met klanten die hun badkamer voor het eerst sinds 30 jaar willen vernieuwen. Vaak betekent dat ook leidingwerk vervangen, ventilatie checken en strak nieuw sanitair. Alles uit één hand.',
    heroImage: '/images/projects/portfolio-2025-07-laag-13.webp',
  },
  {
    slug: 'dorst',
    name: 'Dorst',
    region: 'gemeente Oosterhout',
    distance: '10 km',
    intro:
      'Dorst is een dorpje met veel rijtjeshuizen uit de jaren ’70 en ’80. Daar verzorg ik regelmatig complete badkamerrenovaties en strakke moderne vloeren.',
    localContext:
      'In Dorst ligt de ondervloer vaak op een betonnen ondervloer met onregelmatigheden. Daar egaliseer ik altijd eerst voor ik grootformaat tegels leg. Geeft een vlakker, duurzamer resultaat.',
    heroImage: '/images/projects/portfolio-2025-03-wa0007.webp',
  },
  {
    slug: 'made',
    name: 'Made',
    region: 'gemeente Drimmelen',
    distance: '20 km',
    intro:
      'Made en omliggende dorpen rijd ik graag voor mooie badkamer-, vloer- en buitentegelprojecten. Stuur me je plannen via WhatsApp, dan kijk ik mee.',
    localContext:
      'In Made werk ik vaak aan combinaties van een binnen-renovatie en een nieuw terras. Voor klanten daar bundel ik werk graag in één planningsblok zodat de doorlooptijd kort blijft en het efficiënt blijft.',
    heroImage: '/images/projects/portfolio-2025-07-laag-15.webp',
  },
]

export const citiesBySlug = Object.fromEntries(cities.map((c) => [c.slug, c]))
