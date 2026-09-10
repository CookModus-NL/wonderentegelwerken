import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Phone, MessageCircle, ArrowUpRight } from 'lucide-react'
import { business } from '@/content/business'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

/**
 * ANTWOORDEENHEID. Vraag: "Kan er op een houten ondervloer getegeld worden?"
 *
 * Waarom deze pagina root-level staat, net als /badkamer-betegelen-tot-plafond: bij twee
 * antwoordeenheden is een /vragen-hub nog steeds dunne inhoud. Bij de derde verhuizen ze
 * samen naar /vragen/<slug> MÉT redirect. Dat is dan een ontwerpbesluit (DESIGN.md),
 * geen bouwbeslissing.
 *
 * BRONNEN VAN DE HARDE GETALLEN (wet art. 1.1, niets verzinnen). Alle vier de
 * vakbronnen zijn op 8 september 2026 gelezen; de citaten zijn letterlijk.
 *  - Forbo Eurocol, "Tegelen op houten vloeren": max. tegelformaat 30x30, plaatmateriaal
 *    12-18 mm, cementgebonden plaat in de badkamer, balkdikte + hart-op-hartafstand.
 *  - Omnicol, "Tegelen op een houten vloer, kan dat?" (14 april 2020): doorbuiging L/500,
 *    "zo klein mogelijke tegels met een zo breed mogelijke voeg", vloerdikte/deuren, en in
 *    de reactie van Omnicol zelf (28 juli 2020) het oordeel over de natte ruimte.
 *  - codex Nederland, "Tegels op houten ondergrond verlijmen": ~25 kg/m2 tegelgewicht,
 *    minimaal 10x10 tegel, lijmklasse C2 met S1/S2-vervorming.
 *  - Kiwitz, "Tegels op hout verlijmen": ontkoppelingsmat 9 mm, lijm C2TE-S2, voeg >= 3 mm,
 *    boven 30x30 ook de achterzijde inlijmen.
 *  - Tegels in Huis, "Dikte vloertegels + lijm": keramiek 8-10 mm, lijm 2-5 mm, opbouw ~14 mm.
 * De opbouwhoogte-optelsom is AFGELEID uit die gepubliceerde componentmaten en staat als
 * afgeleid op de pagina; het is geen meting van iemands vloer.
 *
 * EIGEN GEGEVENS (motor_feiten, eigenaar_akkoord=true): garantietermijnen
 * (`wonderen-garantie`), offertebelofte (`wonderen-offerte-belofte`), reactietijd
 * (`wonderen-reactietijd`), werkgebied (`wonderen-werkgebied-kern`), eenmanszaak zonder
 * onderaannemers (`wonderen-persoon-jaap`), werkwijze vloertegelwerk
 * (`wonderen-dienst-vloertegelwerk`). Het project in Teteringen: motor_bewijs
 * `wonderen-project-vloer-2025-03`. Geen bedragen op deze pagina, want er is geen
 * prijsfeit met eigenaar-akkoord, en een half prijsantwoord is slechter dan geen.
 *
 * Citaten van bewoners zijn openbare forumberichten, met bronlink en zonder achternaam.
 */

const url = `${business.url}/tegelen-op-houten-ondervloer`

export const metadata: Metadata = {
  title: 'Kan er op een houten ondervloer getegeld worden?',
  description:
    'Ja, maar zelden met de tegel die je in gedachten hebt: lijmfabrikanten adviseren op hout maximaal 30x30 en doorbuiging onder L/500. Uitgelegd door een tegelzetter uit Breda.',
  alternates: { canonical: '/tegelen-op-houten-ondervloer' },
  openGraph: {
    title: 'Kan er op een houten ondervloer getegeld worden? | Van Wonderen Tegelwerken',
    description:
      'Wat de lijmfabrikanten echt eisen (30x30, L/500, C2-S2), hoeveel hoogte de oplossing kost, en waarom een natte ruimte een apart antwoord krijgt.',
    images: ['/images/projects/portfolio-2025-03-wa0006.webp'],
  },
}

const faqs = [
  {
    q: 'Mag ik dan echt geen 60x60 of 80x80 op hout leggen?',
    a: 'Niet rechtstreeks op de houten vloer, nee. Forbo Eurocol adviseert op houten vloeren "niet groter te gaan dan 30 x 30-tegels" en Omnicol vat het samen als "zo klein mogelijke tegels met een zo breed mogelijke voeg". Wil je toch grootformaat, dan is het antwoord niet een andere lijm maar een andere ondergrond: je haalt de beweging eruit met een verstevigingslaag of een zwaluwstaartplaat met lichtbeton en dekvloer, en vanaf dat moment lig je feitelijk niet meer op hout. Dat is een verbouwing, geen tegelkeuze.',
  },
  {
    q: 'Hoeveel mag mijn vloer doorbuigen?',
    a: 'Het technische uitgangspunt dat Omnicol noemt is L/500 bij volle belasting, waarbij L de lengte van het bouwdeel is. Op een overspanning van 4 meter is dat 8 millimeter. Wat geen enkele pagina erbij zet: hoe je dat meet. In de praktijk kijk ik naar de balkdikte en de hart-op-hartafstand van de balken. Eurocol noemt die twee samen bepalend voor de stabiliteit. Daarom moet er een plank omhoog voordat iemand ja of nee kan zeggen. Wie het antwoord geeft zonder onder de vloer te hebben gekeken, gokt.',
  },
  {
    q: 'Hoeveel hoger wordt mijn vloer ervan?',
    a: 'Reken op ongeveer 3,5 tot 4 centimeter als je de gangbare opbouw volgt: een extra plaatlaag van 12 tot 18 mm (Eurocol), een ontkoppelingsmat van 9 mm (Kiwitz) en lijm plus tegel samen zo\'n 14 mm (Tegels in Huis). Die optelsom is afgeleid uit gepubliceerde componentmaten, geen meting van jouw vloer. Ga je de route met zwaluwstaartplaat en lichtbeton, dan wordt het meer. Meet dus vooraf de ruimte onder je binnendeuren en bij de drempel naar de gang. Dat is de maat die de beslissing in de praktijk vaak maakt, en hij staat in geen enkel adviesartikel.',
  },
  {
    q: 'Kan het in een badkamer of toilet op een houten verdiepingsvloer?',
    a: 'Daar is het antwoord strenger, en dat lees je bijna nergens. Omnicol schrijft in reactie op precies die vraag: "In een vochtige ruimte is het ten strengste af te raden". Dat oordeel gaat over rechtstreeks tegelen op houten plaatmateriaal. Eurocol adviseert in badkamers cementgebonden vloerplaten in plaats van hout- of gipsgebonden platen. Kan het? Ja, met een volledig opgebouwde waterdichting onder het tegelwerk. Maar de foutmarge is klein en de schade zit onder de tegel, waar je hem pas ziet als het plafond eronder vlekt.',
  },
  {
    q: 'Is een ontkoppelingsmat genoeg om alles op te lossen?',
    a: 'Nee. Een ontkoppelingsmat laat de tegelvloer en de ondergrond onafhankelijk van elkaar bewegen, en hij vangt daarmee krimp en uitzetting op. Hij vangt géén doorbuiging op: een vloer die veert onder je voeten blijft veren met een mat erop. Eerst de stijfheid oplossen, dan pas ontkoppelen. In die volgorde, nooit andersom.',
  },
  {
    q: 'Welke lijm en welke voeg horen hierbij?',
    a: 'Een flexibele cementlijm van klasse C2 met een S1- of S2-vervormingsklasse (codex en Kiwitz noemen allebei C2 met S2 voor hout). Kiwitz houdt bovendien een voegbreedte van minimaal 3 mm aan en adviseert boven 30x30 ook de achterzijde van de tegel in te lijmen, zodat er geen holtes onder blijven. Omnicol zegt over de voeg: niet te snel beginnen, de lijm eerst goed laten drogen, en een zo flexibel mogelijk voegmateriaal gebruiken. De hoeken en de vloer-wandaansluiting worden gekit, niet gevoegd.',
  },
  {
    q: 'Houdt een houten balklaag het gewicht van een tegelvloer?',
    a: 'Een keramische tegelvloer weegt volgens codex ongeveer 25 kg per m2. Inclusief lijm en de extra plaatlaag kom je in de praktijk hoger uit. Bij 42 m2 praat je dus al gauw over meer dan een ton extra permanent op de balklaag. Bij een moderne, goed gedimensioneerde vloer is dat zelden het probleem; bij een oude balklaag met flinke hart-op-hartafstand kan het dat wel zijn. Dat is een vraag voor iemand die de constructie mag beoordelen, en dat ben ik niet.',
  },
  {
    q: 'Wat als ik het toch gewoon rechtstreeks op de vloerdelen laat lijmen?',
    a: 'Dan koop je een vloer die er op de dag van oplevering perfect uitziet. Hout werkt met het seizoen mee; de tegel doet dat niet. De beweging komt er in de voeg uit, en daarna in de tegel zelf. Omnicol zegt het zo: "Rechtstreeks en zonder enige verdere voorbereiding tegels plakken op houten vloeren wordt wél sterk afgeraden." Ik doe het om dezelfde reden niet: op mijn tegelwerk en voegwerk zit 5 jaar garantie, en die kan ik op zo\'n opbouw niet waarmaken.',
  },
]

const poorten = [
  {
    kop: 'Stijfheid',
    norm: 'Poort 1',
    body:
      'Doorbuiging onder volle belasting maximaal L/500 (Omnicol). Balkdikte en hart-op-hartafstand bepalen dat volgens Eurocol voor een belangrijk deel. Zakt deze poort, dan helpt geen enkele lijm en geen enkele mat.',
  },
  {
    kop: 'Tegelmaat',
    norm: 'Poort 2',
    body:
      'Eurocol adviseert op hout niet groter dan 30x30; codex noemt 10x10 als ondergrens. Grootformaat is dus geen kwestie van beter lijmen, maar van de houten vloer eerst uit de constructie halen.',
  },
  {
    kop: 'Vocht',
    norm: 'Poort 3',
    body:
      '"Het hout moet niet vochtig (kunnen) worden", schrijft Omnicol. Dat betekent een vochtwerende laag onder de opbouw én weten wat er ónder de vloer gebeurt. Een kruipruimte hoort daar ook bij.',
  },
  {
    kop: 'Hoogte',
    norm: 'Poort 4',
    body:
      'De oplossing kost ruimte. Omnicol waarschuwt er letterlijk voor: "je moet ook de deur(en) nog open kunnen krijgen". Dit is de poort die het vaakst pas ontdekt wordt als de platen al besteld zijn.',
  },
]

const opbouw = [
  {
    laag: 'Extra plaatlaag op de bestaande vloer',
    maat: '12–18 mm',
    bron: 'Forbo Eurocol',
  },
  {
    laag: 'Ontkoppelingsmat',
    maat: '9 mm',
    bron: 'Kiwitz (Weber.sys 832)',
  },
  {
    laag: 'Tegellijm en keramische tegel samen',
    maat: '± 14 mm',
    bron: 'Tegels in Huis',
  },
]

const stemmen = [
  {
    tekst: 'Nu heb ik al van diverse kanten gehoord dat over de houten vloerplanken niet getegeld kan worden.',
    bron: 'Klusidee: Welke ondervloer voor tegels',
    href: 'https://www.klusidee.nl/Forum/topic/welke-ondervloer-voor-tegels.46231/',
  },
  {
    tekst: 'Dat hebben we overwogen, maar we willen toch het liefste tegels.',
    bron: 'Klusidee: Welke ondervloer voor tegels',
    href: 'https://www.klusidee.nl/Forum/topic/welke-ondervloer-voor-tegels.46231/',
  },
  {
    tekst: 'Dan gewoon de houten vloer er helemaal uithalen, en een beton vloer storten.',
    bron: 'Klusidee: Welke ondervloer voor tegels',
    href: 'https://www.klusidee.nl/Forum/topic/welke-ondervloer-voor-tegels.46231/',
  },
  {
    tekst: 'Aan maximale ruimte die ik omhoog kan gaan heb ik ongeveer 5 centimeter.',
    bron: 'Klusidee: Vloerverwarming op houten ondervloer',
    href: 'https://www.klusidee.nl/Forum/topic/vloerverwarming-op-houten-ondervloer.56363/',
  },
  {
    tekst: 'Kan het niet zijn dat op een gegeven moment deze laag breekt door het werken van de eronderliggende vloer?',
    bron: 'Klusidee: Vloerverwarming op houten ondervloer',
    href: 'https://www.klusidee.nl/Forum/topic/vloerverwarming-op-houten-ondervloer.56363/',
  },
  {
    tekst: 'Zo zweeft je vloer en kan het niet gaan scheuren. Want houten vloeren bewegen.',
    bron: 'Klusidee: Vloerverwarming op houten ondervloer',
    href: 'https://www.klusidee.nl/Forum/topic/vloerverwarming-op-houten-ondervloer.56363/',
  },
]

const nietBeantwoord = [
  'Wat het bij jou kost. Er staat op deze site geen prijs per m2, omdat de prijs afhangt van de ondervloer, het voorwerk, het tegelformaat en de hoeveelheid extra platen. Een bedrag noemen zonder je vloer gezien te hebben is een gok, en die zet ik niet op papier.',
  'Of jouw balklaag stijf genoeg is. Dat is niet vanaf een foto te beantwoorden: er moet een vloerdeel omhoog om de balkdikte en de hart-op-hartafstand te zien. Tot dat moment is elk ja en elk nee geraden.',
  'Of jouw balklaag het gewicht draagt. Bij twijfel over de constructie is dat een vraag voor een constructeur, niet voor een tegelzetter. Ik ga daar niet overheen.',
]

export default function HoutenOndervloerPage() {
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
              { name: 'Tegelen op een houten ondervloer', url },
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
            <span className="text-primary-600">Op een houten ondervloer?</span>
          </nav>

          <div className="mt-12 max-w-3xl">
            <div className="eyebrow">Vraag uit de praktijk</div>
            <h1
              id="kan-er-op-een-houten-ondervloer-getegeld-worden"
              className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-primary-900 sm:text-5xl"
            >
              Kan er op een houten ondervloer getegeld worden?
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-primary-900">
              Ja, het kan. Maar zelden met de tegel die je in gedachten hebt. De twee Nederlandse
              lijmfabrikanten die deze vraag technisch beantwoorden komen op hetzelfde uit: op een
              houten vloer horen kleine tegels met brede voegen, en de vloer mag onder volle
              belasting niet meer dan L/500 doorbuigen. Forbo Eurocol adviseert daarbij niet groter
              te gaan dan 30&times;30. De vraag is dus bijna nooit &quot;kan het?&quot; en bijna
              altijd: haalt jouw vloer die stijfheid, en accepteer je die tegelmaat?
            </p>

            <p className="mt-6 text-sm text-primary-500">
              Jaap van Wonderen, tegelzetter in Breda &middot; bijgewerkt 8 september 2026 &middot;{' '}
              vakbronnen gelezen op{' '}
              <a
                href="https://www.forbo.com/eurocol/nl/eurovisie/tips/tegelen-op-houten-vloeren/p5jufl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
              >
                Forbo Eurocol
              </a>{' '}
              en{' '}
              <a
                href="https://blog.omnicol.eu/tegelen-op-een-houten-vloer/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
              >
                Omnicol
              </a>
              , 8 september 2026
            </p>
          </div>
        </div>
      </section>

      {/* ─── DE VIER POORTEN ──────────────────── */}
      <section className="bg-clay py-20 lg:py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="eyebrow">De beslissing opgesplitst</div>
            <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
              Vier poorten, en je moet ze alle vier door
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-600">
              De meeste artikelen over deze vraag behandelen hem als één ja-nee-vraag met flexlijm
              als antwoord. In de praktijk zijn het vier losse voorwaarden, en ze zijn niet
              uitwisselbaar: je kunt een gezakte poort niet compenseren met een betere lijm.
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

      {/* ─── DE TEGELMAAT IS DE EERSTE ZEEF ───── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Wat de fabrikanten zeggen</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Niet de vloer is meestal het probleem, maar de tegel
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Wie deze vraag online stelt, krijgt bijna overal hetzelfde antwoord: het kan, mits je
            een flexibele lijm en een ontkoppelingsmat gebruikt. Dat klopt, en het is onvolledig.
            De twee fabrikanten die er een getal bij durven te zetten, zetten dat getal op de
            tegelmaat. Dat is precies het deel van de beslissing dat de meeste mensen al hadden
            genomen voordat ze gingen zoeken.
          </p>

          <figure className="mt-12 max-w-2xl border-l border-mist pl-6">
            <blockquote className="text-base leading-relaxed text-primary-600">
              &ldquo;Wij adviseren bij het betegelen van houten vloeren niet groter te gaan dan
              30 x 30-tegels.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm text-primary-500">
              Forbo Eurocol, <em>Tegelen op houten vloeren</em> &middot; gelezen 8 september 2026
            </figcaption>
          </figure>

          <figure className="mt-10 max-w-2xl border-l border-mist pl-6">
            <blockquote className="text-base leading-relaxed text-primary-600">
              &ldquo;De algemene regel voor een houten ondergrond is: zo klein mogelijke tegels met
              een zo brede mogelijke voeg. Dit in contrast met de trend naar steeds grotere
              tegels.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm text-primary-500">
              Omnicol, <em>Tegelen op een houten vloer, kan dat?</em> &middot; gelezen 8 september 2026
            </figcaption>
          </figure>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-primary-600">
            Dat is de hele spanning in deze vraag. De markt beweegt naar 60&times;60, 80&times;80 en
            groter; de houten vloer beweegt de andere kant op. Wil je toch grootformaat, dan is het
            antwoord niet een sterkere lijm maar een andere ondergrond: Omnicol beschrijft de route
            met een zwaluwstaartplaat, lichtbeton en een dunne cementdekvloer, en schrijft erbij dat
            daarmee &ldquo;alle beperkingen die aan een houten ondergrond werden gesteld&rdquo;
            vervallen. Logisch: vanaf dat moment leg je niet meer op hout.
          </p>

          <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-6">
              <Image
                src="/images/projects/portfolio-2025-03-wa0006.webp"
                alt="Woonkamervloer uit eigen werk in Teteringen: grote keramische tegels in betonlook, naadloos doorlopend van woonkamer naar keuken."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6">
              <h3 className="font-display text-2xl font-semibold text-primary-900">
                Waarom deze vloer 80&times;80 mocht zijn
              </h3>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Dit is 42 m&sup2; keramiek 80&times;80 in betonlook, in Teteringen. Precies het
                formaat waar de fabrikanten op hout voor waarschuwen. Hier kon het wél, omdat
                deze tegels op een geëgaliseerde bestaande ondervloer liggen en niet op een houten
                balklaag. Datzelfde tegelpakket, één laag hout eronder, was een ander gesprek
                geweest. Dat verschil is niet zichtbaar op de foto, en het is het enige dat telt.
              </p>
              <Link
                href="/projecten/vloer-maart-2025"
                className="mt-6 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-accent-600 transition-all hover:gap-2"
              >
                Meer foto&apos;s van dit project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DE REKENSOM DIE NIEMAND MAAKT ────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">De maat die de beslissing maakt</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            De oplossing kost je bijna vier centimeter hoogte
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Elk artikel beschrijft de opbouw: extra plaatmateriaal, een ontkoppelingsmat, flexlijm,
            tegel. Geen enkel artikel telt hem op. Omnicol waarschuwt er wel voor (&ldquo;je moet
            ook de deur(en) nog open kunnen krijgen&rdquo;), maar zonder getal. Hier staan de maten die de
            fabrikanten zelf publiceren, bij elkaar.
          </p>

          <dl className="mt-12 divide-y divide-mist border-y border-mist">
            {opbouw.map((o) => (
              <div key={o.laag} className="grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6">
                <dt className="sm:col-span-6">
                  <span className="text-lg font-semibold text-primary-900">{o.laag}</span>
                </dt>
                <dd className="font-display text-3xl font-bold tabular-nums text-primary-900 sm:col-span-3">
                  {o.maat}
                </dd>
                <dd className="text-sm text-primary-500 sm:col-span-3 sm:text-right">{o.bron}</dd>
              </div>
            ))}
            <div className="grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6">
              <dt className="sm:col-span-6">
                <span className="text-lg font-semibold text-primary-900">Totaal boven je huidige vloer</span>
                <span className="mt-1 block text-sm text-primary-500">
                  optelsom van gepubliceerde componentmaten: afgeleid, geen meting van jouw vloer
                </span>
              </dt>
              <dd className="font-display text-3xl font-bold tabular-nums text-primary-900 sm:col-span-3">
                35–41 mm
              </dd>
              <dd className="text-sm text-primary-500 sm:col-span-3 sm:text-right">eigen berekening</dd>
            </div>
          </dl>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-primary-600">
            Kies je in plaats daarvan de zware route met zwaluwstaartplaat, lichtbeton en dekvloer,
            dan komt daar nog een flink stuk bij. Meet daarom vóór alles twee dingen op: de ruimte
            onder je binnendeuren, en de overgang naar de gang of de aangrenzende kamer. Op een
            klusforum vatte iemand de echte beperking in één zin samen:{' '}
            <a
              href="https://www.klusidee.nl/Forum/topic/vloerverwarming-op-houten-ondervloer.56363/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
            >
              &ldquo;Aan maximale ruimte die ik omhoog kan gaan heb ik ongeveer 5 centimeter.&rdquo;
            </a>
          </p>
        </div>
      </section>

      {/* ─── DE NATTE RUIMTE ──────────────────── */}
      <section className="bg-primary-900 py-24 text-paper lg:py-32">
        <div className="container-tight">
          <div className="eyebrow !text-accent-300 before:!bg-accent-300">Het strengste antwoord</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-paper sm:text-4xl">
            Een badkamer op hout is een aparte vraag
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-base leading-relaxed text-primary-300">
                In de reacties onder het Omnicol-artikel vraagt iemand of tegels rechtstreeks op
                watervast plaatmateriaal mogen, zonder ontkoppelingsmat. Omnicol antwoordt zelf, en
                dat antwoord staat in geen enkele adviespagina die je bovenaan de zoekresultaten
                vindt: het kan alleen als de ondergrond volledig stabiel is. Twee platen kruislings
                op elkaar, balkafstand maximaal 40 cm, geen te verwachten vervorming. Daarna
                volgt de zin die telt.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-300">
                Forbo Eurocol wijst dezelfde kant op: in badkamers adviseren zij cementgebonden
                vloerplaten in plaats van hout- of gipsgebonden platen. Kan het? Ja, met een
                volledig opgebouwde waterdichting ónder het tegelwerk, want tegelwerk en voegwerk
                zijn zelf niet waterdicht. Maar de foutmarge is klein, en de schade laat zich pas
                zien als het plafond van de kamer eronder gaat vlekken.
              </p>
            </div>
            <div className="border-t border-primary-700 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <blockquote className="font-display text-2xl font-semibold leading-snug text-paper">
                &ldquo;In een vochtige ruimte is het ten strengste af te raden.&rdquo;
              </blockquote>
              <p className="mt-6 text-base leading-relaxed text-primary-300">
                Omnicol, in een reactie onder het eigen artikel, over rechtstreeks tegelen op houten
                plaatmateriaal. Een lijmfabrikant heeft geen enkel commercieel belang bij die zin.
                Juist daarom is het de zin die je wilt lezen voordat je begint.
              </p>
              <a
                href="https://blog.omnicol.eu/tegelen-op-een-houten-vloer/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 items-center underline decoration-primary-500 underline-offset-4 hover:text-paper"
              >
                Lees de bron
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WAT BEWONERS ZEGGEN ──────────────── */}
      <section className="bg-paper py-20 lg:py-24">
        <div className="container-tight">
          <div className="eyebrow">Ervaringen van bewoners</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Hetzelfde gesprek, keer op keer
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Lees je de Nederlandse klusfora over deze vraag, dan zie je één patroon: iemand heeft
            gehoord dat het niet kan, wil het toch, en loopt vast op hoogte of op de angst voor
            scheuren. Deze zinnen zijn niet van mij; ze staan openbaar op fora en ik citeer ze
            zonder naam.
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
            Mijn eerlijke lezing daarvan: &quot;het kan niet&quot; is te kort door de bocht, en
            &quot;het kan met flexlijm&quot; ook. Wat er werkelijk gebeurt, is dat de vier poorten
            hierboven één voor één langskomen, en dat de meeste mensen op poort 2 of poort 4
            stranden, niet op de lijm.
          </p>
        </div>
      </section>

      {/* ─── WAT IK ERVAN VIND ALS TEGELZETTER ── */}
      <section className="bg-clay py-20 lg:py-24">
        <div className="container-tight">
          <div className="eyebrow">Wat ik erover kan zeggen</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            De garantie is de reden dat ik hier streng in ben
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-base leading-relaxed text-primary-600">
                Ik geef 5 jaar garantie op tegelwerk en voegwerk, en 1 jaar op kitwerk. Ik voer het
                werk zelf uit, zonder onderaannemers, dus die garantie is van mij en van niemand
                anders. Dat maakt een houten ondervloer geen technische discussie maar een
                zakelijke: als ik niet kan zien dat de vloer stijf genoeg is, kan ik er ook niet
                vijf jaar voor tekenen.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Wat ik dan doe, staat gewoon in mijn werkwijze: de ondervloer eerst vlak maken en
                waar nodig egaliseren, de juiste lijm en voorlijm bij jouw tegeltype kiezen, en de
                dilataties op de juiste plek zetten. Egaliseren reken ik apart per m&sup2; en dat
                zie je terug op de offerte, zodat het geen open eind is. Je krijgt die offerte
                gespecificeerd, zonder kleine lettertjes, binnen 5 dagen. Via WhatsApp heb je
                binnen 1 werkdag antwoord.
              </p>
            </div>
            <div className="border-t border-mist pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <div className="font-display text-[clamp(3.75rem,6vw,4.75rem)] font-bold leading-none tabular-nums text-primary-900">
                L/500
              </div>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Het enige getal in dit hele verhaal waar niet omheen te werken valt: de maximale
                doorbuiging bij volle belasting. Op vier meter overspanning is dat acht millimeter.
                Alles daarboven is geen tegelprobleem meer maar een constructieprobleem, en dat los
                je niet op met een mat.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Ik werk in{' '}
                <Link
                  href="/werkgebied"
                  className="inline-flex min-h-11 items-center underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
                >
                  Breda en omstreken
                </Link>
                . Kom ik langs, dan wil ik een vloerdeel omhoog kunnen halen. Dat duurt tien
                minuten en het scheelt je mogelijk een vloer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VERVOLGVRAGEN ────────────────────── */}
      <section className="bg-paper py-20 lg:py-24">
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
        </div>
      </section>

      {/* ─── WAT HIER NIET STAAT ──────────────── */}
      <section className="bg-clay py-20 lg:py-24">
        <div className="container-tight">
          <div className="eyebrow">Eerlijk over de grens</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Drie dingen die deze pagina niet beantwoordt
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Een half antwoord dat er compleet uitziet is erger dan geen antwoord. Dit zijn de
            vragen waarop deze pagina bewust geen getal geeft, met de reden erbij.
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
            <Link href="/badkamer-betegelen-tot-plafond" className="btn-secondary">
              Tot het plafond betegelen?
            </Link>
            <Link href="/losse-tegels-en-scheurende-voegen" className="btn-secondary">
              Tegels los of voeg gescheurd?
            </Link>
            <Link href="/werkgebied" className="btn-secondary">
              Werkgebied
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────── */}
      <section className="bg-paper py-20 lg:py-24">
        <div className="container-tight rounded-3xl bg-primary-900 p-12 text-center text-paper lg:p-16">
          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl">
            Even onder jouw vloer kijken?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-primary-300">
            Stuur foto&apos;s van de ruimte en de afmetingen via WhatsApp. Je krijgt binnen
            1 werkdag antwoord en een eerste indicatie.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${business.phoneE164}`} className="btn-accent">
              <Phone className="h-4 w-4" /> {business.phone}
            </a>
            <a
              href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                'Hoi Jaap, ik heb een houten ondervloer en wil er graag tegels op. Kun je meekijken of dat kan?'
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
