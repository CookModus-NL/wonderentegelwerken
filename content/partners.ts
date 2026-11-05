/**
 * Tegelwinkels die op de site bij naam en logo staan. Eén bron voor de zichtbare kaarten
 * (components/tegelwinkels.tsx), het schema (lib/schema.ts: tegelwinkelsSchema) en llms.txt.
 *
 * Huisregel: elke zin hieronder heeft een bron in dit commentaar. "Vaste tegelwinkels" mag:
 * Bart bevestigde op 05-11-2026 dat de "vaste leveranciers" van de dienstenpagina precies deze
 * twee zijn (motor_feiten wonderen-leveranciers-vast-20261105). "Partner" niet: er is geen
 * afspraak vastgelegd. De klant blijft vrij om elders te kopen, en dat staat er ook.
 * Komt er ooit een vergoeding tegenover een vermelding, dan rel="sponsored" op die link.
 *
 * GIGATEGELSTORE (Hukon B.V.)
 *   relatie  Jaap in de app, 12-10-2026: bijna elke maand legt hij tegels die een klant daar kocht.
 *   adres    hun algemene voorwaarden art. 1.1, gelezen 05-11-2026: Ettensebaan 19, 4813 AH Breda.
 *   let op   hun FAQ en voorwaarden, gelezen 12-10-2026 (zelfde lezing als de vervolgvraag op
 *            /tegels-zelf-kopen-of-via-de-tegelzetter): "U kunt GEEN tegels retour brengen";
 *            breuk melden binnen 48 uur na afhalen (voorwaarden art. 10.1).
 *   logo     het enige dat ze publiceren (gigategelstore.com, "logo wb.JPG"), grijs, 160px.
 * DESIGNTEGELS
 *   relatie  designtegels.nl/pages/tegelzetters, gelezen 05-11-2026: Van Wonderen Tegelwerken
 *            onder Midden / West-Brabant; de pagina zegt dat ze alleen verwijzen naar
 *            tegelzetters die eerder met hun producten hebben gewerkt. Hun link naar deze site
 *            loopt sinds 27-09-2025 (linkgat-rapport 13-10-2026).
 *   adres    designtegels.nl/pages/showroom-breda, gelezen 05-11-2026: Spinveld 66 A5;
 *            postcode 4815 HT van hun homepage. Het gaat om hun filiaal Breda (ze hebben ook
 *            Utrecht en Berlijn); Bart 05-11-2026: "idd filiaal breda".
 *   let op   designtegels.nl/pages/retourneren-en-garantie, gelezen 05-11-2026: handgemaakte
 *            tegels komen in kleurbatches, later bijbestellen kan van kleur verschillen;
 *            ongeopende dozen uit de standaardcollectie gaan terug tegen een tegoedbon, "in geen
 *            geval geld"; maatwerk en op bestelling niet retour en niet ruilen.
 *   logo     designtegels.nl/assets/logo.png, alleen de vorm (alfa).
 */
export type Tegelwinkel = {
  slug: string
  naam: string
  /** juridische of volledige naam voor schema, als die afwijkt */
  officieel?: string
  /** het filiaal waar het om gaat, als de winkel er meer heeft */
  filiaal?: string
  /** de organisatie achter het filiaal (schema: branchOf) */
  hoofdUrl?: string
  straat: string
  postcode: string
  plaats: string
  url: string
  /** waar de kaart heen linkt: de pagina die de relatie laat zien, anders de homepage */
  href: string
  /** tekst van de link onderaan de kaart */
  linkTekst: string
  sameAs?: string[]
  vermeldtMij?: string
  /** wat de relatie is, in één zin, in de ik-vorm van Jaap (zichtbaar) */
  relatie: string
  /** dezelfde relatie in de derde persoon, met naam: zo citeert een AI hem los (llms.txt) */
  relatieDerde: string
  /** wat de klant eraan heeft: hun eigen regels, met leesdatum */
  letOp: string[]
  gelezen: string
  logo: string
  /** woordmerk: alleen de vorm, in de inkttint. badge: eigen beeld, grijs. */
  soort: 'woordmerk' | 'badge'
  breedte: number
  hoogte: number
}

export const tegelwinkels: Tegelwinkel[] = [
  {
    slug: 'gigategelstore',
    naam: 'Gigategelstore',
    officieel: 'Gigategelstore (Hukon B.V.)',
    straat: 'Ettensebaan 19',
    postcode: '4813 AH',
    plaats: 'Breda',
    url: 'https://gigategelstore.com/',
    href: 'https://gigategelstore.com/?utm_source=wonderentegelwerken.nl&utm_medium=referral',
    linkTekst: 'Naar gigategelstore.com',
    sameAs: ['https://www.facebook.com/GigategelstoreBreda/'],
    relatie: 'Bijna elke maand leg ik tegels die hier gekocht zijn.',
    relatieDerde:
      'Bijna elke maand legt Jaap van Wonderen (Van Wonderen Tegelwerken) tegels die een klant bij Gigategelstore in Breda kocht.',
    letOp: [
      'Wat je koopt, gaat niet meer terug. Ik reken de hoeveelheid op de plattegrond uit voordat je bestelt, niet erna.',
      'Breuk meld je binnen 48 uur na afhalen. Open de dozen dus dezelfde dag, niet op de dag van de klus.',
    ],
    gelezen: '12 oktober 2026',
    logo: '/partners/gigategelstore.png',
    soort: 'badge',
    breedte: 160,
    hoogte: 159,
  },
  {
    slug: 'designtegels',
    naam: 'Designtegels',
    filiaal: 'Showroom Breda',
    hoofdUrl: 'https://designtegels.nl/',
    straat: 'Spinveld 66 A5',
    postcode: '4815 HT',
    plaats: 'Breda',
    url: 'https://www.designtegels.nl/pages/showroom-breda',
    href: 'https://www.designtegels.nl/pages/tegelzetters?utm_source=wonderentegelwerken.nl&utm_medium=referral',
    linkTekst: 'Hun lijst met tegelzetters',
    /** hun pagina waarop Van Wonderen staat; in schema als WebPage die #business noemt */
    vermeldtMij: 'https://www.designtegels.nl/pages/tegelzetters',
    sameAs: ['https://www.facebook.com/designtegels', 'https://www.instagram.com/designtegels'],
    relatie:
      'Ze verwijzen voor Midden- en West-Brabant naar mij, en alleen naar tegelzetters die al met hun tegels hebben gewerkt.',
    relatieDerde:
      'Designtegels (showroom Breda) noemt Van Wonderen Tegelwerken op zijn tegelzetterslijst voor Midden- en West-Brabant; die lijst bevat alleen tegelzetters die al met hun tegels hebben gewerkt.',
    letOp: [
      'Handgemaakt betekent kleurbatches. Bestel alles in één keer: een nabestelling kan net anders uitvallen, en dat zie je pas als hij aan de muur zit.',
      'Retour gaat alleen ongeopend, alleen uit de vaste collectie en alleen tegen een tegoedbon. Maatwerk gaat niet terug.',
    ],
    gelezen: '5 november 2026',
    logo: '/partners/designtegels.png',
    soort: 'woordmerk',
    breedte: 203,
    hoogte: 61,
  },
]
