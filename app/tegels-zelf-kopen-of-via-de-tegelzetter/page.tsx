import Link from 'next/link'
import { ChevronRight, Phone, MessageCircle } from 'lucide-react'
import { business } from '@/content/business'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

/**
 * ANTWOORDEENHEID. Vraag: "Koop ik de tegels zelf of levert Jaap ze?"
 * Contract 54560278-53c8-4f24-824d-88fcb3c712f4, run schrijver-20260917-1235.
 *
 * WAAROM DEZE PAGINA BESTAAT (gemeten, geen aanname). Op 17 september 2026 is de vraag
 * gemeten met motor/scripts/serp.mjs op twee onafhankelijke indexen. DuckDuckGo gaf op
 * drie formuleringen drie verschillende bezitters (doe-hetzelf.nl, tegelzetter-direct.nl,
 * offerteman.nl); Brave gaf homedeal.nl, met offerteman.nl op 2 en werkspot.nl op 3.
 * Google is met dit instrument niet meetbaar en staat dus als ongemeten (bewijsklasse B
 * met engine-label). Twaalf pagina's uit die uitslagen zijn volledig gelezen en geteld.
 * Tien van de twaalf zijn offerteplatform, prijsvergelijker of doe-het-zelf-handleiding;
 * geen enkele is een tegelzetter die zijn eigen afspraak publiceert. Van de twaalf:
 *   3/12 noemt een percentage extra bestellen · 1/12 maakt dat percentage afhankelijk van
 *   legverband of formaat · 3/12 noemt kleurbad/charge · 0/12 noemt een wetsartikel over
 *   materiaalrisico · 0/12 noemt de waarschuwingsplicht · 0/12 zegt wat het met de
 *   garantie van de tegelzetter doet · 0/12 noemt één retourvoorwaarde van één leverancier.
 *
 * DE EIGEN METING (gereedschap/meting-tegelretour.mjs, ruwe uitvoer in
 * onderzoek/tegelretour-20260917.json). Twaalf Nederlandse tegelleveranciers, negen vaste
 * kandidaatpaden per leverancier, lezend opgehaald op 17 september 2026. Vijf leveranciers
 * gaven een leesbare retourpagina (Maxaro, Tegels en Laminaat, Tegelzetshop, Tegel-uitverkoop,
 * Praxis); zeven gaven op geen van de negen paden leesbare tekst en staan als ONGEMETEN.
 * Alle geciteerde zinnen zijn daarna met de hand nagelezen op de bronpagina zelf.
 *
 * BRONNEN VAN DE HARDE REGELS (wet art. 1.1, niets verzinnen).
 *  - Burgerlijk Wetboek Boek 7, geldende toestand 2026-07-01 van wetten.overheid.nl
 *    (BWBR0005290), opgehaald op 17 september 2026 met motor/scripts/wettekst.mjs.
 *    Letterlijk geciteerd: art. 7:760 lid 1 en 2 (materialen), 7:754 lid 1 en 2
 *    (waarschuwingsplicht), 7:23 lid 1 (klachttermijn bij koop).
 *  - De retourpagina's van de vijf leveranciers hierboven, elk met eigen link.
 *  - De vier best scorende bestaande antwoorden, letterlijk geciteerd met link.
 *
 * EIGEN GEGEVENS. Getekende feiten (motor_feiten, eigenaar_akkoord=true):
 * `wonderen-dienst-vloertegelwerk` (lijm en voorlijm inbegrepen, voegwerk inbegrepen,
 * plinten apart geprijsd), `wonderen-offerte-belofte` (gespecificeerde offerte binnen
 * 5 dagen), `wonderen-principe-prijs`, `wonderen-garantie` (5 jaar tegel- en voegwerk,
 * 1 jaar kitwerk), `wonderen-persoon-jaap`, `wonderen-werkgebied-kern`. Daarnaast twee
 * zinnen die al gepubliceerd staan op de eigen site: de FAQ op /diensten/badkamer-renovatie
 * ("Ja. Ik adviseer graag bij vaste leveranciers, maar je bent vrij om elders te kopen.")
 * en het prijsblok op /diensten/vloertegels ("Tegels en plinten apart."). Artikel 10 van
 * de eigen algemene voorwaarden wordt letterlijk geciteerd met een link naar
 * /algemene-voorwaarden, waar dezelfde tekst al gepubliceerd staat; het is ook vastgelegd
 * als `wonderen-aansprakelijkheid-uitsluiting`.
 *
 * GEEN BEDRAGEN VAN DIT BEDRIJF. Er is geen prijsfeit met eigenaar-akkoord, dus staat er
 * geen enkel eigen tarief op deze pagina. De bedragen die er wel staan zijn retourkosten
 * van derden, letterlijk geciteerd van hun eigen pagina met bronlink.
 */

const url = `${business.url}/tegels-zelf-kopen-of-via-de-tegelzetter`

export const metadata: Metadata = {
  title: 'Tegels zelf kopen of via de tegelzetter? Wat het echt kost',
  description:
    'Beide mag bij mij. Maar de 10% extra die overal wordt geadviseerd is niet gratis: vijf tegelleveranciers vergeleken op retourtermijn, retourkosten en retourplafond, plus bij wie een materiaalprobleem landt.',
  alternates: { canonical: '/tegels-zelf-kopen-of-via-de-tegelzetter' },
  openGraph: {
    title: 'Koop ik de tegels zelf of levert de tegelzetter ze? | Van Wonderen Tegelwerken',
    description:
      'De hele bovenlaag zegt "beide kan, bestel 10% extra". Niemand rekent door wat dat overschot kost als je het niet kwijt kunt. Gemeten bij vijf leveranciers.',
    images: ['/images/projects/portfolio-2025-07-laag-1.webp'],
  },
}

/* ── De eigen meting: retourbeleid van tegelleveranciers, 17-09-2026 ───────── */
const retour = [
  {
    leverancier: 'Maxaro',
    termijn: '365 dagen bedenktijd',
    kosten: '€ 9,95 pakketdienst, € 19,95 groottransport',
    plafond: 'geen plafond genoemd; samples, showroommodellen en maatwerk uitgesloten',
    citaat:
      'Ja, je hebt 365 dagen bedenktijd na ontvangst van je bestelling. […] Retourkosten zijn € 9,95 (pakketdienst) of € 19,95 (groottransport). Samples, showroommodellen en maatwerkproducten kun je niet retourneren.',
    href: 'https://www.maxaro.nl/klantenservice',
  },
  {
    leverancier: 'Tegels en Laminaat',
    termijn: 'webshop 14 dagen · showroom een staffel tot 45 dagen · te veel besteld: 2 weken',
    kosten: 'showroom: 25% bij < 8 dagen, 40% tot 21 dagen, 55% tot 30 dagen, 75% tot 45 dagen',
    plafond: 'maximaal 5% van de bestelde hoeveelheid, ongeopend',
    citaat:
      'Retourneren kan binnen 2 weken na aflever/afhaal datum. Het is mogelijk om 5% van de bestelde hoeveelheid tegels, PVC of lijm in onbeschadigde ongeopende verpakkingen te retourneren. […] er geldt een uitzondering op het retourneren van producten welke speciaal voor u besteld zijn. Deze producten kunnen niet geretourneerd worden.',
    href: 'https://www.tegelsenlaminaat.nl/klantenservice/retourneren',
  },
  {
    leverancier: 'Tegelzetshop',
    termijn: '30 dagen herroepingsrecht',
    kosten: 'retourzending voor eigen rekening; pallet of lengtevracht: extra kosten',
    plafond: 'geen plafond genoemd; verpakking niet meer beschadigd dan nodig',
    citaat:
      'Bij de aankoop van producten heb je gedurende 30 dagen de mogelijkheid de overeenkomst zonder opgaaf van reden te ontbinden. […] Indien je gebruik maakt van je herroepingsrecht, zijn de kosten van de retourzending voor eigen rekening. […] Betreft het een pallet zending of lengtevracht? Neem dan contact met ons op. Hier zitten extra kosten aan verbonden.',
    href: 'https://www.tegelzetshop.nl/retourneren',
  },
  {
    leverancier: 'Tegel-uitverkoop',
    termijn: '14 kalenderdagen herroepingsrecht',
    kosten: 'voor eigen rekening; retourvracht via hun transporteur € 82,-',
    plafond: 'overgebleven dozen ná het leggen: geen retour, tenzij vooraf afgesproken',
    citaat:
      'Heeft u bij het bestellen van de producten teveel besteld en zijn er na het leggen van de tegels dozen over? Dan kunnen wij deze helaas niet retour nemen, tenzij vooraf anders overeengekomen. […] Het product is ongebruikt en niet verwerkt/gemonteerd geweest.',
    href: 'https://www.tegel-uitverkoop.nl/klantenservice/retourneren',
  },
  {
    leverancier: 'Praxis',
    termijn: '30 dagen, met Praxis Plus 90 dagen',
    kosten: 'geen retourkosten genoemd bij terugbrengen in de winkel',
    plafond: 'geen plafond genoemd; op maat gemaakte artikelen uitgesloten, kassabon mee',
    citaat:
      'Je kunt het artikel standaard binnen 30 dagen na ontvangst nog retourneren. Ben je lid van Praxis Plus? Dan heb je een bedenktijd van 90 dagen. M.u.v. op maat gemaakte en levende artikelen.',
    href: 'https://www.praxis.nl/service/retourneren',
  },
]

/* ── Wat de bovenlaag zegt, letterlijk ─────────────────────────────────────── */
const bovenlaag = [
  {
    bron: 'Tegelzetter Direct',
    soort: 'offerteplatform',
    citaat:
      'Beide kan. Koop je zelf, dan bestel je het beste zo’n 10% extra voor snij- en breukverlies. […] Via de tegelzetter profiteer je vaak van inkoopkorting en weet je zeker dat lijm, voeg en tegel bij elkaar passen. Spreek vooraf af wie bestelt en wie verantwoordelijk is bij breuk of naleveringen.',
    mist: 'Wat "afspreken" betekent als je het níet afspreekt. En wat die 10% kost bij de leverancier waar je koopt.',
    href: 'https://tegelzetter-direct.nl/',
  },
  {
    bron: 'Homedeal',
    soort: 'offerteplatform',
    citaat:
      'Beide is mogelijk. Veel tegelzetters kunnen tegels en materialen meeleveren via hun leveranciers, vaak met korting. Je kunt er ook voor kiezen zelf tegels te kopen en alleen de arbeid uit te besteden. Spreek dit vooraf duidelijk af en zorg dat het in de offerte staat.',
    mist: 'Geen getal, geen termijn, geen enkele consequentie. De korting wordt genoemd, de tegenpost niet.',
    href: 'https://www.homedeal.nl/tegels-zetten/tegelzetter-gezocht/',
  },
  {
    bron: 'Offerteman',
    soort: 'offerteplatform',
    citaat:
      'Bij de tegelhandel kun je alle mogelijkheden bekijken en zelf tegels kopen. […] Ook kun je gekozen tegels bij de tegelzetter bestellen, het voordeel hiervan is dat je geen risico loopt. […] Alles uitbesteden bespaart je veel tijd, voorkomt miscalculatie en risico kosten van extra nalevering.',
    mist: '"Je loopt geen risico" wordt beweerd, niet uitgelegd. Welk risico, van wie naar wie, op grond waarvan.',
    href: 'https://offerteman.nl/tegelzetter/',
  },
  {
    bron: 'Klussendirect',
    soort: 'offerteplatform',
    citaat:
      'Bereken de hoeveelheid tegels met snijverlies erbij, meestal vijf tot tien procent en meer bij een diagonaal patroon of visgraat. Bestel in een keer uit dezelfde partij, want een nabestelling komt bijna altijd uit een andere charge met net een andere tint.',
    mist: 'Het beste antwoord op de telvraag van de twaalf. Maar geen woord over wat je met het overschot kunt.',
    href: 'https://klussendirect.nl/tegelwerk/',
  },
]

/* ── Wetsartikelen, letterlijk uit de geldende tekst ───────────────────────── */
const wetsartikelen = [
  {
    artikel: 'Artikel 7:760 lid 1 BW',
    kop: 'Mijn materiaal is mijn risico',
    citaat:
      'De gevolgen van een ondeugdelijke uitvoering van het werk, die te wijten is aan gebreken of ongeschiktheid van door de aannemer gebruikte materialen of hulpmiddelen, komen voor rekening van de aannemer.',
  },
  {
    artikel: 'Artikel 7:760 lid 2 BW',
    kop: 'Jouw materiaal is jouw risico, met één tegengewicht',
    citaat:
      'Is de ondeugdelijke uitvoering echter te wijten aan gebreken of ongeschiktheid van zaken afkomstig van de opdrachtgever […] dan komen de gevolgen voor zijn rekening, voor zover de aannemer niet zijn in artikel 754 bedoelde waarschuwingsplicht heeft geschonden of anderszins met betrekking tot deze gebreken in deskundigheid of zorgvuldigheid tekort is geschoten.',
  },
  {
    artikel: 'Artikel 7:754 lid 2 BW',
    kop: 'Die waarschuwing moet op papier',
    citaat:
      'Bij aanneming van een bouwwerk geschiedt een waarschuwing als bedoeld in lid 1 schriftelijk en ondubbelzinnig en wijst de aannemer de opdrachtgever tijdig op de mogelijke gevolgen voor de deugdelijke nakoming van de overeenkomst. Van dit lid kan niet ten nadele van de opdrachtgever worden afgeweken, voor zover de opdrachtgever een natuurlijk persoon is die niet handelt in de uitoefening van een beroep of bedrijf.',
  },
  {
    artikel: 'Artikel 7:23 lid 1 BW',
    kop: 'Koop je zelf, dan heb je een eigen klok bij de verkoper',
    citaat:
      'De koper kan er geen beroep meer op doen dat hetgeen is afgeleverd niet aan de overeenkomst beantwoordt, indien hij de verkoper daarvan niet binnen bekwame tijd nadat hij dit heeft ontdekt of redelijkerwijs had behoren te ontdekken, kennis heeft gegeven. […] Bij een consumentenkoop […] is een kennisgeving binnen een termijn van twee maanden na de ontdekking tijdig.',
  },
]

/* ── Wat er in mijn tarief zit en wat apart staat ──────────────────────────── */
const offerteregels = [
  { post: 'Lijm en voorlijm', waar: 'in het tarief', toelichting: 'Ik kies de lijm bij het tegeltype en de ondergrond; bij vloerverwarming een vloerverwarmingsvriendelijke lijm.' },
  { post: 'Voegwerk', waar: 'in het tarief', toelichting: 'Het voegen hoort bij het zetten en staat er niet apart bij.' },
  { post: 'Oppervlakkig egaliseren', waar: 'in het tarief', toelichting: 'Bij grotere oneffenheden egaliseer ik los; dat reken ik per m² apart en we bespreken vooraf wat nodig is.' },
  { post: 'De tegels', waar: 'aparte regel', toelichting: 'Die koop je zelf of we bespreken ze samen. Ze staan hoe dan ook als eigen regel op de offerte, nooit verstopt in een prijs per m².' },
  { post: 'Plinten', waar: 'aparte regel', toelichting: 'Plinten worden apart geprijsd, inclusief het afkitten.' },
]

const faqs = [
  {
    q: 'Mag ik mijn tegels zelf kopen?',
    a: 'Ja. Dat staat ook al op mijn eigen dienstenpagina: ik adviseer graag bij vaste leveranciers, maar je bent vrij om elders te kopen, en ik verwerk alles vakkundig. Er zit bij mij geen toeslag op en geen voorwaarde aan. Wat ik wel vraag is dat je de tegel die je op het oog hebt vooraf even noemt, zodat ik kan zeggen of hij geschikt is voor die ruimte en die ondergrond. Dat is geen formaliteit: artikel 7:754 lid 1 BW legt mij de plicht op je te waarschuwen voor ongeschiktheid van materiaal dat van jou komt, en die plicht kan ik alleen nakomen als ik de tegel ken vóór hij op de vloer ligt.',
  },
  {
    q: 'Hoeveel tegels moet ik extra bestellen?',
    a: 'De vuistregel die het vak hanteert is 5 tot 10 procent boven je netto oppervlak, en meer bij een patroon: Klussendirect schrijft "meestal vijf tot tien procent en meer bij een diagonaal patroon of visgraat", doe-hetzelf.nl rekent 10% en bij diagonaal 15%, Tegelzetter Direct houdt het op 10%. Dat verschil komt ergens vandaan: bij recht verband zaag je alleen de randrij, bij visgraat of diagonaal zaag je aan twee kanten en levert elke zaagsnede een stuk op dat je nergens meer kwijt kunt. Een tweede ding telt mee en staat in bijna geen enkel advies: kleine ruimtes hebben verhoudingsgewijs meer rand dan grote, dus een toilet van 2 m² vraagt een ruimere marge dan een woonkamer van 40 m². Mijn advies is om de marge niet zelf te gokken maar hem uit te rekenen op de plattegrond. Dat doe ik bij de opname en het staat dan in de offerte.',
  },
  {
    q: 'Wat gebeurt er met de dozen die overblijven?',
    a: 'Dat is de vraag die de hele keuze bepaalt en die ik nergens beantwoord zag. Het hangt volledig af van waar je koopt, en de verschillen zijn groot. Tegel-uitverkoop schrijft letterlijk dat overgebleven dozen ná het leggen niet retour kunnen, tenzij vooraf anders is afgesproken. Tegels en Laminaat neemt maximaal 5% van de bestelde hoeveelheid terug, ongeopend, binnen twee weken. Maxaro geeft 365 dagen bedenktijd tegen € 9,95 of € 19,95 retourkosten. Praxis 30 dagen, of 90 met een Plus-lidmaatschap. Dat is het verschil tussen tien euro en een stapel dozen in de schuur. Vraag het dus vóór je bestelt, en zet het antwoord op papier.',
  },
  {
    q: 'Waarom zou ik dan niet gewoon precies genoeg bestellen?',
    a: 'Omdat de kans dat een nabestelling kleurt zoals de eerste levering klein is. Klussendirect zegt het zo: "een nabestelling komt bijna altijd uit een andere charge met net een andere tint". Tegels en Laminaat legt bij het reserveren dezelfde vinger op de zere plek: "Bij het opnieuw produceren van een tegel kan een licht tintverschil ontstaan." Kom je twee m² tekort halverwege, dan heb je twee slechte opties: wachten op een nalevering die mogelijk niet kleurt, of de klus afmaken met een zichtbaar verschil. En er is een derde reden om een doos over te houden ook als je hem niet kunt retourneren: breekt er over vijf jaar een tegel, dan is een reservetegel uit dezelfde partij het verschil tussen onzichtbaar herstel en een vlek.',
  },
  {
    q: 'Krijg ik korting als jij de tegels bestelt?',
    a: 'Daar doe ik op deze pagina geen belofte over, en dat is bewust. Homedeal en Tegelzetter Direct noemen allebei de inkoopkorting van de vakman als het voordeel van laten bestellen. Of dat bij een concrete tegel bij een concrete leverancier ook zo uitpakt, hangt af van de serie, het formaat en de voorraad, en een percentage noemen dat ik niet kan waarmaken is precies wat ik niet doe. Wat ik wel doe: je krijgt een gespecificeerde offerte binnen 5 werkdagen waarin de tegels als eigen regel staan, met het bedrag erbij. Dan kun je dat bedrag zelf naast de prijs in de showroom leggen en zelf beslissen. Dat is een controleerbare afspraak; een kortingsbelofte is dat niet.',
  },
  {
    q: 'Ik heb de tegels zelf gekocht en er gaat iets mis. Wie betaalt?',
    a: 'Dat hangt af van wat er precies misgaat, en er lopen twee sporen naast elkaar. Gaat het om het materiaal zelf (verkeerde maat, verkeerde partij, kapot geleverd), dan zit je in een koopovereenkomst met de verkoper, en artikel 7:23 lid 1 BW geeft je daar bij een consumentenkoop een kennisgeving binnen twee maanden na ontdekking als tijdig. Gaat het om het tegelwerk, dan geldt artikel 7:760: lid 1 legt de gevolgen van ongeschikt materiaal van de aannemer bij de aannemer, lid 2 legt de gevolgen van ongeschikt materiaal van de opdrachtgever bij de opdrachtgever, maar alleen voor zover ik mijn waarschuwingsplicht niet heb geschonden. In artikel 10 van mijn eigen algemene voorwaarden staat diezelfde lijn: aansprakelijkheid is uitgesloten voor onder meer schade veroorzaakt door materialen van de opdrachtgever. Die bepaling is hard, en daarom staat de wettekst hier ernaast. Wat het in een concreet geschil betekent is een vraag voor een jurist en niet voor mij.',
  },
  {
    q: 'Verandert zelf kopen iets aan mijn 5 jaar garantie?',
    a: 'Aan de termijn niet: op tegelwerk en voegwerk zit 5 jaar en op kitwerk 1 jaar, ongeacht wie de tegels heeft gekocht. Wat wel verandert is waar een probleem landt. Mijn garantie gaat over mijn werk: de hechting, het vlak, de voeg, de dilataties. Gaat de tegel zelf stuk omdat het de verkeerde tegel voor die plek was, dan is dat geen fout in mijn werk en dekt mijn garantie hem niet. Dat onderscheid bestaat óók als ik de tegels bestel, maar dan ligt de gang naar de leverancier bij mij in plaats van bij jou. Wat er precies onder de garantie valt en wat niet, staat in artikel 12 van mijn voorwaarden.',
  },
  {
    q: 'Wanneer kan ik beter níet zelf kopen?',
    a: 'Bij drie situaties raad ik het af. Eén: als je de tegels bij een leverancier haalt die overgebleven dozen niet terugneemt en je de marge dus volledig zelf draagt; vraag het na vóór je bestelt. Twee: bij een restpartij of een uitverkoopserie, want daar bestaat geen nalevering; kom je tekort, dan is de serie op en is er geen tweede kans. Drie: als je nog niet weet welk legverband het wordt. Het verband bepaalt de marge, en die keuze maken we bij de opname; bestel je daarvóór, dan bestel je op een aanname. Een eerlijk vierde geval: heb je de tegels al gekocht vóór je mij belt, dan is dat geen probleem en verwerk ik ze gewoon. Ik zeg dan wel wat ik ervan vind.',
  },
  {
    q: 'Moeten de tegels er al zijn als je begint?',
    a: 'Ja, en dat is praktischer dan het klinkt. Ik plan een standaard badkamer op 2 tot 3 weken en een grote of complexe ruimte op 3 tot 4 weken. In die weken kan ik niet wachten op een levering, want tegelwerk loopt op droogtijden: als het werk halverwege stilvalt, valt de hele planning erachter ook stil. Even belangrijk: laat de dozen bij aflevering openmaken en controleren, niet pas op de dag dat ik kom. Een verkeerde partij of breuk zie je alleen als je kijkt, en de klok van artikel 7:23 BW loopt vanaf het moment dat je het redelijkerwijs had behoren te ontdekken.',
  },
  {
    q: 'Waarom staat dit nergens anders zo?',
    a: 'Omdat de partijen die op deze vraag gevonden worden er zelf geen belang bij hebben. Van de twaalf pagina’s die ik voor deze vraag volledig las, zijn er tien offerteplatform, prijsvergelijker of doe-het-zelf-handleiding. Een offerteplatform verdient aan de aanvraag, niet aan de klus, en heeft dus geen reden om uit te zoeken wat het retourbeleid van een tegelhandel met jouw budget doet. Ik heb die retourpagina’s zelf opgehaald en geteld, en de uitkomst staat hierboven met bronlink. Zeven van de twaalf leveranciers gaven geen leesbare pagina; die staan als ongemeten en niet als "geen retour".',
  },
]

const nietBeantwoord = [
  'Wat de tegels bij jou kosten. Er staat op deze site geen tegelprijs, want die bepaalt de showroom en niet ik. De spreiding is enorm, en een bedrag noemen voordat jij een serie hebt gekozen is een gok.',
  'Of ik goedkoper uitkom dan de showroom. Dat hangt af van de serie en de voorraad op dat moment. Je ziet het pas als het bedrag als eigen regel op de offerte staat, en dan kun je het zelf vergelijken.',
  'Het retourbeleid van de leverancier waar jij koopt. Vijf zijn er gemeten en staan hierboven met datum en bronlink; zeven waren niet leesbaar. Vraag het dus na bij jouw leverancier, en vraag het vóór je bestelt.',
  'Wat de wet in jouw situatie precies betekent. De artikelen staan er letterlijk en met bronlink zodat je ze zelf kunt nalezen. Dit is de wettekst, geen juridisch advies.',
]

export default function TegelsZelfKopenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: business.url },
              { name: 'Diensten', url: `${business.url}/diensten` },
              { name: 'Vloertegels', url: `${business.url}/diensten/vloertegels` },
              { name: 'Tegels zelf kopen of via de tegelzetter', url },
            ])
          ),
        }}
      />

      {/* ─── HET ANTWOORD ─────────────────────── */}
      <section className="relative overflow-hidden bg-paper pt-8 pb-20 lg:pb-24">
        <div aria-hidden className="absolute inset-0 -z-10 tile-pattern opacity-30" />
        <div className="container-tight">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 pt-8 text-sm text-primary-500">
            <Link href="/" className="hover:text-accent-600">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/diensten" className="hover:text-accent-600">Diensten</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/diensten/vloertegels" className="hover:text-accent-600">Vloertegels</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-600">Tegels zelf kopen of via de tegelzetter</span>
          </nav>

          <div className="mt-12 max-w-3xl">
            <div className="eyebrow">Vraag uit de praktijk</div>
            <h1
              id="koop-ik-de-tegels-zelf-of-levert-de-tegelzetter-ze"
              className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-primary-900 sm:text-5xl"
            >
              Koop ik de tegels zelf of levert de tegelzetter ze?
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-primary-900">
              Bij mij mag allebei. Je bent vrij om je tegels zelf te kopen bij elke leverancier en
              ik verwerk ze gewoon. In mijn tarief zitten lijm, voorlijm en voegwerk; de tegels en
              de plinten staan altijd als aparte regel op de offerte. Maar de keuze gaat niet over
              inkoopkorting, zoals overal wordt gesuggereerd. Hij gaat over drie dingen die geen
              van de twaalf gelezen pagina&apos;s uitrekent: hoeveel je extra moet bestellen, wat
              je met het overschot kunt bij de leverancier waar je koopt, en bij wie een probleem
              met dat materiaal landt.
            </p>

            <p className="mt-6 text-sm text-primary-500">
              Jaap van Wonderen, tegelzetter in Breda &middot; geschreven 17 september 2026 &middot;{' '}
              retourvoorwaarden zelf opgehaald bij vijf leveranciers op 17 september 2026 &middot;{' '}
              wetsartikelen letterlijk uit de geldende tekst op{' '}
              <a
                href="https://wetten.overheid.nl/BWBR0005290/2026-07-01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
              >
                wetten.overheid.nl
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ─── WAT ER IN HET TARIEF ZIT ─────────── */}
      <section className="bg-clay py-20 lg:py-24">
        <div className="container-tight">
          <div className="max-w-2xl">
            <div className="eyebrow">Eerst het simpele deel</div>
            <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
              Wat in mijn prijs zit en wat een aparte regel is
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-600">
              De verwarring begint meestal hier. Een prijs per m&sup2; voor tegelwerk is een prijs
              voor het zetten, niet voor de tegel. Bij mij zit het hulpmateriaal erbij en staat het
              zichtbare materiaal apart, zodat je het kunt vergelijken met wat je zelf in de
              showroom ziet staan.
            </p>
          </div>

          <dl className="mt-12 divide-y divide-mist border-y border-mist">
            {offerteregels.map((r) => (
              <div key={r.post} className="grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6">
                <dt className="sm:col-span-4">
                  <span className="text-lg font-semibold text-primary-900">{r.post}</span>
                </dt>
                <dd className="text-sm font-semibold uppercase tracking-[0.12em] text-accent-600 sm:col-span-2">
                  {r.waar}
                </dd>
                <dd className="text-base leading-relaxed text-primary-600 sm:col-span-6">{r.toelichting}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 max-w-2xl text-base leading-relaxed text-primary-600">
            Je krijgt een gespecificeerde offerte binnen 5 werkdagen. Wat er precies in het
            vloertarief zit en wat los wordt gerekend, staat ook op mijn pagina over{' '}
            <Link href="/diensten/vloertegels" className="underline decoration-accent-400 underline-offset-4 hover:text-accent-600">
              vloertegels leggen, inclusief lijm en voorlijm
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ─── DE DRIE DINGEN DIE DE KEUZE BEPALEN ─ */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="eyebrow">Waar het werkelijk over gaat</div>
            <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
              Drie dingen bepalen de keuze, en korting is er geen van
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-600">
              Alle vier de best gevonden antwoorden eindigen op dezelfde zin: beide kan, spreek het
              vooraf af. Dat is waar en het helpt niemand, want er staat niet bij wát je afspreekt
              en wat er geldt als je het vergeet.
            </p>
          </div>

          <div className="mt-16 grid divide-y divide-mist border-y border-mist md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="py-8 md:px-6 md:py-10 md:first:pl-0">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">Eén</div>
              <h3 className="mt-4 font-display text-xl font-semibold text-primary-900">De marge</h3>
              <p className="mt-4 text-base leading-relaxed text-primary-600">
                5 tot 15 procent boven je netto oppervlak, afhankelijk van het legverband, het
                formaat en hoeveel rand de ruimte heeft. Het is geen vast getal, en wie er één van
                maakt rekent voor de gemiddelde kamer die jij niet hebt.
              </p>
            </div>
            <div className="py-8 md:px-6 md:py-10">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">Twee</div>
              <h3 className="mt-4 font-display text-xl font-semibold text-primary-900">Het overschot</h3>
              <p className="mt-4 text-base leading-relaxed text-primary-600">
                Die marge is geen rekenpost maar echt geld, en of je hem terugkrijgt hangt af van
                de leverancier. Bij de vijf die ik heb nagelezen loopt dat uiteen van € 9,95
                retourkosten tot &quot;deze kunnen wij helaas niet retour nemen&quot;.
              </p>
            </div>
            <div className="py-8 md:px-6 md:py-10 md:last:pr-0">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">Drie</div>
              <h3 className="mt-4 font-display text-xl font-semibold text-primary-900">Het risico</h3>
              <p className="mt-4 text-base leading-relaxed text-primary-600">
                Materiaal dat van jou komt, komt volgens artikel 7:760 lid 2 BW voor jouw rekening
                als het ongeschikt blijkt, met mijn waarschuwingsplicht als tegengewicht. Dat
                verschuift met wie het koopt, en niet met wie het betaalt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DE EIGEN METING ──────────────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Zelf opgehaald op 17 september 2026</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Wat vijf tegelleveranciers doen met de dozen die overblijven
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Ik heb van twaalf Nederlandse tegelleveranciers de retour- en klantenservicepagina&apos;s
            opgehaald en gelezen. Vijf gaven een leesbare pagina; de andere zeven gaven op geen van
            de gezochte adressen bruikbare tekst en staan daarom als ongemeten, niet als &quot;geen
            retour&quot;. Alle citaten hieronder zijn letterlijk en met een link naar de bron.
          </p>

          <div className="mt-12 divide-y divide-mist border-y border-mist">
            {retour.map((r) => (
              <article key={r.leverancier} className="py-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-primary-900">{r.leverancier}</h3>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center text-sm underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
                  >
                    bron
                  </a>
                </div>
                <dl className="mt-4 grid gap-4 sm:grid-cols-3">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">Termijn</dt>
                    <dd className="mt-1 text-base text-primary-700">{r.termijn}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">Kosten</dt>
                    <dd className="mt-1 text-base text-primary-700">{r.kosten}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-600">Hoeveel terug</dt>
                    <dd className="mt-1 text-base text-primary-700">{r.plafond}</dd>
                  </div>
                </dl>
                <blockquote className="mt-4 border-l-2 border-accent-400 pl-4 text-base italic leading-relaxed text-primary-600">
                  {r.citaat}
                </blockquote>
              </article>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-primary-500">
            Ongemeten gebleven: Tegelhoek, Tegeldepot, De Budget Tegels, Hornbach, Gamma, Tegels.nl
            en vtwonen tegels. Over hen staat hier dus niets. De meting is herhaalbaar: het script
            en de ruwe uitvoer liggen in de projectmap van deze site.
          </p>
        </div>
      </section>

      {/* ─── DE REKENSOM ──────────────────────── */}
      <section className="bg-primary-900 py-24 text-paper lg:py-32">
        <div className="container-tight">
          <div className="eyebrow !text-accent-300 before:!bg-accent-300">De rekensom die niemand maakt</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-paper sm:text-4xl">
            Het advies &quot;bestel 10% extra&quot; botst met het retourplafond
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="font-display text-xl font-semibold text-paper">De botsing zelf</h3>
              <p className="mt-4 text-base leading-relaxed text-primary-300">
                De bovenlaag adviseert eensgezind 10 procent extra. Tegels en Laminaat neemt
                maximaal 5 procent van de bestelde hoeveelheid terug. Volg je het advies en koop je
                daar, dan is de helft van je overschot per definitie van jou, nog vóór er één
                tegel is gezaagd. Bij Tegel-uitverkoop is het niet de helft maar alles: dozen die
                overblijven ná het leggen gaan daar niet retour, tenzij je het vooraf hebt
                afgesproken. Bij Maxaro kost hetzelfde overschot € 9,95 of € 19,95. Dezelfde 10
                procent, drie totaal verschillende uitkomsten.
              </p>
            </div>
            <div className="border-t border-primary-700 pt-10 md:border-l md:border-t-0 md:pl-16 md:pt-0">
              <h3 className="font-display text-xl font-semibold text-paper">De klok die meeloopt</h3>
              <p className="mt-4 text-base leading-relaxed text-primary-300">
                Een retourtermijn loopt vanaf de aflevering, niet vanaf de oplevering. Bij Tegels en
                Laminaat is dat twee weken voor te veel bestelde hoeveelheid, en voor
                showroomaankopen een staffel waarin de retourkosten oplopen van 25 procent bij
                minder dan 8 dagen tot 75 procent tussen 30 en 45 dagen, waarna er niets meer terug
                kan. Een standaard badkamer plan ik op 2 tot 3 weken. Je weet dus pas hoeveel je
                overhoudt op het moment dat de gunstigste staffeltrede al voorbij is. Wie zijn
                tegels ruim vóór de startdatum laat bezorgen, verliest die trede helemaal.
              </p>
            </div>
          </div>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-primary-300">
            De praktische conclusie is niet &quot;bestel minder&quot;. Te weinig bestellen is
            duurder, want een nalevering komt bijna altijd uit een andere charge en kleurt anders.
            De conclusie is: vraag het retourbeleid op vóór je bestelt, en stem het bestelmoment af
            op de startdatum in plaats van op de dag dat je de tegels uitkiest.
          </p>
        </div>
      </section>

      {/* ─── WAT DE BOVENLAAG ZEGT ────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Zij-aan-zij, letterlijk geciteerd</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Wat de vier best gevonden antwoorden zeggen, en waar ze stoppen
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Gemeten op 17 september 2026 met een eigen SERP-lezer op twee onafhankelijke indexen
            (DuckDuckGo en Brave). Google is met dat instrument niet te meten en staat dus als
            ongemeten; dit is geen Google-uitslag. Van de twaalf gelezen pagina&apos;s zijn er tien
            offerteplatform, prijsvergelijker of doe-het-zelf-handleiding, en geen enkele een
            tegelzetter die zijn eigen afspraak publiceert.
          </p>

          <div className="mt-12 divide-y divide-mist border-y border-mist">
            {bovenlaag.map((b) => (
              <article key={b.bron} className="py-8">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-display text-xl font-semibold text-primary-900">{b.bron}</h3>
                  <span className="text-sm text-primary-500">{b.soort}</span>
                  <a
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex min-h-11 items-center text-sm underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
                  >
                    bron
                  </a>
                </div>
                <blockquote className="mt-4 border-l-2 border-accent-400 pl-4 text-base italic leading-relaxed text-primary-600">
                  {b.citaat}
                </blockquote>
                <p className="mt-4 text-base leading-relaxed text-primary-700">
                  <span className="font-semibold">Waar het stopt: </span>
                  {b.mist}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-sm border border-mist bg-clay p-6">
            <h3 className="font-display text-lg font-semibold text-primary-900">
              De telling over alle twaalf gelezen pagina&apos;s
            </h3>
            <ul className="mt-4 space-y-2 text-base leading-relaxed text-primary-600">
              <li>3 van de 12 noemt een percentage extra bestellen.</li>
              <li>1 van de 12 maakt dat percentage afhankelijk van legverband of formaat.</li>
              <li>3 van de 12 waarschuwt dat een nabestelling uit een andere charge komt.</li>
              <li>0 van de 12 noemt één retourvoorwaarde van één leverancier.</li>
              <li>0 van de 12 noemt een wetsartikel over materiaalrisico of de waarschuwingsplicht.</li>
              <li>0 van de 12 zegt wat zelf kopen doet met de garantie van de tegelzetter.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── WAT DE WET ZEGT ──────────────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Vier artikelen, letterlijk</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Waar het materiaalrisico ligt, staat gewoon in de wet
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Je hoeft dit niet af te spreken om te weten waar je staat: het staat al ergens. Tegelwerk
            in opdracht is aanneming van werk, en een tegel die je zelf koopt is een consumentenkoop
            bij de verkoper. Dat zijn twee verschillende overeenkomsten met twee verschillende
            klokken, en dat onderscheid is precies wat mensen kwijtraken.
          </p>

          <div className="mt-12 space-y-8">
            {wetsartikelen.map((w) => (
              <article key={w.artikel} className="border-t border-mist pt-8">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                  {w.artikel}
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-primary-900">{w.kop}</h3>
                <blockquote className="mt-4 border-l-2 border-accent-400 pl-4 text-base italic leading-relaxed text-primary-600">
                  {w.citaat}
                </blockquote>
              </article>
            ))}
          </div>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-primary-600">
            In{' '}
            <Link
              href="/algemene-voorwaarden"
              className="underline decoration-accent-400 underline-offset-4 hover:text-accent-600"
            >
              artikel 10 van mijn eigen algemene voorwaarden
            </Link>{' '}
            staat dezelfde lijn, en harder: aansprakelijkheid is beperkt tot het factuurbedrag en
            uitgesloten voor onder meer schade veroorzaakt door materialen van de opdrachtgever.
            Ik druk de wettekst hier bewust naast die bepaling af, ook waar de wet in mijn nadeel
            uitpakt. Wat er gebeurt als er ná oplevering iets losraakt of scheurt, en welke vier
            vragen dan de rekening bepalen, staat uitgebreider op mijn pagina over{' '}
            <Link
              href="/losse-tegels-en-scheurende-voegen"
              className="underline decoration-accent-400 underline-offset-4 hover:text-accent-600"
            >
              losse tegels en scheurende voegen
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Wat er daarna gevraagd wordt</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Tien vervolgvragen, kort beantwoord
          </h2>

          <dl className="mt-12 divide-y divide-mist border-y border-mist">
            {faqs.map((f) => (
              <div key={f.q} className="py-8">
                <dt className="font-display text-xl font-semibold text-primary-900">{f.q}</dt>
                <dd className="mt-4 text-base leading-relaxed text-primary-600">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── WAT HIER NIET STAAT ──────────────── */}
      <section className="bg-clay py-20 lg:py-24">
        <div className="container-tight">
          <div className="eyebrow">Eerlijk over de grenzen</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Wat deze pagina niet beantwoordt
          </h2>
          <ul className="mt-10 space-y-6 border-t border-mist pt-10">
            {nietBeantwoord.map((t) => (
              <li key={t.slice(0, 30)} className="text-base leading-relaxed text-primary-600">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/diensten/vloertegels" className="btn-secondary">
              Vloertegels leggen
            </Link>
            <Link href="/tegelen-over-bestaande-tegels" className="btn-secondary">
              Tegelen over bestaande tegels
            </Link>
            <Link href="/algemene-voorwaarden" className="btn-secondary">
              Mijn algemene voorwaarden
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────── */}
      <section className="bg-primary-900 py-20 text-paper lg:py-24">
        <div className="container-tight">
          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl">
            Tegel op het oog? Stuur hem even langs voordat je bestelt
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-300">
            Stuur me de serie, het formaat en de afmetingen van de ruimte via WhatsApp. Dan zeg ik
            of hij geschikt is voor die plek, reken ik de marge uit op jouw plattegrond in plaats
            van op een vuistregel, en weet je wat je moet bestellen vóór je in de showroom staat.
            Je krijgt binnen 1 werkdag antwoord. Ik werk in Breda en omstreken.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`https://wa.me/${business.whatsapp.replace('+', '')}`} className="btn-primary" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> WhatsApp {business.phone}
            </a>
            <a href={`tel:${business.phoneE164}`} className="btn-secondary !text-paper !border-primary-600">
              <Phone className="h-4 w-4" /> Bellen
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
