import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Phone, MessageCircle, ArrowUpRight } from 'lucide-react'
import { business } from '@/content/business'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

/**
 * ANTWOORDEENHEID. Vraag: "Kan er over bestaande tegels heen getegeld worden?"
 * Contract cd0e8853-6d47-4bb0-8b9b-bd9f2dc50a37, run schrijver-20260911-2010.
 *
 * WAAROM DEZE PAGINA ANDERS IS DAN DE TIEN DIE ER AL ZIJN. De bovenlaag op deze vraag
 * (gemeten 11-09-2026, zie hieronder) zegt allemaal hetzelfde: klop met een rubberen
 * hamer, ontvet, primer, tegelen. Geen van die tien rekent uit hoeveel hoogte de tweede
 * laag kost, en niemand zet die hoogte naast het afschot van een douchevloer of naast de
 * gewichtsgrens van een gipsplaatwand. Die twee rekensommen zijn de informatiewinst van
 * deze pagina, plus de vraag die geen van de tien stelt: wat gebeurt er met de garantie
 * als de ondergrond het werk van iemand anders is.
 *
 * SERP-METING (bewijsklasse B, met engine-label; motor/scripts/serp.mjs, 11-09-2026):
 *  - koperszoekopdracht "badkamer betegelen over oude tegels":
 *      Brave  → 040badkamers.nl, hornbach.nl, reddit.com, plaktegels.com, bostik.com,
 *               sanitairwinkel.nl, klusidee.nl, mooitegelsensanitair.nl, bouwtotaal.nl,
 *               startpagina.nl
 *      DuckDuckGo → 040badkamers.nl, sanitairwinkel.nl, vloerenmantegels.nl, hornbach.nl,
 *               040badkamers.nl, klusidee.nl, plaktegels.com, plaktegels.com, klusup.nl,
 *               bouwtotaal.nl
 *      Beide motoren dezelfde winnaar. wonderentegelwerken.nl in geen van beide top-10.
 *  - vraagtekst "Kan er over bestaande tegels heen getegeld worden?" (DuckDuckGo)
 *      → plaktegels.com (op 05-09-2026 was dat nog hornbach.nl).
 *  - Brave weigerde de vraagtekst twee keer met http 429. GOOGLE ONGEMETEN (machinaal
 *    geblokkeerd, serp.mjs --diagnose). Dit is dus geen Google-uitslag.
 *
 * BRONNEN VAN DE HARDE GETALLEN (wet art. 1.1, niets verzinnen). Alle links gelezen op
 * 11 september 2026:
 *  - Opbouwhoogte tegel plus lijm: tegelsinhuis.nl/advies/dikte-vloertegels-lijm
 *    (bijgewerkt 03-04-2025): keramiek 8-10 mm, XXL 8-12 mm, natuursteen 10-20 mm;
 *    lijmlaag 2-3 mm, bij zwaar of ongelijk 4-5 mm; totaal keramiek 10-14 mm,
 *    XXL 11-17 mm, natuursteen 13-25 mm.
 *  - Afschot douchevloer: kemptegelwerk.nl/advies/douchevloer-op-afschot (bijgewerkt
 *    04-08-2026): 1 tot 2 procent richting de afvoer, ideaal rond 1,5 procent, dus
 *    1,5 cm hoogteverschil over 1 meter; water binnen ongeveer 30 seconden weg.
 *  - Gewichtsgrens gipsplaat: blog.omnicol.eu/tegelen-over-tegelen (14-03-2019):
 *    "Gipsplaat heeft een maximale gewichtsgrens van 25 kg per vierkante meter."
 *  - Soortelijk gewicht keramiek: tegel-uitverkoop.nl/blog/soortelijk-gewicht-keramische-tegels
 *    (2.000 tot 2.400 kg/m3).
 *  - Lijmverbruik en classificatie: productblad Forbo Eurocol 691 Tegellijm
 *    (2,7 kg/m2 bij 8x8 mm vertanding; C1 conform NEN-EN 12004-2:2017; afvoegen na
 *    minimaal 24 uur bij 20 graden en 65% RV).
 *  - Werkwijze en producten: Forbo Eurocol, "Vakkundig tegelen over tegels spaart tijd
 *    en geld"; BouwTotaal 7 mei, "Oude tegels verwijderen of niet?" (i.s.m. Forbo Eurocol
 *    Nederland BV).
 *  - Garantietermijn: motor_feiten `wonderen-garantie` (eigenaar_akkoord=true).
 *  - Offerte binnen 5 dagen, reactie binnen 1 werkdag: motor_feiten
 *    `wonderen-offerte-belofte` en `wonderen-reactietijd` (beide eigenaar_akkoord=true).
 *  - Artikel 10 en 12 (versie 2, 5 okt 2026) worden genoemd en gelinkt, niet geciteerd: ze
 *    staan letterlijk op /algemene-voorwaarden van deze site. De klant keurt deze pagina zelf.
 * Citaten van bewoners zijn publieke forumberichten, met bron en zonder achternaam.
 */

const url = `${business.url}/tegelen-over-bestaande-tegels`

export const metadata: Metadata = {
  title: 'Kan er over bestaande tegels heen getegeld worden?',
  description:
    'Ja, het kan, maar een nieuwe laag tegels plus lijm bouwt 10 tot 14 mm op. Op een badkamervloer is dat bijna het hele afschot naar de douchegoot. Wanneer het wel en niet verstandig is, uitgelegd door een tegelzetter uit Breda.',
  alternates: { canonical: '/tegelen-over-bestaande-tegels' },
  openGraph: {
    title: 'Kan er over bestaande tegels heen getegeld worden? | Van Wonderen Tegelwerken',
    description:
      'De twee rekensommen die geen enkel adviesartikel maakt: wat de tweede laag kost aan hoogte op een douchevloer, en wat hij weegt op een gipsplaatwand.',
    images: ['/images/projects/portfolio-2025-07-laag-2.webp'],
  },
}

const faqs = [
  {
    q: 'Hoeveel hoger wordt mijn vloer precies?',
    a: 'Reken op 10 tot 14 millimeter voor een gewone keramische tegel met lijm, 11 tot 17 millimeter voor grootformaat en 13 tot 25 millimeter voor natuursteen. Dat zijn de opbouwhoogtes die Tegels in Huis publiceert; de spreiding zit in de tegeldikte en in hoe vlak de oude vloer ligt. Ligt de oude vloer scheef, dan moet de lijmlaag dat verschil opvangen en wordt het meer. Meet dus niet je nieuwe tegel, maar je slechtste hoek.',
  },
  {
    q: 'Kan het ook op de douchevloer?',
    a: 'Dat is de plek waar de rekensom vastloopt. De douchegoot of de put heeft een vaste inbouwhoogte en gaat niet mee omhoog. Het afschot naar die afvoer hoort 1 tot 2 procent te zijn, ideaal rond 1,5 procent, en dat is 15 millimeter over een meter. Een nieuwe keramische laag van 10 tot 14 millimeter is dus bijna precies zoveel als het hele afschot: leg je die eroverheen, dan houdt het verval naar de afvoer vrijwel niets over, terwijl juist dat verval het water weg moet krijgen. Je kunt dat oplossen door de afvoer te verzetten, maar dan breek je de douchevloer alsnog open en is de tijdwinst weg.',
  },
  {
    q: 'Mijn wand is gipsplaat. Kan daar een tweede laag tegels op?',
    a: 'Daar moet je rekenen voordat je begint. Omnicol noemt 25 kilo per vierkante meter als grens voor gipsplaat. Eén laag keramiek van 8 millimeter weegt volgens het soortelijk gewicht van keramiek al 16 tot 19 kilo per vierkante meter, plus ongeveer 2,7 kilo lijm. Twee lagen komen dus ruim boven die grens uit. Op een steens- of betonwand speelt dit niet. Vraag bij twijfel het gewicht per vierkante meter op bij je tegelleverancier, dat staat vaak gewoon in het productblad.',
  },
  {
    q: 'Wordt het echt goedkoper dan slopen?',
    a: 'Minder dan mensen denken. Je bespaart het sloopwerk, de afvoer van het puin en een deel van de uren. Daar komt bij: een primer voor gesloten ondergronden, vaak een betere lijm dan je op een gewone ondergrond nodig had, en meestal een deur die ingekort moet worden of een dorpel die opnieuw moet. Ik zet geen prijs per vierkante meter op deze site omdat die afhangt van ondergrond, tegelformaat en voorwerk. Je krijgt een gespecificeerde offerte, zonder kleine lettertjes, binnen 5 dagen.',
  },
  {
    q: 'Hoe weet ik of de oude tegels goed genoeg vastzitten?',
    a: 'Tik ze stuk voor stuk af met de steel van een schroevendraaier of een rubberen hamer. Een tegel die vast zit klinkt dof en kort. Een tegel die hol klinkt heeft te weinig contact met de lijm eronder. Die halen we eruit. Zitten er veel holklinkende tegels of zie je scheuren die in een lijn doorlopen, dan is dat geen hechtingsprobleem maar beweging in de constructie eronder, en dan is tegelen over tegels geen goed idee. BouwTotaal schrijft daarover dat losse tegels of scheuren op spanningskrachten kunnen wijzen en dat er dan eerst een ontkoppelingslaag in moet.',
  },
  {
    q: 'Wat doet de extra laag met mijn vloerverwarming?',
    a: 'Omnicol beantwoordde die vraag op zijn eigen blog met: de verwarming wordt er niet negatief door beïnvloed, en de extra laag houdt de warmte juist langer vast. Wat ik nergens gemeten heb gevonden is hoeveel opstooktijd het kost. Ik zet er dus geen getal bij. Wat wel vaststaat is dat de wachttijd voordat de verwarming aan mag aan de dekvloer hangt en niet aan de tegel, en die dekvloer ligt hier onder een laag die er al jaren zit.',
  },
  {
    q: 'Kan ik ook alleen de wand doen en de vloer laten liggen?',
    a: 'Dat kan en het is vaak de verstandigste variant. De wand is de plek waar de opbouw geen kwaad kan: daar zit geen afschot, geen dorpel en geen deur die klemt. De vloer is de plek waar de millimeters ergens tegenaan lopen. Let dan wel op de aansluiting onderaan: waar de nieuwe wandtegel over de oude vloer valt, ontstaat een naad die met kit moet worden afgewerkt, en op kitwerk geef ik 1 jaar garantie tegen 5 jaar op tegel- en voegwerk.',
  },
]

const voorwaarden = [
  {
    kop: 'De oude tegels zitten écht vast',
    toets: 'Tik elke tegel af. Hol klinkt betekent eruit.',
    bron: 'Forbo Eurocol, Hornbach, Sanitairwinkel en 040 Badkamers noemen alle vier dezelfde test.',
  },
  {
    kop: 'Het vlak is vlak',
    toets: 'Leg een rei van 2 meter in meerdere richtingen en kijk waar licht onderdoor komt.',
    bron: 'Elk hoogteverschil dat je niet wegneemt, komt terug in de nieuwe laag of in extra lijmdikte.',
  },
  {
    kop: 'Vet, zeep en kalk zijn weg',
    toets: 'Ontvetten met een reiniger die daarvoor gemaakt is, en droogdeppen.',
    bron: 'Eurocol schrijft 014 Euroclean onverdund voor, inwerken, schrobben en nadrogen.',
  },
  {
    kop: 'Er is geen vochtprobleem',
    toets: 'Zoek eerst de oorzaak van schimmel, een natte plek of een muffe geur.',
    bron: 'BouwTotaal is er stellig over: tegelwerk maakt niets waterdicht, de ondergrond moet dat al zijn.',
  },
]

const opbouw = [
  { soort: 'Keramische tegel', tegel: '8–10 mm', lijm: '2–3 mm', totaal: '10–14 mm' },
  { soort: 'Grootformaat (XXL)', tegel: '8–12 mm', lijm: '2–5 mm', totaal: '11–17 mm' },
  { soort: 'Natuursteen', tegel: '10–20 mm', lijm: '2–5 mm', totaal: '13–25 mm' },
]

const gewicht = [
  { laag: 'Keramische tegel van 8 mm', rekensom: '0,008 m × 2.000 tot 2.400 kg/m³', uitkomst: '16 tot 19 kg/m²' },
  { laag: 'Lijmlaag, kam van 8×8 mm', rekensom: 'opgave Eurocol 691 Tegellijm', uitkomst: '2,7 kg/m²' },
  { laag: 'Samen, één laag', rekensom: 'tegel plus lijm', uitkomst: '19 tot 22 kg/m²' },
  { laag: 'Twee lagen op elkaar', rekensom: 'oude laag plus nieuwe laag', uitkomst: '38 tot 44 kg/m²' },
  { laag: 'Grens voor gipsplaat', rekensom: 'opgave Omnicol', uitkomst: '25 kg/m²' },
]

const stemmen = [
  {
    tekst: 'Wat zijn de voor en nadelen van over bestaand tegelwerk heen tegelen? Waar moeten we rekening mee houden? Is het een no go?',
    bron: 'Klusidee, februari 2024',
    href: 'https://www.klusidee.nl/Forum/topic/tegelen-over-bestaande-tegels-heen.160867/',
  },
  {
    tekst: 'Ik wil dit weekend mijn badkamer gaan betegelen (60 bij 30) over de oude tegels.',
    bron: 'Klusidee, juni 2010',
    href: 'https://www.klusidee.nl/Forum/topic/badkamer-betegelen-over-oude-tegels.57285/',
  },
  {
    tekst: 'Hoe lang van te voren moet ik op de oude tegels een laagje lijm zetten?',
    bron: 'Klusidee, juni 2010',
    href: 'https://www.klusidee.nl/Forum/topic/badkamer-betegelen-over-oude-tegels.57285/',
  },
  {
    tekst: 'In de eerste plaats de bestaande tegels goed ontvetten, dan een primer erop en dan pas tegelen.',
    bron: 'Klusidee, antwoord van een moderator, juni 2010',
    href: 'https://www.klusidee.nl/Forum/topic/badkamer-betegelen-over-oude-tegels.57285/',
  },
]

const welNiet = [
  {
    oordeel: 'Meestal wel',
    geval: 'Een keukenwand of een toiletwand van steen of beton, waar de oude tegels strak en vast zitten en er niets in de weg staat.',
  },
  {
    oordeel: 'Meestal wel',
    geval: 'Een badkamerwand boven de douchezone, waar geen afschot en geen dorpel meespeelt en de ondergrond het gewicht draagt.',
  },
  {
    oordeel: 'Alleen na rekenen',
    geval: 'Een vloer in een woonkamer of hal: reken de opbouw af tegen de dorpel, de deur en de overgang naar de aangrenzende ruimte voordat er één tegel op gaat.',
  },
  {
    oordeel: 'Meestal niet',
    geval: 'Een douchevloer. De afvoer gaat niet mee omhoog en de opbouw is zo groot als het complete afschot.',
  },
  {
    oordeel: 'Niet',
    geval: 'Een wand van gipsplaat waar al een laag tegels op zit. Reken het gewicht na voordat je hier zelfs maar over nadenkt.',
  },
  {
    oordeel: 'Niet',
    geval: 'Een ruimte met schimmel, een natte plek of doorlopende scheuren. Dat zijn geen tegelproblemen en een nieuwe laag dekt ze alleen af.',
  },
]

export default function TegelenOverBestaandeTegelsPage() {
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
              { name: 'Over bestaande tegels heen tegelen?', url },
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
            <span className="text-primary-600">Over bestaande tegels heen?</span>
          </nav>

          <div className="mt-12 max-w-3xl">
            <div className="eyebrow">Vraag uit de praktijk</div>
            <h1
              id="kan-er-over-bestaande-tegels-heen-getegeld-worden"
              className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-primary-900 sm:text-5xl"
            >
              Kan er over bestaande tegels heen getegeld worden?
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-primary-900">
              Ja, technisch kan het, en op een wand gaat het vaker goed dan op een vloer. Maar de
              vraag die er eigenlijk onder zit is niet of het kán. Een nieuwe laag tegels plus lijm
              bouwt ongeveer 10 tot 14 millimeter op. Op een wand merkt niemand dat. Op een
              badkamervloer is het precies zoveel als het complete afschot naar de douchegoot, en
              die goot gaat niet vanzelf mee omhoog.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-primary-600">
              Hieronder staan de vier voorwaarden waar iedereen het over eens is, en daarna de twee
              rekensommen die ik nergens anders tegenkwam: wat de tweede laag kost aan hoogte, en
              wat hij weegt.
            </p>

            <p className="mt-8 text-sm text-primary-500">
              Jaap van Wonderen, tegelzetter in Breda · geschreven 11 september 2026 · bronnen bij
              elk getal, met datum
            </p>
          </div>
        </div>
      </section>

      {/* ─── DE VIER VOORWAARDEN ──────────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Waar iedereen het over eens is</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Vier voorwaarden, en je kunt ze alle vier zelf controleren
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Ik heb de tien best vindbare Nederlandse antwoorden op deze vraag naast elkaar gelegd.
            Ze noemen alle tien dezelfde vier dingen. Dat is dus geen mening maar vakwerk waar geen
            discussie over bestaat. Het goede nieuws: je hebt er geen tegelzetter voor nodig om ze
            na te lopen.
          </p>

          <ol className="mt-12 space-y-8">
            {voorwaarden.map((v, i) => (
              <li key={v.kop} className="grid gap-3 border-t border-mist pt-8 sm:grid-cols-12 sm:gap-8">
                <div className="font-display text-3xl font-bold tabular-nums text-accent-600 sm:col-span-1">
                  {i + 1}
                </div>
                <div className="sm:col-span-11">
                  <h3 className="font-display text-xl font-semibold text-primary-900">{v.kop}</h3>
                  <p className="mt-3 text-base leading-relaxed text-primary-900">{v.toets}</p>
                  <p className="mt-2 text-sm leading-relaxed text-primary-500">{v.bron}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-primary-600">
            Komt er bij een van de vier een nee uit, dan is het antwoord op de hoofdvraag ook nee.
            Komt er vier keer een ja uit, dan begint het pas. Want dan komen de twee dingen die in
            geen enkel adviesartikel staan.
          </p>
        </div>
      </section>

      {/* ─── REKENSOM 1: DE HOOGTE ────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Rekensom 1</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Wat de tweede laag kost aan hoogte
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Vrijwel elk artikel zegt dat de vloer &quot;iets hoger&quot; wordt en dat de deur
            misschien ingekort moet. Niemand maakt de som. Die is niet ingewikkeld, want de
            componenten staan gewoon gepubliceerd.
          </p>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Opbouwhoogte van een extra laag tegels, per tegelsoort
              </caption>
              <thead>
                <tr className="border-y border-mist">
                  <th scope="col" className="py-4 pr-4 text-sm font-semibold text-primary-900">Tegelsoort</th>
                  <th scope="col" className="py-4 pr-4 text-sm font-semibold text-primary-900">Tegel</th>
                  <th scope="col" className="py-4 pr-4 text-sm font-semibold text-primary-900">Lijmlaag</th>
                  <th scope="col" className="py-4 text-sm font-semibold text-primary-900">Samen</th>
                </tr>
              </thead>
              <tbody>
                {opbouw.map((o) => (
                  <tr key={o.soort} className="border-b border-mist">
                    <th scope="row" className="py-5 pr-4 text-base font-medium text-primary-900">{o.soort}</th>
                    <td className="py-5 pr-4 text-base tabular-nums text-primary-600">{o.tegel}</td>
                    <td className="py-5 pr-4 text-base tabular-nums text-primary-600">{o.lijm}</td>
                    <td className="py-5 font-display text-xl font-bold tabular-nums text-primary-900">{o.totaal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-primary-500">
            Componentmaten uit de opbouwtabel van Tegels in Huis, bijgewerkt 3 april 2025. Ligt de
            oude vloer niet vlak, dan moet de lijmlaag dat verschil opvangen en wordt de opbouw
            hoger. Meet daarom je slechtste hoek, niet je mooiste.
          </p>

          <div className="mt-16 grid gap-8 border-t border-mist pt-12 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="font-display text-2xl font-semibold text-primary-900">
                Waar die millimeters tegenaan lopen
              </h3>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Omnicol zet het rijtje compleet in zijn eigen blog: kozijnen, apparatuur, meubels,
                leidingen en aansluitingen. Een deur die je kunt inkorten is het makkelijkste
                probleem van het stel. De dorpel naar de gang is lastiger, want daar zie je het
                verschil. En dan is er nog één die zelden genoemd wordt.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Ik neem die hoogte altijd op voordat ik een prijs noem. Hoe ik dat bij een complete
                ruimte aanpak, staat op de pagina over{' '}
                <Link href="/diensten/badkamer-renovatie" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
                  badkamerrenovatie van begin tot eind
                </Link>
                .
              </p>
            </div>
            <div className="border-t border-mist pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
              <div className="font-display text-[clamp(3.75rem,6vw,4.75rem)] font-bold leading-none tabular-nums text-primary-900">
                15 mm
              </div>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Zoveel hoogteverschil hoort er over één meter douchevloer te zitten om het water
                weg te krijgen: 1,5 procent afschot, de waarde die Kemp Tegelwerk als ideaal
                noemt. Een nieuwe keramische laag bouwt 10 tot 14 millimeter op. Dat is dus bijna
                het hele afschot, in één laag, naar de verkeerde kant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DE DOUCHEVLOER ───────────────────── */}
      <section className="bg-primary-900 py-28 text-paper lg:py-40">
        <div className="container-tight">
          <div className="eyebrow !text-accent-300 before:!bg-accent-300">De plek waar het misgaat</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-paper sm:text-4xl">
            De douchegoot gaat niet mee omhoog
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-base leading-relaxed text-primary-300">
                Een douchegoot of een doucheput heeft een vaste inbouwhoogte. Hij zit in de vloer,
                niet erop. Leg je er een laag tegels van 10 tot 14 millimeter omheen, dan blijft de
                afvoer op de oude hoogte staan terwijl de vloer eromheen stijgt. Het water loopt dan
                niet meer naar de goot toe maar ertegenaan, en het blijft staan in de hoeken.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-300">
                Kemp Tegelwerk vat het scherp samen: het water hoort binnen ongeveer dertig seconden
                weg te zijn, en scheef afschot of een verkeerde waterkering geeft binnen een jaar
                problemen. Je kunt de afvoer verzetten, maar dan breek je de douchevloer alsnog open.
                En dan is de reden om over de tegels heen te werken, de tijdwinst, meteen weg.
              </p>
            </div>
            <div className="border-t border-primary-700 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <h3 className="font-display text-xl font-semibold text-paper">
                En er ligt nog iets onder
              </h3>
              <p className="mt-6 text-base leading-relaxed text-primary-300">
                Tegelwerk is zelf niet waterdicht. Voegwerk neemt water op. De waterdichting hoort
                daarom ónder de tegel te zitten. Tegel je over een bestaande douchevloer, dan blijft
                die waterdichting liggen waar hij ligt: onder de oude laag. BouwTotaal zegt het in
                één zin die niemand overneemt: met alleen tegelwerk maak je niets waterdicht, de
                ondergrond moet dat al zijn.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-300">
                Weet je niet of daar destijds een waterdichting in is gegaan, dan weet je het na het
                overtegelen nog steeds niet. Alleen zit er dan een nieuwe vloer overheen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── REKENSOM 2: HET GEWICHT ──────────── */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="container-tight">
          <div className="eyebrow">Rekensom 2</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Wat de tweede laag weegt op een wand van gipsplaat
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Omnicol noemt in zijn blog een grens die verder nergens in de bovenlaag opduikt:
            gipsplaat draagt maximaal 25 kilo per vierkante meter, en daarboven kan structurele
            schade ontstaan. Zet dat naast het gewicht van keramiek en er komt een ongemakkelijke
            uitkomst uit.
          </p>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Gewicht per vierkante meter van een laag tegels met lijm, vergeleken met de
                draagkracht van gipsplaat
              </caption>
              <thead>
                <tr className="border-y border-mist">
                  <th scope="col" className="py-4 pr-4 text-sm font-semibold text-primary-900">Laag</th>
                  <th scope="col" className="py-4 pr-4 text-sm font-semibold text-primary-900">Rekensom</th>
                  <th scope="col" className="py-4 text-sm font-semibold text-primary-900">Gewicht</th>
                </tr>
              </thead>
              <tbody>
                {gewicht.map((g) => (
                  <tr key={g.laag} className="border-b border-mist">
                    <th scope="row" className="py-5 pr-4 text-base font-medium text-primary-900">{g.laag}</th>
                    <td className="py-5 pr-4 text-sm text-primary-500">{g.rekensom}</td>
                    <td className="py-5 font-display text-xl font-bold tabular-nums text-primary-900">{g.uitkomst}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-primary-500">
            Dit is een rekensom uit gepubliceerde getallen, geen weging van jouw tegel. Het
            soortelijk gewicht van keramiek (2.000 tot 2.400 kg per kubieke meter) komt van
            Tegel Uitverkoop, het lijmverbruik van het productblad van Eurocol 691 bij een kam van
            8 bij 8 millimeter, en de grens van 25 kilo van Omnicol. Staat het gewicht per vierkante
            meter in het productblad van jouw tegel, gebruik dan dat getal. En let op: dit geldt voor
            gipsplaat. Op een steens- of betonwand speelt het niet.
          </p>
        </div>
      </section>

      {/* ─── HOE HET DAN WEL MOET ─────────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Als het wel kan</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Wat de lijmfabrikant voorschrijft, en waarom gewone lijm niet volstaat
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-primary-600">
                Het adviesartikel zegt &quot;gebruik een primer&quot;. De fabrikant zegt welke, en
                waarom. Omnicol legt de reden uit: een bestaande tegel is een gesloten ondergrond die
                nauwelijks vocht opneemt, en daar hecht een eenvoudige lijm niet op. Er is een
                gemodificeerde lijm nodig, in poeder of in pasta.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Forbo Eurocol zet er zijn eigen producten bij: gaten dichten met 955 Wandostuc,
                ontvetten met 014 Euroclean, voorstrijken met 051 Europrimer Quartz, wandtegels tot
                30 bij 60 zetten met pastalijm 686 Supercol, grotere formaten en vloeren met
                poederlijm 765 Ecolight of 750 Multicol, en voegen met 706 Speciaalvoeg WD of
                717 Eurofine WD. Dat zijn geen merknamen die ik verkoop. Ze staan hier omdat ze
                controleerbaar zijn: je kunt het technische blad zelf naast het advies leggen.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                En de klok loopt langer dan mensen denken. Op het productblad van Eurocol 691
                Tegellijm staat dat er pas na minimaal 24 uur gevoegd mag worden, bij 20 graden en
                65 procent luchtvochtigheid. In een koude, vochtige badkamer in november is dat dus
                langer. Wanneer je daarna weer op de vloer mag en wanneer de vloerverwarming aan
                mag, staat in{' '}
                <Link href="/tegelvloer-belopen-en-vloerverwarming-aanzetten" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
                  het overzicht van droogtijden en wachttijden
                </Link>
                .
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="border-l border-mist pl-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                  Waarschuwing uit dezelfde bron
                </div>
                <p className="mt-4 text-base leading-relaxed text-primary-600">
                  BouwTotaal, dat dit artikel samen met Forbo Eurocol Nederland schreef, waarschuwt
                  voor iets dat makkelijk over het hoofd wordt gezien: losse tegels of scheuren
                  kunnen wijzen op spanningskrachten in de constructie. Zijn er meerdere van zulke
                  plekken, dan is slopen het antwoord en niet overtegelen. Bij horizontale spanning
                  in een vloer hoort er eerst een ontkoppelingslaag in, in twee lagen aangebracht.
                </p>
                <p className="mt-6 text-base leading-relaxed text-primary-600">
                  Wat losse tegels en scheurende voegen betekenen als het werk al gedaan ís, en wie
                  dan herstelt en betaalt, staat op{' '}
                  <Link href="/losse-tegels-en-scheurende-voegen" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
                    de pagina over losse tegels en scheurende voegen
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── UIT EIGEN WERK ───────────────────── */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-6">
              <Image
                src="/images/projects/portfolio-2025-07-laag-2.webp"
                alt="Badkamer vóór de renovatie: kleine mozaïekvloertegels, witte wandtegels en een verhoogde douchehoek met rode tegels, allemaal nog op hun plek."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6">
              <div className="eyebrow">Uit eigen werk</div>
              <h2 className="mt-4 font-display text-3xl font-bold text-primary-900">
                Zo ziet de vraag er in het echt uit
              </h2>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Dit is een badkamer zoals ik hem aantref voordat er iets gebeurt: de oude tegels
                liggen er nog, de douchehoek ligt hoger dan de rest van de vloer en er zit al een
                drempel tussen. Op de wand had een tweede laag hier prima gekund. Op die
                douchehoek niet, want daar is de hoogte al een keer gebruikt.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Dat is meestal de uitkomst van dit gesprek: geen ja of nee voor de hele ruimte, maar
                ja voor de wand en nee voor de vloer.
              </p>
              <Link
                href="/projecten/badkamer-juli-2025"
                className="mt-6 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-accent-600 transition-all hover:gap-2"
              >
                Meer foto&apos;s van dit project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WEL OF NIET ──────────────────────── */}
      <section className="bg-clay py-20 lg:py-28">
        <div className="container-tight">
          <div className="eyebrow">De beslissing</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Zes situaties, zes antwoorden
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            &quot;Kan het&quot; heeft geen antwoord voor een hele badkamer. Het heeft per vlak een
            ander antwoord.
          </p>

          <dl className="mt-12 divide-y divide-mist border-y border-mist">
            {welNiet.map((w) => (
              <div key={w.geval} className="grid gap-2 py-6 sm:grid-cols-12 sm:gap-6">
                <dt className="sm:col-span-3">
                  <span className="text-sm font-semibold uppercase tracking-[0.12em] text-accent-600">
                    {w.oordeel}
                  </span>
                </dt>
                <dd className="text-base leading-relaxed text-primary-600 sm:col-span-9">{w.geval}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── DE GARANTIEVRAAG ─────────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Wat het met de garantie doet</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            De vraag die geen enkel adviesartikel stelt
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-primary-900">
                Ik geef 5 jaar garantie op tegelwerk en voegwerk en 1 jaar op kitwerk. Die garantie
                gaat over míjn werk. Als ik over bestaande tegels heen werk, dan is de laag waar
                mijn werk op rust het werk van iemand anders, gelegd in een jaar dat ik niet ken, op
                een ondergrond die ik niet gezien heb.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Dat is niet hetzelfde als &quot;dan doe ik het niet&quot;. Het betekent dat we het
                gesprek vooraf voeren en niet achteraf. In mijn algemene voorwaarden staat welke
                situaties buiten de garantie en buiten de aansprakelijkheid vallen; artikel 12 gaat
                over de garantie, artikel 10 over aansprakelijkheid. Vocht, scheuren en verzakking met
                een oorzaak buiten mijn werk staan daar allebei in, en de bestaande tegellaag is
                precies zo&apos;n oorzaak. Bij tegel op tegel is dat geen juridische
                kleine letter maar precies het risico waar je over aan het nadenken bent. Lees ze
                dus even door:{' '}
                <Link href="/algemene-voorwaarden" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
                  mijn algemene voorwaarden staan open en compleet op deze site
                </Link>
                .
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Wat ik in de praktijk doe: ik tik de oude tegels af, leg er een rei op, kijk naar de
                hoogte bij de dorpel en de afvoer, en zeg daarna eerlijk of ik er mijn naam aan
                verbind. Soms is het antwoord dat er één wand overheen kan en dat de vloer eruit
                moet. Dat is een duurdere offerte en een eerlijker afloop.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-clay p-8">
                <h3 className="font-display text-lg font-semibold text-primary-900">
                  Waarom dit hier staat
                </h3>
                <p className="mt-4 text-base leading-relaxed text-primary-600">
                  De tien best vindbare antwoorden op deze vraag komen van bouwmarkten, tegelshops
                  en één badkamerbedrijf. Ze leggen allemaal uit hoe het moet. Geen van de tien
                  schrijft op wie het risico draagt als het over vijf jaar toch loslaat. Terwijl dat
                  het enige is wat je niet zelf kunt opzoeken.
                </p>
                <p className="mt-4 text-base leading-relaxed text-primary-600">
                  Ik werk in{' '}
                  <Link href="/werkgebied" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
                    Breda en omstreken
                  </Link>{' '}
                  en ben eindverantwoordelijk voor elke klus, zonder tussenpersonen. Je krijgt een gespecificeerde
                  offerte zonder kleine lettertjes, binnen 5 dagen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WAT BEWONERS VRAGEN ──────────────── */}
      <section className="bg-clay py-20 lg:py-28">
        <div className="container-tight">
          <div className="eyebrow">Zoals de vraag echt gesteld wordt</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Op de fora gaat het over hechting, niet over hoogte
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Dat is opvallend. Mensen maken zich zorgen of de tegels blijven zitten. De vraag die ze
            meestal te laat stellen gaat over de millimeters. Deze zinnen zijn niet van mij; ze
            staan openbaar op een Nederlands klusforum en ik citeer ze zonder achternaam.
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
            Zeven vragen die op deze ene volgen
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
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Eerlijk over de grens</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Wat hier niet staat, en waarom niet
          </h2>
          <ul className="mt-12 divide-y divide-mist border-y border-mist">
            {[
              'Een prijs per vierkante meter voor tegelen over bestaande tegels. Die hangt af van de ondergrond, het tegelformaat en het voorwerk, en de bedragen die je op vergelijkings- en leadplatforms vindt zijn niet mijn prijs.',
              'Hoeveel opstooktijd de extra laag kost bij vloerverwarming. Omnicol schrijft dat de verwarming er niet negatief door wordt beïnvloed en dat de warmte langer wordt vastgehouden, maar een gemeten getal heb ik nergens gevonden, dus verzin ik er geen.',
              'Een eigen meting van het afschot in jouw douche. De 1,5 procent hierboven is de vuistregel uit de vakliteratuur, niet een opname van jouw vloer. Die opname doe ik ter plekke met een rei en een waterpas.',
              'Wat plaktegels of wandpanelen over oude tegels doen. Dat is een andere techniek met andere regels, en die heb ik hier niet onderzocht.',
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
            <Link href="/diensten/vloertegels" className="btn-secondary">
              Vloertegelwerk
            </Link>
            <Link href="/badkamer-betegelen-tot-plafond" className="btn-secondary">
              Tot het plafond betegelen?
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
            Zal ik even meekijken voor je iets besluit?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-primary-300">
            Stuur een paar foto&apos;s van de huidige tegels en de afmetingen via WhatsApp. Je krijgt
            binnen 1 werkdag antwoord en een eerlijk oordeel of het hier kan.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${business.phoneE164}`} className="btn-accent">
              <Phone className="h-4 w-4" /> {business.phone}
            </a>
            <a
              href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                'Hoi Jaap, ik vroeg me af of er bij mij over de bestaande tegels heen getegeld kan worden. Kun je meekijken?'
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
