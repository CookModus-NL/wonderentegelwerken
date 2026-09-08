import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Phone, MessageCircle, ArrowUpRight } from 'lucide-react'
import { business } from '@/content/business'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

/**
 * ANTWOORDEENHEID — "Moet de badkamer tot het plafond betegeld worden?"
 *
 * Waarom deze pagina root-level staat en niet onder /vragen: één nieuwe surface per
 * run (schrijver-richtlijn), en een /vragen-hub met één item is dunne inhoud. Komen er
 * meer antwoordeenheden bij, dan verhuist dit naar /vragen/<slug> mét redirect — dat is
 * dan een ontwerpbesluit, geen bouwbeslissing.
 *
 * BRONNEN VAN DE HARDE GETALLEN (wet art. 1.1 — niets verzinnen):
 *  - Besluit bouwwerken leefomgeving, art. 4.120 lid 1 en 2 (nieuwbouw) en art. 3.65
 *    (bestaande bouw), letterlijk gelezen op wetten.overheid.nl, geldende tekst 2026-01-01.
 *  - Bbl art. 4.122 lid 5b: badruimte ≥ 14 dm3/s luchtverversing.
 *  - Garantietermijnen: motor_feiten `wonderen-garantie` (eigenaar_akkoord=true).
 *  - Offerte binnen 5 dagen, gespecificeerd: motor_feiten `wonderen-offerte-belofte`.
 *  - Werkwijze laserwaterpas / symmetrisch uitmeten: content/services.ts, dienst wandtegels.
 * Citaten van bewoners zijn publieke forumberichten, met bron en zonder naam.
 */

const url = `${business.url}/badkamer-betegelen-tot-plafond`

export const metadata: Metadata = {
  title: 'Moet de badkamer tot het plafond betegeld worden?',
  description:
    'Nee, dat hoeft niet. Wettelijk moet de wand alleen geen water opnemen: tot 1,2 m, en bij douche of bad tot 2,1 m over minstens 3 m (Bbl art. 4.120). Uitgelegd door een tegelzetter uit Breda.',
  alternates: { canonical: '/badkamer-betegelen-tot-plafond' },
  openGraph: {
    title: 'Moet de badkamer tot het plafond betegeld worden? | Van Wonderen Tegelwerken',
    description:
      'Wat de bouwregels echt eisen (1,2 m — en 2,1 m bij de douche), waar het smaak wordt, en waar de 1,20 meter uit alle adviesartikelen vandaan komt.',
    images: ['/images/projects/portfolio-2025-01-wa0059.webp'],
  },
}

const faqs = [
  {
    q: 'Tot welke hoogte moet ik minimaal betegelen als ik niet tot het plafond ga?',
    a: 'Bij nieuwbouw tot 1,2 meter boven de vloer, en bij het bad of de douche tot 2,1 meter over een lengte van minstens 3 meter (Besluit bouwwerken leefomgeving, artikel 4.120). Bij een bestaande badkamer is de ondergrens 1 meter (artikel 3.65). Dat zijn minima voor de wand, geen ontwerpadvies. Kies daarboven een hoogte die op een hele tegel uitkomt in plaats van op een reepje van een paar centimeter: dat scheelt snijwerk en het oog ziet het verschil meteen.',
  },
  {
    q: 'Tot aan het verlaagde plafond, of erboven door?',
    a: 'Tot onder het verlaagde plafond. Wat daarboven zit, hoort niet meer bij de ruimte die je afwerkt en ziet niemand meer. Check wel twee dingen vooraf: de badkamer moet volgens de bouwregels een luchtverversing van minstens 14 dm3/s houden (Bbl artikel 4.122), en een luik of ventilatieklep in het verlaagde plafond moet bereikbaar blijven. Op een klusforum vatte iemand het zo samen: "Ik zie geen reden om te tegelen tot boven het verlaagd plafond. Dat kost enkel geld en moeite waar niemand iets aan heeft."',
  },
  {
    q: 'Krijg ik schimmel op het stucwerk boven de tegels?',
    a: 'Dat is de vraag die op forums het vaakst terugkomt, en het antwoord is ongemakkelijk: schimmel boven de tegels is een vochtprobleem, geen tegelprobleem. Doortegelen tot het plafond verplaatst het naar de voeg en de kit. De bouwregels stellen niet voor niets een ventilatie-eis aan een badruimte (minstens 14 dm3/s, Bbl artikel 4.122 lid 5). Werkt de afzuiging niet of staat het raam nooit open, dan lost geen enkele wandafwerking dat op.',
  },
  {
    q: 'Wordt tot het plafond veel duurder?',
    a: 'Er gaan meer tegels in, er is meer lijm- en voegwerk en het kost meer uren. Daar staat tegenover dat je de afwerking boven de tegels niet meer hoeft te laten stucen of schilderen; dat deel van de besparing valt dus weg. Ik zet geen prijs per m2 op deze site, omdat die afhangt van tegelformaat, ondergrond en voorwerk. Je krijgt een gespecificeerde offerte, zonder kleine lettertjes, binnen 5 dagen. Neem de bedragen die je op vergelijkings- en leadplatforms vindt niet over als mijn prijs.',
  },
  {
    q: 'Kan ik later alsnog doortegelen tot het plafond?',
    a: 'Technisch kan dat. Twee dingen maken het lastiger dan het klinkt. De wand boven de bestaande tegels moet dan alsnog geschikt gemaakt worden, en dezelfde tegelserie is jaren later niet vanzelf in dezelfde kleurcharge leverbaar — vraag dat bij aankoop na bij je leverancier. Houd je de optie open, koop dan meteen een paar m2 extra uit dezelfde levering en bewaar die.',
  },
  {
    q: 'Wat als mijn plafond niet waterpas is?',
    a: 'Muren, vloeren en plafonds lopen vrijwel nooit recht; daarom werk ik vanaf een uitgezette waterpaslijn en met een laserwaterpas, en meet ik de kruisingen uit zodat ze symmetrisch staan. Tot het plafond doortegelen legt een scheef plafond bloot in de bovenste rij: die wordt dan wigvormig gesneden. Stop je lager, dan kies je de bovenrand zelf en is hij per definitie waterpas. Dat is een reëel argument om níet door te tegelen, en je leest het nergens in de adviesartikelen.',
  },
  {
    q: 'Moet de douchewand anders behandeld worden dan de rest?',
    a: 'Ja. Daar geldt de zwaarste eis (2,1 meter hoog over minstens 3 meter lengte) én daar telt de laag onder de tegel. Tegelwerk en voegwerk zijn zelf niet waterdicht: voegwerk neemt water op. De waterdichting hoort dus onder het tegelwerk te zitten, en fabrikanten van afdichtingssystemen adviseren kimband in elke binnenhoek — vloer-wand en wand-wand. Verplicht is dat niet; overslaan is wel de plek waar het over jaren misgaat.',
  },
]

const zones = [
  {
    kop: 'Douche en bad',
    norm: 'Geen keuze',
    body:
      'Hier ligt de zwaarste eis: tot 2,1 meter hoog over minstens 3 meter lengte mag de wand vrijwel geen water opnemen (Bbl art. 4.120 lid 2). En de waterdichting zit onder de tegel, niet in de tegel — voegwerk neemt water op.',
  },
  {
    kop: 'Wastafel en toilet',
    norm: 'Deels vastgelegd',
    body:
      'Tot 1,2 meter boven de vloer geldt de wateropname-eis voor de hele bad- of toiletruimte (Bbl art. 4.120 lid 1). In een bestaande badkamer is die ondergrens 1 meter (art. 3.65). Daarboven begint de spatzone-afweging: hoe vaak wordt deze wand echt nat?',
  },
  {
    kop: 'De rest van de ruimte',
    norm: 'Jouw keuze',
    body:
      'Boven die hoogtes is het smaak, onderhoud en budget. Hier winnen tegels op schoonmaakgemak en verliezen ze op aanpasbaarheid: een geverfde of gestucte wand kun je over vijf jaar in een middag een andere kleur geven.',
  },
]

const stemmen = [
  {
    tekst: 'Een muur in de badkamer zonder tegels gaat heel goed samen met schimmel.',
    bron: 'Viva Forum',
    href: 'https://forum.viva.nl/viewtopic.php?t=352751',
  },
  {
    tekst: 'Wij hadden zoveel schimmel en bladderende verf toen we nog gedeeltelijk stuc hadden.',
    bron: 'Viva Forum',
    href: 'https://forum.viva.nl/viewtopic.php?t=352751',
  },
  {
    tekst: 'Na 4 jaar nog steeds blij mee.',
    bron: 'Viva Forum — over gedeeltelijk stucwerk',
    href: 'https://forum.viva.nl/viewtopic.php?t=352751',
  },
  {
    tekst: 'De kleur die je kiest staat er voor de komende 20 à 30 jaar.',
    bron: 'BouwInfo',
    href: 'https://www.bouwinfo.be/bouwforum/threads/volledig-betegelen-of-niet.304771/',
  },
]

const regels = [
  {
    waar: 'Bad- of toiletruimte, nieuwbouw',
    hoogte: '1,2 m',
    detail: 'over de volle ruimte',
    artikel: 'Bbl art. 4.120 lid 1',
  },
  {
    waar: 'Bij het bad of de douche, nieuwbouw',
    hoogte: '2,1 m',
    detail: 'over een lengte van ten minste 3 m',
    artikel: 'Bbl art. 4.120 lid 2',
  },
  {
    waar: 'Badruimte, bestaande bouw',
    hoogte: '1 m',
    detail: 'over de volle ruimte',
    artikel: 'Bbl art. 3.65',
  },
]

export default function TotPlafondBetegelenPage() {
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
              { name: 'Tot het plafond betegelen?', url },
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
            <span className="text-primary-600">Tot het plafond?</span>
          </nav>

          <div className="mt-12 max-w-3xl">
            <div className="eyebrow">Vraag uit de praktijk</div>
            <h1
              id="moet-de-badkamer-tot-het-plafond-betegeld-worden"
              className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-primary-900 sm:text-5xl"
            >
              Moet de badkamer tot het plafond betegeld worden?
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-primary-900">
              Nee. Tot het plafond betegelen is nergens verplicht. Wettelijk moet de wand van een
              badkamer alleen géén water opnemen: bij nieuwbouw tot 1,2 meter hoog, en bij het bad
              of de douche tot 2,1 meter over een lengte van minstens 3 meter (Besluit bouwwerken
              leefomgeving, artikel 4.120). In een bestaande badkamer is die grens 1 meter. Daarboven
              beslis jij — en let op de formulering: de regel eist geen tegels, hij eist een wand die
              water buiten houdt.
            </p>

            <p className="mt-6 text-sm text-primary-500">
              Jaap van Wonderen, tegelzetter in Breda · bijgewerkt 8 september 2026 ·{' '}
              wetstekst gelezen op{' '}
              <a
                href="https://wetten.overheid.nl/BWBR0041297/2026-01-01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
              >
                wetten.overheid.nl
              </a>
              , geldende tekst 1 januari 2026
            </p>
          </div>
        </div>
      </section>

      {/* ─── WAT DE REGEL PRECIES ZEGT ─────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">De harde grens</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Waar die 1,20 meter uit alle adviesartikelen vandaan komt
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Vrijwel elk artikel over deze vraag noemt 1,20 meter als &quot;de gebruikelijke hoogte&quot;
            en presenteert dat als smaakadvies. Dat is het niet. Het is het minimum uit de bouwregels
            voor een bad- of toiletruimte. Wie dat weet, ziet meteen welk deel van de beslissing
            vastligt en welk deel echt van jou is.
          </p>

          <dl className="mt-12 divide-y divide-mist border-y border-mist">
            {regels.map((r) => (
              <div key={r.artikel} className="grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6">
                <dt className="sm:col-span-6">
                  <span className="text-lg font-semibold text-primary-900">{r.waar}</span>
                  <span className="mt-1 block text-sm text-primary-500">{r.detail}</span>
                </dt>
                <dd className="font-display text-3xl font-bold tabular-nums text-primary-900 sm:col-span-3">
                  {r.hoogte}
                </dd>
                <dd className="text-sm text-primary-500 sm:col-span-3 sm:text-right">{r.artikel}</dd>
              </div>
            ))}
          </dl>

          <figure className="mt-12 max-w-2xl border-l border-mist pl-6">
            <blockquote className="text-base leading-relaxed text-primary-600">
              &ldquo;Een badruimte heeft in aanvulling op het eerste lid ter plaatse van de
              opstelplaats voor een bad of een douche een in het eerste lid bedoelde beperking aan de
              wateropname over een lengte van ten minste 3 m, tot een hoogte van 2,1 m boven de vloer
              van die ruimte.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm text-primary-500">
              Besluit bouwwerken leefomgeving, artikel 4.120 lid 2 — de eis geldt voor de wand
              (&quot;scheidingsconstructie&quot;), niet voor het materiaal. Tegelwerk is één manier om
              hem te halen.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ─── DRIE ZONES ───────────────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="eyebrow">De beslissing opgesplitst</div>
            <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
              Drie zones, drie verschillende vragen
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-600">
              &quot;Tot het plafond of niet&quot; is geen enkele beslissing maar drie. In de ene zone
              bepaalt de bouwregel de hoogte, in de andere bepaal jij hem.
            </p>
          </div>

          <div className="mt-16 grid divide-y divide-mist border-y border-mist md:grid-cols-3 md:divide-x md:divide-y-0">
            {zones.map((z) => (
              <div key={z.kop} className="py-8 md:px-8 md:py-10 md:first:pl-0 md:last:pr-0">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                  {z.norm}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-primary-900">{z.kop}</h3>
                <p className="mt-4 text-base leading-relaxed text-primary-600">{z.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-6">
              <Image
                src="/images/projects/portfolio-2025-01-wa0059.webp"
                alt="Toiletruimte uit eigen werk: de wand achter het hangtoilet is betegeld met grote grijze tegels, de aangrenzende wand is glad afgewerkt zonder tegel."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6">
              <h3 className="font-display text-2xl font-semibold text-primary-900">
                Zo ziet die keuze er in het echt uit
              </h3>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Uit eigen werk: één wand volledig betegeld, de wand ernaast glad afgewerkt zonder
                tegel. Niemand ziet daar een half afgemaakte ruimte. Wat je wél ziet is dat de
                overgang op een hele tegel eindigt en niet op een gesneden reepje — dat is het
                verschil tussen een keuze en een compromis.
              </p>
              <Link
                href="/projecten/badkamer-januari-2025"
                className="mt-6 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-accent-600 transition-all hover:gap-2"
              >
                Meer foto&apos;s van dit project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WAT BEWONERS ZEGGEN ──────────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Ervaringen van bewoners</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            De angst achter de vraag is bijna altijd schimmel
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Lees je de Nederlandse klusfora over deze keuze, dan gaat het nauwelijks over
            uitstraling en bijna altijd over vocht. Deze vier zinnen zijn niet van mij; ze staan
            openbaar op fora en ik citeer ze zonder naam.
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
            Mijn eerlijke lezing daarvan: schimmel boven de tegels is een vochtprobleem, geen
            tegelprobleem. Doortegelen verplaatst het naar de voeg en de kit. De bouwregels stellen
            aan een badruimte niet voor niets ook een ventilatie-eis — minstens 14 dm<sup>3</sup>/s
            (Bbl artikel 4.122 lid 5). Wie tot het plafond tegelt om schimmel op te lossen en de
            afzuiging laat zoals hij is, betaalt voor de verkeerde oplossing.
          </p>
        </div>
      </section>

      {/* ─── WAT IK ERVAN VIND ALS TEGELZETTER ── */}
      <section className="bg-primary-900 py-24 text-paper lg:py-32">
        <div className="container-tight">
          <div className="eyebrow !text-accent-300 before:!bg-accent-300">Wat ik erover kan zeggen</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-paper sm:text-4xl">
            Waar je stopt, ontstaat een rand
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-base leading-relaxed text-primary-300">
                Ik geef 5 jaar garantie op tegelwerk en voegwerk, en 1 jaar op kitwerk. Dat verschil
                in termijn is niet willekeurig: het zegt iets over welk onderdeel van een badkamer
                het eerst aan vervanging toe is. Elke keuze die een extra rand of naad oplevert,
                voegt daar een stukje aan toe. Dat is geen reden om altijd door te tegelen — het is
                een reden om te weten wat je kiest.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-300">
                En de bovenste rij is de moeilijkste rij. Plafonds lopen zelden waterpas. Ik werk met
                een laserwaterpas en meet de kruisingen uit zodat ze symmetrisch staan, maar een
                scheef plafond wordt bovenin altijd zichtbaar. Stop je lager, dan bepaal jij de
                bovenrand en is hij per definitie recht.
              </p>
            </div>
            <div className="border-t border-primary-700 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <div className="font-display text-[clamp(3.75rem,6vw,4.75rem)] font-bold leading-none tabular-nums text-paper">
                2,1 m
              </div>
              <p className="mt-6 text-base leading-relaxed text-primary-300">
                De enige hoogte in dit hele verhaal waar niet over te onderhandelen valt: de
                wandzone bij het bad of de douche. Alles daarboven is een gesprek over onderhoud,
                geld en smaak — en dat gesprek voer ik liever bij je thuis dan via een tabel.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-300">
                Je krijgt van mij een gespecificeerde offerte zonder kleine lettertjes, binnen
                5 dagen. Ik werk in{' '}
                <Link
                  href="/werkgebied"
                  className="inline-flex min-h-11 items-center underline decoration-primary-500 underline-offset-4 hover:text-paper"
                >
                  Breda en omstreken
                </Link>{' '}
                en voer het werk zelf uit.
              </p>
            </div>
          </div>
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

      {/* ─── WANNEER IK DIT NIET BEN ──────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Eerlijk over de grens</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Wanneer ik hier niet de juiste man voor ben
          </h2>
          <ul className="mt-12 divide-y divide-mist border-y border-mist">
            {[
              'Je wilt een vaste prijs per m2 horen zonder dat iemand de ruimte heeft gezien. Ondergrond, tegelformaat en voorwerk bepalen de prijs; een getal zonder die informatie is een gok en die zet ik niet op papier.',
              'Je woont buiten Breda en omstreken. Buiten mijn werkgebied ben ik simpelweg te duur in reistijd — kijk op de werkgebied-pagina of jouw plaats erbij staat.',
              'Je zoekt alleen iemand die snel over de bestaande tegels heen werkt zonder naar de ondergrond te kijken. Dat doe ik niet, want daar komt de garantie van 5 jaar niet doorheen.',
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
            <Link href="/diensten/wandtegels" className="btn-secondary">
              Wandtegelwerk
            </Link>
            <Link href="/tegelen-op-houten-ondervloer" className="btn-secondary">
              Tegelen op een houten ondervloer?
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
            Even meekijken in jouw badkamer?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-primary-300">
            Stuur foto&apos;s en de afmetingen via WhatsApp. Je krijgt binnen 1 werkdag antwoord en
            een eerste indicatie.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${business.phoneE164}`} className="btn-accent">
              <Phone className="h-4 w-4" /> {business.phone}
            </a>
            <a
              href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                'Hoi Jaap, ik twijfel of ik de badkamer tot het plafond moet laten betegelen. Kun je meekijken?'
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
