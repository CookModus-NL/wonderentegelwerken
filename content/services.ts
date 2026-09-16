/**
 * Zes hoofd-diensten. Copy in "ik"-vorm. Geen vanaf-prijzen in design.
 * Prijzen leven in FAQ of long copy waar relevant.
 *
 * Belangrijk: bestrating doe ik NIET. Buitentegelwerk wel.
 */

import type { LucideIcon } from 'lucide-react'
import { Bath, Square, LayoutGrid, Sun, Sparkles, Wrench } from 'lucide-react'

export type Service = {
  slug: string
  title: string
  tagline: string
  short: string
  long: string
  bullets?: string[]
  icon: LucideIcon
  hero: string
  faqs: { q: string; a: string }[]
  /** Antwoordeenheden elders op de site die bij deze dienst horen (antwoordlaag). */
  answers?: { href: string; label: string; teaser: string }[]
}

export const services: Service[] = [
  {
    slug: 'badkamer-renovatie',
    title: 'Badkamer renovatie',
    tagline: 'Van slooppuin tot droombadkamer',
    short:
      'Complete renovatie van A tot Z. Sloop, leidingwerk, tegelwerk, sanitair en afwerking. Eén planning, één vakman, één eindprijs.',
    long: `Een badkamer renoveren is meer dan tegels leggen. Ik strip de oude ruimte. Controleer leidingwerk en afvoer. Egaliseer waar nodig. Leg wand- en vloertegels. Installeer sanitair. Werk alles af met strakke voegen en kit.

Per project plan ik 2 tot 4 weken in. Voor kleine badkamers vaak korter. We bespreken vooraf welke tegels je wilt. Je mag ze zelf uitzoeken bij elke leverancier of ik adviseer op basis van budget en stijl.`,
    bullets: [
      'Sloopwerk en afvoer',
      'Leidingwerk checken (water en afvoer)',
      'Egaliseren ondervloer',
      'Wand- en vloertegelwerk',
      'Sanitair plaatsen',
      'Voegwerk en kitwerk',
      'Schone oplevering',
    ],
    icon: Bath,
    hero: '/images/projects/portfolio-2025-07-laag-1.webp',
    faqs: [
      { q: 'Hoe lang duurt een gemiddelde badkamerrenovatie?', a: 'Voor een standaard badkamer van 4 tot 6 m² plan ik 2 tot 3 weken in. Grote of complexe ruimtes 3 tot 4 weken.' },
      { q: 'Mag ik mijn eigen tegels uitkiezen?', a: 'Ja. Ik adviseer graag bij vaste leveranciers, maar je bent vrij om elders te kopen. Ik verwerk alles vakkundig.' },
      { q: 'Kan ik je via WhatsApp foto’s sturen voor een eerste prijs?', a: 'Liefst zelfs. Stuur de afmetingen en foto’s van de huidige ruimte naar 06-18249249. Je krijgt binnen 1 werkdag een eerste indicatie.' },
    ],
    answers: [
      {
        href: '/badkamer-waterdicht-maken',
        label: 'Hoe wordt mijn badkamer waterdicht gemaakt?',
        teaser:
          'Niet door de tegels. De waterkering is een laag eronder: voorstrijk, kimband in elke binnenhoek, manchetten om de doorvoeren en twee lagen afdichtingspasta. Met wat de bouwregels echt eisen, en de drie momenten waarop je nog kunt zien dat hij er ligt.',
      },
      {
        href: '/badkamer-betegelen-tot-plafond',
        label: 'Moet de badkamer tot het plafond betegeld worden?',
        teaser:
          'Wat de bouwregels echt eisen (1,2 m, bij de douche 2,1 m), waar die 1,20 meter uit alle adviesartikelen vandaan komt, en welk deel van de keuze echt van jou is.',
      },
      {
        href: '/eerst-vloer-of-wand-betegelen',
        label: 'Eerst de vloer of eerst de wand betegelen?',
        teaser:
          'De wand eerst, maar het zijn drie beurten en geen twee: de onderste rij wandtegels gaat er ná de vloer op, op maat gesneden. Met de eisen uit uitvoeringsrichtlijn URL 35-101 over de randvoeg, het vloerpeil en de indeling die vooraf met jou wordt afgesproken.',
      },
      {
        href: '/tegelvloer-belopen-en-vloerverwarming-aanzetten',
        label: 'Wanneer mag ik weer douchen en wanneer mag de vloerverwarming aan?',
        teaser:
          'Na een badkamerrenovatie lopen er drie klokken achter elkaar: de lijm, de voeg en de kit. Welke termijnen de fabrikanten noemen, en waarom de wachttijd voor de vloerverwarming aan de dekvloer hangt en niet aan de tegel.',
      },
      {
        href: '/tegelen-over-bestaande-tegels',
        label: 'Kan er over bestaande tegels heen getegeld worden?',
        teaser:
          'Ja, maar een nieuwe laag tegels plus lijm bouwt 10 tot 14 mm op. Op een douchevloer is dat bijna het hele afschot naar de goot, en die goot gaat niet mee omhoog. Met de gewichtsrekensom voor een wand van gipsplaat erbij.',
      },
    ],
  },
  {
    slug: 'vloertegels',
    title: 'Vloertegelwerk',
    tagline: 'Een vloer die jaren strak blijft liggen',
    short:
      'Keramische tegels, natuursteen, betonlook of grootformaat 60×60 tot 120×120. Inclusief lijm, voorlijm, click-tegels en voegwerk. Plinten apart.',
    long: `Een goede vloer staat of valt bij de voorbereiding. Ik zorg dat de ondervloer vlak is. Egaliseer waar nodig. Gebruik de juiste lijm en voorlijm bij jouw tegeltype. Plaats dilataties op de juiste plek.

Voor grootformaat tegels (60×120 of groter) werk ik met vloerverwarmings-vriendelijke lijm en kruisende lasers voor 100% strak liggen. Click-tegelsystemen, normale vloertegels en natuursteen kunnen allemaal. Plinten worden apart geprijsd inclusief afkitten.`,
    bullets: [
      'Egaliseren ondervloer waar nodig',
      'Vloertegels leggen incl. lijm en voorlijm',
      'Click-systemen ook mogelijk',
      'Voegwerk inbegrepen',
      'Dilataties op de juiste plek',
      'Plinten apart incl. afkitten',
    ],
    icon: Square,
    hero: '/images/projects/portfolio-2025-03-wa0006.webp',
    faqs: [
      { q: 'Werk je samen met vloerverwarming?', a: 'Ja, ik gebruik vloerverwarmings-vriendelijke lijm en wacht de juiste droogtijd af voordat de verwarming gefaseerd aangaat.' },
      { q: 'Welke tegelformaten leg je?', a: 'Van mozaïek tot 120×280 grootformaat. Voor de grootste maten werk ik met twee man en specifiek hefgereedschap.' },
      { q: 'Wat zit er in de prijs per m²?', a: 'Lijm, voorlijm (egaliseren oppervlakkig), eventueel click-tegels en voegwerk. Inclusief btw voor particulieren. Tegels en plinten apart.' },
      { q: 'En de plinten?', a: 'Plinten zijn 60×60 mm en worden per strekkende meter geprijsd inclusief afkitten. Komt apart op de offerte zodat je precies ziet wat je krijgt.' },
      { q: 'Wat als de ondervloer ongelijk is?', a: 'Bij grotere oneffenheden egaliseer ik los. Dat reken ik per m² apart. We bespreken vooraf wat nodig is.' },
    ],
    answers: [
      {
        href: '/wat-kost-vloer-tegelen-per-m2',
        label: 'Wat kost vloer tegelen per m²?',
        teaser:
          'Zes Nederlandse prijspagina’s naast elkaar: één van de zes zegt wat er in dat bedrag per m² zit, geen van de zes noemt een btw-tarief, en alle zes verkopen je aanvraag door. Met wat er bij mij wél en niet in de prijs zit.',
      },
      {
        href: '/tegelvloer-belopen-en-vloerverwarming-aanzetten',
        label: 'Hoe lang moet ik wachten voor ik op de vloer mag lopen en wanneer mag de vloerverwarming aan?',
        teaser:
          'Er lopen twee klokken: de lijm bepaalt wanneer je mag lopen, de dekvloer bepaalt wanneer de verwarming aan mag. Met de zeven termijnen die online circuleren naast elkaar, en de reden dat ze van 7 dagen tot 6 weken verschillen.',
      },
      {
        href: '/losse-tegels-en-scheurende-voegen',
        label: 'Wat gebeurt er als er later tegels loskomen of een voeg scheurt?',
        teaser:
          'Wie herstelt het en wie betaalt: de garantietermijn, de vier vragen die de uitkomst bepalen, en de wetsartikelen over aanneming van werk letterlijk erbij.',
      },
      {
        href: '/tegelen-over-bestaande-tegels',
        label: 'Kan er over bestaande tegels heen getegeld worden?',
        teaser:
          'De vier voorwaarden waar alle adviesartikelen het over eens zijn, plus de twee rekensommen die er geen enkele maakt: wat de tweede laag kost aan hoogte bij de dorpel en de afvoer, en wat hij weegt op gipsplaat.',
      },
    ],
  },
  {
    slug: 'wandtegels',
    title: 'Wandtegels & wandafwerking',
    tagline: 'Strakke wanden, foutloze voegen',
    short:
      'Van keukenwanden tot complete badkamer- en woonkamerwanden. Nauwkeurig rond stopcontacten, hoeken, deurkozijnen en sanitair.',
    long: `Wandtegelwerk vraagt millimeterwerk. Rond stopcontacten, hoeken, kozijnen en sanitair. Ik werk met een laserwaterpas. Meet kruisingen uit zodat ze symmetrisch staan. Kit hoeken in de juiste kleur af.

Ook stuc-look, spachtelputz en decoratieve wandpanelen behoren tot mijn werk. Voor wandtegelwerk reken ik op basis van complexiteit en formaat. Vraag een offerte aan via WhatsApp. Je krijgt dezelfde dag een indicatie.`,
    bullets: [
      'Laserwaterpas voor strakke lijnen',
      'Hoeken precies haaks',
      'Strak afkitten in tegelkleur',
      'Klein tot grootformaat',
      'Ook stuc-look en decoratieve panelen',
    ],
    icon: LayoutGrid,
    hero: '/images/projects/portfolio-2025-07-laag-13.webp',
    faqs: [
      { q: 'Kun je ook een visgraat-patroon of kruisverband?', a: 'Ja, elk decoratief patroon. Voor visgraat reken ik wat extra materiaalverlies. Daar is geen omheen.' },
      { q: 'Doe je ook stuc-look of mineraalverf?', a: 'Ja, vaak in combinatie met tegelwerk in dezelfde ruimte. Dat geeft een hele rustige uitstraling.' },
    ],
    answers: [
      {
        href: '/badkamer-betegelen-tot-plafond',
        label: 'Moet de badkamer tot het plafond betegeld worden?',
        teaser:
          'Wat de bouwregels echt eisen (1,2 m, bij de douche 2,1 m), waar die 1,20 meter uit alle adviesartikelen vandaan komt, en welk deel van de keuze echt van jou is.',
      },
      {
        href: '/tegelen-over-bestaande-tegels',
        label: 'Kan er over bestaande tegels heen getegeld worden?',
        teaser:
          'Op een wand gaat dit vaker goed dan op een vloer, maar niet op elke wand. Met de rekensom voor gipsplaat: Omnicol noemt 25 kilo per vierkante meter als grens, en twee lagen keramiek plus lijm komen daar ruim boven.',
      },
      {
        href: '/eerst-vloer-of-wand-betegelen',
        label: 'Eerst de vloer of eerst de wand betegelen?',
        teaser:
          'Waarom de onderste rij wandtegels er als laatste op gaat, waarom de naad met de vloer open blijft en gekit wordt in plaats van gevoegd, en welke vijf controles je na de oplevering zelf kunt doen.',
      },
    ],
  },
  {
    slug: 'buitentegelwerk',
    title: 'Buitentegelwerk',
    tagline: 'Terrassen en gevels die de winter overleven',
    short:
      'Keramische tegels op tegeldragers, splitlagen of zandbed. Voor terrassen, gevels en zwembadranden. Géén bestrating of straatwerk.',
    long: `Buitentegelwerk vraagt kennis van ondergrond, afschot en vorstbestendigheid. Ik adviseer de juiste fundatie. Zandbed voor lichte tegels. Tegeldragers voor grootformaat keramiek. Splitlaag voor zware natuursteen. Altijd minimaal 1% afschot zodat water richting de afvoer loopt.

Wat ik niet doe: stratenmakerswerk. Geen bestrating, geen oprijen, geen klinkers. Wel terrassen, gevelbekledingen en zwembadranden in tegel of natuursteen.`,
    bullets: [
      'Terrastegels op tegeldragers',
      'Splitlaag of zandbed waar passend',
      'Vorstbestendig gelegd',
      'Afschot 1%+ voor goede waterafvoer',
      'Gevelbekleding in tegel of natuursteen',
      'Géén straatwerk of bestrating',
    ],
    icon: Sun,
    hero: '/images/projects/portfolio-2025-07-laag-15.webp',
    faqs: [
      { q: 'Welke ondergrond is het beste voor mijn terras?', a: 'Voor keramische tegels gebruik ik het liefst tegeldragers. Dat geeft lange levensduur en je kunt eronder reinigen. Voor klassieke betonstenen werkt een goed afgewerkt zandbed prima.' },
      { q: 'Doe je ook straatwerk?', a: 'Nee, bestrating en straatwerk doe ik niet. Wel buitentegelwerk: terrassen, gevels en zwembadranden in tegel of natuursteen. Voor straatwerk verwijs ik je graag door naar een goede stratenmaker.' },
    ],
  },
  {
    slug: 'kitwerk-voegwerk',
    title: 'Kitwerk & voegwerk',
    tagline: 'Strakke voegen en kitnaden, vakkundig hersteld',
    short:
      'Bestaand kitwerk vernieuwen of nieuw aanleggen. Schimmelvrij beginnen, strak werken, in de juiste kleur. Garantie kitwerk: 1 jaar.',
    long: `Oude kit wordt vies, scheurt of schimmelt. Vooral in douches en bij sanitair. Ik snij het oude kit eruit. Maak de naad zorgvuldig schoon (ontvet en droog). Breng vervolgens nieuwe sanitair- of natuursteenkit aan in de juiste kleur en breedte. Strak getrokken, geen morsen op de tegel.

Ook voor compleet nieuw voegwerk of voegen herstellen kun je bij me terecht. Garantie op kitwerk: 1 jaar. Kit is een onderhoudsproduct. Levenslange garantie zou niet eerlijk zijn.`,
    bullets: [
      'Oude kit verwijderen',
      'Naden ontvetten en drogen',
      'Sanitair- of natuursteenkit naar keuze',
      'Strak getrokken in juiste kleur',
      '1 jaar garantie kitwerk',
    ],
    icon: Wrench,
    hero: '/images/projects/portfolio-2025-01-wa0061.webp',
    faqs: [
      { q: 'Waarom maar 1 jaar garantie op kitwerk?', a: 'Kit is een onderhoudsgevoelig product. Afhankelijk van gebruik, vocht en schoonmaakmiddelen kan het na verloop verkleuren of barsten. Een jaar garantie is reëel. Voor het tegelwerk zelf geef ik 5 jaar.' },
      { q: 'Hoe lang duurt een gemiddelde kitklus?', a: 'Een hele badkamer hervoegen en kitten meestal 1 werkdag. Losse plekken vaak een paar uur, voorrij en uitvoering.' },
    ],
    answers: [
      {
        href: '/badkamer-waterdicht-maken',
        label: 'Hoe wordt mijn badkamer waterdicht gemaakt?',
        teaser:
          'Kit en voeg zijn de afwerking, niet de waterkering. Die zit eronder. Waarom kitwerk 1 jaar garantie krijgt en tegel- en voegwerk 5 jaar, en waarom in de douchehoek kit hoort en geen cementvoeg.',
      },
      {
        href: '/losse-tegels-en-scheurende-voegen',
        label: 'Wat gebeurt er als er later tegels loskomen of een voeg scheurt?',
        teaser:
          'Waar mijn garantie ophoudt, wat het Burgerlijk Wetboek erover zegt, en hoe je aan het patroon ziet of de beweging in het tegelwerk of in de ondergrond zit.',
      },
    ],
  },
  {
    slug: 'maatwerk-tegels',
    title: 'Maatwerk & decoratief tegelwerk',
    tagline: 'Mozaïek, visgraat of jouw eigen ontwerp',
    short:
      'Speciale patronen, op maat gesneden randen, mozaïeken voor douches, decoratieve nissen. Stuur een schets of Pinterest-bord en ik werk hem uit.',
    long: `Voor klanten die iets unieks willen denk ik graag mee. Klassiek visgraat in marmer. Geometrische mozaïeken. Op maat gesneden randafwerking. Decoratieve nissen in de douche. Of een complete moodboard-vertaling. Als het kan met tegel, kan ik het maken.

Ik werk graag samen met interieurontwerpers en architecten.`,
    bullets: [
      'Visgraat, kruisverband, geometrisch',
      'Mozaïek op maat',
      'Speciale randen op maat gesneden',
      'Decoratieve nissen in douche',
      'Samenwerking met interieurontwerpers',
    ],
    icon: Sparkles,
    hero: '/images/projects/portfolio-2025-07-laag-3.webp',
    faqs: [
      { q: 'Kun je helpen met het ontwerp?', a: 'Ik maak graag een eerste schets op basis van jouw moodboard. Voor uitgebreid ontwerp werk ik samen met een interieurontwerper.' },
    ],
  },
]

export const servicesBySlug = Object.fromEntries(services.map((s) => [s.slug, s]))
