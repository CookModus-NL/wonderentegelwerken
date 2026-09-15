import Link from 'next/link'
import { ChevronRight, Phone, MessageCircle } from 'lucide-react'
import { business } from '@/content/business'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

/**
 * ANTWOORDEENHEID. Vraag: "Hoe wordt mijn badkamer waterdicht gemaakt?"
 * Contract 3c60d55b-b139-4b5c-a500-34e469d279a4, run schrijver-20260915-0836.
 *
 * WAAROM DEZE PAGINA ANDERS IS DAN DE BOVENLAAG. De vijf best vindbare Nederlandse
 * antwoorden op deze vraag (gemeten 15-09-2026, zie hieronder) zijn alle vijf van een
 * partij die het materiaal verkoopt: een tegelwebshop, een sanitairwebshop, een
 * afdichtingsleverancier en een afvoerfabrikant. Ze geven alle vijf hetzelfde
 * stappenplan en ze zeggen alle vijf dat het "essentieel" of "onmisbaar" is. Wat geen
 * van de vijf doet: opschrijven wat de bouwregels werkelijk eisen, per vlak zeggen waar
 * de laag wel en niet hoort, en vertellen hoe je na afloop nog kunt controleren of hij
 * er ligt. Dat laatste is het echte probleem van de koper: zodra de tegels erop zitten
 * is de waterkering onzichtbaar.
 *
 * SERP-METING (bewijsklasse B, met engine-label; motor/scripts/serp.mjs, 15-09-2026):
 *  - koperszoekopdracht "badkamer betegelen waterdicht" (de Suggest-term uit de
 *    vraagdekkingskaart):
 *      Brave      -> tegelsinhuis.nl, plaktegels.com, tegelzetshop.nl, tegel-uitverkoop.nl,
 *                    sanitairwinkel.nl, belgium.weber, bouwmaat.nl, douchezaak.nl,
 *                    nl.weber, mondain.nl
 *      DuckDuckGo -> tegelsinhuis.nl, mondain.nl, klustoolsxl.nl, purperinterior.nl,
 *                    aquaplan.com, sanitairwinkel.nl, tegelsinhuis.nl, bobex.nl,
 *                    badkamerexperts.nl, tresna.nl
 *      Twee onafhankelijke indexen, dezelfde winnaar: tegelsinhuis.nl.
 *  - vraagtekst "Hoe wordt mijn badkamer waterdicht gemaakt?" (Brave)
 *      -> easydrain.nl, sanitairkamer.nl, sanitairwinkel.nl, sani4comfort.nl, bobex.nl,
 *         kiwitz.nl, bostik.com, mapei.com, klussenmetgemak.nl, bison.net
 *  - wonderentegelwerken.nl staat in geen van de drie uitslagen in de top-10.
 *  - GOOGLE ONGEMETEN (machinaal geblokkeerd, serp.mjs --diagnose). Dit is dus geen
 *    Google-uitslag.
 *
 * BRONNEN VAN DE HARDE GETALLEN EN REGELS (wet art. 1.1, niets verzinnen). Alles gelezen
 * op 15 september 2026:
 *  - Besluit bouwwerken leefomgeving, art. 4.118 (wering van vocht van buiten: waterdicht
 *    volgens NEN 2778), art. 4.120 lid 1 en 2 (wateropname, 1,2 m en bij bad of douche
 *    2,1 m over minstens 3 m) en art. 3.65 (bestaande bouw, 1 m). Letterlijk gelezen op
 *    wetten.overheid.nl, geldende tekst 01-01-2026.
 *  - Opbouw van het afdichtingssysteem, kimband in elke binnenhoek, manchetten om de
 *    doorvoeren, afdichtingspasta in twee lagen, flens van de afvoer meegenomen:
 *    kiwitz.nl/blogs/advies/badkamer-waterdicht-maken ("Badkamer waterdicht maken in
 *    6 stappen") en kiwitz.nl/pages/waterdichte-badkamer.
 *  - Waterkering van minimaal twee lagen smeerfolie met versterking in hoeken en
 *    doorvoeren en droogtijd (vaak 24 uur) ertussen, "een dunne bouwmarktlaag is geen
 *    waterkering", afschot 1 tot 2 procent met ideaal rond 1,5 procent, de halve-emmertest
 *    van ongeveer 30 seconden: kemptegelwerk.nl/advies/douchevloer-op-afschot.
 *  - "De voegen tussen tegels zijn meestal niet waterdicht": sani4comfort.nl,
 *    "De badkamer waterdicht maken", 24-06-2024.
 *  - Afdichten van alleen de natte zone binnen het sproeibereik van de douchekop en
 *    membraan direct betegelbaar: easydrain.nl/inspiration/waterdicht-maken-badkamer.
 *  - Garantietermijnen: motor_feiten `wonderen-garantie` (eigenaar_akkoord=true).
 *  - Eenmanszaak, werk zelf uitgevoerd zonder onderaannemers: motor_feiten
 *    `wonderen-persoon-jaap`. Werkgebied: `wonderen-werkgebied-kern` en
 *    `-uitbreiding`. Offerte binnen 5 dagen en reactie binnen 1 werkdag:
 *    `wonderen-offerte-belofte` en `wonderen-reactietijd`. Alle vijf eigenaar_akkoord=true.
 *  - sanitairwinkel.nl/advies/klus/badkamer-waterdicht-maken gaf HTTP 403 en is dus NIET
 *    gelezen. Dat is een gat in de research, geen stilzwijgende overslag.
 * Citaten van bewoners zijn publieke forumberichten, met bron en zonder naam.
 */

const url = `${business.url}/badkamer-waterdicht-maken`

export const metadata: Metadata = {
  title: 'Hoe wordt mijn badkamer waterdicht gemaakt?',
  description:
    'Niet door de tegels. De waterkering is een laag eronder: voorstrijk, kimband in elke binnenhoek, manchetten om de doorvoeren en twee lagen afdichtingspasta. Wat de bouwregels echt eisen, waar de laag hoort, en hoe je controleert dat hij er ligt.',
  alternates: { canonical: '/badkamer-waterdicht-maken' },
  openGraph: {
    title: 'Hoe wordt mijn badkamer waterdicht gemaakt? | Van Wonderen Tegelwerken',
    description:
      'De waterkering zit onder de tegels en is daarna onzichtbaar. Drie momenten waarop je hem nog kunt zien, en vijf regels die op de offerte horen.',
    images: ['/images/projects/portfolio-2025-07-laag-1.webp'],
  },
}

const lagen = [
  {
    laag: 'Ondergrond',
    doet: 'Draagt alles wat erop komt. Moet droog, schoon, vlak en draagkrachtig zijn; scheuren en gaten gaan er eerst uit.',
    nietDoet: 'Houdt zelf geen water tegen.',
  },
  {
    laag: 'Voorstrijk of primer',
    doet: 'Zorgt dat de afdichting hecht en dat een zuigende ondergrond het vocht niet te snel uit de laag erboven trekt.',
    nietDoet: 'Is geen waterkering, ook al kleurt hij de vloer.',
  },
  {
    laag: 'Afschot in de douchevloer',
    doet: 'Stuurt het water naar de afvoer. 1 tot 2 procent helling, ideaal rond 1,5 procent, dus zo’n 15 mm over een meter.',
    nietDoet: 'Houdt geen water tegen. Afschot alleen is niet genoeg.',
  },
  {
    laag: 'Afvoer met flens',
    doet: 'De flens rondom de goot of put is de plek waar de afdichtingslaag op aansluit, zodat water dat langs de voeg komt alsnog in de afvoer eindigt.',
    nietDoet: 'Werkt niet als de afdichting er niet overheen doorloopt.',
  },
  {
    laag: 'Kimband en manchetten',
    doet: 'Dichten de naden die bewegen: elke binnenhoek van wand op wand en wand op vloer, en elke leiding die uit de wand of vloer steekt.',
    nietDoet: 'Vervangen de smeerlaag niet; ze zitten erin, niet ervoor in de plaats.',
  },
  {
    laag: 'Afdichtingspasta of smeerfolie',
    doet: 'Dit is de eigenlijke waterkering. Hoort in minimaal twee lagen, met droogtijd ertussen, vaak 24 uur.',
    nietDoet: 'Eén dunne laag uit de bouwmarkt is geen waterkering.',
  },
  {
    laag: 'Tegellijm en tegel',
    doet: 'Afwerking en slijtlaag. Een keramische tegel zelf neemt vrijwel geen water op.',
    nietDoet: 'Maakt het vlak niet waterdicht, want de naden tussen de tegels zitten ertussen.',
  },
  {
    laag: 'Voeg',
    doet: 'Vult de ruimte tussen de tegels en houdt het vlak stabiel en schoon.',
    nietDoet: 'Een cementvoeg neemt water op. Voegen zijn meestal niet waterdicht.',
  },
  {
    laag: 'Kit',
    doet: 'Sluit de hoek- en bewegingsvoegen elastisch af, precies waar een harde voeg zou scheuren.',
    nietDoet: 'Is een slijtdeel. Geen enkele kit blijft jarenlang in perfecte staat.',
  },
]

const perVlak = [
  {
    oordeel: 'Altijd',
    geval:
      'De douchevloer en de wanden binnen het sproeibereik van de douchekop. Dit is de zone waar het water rechtstreeks en dagelijks op staat, en het is de zone waar elke leverancier zijn kleinste set voor verkoopt.',
  },
  {
    oordeel: 'Altijd',
    geval:
      'Rondom de afvoer, de doorvoeren van de leidingen en elke binnenhoek in die natte zone. Dit zijn de plekken die bewegen of onderbroken zijn, en dus de plekken waar een smeerlaag alleen zou scheuren.',
  },
  {
    oordeel: 'Verstandig',
    geval:
      'De hele badkamervloer als de badkamer op een verdieping ligt, zeker boven een woonkamer of op een houten balkenvloer. Niet omdat er water op komt, maar omdat je een lek daar pas ziet als het plafond eronder vlekt.',
  },
  {
    oordeel: 'Verstandig',
    geval:
      'De wand achter een vrijstaand bad, over de breedte van het bad en een stuk erboven. Het spatgebied is kleiner dan bij een douche, maar het is er wel.',
  },
  {
    oordeel: 'Meestal niet nodig',
    geval:
      'De wand bij de wastafel en de wanden buiten het spatgebied. Daar doen een goede voeg en een nette kitrand het werk, mits de ventilatie op orde is.',
  },
  {
    oordeel: 'Niet nodig',
    geval:
      'Een toiletruimte zonder douche. Daar geldt de wateropname-eis van de wand wel, maar een afdichtingslaag onder het tegelwerk lost daar geen probleem op.',
  },
]

const offerteregels = [
  {
    kop: 'Voorstrijk, met de zone erbij',
    uitleg:
      'Niet alleen "voorbehandelen", maar waar: vloer, of vloer plus wand, en tot welke hoogte. Voorstrijk op een zuigende dekvloer is iets anders dan op een gesloten oude tegel.',
  },
  {
    kop: 'Kimband en manchetten, met aantallen',
    uitleg:
      'Strekkende meters band en het aantal manchetten. Twee manchetten betekent twee doorvoeren; heb je er vier, dan klopt er iets niet.',
  },
  {
    kop: 'Afdichtingspasta in twee lagen, met de zone',
    uitleg:
      'Twee lagen, met droogtijd ertussen, en de zone erbij: alleen de doucheplek, de hele vloer, of de vloer plus de wand tot een genoemde hoogte. Staat er alleen "badkamer waterdicht maken" als één post, dan weet je achteraf niet wat er is gedaan en tot hoe hoog.',
  },
  {
    kop: 'Afschot en afvoer, met wie wat doet',
    uitleg:
      'Wie maakt het afschot, welk type afvoer komt erin (een lijnafvoer vraagt één helling, een puntafvoer vier vlakken) en welke inbouwhoogte heeft die afvoer. Bij een renovatie is de beschikbare opbouwhoogte vaak de beperkende factor.',
  },
  {
    kop: 'Kitwerk als eigen regel, met de termijn',
    uitleg:
      'Kit is een slijtdeel en hoort dus apart te staan, met de garantietermijn erbij. Bij mij is dat 1 jaar op kitwerk tegen 5 jaar op tegel- en voegwerk. Dat verschil is geen kleine letter, het is de eerlijke levensduur van het materiaal.',
  },
]

const momenten = [
  {
    wanneer: 'Moment 1: na het strippen, vóór de eerste tegel',
    wat: 'Dit is het enige moment waarop de hele waterkering open en bloot ligt. Je ziet een doorlopende gekleurde, rubberachtige laag over de natte zone, een band in elke binnenhoek en een manchet om elke leiding die uit de wand of vloer komt. Loop naar binnen en fotografeer elke hoek, de afvoer en elke doorvoer.',
  },
  {
    wanneer: 'Moment 2: tussen de twee lagen',
    wat: 'Er hoort droogtijd te zitten tussen laag één en laag twee, vaak 24 uur. Kom je op de tweede dag langs en ligt er nog maar één laag, dan is dat geen fout maar wel een vraag: wanneer komt de tweede. Kom je op dag drie en ligt er nog steeds één laag terwijl de tegels al klaarstaan, dan is het wel een fout.',
  },
  {
    wanneer: 'Moment 3: na de oplevering',
    wat: 'Giet een halve emmer water midden in de douche. Binnen ongeveer 30 seconden hoort alles naar de afvoer weg te zijn. Dit test het afschot en niet de afdichting, maar water dat blijft staan is de eerste voorwaarde voor een lek en het is de enige test die je zelf kunt doen zonder iets open te breken.',
  },
]

const stemmen = [
  {
    tekst: 'Zorg voor een goede afschot naar je douchegoot toe.',
    bron: 'r/Klussers, Reddit',
    href: 'https://www.reddit.com/r/Klussers/comments/1rbimoo/douche_waterdicht_maken/',
  },
  {
    tekst:
      'Kimband. Net mijn douche opnieuw gedaan en in een huis met een houten balkenconstructie neem ik gewoon geen enkel risico. Heb dus alle delen die nat kunnen worden met kimband afgedicht.',
    bron: 'r/Klussers, Reddit',
    href: 'https://www.reddit.com/r/Klussers/comments/18qoybp/douchewanden_zonder_tegels_hoe_maak_je_ze/',
  },
  {
    tekst: 'Badkamer waterdicht maken: waarom doen wij het anders dan in andere landen?',
    bron: 'r/Klussers, Reddit, titel van een discussie',
    href: 'https://www.reddit.com/r/Klussers/comments/1tjgrym/badkamer_waterdicht_maken_waarom_doen_wij_het/',
  },
  {
    tekst: 'Met wat heb je de naden dichtgesmeerd? En hoe zit die aansluiting op het oude tegelwerk?',
    bron: 'r/Klussers, Reddit, reactie op een foto van een half afgedichte douche',
    href: 'https://www.reddit.com/r/Klussers/comments/1rbimoo/douche_waterdicht_maken/',
  },
  {
    tekst: 'Uiteraard dient eerst de ruimte waterdicht gemaakt te worden.',
    bron: 'Werkspot, aanvraag "Badkamer waterdicht maken + betegelen"',
    href: 'https://www.werkspot.nl/',
  },
]

const faqs = [
  {
    q: 'Is een waterdichte laag onder mijn tegels wettelijk verplicht?',
    a: 'Nee, en dat lees je nergens. Het Besluit bouwwerken leefomgeving stelt aan de binnenkant van een badruimte één eis, en dat is beperkte wateropname van de wand: tot 1,2 meter boven de vloer, en bij het bad of de douche tot 2,1 meter over een lengte van minstens 3 meter (artikel 4.120). Bij een bestaande badkamer is die ondergrens 1 meter (artikel 3.65). Een keramische tegel voldoet daar zelf al aan. Waar het besluit wél het woord waterdicht gebruikt, in artikel 4.118, gaat het over constructies die vocht van búiten moeten weren: de gevel, de vloer boven de kruipruimte. Er staat nergens dat er onder je douchetegels een afdichtingslaag hoort. Dat maakt de laag niet zinloos, integendeel, maar het verklaart wel waarom hij in Nederland zo vaak wordt overgeslagen: niemand controleert erop.',
  },
  {
    q: 'Zijn een goede voeg en een nette kitrand niet genoeg?',
    a: 'Niet op de plek waar het water dagelijks staat. Een cementvoeg neemt water op; Sani4comfort schrijft het precies zo: de voegen tussen tegels zijn meestal niet waterdicht. En kit is een slijtdeel. Kiwitz vat het samen met "geen enkele kit blijft voor altijd in perfecte conditie", en dat is ook precies waarom ik op kitwerk 1 jaar garantie geef en op tegel- en voegwerk 5 jaar. Zolang de afdichting eronder ligt, is een scheurtje in de kit een onderhoudsklusje. Ligt de afdichting er niet, dan is datzelfde scheurtje het begin van een lek.',
  },
  {
    q: 'Moet de hele badkamer afgedicht worden of alleen de douche?',
    a: 'Voor de meeste badkamers is het antwoord: de natte zone altijd, de rest naar situatie. De natte zone is de douchevloer plus de wanden binnen het sproeibereik van de douchekop, inclusief de hoeken en de doorvoeren daar. De hele vloer meenemen is verstandig als de badkamer op een verdieping ligt of op een houten balkenvloer, want daar merk je een lek pas aan het plafond eronder. De wand bij de wastafel hoeft meestal niet. Waar de grens ligt, is een keuze, en die keuze hoort in de offerte te staan en niet in het hoofd van de tegelzetter.',
  },
  {
    q: 'Mijn tegels liggen er al. Kan het achteraf nog?',
    a: 'Niet zonder de tegels eruit te halen, want de laag hoort eronder. Wat wél kan is het onderhoud bijhouden: kitranden vervangen zodra ze los of grauw worden, en een cementvoeg in de douchehoek eruit halen en vervangen door siliconenkit, want een harde voeg scheurt op de plek waar twee vlakken bewegen. Dat is de afwerking repareren, niet de waterkering aanleggen. Zie je bruine of donkere plekken op het plafond of de wand onder de badkamer, dan ben je voorbij het punt van onderhoud en is opengaan het enige eerlijke antwoord.',
  },
  {
    q: 'Hoe weet ik of er in mijn huidige badkamer een afdichting zit?',
    a: 'Zonder slopen weet je het niet met zekerheid, en dat is precies het probleem met deze laag. Drie aanwijzingen helpen. Eén: de bouwperiode. Hoe ouder de badkamer, hoe kleiner de kans. Twee: de opleverfoto’s of de oude offerte, als je die nog hebt; staat er geen post voor afdichting op, dan is hij er waarschijnlijk niet. Drie: een cementvoeg in de hoek tussen wand en vloer in de douche. Dat is een teken dat er niet volgens een afdichtingssysteem is gewerkt, want in die hoek hoort kit.',
  },
  {
    q: 'Hoe lang moet de afdichting drogen voordat er getegeld mag worden?',
    a: 'Tussen de twee lagen afdichtingspasta zit droogtijd, vaak 24 uur. Daarna is de laag doorgaans direct betegelbaar met een flexibele tegellijm; Easy Drain schrijft dat over zijn eigen membraan zo op. De precieze tijden staan op het technische blad van het systeem dat gebruikt wordt, en ze lopen op bij lage temperatuur en hoge luchtvochtigheid, wat in een net gestripte badkamer in november de normale situatie is. Wanneer je daarna weer op de vloer mag en wanneer de vloerverwarming aan mag, is een aparte klok.',
  },
  {
    q: 'Wat kost het extra?',
    a: 'Ik zet geen bedrag per vierkante meter op deze site, omdat het afhangt van de zone die je afdicht, het aantal hoeken en doorvoeren, de ondergrond en de afvoer die erin komt. Wat ik wel doe: het als eigen regels in de offerte zetten, zodat je ziet waar het geld heen gaat. Je krijgt een gespecificeerde offerte, zonder kleine lettertjes, binnen 5 dagen. Neem bedragen van vergelijkings- en leadplatforms niet over als mijn prijs.',
  },
  {
    q: 'Mijn badkamer ligt op een houten verdiepingsvloer. Is dat anders?',
    a: 'Ja, op twee manieren. De constructie beweegt meer dan beton, dus de aansluitingen krijgen meer te verduren en de band in de hoeken is daar geen luxe. En de gevolgen van een lek zijn groter, want het water komt in de balklaag en op het plafond eronder. Op een houten ondervloer spelen bovendien eisen aan de plaat en aan de doorbuiging die losstaan van de waterkering.',
  },
]

export default function BadkamerWaterdichtMakenPage() {
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
              { name: 'Badkamer waterdicht maken', url },
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
            <span className="text-primary-600">Waterdicht maken</span>
          </nav>

          <div className="mt-12 max-w-3xl">
            <div className="eyebrow">Vraag uit de praktijk</div>
            <h1
              id="hoe-wordt-mijn-badkamer-waterdicht-gemaakt"
              className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-primary-900 sm:text-5xl"
            >
              Hoe wordt mijn badkamer waterdicht gemaakt?
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-primary-900">
              Niet door de tegels. Een badkamer wordt waterdicht gemaakt door een laag die
              eronder zit: een voorstrijk, kimband in elke binnenhoek, manchetten om de
              leidingdoorvoeren en daaroverheen twee lagen afdichtingspasta. Pas daarna gaan de
              lijm en de tegels erop. Tegelwerk, voegwerk en kit zijn de afwerking, niet de
              waterkering.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-primary-600">
              Daarmee is de vraag technisch beantwoord en begint het echte probleem. Zodra de
              tegels erop liggen is die laag onzichtbaar, en niemand controleert er ooit op. Op
              deze pagina staat daarom niet alleen hoe het gaat, maar ook wat de bouwregels
              werkelijk eisen, waar de laag wel en niet hoort, wat er op je offerte moet staan en
              op welke drie momenten je nog met eigen ogen kunt zien dat hij er ligt.
            </p>

            <p className="mt-8 text-sm text-primary-500">
              Jaap van Wonderen, tegelzetter in Breda · geschreven 15 september 2026 · bronnen bij
              elk getal en elke regel, met datum
            </p>
          </div>
        </div>
      </section>

      {/* ─── DE LAGEN ─────────────────────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">De opbouw</div>
          <h2 id="de-opbouw-van-een-waterdichte-badkamer" className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Negen lagen, en maar één ervan houdt water tegen
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Elk stappenplan dat je online vindt somt dezelfde handelingen op. Wat er zelden bij
            staat is wat elke laag nu eigenlijk doet, en vooral: wat hij niet doet. Die tweede
            kolom is waar het misgaat, want bijna iedereen denkt dat de tegel of de voeg het werk
            doet.
          </p>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                De lagen van een waterdichte badkamer, van onder naar boven, met wat elke laag wel
                en niet doet
              </caption>
              <thead>
                <tr className="border-y border-mist">
                  <th scope="col" className="py-4 pr-4 text-sm font-semibold text-primary-900">Laag</th>
                  <th scope="col" className="py-4 pr-4 text-sm font-semibold text-primary-900">Wat hij doet</th>
                  <th scope="col" className="py-4 text-sm font-semibold text-primary-900">Wat hij niet doet</th>
                </tr>
              </thead>
              <tbody>
                {lagen.map((l) => (
                  <tr key={l.laag} className="border-b border-mist align-top">
                    <th scope="row" className="py-5 pr-4 text-base font-medium text-primary-900">{l.laag}</th>
                    <td className="py-5 pr-4 text-sm leading-relaxed text-primary-600">{l.doet}</td>
                    <td className="py-5 text-sm leading-relaxed text-primary-500">{l.nietDoet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-primary-500">
            De volgorde en de onderdelen komen uit de systeembeschrijvingen van Kiwitz en Easy
            Drain en uit het advies van Kemp Tegelwerk. Die laatste is er het duidelijkst over:
            een waterkering bestaat uit minimaal twee lagen smeerfolie met versterking in hoeken
            en doorvoeren, met droogtijd ertussen, en een dunne bouwmarktlaag is dat niet.
          </p>
        </div>
      </section>

      {/* ─── WAT DE REGELS EISEN ──────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Wat er echt in de wet staat</div>
          <h2 id="is-waterdichting-wettelijk-verplicht" className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            De bouwregels eisen geen afdichtingslaag onder je tegels
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-primary-900">
                Dit is de zin die je op geen van de best vindbare pagina&apos;s vindt, en het is
                ongemakkelijk om hem als tegelzetter op te schrijven. Het Besluit bouwwerken
                leefomgeving, de geldende bouwregels, stelt aan de binnenzijde van een badruimte
                precies één eis: de wand mag weinig water opnemen. Tot 1,2 meter boven de vloer,
                en bij de opstelplaats van een bad of douche tot 2,1 meter over een lengte van
                minstens 3 meter (artikel 4.120). Voor een bestaande badkamer is die ondergrens
                1 meter (artikel 3.65).
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Het woord waterdicht staat er wel, in artikel 4.118, maar dat gaat over iets
                anders: constructies die vocht van búiten moeten tegenhouden, zoals de gevel en de
                vloer boven de kruipruimte. Er is geen artikel dat voorschrijft dat er onder je
                douchetegels een afdichtingslaag zit.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Dat is geen vrijbrief om hem weg te laten. Het verklaart alleen waarom hij in
                Nederland zo vaak ontbreekt: er is geen keuring, geen inspecteur en geen
                oplevertoets die ernaar kijkt. De enige die erop kan letten ben jij, en dat kan
                maar op drie momenten. Die staan verderop.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Tot welke hoogte de bouwregels betegeling eisen, en waar smaak begint, staat
                uitgewerkt op{' '}
                <Link href="/badkamer-betegelen-tot-plafond" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
                  de pagina over betegelen tot het plafond
                </Link>
                .
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="border-l border-mist pl-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                  Hoe ik dit gecontroleerd heb
                </div>
                <p className="mt-4 text-base leading-relaxed text-primary-600">
                  Ik heb de artikelen 3.65, 4.118 en 4.120 op wetten.overheid.nl gelezen in de
                  geldende tekst van 1 januari 2026, en niet overgeschreven uit een adviesartikel.
                  Dat is geen overdreven zorgvuldigheid: adviespagina&apos;s over dit onderwerp
                  verwijzen nog volop naar het Bouwbesluit 2012, en de nummers die daarbij horen
                  kloppen niet meer.
                </p>
                <p className="mt-4 text-base leading-relaxed text-primary-600">
                  Lees ze zelf na als je wilt. De teksten zijn kort en er zit geen uitleg tussen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WAAR HET HOORT ───────────────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Per vlak, niet per ruimte</div>
          <h2 id="waar-hoort-de-waterdichting-wel-en-niet" className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Waar de laag hoort, en waar hij niets oplost
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            &quot;De badkamer waterdicht maken&quot; is geen opdracht die je aan een hele ruimte
            geeft. Water komt niet overal, en waar het niet komt voegt een afdichtingslaag niets
            toe behalve kosten. Zo verdeel ik het.
          </p>

          <dl className="mt-12 divide-y divide-mist border-y border-mist">
            {perVlak.map((v) => (
              <div key={v.geval} className="grid gap-2 py-6 sm:grid-cols-12 sm:gap-6">
                <dt className="sm:col-span-3">
                  <span className="text-sm font-semibold uppercase tracking-[0.12em] text-accent-600">
                    {v.oordeel}
                  </span>
                </dt>
                <dd className="text-base leading-relaxed text-primary-600 sm:col-span-9">{v.geval}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-primary-600">
            Eén uitzondering die vaak vergeten wordt: als er over bestaande tegels heen wordt
            getegeld, blijft de oude waterkering liggen waar hij lag, namelijk onder de oude laag.
            Wat dat betekent voor de hoogte en het afschot van een douchevloer staat op{' '}
            <Link href="/tegelen-over-bestaande-tegels" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
              de pagina over tegelen over bestaande tegels
            </Link>
            . En ligt de badkamer op een houten vloer, lees dan ook{' '}
            wat er bij tegelen op een houten ondervloer geldt
            , want daar komen eisen aan de plaat en de doorbuiging bovenop deze.
          </p>
        </div>
      </section>

      {/* ─── DE DRIE MOMENTEN ─────────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Het probleem met deze laag</div>
          <h2 id="hoe-controleer-ik-of-de-waterdichting-er-ligt" className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Drie momenten waarop je hem nog kunt zien
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Van alles wat er in een badkamer gebeurt is dit het enige onderdeel waarvan je
            achteraf niet kunt vaststellen of het is gedaan. Een scheve tegel zie je. Een grauwe
            voeg zie je. Een ontbrekende waterkering merk je pas als het plafond eronder vlekt,
            en dan is de badkamer al jaren oud. Daarom: kijk terwijl het kan.
          </p>

          <ol className="mt-12 space-y-8">
            {momenten.map((m, i) => (
              <li key={m.wanneer} className="grid gap-3 border-t border-mist pt-8 sm:grid-cols-12 sm:gap-8">
                <div className="font-display text-3xl font-bold tabular-nums text-accent-600 sm:col-span-1">
                  {i + 1}
                </div>
                <div className="sm:col-span-11">
                  <h3 className="font-display text-xl font-semibold text-primary-900">{m.wanneer}</h3>
                  <p className="mt-3 text-base leading-relaxed text-primary-600">{m.wat}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-2xl bg-clay p-8">
            <h3 className="font-display text-lg font-semibold text-primary-900">
              Bewaar die foto&apos;s van moment 1
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-600">
              Niet uit wantrouwen, maar omdat je ze over vijf jaar nodig kunt hebben. Ontstaat er
              dan een vochtprobleem, dan gaat het gesprek meteen over de vraag waar het water
              vandaan komt, en een foto van de afdichtingslaag in de hoeken is dan het enige
              bewijs dat hij er lag. Wat er gebeurt als er later tegels loskomen of een voeg
              scheurt, en wie dan herstelt en betaalt, staat op{' '}
              <Link href="/losse-tegels-en-scheurende-voegen" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
                de pagina over losse tegels en scheurende voegen
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ─── OP DE OFFERTE ────────────────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Voordat je tekent</div>
          <h2 id="wat-hoort-er-over-waterdichting-op-de-offerte" className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Vijf regels die op de offerte horen te staan
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Vergelijkingssites adviseren kopers in deze regio letterlijk om na te vragen of
            voorbehandeling en waterdichting in de offerte zijn opgenomen. Dat is goed advies,
            maar het is een halve tip: niemand vertelt erbij hoe het antwoord eruit hoort te zien.
            Dit is hoe.
          </p>

          <ol className="mt-12 space-y-8">
            {offerteregels.map((o, i) => (
              <li key={o.kop} className="grid gap-3 border-t border-mist pt-8 sm:grid-cols-12 sm:gap-8">
                <div className="font-display text-3xl font-bold tabular-nums text-accent-600 sm:col-span-1">
                  {i + 1}
                </div>
                <div className="sm:col-span-11">
                  <h3 className="font-display text-xl font-semibold text-primary-900">{o.kop}</h3>
                  <p className="mt-3 text-base leading-relaxed text-primary-600">{o.uitleg}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-primary-600">
            Deze vijf regels zijn niet van mij persoonlijk. Ze werken bij elke tegelzetter die je
            spreekt, ook als dat iemand anders is dan ik. Krijg je ze niet op papier, dan weet je
            genoeg.
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Twee afspraken horen er in dezelfde offerte bij en gaan over de uitvoering in plaats van
            over de afdichting: op welke afgewerkte vloerhoogte er gewerkt wordt, en hoe het
            tegelwerk wordt ingedeeld. Waarom dat juist bij de aansluiting tussen wand en vloer
            uitmaakt staat op{' '}
            <Link href="/eerst-vloer-of-wand-betegelen" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
              de pagina over eerst de vloer of eerst de wand betegelen
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ─── WIE LEGT HEM AAN ─────────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">De vraag die niemand stelt</div>
          <h2 id="wie-legt-de-waterdichting-aan" className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Wie legt die laag eigenlijk aan?
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-primary-900">
                De waterkering ligt precies op de naad tussen vakmensen. De loodgieter zet de
                afvoer, de timmerman of stukadoor levert de wand op, de tegelzetter begint als
                alles klaar is. De afdichting hoort daar ergens tussenin, en in een klus met drie
                partijen is dat vaak niemands taak. Dat is geen kwade wil, het is een gat in de
                planning.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Bij mij bestaat die naad niet. Ik ben een eenmanszaak uit Breda, actief sinds
                2022, en ik voer de klussen zelf uit. Geen onderaannemers, geen tussenpersonen,
                geen wisselende ploegen. Dat betekent dat de persoon die de ondergrond aantreft
                dezelfde is als de persoon die de tegels erop zet, en dat ik dus ook zelf zie wat
                er onder ligt.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Wat er in jouw badkamer nodig is, zeg ik pas nadat ik gekeken heb. Een badkamer
                op een betonvloer met een gemetselde wand vraagt iets anders dan een badkamer op
                een houten verdiepingsvloer. Wat op deze pagina staat is de vakkennis met de
                bronnen erbij; het advies voor jouw ruimte komt na de opname, en het komt op
                papier. Meer over hoe een complete renovatie bij mij loopt staat op{' '}
                <Link href="/diensten/badkamer-renovatie" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
                  de pagina over badkamer renovatie
                </Link>
                .
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-clay p-8">
                <h3 className="font-display text-lg font-semibold text-primary-900">
                  Wat mijn garantie hier wel en niet over zegt
                </h3>
                <p className="mt-4 text-base leading-relaxed text-primary-600">
                  Ik geef 5 jaar garantie op tegelwerk en voegwerk en 1 jaar op kitwerk. Dat
                  verschil is geen slordigheid. Kit is het onderdeel dat als eerste veroudert, en
                  op de plek waar twee vlakken bewegen hoort hij te zitten in plaats van een harde
                  voeg. Een jaarlijkse blik op de kitranden hoort bij een badkamer zoals een
                  jaarlijkse blik op de dakgoot bij een huis hoort.
                </p>
                <p className="mt-4 text-base leading-relaxed text-primary-600">
                  Welke situaties buiten de garantie en buiten de aansprakelijkheid vallen staat
                  open en compleet in{' '}
                  <Link href="/algemene-voorwaarden" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
                    mijn algemene voorwaarden
                  </Link>
                  . Lees ze voordat je tekent, bij mij of bij iemand anders.
                </p>
                <p className="mt-4 text-base leading-relaxed text-primary-600">
                  Ik werk in{' '}
                  <Link href="/werkgebied" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
                    Breda en omstreken
                  </Link>
                  . Je krijgt een gespecificeerde offerte, zonder kleine lettertjes, binnen
                  5 dagen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WAT BEWONERS ZEGGEN ──────────────── */}
      <section className="bg-clay py-20 lg:py-28">
        <div className="container-tight">
          <div className="eyebrow">Zoals de vraag echt gesteld wordt</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Op de fora twijfelt men niet of het moet, maar hoe ver
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Dat is het opvallendste aan deze vraag. Niemand vraagt of het nodig is. De vraag is
            hoe ver je gaat: alleen de hoeken, de hele natte cel, of de complete badkamer. Er
            loopt zelfs een discussie over de vraag waarom het in Nederland anders gaat dan
            elders. Deze zinnen zijn niet van mij; ze staan openbaar op Nederlandse klusfora en
            ik citeer ze zonder naam.
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
            De klok die na het tegelen gaat lopen is een aparte: wanneer je weer op de vloer mag
            en wanneer de vloerverwarming aan mag, staat in{' '}
            <Link href="/tegelvloer-belopen-en-vloerverwarming-aanzetten" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
              het overzicht van droogtijden en wachttijden
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
              'Een bedrag voor het waterdicht maken. Dat hangt af van de zone, het aantal hoeken en doorvoeren, de ondergrond en de afvoer, en de bedragen die je op vergelijkings- en leadplatforms vindt zijn niet mijn prijs.',
              'Welk merk afdichtingssysteem in jouw badkamer komt. Dat kies ik op de ondergrond die ik aantref, niet vooraf op een webpagina. De merken die hierboven genoemd worden staan er omdat hun systeembeschrijvingen openbaar en controleerbaar zijn, niet omdat ik ze verkoop.',
              'Een eigen meting van het afschot of de opbouwhoogte in jouw douche. De 1 tot 2 procent hierboven is de vuistregel uit de vakliteratuur, geen opname van jouw vloer. Die doe ik ter plekke met een rei en een waterpas.',
              'Een oordeel over kant-en-klare tegelbare douche-elementen en douchebakken. Dat is een andere techniek met eigen voorschriften, en die heb ik voor deze pagina niet onderzocht.',
              'Hoe vaak badkamers in Nederland lekken. Eén leverancier noemt één op de tien woningen, maar zonder meting, periode of bron erbij, dus dat getal neem ik niet over.',
              'Hoe je een bestaande afdichting repareert zonder de tegels eruit te halen. Dat kan niet, en een pagina die suggereert van wel doet je geen plezier.',
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
            <Link href="/badkamer-betegelen-tot-plafond" className="btn-secondary">
              Tot het plafond betegelen?
            </Link>
            <Link href="/tegelen-over-bestaande-tegels" className="btn-secondary">
              Over bestaande tegels heen?
            </Link>
            <Link href="/losse-tegels-en-scheurende-voegen" className="btn-secondary">
              Tegels los of voeg gescheurd?
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────── */}
      <section className="bg-paper py-20 lg:py-24">
        <div className="container-tight rounded-3xl bg-primary-900 p-12 text-center text-paper lg:p-16">
          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl">
            Zal ik even meekijken wat jouw badkamer nodig heeft?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-primary-300">
            Stuur een paar foto&apos;s van de ruimte en de afmetingen via WhatsApp. Je krijgt
            binnen 1 werkdag antwoord, en in de offerte staat per regel wat er onder de tegels
            gebeurt.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${business.phoneE164}`} className="btn-accent">
              <Phone className="h-4 w-4" /> {business.phone}
            </a>
            <a
              href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                'Hoi Jaap, ik wil graag weten hoe mijn badkamer waterdicht gemaakt wordt. Kun je meekijken?'
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
