import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, MessageCircle, Phone } from 'lucide-react'
import { business } from '@/content/business'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

/**
 * ANTWOORDEENHEID + LOKALE DIENSTVRAAG.
 * Vraag: "badkamer renovatie breda" (commerciele vraag, niet-merkgebonden).
 * Contract 8dca7665-a767-4009-a21e-1c86d59ecf18, run schrijver-20261014-1435.
 *
 * WAAROM DEZE PAGINA BESTAAT NAAST /diensten/badkamer-renovatie EN /tegelzetter/breda.
 * Die eerste zegt wat ik doe, die tweede dat ik in Breda kom. Geen van beide beantwoordt
 * de vraag die iemand met een verbouwing in zijn hoofd werkelijk heeft: er zijn in Breda
 * vijf soorten bedrijven die een badkamerrenovatie aannemen, en de keuze tussen die vijf
 * bepaalt wie plant, wie er staat en bij wie een probleem over vijf jaar landt. Beide
 * bestaande pagina's kregen in de dertig dagen tot 14-10-2026 nul vertoningen in Search
 * Console; deze pagina neemt hun werk niet af, hij verwijst er juist naar.
 *
 * SERP-METING (Google NL desktop via DataForSEO; derde-partij-waarneming van Google,
 * bewijsklasse A met herkomst):
 *  - "badkamer renovatie breda", gemeten 12-10-2026. Organisch 1-10:
 *    badkamerrenovatiebreda.net, roelofsbadkamers.nl, molenaar.nl, zandbergbv.nl,
 *    installatiebedrijfvdgoorbergh.nl, werkspot.nl, aannemingsbedrijfvanpruissen.nl,
 *    covibv.nl, trustoo.nl, tendancebadkamerrenovatie.nl. Local pack van drie. Geen AI Overview.
 *  - "badkamer renoveren breda", gemeten 14-10-2026. Organisch 1-10: molenaar.nl,
 *    roelofsbadkamers.nl, zandbergbv.nl, aannemingsbedrijfvanpruissen.nl, sigase.nl,
 *    maxbadkamers.nl, trustoo.nl, hetbadhuys.nl, bartexbouw.nl, werkspot.nl. Geen AI Overview.
 *  - In de organische top-10 van beide zoekopdrachten staat geen enkele tegelzetter.
 *    wonderentegelwerken.nl staat in geen van beide top-10.
 *  - "Anderen vroegen ook" op beide zoekopdrachten: zeven vragen, alle zeven over prijs.
 *
 * WAT IK VAN DE TIEN RANKENDE PAGINA'S ZELF HEB GELEZEN (14-10-2026, de pagina zelf):
 *  negen van de tien. werkspot.nl gaf HTTP 403 en is dus NIET gelezen; dat is een gat in
 *  de research, geen stilzwijgende overslag. Per pagina geteld op zes punten: bedrag,
 *  garantietermijn, wie het werk uitvoert, waar de aansprakelijkheid stopt, doorlooptijd,
 *  en wanneer je weer mag douchen. De uitkomst staat in de tabel op de pagina.
 *  Bedragen die ik overneem (en die niet van mij zijn): een vergelijkingsplatform noemt
 *  EUR 8.500 tot EUR 15.000 voor een complete badkamer en EUR 40 tot EUR 60 per uur
 *  arbeid; een aanbieder met vaste pakketten begint bij EUR 9.000 exclusief tegels en
 *  sanitair. Concurrenten worden niet bij naam genoemd in publieke tekst (WERKWIJZE,
 *  benchmarklus regel 5); de soorten en de aantallen zijn wel exact.
 *
 * AI-ANTWOORD (sampled, 14-10-2026, US-gelokaliseerde zoektool, dus geen nl-uitslag):
 *  negen van de negen bronnen onder het antwoord waren werkspot.nl, een en hetzelfde
 *  aanvraagplatform. Het antwoord noemde geen bedrag ("neem contact op voor een
 *  vrijblijvende offerte") en zei niets over aansprakelijkheid of droogtijden.
 *
 * ZOEKVOLUME (Google Ads via DataForSEO, opgehaald 14-10-2026, NL/nl):
 *  badkamerrenovatie breda 210, badkamer renovatie breda 90, badkamer renoveren breda 90,
 *  badkamer verbouwen breda 30 per maand. Ter vergelijking: tegelzetter breda 90.
 *
 * CLAIMS OVER HET BEDRIJF, met bron (wet art. 1.1):
 *  - eenmanszaak uit Breda sinds 2022, mag werk uitbesteden en blijft eindverantwoordelijk:
 *    motor_feiten `wonderen-persoon-jaap` (eigenaar_akkoord=true, 06-10-2026). De oudere
 *    formulering "geen onderaannemers" is per die datum vervallen en staat hier dus NIET.
 *  - 5 jaar garantie op tegel- en voegwerk, 1 jaar op kitwerk: `wonderen-garantie`.
 *  - wat buiten de garantie en de aansprakelijkheid valt: de voorwaarden op de site zelf,
 *    /algemene-voorwaarden. Ik noem de categorieen en het artikelnummer niet, want de
 *    voorwaarden worden herzien; de link wijst altijd naar de geldende tekst.
 *  - ik vertel wanneer de vloer beloopbaar is, wanneer douchen mag en wanneer de
 *    vloerverwarming aan mag: `wonderen-av-droogtijden`.
 *  - gespecificeerde offerte binnen 5 dagen, reactie binnen 1 werkdag:
 *    `wonderen-offerte-belofte` en `wonderen-reactietijd`.
 *  - werkgebied: `wonderen-werkgebied-kern` en `wonderen-werkgebied-uitbreiding`.
 *  Er staat geen eigen prijs, geen gemiddelde en geen doorlooptijdbelofte op deze pagina:
 *  daarvoor bestaat geen vastgelegd feit. Dat is als zodanig opgeschreven, niet weggelaten.
 */

const url = `${business.url}/badkamer-renovatie-breda`

export const metadata: Metadata = {
  title: 'Badkamerrenovatie Breda: wie doet wat?',
  description:
    'Een badkamerrenovatie is vijf klussen achter elkaar. In Breda kun je er vijf soorten bedrijven voor bellen. Wat elke route betekent voor planning, prijs en garantie, en wat negen gelezen Bredase pagina’s er niet over zeggen.',
  alternates: { canonical: '/badkamer-renovatie-breda' },
  openGraph: {
    title: 'Badkamerrenovatie Breda: wie doet wat? | Van Wonderen Tegelwerken',
    description:
      'Vijf routes naar een nieuwe badkamer in Breda, naast elkaar. Met wat negen van de tien best vindbare pagina’s over prijs, garantie en aansprakelijkheid niet zeggen.',
    images: ['/images/projects/portfolio-2025-07-laag-1.webp'],
  },
}

/** De vijf soorten bedrijven die in Breda een badkamerrenovatie aannemen. */
const routes = [
  {
    soort: 'De badkamerspeciaalzaak of pakketaanbieder',
    krijg:
      'Een showroom, een ontwerp en vaak een vast pakket met een vanaf-prijs. Tegels en sanitair koop je in hetzelfde huis, en de planning komt van hun projectleider.',
    let:
      'De vanaf-prijs is bijna altijd exclusief tegels en sanitair, dus de twee posten die je zelf uitkiest. Vraag wat er in het pakket zit en wat erbuiten valt voordat je het bedrag vergelijkt.',
    garantie:
      'Eén partij voor het hele werk, dus één adres voor een klacht. Wie het tegelwerk feitelijk legt staat er zelden bij.',
  },
  {
    soort: 'Het installatiebedrijf of de loodgieter',
    krijg:
      'Sterk op het deel dat onder de vloer en in de wand verdwijnt: water, afvoer, elektra, vloerverwarming. Het tegelwerk en de afwerking komen er omheen.',
    let:
      'Dit is de route als jouw knelpunt in de leidingen zit, bijvoorbeeld een afvoer die verplaatst moet of een douche die van bad naar inloop gaat.',
    garantie:
      'Op het installatiewerk zit hun garantie. Voor het tegelwerk hangt het ervan af wie dat deel uitvoerde.',
  },
  {
    soort: 'Het aannemings- of bouwbedrijf',
    krijg:
      'De route als er meer verandert dan de badkamer: een wand eruit, een dakkapel erbij, de hele verdieping. Zij coördineren alle vakmensen.',
    let:
      'Voor alleen een badkamer is dit vaak een laag met coördinatie erbovenop die je niet nodig hebt.',
    garantie:
      'De hoofdaannemer is je aanspreekpunt, ook voor werk dat hij heeft uitbesteed.',
  },
  {
    soort: 'Het vergelijkings- of aanvraagplatform',
    krijg:
      'Een formulier, en daarna telefoon van drie tot vijf bedrijven. Het platform voert zelf niets uit en levert geen werk.',
    let:
      'Twee van de tien plekken op de eerste pagina van Google zijn hier zo’n platform, en de bedragen die je in zoekresultaten ziet komen er vaak vandaan. Het zijn gemiddelden over het hele land, niet een prijs voor jouw badkamer.',
    garantie:
      'Nul. Je overeenkomst is met het bedrijf dat uiteindelijk komt, en die moet je dus alsnog zelf beoordelen.',
  },
  {
    soort: 'De tegelzetter of de eenmanszaak',
    krijg:
      'Eén vakman die het werk zelf doet en die je op de klus ziet staan. Bij mij: het tegelwerk, het voegwerk en het kitwerk, en als je dat wilt de hele renovatie eromheen.',
    let:
      'Een eenmanszaak heeft één agenda, dus de startdatum is minder flexibel dan bij een bedrijf met ploegen. Wil je morgen beginnen, dan is dit meestal niet de snelste route.',
    garantie:
      'Bij mij 5 jaar op tegel- en voegwerk en 1 jaar op kitwerk. Ik mag werk uitbesteden aan een andere vakman en blijf dan eindverantwoordelijk.',
  },
]

/** De volgorde van een badkamerrenovatie. Niet mijn uitvinding; wel in deze volgorde dwingend. */
const volgorde = [
  {
    stap: 'Slopen en afvoeren',
    wat: 'Oude tegels, oud sanitair, soms de dekvloer eruit. Dit is de fase waarin verrassingen opduiken: een rotte plek, een leiding op een onverwachte plaats, een vloer die veel schever is dan hij leek.',
  },
  {
    stap: 'Leidingwerk en elektra',
    wat: 'Water, afvoer, eventueel vloerverwarming en de groepen voor spiegel, verlichting en ventilatie. Alles wat hierna onder tegel verdwijnt moet nu kloppen.',
  },
  {
    stap: 'Ondergrond en waterkering',
    wat: 'Egaliseren, afschot in de douchevloer, en daarna de laag die het water tegenhoudt. Dit is het onderdeel dat je na afloop nooit meer ziet en waar niemand op keurt.',
  },
  {
    stap: 'Tegelwerk',
    wat: 'Wand eerst, dan de vloer, dan de onderste rij wandtegels op maat. De indeling van het vlak spreken we vooraf af, want de plaats van de eerste tegel bepaalt waar de snijtegel valt.',
  },
  {
    stap: 'Sanitair en afwerking',
    wat: 'Kranen, wastafel, toilet, douchewand. Daarna voegen en als laatste kitten.',
  },
  {
    stap: 'De drie klokken',
    wat: 'Lijm, voeg en kit drogen elk op hun eigen tempo, en die klokken lopen pas na de laatste handeling af. Dit is het deel dat een planning langer maakt dan het aantal werkdagen.',
  },
]

/** Zes punten, negen gelezen pagina's. Geteld, niet geschat. */
const telling = [
  {
    punt: 'Een bedrag',
    aantal: '2 van 9',
    wat: 'Een vergelijkingsplatform noemt € 8.500 tot € 15.000 voor een complete badkamer en € 40 tot € 60 per uur arbeid. Een aanbieder met vaste pakketten begint bij € 9.000 exclusief tegels en sanitair. Eén pagina zegt expliciet geen bedrag te noemen voordat ze bij je zijn geweest.',
  },
  {
    punt: 'Een garantietermijn in jaren',
    aantal: '1 van 9',
    wat: 'Die ene noemt vijf jaar op installatie en montage. Op de overige acht staat geen termijn.',
  },
  {
    punt: 'Wie het werk feitelijk uitvoert',
    aantal: '1 van 9',
    wat: 'Eén pagina zegt ondubbelzinnig dat het werk door het eigen bedrijf wordt uitgevoerd. Vier schrijven "onze monteurs" of "vaste vakmensen" zonder te zeggen of dat personeel of ingehuurde vakmensen zijn. Eén is een platform en voert niets uit. Drie zeggen er niets over.',
  },
  {
    punt: 'Waar de aansprakelijkheid stopt',
    aantal: '0 van 9',
    wat: 'Geen enkele pagina schrijft op welke schade buiten de garantie valt of waar de verantwoordelijkheid van de ene vakman ophoudt en die van de volgende begint. Precies de vraag die in een renovatie met vier of vijf partijen telt.',
  },
  {
    punt: 'Een doorlooptijd',
    aantal: '5 van 9',
    wat: 'En die vijf lopen uiteen van een doucherenovatie in één dag en een complete badkamer in 4 tot 5 dagen, tot 2 tot 3 weken en 10 tot 15 werkdagen. Het verschil zit niet in tempo maar in wat er meegaat.',
  },
  {
    punt: 'Wanneer je weer mag douchen',
    aantal: '0 van 9',
    wat: 'Eén pagina zegt dat douchen tijdens de renovatie niet kan en biedt een tijdelijke voorziening aan. Over de droogtijd daarna, dus over de dagen tussen "klaar" en "bruikbaar", zwijgen alle negen.',
  },
]

const faqs = [
  {
    q: 'Wat kost een renovatie van een badkamer gemiddeld?',
    a: 'Op deze pagina staat geen gemiddelde van mij, omdat ik er geen heb gemeten en een geschat bedrag je niets oplevert. Wat ik wel kan laten zien: van de negen pagina’s die Google in Breda op deze vraag laat zien en die ik op 14 oktober 2026 las, noemen er twee een bedrag. Een vergelijkingsplatform houdt het op € 8.500 tot € 15.000 voor een complete badkamer en € 40 tot € 60 per uur arbeid. Een aanbieder met vaste pakketten begint bij € 9.000 exclusief tegels en sanitair, dus zonder de twee posten die je zelf uitkiest. Dat zijn hun bedragen en niet de mijne. Van mij krijg je een gespecificeerde offerte binnen 5 dagen, met per regel wat erin zit.',
  },
  {
    q: 'Wat kost een nieuwe badkamer inclusief installatie?',
    a: 'Dat hangt vooral af van wie het sanitair levert en of de leidingen blijven liggen waar ze liggen. Een badkamer waarin de afvoer verplaatst wordt en een inloopdouche komt waar een bad stond, is een ander project dan dezelfde ruimte met dezelfde indeling in nieuwe tegels. Daarom staat er geen bedrag bij: ik wil eerst weten wat er achter de wand gebeurt. Voor het deel dat ik zelf doe, het tegelwerk, staat de rekenregel met vierkante meters wel uitgewerkt.',
  },
  {
    q: 'Wat kost het om een badkamer in 1 dag te laten renoveren?',
    a: 'Een complete badkamer in één dag is geen renovatie maar een opknapbeurt: kit en voeg vernieuwen, of een nieuwe laag tegels op een vlak dat intact is. Dat kan en dat is vaak verstandig. Een echte renovatie waarin gesloopt wordt, haalt die dag niet, en niet door het tempo maar door de droogtijden. Lijm, voeg en kit hebben elk hun eigen wachttijd, en die versnelt niet mee met de planning.',
  },
  {
    q: 'Hoe lang kan ik niet douchen?',
    a: 'Zolang de badkamer open ligt, en daarna nog de droogtijd van lijm, voeg en kit. Ik zeg bij de planning welke dag de vloer beloopbaar is, wanneer je mag douchen en wanneer de vloerverwarming aan mag, en die gaat altijd gefaseerd aan. Geen van de negen pagina’s die ik las noemt die termijnen. Per onderdeel staan ze op de pagina over droogtijden.',
  },
  {
    q: 'Hoe kan ik mijn oude badkamer goedkoop opknappen?',
    a: 'Twee dingen leveren het meeste op voor het minste geld. Kit en voeg laten vervangen maakt een badkamer die vies lijkt vaak weer fris, en dat is een klus van ongeveer een dag. En over bestaande tegels heen tegelen kan op een wand vaker dan mensen denken. Op een douchevloer juist bijna nooit, omdat een tweede laag plus lijm 10 tot 14 millimeter opbouwt en het afschot naar de goot opeet. Dat verschil staat uitgewerkt op een eigen pagina.',
  },
  {
    q: 'Moet ik de tegels zelf kopen of lever jij ze?',
    a: 'Zelf kopen mag en kost bij mij niets extra. Wat het wel verandert is hoeveel je moet bestellen, wat de tegelhandel terugneemt van wat overblijft, en bij wie een probleem met dat materiaal landt. Die drie dingen staan uitgewerkt op de pagina over tegels zelf kopen.',
  },
  {
    q: 'Kom je in heel Breda, en ook erbuiten?',
    a: 'Mijn kerngebied is Breda met Teteringen, Princenhage, Bavel, Ulvenhout, Effen en Dorst, alles binnen een kwartier rijden. Daarbuiten kom ik in Oosterhout, Etten-Leur, Rijen, Tilburg en Zundert, en voor grotere projecten op aanvraag in Made, Dongen, Gilze en Roosendaal.',
  },
  {
    q: 'Wanneer moet je mij juist niet bellen?',
    a: 'Als je een showroom wilt waar je tegels, sanitair en ontwerp in één keer uitkiest, want die heb ik niet. Als je volgende week wilt beginnen, want ik heb één agenda. En als het alleen om de laagste prijs gaat, want daar ga ik niet in meebieden. In alle drie de gevallen helpt een badkamerspeciaalzaak of een bedrijf met ploegen je beter, en dat zeg ik liever nu dan na de eerste afspraak.',
  },
]

export default function BadkamerRenovatieBredaPage() {
  const waText = encodeURIComponent(
    'Hoi Jaap, ik wil mijn badkamer in Breda laten renoveren. Ik stuur de afmetingen en een paar foto’s door.'
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: business.url },
              { name: 'Badkamer renovatie', url: `${business.url}/diensten/badkamer-renovatie` },
              { name: 'Badkamerrenovatie Breda', url },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* ─── HERO: DE VRAAG EN HET ANTWOORD ───── */}
      <section className="bg-paper pt-12 lg:pt-20 pb-20 lg:pb-28">
        <div className="container-tight">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-primary-500">
            <Link href="/" className="raaklink raaklink-strak hover:text-accent-600">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/diensten/badkamer-renovatie" className="raaklink raaklink-strak hover:text-accent-600">
              Badkamer renovatie
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-600">In Breda</span>
          </nav>

          <div className="mt-12 max-w-3xl">
            <div className="eyebrow">Vraag uit de praktijk</div>
            <h1
              id="badkamerrenovatie-breda-wie-doet-wat"
              className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-primary-900 sm:text-5xl"
            >
              Badkamerrenovatie in Breda: wie doet wat?
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-primary-900">
              Een badkamerrenovatie is niet één klus maar vijf achter elkaar: slopen,
              leidingwerk en elektra, de ondergrond waterdicht maken, tegelwerk, en als
              laatste sanitair en afwerking. In Breda kun je daarvoor vijf soorten bedrijven
              bellen, en welk soort je kiest bepaalt drie dingen: wie de volgorde plant, wie er
              daadwerkelijk staat, en bij wie een probleem over vijf jaar landt.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-primary-600">
              Ik ben Jaap van Wonderen, tegelzetter in Breda. Hieronder staan die vijf routes
              naast elkaar, de volgorde waarin het werk moet, en een telling van wat de negen
              best vindbare Bredase pagina’s over deze vraag wel en niet opschrijven. Op twee
              punten zeggen ze alle negen niets, en dat zijn precies de twee die bepalen of een
              renovatie vervelend wordt.
            </p>

            <p className="mt-8 text-sm text-primary-500">
              Geschreven 14 oktober 2026 · de zoekresultaten en de getelde pagina’s met datum en
              herkomst erbij · geen bedrag van mij op deze pagina, en hieronder staat waarom
            </p>
          </div>
        </div>
      </section>

      {/* ─── DE VIJF ROUTES ───────────────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">De keuze die je eigenlijk maakt</div>
          <h2
            id="welke-soorten-bedrijven-doen-een-badkamerrenovatie-in-breda"
            className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl"
          >
            Vijf routes naar dezelfde badkamer
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Wie in Breda zoekt op badkamerrenovatie krijgt tien resultaten te zien die
            allemaal hetzelfde lijken aan te bieden. Ze zijn het niet. Het zijn vijf
            verschillende soorten bedrijven, en de vraag is niet welke de beste is maar welke
            bij jouw badkamer past. Hieronder staat per soort wat je krijgt, waar je op moet
            letten, en wie dan je garantie geeft.
          </p>

          <div className="mt-12 space-y-10">
            {routes.map((r, i) => (
              <article key={r.soort} className="border-t border-mist pt-8">
                <div className="grid gap-4 sm:grid-cols-12 sm:gap-8">
                  <div className="font-display text-3xl font-bold tabular-nums text-accent-600 sm:col-span-1">
                    {i + 1}
                  </div>
                  <div className="sm:col-span-11">
                    <h3 className="font-display text-xl font-semibold text-primary-900">
                      {r.soort}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-primary-900">{r.krijg}</p>
                    <p className="mt-3 text-base leading-relaxed text-primary-600">{r.let}</p>
                    <p className="mt-3 text-sm leading-relaxed text-primary-500">
                      <span className="font-semibold uppercase tracking-[0.12em] text-accent-600">
                        Garantie{' '}
                      </span>
                      {r.garantie}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-primary-500">
            Deze vijf soorten zijn geen indeling die ik heb bedacht. Ze komen uit de twee
            Google-uitslagen die ik op 12 en 14 oktober 2026 heb laten meten voor
            &quot;badkamer renovatie breda&quot; en &quot;badkamer renoveren breda&quot;: samen
            veertien verschillende pagina’s. Negen daarvan heb ik zelf gelezen, en die negen
            vallen alle negen in een van deze vijf soorten; de overige vijf ken ik alleen van hun
            titel. Geen van de negen die ik las is van een tegelzetter. In het kaartje met drie
            bedrijven naast de resultaten staat er wel één die badkamerrenovatie en tegelwerk
            combineert.
          </p>
        </div>
      </section>

      {/* ─── DE VOLGORDE ──────────────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Wat er in welke volgorde gebeurt</div>
          <h2
            id="in-welke-volgorde-gaat-een-badkamerrenovatie"
            className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl"
          >
            Zes fases, en de laatste staat niet in een planning
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            De volgorde is niet onderhandelbaar: elke fase sluit de vorige af en maakt die
            onbereikbaar. Wat na het slopen in de wand verdwijnt, komt er niet meer uit zonder
            tegels te slopen. Daarom is de belangrijkste vraag niet hoe snel het kan, maar wat
            er beslist moet zijn voordat de volgende fase begint.
          </p>

          <ol className="mt-12 divide-y divide-mist border-y border-mist">
            {volgorde.map((v, i) => (
              <li key={v.stap} className="grid gap-2 py-6 sm:grid-cols-12 sm:gap-6">
                <div className="sm:col-span-4">
                  <span className="text-sm font-semibold tabular-nums text-accent-600">
                    Fase {i + 1}
                  </span>
                  <h3 className="mt-1 text-base font-medium text-primary-900">{v.stap}</h3>
                </div>
                <p className="text-base leading-relaxed text-primary-600 sm:col-span-8">{v.wat}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-primary-900">
                Fase 3 is de fase waar het later over gaat als er iets misgaat. De laag die het
                water tegenhoudt zit onder het tegelwerk en is daarna onzichtbaar, en er is geen
                keuring die ernaar kijkt. Hoe die laag is opgebouwd en op welke drie momenten je
                hem met eigen ogen kunt zien, staat op{' '}
                <Link
                  href="/badkamer-waterdicht-maken"
                  className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
                >
                  de pagina over een badkamer waterdicht maken
                </Link>
                .
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                En fase 6 is de fase die in geen enkele planning staat. Lijm, voeg en kit drogen
                elk op hun eigen tempo, en de vloerverwarming gaat daarna altijd gefaseerd aan.
                Welke termijn bij welk onderdeel hoort en waarom de wachttijd voor de
                vloerverwarming aan de dekvloer hangt en niet aan de tegel, staat in{' '}
                <Link
                  href="/tegelvloer-belopen-en-vloerverwarming-aanzetten"
                  className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
                >
                  het overzicht van droogtijden en wachttijden
                </Link>
                .
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="border-l border-mist pl-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                  Wat ik vooraf van je nodig heb
                </div>
                <p className="mt-4 text-base leading-relaxed text-primary-600">
                  De tegels en het sanitair gekozen, of in elk geval het formaat en de
                  hoeveelheid. De plaats van de afvoer en de douche vastgelegd. En een besluit
                  over de indeling van het tegelvlak, want de plaats van de eerste tegel bepaalt
                  waar de snijtegel valt.
                </p>
                <p className="mt-4 text-base leading-relaxed text-primary-600">
                  Dat is geen formaliteit. Een beslissing die tijdens fase 2 nog verandert kost
                  een dag; dezelfde beslissing tijdens fase 4 kost het tegelwerk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DE TELLING ───────────────────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Geteld, niet geschat</div>
          <h2
            id="wat-bredase-badkamerpaginas-wel-en-niet-zeggen"
            className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl"
          >
            Negen pagina’s, zes vragen, twee keer nul
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Ik heb de pagina’s gelezen die Google in Breda op deze vraag laat zien, en ze
            afgevinkt op de zes dingen die ik zelf zou willen weten als ik mijn badkamer liet
            verbouwen. Niet om ze af te branden, want over de kwaliteit van hun werk zegt een
            webpagina niets. Het gaat om wat er structureel níet op staat.
          </p>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Zes punten, en op hoeveel van de negen gelezen Bredase pagina’s ze staan
              </caption>
              <thead>
                <tr className="border-y border-mist">
                  <th scope="col" className="py-4 pr-4 text-sm font-semibold text-primary-900">
                    Staat erop
                  </th>
                  <th scope="col" className="py-4 pr-4 text-sm font-semibold text-primary-900">
                    Aantal
                  </th>
                  <th scope="col" className="py-4 text-sm font-semibold text-primary-900">
                    Wat er dan staat
                  </th>
                </tr>
              </thead>
              <tbody>
                {telling.map((t) => (
                  <tr key={t.punt} className="border-b border-mist align-top">
                    <th
                      scope="row"
                      className="py-5 pr-4 text-base font-medium text-primary-900"
                    >
                      {t.punt}
                    </th>
                    <td className="py-5 pr-4 text-base tabular-nums text-accent-600">
                      {t.aantal}
                    </td>
                    <td className="py-5 text-sm leading-relaxed text-primary-600">{t.wat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-primary-500">
            Hoe dit gemeten is, zodat je het kunt narekenen. De ranglijst komt uit Google
            Nederland op desktop, opgevraagd via een meetdienst op 12 en 14 oktober 2026; dat is
            dus een waarneming van Google door een derde partij en niet mijn eigen zoekopdracht.
            Van de tien bedrijven en platforms die eruit kwamen heb ik er negen op 14 oktober
            zelf gelezen. De tiende, een aanvraagplatform, weigerde de pagina met een
            foutmelding, dus die staat niet in de telling. Ik noem de bedrijven niet bij naam:
            het gaat om wat er wel en niet op zo’n pagina staat, niet om wie het is.
          </p>

          <div className="mt-12 rounded-2xl bg-paper p-8">
            <h3 className="font-display text-lg font-semibold text-primary-900">
              De vragen die Google er zelf onder zet, gaan alle zeven over geld
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-600">
              Onder beide zoekopdrachten staat een blok met vragen die anderen ook stellen. Op
              12 en 14 oktober 2026 waren dat zeven vragen, en alle zeven gingen over de prijs:
              wat kost een renovatie gemiddeld, wat kost een volledige renovatie, wat kost een
              badkamer in één dag, wat kost een nieuwe badkamer inclusief installatie, en hoe
              knap je een oude badkamer goedkoop op. Dat is dus de vraag achter de vraag. En
              twee van de negen pagina’s geven er een bedrag bij.
            </p>
          </div>
        </div>
      </section>

      {/* ─── OVER DE PRIJS ───────────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Eerlijk over het bedrag</div>
          <h2
            id="wat-kost-een-badkamerrenovatie-in-breda"
            className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl"
          >
            Waarom er geen prijs van mij op deze pagina staat
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-primary-900">
                Ik kan een getal opschrijven dat goed oogt en waar je niets aan hebt. Een
                badkamer waarin de afvoer verplaatst wordt en een inloopdouche komt waar een bad
                stond, is een ander project dan dezelfde ruimte met dezelfde indeling in nieuwe
                tegels. Het verschil zit in fase 1 en 2, en dat zie ik pas als ik er sta.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Wat ik wel kan doen is laten zien welke bedragen er circuleren, zodat je weet
                waar de getallen in je zoekresultaten vandaan komen. Een vergelijkingsplatform
                noemt € 8.500 tot € 15.000 voor een complete badkamer en een uurtarief van
                € 40 tot € 60 voor arbeid. Een aanbieder met vaste pakketten begint bij € 9.000, exclusief tegels en sanitair, dus zonder de twee posten die jij zelf
                uitkiest. Dat zijn hun bedragen, gelezen op 14 oktober 2026, en ze zijn niet van
                mij.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Voor het deel dat ik zelf doe is de rekensom wel na te rekenen. Het wandoppervlak
                in een badkamer is drie tot vijf keer de vloer, en dat bepaalt de prijs van
                tegelwerk meer dan het tarief. Hoe je je eigen aantal vierkante meters uitrekent
                staat op{' '}
                <Link
                  href="/wat-kost-een-badkamer-betegelen"
                  className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
                >
                  de pagina over wat een badkamer betegelen kost
                </Link>
                .
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="border-l border-mist pl-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                  Wat je in plaats daarvan krijgt
                </div>
                <p className="mt-4 text-base leading-relaxed text-primary-600">
                  Een gespecificeerde offerte binnen 5 dagen, zonder kleine lettertjes, met per
                  regel wat erin zit en wat apart geprijsd is. Op een WhatsApp met de afmetingen
                  en een paar foto’s krijg je binnen 1 werkdag antwoord.
                </p>
                <p className="mt-4 text-base leading-relaxed text-primary-600">
                  Wat er bij mij wel en niet in de prijs per vierkante meter zit, en wat apart op
                  de offerte komt, staat bij{' '}
                  <Link
                    href="/diensten/badkamer-renovatie"
                    className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
                  >
                    de dienst badkamer renovatie
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WAAR MIJN GARANTIE STOPT ─────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Het punt waarover niemand schrijft</div>
          <h2
            id="waar-stopt-de-garantie-bij-een-badkamerrenovatie"
            className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl"
          >
            Waar mijn garantie stopt, en waarom dat juist bij een renovatie telt
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            In een renovatie werken vier of vijf vakmensen op dezelfde ruimte, de een na de
            ander. Als er twee jaar later een scheur of een vlek komt, is de vraag nooit of er
            garantie is maar van wie. Daarom schrijf ik het hier op, ook al staat het op geen
            van de negen pagina’s die ik las.
          </p>

          <ul className="mt-12 divide-y divide-mist border-y border-mist">
            <li className="py-6">
              <p className="text-base leading-relaxed text-primary-900">
                <span className="font-semibold">5 jaar op tegelwerk en voegwerk, 1 jaar op
                kitwerk.</span>{' '}
                Kit is een onderhoudsproduct en verkleurt door gebruik en schoonmaakmiddelen; een
                langere termijn beloven zou niet eerlijk zijn.
              </p>
            </li>
            <li className="py-6">
              <p className="text-base leading-relaxed text-primary-900">
                <span className="font-semibold">Ik ben een eenmanszaak uit Breda, sinds 2022.</span>{' '}
                Het tegelwerk doe ik zelf. Ik mag werk geheel of gedeeltelijk door een andere
                vakman laten uitvoeren, en ik blijf dan eindverantwoordelijk. Dat staat zo in
                mijn voorwaarden.
              </p>
            </li>
            <li className="py-6">
              <p className="text-base leading-relaxed text-primary-900">
                <span className="font-semibold">Wat buiten mijn garantie valt, staat
                opgeschreven.</span>{' '}
                Scheurvorming en werking van de ondergrond, vochtproblemen, en schade door
                materiaal dat jij aanlevert: die staan als uitsluiting in mijn voorwaarden. Niet
                als ontsnappingsclausule, maar omdat een dekvloer die ik niet heb aangebracht en
                een leiding die ik niet heb aangelegd buiten mijn invloed liggen. Lees ze zelf na
                in{' '}
                <Link
                  href="/algemene-voorwaarden"
                  className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
                >
                  mijn algemene voorwaarden
                </Link>
                . Ze zijn kort en er zit geen uitleg tussen.
              </p>
            </li>
            <li className="py-6">
              <p className="text-base leading-relaxed text-primary-900">
                <span className="font-semibold">Wie wat doet, staat op de offerte.</span> Doe ik
                alleen het tegelwerk en legt iemand anders de dekvloer of de leidingen, dan staat
                dat erin, per regel. Dat is het enige dat voorkomt dat je later twee partijen naar
                elkaar ziet wijzen.
              </p>
            </li>
          </ul>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-primary-600">
            Wat er gebeurt als er na een paar jaar wél een tegel loskomt of een voeg scheurt, wie
            dan herstelt en wie betaalt, en welke vier vragen de uitkomst bepalen, staat op{' '}
            <Link
              href="/losse-tegels-en-scheurende-voegen"
              className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
            >
              de pagina over losse tegels en scheurende voegen
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ─── UIT EIGEN WERK ──────────────────── */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-6">
              <Image
                src="/images/projects/portfolio-2025-07-laag-1.webp"
                alt="Pas gelegde vloer van grootformaat tegels in betonlook, in een ruimte die nog in de verbouwing zit: kale wanden, een kozijn met uitgehard montageschuim en nog geen voegwerk tussen de tegels."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6">
              <div className="eyebrow">Uit eigen werk</div>
              <h2 className="mt-4 font-display text-3xl font-bold text-primary-900">
                Dit is hoe een renovatie er halverwege uitziet
              </h2>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Geen opgeruimde eindfoto, want die zegt weinig. Dit is het moment tussen fase 4 en
                fase 6: de tegels liggen, de voegen zijn nog open, het kozijn staat nog in het
                schuim en de ruimte is onbruikbaar. Hier beginnen de droogtijden te lopen.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Wie een planning krijgt waarin het tegelwerk op dag zes klaar is, moet weten dat
                de badkamer er dan zo bij staat. Niet af, wel klaar om te drogen.
              </p>
              <Link
                href="/projecten/badkamer-juli-2025"
                className="mt-8 inline-flex min-h-11 items-center text-base underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
              >
                Bekijk het hele project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WAAR IK KOM ─────────────────────── */}
      <section className="bg-clay py-20 lg:py-28">
        <div className="container-tight">
          <div className="eyebrow">Waar ik kom</div>
          <h2
            id="werkgebied-badkamerrenovatie"
            className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl"
          >
            Breda en een kwartier eromheen
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Mijn werkplaats staat aan de Leistraat in Breda. Het kerngebied is Breda zelf met
            Teteringen, Princenhage, Bavel, Ulvenhout, Effen en Dorst: alles binnen een kwartier
            rijden. Daarbuiten kom ik in Oosterhout, Etten-Leur, Rijen, Tilburg en Zundert, en
            voor grotere projecten op aanvraag in Made, Dongen, Gilze en Roosendaal.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Dat is geen marketinggebied maar een reistijd. Een badkamerrenovatie is geen klus
            waar ik één keer kom: ik sta er een paar dagen achter elkaar, en bij de droogtijden
            kom ik terug. Wat ik in Breda zelf doe en in welke wijken ik werk staat op{' '}
            <Link
              href="/tegelzetter/breda"
              className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
            >
              de pagina voor tegelzetter in Breda
            </Link>
            , en het volledige gebied met reistijden op{' '}
            <Link
              href="/werkgebied"
              className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
            >
              mijn werkgebied
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ─── VERVOLGVRAGEN ────────────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Wat hierna komt</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Acht vragen die op deze ene volgen
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Vier ervan staan er letterlijk zo, in de woorden waarin Google ze zelf onder deze
            zoekopdracht zet.
          </p>

          <dl className="mt-12 divide-y divide-mist border-y border-mist">
            {faqs.map((f) => (
              <details key={f.q} className="group cursor-pointer py-6">
                <summary className="flex min-h-11 list-none items-start justify-between gap-4">
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
              'Een prijs of een vanaf-bedrag van mij. Niet uit terughoudendheid: ik heb geen vastgelegd gemiddelde en een geschat getal is geen informatie. Je krijgt een gespecificeerde offerte binnen 5 dagen.',
              'Een doorlooptijd in dagen voor jouw badkamer. Die hangt aan de sloopfase en aan de droogtijden, en beide ken ik pas als ik de ruimte heb gezien.',
              'De tiende pagina uit de Google-uitslag. Dat is een aanvraagplatform en het weigerde de pagina met een foutmelding, dus het staat in geen enkele telling op deze pagina mee. Negen van tien is wat ik gelezen heb.',
              'Advies over vergunningen of over constructief werk, zoals een wand weghalen. Dat is het terrein van een aannemer of een constructeur en ik doe er geen uitspraken over.',
              'Welk sanitair of welke tegel je moet kiezen. Ik heb geen showroom en geen voorkeursleverancier; je koopt waar je wilt en ik verwerk het.',
              'Een oordeel over de bedrijven die in Breda op deze vraag gevonden worden. De telling gaat over wat er wel en niet op hun pagina’s staat, en dat is iets anders dan de kwaliteit van hun werk.',
            ].map((t) => (
              <li key={t} className="py-6 text-base leading-relaxed text-primary-600">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/diensten/badkamer-renovatie" className="btn-secondary">
              De dienst badkamer renovatie
            </Link>
            <Link href="/wat-kost-een-badkamer-betegelen" className="btn-secondary">
              Wat kost betegelen?
            </Link>
            <Link href="/badkamer-waterdicht-maken" className="btn-secondary">
              Waterdicht maken
            </Link>
            <Link href="/tegelvloer-belopen-en-vloerverwarming-aanzetten" className="btn-secondary">
              Droogtijden
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────── */}
      <section className="bg-paper py-20 lg:py-24">
        <div className="container-tight rounded-3xl bg-primary-900 p-12 text-center text-paper lg:p-16">
          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl">
            Zal ik even komen kijken wat jouw badkamer vraagt?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-primary-300">
            Stuur de afmetingen en een paar foto’s van de huidige ruimte via WhatsApp. Je krijgt
            binnen 1 werkdag antwoord, en in de offerte staat per regel wat erin zit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${business.phoneE164}`} className="btn-accent">
              <Phone className="h-4 w-4" /> {business.phone}
            </a>
            <a
              href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${waText}`}
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
