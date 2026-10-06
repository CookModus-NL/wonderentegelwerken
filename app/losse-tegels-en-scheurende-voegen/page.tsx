import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Phone, MessageCircle, ArrowUpRight } from 'lucide-react'
import { business } from '@/content/business'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

/**
 * ANTWOORDEENHEID. Vraag: "Wat gebeurt er als er later tegels loskomen of een voeg scheurt?"
 * Contract aaf1cf4b-55b9-466f-b39f-89ca2b72c78d, run schrijver-20260910-1438.
 *
 * WAAROM DEZE PAGINA BESTAAT (gemeten, geen aanname). Op 10 september 2026 is de vraag
 * gemeten met motor/scripts/serp.mjs op twee onafhankelijke indexen: Brave en DuckDuckGo.
 * Beide geven dezelfde bezitter, eigenhuis.nl. Google is met dit instrument niet meetbaar
 * en staat dus als ongemeten. De drie best gelezen antwoorden (Vereniging Eigen Huis,
 * De Tegelmakers, Tegels in Huis) beantwoorden alle drie de vraag WAAROM tegels loskomen
 * en HOE je ze repareert. Geen van de tien resultaten beantwoordt de vraag die de bezoeker
 * werkelijk stelt: wat gebeurt er nu, wie herstelt het en wie betaalt.
 *
 * BRONNEN VAN DE HARDE REGELS (wet art. 1.1, niets verzinnen).
 *  - Burgerlijk Wetboek Boek 7, titel 12 (aanneming van werk), geldende tekst van
 *    wetten.overheid.nl (BWBR0005290), gelezen op 10 september 2026. Letterlijk geciteerd:
 *    art. 7:754 lid 1 en 2 (waarschuwingsplicht), 7:758 lid 4 (verborgen gebreken),
 *    7:759 lid 1 (gelegenheid tot herstel), 7:760 lid 2 (zaken van de opdrachtgever),
 *    7:761 lid 1 (verjaring twee jaar na protest).
 *  - Vereniging Eigen Huis, Problemenwijzer "Scheurvorming en loszittende voegen" en
 *    "Scheuren in tegels", gelezen 10 september 2026.
 *  - De Tegelmakers, "Tegellijm laat los, 6 signalen", gelezen 10 september 2026.
 *  - Tegels in Huis, "Waarom barsten of scheuren tegels?", gelezen 10 september 2026.
 *
 * EIGEN GEGEVENS. Getekende feiten (motor_feiten, eigenaar_akkoord=true): garantietermijnen
 * (`wonderen-garantie`), eenmanszaak, eindverantwoordelijk ook bij uitbesteed werk (`wonderen-persoon-jaap`, 6 okt 2026),
 * reactietijd (`wonderen-reactietijd`), werkwijze vloertegelwerk
 * (`wonderen-dienst-vloertegelwerk`), vloerverwarming (`wonderen-vloerverwarming`),
 * werkgebied (`wonderen-werkgebied-kern`). De artikelen uit de eigen algemene voorwaarden
 * (9, 10 en 12) worden geciteerd uit VERSIE 2 op /algemene-voorwaarden (5 okt 2026); versie 1
 * stond 10 september 2026 in het register als `wonderen-garantie-uitsluitingen`,
 * `wonderen-klachttermijn-oplevering` en `wonderen-aansprakelijkheid-uitsluiting`. Die
 * registerrijen moeten mee zodra Jaap versie 2 vaststelt.
 *
 * GEEN BEDRAGEN. Er is geen prijsfeit met eigenaar-akkoord, dus staat er geen enkel bedrag
 * op deze pagina, ook niet voor herstel.
 *
 * Citaten van bewoners zijn openbare forumberichten, met bronlink en zonder naam.
 */

const url = `${business.url}/losse-tegels-en-scheurende-voegen`

export const metadata: Metadata = {
  title: 'Tegels komen los of een voeg scheurt: wat gebeurt er dan?',
  description:
    'Wie herstelt het en wie betaalt? De wet geeft je het recht op herstel en de tegelzetter het recht het zelf te doen. Uitgelegd met de wetsartikelen erbij, door een tegelzetter uit Breda.',
  alternates: { canonical: '/losse-tegels-en-scheurende-voegen' },
  openGraph: {
    title: 'Wat gebeurt er als er later tegels loskomen of een voeg scheurt? | Van Wonderen Tegelwerken',
    description:
      'Garantie en aansprakelijkheid zijn twee verschillende dingen. Wat er in de voorwaarden staat, wat de wet erover zegt, en hoe je zelf ziet waar de beweging vandaan komt.',
    images: ['/images/projects/portfolio-2025-07-laag-6.webp'],
  },
}

const faqs = [
  {
    q: 'Hoe weet ik of het aan het tegelwerk ligt of aan mijn vloer?',
    a: 'Kijk naar het patroon, niet naar de ene tegel. Losse tegels verspreid over de vloer of aan de randen wijzen op de hechting: te weinig lijm, een stoffige of niet voorgestreken ondergrond, of te lang opengelegen lijm. Een scheur die in een rechte lijn dwars door meerdere tegels en voegen doorloopt, wijst op de ondergrond: daar zit een scheur of een naad in de dekvloer, of er ontbreekt een dilatatie. Vereniging Eigen Huis noemt doorbuiging en werking van de ondervloer als hoofdoorzaak van scheuren in voeg en tegel. Losse voegen langs de hele wand zijn iets anders: op de vloer-wandaansluiting hoort geen harde voeg maar kit, omdat daar de beweging zit.',
  },
  {
    q: 'Wat moet ik als eerste doen, en binnen welke termijn?',
    a: 'Meld het bij de tegelzetter die het werk heeft gedaan, en doe dat schriftelijk, ook als je hem daarnaast belt. Maak eerst foto’s: de hele ruimte, de plek van dichtbij, en een foto met iets erbij dat de maat aangeeft. Noteer wanneer je het voor het eerst zag. Twee termijnen zijn belangrijk. Wat je bij de oplevering al ziet, zet je op de opleverlijst die we samen maken. Wat later opkomt meld je zodra je het ziet; binnen twee maanden na ontdekking is volgens mijn voorwaarden altijd op tijd. Voor wat later opkomt, zegt artikel 7:761 lid 1 van het Burgerlijk Wetboek dat een rechtsvordering wegens een gebrek verjaart door verloop van twee jaren nadat de opdrachtgever ter zake heeft geprotesteerd. Die klok gaat dus lopen op het moment dat je protesteert, en niet eerder.',
  },
  {
    q: 'Mag ik het door iemand anders laten repareren en de rekening opsturen?',
    a: 'Dat is precies de stap die je positie kan kosten. Artikel 7:759 lid 1 BW zegt dat je de aannemer de gelegenheid moet geven de gebreken binnen een redelijke termijn weg te nemen, tenzij dat in verband met de omstandigheden niet van je kan worden gevergd. En in mijn eigen voorwaarden staat dat de garantie niet geldt voor het deel van het werk waaraan iemand anders na de oplevering heeft gewerkt. Die twee wijzen dezelfde kant op: eerst melden en de kans op herstel geven, daarna pas iemand anders. Bij acute waterschade ligt dat anders, want dan telt schadebeperking mee.',
  },
  {
    q: 'Valt dit onder de 5 jaar garantie?',
    a: 'Op mijn tegelwerk en voegwerk zit 5 jaar garantie en op kitwerk 1 jaar. Maar garantie is geen dekking voor alles wat er met een vloer gebeurt. In artikel 12 van mijn algemene voorwaarden staat dat ik herstel wat loskomt of scheurt doordat ik het werk niet goed heb gedaan, ook als dat zich eerst laat zien als vocht of een scheur. Wat erbuiten valt: slijtage van voeg en kit door gebruik, verkeerd gebruik of gebrek aan onderhoud, werk van een ander aan mijn werk, en vocht, scheuren of verzakking met een oorzaak buiten mijn werk. De vraag is dus nooit "hoe oud is het werk", maar "waar komt de beweging vandaan". Daarom staat op deze pagina eerst hoe je dat vaststelt, en pas daarna wat de termijn is.',
  },
  {
    q: 'Wat als de tegelzetter zegt dat het aan de ondergrond ligt?',
    a: 'Dat kan kloppen en het is niet automatisch het einde van het gesprek. Artikel 7:754 lid 1 BW legt de aannemer een waarschuwingsplicht op voor gebreken en ongeschiktheid van zaken afkomstig van de opdrachtgever, waaronder de grond waarop het werk wordt uitgevoerd, voor zover hij die kende of redelijkerwijs behoorde te kennen. Lid 2 voegt daaraan toe dat die waarschuwing bij aanneming van een bouwwerk schriftelijk en ondubbelzinnig gebeurt. Van dat lid kan volgens de wettekst zelf niet ten nadele van de opdrachtgever worden afgeweken als die een natuurlijk persoon is die niet handelt in de uitoefening van een beroep of bedrijf. Kort gezegd: wie een ondergrond accepteert die hij ongeschikt had moeten vinden, kan zich er achteraf minder makkelijk achter verschuilen. Wat dat in jouw geval betekent, is een vraag voor een jurist.',
  },
  {
    q: 'Ik heb de tegels zelf gekocht. Verandert dat iets?',
    a: 'Ja, en dat is het punt dat bijna nergens staat. Artikel 7:760 lid 1 BW legt de gevolgen van een ondeugdelijke uitvoering door gebrekkige of ongeschikte materialen van de aannemer bij de aannemer. Lid 2 zegt dat als de ondeugdelijke uitvoering te wijten is aan gebreken of ongeschiktheid van zaken afkomstig van de opdrachtgever, de gevolgen voor diens rekening komen, voor zover de aannemer zijn waarschuwingsplicht niet heeft geschonden. Zelf tegels kopen mag bij mij en ik verwerk ze gewoon, maar het verschuift wel waar een probleem met dat materiaal landt. Vraag daarom bij twijfel vooraf of de tegel die je op het oog hebt geschikt is voor die ruimte en die ondergrond.',
  },
  {
    q: 'Het werk is door de vorige bewoner besteld. Kan ik nog iets?',
    a: 'Dat is een van de meest voorkomende situaties op de klusfora, en ik geef er bewust geen antwoord op. De garantie en de aansprakelijkheid uit een aannemingsovereenkomst lopen tussen de opdrachtgever en de aannemer. Of, en hoe, een volgende eigenaar daar iets aan heeft, hangt af van de koopakte en van het dossier, en dat is juridisch terrein waar een tegelzetter niets te zoeken heeft. Wat ik wel kan: langskomen, kijken wat er technisch aan de hand is en op papier zetten wat ik zie. Die vaststelling heb je hoe dan ook nodig.',
  },
  {
    q: 'Kan een losse tegel worden vastgezet zonder de vloer eruit te halen?',
    a: 'Er bestaan bedrijven die holle en losse tegels injecteren met een lijm door de voeg, zonder hak- en breekwerk; De Tegelmakers beschrijft die werkwijze op de eigen site. Dat is een reparatieroute, geen oorzaakonderzoek. Zit de beweging in de ondergrond, dan zet je met injectie de tegel vast op een vloer die blijft bewegen. Ik doe geen injectiewerk. Wat ik doe is de tegel eruit halen, kijken wat eronder zit, de ondergrond in orde maken en opnieuw zetten. Dat is meer werk en het beantwoordt wel de vraag waarom het gebeurde.',
  },
  {
    q: 'Waarom zit er maar 1 jaar garantie op kitwerk?',
    a: 'Omdat kit een onderhoudsproduct is. In artikel 12 van mijn voorwaarden staat dat kit na het eerste jaar onderhoud is, en dat verkleuring en slijtage van voeg en kit door gebruik buiten de garantie vallen. Kit in een douche krijgt dagelijks water, zeep en schoonmaakmiddel te verwerken; dat hij na een aantal jaar verkleurt of laat los is geen gebrek maar slijtage. Een kitnaad die binnen een paar maanden loslaat of scheurt is dat wél. Zie ook mijn pagina over kitwerk en voegwerk voor hoe die naden worden opgebouwd.',
  },
]

const poorten = [
  {
    norm: 'Vraag 1',
    kop: 'Wat is er los',
    body:
      'Eén tegel, een groep tegels, of de voeg? Een enkele holklinkende tegel is een ander verhaal dan een rij tegels langs dezelfde lijn. De Tegelmakers noemt holle klank, wiebelen, scheurtjes in de voeg en vocht onder de tegel als de eerste signalen van hechtingsverlies.',
  },
  {
    norm: 'Vraag 2',
    kop: 'Wanneer ontdekt',
    body:
      'Bij de oplevering zichtbaar, of pas later opgekomen? Dat onderscheid staat in de wet zelf: artikel 7:758 lid 3 en lid 4 BW behandelen zichtbare en niet-ontdekte gebreken verschillend, en alleen het tweede geval is het klassieke garantiegesprek.',
  },
  {
    norm: 'Vraag 3',
    kop: 'Waar zit de beweging',
    body:
      'In het tegelwerk, in de ondergrond, of in het gebruik? Vereniging Eigen Huis wijst voor scheuren in voeg en tegel naar doorbuiging en werking van de onderliggende vloer. Dat is geen tegelprobleem, en het wordt er ook niet een door er nieuwe tegels op te leggen.',
  },
  {
    norm: 'Vraag 4',
    kop: 'Wiens materiaal',
    body:
      'Wie leverde de tegel, de lijm en de ondergrond? Artikel 7:760 BW legt de gevolgen van ondeugdelijk materiaal bij degene van wie het materiaal afkomstig is, met de waarschuwingsplicht van de aannemer als tegengewicht. Dit is de vraag die de rekening bepaalt.',
  },
]

const signalen = [
  {
    signaal: 'De tegel klinkt hol als je erop tikt',
    lezing: 'Hechtingsverlies of te weinig lijmdekking onder de tegel',
    bron: 'De Tegelmakers',
  },
  {
    signaal: 'De tegel wiebelt of kraakt onder je voet',
    lezing: 'De hechting is over een groter vlak weg; wachten maakt het bereik groter',
    bron: 'De Tegelmakers',
  },
  {
    signaal: 'Een scheur loopt in een rechte lijn door tegels én voegen heen',
    lezing: 'Beweging uit de ondergrond of een ontbrekende dilatatie, geen tegelfout',
    bron: 'Vereniging Eigen Huis, Tegels in Huis',
  },
  {
    signaal: 'De voeg langs de wand of in de hoek scheurt',
    lezing: 'Op die aansluiting hoort kit, geen harde voeg: daar zit de beweging',
    bron: 'Tegels in Huis (uitzettingsvoegen)',
  },
  {
    signaal: 'Donkere randen of het vloertje sopt onder je voet',
    lezing: 'Vocht onder de tegel; hier telt snelheid, want de schade gaat door onder de vloer',
    bron: 'De Tegelmakers',
  },
]

const wetsartikelen = [
  {
    artikel: 'Artikel 7:759 lid 1 BW',
    kop: 'De aannemer krijgt de kans het zelf te herstellen',
    citaat:
      'Indien het werk na oplevering gebreken vertoont waarvoor de aannemer aansprakelijk is, moet de opdrachtgever, tenzij zulks in verband met de omstandigheden niet van hem kan worden gevergd, aan de aannemer de gelegenheid geven de gebreken binnen een redelijke termijn weg te nemen.',
  },
  {
    artikel: 'Artikel 7:758 lid 4 BW',
    kop: 'Wat bij de oplevering niet is ontdekt, blijft bij de aannemer liggen',
    citaat:
      'In afwijking van het derde lid, is bij aanneming van bouwwerken de aannemer aansprakelijk voor gebreken die bij de oplevering van het werk niet zijn ontdekt, tenzij deze gebreken niet aan de aannemer zijn toe te rekenen. Van dit lid kan niet ten nadele van de opdrachtgever worden afgeweken, voor zover de opdrachtgever een natuurlijk persoon is die niet handelt in de uitoefening van een beroep of bedrijf.',
  },
  {
    artikel: 'Artikel 7:754 lid 1 BW',
    kop: 'De aannemer moet waarschuwen voor een ondergrond die hij niet vertrouwt',
    citaat:
      'De aannemer is bij het aangaan of het uitvoeren van de overeenkomst verplicht de opdrachtgever te waarschuwen voor onjuistheden in de opdracht voor zover hij deze kende of redelijkerwijs behoorde te kennen. Hetzelfde geldt in geval van gebreken en ongeschiktheid van zaken afkomstig van de opdrachtgever, daaronder begrepen de grond waarop de opdrachtgever een werk laat uitvoeren.',
  },
  {
    artikel: 'Artikel 7:761 lid 1 BW',
    kop: 'De klok begint pas te lopen als je protesteert',
    citaat:
      'Elke rechtsvordering wegens een gebrek in het opgeleverde werk verjaart door verloop van twee jaren nadat de opdrachtgever ter zake heeft geprotesteerd.',
  },
]

const stemmen = [
  {
    tekst:
      'sommige tegels begonnen te klikken als je erop liep, en je zag ze zelfs op en neer gaan als je erop drukte',
    bron: 'Klusidee: Hol- en gedeeltelijk loszittende tegels op vloerverwarming',
    href: 'https://www.klusidee.nl/Forum/topic/hol-en-gedeeltelijk-loszittende-tegels-op-vloerverwarming.121469/',
  },
  {
    tekst:
      'toen hij begon met het verwijderen van de tegels, zag ik al direct dat er alleen lijmgrillen op de afwerkvloer zaten',
    bron: 'Klusidee: Hol- en gedeeltelijk loszittende tegels op vloerverwarming',
    href: 'https://www.klusidee.nl/Forum/topic/hol-en-gedeeltelijk-loszittende-tegels-op-vloerverwarming.121469/',
  },
  {
    tekst: 'In mijn douchevloer zitten inmiddels ongeveer 20 tegels los of ze klinken hol als ik erop klop.',
    bron: 'Klusidee: Douchevloer tegels los, klinken hol en er zit vocht onder',
    href: 'https://www.klusidee.nl/Forum/topic/douchevloer-tegels-los-klinken-hol-en-er-zit-vocht-onder-wat-is-wijsheid.171334/',
  },
  {
    tekst: 'Er zit vocht onder een aantal tegels, want het “sopt” als je erop staat.',
    bron: 'Klusidee: Douchevloer tegels los, klinken hol en er zit vocht onder',
    href: 'https://www.klusidee.nl/Forum/topic/douchevloer-tegels-los-klinken-hol-en-er-zit-vocht-onder-wat-is-wijsheid.171334/',
  },
  {
    tekst: 'Het liefst wil ik een definitieve oplossing en geen lapmiddel dat over een jaar weer loslaat.',
    bron: 'Klusidee: Douchevloer tegels los, klinken hol en er zit vocht onder',
    href: 'https://www.klusidee.nl/Forum/topic/douchevloer-tegels-los-klinken-hol-en-er-zit-vocht-onder-wat-is-wijsheid.171334/',
  },
  {
    tekst:
      'Inmiddels laten zowat alle voegen los, bewegen de meeste tegels een beetje en er is er zelfs al een gebarsten.',
    bron: 'Klusidee: Badkamer vloertegels laten los',
    href: 'https://www.klusidee.nl/Forum/topic/badkamer-vloertegels-laten-los.119437/',
  },
  {
    tekst: 'Ik ben bang dat het hoe dan ook een kostbaar klusje gaat worden om het te verhelpen',
    bron: 'Klusidee: Badkamer vloertegels laten los',
    href: 'https://www.klusidee.nl/Forum/topic/badkamer-vloertegels-laten-los.119437/',
  },
]

const nietBeantwoord = [
  'Wat herstel bij jou kost. Er staat op deze site geen prijs, ook niet voor herstelwerk, omdat de kosten volledig afhangen van wat er onder de tegel blijkt te zitten. Een bedrag noemen voordat er één tegel omhoog is geweest, is een gok.',
  'Of jouw geval onder de garantie valt. Dat is niet vanaf een foto te beoordelen, en niet door de kalender te lezen. Het hangt af van de oorzaak, en die zit onder de tegel.',
  'Wat de wet in jouw situatie precies betekent. De artikelen hierboven staan er letterlijk en met bronlink, zodat je ze zelf kunt nalezen. Dit is de wettekst, geen juridisch advies. Voor de vertaling naar jouw dossier heb je een jurist nodig, niet een tegelzetter.',
  'Of een vorige eigenaar je iets nalaat. Wie geen opdracht gaf, staat niet in de aannemingsovereenkomst. Wat dat betekent bij een gekocht huis, is een vraag voor je notaris of rechtsbijstand.',
]

export default function LosseTegelsPage() {
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
              { name: 'Kitwerk en voegwerk', url: `${business.url}/diensten/kitwerk-voegwerk` },
              { name: 'Losse tegels en scheurende voegen', url },
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
            <Link href="/diensten/kitwerk-voegwerk" className="hover:text-accent-600">Kitwerk en voegwerk</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-600">Losse tegels en scheurende voegen</span>
          </nav>

          <div className="mt-12 max-w-3xl">
            <div className="eyebrow">Vraag uit de praktijk</div>
            <h1
              id="wat-gebeurt-er-als-er-later-tegels-loskomen-of-een-voeg-scheurt"
              className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-primary-900 sm:text-5xl"
            >
              Wat gebeurt er als er later tegels loskomen of een voeg scheurt?
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-primary-900">
              Er gebeuren drie dingen, in deze volgorde. Je meldt het schriftelijk bij de tegelzetter
              die het werk deed, en je geeft hem de kans het zelf te herstellen: artikel 7:759 lid 1
              van het Burgerlijk Wetboek zegt dat je hem daar de gelegenheid toe moet geven. Daarna
              wordt vastgesteld wáár de beweging vandaan komt, want dat bepaalt wie betaalt, en niet
              de leeftijd van de vloer. Pas als dat vaststaat, komt de garantie in beeld. Op mijn
              tegelwerk en voegwerk zit 5 jaar garantie, op kitwerk 1 jaar. Wat die garantie niet
              dekt, staat verderop op deze pagina, samengevat uit mijn eigen voorwaarden.
            </p>

            <p className="mt-6 text-sm text-primary-500">
              Jaap van Wonderen, tegelzetter in Breda &middot; geschreven 10 september 2026 &middot;{' '}
              wetsartikelen letterlijk overgenomen uit de geldende tekst op{' '}
              <a
                href="https://wetten.overheid.nl/BWBR0005290/2026-01-01/0/Boek7/Titeldeel12/Afdeling1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
              >
                wetten.overheid.nl
              </a>
              , gelezen op 10 september 2026
            </p>
          </div>
        </div>
      </section>

      {/* ─── TWEE VERSCHILLENDE DINGEN ────────── */}
      <section className="bg-clay py-20 lg:py-24">
        <div className="container-tight">
          <div className="max-w-2xl">
            <div className="eyebrow">Het onderscheid dat niemand maakt</div>
            <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
              Garantie en aansprakelijkheid zijn niet hetzelfde
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-600">
              Bijna elke pagina over losse tegels gaat over de oorzaak en over hoe je het repareert.
              Wie hem zoekt omdat het bij hém gebeurt, wil iets anders weten: wie komt het maken en
              wie betaalt dat. Dat antwoord heeft twee lagen, en ze worden voortdurend door elkaar
              gehaald.
            </p>
          </div>

          <div className="mt-16 grid gap-10 border-t border-mist pt-10 md:grid-cols-2 md:gap-16">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                Laag 1
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-primary-900">
                Garantie: wat er is afgesproken
              </h3>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Een belofte van de tegelzetter, met de grenzen die hij er zelf bij zet. Bij mij is
                dat 5 jaar op tegelwerk en voegwerk en 1 jaar op kitwerk. Die termijn is een keuze,
                geen wet: een ander bedrijf mag er twee jaar van maken, of tien. Lees hem dus
                altijd samen met de voorwaarden waarin staat wanneer hij vervalt.
              </p>
            </div>
            <div className="border-t border-mist pt-10 md:border-l md:border-t-0 md:pl-16 md:pt-0">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                Laag 2
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-primary-900">
                Aansprakelijkheid: wat de wet regelt
              </h3>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Tegelwerk in opdracht is aanneming van werk, en dat staat in Boek 7, titel 12 van
                het Burgerlijk Wetboek. Daar staan een waarschuwingsplicht, een recht op herstel en
                een verjaringstermijn in. Bij twee van die artikelen staat in de wettekst zelf dat
                er niet ten nadele van een particuliere opdrachtgever van afgeweken mag worden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DE VIER VRAGEN ───────────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="eyebrow">Voordat iemand iets belooft</div>
            <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
              Vier vragen bepalen de uitkomst
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-600">
              Wie meteen roept dat het onder de garantie valt, of juist dat het dat niet doet, gokt.
              Deze vier vragen komen er in elk gesprek langs, en ze zijn niet uitwisselbaar.
            </p>
          </div>

          <div className="mt-16 grid divide-y divide-mist border-y border-mist md:grid-cols-4 md:divide-x md:divide-y-0">
            {poorten.map((p) => (
              <div key={p.kop} className="py-8 md:px-6 md:py-10 md:first:pl-0 md:last:pr-0">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                  {p.norm}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-primary-900">{p.kop}</h3>
                <p className="mt-4 text-base leading-relaxed text-primary-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ZELF LEZEN WAT ER AAN DE HAND IS ─── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Wat je zelf kunt vaststellen</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Het patroon vertelt meer dan de ene losse tegel
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Voordat je iemand belt, is dit tien minuten werk en het scheelt een discussie. Tik met
            een muntje of een schroevendraaierheft over de vloer en luister waar het hol klinkt.
            Teken op een velletje na waar de losse tegels en de scheuren zitten. Het gaat om het
            patroon, want dat wijst naar de oorzaak.
          </p>

          <dl className="mt-12 divide-y divide-mist border-y border-mist">
            {signalen.map((s) => (
              <div key={s.signaal} className="grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6">
                <dt className="sm:col-span-5">
                  <span className="text-lg font-semibold text-primary-900">{s.signaal}</span>
                </dt>
                <dd className="text-base leading-relaxed text-primary-600 sm:col-span-5">{s.lezing}</dd>
                <dd className="text-sm text-primary-500 sm:col-span-2 sm:text-right">{s.bron}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-primary-600">
            Eén ding waar de adviespagina&apos;s overheen stappen: een tegelvloer die op een houten
            ondervloer ligt, speelt een ander spel. Daar is de doorbuiging van de vloer de bepalende
            factor en niet de lijm.
          </p>
        </div>
      </section>

      {/* ─── WAT DE WET ZEGT ──────────────────── */}
      <section className="bg-primary-900 py-24 text-paper lg:py-32">
        <div className="container-tight">
          <div className="eyebrow !text-accent-300 before:!bg-accent-300">Vier artikelen, letterlijk</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-paper sm:text-4xl">
            Wat er in de wet staat over werk dat na oplevering stukgaat
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-300">
            Deze vier artikelen komen uit Boek 7, titel 12 van het Burgerlijk Wetboek, over aanneming
            van werk. Ze staan hier letterlijk, omdat samenvattingen van dit soort artikelen op
            adviessites vaak nét iets anders zeggen dan de tekst zelf. Dit is de wettekst en geen
            juridisch advies; wat hij in jouw geval betekent, hangt af van de feiten.
          </p>

          <div className="mt-16 divide-y divide-primary-700 border-y border-primary-700">
            {wetsartikelen.map((w) => (
              <div key={w.artikel} className="py-8 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-10">
                <div className="lg:col-span-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                    {w.artikel}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-paper">{w.kop}</h3>
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-primary-300 lg:col-span-8 lg:mt-0">
                  &ldquo;{w.citaat}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-base leading-relaxed text-primary-300">
            De volledige tekst van deze afdeling staat op{' '}
            <a
              href="https://wetten.overheid.nl/BWBR0005290/2026-01-01/0/Boek7/Titeldeel12/Afdeling1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center underline decoration-primary-500 underline-offset-4 hover:text-paper"
            >
              wetten.overheid.nl
            </a>
            . Ik zet ze op mijn eigen site omdat ik liever heb dat je ze kent vóórdat je een offerte
            tekent, bij mij of bij iemand anders, dan dat je ze moet opzoeken als er iets mis is.
          </p>
        </div>
      </section>

      {/* ─── WAT ER IN MIJN VOORWAARDEN STAAT ── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Mijn eigen kleine lettertjes, groot afgedrukt</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Waar mijn garantie ophoudt
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Een garantie van 5 jaar op de homepage zetten is makkelijk. De grenzen ervan op dezelfde
            pagina zetten, is dat niet. Toch staat het hier, want dit is precies wat je wilt weten
            als de vraag actueel wordt. Alles hieronder komt, samengevat, uit{' '}
            <Link
              href="/algemene-voorwaarden"
              className="inline-flex min-h-11 items-center underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
            >
              mijn algemene voorwaarden
            </Link>
            , waar de volledige tekst staat.
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="border-t border-mist pt-8">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                Artikel 12
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-primary-900">
                Wat de garantie dekt en wat niet
              </h3>
              <p className="mt-4 text-base leading-relaxed text-primary-600">
                Op tegelwerk en voegwerk 5 jaar, op kitwerk 1 jaar, vanaf de oplevering. Komt een
                tegel los, scheurt een voeg of laat de kit los doordat ik het werk niet goed heb
                gedaan, dan herstel ik dat zonder kosten. Erbuiten valt: slijtage van voeg en kit
                door gebruik, verkeerd gebruik of gebrek aan onderhoud, het deel waaraan een ander
                na de oplevering heeft gewerkt, en vocht, scheuren of verzakking met een oorzaak
                buiten mijn werk.
              </p>
            </div>
            <div className="border-t border-mist pt-8">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                Artikel 9
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-primary-900">
                Oplevering en klachten
              </h3>
              <p className="mt-4 text-base leading-relaxed text-primary-600">
                We lopen het werk samen na en schrijven op wat niet goed is. Douchen of de ruimte
                gewoon gebruiken telt niet als goedkeuren. Wat je later ontdekt, meld je zodra je
                het ziet; binnen twee maanden na ontdekking is altijd op tijd. Loop de vloer toch
                goed na tijdens de oplevering, met de verlichting aan en op je knieën: wat dan op
                de lijst staat, hoeft later niemand meer te bewijzen.
              </p>
            </div>
            <div className="border-t border-mist pt-8">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                Artikel 10
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-primary-900">
                Wat is uitgesloten
              </h3>
              <p className="mt-4 text-base leading-relaxed text-primary-600">
                Aansprakelijkheid is beperkt tot het bedrag van de opdracht, of meer als een
                verzekering meer uitkeert. Uitgesloten zijn gevolgschade en schade die niet door mijn
                werk komt: vocht of scheuren uit de constructie of een dekvloer die nog werkt,
                lekkage uit leidingen die ik niet heb aangelegd, en gebreken in materiaal of
                ondergrond van jou, behalve als ik ze had moeten zien en je niet heb gewaarschuwd.
              </p>
            </div>
          </div>

          <div className="mt-16 border-l border-mist pl-6">
            <p className="max-w-2xl text-base leading-relaxed text-primary-600">
              Die grenzen in artikel 10 en de wetsartikelen hierboven staan naast elkaar, en artikel
              10 zegt zelf dat het niet verder gaat dan de wet toestaat. In artikel 7:754 lid 2 en artikel 7:758 lid 4
              staat zelf de zin: &ldquo;Van dit lid kan niet ten nadele van de opdrachtgever worden
              afgeweken, voor zover de opdrachtgever een natuurlijk persoon is die niet handelt in de
              uitoefening van een beroep of bedrijf.&rdquo; Ik druk die zin hier af omdat je hem moet
              kennen. Hoe hij in een concreet geschil uitpakt, is een vraag voor een jurist en niet
              voor mij, en dat blijft zo ook als het antwoord in mijn nadeel is.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WAT HERSTEL IN DE PRAKTIJK IS ────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Wat herstel werkelijk inhoudt</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Eén tegel eruit halen bestaat bijna niet
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-6">
              <Image
                src="/images/projects/portfolio-2025-07-laag-6.webp"
                alt="Badkamer in verbouwing uit eigen werk: het oude groene wandtegelwerk is deels weggehaald, de vloertegels liggen er gedeeltelijk uit en de ondervloer ligt open."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6">
              <p className="text-base leading-relaxed text-primary-600">
                Zo ziet het eruit als er tegels uit moeten. De voeg wordt eerst uitgeslepen, anders
                trek je de buurtegel mee. De tegel gaat er in stukken uit. Daaronder komt de vraag
                waar het om begon: wat zit er onder, en waarom liet het los? Pas als dat antwoord er
                is, kan er iets terug. Een tegel terugplakken op een ondergrond die niet is nagekeken
                is een lapmiddel, en het komt binnen een jaar terug.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Hou er rekening mee dat exact dezelfde tegel na een paar jaar vaak niet meer te
                krijgen is, en dat tegels uit een andere productiebatch iets kunnen afwijken in kleur
                en maat. Daarom vraag ik bij nieuw werk altijd om een paar tegels over te houden en
                ze te bewaren. Dat is geen verkooppraatje: het is het verschil tussen een reparatie
                die je niet ziet en een reparatie die je vanaf de deur ziet liggen.
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

      {/* ─── WAT IK DOE OM HET TE VOORKOMEN ──── */}
      <section className="bg-paper py-20 lg:py-24">
        <div className="container-tight">
          <div className="eyebrow">De andere kant van dezelfde vraag</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Er zit niemand tussen mij en jouw vloer
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-base leading-relaxed text-primary-600">
                Ik ben een eenmanszaak uit Breda, zonder tussenpersonen, en ik ben eindverantwoordelijk
                voor elke klus, ook als een andere vakman een klus van mij uitvoert. Dat is voor deze
                vraag belangrijker dan het klinkt. Als er over drie jaar een tegel loskomt, is er geen
                partij die naar een andere partij kan wijzen: je belt mij, en ik sta ervoor in. Via WhatsApp heb je binnen 1 werkdag antwoord.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Bij het leggen zelf zitten de dingen die dit soort problemen voorkomen: de ondervloer
                eerst vlak maken en waar nodig egaliseren, de juiste lijm en voorlijm bij jouw
                tegeltype, en de dilataties op de juiste plek. Bij vloerverwarming gebruik ik
                vloerverwarmingsvriendelijke lijm, houd ik de juiste droogtijd aan en gaat de
                verwarming gefaseerd aan; welke termijnen daarbij horen en waarom de adviezen
                daarover van 7 dagen tot 6 weken uiteenlopen, staat op de pagina over{' '}
                <Link
                  href="/tegelvloer-belopen-en-vloerverwarming-aanzetten"
                  className="inline-flex min-h-11 items-center underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
                >
                  wanneer je op de vloer mag lopen en de vloerverwarming aan mag
                </Link>
                . Meer over het leggen zelf staat op de pagina over{' '}
                <Link
                  href="/diensten/vloertegels"
                  className="inline-flex min-h-11 items-center underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
                >
                  vloertegelwerk
                </Link>
                {' '}en die over{' '}
                <Link
                  href="/diensten/kitwerk-voegwerk"
                  className="inline-flex min-h-11 items-center underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
                >
                  kitwerk en voegwerk
                </Link>
                .
              </p>
            </div>
            <div className="border-t border-mist pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <div className="font-display text-[clamp(3.75rem,6vw,4.75rem)] font-bold leading-none tabular-nums text-primary-900">
                5 jaar
              </div>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Garantie op tegelwerk en voegwerk, 1 jaar op kitwerk. Die termijn kan ik geven omdat
                ik weet wat er onder ligt: ik heb de ondervloer zelf gezien, zelf voorbereid en zelf
                betegeld. Een termijn die iemand geeft over werk dat een ander heeft uitgevoerd, is
                een andere belofte.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Ik werk in{' '}
                <Link
                  href="/werkgebied"
                  className="inline-flex min-h-11 items-center underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
                >
                  Breda en omstreken
                </Link>
                . Voor bestaand tegelwerk van iemand anders kom ik ook kijken, maar dan is het een
                opname en geen garantieclaim; dat verschil zeg ik vooraf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WAT BEWONERS ZEGGEN ──────────────── */}
      <section className="bg-clay py-20 lg:py-24">
        <div className="container-tight">
          <div className="eyebrow">Ervaringen van bewoners</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Hoe mensen het zelf opschrijven
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Op de Nederlandse klusfora gaat dit gesprek al twintig jaar hetzelfde. Niemand schrijft
            &quot;hechtingsverlies&quot;. Mensen schrijven dat het klikt, kraakt, hol klinkt of sopt.
            Deze zinnen zijn niet van mij; ze staan openbaar op fora en ik citeer ze zonder naam.
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
            In de eerste draad hierboven gebeurt precies wat deze pagina beschrijft: de bewoner belt
            de tegelzetter, de tegelzetter komt terug en begint tegels te vervangen, en pas als de
            tegels eruit gaan wordt zichtbaar hoe ze waren gelijmd. Dat is de volgorde die de wet ook
            aanhoudt: eerst melden, dan de kans op herstel, en de oorzaak wordt onderweg zichtbaar.
          </p>
        </div>
      </section>

      {/* ─── VERVOLGVRAGEN ────────────────────── */}
      <section className="bg-paper py-20 lg:py-24">
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
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-clay text-primary-600 transition-all duration-300 group-open:rotate-45">
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
      <section className="bg-clay py-20 lg:py-24">
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

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-primary-600">
            Eén daarvan verdient wel een eigen plek: wat tegelwerk kost, en waarom de bedragen die
            je online vindt zo ver uiteenlopen. Dat verschil zit niet in de tegelzetter maar in wat
            er in het bedrag zit, en garantietermijnen horen in die vergelijking thuis. Het staat
            uitgewerkt op{' '}
            <Link
              href="/wat-kost-vloer-tegelen-per-m2"
              className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
            >
              de pagina over wat vloer tegelen per m² kost
            </Link>
            , met zes gelezen prijspagina&apos;s naast elkaar.
          </p>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-primary-600">
            Vraag vier hierboven, wiens materiaal het was, is bij nieuw werk een vraag die je
            vooraf kunt beslissen in plaats van achteraf uitzoeken. Wat zelf tegels kopen betekent
            voor de hoeveelheid die je moet bestellen, voor het overschot dat de tegelhandel wel of
            niet terugneemt, en voor de plek waar een materiaalprobleem landt, staat op{' '}
            <Link
              href="/tegels-zelf-kopen-of-via-de-tegelzetter"
              className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
            >
              de pagina over tegels zelf kopen of via de tegelzetter
            </Link>
            , met de retourvoorwaarden van vijf leveranciers ernaast.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/diensten/kitwerk-voegwerk" className="btn-secondary">
              Kitwerk en voegwerk
            </Link>
            <Link href="/algemene-voorwaarden" className="btn-secondary">
              Algemene voorwaarden
            </Link>
            <Link href="/wat-kost-vloer-tegelen-per-m2" className="btn-secondary">
              Wat kost vloer tegelen per m²?
            </Link>
            <Link href="/tegels-zelf-kopen-of-via-de-tegelzetter" className="btn-secondary">
              Tegels zelf kopen of via de tegelzetter?
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────── */}
      <section className="bg-paper py-20 lg:py-24">
        <div className="container-tight rounded-3xl bg-primary-900 p-12 text-center text-paper lg:p-16">
          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl">
            Even meekijken naar wat er los zit?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-primary-300">
            Stuur foto&apos;s van de plek en van de hele ruimte via WhatsApp, met erbij wanneer het
            werk is gelegd. Je krijgt binnen 1 werkdag antwoord.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${business.phoneE164}`} className="btn-accent">
              <Phone className="h-4 w-4" /> {business.phone}
            </a>
            <a
              href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                'Hoi Jaap, bij mij komen tegels los en scheurt een voeg. Kun je meekijken wat er aan de hand is?'
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
