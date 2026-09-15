import Link from 'next/link'
import { ChevronRight, Phone, MessageCircle } from 'lucide-react'
import { business } from '@/content/business'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

/**
 * ANTWOORDEENHEID. Vraag: "Eerst de vloer of eerst de wand betegelen?"
 * Contract 62754f3f-fa9f-4cac-8936-b0c3dd5e4878, run schrijver-20260915-1235,
 * HERSTELRONDE 1 door run schrijver-20260915-1323.
 *
 * WAT DE HERSTELRONDE VERANDERDE (criticus-oordeel REJECT van 15-09-2026, twee blokkerende
 * bevindingen). Bevinding 1: de pagina claimde "in geen enkel stappenplan online" en "in de
 * hele top-10" terwijl vijf van de tien SERP-domeinen niet gelezen waren. Herstel: de
 * resterende domeinen zijn alsnog gelezen (zie LEESRONDE hieronder) en elke "niemand"-claim
 * is vervangen door een geteld, controleerbaar getal met de leeslijst erbij. Dat leverde
 * drie correcties op de oorspronkelijke tekst op, die hieronder staan. Bevinding 2: er stond
 * geen BEVESTIGD eigen gegeven in de lopende tekst, alleen [AANNAME]-werkwijze. Herstel: de
 * gepubliceerde, door de eigenaar bevestigde feiten (garantietermijnen, werkwijze bij
 * grootformaat, afkitten als aparte offerteregel, kerngebied) staan nu in de lopende tekst
 * zelf, met bronvermelding in dit commentaar en in de klantkeuring apart gehouden van de
 * [AANNAME]-zinnen.
 *
 * WAAROM DEZE PAGINA ANDERS IS DAN DE BOVENLAAG. Alle twaalf gelezen Nederlandstalige
 * adviespagina's geven hetzelfde antwoord met dezelfde drie redenen: eerst de wand, want
 * (1) er valt lijm en voeg op de vloer, (2) je werkt makkelijker, (3) de onderste rij sluit
 * netter aan. Ze noemen alle één uitzondering: een patroon dat van vloer naar wand doorloopt.
 * Na de volledige leesronde blijven hiervan drie verschillen over, elk geteld:
 *   1. Het zijn geen twee beurten maar drie. De onderste rij wandtegels gaat er ná de vloer
 *      op, op maat gesneden. GETELD: geen van de twaalf gelezen adviespagina's beschrijft die
 *      derde beurt. Op de vakfora wél, en op twee onafhankelijke fora: klusidee.nl (NL) en
 *      bouwinfo.be (BE, draad 265624, bericht #14 van 09-02-2012: "eerst tegels geplaatst op
 *      alurij rondom (onderste rij opengelaten) - vloer gelegd - onderste rij tegels afgekort
 *      en ingepast"). Het dichtst in de buurt komt portugesetegel.be, dat de onderste rij
 *      "precies afstemt op de hoogte van de vloertegels" — maar dat vooraf uitrekent in
 *      plaats van de rij open te laten. CORRECTIE OP RONDE 1: de oude tekst zei "staat in
 *      geen enkel stappenplan online"; dat is nu begrensd tot de twaalf gelezen pagina's,
 *      en de fora-vondst op bouwinfo.be is erbij gezet.
 *   2. De aansluiting wand/vloer is geen tegelvoeg maar een randvoeg die VRIJ moet blijven
 *      van tegel en voegmortel en elastisch wordt gekit. CORRECTIE OP RONDE 1: dit is NIET
 *      "iets wat nergens staat". mondain.nl (positie 7 op de koperszoekterm) schrijft het
 *      wel degelijk op: "Vul hoeken en aansluitingen met sanitair silicone, niet met
 *      voegmiddel" en "Laat rondom minimaal 3-5 mm vrij voor kit of plint". Eén van de
 *      twaalf dus. Wat de overige elf niet doen en mondain.nl ook niet: de herkomst noemen,
 *      het minimum van 4 mm, en de eis dat de randvoeg over de VOLLEDIGE DIEPTE doorloopt
 *      (ondergrond én tegelwerk), uit URL 35-101 par. 6.8.
 *   3. GETELD EN NIEUW UIT DE HERSTELRONDE: vier van de twaalf gelezen pagina's
 *      (040badkamers.nl, fabinterieurhulp.nl, portugesetegel.be, klustoolsxl.nl) noemen
 *      "minimaal 80% in de lijm" als eis voor WANDtegels. URL 35-101 par. 6.5 tabel 5 eist
 *      daar 65%; de 80% is de eis voor VLOERtegelwerk. In ronde 1 stond dit als een fout van
 *      één pagina; het is een patroon in een derde van de gelezen bovenlaag.
 * En de bronvondst zelf: GETELD noemt geen van de twaalf gelezen pagina's URL 35-101, BRL
 * 1017, KOMO of enige andere norm (machinaal getoetst op de opgehaalde tekst). Plus één
 * eerlijke correctie op de framing van de hele bovenlaag: er bestaat geen voorschrift dat
 * de volgorde bepaalt. URL 35-101 schrijft het resultaat voor, niet de route.
 *
 * SERP-METING (bewijsklasse B, met engine-label; motor/scripts/serp.mjs, 15-09-2026):
 *  - koperszoekterm uit de vraagdekkingskaart, "badkamer betegelen eerst vloer of wand":
 *      DuckDuckGo -> 040badkamers.nl, purperinterior.nl, purperinterior.nl, vloerenmantegels.nl,
 *                    tegelsinhuis.nl, mondain.nl, tegelzetter-expert.nl, klustoolsxl.nl,
 *                    fabinterieurhulp.nl, bouwmaat.nl
 *      Brave      -> tegelsinhuis.nl, klusidee.nl, 040badkamers.nl, reddit.com,
 *                    vloerenmantegels.nl, bouwinfo.be, tegeldepot.nl, forbo.com, bouwmaat.nl,
 *                    klaardeklus.nl
 *  - vraagtekst "Eerst de vloer of eerst de wand betegelen?" (DuckDuckGo)
 *      -> tegelzetter-expert.nl, 040badkamers.nl, klaardeklus.nl, purperinterior.nl,
 *         purperinterior.nl, fabinterieurhulp.nl, vloerenmantegels.nl, webwoordenboek.nl,
 *         tegelsinhuis.nl, portugesetegel.be
 *  - wonderentegelwerken.nl staat in geen van de uitslagen in de top-10.
 *  - GOOGLE ONGEMETEN (machinaal geblokkeerd, serp.mjs --diagnose). Dit is dus geen
 *    Google-uitslag.
 *  - AI-ANTWOORD, sampled 15-09-2026 (websearch-assistent, US-geolokaliseerd): "Het advies is
 *    om te starten met het betegelen van de wand en daarna de vloer", met de drie bekende
 *    redenen en de patroon-uitzondering. LET OP (criticus-bevinding 3, niet-blokkerend): die
 *    steekproef is US-gelokaliseerd en dus NIET representatief voor wat een Nederlandse
 *    zoeker te zien krijgt. Er wordt op deze pagina daarom geen enkele claim op gebouwd; hij
 *    staat hier alleen als waarneming, met dat voorbehoud erbij. Een NL-gelokaliseerde
 *    herhaling is niet gedaan in deze run.
 *
 * LEESRONDE (herstelronde 1, 15-09-2026). Bewijsklasse B. Wie de "geen van de twaalf"-claims
 * hierboven wil narekenen, leest deze twaalf:
 *    VOLLEDIG GELEZEN, ronde 1: tegelzetter-expert.nl, 040badkamers.nl, klaardeklus.nl,
 *      purperinterior.nl, vloerenmantegels.nl.
 *    VOLLEDIG GELEZEN, herstelronde 1 (alsnog): fabinterieurhulp.nl, tegelsinhuis.nl,
 *      portugesetegel.be (beide posts, 1008 en 9080), mondain.nl, klustoolsxl.nl,
 *      bouwmaat.nl. Dat zijn de twaalf.
 *    NIET GELEZEN, en dus buiten elke telling gehouden: webwoordenboek.nl (HTTP 403),
 *      tegeldepot.nl (HTTP 403), reddit.com (HTTP 403 op het zoek-endpoint), gamma.be
 *      (HTTP 429 in ronde 1). Vier niet-gelezen bronnen; als één daarvan de derde beurt of
 *      de herkomst van de randvoeg wél noemt, is de telling op deze pagina te ruim. Daarom
 *      staat er een getal met een leeslijst en geen "nergens".
 *    FORA, apart geteld en niet in de twaalf: klusidee.nl (draad 143716 en 32836),
 *      bouwinfo.be (draad 265624 en 397641).
 *
 * BRONNEN VAN DE HARDE GETALLEN EN REGELS (wet art. 1.1). Alles gelezen op 15 september 2026:
 *  - URL 35-101 d.d. 13-04-2018, "Uitvoeringsrichtlijn voor het aanbrengen van wand- en
 *    vloertegelwerk in reguliere binnentoepassing", onderdeel van BRL 1017 (KOMO-procescertificaat
 *    voor het aanbrengen van tegelwerk), vastgesteld door het CvD Tegelwerken van SKG-IKOB.
 *    De volledige tekst is openbaar als pdf op noa.nl. Zelf uitgelezen, niet overgenomen uit een
 *    samenvatting. Gebruikte paragrafen:
 *      par. 2.1  schriftelijke waarschuwingsplicht bij een ondeugdelijk ontwerp of ondergrond
 *      par. 3.1  tegelgroepen 1/2/3; regulier tegelwerk in woningen = groep 2
 *      par. 3.2  peilmaat vooraf controleren, schriftelijk melden als die niet haalbaar is;
 *                vloerverwarming minimaal 24 uur vóór aanvang uit
 *      par. 6.1  referentiemeetpunt door of namens de opdrachtgever; indeling vooraf vastleggen;
 *                niet stuikend verlijmen, tegelvlakken vrij bij inwendige hoeken ca. 4 à 5 mm;
 *                bij inbouwapparatuur (douchebak, ligbad) nauwelijks min-tolerantie en altijd
 *                navraag vooraf
 *      par. 6.3  kimband over de volle hoogte en breedte van de inwendige hoeken bij bad/douche
 *      par. 6.5  tabel 5, minimaal lijmcontactoppervlak: vloertegelwerk 80%, wandtegelwerk 65%
 *      par. 6.8  alle in- en uitwendige hoeken en aansluitingen vrijhouden van tegels en
 *                voegmateriaal (4-5 mm aanbevolen); randvoegen minimum 4 mm breed en over de
 *                volledige diepte; inwendige hoeken afkitten met blijvend elastische voegkit
 *      par. 6.9  de tegelzetter moet de opdrachtgever SCHRIFTELIJK informeren over het in gebruik
 *                nemen van de vloerverwarming; minimaal 2 weken (dunbed-/middenbedlijm) of
 *                4 weken (dikbed/speciebed) wachten
 *      par. 7.1  visuele controle van minimaal 1,5 m afstand; strijklicht is niet toegestaan
 *      par. 7.2  tabel 6, vlakheid; groep 2: 3 mm over 1 m, 4 mm over 2 m
 *      par. 7.3  hoogteverschil tussen aangrenzende tegelranden (lippen): tolerantie 1,0 mm
 *      par. 7.4  tabel 7, regelmatigheid voegpatroon; groep 2: onderling verschil ten hoogste 1,5 mm
 *      bijlage 3 formulier melding gebreken ondergrond
 *  - Forbo Eurocol, "Stappenplan wand en vloer betegelen" (forbo.com/eurocol/nl): begin op de
 *    wanden "tenzij je het vloer- en wandtegelwerk wilt laten stroken. In dat geval begin je met
 *    de vloertegels"; wanden volledig afwerken inclusief voegwerk vóór de vloer; verticale en
 *    horizontale hoekvoegen vrijhouden en naderhand afkitten.
 *  - Omnicol, "Dilataties in tegelwerk" (blog.omnicol.eu): minimale voegbreedte 3 mm vloer,
 *    2 mm wand; verwijzing naar URL 35-101 als het Nederlandse document voor dilataties.
 *  - Vakfora, openbaar en zonder naam geciteerd: klusidee.nl, "Tegelwerk badkamer waar beginnen?"
 *    (draad 143716) en "Tegels op nieuwe muur en vloer volgorde" (draad 32836). Daar staat de
 *    derde beurt letterlijk, inclusief de 5 mm speling van de vloertegel tot de wand en het
 *    advies de tegels zelf na te meten in plaats van de maat op de doos te geloven.
 *  - De drie best gerangschikte antwoorden zijn volledig gelezen: tegelzetter-expert.nl
 *    (kennisbank, vier alinea's), 040badkamers.nl (stappenplan in zes stappen) en klaardeklus.nl
 *    (kort antwoord plus stappenplan). De overige negen: zie LEESRONDE hierboven.
 *  - BEVESTIGDE EIGEN GEGEVENS IN DE LOPENDE TEKST (criticus-bevinding 2). Deze staan in de
 *    zichtbare tekst, niet alleen achter een link, en komen alle uit motor_feiten met
 *    eigenaar_akkoord=true, herkomst eigenaar, gepubliceerd op zijn eigen site:
 *      `wonderen-garantie` -> "5 jaar garantie op tegelwerk en voegwerk; 1 jaar op kitwerk"
 *         (bron wonderentegelwerken.nl/diensten/vloertegels) — staat in de hero, in de
 *         kitrand-sectie en in FAQ "Valt de wandtegel over de vloertegel".
 *      `wonderen-dienst-vloertegelwerk` -> "dilataties op de juiste plek; voegwerk inbegrepen;
 *         plinten apart geprijsd incl. afkitten; ... grootformaat (60x120 of groter) met
 *         vloerverwarmingsvriendelijke lijm en kruisende lasers" (zelfde bron) — staat in
 *         "Zo doe ik het" en in de offerte-lijst.
 *      `wonderen-persoon-jaap` -> eenmanszaak uit Breda sinds 2022, alle klussen zelf.
 *      `wonderen-offerte-belofte` -> gespecificeerde offerte binnen 5 dagen.
 *      `wonderen-reactietijd` -> reactie binnen 1 werkdag via WhatsApp.
 *      `wonderen-werkgebied-kern` -> kerngebied max 15 minuten rijden vanaf Breda.
 *      `wonderen-principe-prijs` -> geen bedrag per vierkante meter op de site.
 * Werkwijze-uitspraken in de ik-vorm in het blok "Zo doe ik het" staan als [AANNAME] in de
 * klantkeuring: ze zijn niet uit een vastgelegd feit afgeleid en de ondernemer bevestigt of
 * corrigeert ze vóór publicatie. Ze zijn in de tekst bewust gescheiden gehouden van de
 * bevestigde feiten hierboven: de [AANNAME]-zinnen gaan over VOLGORDE en AFSPRAAK, de
 * bevestigde feiten over GARANTIE, PRIJSSTELLING, WERKWIJZE BIJ GROOTFORMAAT en WERKGEBIED.
 */

const url = `${business.url}/eerst-vloer-of-wand-betegelen`

export const metadata: Metadata = {
  title: 'Eerst de vloer of eerst de wand betegelen?',
  description:
    'De wand eerst, de vloer daarna — maar het zijn drie beurten en geen twee: wand vanaf de tweede rij, dan de vloer, en als laatste de onderste rij wandtegels op maat. Met wat de uitvoeringsrichtlijn voor tegelwerk er wél en niet over zegt.',
  alternates: { canonical: '/eerst-vloer-of-wand-betegelen' },
  openGraph: {
    title: 'Eerst de vloer of eerst de wand betegelen? | Van Wonderen Tegelwerken',
    description:
      'Niet twee beurten maar drie. De onderste rij wandtegels gaat er ná de vloer op, en de naad ertussen is geen voeg maar een kitrand van minstens 4 millimeter.',
    images: ['/images/projects/portfolio-2025-07-laag-13.webp'],
  },
}

const beurten = [
  {
    stap: 'Ondergrond en maatvoering',
    wat: 'Vlak, droog, schoon en voorgestreken. De hoogte die de afgewerkte vloer straks krijgt wordt vastgelegd vóór de eerste tegel: dekvloer plus lijm plus tegeldikte. In de natte zone gaan de afdichting en de kimband er nu in.',
    waarom:
      'Alles wat hierna komt wordt vanaf dit peil afgemeten. Wie de vloerhoogte pas ontdekt als de wand half vol zit, betaalt dat terug in de onderste rij.',
  },
  {
    stap: 'De wand, vanaf de tweede rij',
    wat: 'De wandtegels gaan er van boven de vloer tot aan de bovenkant op, uitgemeten zodat de snijstukken links en rechts even breed zijn. De onderste rij blijft open.',
    waarom:
      'Zo valt lijm en voeg op een vloer die nog niet af is, en hoef je niet te wachten tot de vloerlijm hard is voordat je verder kunt.',
  },
  {
    stap: 'De wand voegen',
    wat: 'De wanden worden helemaal afgewerkt, inclusief voegwerk, en de hoeken blijven leeg.',
    waarom:
      'Forbo Eurocol schrijft het zo op in zijn stappenplan: eerst de wanden volledig afwerken inclusief het voegen, dán pas de vloer. Voegwerk is de rommeligste handeling van de hele klus.',
  },
  {
    stap: 'De vloer',
    wat: 'De vloertegels gaan erin, uitgezet op maatlijnen, en blijven rondom vrij van de wand.',
    waarom:
      'Een vloertegel die koud tegen de wand aanloopt kan niet bewegen. De richtlijn wil daar een open randvoeg, geen contact.',
  },
  {
    stap: 'De onderste rij wandtegels',
    wat: 'Nu pas. Elke tegel van de onderste rij wordt op maat gesneden naar de vloer die er werkelijk ligt — in een douche dus niet overal even hoog.',
    waarom:
      'Dit is de stap die in geen van de twaalf adviespagina’s staat die ik voor deze pagina heb gelezen, en het is de stap waarmee de aansluiting klopt. In de douche ligt de vloer op afschot; een rij hele tegels zou daar meelopen en dus scheef staan.',
  },
  {
    stap: 'Kitten',
    wat: 'De naad tussen wand en vloer en alle binnenhoeken worden gevuld met blijvend elastische kit, niet met voegmortel.',
    waarom:
      'Wand en vloer bewegen onafhankelijk van elkaar. Een harde voeg op die plek scheurt; daarom hoort de naad er te zijn en hoort hij open te blijven tot hij gekit wordt.',
  },
]

const richtlijn = [
  {
    eis: 'De naad tussen wand en vloer blijft vrij',
    tekst:
      'Alle in- en uitwendige hoeken en aansluitingen moeten worden vrijgehouden van tegels en voegmateriaal; 4 tot 5 mm wordt aanbevolen. Een randvoeg is minimaal 4 mm breed en loopt door over de volledige diepte van ondergrond én tegelwerk.',
    waar: 'par. 6.8',
  },
  {
    eis: 'Die naad wordt gekit, niet gevoegd',
    tekst:
      'Inwendige hoeken kunnen worden afgekit met een blijvend elastische voegkit, eventueel met primer. Voegmortel hoort er niet in.',
    waar: 'par. 6.8',
  },
  {
    eis: 'Het referentiemeetpunt komt van de opdrachtgever',
    tekst:
      'Door of namens de opdrachtgever dient op een duidelijke wijze het referentiemeetpunt te zijn aangegeven. De tegelzetter controleert vooraf de peilmaat van de vloer en meldt schriftelijk als het afgesproken peil niet haalbaar is.',
    waar: 'par. 6.1 en 3.2',
  },
  {
    eis: 'De tegelindeling wordt vooraf met je afgesproken',
    tekst:
      'Met de opdrachtgever moet vóór het aanbrengen worden vastgelegd hoe het tegelwerk wordt ingedeeld: naar inzicht van de tegelzetter, of symmetrisch. Bij kritische punten wordt aangeraden dat schriftelijk te doen.',
    waar: 'par. 6.1',
  },
  {
    eis: 'Een bad of douchebak verandert de maatvoering',
    tekst:
      'In ruimtes waar inbouwapparatuur zoals douchebakken en ligbaden wordt geplaatst is nauwelijks min-tolerantie toegestaan, ook niet in haaksheid en te lood staan, en moet vooraf altijd navraag worden gedaan over die apparatuur.',
    waar: 'par. 6.1',
  },
  {
    eis: 'Hoe vol de lijm moet zitten — en het verschil tussen wand en vloer',
    tekst:
      'Minimaal lijmcontactoppervlak: 80% bij vloertegelwerk en 65% bij wandtegelwerk. Bij dubbelzijdige verlijming of vloeibedlijm op de vloer is dat 95%.',
    waar: 'par. 6.5, tabel 5',
  },
  {
    eis: 'Wat er over de volgorde zelf staat',
    tekst:
      'Niets. De richtlijn beschrijft ontwerp, ondergrond, materialen, omstandigheden, het aanbrengen en het gerede tegelwerk, en schrijft nergens voor of de wand of de vloer het eerst aan de beurt is.',
    waar: 'hele document',
  },
]

const uitzonderingen = [
  {
    geval: 'De voegen van wand en vloer moeten in elkaars verlengde lopen',
    oordeel: 'Dan eerst de vloer',
    uitleg:
      'Dit is de enige uitzondering die de vakbronnen noemen, en Forbo Eurocol zegt het in één zin: begin op de wanden, tenzij je het vloer- en wandtegelwerk wilt laten stroken — in dat geval begin je met de vloertegels. Het werkt alleen als de formaten op elkaar passen en de indeling vooraf op papier staat, want je hebt dan geen speelruimte meer in de onderste rij.',
  },
  {
    geval: 'Er komt een ligbad of een douchebak in',
    oordeel: 'Dan is de volgorde een aparte afspraak',
    uitleg:
      'Inbouwapparatuur staat vast en het tegelwerk moet zich daarnaar voegen, niet andersom. De richtlijn eist daarom vooraf navraag over die apparatuur en laat er nauwelijks min-tolerantie toe. Wanneer het bad er precies in gaat hoort dus in de planning te staan, niet in het hoofd van één van de vakmensen.',
  },
  {
    geval: 'De vloer ligt er al en blijft liggen',
    oordeel: 'Dan is er geen volgordevraag, maar wel een hoogtevraag',
    uitleg:
      'Bij alleen nieuwe wandtegels op een bestaande vloer vervalt de derde beurt: de onderste rij wordt meteen op maat gesneden naar de vloer die er ligt. Let dan op de randvoeg — die moet er alsnog komen, ook als de oude aansluiting dichtgesmeerd was.',
  },
  {
    geval: 'Iemand wil de vloer eerst en dekt hem af',
    oordeel: 'Kan, maar het kost de derde beurt en het is een risico',
    uitleg:
      'Op de vakfora verdedigen doe-het-zelvers dit: vloer eerst, twee lagen stucloper eroverheen, dan de wand in één keer zonder snijwerk onderaan. Het tegenargument komt uit dezelfde draden en is praktisch: stucloper houdt een vallende tegel of spaan niet tegen, en de onderste rij komt dan vlak op de vloer te staan terwijl daar juist een open voeg hoort. Wie dit doet, doet het bewust — niet omdat het sneller is.',
  },
]

const oplevering = [
  {
    wat: 'Kijk van minstens anderhalve meter',
    norm:
      'De richtlijn schrijft voor dat visuele controle gebeurt van minimaal 1,5 m afstand en dat strijklicht daarbij niet is toegestaan.',
    waarom:
      'Een zaklamp langs de wand laat elk tegelwerk falen, ook tegelwerk dat ruim binnen de norm ligt. Dat is geen vrijbrief voor slordig werk; het is de afgesproken manier van kijken.',
  },
  {
    wat: 'Voel met je hand over de voegen',
    norm: 'Het hoogteverschil tussen twee naast elkaar liggende tegelranden mag maximaal 1,0 mm zijn.',
    waarom:
      'Dit is de "lip" die je met blote voeten voelt. Eén millimeter is de grens, en die is met een rei en een wig te meten.',
  },
  {
    wat: 'Leg er een rei op',
    norm:
      'Voor regulier tegelwerk in een woning (tegelgroep 2) is de maximale afwijking 3 mm over 1 meter en 4 mm over 2 meter. Voor hooggepolijste of gerectificeerde tegels met smalle voegen geldt de strengere groep 1: 2 mm over 1 meter.',
    waarom:
      'De vlakheidseis hangt dus aan de tegel die jij hebt gekozen. Kies je gerectificeerde tegels met een smalle voeg, dan kies je ook een strengere norm, en dat mag je van tevoren weten.',
  },
  {
    wat: 'Kijk langs de voeglijnen',
    norm:
      'Het onderling verschil ten opzichte van het voorgeschreven voegpatroon mag bij regulier woningtegelwerk ten hoogste 1,5 mm zijn bij boven respectievelijk naast elkaar gelegen tegels.',
    waarom:
      'Hier zie je of de indeling klopt. Loopt de onderste rij van de wand mooi door in de deuropening en om de douchehoek, dan is er vooraf uitgemeten.',
  },
  {
    wat: 'Controleer of de naad gekit is en niet gevoegd',
    norm:
      'De aansluiting wand/vloer en alle binnenhoeken horen vrij te zijn van voegmortel en gevuld met blijvend elastische kit.',
    waarom:
      'Dit is de makkelijkste controle van allemaal en tegelijk de belangrijkste. Zit er harde voeg in de hoek tussen wand en vloer, dan scheurt hij; dat is geen kwestie van of, maar van wanneer.',
  },
]

const stemmen = [
  {
    tekst: 'Weet iemand waar in de badkamer ik moet beginnen met betegelen?',
    bron: 'klusidee.nl, draad "Tegelwerk badkamer waar beginnen?"',
    href: 'https://www.klusidee.nl/Forum/topic/tegelwerk-badkamer-waar-beginnen.143716/',
  },
  {
    tekst: 'Betegel ik eerst de muren en dan de vloer, of omgekeerd? Of maakt dit niet uit?',
    bron: 'klusidee.nl, draad "Tegels op nieuwe muur en vloer volgorde"',
    href: 'https://www.klusidee.nl/Forum/topic/tegels-op-nieuwe-muur-en-vloer-volgorde.32836/',
  },
  {
    tekst: 'En hoeveel ruimte tussen onderste regel en de cement dekvloer moet ik aanhouden?',
    bron: 'klusidee.nl, dezelfde vraagsteller',
    href: 'https://www.klusidee.nl/Forum/topic/tegelwerk-badkamer-waar-beginnen.143716/',
  },
  {
    tekst:
      'Ik begrijp nog steeds niet goed: als je bij de drain begint, ligt de eerste tegel toch 1 cm lager dan de rest van de badkamer?',
    bron: 'klusidee.nl, dezelfde vraagsteller over zijn douchevloer op afschot',
    href: 'https://www.klusidee.nl/Forum/topic/tegelwerk-badkamer-waar-beginnen.143716/',
  },
  {
    tekst: 'Dan krijg je dus een liggende kitvoeg, wat ik persoonlijk nogal lelijk vind.',
    bron: 'klusidee.nl, een doe-het-zelver die de vloer eerst wil doen',
    href: 'https://www.klusidee.nl/Forum/topic/tegels-op-nieuwe-muur-en-vloer-volgorde.32836/',
  },
  {
    tekst: 'Handig, de meningen zijn dus verdeeld.',
    bron: 'klusidee.nl, reactie halverwege dezelfde draad',
    href: 'https://www.klusidee.nl/Forum/topic/tegelwerk-badkamer-waar-beginnen.143716/',
  },
  {
    tekst:
      'Eerst tegels geplaatst op alurij rondom (onderste rij opengelaten) — vloer gelegd — onderste rij tegels afgekort en ingepast.',
    bron: 'bouwinfo.be, draad "Eerst betegelen of vloeren in de badkamer?", bericht uit 2012',
    href: 'https://www.bouwinfo.be/bouwforum/threads/eerst-betegelen-of-vloeren-in-de-badkamer.265624/',
  },
]

const faqs = [
  {
    q: 'Is het fout als mijn tegelzetter eerst de vloer doet?',
    a: 'Nee, en dat is een eerlijker antwoord dan je elders leest. Er bestaat geen voorschrift dat de volgorde bepaalt: URL 35-101, de uitvoeringsrichtlijn waarop Nederlandse tegelzetbedrijven worden gecertificeerd, zegt er niets over. Hij schrijft het resultaat voor — vlakheid, lippen, voegpatroon, een randvoeg die vrij blijft — en laat de route aan de vakman. Wat wél telt: als de vloer er eerst ligt, moet hij echt beschermd worden, en de onderste rij wandtegels mag nog steeds niet koud op die vloer komen te staan. Vraag dus niet "waarom doe je het zo", vraag "hoe houd je de aansluiting open en wat komt daar in".',
  },
  {
    q: 'Hoeveel ruimte moet er tussen de onderste wandtegel en de vloer blijven?',
    a: 'De richtlijn noemt voor een randvoeg een minimum van 4 mm, en beveelt voor hoeken en aansluitingen 4 tot 5 mm aan, afhankelijk van de breedte van de tegelvoeg. Die ruimte hoort niet alleen tussen de tegels te zitten maar door te lopen over de volledige diepte, dus ook door de lijmlaag en de ondergrond. Hij wordt daarna met blijvend elastische kit gevuld. Een tegelzetter die de onderste rij strak op de vloer zet, doet het dus niet netter maar juist fout: dat heet stuikend verlijmen en de richtlijn verbiedt het expliciet.',
  },
  {
    q: 'Valt de wandtegel over de vloertegel, of de vloertegel tegen de wandtegel?',
    a: 'De wandtegel eindigt boven de vloertegel, met de open randvoeg ertussen. Op de vakfora wordt daar een praktisch argument bij gegeven: zo krijg je een staande kitrand in plaats van een liggende. Een liggende kitrand vangt water, zeep en vuil en veroudert sneller; een staande niet. Er zijn tegelzetters die de vloer eerst leggen omdat ze een liggende kitvoeg lelijk vinden — dat is smaak, en het staat tegenover levensduur. Ik kies levensduur, want de kitrand is het onderdeel met de kortste garantietermijn: bij mij 1 jaar op kitwerk tegenover 5 jaar op tegelwerk en voegwerk.',
  },
  {
    q: 'Waarom gaat de onderste rij er pas na de vloer op?',
    a: 'Omdat je pas dan weet waar de vloer werkelijk ligt. In de douche is dat het duidelijkst: die vloer ligt op afschot naar de goot of de put, dus hij is per definitie niet waterpas. Een rij hele tegels erboven zou met dat afschot meelopen en dus zichtbaar scheef staan ten opzichte van alle rijen erboven. Door de onderste rij als laatste te snijden blijft het hele wandvlak waterpas en vangt één rij passtukken het hoogteverschil op. Buiten de douche is het verschil kleiner, maar het bestaat: geen dekvloer ligt over vier meter perfect vlak.',
  },
  {
    q: 'Wanneer is het wél logisch om met de vloer te beginnen?',
    a: 'Als de voegen van wand en vloer in elkaars verlengde moeten lopen. Forbo Eurocol formuleert het als de enige uitzondering in zijn stappenplan: begin op de wanden, tenzij je het vloer- en wandtegelwerk wilt laten stroken. Dan begin je met de vloer, want die bepaalt het raster. Het werkt alleen als de formaten dat toelaten en de indeling van tevoren is uitgetekend; je levert er namelijk je speling in de onderste rij voor in. Spreek dat vooraf af — de richtlijn vraagt sowieso dat de indeling vóór het werk met jou wordt vastgelegd.',
  },
  {
    q: 'Moet ik de tegels laten nameten voordat er begonnen wordt?',
    a: 'De tegelzetter doet dat, en het is geen overdreven precisie. Op de fora staat het verhaal van iemand die de tweede rij uitzette op de maat die op de doos stond; de tegels bleken iets minder hoog en het verschil kwam er onderaan als een bredere kitrand uit. Gerectificeerde tegels zijn nageslepen en dus maatvast, niet-gerectificeerde niet. Wat jij hiervan moet weten: gerectificeerde tegels met een smalle voeg vallen onder de strengere kwaliteitsgroep van de richtlijn, met 2 mm vlakheid over een meter in plaats van 3 mm. Mooier materiaal betekent dus ook een strengere lat, en die keuze maak je in de showroom.',
  },
  {
    q: 'Hoe lang is mijn badkamer onbruikbaar door deze volgorde?',
    a: 'De volgorde zelf kost geen extra dagen — hij spaart er juist een uit, omdat je niet hoeft te wachten tot de vloerlijm hard is voordat de wanden kunnen. De echte wachttijden zitten erna: de lijm bepaalt wanneer je op de vloer mag, de voeg en de kit hebben hun eigen klok, en de vloerverwarming heeft de langste. De richtlijn is daar streng in: na een dunbed- of middenbedlijm minstens 2 weken wachten met de vloerverwarming, bij dikbed of speciebed 4 weken, en de vloerverwarming moet minstens 24 uur vóór aanvang van het tegelwerk al uit zijn. Diezelfde richtlijn verplicht de tegelzetter je daar schríftelijk over te informeren. Alle termijnen staan naast elkaar op de pagina over droogtijden en wachttijden.',
  },
  {
    q: 'Wat moet ik hierover op mijn offerte terugzien?',
    a: 'Vier dingen. Eén: op welke afgewerkte vloerhoogte wordt gewerkt, want daar hangt alles aan — bij een drempel of een aansluitende gang is dat geen detail. Twee: hoe het tegelwerk wordt ingedeeld, naar inzicht van de tegelzetter of symmetrisch uitgemeten; de richtlijn vraagt die afspraak vooraf. Drie: dat de aansluiting wand/vloer en de binnenhoeken worden afgekit en niet gevoegd, met het kitwerk als eigen regel — bij mij vallen plinten en het afkitten daarvan als aparte post op de offerte, en op kitwerk geef ik 1 jaar garantie tegenover 5 jaar op tegelwerk en voegwerk. Vier: of er inbouwapparatuur komt en wanneer die geplaatst wordt. Bij mij staat dat in een gespecificeerde offerte, zonder kleine lettertjes, binnen 5 dagen.',
  },
]

export default function EerstVloerOfWandPage() {
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
              { name: 'Badkamer renovatie', url: `${business.url}/diensten/badkamer-renovatie` },
              { name: 'Eerst vloer of wand betegelen', url },
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
            <Link href="/diensten/badkamer-renovatie" className="hover:text-accent-600">Badkamer renovatie</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-600">Eerst vloer of wand</span>
          </nav>

          <div className="mt-12 max-w-3xl">
            <div className="eyebrow">Vraag uit de praktijk</div>
            <h1
              id="eerst-de-vloer-of-eerst-de-wand-betegelen"
              className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-primary-900 sm:text-5xl"
            >
              Eerst de vloer of eerst de wand betegelen?
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-primary-900">
              Eerst de wand, daarna de vloer. Maar in de praktijk zijn het drie beurten en geen
              twee: eerst het wandvlak vanaf de tweede rij, dan de vloer, en als laatste de
              onderste rij wandtegels — op maat gesneden naar de vloer die er dan werkelijk ligt.
              Die derde beurt is de reden dat de aansluiting klopt. Ik heb twaalf Nederlandstalige
              adviespagina&apos;s over deze vraag helemaal doorgelezen: geen van de twaalf
              beschrijft hem. Op de klusfora doen ervaren tegelzetters dat wel.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-primary-600">
              En de naad tussen wand en vloer is geen gewone voeg. Hij moet vrij blijven van tegel
              en voegmortel, minstens 4 millimeter breed zijn en wordt daarna met blijvend
              elastische kit gevuld. Eén van die twaalf pagina&apos;s zegt dat ook — maar geen
              enkele zegt erbij waar het vandaan komt, hoe breed het minimaal moet en dat die
              ruimte door de lijmlaag en de ondergrond heen moet doorlopen. Zodra je dat weet, is
              de volgordevraag geen kwestie van voorkeur meer maar van maatvoering.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-primary-600">
              Waarom dat detail geld waard is: op tegelwerk en voegwerk geef ik 5 jaar garantie, op
              kitwerk 1 jaar. Die rand onderaan de wand is kitwerk. Het is het enige stukje van je
              badkamer dat onder de korte termijn valt, en precies het stukje dat de volgorde
              bepaalt.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-primary-600">
              En het eerlijkste antwoord op de vraag zelf: in de uitvoeringsrichtlijn waarop
              Nederlandse tegelzetbedrijven worden gecertificeerd staat geen regel die de volgorde
              voorschrijft. Ik heb dat document van kaft tot kaft doorgenomen; het schrijft het
              resultaat voor, niet de route. Wat dat resultaat precies is, en hoe je het na afloop
              zelf kunt nameten, staat hieronder.
            </p>

            <p className="mt-8 text-sm text-primary-500">
              Jaap van Wonderen, tegelzetter in Breda · geschreven 15 september 2026 · met de
              paragraafnummers van de richtlijn erbij, zodat je het kunt nalezen
            </p>
          </div>
        </div>
      </section>

      {/* ─── DRIE BEURTEN ─────────────────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">De volgorde</div>
          <h2
            id="drie-beurten-en-geen-twee"
            className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl"
          >
            Zes stappen, en de wand komt er twee keer aan te pas
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            De twaalf stappenplannen die ik las tellen er vijf tot zeven en zetten de wand in één
            blok. In een echte badkamer valt dat blok in tweeën uiteen, met de vloer ertussen. Dit
            is de volgorde zoals hij loopt, met per stap de reden dat hij daar staat.
          </p>

          <ol className="mt-12 space-y-8">
            {beurten.map((b, i) => (
              <li key={b.stap} className="grid gap-3 border-t border-mist pt-8 sm:grid-cols-12 sm:gap-8">
                <div className="font-display text-3xl font-bold tabular-nums text-accent-600 sm:col-span-1">
                  {i + 1}
                </div>
                <div className="sm:col-span-11">
                  <h3 className="font-display text-xl font-semibold text-primary-900">{b.stap}</h3>
                  <p className="mt-3 text-base leading-relaxed text-primary-600">{b.wat}</p>
                  <p className="mt-3 text-base leading-relaxed text-primary-500">{b.waarom}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-primary-600">
            De afdichting uit stap 1 is een eigen onderwerp: waar hij hoort, hoe hij is opgebouwd en
            op welke momenten je hem nog met eigen ogen kunt zien staat op{' '}
            <Link href="/badkamer-waterdicht-maken" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
              de pagina over een badkamer waterdicht maken
            </Link>
            . De richtlijn eist daar bij een bad of douche overigens kimband over de volle hoogte en
            breedte van de inwendige hoeken (par. 6.3) — dus precies in de hoeken die later ook de
            kitrand krijgen.
          </p>
        </div>
      </section>

      {/* ─── WAT DE RICHTLIJN ZEGT ────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Wat er echt in de richtlijn staat</div>
          <h2
            id="wat-de-uitvoeringsrichtlijn-voorschrijft"
            className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl"
          >
            Geen voorschrift over de volgorde — wel zes over het resultaat
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-primary-900">
                Voor tegelwerk binnenshuis bestaat in Nederland één uitvoeringsrichtlijn: URL
                35-101, onderdeel van BRL 1017, het KOMO-procescertificaat voor het aanbrengen van
                tegelwerk. Daarin staat wat een gecertificeerd tegelzetbedrijf moet doen en waaraan
                het werk achteraf wordt getoetst. De tekst is openbaar en te downloaden.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Wat erin staat over eerst de wand of eerst de vloer: niets. Het document behandelt
                het ontwerp, de ondergrond, de materialen, de omstandigheden, het aanbrengen en het
                gerede tegelwerk, en laat de volgorde over aan de vakman. Dat is het ongemakkelijke
                deel van het antwoord, en het is wel het eerlijke deel: elke pagina die &quot;eerst
                de wand&quot; als regel presenteert, presenteert een gewoonte als voorschrift.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Wat er wél in staat gaat over het resultaat, en dat is voor jou bruikbaarder. Deze
                zes raken de aansluiting tussen wand en vloer rechtstreeks.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="border-l border-mist pl-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                  Hoe ik dit gecontroleerd heb
                </div>
                <p className="mt-4 text-base leading-relaxed text-primary-600">
                  Ik heb de pdf van URL 35-101 (versie 13-04-2018) zelf doorgelezen en de
                  paragraafnummers erbij gezet, in plaats van een samenvatting van een adviespagina
                  over te nemen. Dat is niet overdreven: <strong className="font-semibold text-primary-900">vier</strong> van
                  de twaalf adviespagina&apos;s die ik las noemen &quot;minimaal 80 procent in de
                  lijm&quot; als eis voor wandtegels. De richtlijn eist daar 65 procent; de 80
                  procent is de eis voor vloertegelwerk (par. 6.5, tabel 5). Eén op de drie gelezen
                  pagina&apos;s geeft op dit punt dus het verkeerde getal door.
                </p>
                <p className="mt-4 text-base leading-relaxed text-primary-600">
                  Geen van die twaalf pagina&apos;s noemt overigens waar hun regels vandaan komen:
                  het woord uitvoeringsrichtlijn, BRL 1017 of KOMO staat er in geen enkele.
                </p>
                <p className="mt-4 text-base leading-relaxed text-primary-600">
                  Lees het gerust na. Het document is niet geheim en er zitten controlelijsten in
                  die je als opdrachtgever gewoon kunt begrijpen.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[34rem] border-collapse text-left">
              <caption className="sr-only">
                Zes eisen uit uitvoeringsrichtlijn URL 35-101 die de aansluiting tussen wand- en
                vloertegelwerk bepalen, met de paragraaf waarin ze staan
              </caption>
              <thead>
                <tr className="border-y border-mist">
                  <th scope="col" className="py-4 pr-4 text-sm font-semibold text-primary-900">Wat de richtlijn eist</th>
                  <th scope="col" className="py-4 pr-4 text-sm font-semibold text-primary-900">Wat er staat</th>
                  <th scope="col" className="py-4 text-sm font-semibold text-primary-900">Waar</th>
                </tr>
              </thead>
              <tbody>
                {richtlijn.map((r) => (
                  <tr key={r.eis} className="border-b border-mist align-top">
                    <th scope="row" className="py-5 pr-4 text-base font-medium text-primary-900">{r.eis}</th>
                    <td className="py-5 pr-4 text-sm leading-relaxed text-primary-600">{r.tekst}</td>
                    <td className="py-5 text-sm leading-relaxed text-primary-500">{r.waar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-primary-500">
            Bron: URL 35-101 d.d. 13-04-2018, uitvoeringsrichtlijn voor het aanbrengen van wand- en
            vloertegelwerk in reguliere binnentoepassing, behorend bij BRL 1017 (SKG-IKOB). De
            minimale voegbreedtes die Omnicol eruit citeert — 3 mm voor vloertegels, 2 mm voor
            wandtegels — gaan over de voegen tússen tegels; de randvoeg langs de wand is een andere
            voeg en heeft zijn eigen minimum van 4 mm.
          </p>

          <div className="mt-10 max-w-3xl rounded-2xl bg-clay p-8">
            <h3 className="font-display text-lg font-semibold text-primary-900">
              Wat ik gelezen heb, en wat niet
            </h3>
            <p className="mt-4 text-base leading-relaxed text-primary-600">
              Als ik op deze pagina schrijf &quot;geen van de twaalf&quot;, dan bedoel ik deze
              twaalf, allemaal gelezen op 15 september 2026: tegelzetter-expert.nl,
              040badkamers.nl, klaardeklus.nl, purperinterior.nl, vloerenmantegels.nl,
              fabinterieurhulp.nl, tegelsinhuis.nl, portugesetegel.be (twee artikelen),
              mondain.nl, klustoolsxl.nl en bouwmaat.nl. Dat zijn de pagina&apos;s die op deze
              vraag en op &quot;badkamer betegelen eerst vloer of wand&quot; bovenaan stonden bij
              DuckDuckGo en Brave.
            </p>
            <p className="mt-4 text-base leading-relaxed text-primary-600">
              Vier bronnen uit diezelfde lijstjes kreeg ik niet open: webwoordenboek.nl,
              tegeldepot.nl, een discussie op reddit.com en gamma.be. Die tellen hierboven dus
              nergens in mee. Staat de derde beurt daar wél in, dan klopt mijn telling niet — en
              dan hoor ik dat graag, want ik heb liever een scherpe pagina dan een mooie.
            </p>
            <p className="mt-4 text-base leading-relaxed text-primary-600">
              Google zelf heb ik niet kunnen meten; dat lukt machinaal niet. Dit is dus geen
              Google-ranglijst. De klusfora tel ik apart: klusidee.nl en bouwinfo.be. Daar staat de
              derde beurt wél — op bouwinfo.be al in een bericht uit 2012, in bijna dezelfde
              woorden als hierboven: eerst de wand met de onderste rij open, dan de vloer, dan die
              rij afgekort en ingepast.
            </p>
          </div>
        </div>
      </section>

      {/* ─── UITZONDERINGEN ───────────────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Wanneer het andersom gaat</div>
          <h2
            id="wanneer-eerst-de-vloer"
            className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl"
          >
            Vier situaties waarin het antwoord verandert
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            De adviespagina&apos;s noemen er één: een patroon dat van de vloer naar de wand
            doorloopt. Er zijn er meer, en ze zijn alle vier iets waar je vóór de start over hoort
            te beslissen in plaats van halverwege.
          </p>

          <dl className="mt-12 divide-y divide-mist border-y border-mist">
            {uitzonderingen.map((u) => (
              <div key={u.geval} className="grid gap-2 py-8 sm:grid-cols-12 sm:gap-6">
                <dt className="sm:col-span-4">
                  <span className="text-sm font-semibold uppercase tracking-[0.12em] text-accent-600">
                    {u.oordeel}
                  </span>
                  <p className="mt-2 text-base font-medium leading-snug text-primary-900">{u.geval}</p>
                </dt>
                <dd className="text-base leading-relaxed text-primary-600 sm:col-span-8">{u.uitleg}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-primary-600">
            Er is nog een vijfde situatie die de volgorde overhoop haalt, en die staat apart:
            tegelen over een bestaande laag. De nieuwe laag bouwt hoogte op, en dat verandert het
            peil waar de onderste rij naartoe moet.{' '}
            <Link href="/tegelen-over-bestaande-tegels" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
              Wat een tweede laag tegels kost aan hoogte
            </Link>{' '}
            staat met de rekensom uitgewerkt op een eigen pagina.
          </p>
        </div>
      </section>

      {/* ─── DE KITRAND ───────────────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Het detail dat overblijft</div>
          <h2
            id="de-kitrand-tussen-wand-en-vloer"
            className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl"
          >
            Waar de volgorde zichtbaar wordt: de rand onderaan
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-primary-900">
                Als de wandtegel over de vloertegel heen eindigt, staat de kitrand rechtop. Als de
                vloertegel tegen de wandtegel aan komt, ligt hij plat. Dat verschil van een paar
                millimeter bepaalt hoe lang die rand meegaat, want een liggende rand vangt water,
                zeep en vuil en een staande niet.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Op de vakfora is dit het echte meningsverschil, en niet de volgorde zelf. Er zijn
                mensen die een liggende kitvoeg simpelweg lelijk vinden en daarom de vloer eerst
                willen leggen. Dat is een legitieme smaak, maar het is wel een keuze tegen
                levensduur in, en het hoort dus vóór het werk besproken te zijn.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Wat geen kwestie van smaak is: dat er een open voeg zit. De richtlijn verbiedt
                stuikend verlijmen — tegelvlakken horen bij inwendige hoeken vrij te zijn, zo&apos;n
                4 à 5 millimeter — en wil die voeg gevuld met blijvend elastische kit, over de
                volledige diepte. Wand en vloer bewegen los van elkaar, en cement beweegt niet mee.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Wat er gebeurt als die beweging tóch in het tegelwerk terechtkomt, wie dan herstelt
                en wie betaalt, staat met de wetsartikelen erbij op{' '}
                <Link href="/losse-tegels-en-scheurende-voegen" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
                  de pagina over losse tegels en scheurende voegen
                </Link>
                .
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-clay p-8">
                <h3 className="font-display text-lg font-semibold text-primary-900">
                  Waarom kitwerk een kortere garantie heeft
                </h3>
                <p className="mt-4 text-base leading-relaxed text-primary-600">
                  Ik geef 5 jaar garantie op tegelwerk en voegwerk en 1 jaar op kitwerk. Dat
                  verschil is geen kleine letter: kit is het enige onderdeel van een badkamer dat
                  ontworpen is om te bewegen, en alles wat beweegt slijt. De rand onderaan de wand
                  is precies zo&apos;n plek. Een blik erop bij de jaarlijkse schoonmaak is genoeg;
                  wordt hij grauw of laat hij los, dan is het een onderhoudsklus en geen schade.
                </p>
                <p className="mt-4 text-base leading-relaxed text-primary-600">
                  Welke situaties buiten de garantie vallen staat open en compleet in{' '}
                  <Link href="/algemene-voorwaarden" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
                    mijn algemene voorwaarden
                  </Link>
                  . Lees ze voordat je tekent, bij mij of bij iemand anders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ZO DOE IK HET ────────────────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Mijn werkwijze</div>
          <h2
            id="zo-doe-ik-het"
            className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl"
          >
            Zo doe ik het, en waarom je dat mag weten voordat je tekent
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-primary-900">
                Ik houd de volgorde aan zoals hierboven: het wandvlak vanaf de tweede rij, wand
                voegen, vloer, en de onderste rij wandtegels als laatste op maat. De aansluiting
                tussen wand en vloer blijft open en wordt afgekit, niet gevoegd. Het peil van de
                afgewerkte vloer leg ik vast vóór de eerste tegel, en de indeling van het tegelwerk
                bespreek ik met je voordat er lijm aan te pas komt.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Dat laatste is geen service maar een eis uit de richtlijn: de indeling hoort vooraf
                met de opdrachtgever te zijn vastgelegd, en het referentiemeetpunt hoort van de
                opdrachtgever te komen. In de praktijk bij een particuliere badkamer betekent dat
                gewoon: we lopen het samen door, en ik schrijf op wat we afspreken.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Ik ben een eenmanszaak uit Breda, actief sinds 2022, en ik voer de klussen zelf uit
                — geen onderaannemers, geen wisselende ploegen. Bij een volgordevraag helpt dat
                meer dan het lijkt: er is niemand om het naar door te schuiven. Dezelfde persoon
                die de ondergrond aantreft, zet de laatste rij erin. Mijn kerngebied ligt op
                maximaal een kwartier rijden van Breda, en dat is geen detail bij deze volgorde:
                de vloer en de onderste rij zijn twee bezoeken op verschillende dagen.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Drie dingen die op mijn eigen dienstpagina staan en hier rechtstreeks van toepassing
                zijn. Eén: bij grootformaat — 60x120 en groter — werk ik met kruisende lasers en
                met vloerverwarmingsvriendelijke lijm. Hoe groter de tegel, hoe harder de derde
                beurt nodig is, want een afwijking van een millimeter in de dekvloer wordt over
                120 centimeter zichtbaar. Twee: dilataties leg ik op de juiste plek en voegwerk zit
                bij het werk in. Drie: plinten reken ik apart, inclusief het afkitten — dat kitwerk
                is dus een eigen regel op je offerte en geen verstopte post.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                En de termijn die daaraan vastzit: 5 jaar garantie op tegelwerk en voegwerk, 1 jaar
                op kitwerk. Je ziet op je offerte dus precies welk deel van je badkamer onder welke
                termijn valt. Een prijs per vierkante meter vind je hier niet — die zet ik niet op
                de site, omdat hij zonder de ondergrond, het formaat en het snijwerk niets betekent.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="border-l border-mist pl-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                  Wat er in de offerte komt
                </div>
                <ul className="mt-4 space-y-3 text-base leading-relaxed text-primary-600">
                  <li>De afgewerkte vloerhoogte waarop gewerkt wordt.</li>
                  <li>Hoe het tegelwerk wordt ingedeeld: uitgemeten of naar mijn inzicht.</li>
                  <li>
                    Plinten en het afkitten daarvan als aparte regel — met de garantietermijn van
                    1 jaar op kitwerk erbij, tegenover 5 jaar op tegel- en voegwerk.
                  </li>
                  <li>Of er inbouwapparatuur komt, en wanneer die geplaatst wordt.</li>
                  <li>Bij 60x120 of groter: dat er met kruisende lasers wordt uitgezet.</li>
                </ul>
                <p className="mt-4 text-base leading-relaxed text-primary-600">
                  Je krijgt een gespecificeerde offerte, zonder kleine lettertjes, binnen 5 dagen.
                  Ik werk in{' '}
                  <Link href="/werkgebied" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
                    Breda en omstreken
                  </Link>
                  , met een kerngebied op maximaal 15 minuten rijden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NA DE OPLEVERING ─────────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Achteraf zelf nameten</div>
          <h2
            id="hoe-beoordeel-ik-het-tegelwerk"
            className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl"
          >
            Vijf controles die je zelf kunt doen, met de norm erbij
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            De volgorde is een middel; het resultaat is waar je voor betaalt. En anders dan bij de
            waterkering onder de tegels kun je dít gewoon zien. Dit zijn de vijf dingen waar de
            richtlijn zelf op toetst, in de volgorde waarin je ze in een opgeleverde badkamer
            tegenkomt.
          </p>

          <ol className="mt-12 space-y-8">
            {oplevering.map((o, i) => (
              <li key={o.wat} className="grid gap-3 border-t border-mist pt-8 sm:grid-cols-12 sm:gap-8">
                <div className="font-display text-3xl font-bold tabular-nums text-accent-600 sm:col-span-1">
                  {i + 1}
                </div>
                <div className="sm:col-span-11">
                  <h3 className="font-display text-xl font-semibold text-primary-900">{o.wat}</h3>
                  <p className="mt-3 text-base leading-relaxed text-primary-900">{o.norm}</p>
                  <p className="mt-3 text-base leading-relaxed text-primary-600">{o.waarom}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-2xl bg-clay p-8">
            <h3 className="font-display text-lg font-semibold text-primary-900">
              Er is ook een moment vóór de eerste tegel
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-600">
              De richtlijn kent een formulier &quot;melding gebreken ondergrond&quot; (bijlage 3).
              Treft de tegelzetter een ondergrond aan die niet deugt — niet vlak, te vochtig,
              scheuren, geen dilataties — dan hoort hij dat schriftelijk bij jou te melden vóór hij
              begint. Wil jij dat er tóch doorgewerkt wordt, dan vraagt de richtlijn daar een
              schriftelijke opdracht van jou voor. Dat klinkt formeel, maar het beschermt je
              allebei: het is het verschil tussen een bekend risico en een verrassing achteraf.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ZOALS DE VRAAG ECHT KLINKT ───────── */}
      <section className="bg-clay py-20 lg:py-28">
        <div className="container-tight">
          <div className="eyebrow">Zoals de vraag echt gesteld wordt</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Op de fora gaat het al lang niet meer over de volgorde
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Dat is het opvallende. Zodra iemand echt in een badkamer staat, verschuift de vraag
            binnen een paar berichten van &quot;wat eerst&quot; naar &quot;hoeveel ruimte laat ik
            onderaan&quot; en &quot;hoe doe ik dat met het afschot naar de put&quot;. Geen van de
            twaalf adviespagina&apos;s die ik las gaat daarop in. Deze zinnen komen daarom
            allemaal van vakfora en niet uit een stappenplan; ze zijn niet van mij, ze staan
            openbaar op Nederlandstalige klusfora en ik citeer ze zonder naam.
          </p>

          <ul className="mt-12 divide-y divide-mist border-y border-mist">
            {stemmen.map((s) => (
              <li key={s.tekst} className="py-6">
                <p className="text-lg leading-relaxed text-primary-900">&ldquo;{s.tekst}&rdquo;</p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex min-h-11 items-center text-sm text-primary-500 underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
                >
                  {s.bron}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── VERVOLGVRAGEN ────────────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Wat hierna komt</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Acht vragen die op deze ene volgen
          </h2>

          <dl className="mt-12 divide-y divide-mist border-y border-mist">
            {faqs.map((f) => (
              <details key={f.q} className="group cursor-pointer py-6">
                <summary className="flex list-none items-start justify-between gap-4">
                  <dt className="font-display text-lg font-semibold text-primary-900 group-hover:text-accent-600">
                    {f.q}
                  </dt>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-clay text-primary-600 transition-all duration-300 group-open:rotate-45">
                    <span className="h-px w-3 bg-current" />
                    <span className="absolute h-3 w-px bg-current" />
                  </span>
                </summary>
                <dd className="mt-4 pr-12 text-base leading-relaxed text-primary-600">{f.a}</dd>
              </details>
            ))}
          </dl>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-primary-600">
            De wachttijden die na het tegelen beginnen staan met alle termijnen naast elkaar in{' '}
            <Link href="/tegelvloer-belopen-en-vloerverwarming-aanzetten" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
              het overzicht van droogtijden en wachttijden
            </Link>
            . En hoe hoog de wandtegels eigenlijk moeten komen — een vraag die de indeling van de
            hele wand bepaalt — staat op{' '}
            <Link href="/badkamer-betegelen-tot-plafond" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
              de pagina over betegelen tot het plafond
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ─── WAT HIER NIET STAAT ──────────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Eerlijk over de grens</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Wat hier niet staat, en waarom niet
          </h2>
          <ul className="mt-12 divide-y divide-mist border-y border-mist">
            {[
              'Een prijs. De volgorde van het werk verandert de prijs niet noemenswaard; het formaat, de ondergrond, het snijwerk en het voorwerk doen dat wel. Bedragen van vergelijkings- en leadplatforms zijn niet mijn prijs.',
              'Een doe-het-zelfhandleiding. Hierboven staat waaróm de volgorde is zoals hij is en waar je op kunt toetsen. Hoe je een tegelsnijder bedient of een lijmkam kiest staat er bewust niet in; daar zijn de fabrikanten beter in.',
              'De volledige tekst van URL 35-101. Ik citeer de paragrafen die de aansluiting tussen wand en vloer raken. Het document behandelt veel meer — vochtpercentages, lijmtypen, controlelijsten — en is openbaar na te lezen.',
              'Een oordeel over wand- of vloerverwarming onder de tegels in jouw situatie. De richtlijn noemt wachttijden van 2 tot 4 weken en een verplichte schriftelijke instructie; welke van de twee bij jouw dekvloer hoort, hangt van die dekvloer af en niet van een webpagina.',
              'Een meting van jouw vloer. De vlakheidseisen hierboven zijn de norm, geen opname van jouw dekvloer. Die doe ik ter plekke met een rei.',
              'Hoe vaak het in Nederland misgaat op deze aansluiting. Ik heb daar geen meting van, en een getal zonder bron hoort niet op deze site.',
            ].map((t) => (
              <li key={t} className="py-6 text-base leading-relaxed text-primary-600">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/diensten/badkamer-renovatie" className="btn-secondary">
              Badkamer renovatie
            </Link>
            <Link href="/badkamer-waterdicht-maken" className="btn-secondary">
              Waterdicht maken
            </Link>
            <Link href="/badkamer-betegelen-tot-plafond" className="btn-secondary">
              Tot het plafond betegelen?
            </Link>
            <Link href="/tegelvloer-belopen-en-vloerverwarming-aanzetten" className="btn-secondary">
              Wanneer mag ik erop lopen?
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────── */}
      <section className="bg-paper py-20 lg:py-24">
        <div className="container-tight rounded-3xl bg-primary-900 p-12 text-center text-paper lg:p-16">
          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl">
            Zal ik de volgorde voor jouw badkamer even doorlopen?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-primary-300">
            Stuur een paar foto&apos;s van de ruimte en de afmetingen via WhatsApp. Je krijgt binnen
            1 werkdag antwoord, en in de offerte staat op welke vloerhoogte gewerkt wordt en hoe het
            tegelwerk wordt ingedeeld.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${business.phoneE164}`} className="btn-accent">
              <Phone className="h-4 w-4" /> {business.phone}
            </a>
            <a
              href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                'Hoi Jaap, ik heb een vraag over de volgorde bij het betegelen van mijn badkamer. Kun je meekijken?'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !border-paper !text-paper hover:!bg-paper hover:!text-primary-900"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Jaap
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
