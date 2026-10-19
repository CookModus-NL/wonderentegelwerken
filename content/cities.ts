/**
 * Per-city landing pages voor lokale SEO.
 * Elke stad heeft unieke copy zodat Google ze als losse pagina rankt
 * voor "tegelzetter [stad]" zoekopdrachten.
 */

/**
 * Een antwoordeenheid op een plaatspagina (contract f4d87796, 19 okt 2026, klasse samenvoegen).
 *
 * WAAROM DIT VELD OPTIONEEL IS. Vier URL's van deze site kregen vertoningen op één zoekvraag
 * ("tegelzetter etten leur", motor_gsc 22-08 t/m 16-10-2026, sc-domain:wonderentegelwerken.nl):
 * /tegelzetter/etten-leur (5 vertoningen, gemiddelde positie 14,0), /werkgebied (1, positie 8),
 * de homepage (35, positie 33,6) en de plaatsenhub /tegelzetter (6, positie 60,2). Samenvoegen
 * betekent hier: de pagina wier URL, titel en H1 de vraag letterlijk dragen krijgt het antwoord,
 * en de andere drie wijzen ernaar in plaats van mee te dingen.
 *
 * Alleen de plaats die zo'n antwoord werkelijk draagt vult dit veld. Een leeg veld rendert niets:
 * een halve antwoordeenheid op zeven andere plaatspagina's zou precies de dunne, inwisselbare
 * tekst zijn die dit contract wegneemt.
 *
 * Elke vraag staat LETTERLIJK als zichtbare h3 op de pagina en gaat in diezelfde woorden het
 * FAQPage-schema in (searchcompliance 23 sep 2026: schema geeft alleen weer wat zichtbaar is).
 */
export type StadAntwoord = {
  /** Meta-description van deze plaatspagina; draagt de zoekwoorden én het antwoord. */
  description: string
  /** Bovenschrift boven de eenheid. */
  eyebrow: string
  /** De kop van de eenheid, in twee regels (tweede regel cursief-licht, huisgrammatica). */
  kop: [string, string]
  /** Het citeerbare antwoord in één alinea — de zin die een assistent kan overnemen. */
  antwoordEerst: string
  /** Wat de zoekresultaten op de peildatum wel en niet gaven; met datum en herkomst. */
  marktalinea: string
  /** Peildatum-regel onder de inleiding (kleine tekst). */
  herkomstregel: string
  /** De vervolgvragen. `delen` mag links bevatten; de vraag gaat letterlijk het schema in. */
  vragen: { id: string; vraag: string; delen: Deel[] }[]
}

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
  /** Antwoordeenheid — alleen op de plaats die de zoekvraag bezit. Zie StadAntwoord. */
  antwoord?: StadAntwoord
}

/** Een stuk lopende tekst, of een interne link met beschrijvende linktekst. */
export type Deel = string | { tekst: string; href: string }

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
    antwoord: {
      description:
        'Tegelzetter in Etten-Leur: Jaap van Wonderen uit Breda, 15 tot 30 minuten rijden. Wat er in het tegelwerk zit, binnen hoeveel dagen je een gespecificeerde offerte hebt en waar de garantie van 5 jaar stopt.',
      eyebrow: 'Tegelzetter in Etten-Leur',
      kop: ['Tegelzetter in Etten-Leur?', 'Dit krijg je, en dit niet.'],
      antwoordEerst:
        'Ik ben Jaap van Wonderen, tegelzetter uit Breda en sinds 2022 een eenmanszaak (KvK 86555499). Etten-Leur ligt niet in mijn kerngebied maar in de ring daarbuiten: 15 tot 30 minuten rijden. Ik kom er voor vloer- en wandtegelwerk, buitentegelwerk, kitwerk en een complete badkamerrenovatie. Je hebt binnen 1 werkdag antwoord op WhatsApp en binnen 5 dagen een gespecificeerde offerte zonder kleine lettertjes, en op tegel- en voegwerk geldt 5 jaar garantie, op kitwerk 1 jaar.',
      marktalinea:
        'Wie op een tegelzetter in Etten-Leur zoekt, krijgt vooral doorverwijzingen. Van de tien organische Google-resultaten op 19 oktober 2026 waren er acht een bemiddelingssite of een bedrijvengids, en de twee overige waren de eigen site van een tegelzetter over een andere plaats. Eén gids toonde 42 bedrijven in de gemeente, waarvan de eerste tien parketleggers, stoffeerders en wandafwerkers. De twee resultaten die ik volledig kon lezen noemden geen prijsopbouw, geen garantietermijn en geen reistijd. Die drie staan hieronder.',
      herkomstregel:
        'Gemeten 19 oktober 2026 · tien organische resultaten plus het kaartblok in de Nederlandse Google-resultaten, opgehaald via een SERP-API · de getallen over mijn eigen werk komen uit mijn algemene voorwaarden en mijn werkgebied',
      vragen: [
        {
          id: 'kom-je-ook-in-etten-leur',
          vraag: 'Kom je ook in Etten-Leur?',
          delen: [
            'Ja, al niet als kerngebied. Mijn kerngebied is Breda met Teteringen, Princenhage, Bavel, Ulvenhout, Effen en Dorst, alles binnen 15 minuten rijden. Etten-Leur zit in de ring van 15 tot 30 minuten, samen met Oosterhout, Rijen, Tilburg en Zundert. Made, Dongen, Gilze en Roosendaal doe ik op aanvraag en dan voor grotere projecten. Dat onderscheid is geen formaliteit: voor een klus van een halve dag in Etten-Leur plan ik liever een dag waarop ik toch die kant op moet. Het volledige ',
            { tekst: 'werkgebied met de reistijd per plaats', href: '/werkgebied' },
            ' staat apart.',
          ],
        },
        {
          id: 'hele-badkamer-of-alleen-tegelen',
          vraag: 'Kun je een hele badkamer in Etten-Leur plaatsen, of alleen tegelen?',
          delen: [
            'Beide. Een badkamerrenovatie is vijf klussen achter elkaar: slopen, leidingwerk en elektra, de ondergrond waterdicht maken, tegelwerk, en als laatste sanitair en afwerking. Die plan ik als één opdracht met één prijs, en je hebt één aanspreekpunt. Laat ik een deel van het werk door een andere vakman doen, dan blijf ik eindverantwoordelijk, en dat staat zo in artikel 6 lid 2 van mijn algemene voorwaarden. Wil je eerst weten wie bij zo’n renovatie wat doet en waar het misgaat, lees dan ',
            { tekst: 'wie wat doet bij een badkamerrenovatie', href: '/badkamer-renovatie-breda' },
            ', of de dienstpagina over ',
            { tekst: 'badkamer renovatie van sloop tot kitwerk', href: '/diensten/badkamer-renovatie' },
            '.',
          ],
        },
        {
          id: 'wat-zit-er-in-het-tegelwerk',
          vraag: 'Wat zit er in het tegelwerk en wat niet?',
          delen: [
            'In het tegelwerk zitten de lijm en de voorlijm, het egaliseren van de ondervloer waar dat nodig is, de dilataties op de plekken waar ze horen, en het voegwerk. De plinten staan apart op de offerte, inclusief het afkitten. Sloopwerk, puinafvoer en voorrijkosten horen niet in dat standaardrijtje. Veel woningen in Etten-Leur uit de jaren ’80 en ’90 krijgen nu grootformaat keramiek van 60×120 of 80×80; daar werk ik met vloerverwarmingsvriendelijke lijm en kruisende lasers, en de ondervloer gaat er eerst vlak onder. Wat er bij ',
            { tekst: 'vloertegelwerk onder je vloer gebeurt', href: '/diensten/vloertegels' },
            ' staat daar uitgebreid, en als je de tegels zelf koopt is er een lijstje met ',
            { tekst: 'wat je vóór het bestellen regelt', href: '/tegels-zelf-kopen-of-via-de-tegelzetter' },
            '.',
          ],
        },
        {
          id: 'wat-kost-tegelzetten-in-etten-leur',
          vraag: 'Wat kost een tegelzetter in Etten-Leur?',
          delen: [
            'Op deze site staat geen tarief per vierkante meter, en dat is een keuze. Een prijs per m² die klopt voor een rechte woonkamervloer klopt niet voor een badkamer met vier hoeken, een nis en een afschot naar de put, en je komt er dan achteraf op terug. Je weet vooraf wat het kost: de posten staan los op de offerte, zodat je ziet waar je ja tegen zegt. Welke bedragen de vergelijkingssites noemen en wat daar niet in zit, heb ik wel uitgezocht op de pagina over ',
            { tekst: 'wat vloer tegelen per m² kost', href: '/wat-kost-vloer-tegelen-per-m2' },
            ', en voor de badkamer op ',
            { tekst: 'wat een badkamer betegelen kost', href: '/wat-kost-een-badkamer-betegelen' },
            '.',
          ],
        },
        {
          id: 'hoe-snel-antwoord-en-prijs',
          vraag: 'Hoe snel heb ik antwoord en een prijs?',
          delen: [
            'Stuur foto’s en de maten via WhatsApp naar 06-18249249, dan heb je binnen 1 werkdag antwoord. Daarna kom ik vrijblijvend kijken en opmeten, en binnen 5 dagen ligt er een gespecificeerde offerte zonder kleine lettertjes. Bij de oplevering lopen we samen een opleverlijst na; die staat zo in artikel 9 van mijn ',
            { tekst: 'algemene voorwaarden', href: '/algemene-voorwaarden' },
            '.',
          ],
        },
        {
          id: 'en-als-er-later-een-voeg-scheurt-etten-leur',
          vraag: 'En als er over twee jaar een voeg scheurt?',
          delen: [
            'Dan val je onder artikel 12 van mijn algemene voorwaarden: 5 jaar op tegel- en voegwerk, 1 jaar op kitwerk, gerekend vanaf de oplevering. Komt het gebrek door mijn eigen werk, dan herstel ik het zonder kosten, ook als het zich eerst als vocht of als een scheur laat zien. Wat er buiten de garantie valt zeg ik liever vooraf: slijtage en verkleuring van voeg en kit door gebruik (kit is na het eerste jaar onderhoud), verkeerd gebruik of gebrek aan onderhoud, aanwijzingen over droogtijden en vloerverwarming die niet zijn opgevolgd, een deel waaraan na de oplevering iemand anders heeft gewerkt, en vocht of scheuren met een oorzaak buiten mijn werk. De volledige lijst staat in datzelfde artikel 12 van de ',
            { tekst: 'algemene voorwaarden', href: '/algemene-voorwaarden' },
            '. Wat er technisch gebeurt als tegels loskomen, staat bij ',
            { tekst: 'losse tegels en scheurende voegen', href: '/losse-tegels-en-scheurende-voegen' },
            '.',
          ],
        },
        {
          id: 'wanneer-ben-ik-niet-je-man-etten-leur',
          vraag: 'Wanneer ben ik niet je man?',
          delen: [
            'Als je de laagste prijs per m² zoekt en verder niets: ik ben een eenmanszaak zonder tussenpersonen en eindverantwoordelijk voor elke klus, dus ik hoef niet de goedkoopste te zijn en ik ben ook niet de snelst beschikbare. Als je een kleine losse klus in Etten-Leur hebt die morgen moet: dat lukt eerder in mijn kerngebied dan hier. En als het om bestrating of straatwerk gaat: buitentegelwerk doe ik wel, keramiek op tegeldragers, splitlagen of zandbed, maar straatwerk niet.',
          ],
        },
      ],
    },
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
