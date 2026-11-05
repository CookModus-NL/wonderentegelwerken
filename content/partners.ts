/**
 * Tegelwinkels die op de site bij naam en logo staan.
 *
 * Elke regel `relatie` moet een bron hebben die hieronder staat; staat er geen bron, dan
 * hoort de winkel hier niet. Geen "voorkeursleverancier" of "partner" als claim: de site
 * zegt elders (badkamer-renovatie-breda) dat de klant koopt waar hij wil, en dat blijft waar.
 *
 * GIGATEGELSTORE — bron: Jaap in de app, 12-10-2026 ("bijna elke maand"), zelfde zin als
 *   content/services.ts en /tegels-zelf-kopen-of-via-de-tegelzetter. Logo: het enige dat ze
 *   publiceren (gigategelstore.com, logo wb.JPG, 410x394), grijs gemaakt, verder onbewerkt.
 * DESIGNTEGELS — bron: designtegels.nl/pages/tegelzetters, gelezen 05-11-2026. Van Wonderen
 *   staat daar onder Midden / West-Brabant; de pagina zegt dat ze alleen verwijzen naar
 *   tegelzetters die eerder met hun producten hebben gewerkt. Hun link naar deze site loopt
 *   sinds 27-09-2025 (linkgat-rapport 13-10-2026). Logo: designtegels.nl/assets/logo.png,
 *   alleen de vorm (alfa) overgenomen. Showroom Breda (4815 HT) staat op hun homepage.
 */
export type Partner = {
  naam: string
  plaats: string
  relatie: string
  href: string
  logo: string
  /** woordmerk: alleen de vorm, in de inkttint. badge: eigen beeld, grijs. */
  soort: 'woordmerk' | 'badge'
  breedte: number
  hoogte: number
}

export const partners: Partner[] = [
  {
    naam: 'Gigategelstore',
    plaats: 'Ettensebaan 19, Breda',
    relatie: 'Bijna elke maand leg ik tegels die een klant hier heeft gekocht.',
    href: 'https://gigategelstore.com/?utm_source=wonderentegelwerken.nl&utm_medium=referral',
    logo: '/partners/gigategelstore.png',
    soort: 'badge',
    breedte: 240,
    hoogte: 238,
  },
  {
    naam: 'Designtegels.nl',
    plaats: 'Showroom in Breda',
    relatie: 'Zet mij in hun lijst van tegelzetters die met hun tegels hebben gewerkt.',
    href: 'https://www.designtegels.nl/pages/tegelzetters',
    logo: '/partners/designtegels.png',
    soort: 'woordmerk',
    breedte: 203,
    hoogte: 61,
  },
]
