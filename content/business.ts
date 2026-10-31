/**
 * Single source of truth voor bedrijfsgegevens.
 * Gebruik overal in de site: footer, schema, contact, AV, GBP-export.
 *
 * BRON: Officiële Algemene Voorwaarden van Van Wonderen Tegelwerken
 *       + KvK-register (KvK 86555499).
 * Vestigingsadres uit AV is leidend.
 */

export const business = {
  name: 'Van Wonderen Tegelwerken',
  legalName: 'Van Wonderen Tegelwerken',
  ownerFirstName: 'Jaap',
  tagline: 'Tegelzetter in Breda',
  description:
    'Eenmanszaak in Breda voor badkamerrenovatie, vloer- en wandtegelwerk, buitentegelwerk, kitwerk en maatwerk.',

  kvk: '86555499',
  vestigingsnummer: '865554990000',
  btw: 'NL000000000B01', // BTW-nummer invullen zodra bekend (NL[BSN]B01 — staat op uittreksel)

  founded: '2022-05',

  address: {
    street: 'Leistraat 19',
    postalCode: '4818 NA',
    city: 'Breda',
    municipality: 'Breda',
    province: 'Noord-Brabant',
    country: 'NL',
  },

  phone: '06-18249249',
  phoneE164: '+31618249249',
  whatsapp: '+31618249249',
  email: 'wonderentegelwerken@gmail.com',
  // info@wonderentegelwerken.nl wordt naar gmail doorgestuurd zodra Resend/MX is opgezet

  // Canonieke host = www: productie redirect non-www met 308 naar www
  // (gemeten 01-09-2026) en het klantregister voert www als domein. Canonicals,
  // sitemap, robots en schema-@id's leiden hiervan af — één regel, één waarheid.
  url: 'https://www.wonderentegelwerken.nl',

  // Werkdagen — op afspraak zaterdag mogelijk
  openingHours: [
    { day: 'Monday', opens: '07:00', closes: '19:00' },
    { day: 'Tuesday', opens: '07:00', closes: '19:00' },
    { day: 'Wednesday', opens: '07:00', closes: '19:00' },
    { day: 'Thursday', opens: '07:00', closes: '19:00' },
    { day: 'Friday', opens: '07:00', closes: '19:00' },
  ],

  social: {
    facebook: '',
    instagram: '',
    // De `cid`-parameter van maps.google.com verwacht een DECIMAAL getal (de numerieke
    // Google-klant-id), geen Place ID. Hier stond `?cid=ChIJfcatV_uh…` — een Place ID in een
    // decimaal veld — en dat is dus geen werkende kaartlink: niet voor een bezoeker die op
    // "5,0 uit N Google reviews" klikt, en niet als entiteitsbewijs in `sameAs`.
    // (Gemeten op de live homepage 31-10-2026, SAMEAS_ONGELDIG.)
    // De vorm hieronder is de place_id-URL die Google zelf voorschrijft; `components/
    // klant-citaat.tsx` gebruikte hem al, dus dit maakt de site intern consistent in plaats
    // van dat het een tweede vorm introduceert. Dit is één waarde en vier plekken erven hem:
    // `sameAs` + `hasMap` in de JSON-LD (lib/schema.ts), de reviewlink op de homepage
    // (app/page.tsx) en de profielregel in llms.txt — daarom zit de reparatie hier en niet
    // in de bedrijfsknoop zelf. Het Place ID blijft `googlePlaceId` hieronder.
    google: 'https://www.google.com/maps/place/?q=place_id:ChIJfcatV_uhxkcRTfbk2q7Iaas',
  },

  // Google Business Profile
  googleReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJfcatV_uhxkcRTfbk2q7Iaas',
  googlePlaceId: 'ChIJfcatV_uhxkcRTfbk2q7Iaas',

  // Werkgebied — kern Breda + omstreken West-Brabant
  serviceArea: [
    'Breda', 'Teteringen', 'Princenhage', 'Bavel', 'Ulvenhout', 'Effen',
    'Oosterhout', 'Etten-Leur', 'Rijen', 'Dorst', 'Tilburg', 'Zundert',
    'Made', 'Dongen', 'Gilze', 'Roosendaal',
  ],

  // WhatsApp prefab teksten
  whatsappPrefills: {
    general: 'Hoi Jaap, ik heb een vraag over tegelwerk.',
    badkamer: 'Hoi Jaap, ik wil graag mijn badkamer laten renoveren. Kunnen we een afspraak inplannen?',
    vloer: 'Hoi Jaap, ik wil graag een nieuwe vloer laten leggen. Kun je vrijblijvend langskomen om te kijken?',
    buiten: 'Hoi Jaap, ik wil graag buitentegelwerk laten doen voor mijn terras. Hoor graag van je.',
    kit: 'Hoi Jaap, ik wil graag kitwerk laten vervangen in mijn badkamer. Hoor graag van je.',
    offerte: 'Hoi Jaap, ik wil graag een vrijblijvende offerte aanvragen. Ik stuur zo wat foto’s door.',
  },
} as const

export type Business = typeof business
