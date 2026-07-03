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

  url: 'https://wonderentegelwerken.nl',

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
    google: 'https://maps.google.com/?cid=ChIJfcatV_uhxkcRTfbk2q7Iaas',
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
