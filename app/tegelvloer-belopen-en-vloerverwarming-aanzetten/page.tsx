import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Phone, MessageCircle, ArrowUpRight } from 'lucide-react'
import { business } from '@/content/business'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

/**
 * ANTWOORDEENHEID. Vraag: "Hoe lang moet ik wachten voor ik op de vloer mag lopen en
 * wanneer mag de vloerverwarming aan?"
 * Contract a3b89424-b9dc-40ba-9f94-4794e1f597ca, run schrijver-20260910-1635.
 *
 * WAAROM DEZE PAGINA BESTAAT (gemeten, geen aanname). Op 10 september 2026 is de vraag
 * gemeten met motor/scripts/serp.mjs. Brave gaf op de letterlijke vraagtekst en op de
 * koperszoekopdracht "wanneer mag vloerverwarming aan na tegels leggen" tweemaal dezelfde
 * bezitter: vloerverwarming-direct.nl. DuckDuckGo gaf een snelheidslimiet (http 202) en is
 * dus NIET gemeten; Google is met dit instrument niet meetbaar en staat als ongemeten.
 * wonderentegelwerken.nl stond in geen enkele gemeten top-10.
 *
 * DE VONDST. De vraag heeft twee helften en de bovenlaag beantwoordt er maar een van.
 * Geen van de vier best gelezen antwoorden over vloerverwarming (Vloerverwarming Direct,
 * Coba, Omnicol, Tegelhuis) zegt iets over wanneer je op de vloer mag lopen. En op de
 * helft die zij wel behandelen spreken ze elkaar tegen: 1 week, 7 dagen, 2 weken,
 * 3-4 weken, 4 weken en 6 weken staan alle zes op de eerste pagina van dezelfde vraag.
 * Precies een bron (Coba) noemt de reden van dat verschil: de wachttijd hangt niet aan de
 * tegel maar aan de dekvloer eronder. Dat onderscheid is de kern van deze pagina.
 *
 * BRONNEN VAN DE GETALLEN (wet art. 1.1, niets verzinnen). Alle gelezen op 10 september 2026:
 *  - TBA (Technisch Bureau Afbouw), kennispaper 3 "Is een opstookprotocol nog wel actueel?",
 *    maart 2023, en NOA-kennisbank "Ingebruiknameprotocol of opstook- en afkoelprotocol"
 *    (TBA-richtlijn 2.1, september 2019). Dit is de normatieve onderlaag van het vak en
 *    komt op geen enkele pagina uit de gemeten top-10 voor.
 *  - Coba, FAQ tegellijm, "Wanneer kan ik de vloerverwarming aanzetten na tegelen".
 *  - PCI Flexmoertel S1 en S2, productdocumentatie via NBD-Online (Nederlandse
 *    Bouwdocumentatie).
 *  - Omnicol blog, "Vloerverwarming en een afwerking met tegels" en "Tegellijm en tijd".
 *  - Vloerverwarming Direct (bezitter van de vraag op Brave) en Tegelhuis, als vindplaats
 *    van de afwijkende termijnen.
 *  - Klusidee en het Radar-forum, voor de letterlijke woorden van bewoners.
 *
 * EIGEN GEGEVENS. Getekende feiten (motor_feiten, eigenaar_akkoord=true): de werkwijze bij
 * vloerverwarming (wonderen-vloerverwarming), vloertegelwerk inclusief lijm en voorlijm
 * (wonderen-dienst-vloertegelwerk), de garantietermijnen (wonderen-garantie), de eenmanszaak
 * (wonderen-persoon-jaap), de reactietijd (wonderen-reactietijd) en het werkgebied
 * (wonderen-werkgebied-kern). Daarnaast artikel 6, 9 en 12 uit de eigen algemene voorwaarden,
 * VERSIE 2 (5 okt 2026), samengevat met een link naar /algemene-voorwaarden.
 *
 * GEEN BEDRAGEN, GEEN MERK. Er is geen prijsfeit met eigenaar-akkoord, dus staat er geen
 * bedrag op deze pagina. Er is geen feit over welk lijmmerk wordt gebruikt, dus wordt er
 * geen merk aan het werk van Van Wonderen gekoppeld; de fabrikantennamen staan uitsluitend
 * bij hun eigen gepubliceerde getallen.
 *
 * Citaten van bewoners zijn openbare forumberichten, met bronlink en zonder naam.
 */

const url = `${business.url}/tegelvloer-belopen-en-vloerverwarming-aanzetten`

export const metadata: Metadata = {
  title: 'Wanneer mag je op een nieuwe tegelvloer lopen en de vloerverwarming aan?',
  description:
    'Er lopen twee klokken. De lijm bepaalt wanneer je mag lopen, de dekvloer bepaalt wanneer de verwarming aan mag. Waarom de adviezen online van 7 dagen tot 6 weken lopen, met de bronnen erbij.',
  alternates: { canonical: '/tegelvloer-belopen-en-vloerverwarming-aanzetten' },
  openGraph: {
    title:
      'Hoe lang moet ik wachten voor ik op de vloer mag lopen en wanneer mag de vloerverwarming aan? | Van Wonderen Tegelwerken',
    description:
      'De wachttijd voor lopen hangt aan de lijm, de wachttijd voor de vloerverwarming hangt aan de dekvloer. Uitgelegd met de fabrikantengetallen en de branchrichtlijn erbij, door een tegelzetter uit Breda.',
    images: ['/images/projects/portfolio-2025-07-laag-13.webp'],
  },
}

const faqs = [
  {
    q: 'Ik moet er wel langs om bij de wc of de slaapkamer te komen. Kan dat?',
    a: 'Zeg dat vooraf, dan wordt er in etappes gelegd of blijft er een loopstrook open die later dichtgaat. Moet je er toch overheen voordat de lijm zijn tijd heeft gehad, loop dan midden op de tegels en niet op de randen of de hoeken. Dat is precies wat tegelzetters elkaar op Klusidee ook aanraden: "Wel moet je dan op het midden van de tegels lopen." Op een rand of een hoek staan geeft de tegel een hefboom, en dat is de beweging waar een nog niet uitgeharde lijm niet tegen kan.',
  },
  {
    q: 'Wanneer mag ik weer douchen in een pas betegelde badkamer?',
    a: 'Daar telt een derde klok mee: de voeg en de kit. Een voegmortel heeft zijn eigen uithardingstijd en de kitnaad langs de vloer-wandaansluiting moet doorgehard zijn voordat er water tegenaan komt. De volgorde is dus lopen, dan voegen, dan kitten, en dan pas water. Hoe lang die laatste stap duurt staat op het technische blad van de gebruikte voeg en kit; vraag ernaar bij de oplevering, want het scheelt in de praktijk een dag of meer. Op mijn kitwerk zit 1 jaar garantie en op tegel- en voegwerk 5 jaar, en die termijn begint bij een naad die de tijd heeft gehad.',
  },
  {
    q: 'Wanneer mag er een kast, een wasmachine of een bad op?',
    a: 'Later dan je zou denken, en dit is het getal dat het vaakst wordt overgeslagen. Omnicol schrijft in de toelichting onder het eigen artikel over tegellijm dat de tegelvloer na 48 uur volledig belastbaar is, maar dat je voor puntlasten zoals zwaar meubilair 7 dagen aanhoudt. Een wasmachine op vier voetjes, een bad vol water en een kast met een boekenwand zijn allemaal puntlasten. Ze drukken hun gewicht op een paar vierkante centimeter, en dat is een ander soort belasting dan iemand die eroverheen loopt.',
  },
  {
    q: 'Mijn vloerverwarming stond aan toen de tegels erop gingen. Is dat erg?',
    a: 'Dat hoort niet en het is de moeite waard om het te melden. Een vloer die tijdens het lijmen warm is, trekt het water sneller uit de lijm dan de lijm kan afbinden, en dan hecht hij minder dan hij zou moeten. De gangbare werkwijze is: de verwarming een aantal dagen voor het tegelen uit, de vloer op omgevingstemperatuur laten komen, en pas na het tegelen weer opbouwen. Op de klusfora is dat ook de eerste vraag die ervaren tegelzetters stellen. Is het bij jou toch gebeurd, laat dan iemand met een muntje over de vloer tikken en luisteren of er hol klinkende plekken zijn; wat je dan hoort en wat je ermee kunt staat op de pagina over losse tegels en scheurende voegen.',
  },
  {
    q: 'Moet ik een opstookprotocol doorlopen voordat de verwarming normaal aan mag?',
    a: 'Dat hangt af van je dekvloer, en het antwoord is de laatste jaren veranderd. Het klassieke opstook- en afkoelprotocol (TBA-richtlijn 2.1 uit september 2019) is ontworpen voor een dekvloer die los op isolatie ligt, in rechthoekige velden met dilataties. TBA schrijft in kennispaper 3 uit maart 2023 dat die vloer "vrijwel nooit gerealiseerd" wordt en dat het protocol op een hechtende dekvloer juist schade veroorzaakt. Het advies is nu een ingebruiknameprotocol: langzaam opwarmen, geen afkoelfase. Wat er bij jou onder ligt weet je installateur of de aannemer die de dekvloer heeft gestort; vraag het daar, want dit is de vraag die het verschil maakt tussen dagen en weken.',
  },
  {
    q: 'Kan ik de vloerverwarming aanzetten om de lijm sneller te laten drogen?',
    a: 'Nee, en het is een van de weinige dingen op deze pagina die echt fout kunnen gaan. Lijm en voeg hebben hun water nodig om te verharden. Warmte van onderaf drijft dat water eruit voordat de chemie klaar is, met een zwakkere hechting als gevolg. Bovendien zet een tegel die van onderaf wordt verwarmd terwijl de lijm nog beweegt zich vast in een spanning die er niet hoort te zitten. Een bewoner op Klusidee vat het kort samen: "Maar geen vloerverwarming meteen aan gaan zetten, want dat is ook niet goed voor de lijm en voeg."',
  },
  {
    q: 'Het is koud in huis. Duurt het dan langer?',
    a: 'Ja. Temperatuur en luchtvochtigheid horen bij de zes factoren die Omnicol noemt als bepalend voor de droogtijd, samen met de zuigkracht van de ondergrond, het type tegel, het type lijm en de laagdikte. Op de fora staat het praktischer: "Hoe kouder, hoe langer dat het duurt." In een onverwarmde nieuwbouw in november gelden de tabelgetallen dus niet, en in een verbouwing waar de kachel loeit ook niet. Bij twijfel is de veilige route wachten en niet stoken.',
  },
  {
    q: 'Wat gebeurt er als ik toch te vroeg stook?',
    a: 'Twee dingen, en ze zijn niet omkeerbaar. De lijm die nog niet klaar is verliest hechting, wat later terugkomt als hol klinkende of loszittende tegels. En de dekvloer zet uit terwijl hij dat nog niet mag, wat spanning geeft op de plekken waar geen dilatatie zit: deurdoorgangen, binnenhoeken, kolommen. TBA beschrijft in kennispaper 3 precies dat mechanisme, inclusief wat er daarna gebeurt bij het afkoelen. In mijn algemene voorwaarden staat in artikel 12 dat de garantie vervalt als instructies niet worden opgevolgd, en dit is zo ongeveer de enige instructie die bij een tegelvloer echt telt.',
  },
  {
    q: 'Waarom staat er op deze pagina geen getal dat voor iedereen geldt?',
    a: 'Omdat het niet bestaat. De zes termijnen in de tabel hierboven komen allemaal van serieuze partijen en ze verschillen van 7 dagen tot 6 weken, omdat ze over verschillende situaties gaan. Wie er een enkel getal van maakt, kiest stilzwijgend een van die situaties en hoopt dat het de jouwe is. Het enige eerlijke antwoord bestaat uit twee vragen: welke lijm ligt er onder jouw tegels, en is de dekvloer eronder nieuw of bestaand. Beide antwoorden zijn opvraagbaar, en samen leveren ze wel een getal op.',
  },
]

const klokken = [
  {
    laag: 'Klok 1',
    kop: 'De lijm bepaalt wanneer je mag lopen',
    body:
      'Onder de tegel zit een cementgebonden lijm die water nodig heeft om te verharden. Zolang die niet is afgebonden, verschuift een tegel waar je op staat een fractie, en die fractie komt jaren later terug als een hol klinkende plek. Dit is een kwestie van uren tot een paar dagen, en de exacte tijd staat op het technische blad van de gebruikte lijm.',
  },
  {
    laag: 'Klok 2',
    kop: 'De dekvloer bepaalt wanneer de verwarming aan mag',
    body:
      'Onder de lijm zit de dekvloer met de verwarmingsleidingen erin. Die moet zijn krimp achter de rug hebben voordat hij warm wordt, want krimp en uitzetting tegelijk is wat een vloer laat scheuren. Is die dekvloer net gestort of net ingefreesd, dan is dit een kwestie van weken. Ligt hij er al jaren en is hij eerder verwarmd geweest, dan telt alleen klok 1 nog mee.',
  },
]

const termijnen = [
  {
    bron: 'Coba (lijmfabrikant)',
    situatie: 'Nieuwe tegels op een bestaande dekvloer met vloerverwarming erin',
    termijn: 'na 1 week',
    href: 'https://www.coba.nl/veelgestelde-vragen/veelgestelde-vragen-tegellijm/wanneer-kan-ik-de-vloerverwarming-aanzetten-na-tegelen',
  },
  {
    bron: 'Coba (lijmfabrikant)',
    situatie: 'Nieuwe, hechtend uitgevoerde dekvloer met vloerverwarming erin',
    termijn: 'na 3 tot 4 weken',
    href: 'https://www.coba.nl/veelgestelde-vragen/veelgestelde-vragen-tegellijm/wanneer-kan-ik-de-vloerverwarming-aanzetten-na-tegelen',
  },
  {
    bron: 'Coba (lijmfabrikant)',
    situatie: 'Bestaande vloer waarin sleuven zijn gefreesd voor de leidingen',
    termijn: 'na 3 tot 4 weken',
    href: 'https://www.coba.nl/veelgestelde-vragen/veelgestelde-vragen-tegellijm/wanneer-kan-ik-de-vloerverwarming-aanzetten-na-tegelen',
  },
  {
    bron: 'PCI (productdocumentatie Flexmoertel S1 en S2)',
    situatie: 'Verlijmde keramiek, met de kanttekening dat er geen opstookprotocol nodig is',
    termijn: 'na 7 dagen volledig aan',
    href: 'https://nbd-online.nl/product/16681-pci-flexm%C3%B6rtel-s1-en-s2-tegellijm',
  },
  {
    bron: 'Omnicol (lijmfabrikant)',
    situatie: 'Verlijmde tegels; voor traditioneel in mortel gezette tegels 4 weken',
    termijn: 'na 2 weken',
    href: 'https://blog.omnicol.eu/vloerverwarming-en-een-afwerking-met-tegels/',
  },
  {
    bron: 'Vloerverwarming Direct (webshop, nummer 1 op deze vraag)',
    situatie: 'Tegels op een ingefreesde vloer; op bouwstaal eerst 6 tot 8 weken vóór het tegelen',
    termijn: 'na 4 weken',
    href: 'https://www.vloerverwarming-direct.nl/wanneer+tegels+leggen+en+stoken+na+tegelvloer+infrezen',
  },
  {
    bron: 'Tegelhuis (tegelhandel)',
    situatie: 'Na het leggen van de tegels, zonder onderscheid naar de dekvloer',
    termijn: 'minstens 6 weken',
    href: 'https://tegelhuis.nl/opstookprotocol-vloerverwarming/',
  },
]

const lopen = [
  {
    fase: 'Voorzichtig lopen',
    getal: '12 tot 24 uur',
    toelichting:
      'Tegelzetters onder elkaar op Klusidee: bij een zuigende ondergrond én een zuigende tegel is het na 12 uur beloopbaar en kun je ook voegen; neemt de tegel of de ondergrond geen vocht op, dan reken je 24 uur. Midden op de tegel lopen, niet op de randen.',
    bron: 'Klusidee (vaklieden), Omnicol (factoren)',
  },
  {
    fase: 'Voegen',
    getal: 'vanaf 3 uur bij snelle lijm, anders dezelfde dag of de volgende',
    toelichting:
      'Hangt volledig aan de lijmsoort. Van PCI Flexmoertel S1 Rapid staat in de productdocumentatie dat er na 3 uur kan worden afgevoegd; een gewone flexlijm heeft er beduidend langer voor nodig.',
    bron: 'PCI, productdocumentatie',
  },
  {
    fase: 'Normaal belasten',
    getal: '48 uur',
    toelichting:
      'Vanaf hier mag er normaal over de vloer worden gelopen. Op het forum staat het als "echt belasten, dus trap er op of zware dingen er op zetten, is dan pas na 48 uur mogelijk"; Omnicol noemt in de toelichting onder het eigen artikel dezelfde 48 uur voor een volledig belastbare tegelvloer.',
    bron: 'Omnicol, Klusidee',
  },
  {
    fase: 'Puntlasten',
    getal: '7 dagen',
    toelichting:
      'Een bad vol water, een wasmachine, een kast met inhoud. Omnicol houdt daarvoor 7 dagen aan. Dit is het getal dat op de meeste adviespagina’s ontbreekt, en juist dit is het getal dat over meubels gaat.',
    bron: 'Omnicol',
  },
]

const stemmen = [
  {
    tekst: 'Wat is vreemd dat er geen droogtijd of beloopbaar tijd wordt aangegeven op de zak.',
    bron: 'Klusidee: Beloopbaarheid nieuwe tegels',
    href: 'https://www.klusidee.nl/Forum/topic/beloopbaarheid-nieuwe-tegels.116382/',
  },
  {
    tekst: 'Ik wil niet te snel over de tegels lopen zodat ze los komen.',
    bron: 'Klusidee: Beloopbaarheid nieuwe tegels',
    href: 'https://www.klusidee.nl/Forum/topic/beloopbaarheid-nieuwe-tegels.116382/',
  },
  {
    tekst:
      'Echt belasten, dus trap er op of zware dingen er op zetten, is dan pas na 48 uur mogelijk.',
    bron: 'Klusidee: Beloopbaarheid nieuwe tegels',
    href: 'https://www.klusidee.nl/Forum/topic/beloopbaarheid-nieuwe-tegels.116382/',
  },
  {
    tekst: 'Hoe kouder, hoe langer dat het duurt. Maar geen vloerverwarming meteen aan gaan zetten, want dat is ook niet goed voor de lijm en voeg.',
    bron: 'Klusidee: Beloopbaarheid nieuwe tegels',
    href: 'https://www.klusidee.nl/Forum/topic/beloopbaarheid-nieuwe-tegels.116382/',
  },
  {
    tekst: 'Indien de nieuwe vloer op de oude wordt verlijmt kan men na een week deze al beginnen te verwarmen.',
    bron: 'Radar-forum: Hoelang wachten bij vloerverwarming bij tegelvloer',
    href: 'https://radar-forum.avrotros.nl/overig-huis-tuin-f90/hoelang-wachten-bij-vloerverwarming-bij-tegelvloer-t74554.html',
  },
  {
    tekst: 'Indien de oude vloer eruit gaat en er een hele nieuwe vloer in komt is het nodig om een paar weken te wachten.',
    bron: 'Radar-forum: Hoelang wachten bij vloerverwarming bij tegelvloer',
    href: 'https://radar-forum.avrotros.nl/overig-huis-tuin-f90/hoelang-wachten-bij-vloerverwarming-bij-tegelvloer-t74554.html',
  },
  {
    tekst: 'Wachttijd nieuw of bestaand is 6 weken rust na leggen van de tegels.',
    bron: 'Radar-forum: Hoelang wachten bij vloerverwarming bij tegelvloer',
    href: 'https://radar-forum.avrotros.nl/overig-huis-tuin-f90/hoelang-wachten-bij-vloerverwarming-bij-tegelvloer-t74554.html',
  },
]

const nietBeantwoord = [
  'Het exacte aantal uren voor jouw vloer. Dat staat op twee plekken en geen van beide is een website: het technische blad van de lijm die bij jou is verwerkt, en de gegevens van de dekvloer eronder. Een getal noemen zonder die twee te kennen is precies wat de rest van de zoekresultaten doet.',
  'Wat wachten of herstellen kost. Er staat op deze site geen prijs, ook niet voor herstelwerk, omdat de kosten volledig afhangen van wat er onder de tegel blijkt te zitten.',
  'Of jouw dekvloer droog genoeg is. Restvocht wordt gemeten, niet geschat, en dat is het werk van degene die de dekvloer heeft aangebracht. Vraag hem om de meting en om de datum.',
  'Hoe jouw specifieke verwarmingsinstallatie moet worden ingeregeld. De watertemperaturen en de opbouw daarvan zijn een vraag voor je installateur; TBA en NOA publiceren de richtlijn, maar de knoppen zitten in jouw meterkast.',
]

export default function TegelvloerBelopenPage() {
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
              { name: 'Vloertegelwerk', url: `${business.url}/diensten/vloertegels` },
              { name: 'Vloer belopen en vloerverwarming aanzetten', url },
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
            <Link href="/diensten/vloertegels" className="hover:text-accent-600">Vloertegelwerk</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-600">Vloer belopen en vloerverwarming aanzetten</span>
          </nav>

          <div className="mt-12 max-w-3xl">
            <div className="eyebrow">Vraag uit de praktijk</div>
            <h1
              id="hoe-lang-wachten-voor-lopen-en-wanneer-mag-de-vloerverwarming-aan"
              className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-primary-900 sm:text-5xl"
            >
              Hoe lang moet ik wachten voor ik op de vloer mag lopen en wanneer mag de
              vloerverwarming aan?
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-primary-900">
              Er lopen twee klokken en ze zijn niet even lang. Lopen gaat over de lijm onder de
              tegel: bij een gewone cementgebonden tegellijm is de vloer meestal na 12 tot 24 uur
              voorzichtig beloopbaar en na 48 uur normaal belastbaar, en zware punten zoals een bad
              of een kast wachten een week. De vloerverwarming gaat niet over de tegel maar over de
              dekvloer eronder. Ligt de tegel op een bestaande dekvloer die eerder al warm is
              geweest, dan is het een kwestie van ongeveer een week. Is die dekvloer zelf nieuw of
              net ingefreesd, dan zijn het drie tot zes weken. Dat is de hele reden dat de
              antwoorden op internet zo ver uiteenlopen: ze gaan niet over dezelfde vloer.
            </p>

            <p className="mt-6 text-sm text-primary-500">
              Jaap van Wonderen, tegelzetter in Breda &middot; geschreven 10 september 2026 &middot;{' '}
              termijnen overgenomen uit de gepubliceerde documentatie van lijmfabrikanten en uit{' '}
              <a
                href="https://www.noa.nl/nl/kennisbank/opstook-en-afkoelprotocol/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
              >
                de kennisbank van NOA en TBA
              </a>
              , gelezen op 10 september 2026
            </p>
          </div>
        </div>
      </section>

      {/* ─── TWEE KLOKKEN ─────────────────────── */}
      <section className="bg-clay py-20 lg:py-24">
        <div className="container-tight">
          <div className="max-w-2xl">
            <div className="eyebrow">Het onderscheid dat de rangschikking mist</div>
            <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
              Twee klokken, twee verschillende ondergronden
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-600">
              Bijna elke pagina over deze vraag geeft één termijn, alsof de vloer één laag is. Dat is
              hij niet. De vraag valt uiteen in twee vragen met twee verschillende antwoorden, en wie
              ze door elkaar haalt wacht óf onnodig een maand óf veel te kort.
            </p>
          </div>

          <div className="mt-16 grid gap-10 border-t border-mist pt-10 md:grid-cols-2 md:gap-16">
            {klokken.map((k, i) => (
              <div
                key={k.laag}
                className={
                  i === 0
                    ? ''
                    : 'border-t border-mist pt-10 md:border-l md:border-t-0 md:pl-16 md:pt-0'
                }
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                  {k.laag}
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-primary-900">{k.kop}</h3>
                <p className="mt-6 text-base leading-relaxed text-primary-600">{k.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WANNEER MAG JE LOPEN ─────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Klok 1, in uren</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Van beloopbaar naar belastbaar zit een week
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Deze vier momenten liggen na elkaar en ze worden voortdurend samengevat tot één getal.
            Alle getallen hieronder gelden bij een normale binnentemperatuur en zijn een richtlijn,
            geen belofte: het technische blad van de gebruikte lijm gaat er altijd boven.
          </p>

          <dl className="mt-12 divide-y divide-mist border-y border-mist">
            {lopen.map((l) => (
              <div key={l.fase} className="grid gap-2 py-6 sm:grid-cols-12 sm:gap-6">
                <dt className="sm:col-span-3">
                  <span className="text-lg font-semibold text-primary-900">{l.fase}</span>
                  <span className="mt-1 block font-display text-xl font-bold tabular-nums text-accent-600">
                    {l.getal}
                  </span>
                </dt>
                <dd className="text-base leading-relaxed text-primary-600 sm:col-span-7">
                  {l.toelichting}
                </dd>
                <dd className="text-sm text-primary-500 sm:col-span-2 sm:text-right">{l.bron}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-primary-600">
            Omnicol noemt zes factoren die deze tijden verschuiven: de zuigkracht van de ondergrond,
            het type tegel, het type lijm, de lijmkamgrootte en laagdikte, en de omstandigheden in de
            ruimte. Dat is geen slag om de arm maar de reden dat er geen tabel bestaat die overal
            klopt. Een poreuze cementdekvloer met een poreuze tegel trekt het water er van twee
            kanten uit; een gesloten gietvloer met een dichte porseleinen tegel doet dat niet.
          </p>
        </div>
      </section>

      {/* ─── ZES TERMIJNEN, ZES SITUATIES ─────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Klok 2, en waarom internet het oneens is</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Zeven antwoorden op dezelfde vraag, van 7 dagen tot 6 weken
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Dit staat er op 10 september 2026 op de eerste pagina van deze zoekvraag. Ze komen
            allemaal van partijen die weten waar ze het over hebben, en ze spreken elkaar tegen.
            Kijk niet naar de getallen maar naar de middelste kolom: daar staat waarom.
          </p>

          <dl className="mt-12 divide-y divide-mist border-y border-mist">
            {termijnen.map((t) => (
              <div key={`${t.bron}-${t.termijn}`} className="grid gap-2 py-6 sm:grid-cols-12 sm:gap-6">
                <dt className="sm:col-span-3">
                  <a
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center text-base font-semibold text-primary-900 underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
                  >
                    {t.bron}
                  </a>
                </dt>
                <dd className="text-base leading-relaxed text-primary-600 sm:col-span-6">
                  {t.situatie}
                </dd>
                <dd className="font-display text-lg font-bold tabular-nums text-primary-900 sm:col-span-3 sm:text-right">
                  {t.termijn}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-primary-600">
            Eén partij in deze lijst maakt het onderscheid expliciet. Coba splitst de vraag in drie
            situaties en zegt er in zoveel woorden bij dat de wachttijd bij een verse dekvloer &ldquo;niet
            te maken heeft met de lijm, maar met het feit dat de nieuwe vloer zich eerst moet
            zetten&rdquo;. Daarmee is de spreiding van 7 dagen tot 6 weken verklaard: de korte termijnen
            gaan over de lijm, de lange over de dekvloer. Vraag dus niet hoe lang je moet wachten,
            maar wat er bij jou nieuw is.
          </p>
        </div>
      </section>

      {/* ─── WAT DE BRANCHE ZELF ZEGT ─────────── */}
      <section className="bg-primary-900 py-24 text-paper lg:py-32">
        <div className="container-tight">
          <div className="eyebrow !text-accent-300 before:!bg-accent-300">De richtlijn achter het advies</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-paper sm:text-4xl">
            Het opstookprotocol dat iedereen noemt, wordt door de branche zelf afgeraden
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-300">
            Het opstook- en afkoelprotocol staat op vrijwel elke pagina over deze vraag: begin bij
            omgevingstemperatuur, dagelijks omhoog tot 40 °C, een paar dagen aanhouden, dan
            dagelijks weer omlaag. Het bestaat echt en het is vastgelegd als TBA-richtlijn 2.1 uit
            september 2019. Wat er nergens bij staat, is dat het Technisch Bureau Afbouw in maart
            2023 een kennispaper publiceerde met de vraag of dat protocol nog wel actueel is. Het
            antwoord daarin is nee.
          </p>

          <div className="mt-16 divide-y divide-primary-700 border-y border-primary-700">
            <div className="py-8 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-10">
              <div className="lg:col-span-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Waar het protocol vandaan komt
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-paper">
                  Een dekvloer die vrij kan bewegen
                </h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-primary-300 lg:col-span-8 lg:mt-0">
                Het protocol is ontworpen voor een dekvloer die los op een isolatielaag ligt, met
                kantstroken langs alle randen en opgedeeld in rechthoekige velden met dilataties. Zo
                kan die vloer vrij uitzetten en krimpen. TBA schrijft dat die vloer tegenwoordig
                &ldquo;vrijwel nooit gerealiseerd&rdquo; wordt: de kantstroken worden niet overal
                aangebracht, velddilataties worden esthetisch ongewenst gevonden, en de dekvloer
                wordt hechtend uitgevoerd omdat er geen inbouwhoogte is voor isolatie.
              </p>
            </div>
            <div className="py-8 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-10">
              <div className="lg:col-span-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Wat het dan doet
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-paper">
                  Vier fasen die schade opbouwen
                </h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-primary-300 lg:col-span-8 lg:mt-0">
                Op een hechtende dekvloer werkt het protocol volgens TBA averechts. Opwarmen geeft
                schuifspanning in het hechtvlak en dus plaatselijke onthechting; afkoelen laat de
                vloer krimpen en ontlaadt die spanning in scheuren vanuit binnenhoeken en
                deurdoorgangen; de tweede opwarming breidt bestaande onthechtingen uit (het
                afpeleffect); de tweede afkoeling verlengt en verbreedt de scheuren die er in fase
                twee zijn ingeleid. De conclusie is hard: je begint met een vloer die enkele kleine
                krimpscheurtjes heeft en eindigt met een vloer die aanzienlijke onthechtingen en veel
                bredere scheuren kent.
              </p>
            </div>
            <div className="py-8 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-10">
              <div className="lg:col-span-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Wat er dan wel moet
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-paper">
                  Ingebruiknemen zonder afkoelfase
                </h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-primary-300 lg:col-span-8 lg:mt-0">
                NOA en TBA adviseren nu een ingebruiknameprotocol: opwarmen zonder afkoelfase, omdat
                scheuren juist bij verkorting ontstaan. De proceswatertemperatuur gaat zo laag
                mogelijk (doorgaans volstaat 30 °C, hooguit 35 °C) en wordt langzaam opgevoerd tot de
                kamerthermostaat de gewenste temperatuur meet, waarna het protocol vanzelf eindigt.
                Moet er wel worden afgekoeld, dan met ongeveer 3 °C per dag. Twee getallen die het
                geheel in verhouding zetten: in normaal gebruik warmt de dekvloer per
                thermostaatcyclus zo&apos;n 5 tot 7 °C op, en bij uitval van de verwarming daalt hij in
                de praktijk niet meer dan 5 °C.
              </p>
            </div>
          </div>

          <p className="mt-10 max-w-2xl text-base leading-relaxed text-primary-300">
            Dit staat op deze pagina omdat het de enige plek in dit hele antwoord is waar een
            bezoeker echt schade kan aanrichten door goed bedoeld advies op te volgen. De richtlijn
            en de kennispaper staan bij de bronhouder:{' '}
            <a
              href="https://www.noa.nl/nl/kennisbank/opstook-en-afkoelprotocol/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center underline decoration-primary-500 underline-offset-4 hover:text-paper"
            >
              NOA-kennisbank
            </a>{' '}
            en{' '}
            <a
              href="https://www.tbafbouw.nl/wp-content/uploads/2024/04/TBA-kennispaper-3-Is-een-opstookprotocol-nog-wel-actueel.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center underline decoration-primary-500 underline-offset-4 hover:text-paper"
            >
              TBA-kennispaper 3
            </a>
            . Welk protocol bij jouw dekvloer hoort, bepaalt de partij die hem heeft aangebracht, en
            niet de tegelzetter.
          </p>
        </div>
      </section>

      {/* ─── HOE IK HET AANHOUD ───────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Wat dit bij mij betekent</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            De droogtijd zit in de planning, niet in een sticker achteraf
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-6">
              <Image
                src="/images/projects/portfolio-2025-07-laag-13.webp"
                alt="Grootformaat vloertegels uit eigen werk in een nog lege woning: de vloer ligt er en loopt door in de aangrenzende ruimte, er staat nog geen meubel op."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6">
              <p className="text-base leading-relaxed text-primary-600">
                Een vloer in de fase waar deze pagina over gaat: hij ligt, er staat nog niets op, en
                de vraag is wanneer je erop mag. Bij vloerverwarming gebruik ik
                vloerverwarmingsvriendelijke lijm, houd ik de juiste droogtijd aan en gaat de
                verwarming gefaseerd aan. Dat is geen slogan maar een planningsbeslissing: het
                bepaalt wanneer er gelegd wordt, in welke volgorde de ruimtes gaan, en wanneer de
                laatste voeg erin kan.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Voor grootformaat tegels van 60×120 of groter geldt hetzelfde met een grotere
                inzet: hoe groter de tegel, hoe minder voegen er zijn om beweging in op te vangen. Wat
                er verder bij vloertegelwerk komt kijken, van egaliseren tot de plek van de
                dilataties, staat op de pagina over{' '}
                <Link
                  href="/diensten/vloertegels"
                  className="inline-flex min-h-11 items-center underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
                >
                  vloertegelwerk
                </Link>
                . Gaat het mis omdat er te vroeg is gestookt, dan komt dat later terug als losse
                tegels of scheurende voegen; wat er dan gebeurt en wie waarvoor instaat, staat op de
                pagina over{' '}
                <Link
                  href="/losse-tegels-en-scheurende-voegen"
                  className="inline-flex min-h-11 items-center underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
                >
                  losse tegels en scheurende voegen
                </Link>
                .
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Ik ben een eenmanszaak uit Breda en voer alle klussen zelf uit, zonder onderaannemers.
                Voor deze vraag betekent dat vooral: de man die weet welke lijm er ligt, is de man die
                de telefoon opneemt. Via WhatsApp heb je binnen 1 werkdag antwoord, ook een half jaar
                later. Ik werk in{' '}
                <Link
                  href="/werkgebied"
                  className="inline-flex min-h-11 items-center underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
                >
                  Breda en omstreken
                </Link>
                .
              </p>
              <Link
                href="/projecten"
                className="mt-6 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-accent-600 transition-all hover:gap-2"
              >
                Uitgevoerd werk bekijken <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DE EERSTE STAP OP DE VLOER ───────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Iets wat nergens anders bij staat</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            De eerste keer dat je de vloer gebruikt, telt ook juridisch
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Deze vraag lijkt puur technisch, maar er hangt een tweede ding aan vast dat op geen van
            de gemeten zoekresultaten voorkomt. In mijn eigen{' '}
            <Link
              href="/algemene-voorwaarden"
              className="inline-flex min-h-11 items-center underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
            >
              algemene voorwaarden
            </Link>
            , en in die van veel collega&apos;s, staat dat in gebruik nemen ook geldt als
            goedkeuren, behalve voor wat je al hebt gemeld. De eerste keer dat je over die vloer loopt om te
            kijken hoe hij is geworden, is dus niet alleen een technisch moment.
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="border-t border-mist pt-8">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                Artikel 9
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-primary-900">
                In gebruik nemen is opleveren
              </h3>
              <p className="mt-4 text-base leading-relaxed text-primary-600">
                In gebruik nemen geldt als goedkeuren, behalve voor wat je al hebt gemeld. En een
                gebrek dat je bij de oplevering had moeten zien maar niet hebt gemeld, valt daarna
                niet meer onder mijn verantwoordelijkheid. Loop de vloer dus nauwkeurig na op het
                moment dat je er voor het eerst op mag, met de verlichting aan en op je knieën.
              </p>
            </div>
            <div className="border-t border-mist pt-8">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                Artikel 6
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-primary-900">
                Droogtijden horen bij het werk
              </h3>
              <p className="mt-4 text-base leading-relaxed text-primary-600">
                In artikel 6 staat dat ik je vertel wanneer je de vloer mag belopen, wanneer je mag
                douchen en wanneer de vloerverwarming aan mag, en dat die verwarming altijd gefaseerd
                aangaat. Die afspraak ligt dus vooraf vast, en het is mijn taak om hem te noemen.
              </p>
            </div>
            <div className="border-t border-mist pt-8">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                Artikel 12
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-primary-900">
                Instructies opvolgen hoort bij de garantie
              </h3>
              <p className="mt-4 text-base leading-relaxed text-primary-600">
                Op tegelwerk en voegwerk zit 5 jaar garantie en op kitwerk 1 jaar. Artikel 12 zegt
                erbij dat schade door het niet opvolgen van mijn aanwijzingen over droogtijden en
                vloerverwarming buiten de garantie valt. Bij een vloer
                met vloerverwarming is dit zo ongeveer de enige instructie die er is, en daarom staat
                hij hier zo uitgebreid.
              </p>
            </div>
          </div>

          <div className="mt-16 border-l border-mist pl-6">
            <p className="max-w-2xl text-base leading-relaxed text-primary-600">
              De praktische conclusie is simpel en kost niets: vraag bij de oplevering om twee data en
              schrijf ze op. De dag dat je normaal over de vloer mag, en de dag dat de vloerverwarming
              aan mag. Wie die twee data niet kan noemen, weet niet welke lijm hij heeft gebruikt of
              wat er onder ligt.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WAT BEWONERS ZEGGEN ──────────────── */}
      <section className="bg-paper py-20 lg:py-24">
        <div className="container-tight">
          <div className="eyebrow">Ervaringen van bewoners</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Op de fora is men het net zo oneens
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            De verwarring is niet iets van zoekmachines. In één draad op het Radar-forum staan 3
            dagen, 1 week, een paar weken, 6 weken en 10 weken als antwoord op dezelfde vraag. Deze
            zinnen zijn niet van mij; ze staan openbaar op fora en ik citeer ze zonder naam.
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

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-primary-600">
            De twee middelste citaten zijn de enige twee op beide fora waarin iemand het onderscheid
            maakt dat er werkelijk toe doet: verlijmd op een bestaande vloer is een week, een hele
            nieuwe vloer is een paar weken. Diezelfde splitsing staat bij Coba als officieel antwoord.
            Alle andere antwoorden in die draden zijn getallen zonder situatie, en daar begint de
            verwarring.
          </p>
        </div>
      </section>

      {/* ─── VERVOLGVRAGEN ────────────────────── */}
      <section className="bg-clay py-20 lg:py-24">
        <div className="container-tight">
          <div className="eyebrow">Wat hierna komt</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Negen vragen die op deze ene volgen
          </h2>

          <dl className="mt-12 divide-y divide-mist border-y border-mist">
            {faqs.map((f) => (
              <details key={f.q} className="group cursor-pointer py-6">
                <summary className="flex list-none items-start justify-between gap-4">
                  <dt className="font-display text-lg font-semibold text-primary-900 group-hover:text-accent-600">
                    {f.q}
                  </dt>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-paper text-primary-600 transition-all duration-300 group-open:rotate-45">
                    <span className="h-px w-3 bg-current" />
                    <span className="absolute h-3 w-px bg-current" />
                  </span>
                </summary>
                <dd className="mt-4 pr-12 text-base leading-relaxed text-primary-600">{f.a}</dd>
              </details>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── WAT HIER NIET STAAT ──────────────── */}
      <section className="bg-paper py-20 lg:py-24">
        <div className="container-tight">
          <div className="eyebrow">Eerlijk over de grens</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Vier dingen die deze pagina niet beantwoordt
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Een half antwoord dat er compleet uitziet is erger dan geen antwoord. Dit zijn de vragen
            waarop hier bewust geen getal en geen oordeel staat, met de reden erbij.
          </p>
          <ul className="mt-12 divide-y divide-mist border-y border-mist">
            {nietBeantwoord.map((t) => (
              <li key={t} className="py-6 text-base leading-relaxed text-primary-600">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/diensten/vloertegels" className="btn-secondary">
              Vloertegelwerk
            </Link>
            <Link href="/losse-tegels-en-scheurende-voegen" className="btn-secondary">
              Tegels los of een voeg gescheurd?
            </Link>
            <Link href="/algemene-voorwaarden" className="btn-secondary">
              Algemene voorwaarden
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────── */}
      <section className="bg-clay py-20 lg:py-24">
        <div className="container-tight rounded-3xl bg-primary-900 p-12 text-center text-paper lg:p-16">
          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl">
            Vloer op komst en vloerverwarming eronder?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-primary-300">
            Zeg er bij de aanvraag bij of de dekvloer nieuw is of bestaand, dan staat de planning er
            meteen goed op. Je krijgt binnen 1 werkdag antwoord.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${business.phoneE164}`} className="btn-accent">
              <Phone className="h-4 w-4" /> {business.phone}
            </a>
            <a
              href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                'Hoi Jaap, ik krijg een tegelvloer met vloerverwarming. Wanneer mag ik erop lopen en wanneer mag de verwarming weer aan?'
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
