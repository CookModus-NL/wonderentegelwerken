import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight, ArrowUpRight, Phone, MessageCircle, MapPin, Star,
  ShieldCheck, Sparkles, ClipboardCheck, Calendar, Hammer, ChevronRight,
} from 'lucide-react'
import { services } from '@/content/services'
import { projects } from '@/content/projects'
import { business } from '@/content/business'
import { testimonials } from '@/content/testimonials'
import { faqSchema } from '@/lib/schema'
import type { Metadata } from 'next'

// Eigen canonical: de layout zet er bewust geen, anders erft elke pagina zonder eigen metadata '/'.
export const metadata: Metadata = { alternates: { canonical: '/' } }

/**
 * DE ANTWOORDEENHEID "TEGELZETTER BREDA" (3 okt 2026, contract 961be3b4, klasse
 * antwoordeenheid-verdiepen).
 *
 * WAAROM DIT BLOK BESTAAT. "tegelzetter breda" gaf in 28 dagen 93 vertoningen en 2 kliks op déze
 * pagina, op gemiddelde positie 8,4 (motor_gsc, query × pagina, 02-09 t/m 29-09-2026, niet-merk).
 * Een eigen Google-meting op 03-10-2026 (desktop, Nederland, via DataForSEO) zet de homepage
 * organisch op 5 en absoluut op 10: boven ons staan een kaartblok van drie, een vergelijkblok en
 * vier concurrenten. De pagina had tot vandaag geen enkele alinea die de vraag afmaakt — alleen
 * labels, kaarten en beeld. Daarmee was er niets om te citeren en niets om op door te klikken.
 *
 * WAAROM DEZE VORM. De eenheid is de passage, niet de pagina (brand/antwoordlaag-doctrine §1/§2):
 * elk blok hieronder moet los van deze pagina blijven kloppen. Vandaar één antwoord-eerst alinea
 * die het bedrijf zelf benoemt, en drie vragen die een lokale zoeker als eerste afstreept.
 *
 * ZICHTBAAR == SCHEMA. De FAQPage-markup wordt uit dezelfde array gegenereerd als de zichtbare
 * tekst (`platteTekst`), zodat markup nooit iets kan beweren dat niet op de pagina staat
 * (wet art. 1, search compliance 23-09-2026).
 *
 * ELKE BEWERING KOMT UIT EEN GOEDGEKEURD FEIT (motor_feiten, bedrijf_id=wonderen,
 * eigenaar_akkoord=true): persoon.eigenaar · bedrijf.registratie · werkgebied.kern ·
 * werkgebied.uitbreiding · dienst.vloertegelwerk · dienst.vloerverwarming · proces.reactietijd ·
 * voorwaarde.offerte. GEEN bedrag en GEEN nieuwe garantietermijn: die blijven een mensbesluit
 * (_beleid.mjs ALTIJD_MENS), en het m²-tarief bestaat bewust niet op deze site.
 * GEEN frequentieclaim over welke vraag Jaap vaak krijgt — hij wees 10-09-2026 een pagina af met
 * "deze vraag krijg ik zelden tot nooit" (lering 04d76b17). De framing is de onze, niet de zijne.
 */
type Deel = string | { tekst: string; href: string }

const antwoordblokken: { id: string; vraag: string; delen: Deel[] }[] = [
  {
    id: 'kom-je-ook-in-mijn-plaats',
    vraag: 'Kom je ook in mijn plaats?',
    delen: [
      'Mijn kerngebied is maximaal 15 minuten rijden: Breda, Teteringen, Princenhage, Bavel, Ulvenhout, Effen en Dorst. Op 15 tot 30 minuten kom ik in Oosterhout, Etten-Leur, Rijen, Tilburg en Zundert. Made, Dongen, Gilze en Roosendaal doe ik op aanvraag, en dan voor grotere projecten. Staat jouw plaats er niet bij, vraag het dan gewoon. Het volledige ',
      { tekst: 'werkgebied met reistijden per plaats', href: '/werkgebied' },
      ' staat apart, en voor de stad zelf is er een pagina over ',
      { tekst: 'tegelwerk in Breda en de wijken', href: '/tegelzetter/breda' },
      '.',
    ],
  },
  {
    id: 'zit-het-voegwerk-in-het-tegelwerk',
    vraag: 'Zit het voegwerk in het tegelwerk, of komt dat er nog bij?',
    delen: [
      'Het voegwerk zit erin. Net als de lijm en de voorlijm, het egaliseren van de ondervloer waar dat nodig is, en de dilataties op de plekken waar ze horen. Apart op de offerte staan de plinten, inclusief het afkitten. Sloopwerk, puinafvoer en voorrijkosten horen niet in dat standaardrijtje: die verschillen per klus en staan daarom als eigen regel in de offerte. Wat er onder je vloer gebeurt, ook bij grootformaat van 60×120 of groter, staat op de pagina over ',
      { tekst: 'vloertegelwerk', href: '/diensten/vloertegels' },
      '.',
    ],
  },
  {
    id: 'hoe-snel-heb-ik-antwoord-en-een-prijs',
    vraag: 'Hoe snel heb ik antwoord en een prijs?',
    delen: [
      'Stuur foto’s en maten via WhatsApp, dan heb je binnen 1 werkdag antwoord. Daarna kom ik vrijblijvend kijken en opmeten, en binnen 5 dagen ligt er een gespecificeerde offerte zonder kleine lettertjes: de posten los, zodat je ziet waar je ja tegen zegt. Een tarief per vierkante meter staat niet op deze site. Waarom niet, en welke bedragen de vergelijkingssites er wél bij noemen, staat op de pagina over ',
      { tekst: 'wat vloer tegelen per m² kost', href: '/wat-kost-vloer-tegelen-per-m2' },
      '.',
    ],
  },
]

const platteTekst = (delen: Deel[]) => delen.map((d) => (typeof d === 'string' ? d : d.tekst)).join('')

export default function HomePage() {
  return (
    <>
      {/* Zichtbaar == schema: dezelfde array die de sectie hieronder rendert. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqSchema(antwoordblokken.map((b) => ({ q: b.vraag, a: platteTekst(b.delen) })))
          ),
        }}
      />

      {/* ╔═══════════════════════════════════════════════ HERO ╗ */}
      <section className="relative overflow-hidden bg-paper pt-8 pb-20 lg:pb-32">
        {/* Achtergrond: tegelpattern + warme gradient */}
        <div aria-hidden className="absolute inset-0 -z-10 tile-pattern opacity-40" />
        <div aria-hidden className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-accent-100 to-transparent blur-3xl opacity-60" />

        <div className="container-x">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-12 items-center pt-12 lg:pt-20">
            {/* Linkerkant: copy */}
            <div className="lg:col-span-7 reveal">
              <div className="eyebrow">
                <MapPin className="h-3 w-3" />
                Eenmanszaak · Breda en West-Brabant
              </div>
              <p className="mt-6 font-display text-2xl font-medium leading-snug text-primary-900 sm:text-3xl">
                Ik ben Jaap, jouw vaste tegelzetter uit Breda.
              </p>
              <h1 className="mt-5 font-display text-[clamp(3.75rem,6vw,4.75rem)] font-bold leading-[1.02] tracking-tight text-primary-900">
                Tegelwerk dat{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-accent-600">jaren</span>
                  <span aria-hidden className="absolute inset-x-0 bottom-1 h-3 bg-accent-200/70 -z-0" />
                </span>{' '}
                blijft staan.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-600 sm:text-xl">
                Voor je badkamerrenovatie, vloer, wand, terras of nieuw kitwerk. Persoonlijk vakwerk, geen onderaannemers, vijf jaar garantie op tegel- en voegwerk en een jaar op kitwerk.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(business.whatsappPrefills.offerte)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-semibold text-primary-900 shadow-sm transition-all hover:bg-[#1ebe57] hover:shadow-lg active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Jaap
                </a>
                <a href={`tel:${business.phoneE164}`} className="btn-secondary">
                  <Phone className="h-4 w-4" /> {business.phone}
                </a>
              </div>

              {/* Trust strip */}
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map((i) => <Star key={i} className="h-4 w-4 fill-accent-500 text-accent-500" />)}
                  </div>
                  <span className="font-semibold text-primary-900">Google reviews</span>
                </div>
                <div className="flex items-center gap-2 text-primary-600">
                  <ShieldCheck className="h-4 w-4 text-accent-600" /> 5 jaar garantie op tegelwerk
                </div>
                <div className="flex items-center gap-2 text-primary-600">
                  <Hammer className="h-4 w-4 text-accent-600" /> Eigen vakman
                </div>
              </div>
            </div>

            {/* Rechterkant: bento van werk-foto's */}
            <div className="lg:col-span-5 reveal reveal-delay-2">
              <div className="grid gap-3 h-[520px] lg:h-[680px]" style={{ gridTemplateRows: '1.7fr 1fr' }}>
                {/* Hoofdfoto: badkamerrenovatie */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl img-zoom">
                  <Image
                    src="/images/projects/portfolio-2025-07-laag-2.webp"
                    alt="Badkamerrenovatie met grootformaat keramische wandtegels en inloopdouche"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div aria-hidden className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 z-10 text-paper">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">Badkamer</div>
                    <div className="font-display text-lg font-semibold">Recent in Breda</div>
                  </div>
                </div>

                {/* Onderste rij: 3 thumbnails */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl img-zoom">
                    <Image
                      src="/images/projects/portfolio-2025-03-wa0006.webp"
                      alt="Strakke betonlook-vloer in woonkamer"
                      fill
                      sizes="(max-width: 1024px) 33vw, 14vw"
                      className="object-cover"
                    />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2 text-xs font-semibold uppercase tracking-wider text-paper">Vloer</div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl img-zoom">
                    <Image
                      src="/images/projects/portfolio-2025-07-laag-15.webp"
                      alt="Buitentegelwerk op terras"
                      fill
                      sizes="(max-width: 1024px) 33vw, 14vw"
                      className="object-cover"
                    />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2 text-xs font-semibold uppercase tracking-wider text-paper">Terras</div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl img-zoom">
                    <Image
                      src="/images/projects/portfolio-2025-07-laag-13.webp"
                      alt="Decoratief mozaïek-wandtegelwerk"
                      fill
                      sizes="(max-width: 1024px) 33vw, 14vw"
                      className="object-cover"
                    />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2 text-xs font-semibold uppercase tracking-wider text-paper">Maatwerk</div>
                  </div>
                </div>
              </div>

              {/* Stat-strip onder de bento */}
              <div className="mt-5 flex items-center justify-between rounded-2xl bg-clay px-5 py-4">
                <div>
                  <div className="font-display text-2xl font-bold text-primary-900">{business.serviceArea.length}+ plaatsen</div>
                  <div className="text-xs text-primary-600">Breda · Teteringen · Oosterhout · Tilburg · {business.serviceArea.length - 4} meer</div>
                </div>
                <div className="hidden sm:flex items-center gap-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className={`h-3 w-3 rounded ${i % 2 ? 'bg-accent-500' : 'bg-primary-900'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════ STATS ╗ */}
      <section className="bg-primary-900 text-paper">
        <div className="container-x py-16">
          <div className="grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-primary-700">
            {[
              { value: '100%', label: 'Eigen vakwerk, geen onderaannemers' },
              { value: '5 jaar', label: 'Garantie op tegel- en voegwerk' },
              { value: '1 dag', label: 'Reactietijd via WhatsApp' },
              { value: '< 1 week', label: 'Wachttijd voor klein werk' },
            ].map((s, i) => (
              <div key={s.label} className={`px-2 lg:px-8 ${i === 0 ? 'lg:pl-0' : ''}`}>
                <div className="font-display text-5xl font-bold text-paper sm:text-6xl">{s.value}</div>
                <div className="mt-2 text-sm text-primary-300 leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════ ANTWOORDEENHEID ╗ */}
      {/* Het enige vlak op deze pagina waar je leest in plaats van kijkt. Staat bewust hoog
          (direct na de cijferstrook, in de eerste 30% van de pagina) en bewust zonder beeld:
          er is geen klantfoto van werk in uitvoering en stock is verboden (DESIGN.md). */}
      <section id="tegelzetter-breda" className="bg-clay py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="eyebrow">
              <MapPin className="h-3 w-3" />
              Tegelzetter in Breda
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl">
              Tegelzetter in Breda nodig?<br />
              <span className="italic font-light text-primary-600">Dit is wie er komt.</span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-primary-900 sm:text-xl">
              Van Wonderen Tegelwerken is de eenmanszaak van Jaap van Wonderen, Leistraat 19 in
              Breda, KvK {business.kvk}. Ik werk sinds 2022 en doe elke klus zelf: geen
              onderaannemers, geen tussenpersonen. Mijn kerngebied is Breda met zes plaatsen
              eromheen, allemaal binnen 15 minuten rijden. Je krijgt binnen 1 werkdag antwoord
              op WhatsApp en binnen 5 dagen een gespecificeerde offerte zonder kleine lettertjes.
            </p>

            <p className="mt-6 text-base leading-relaxed text-primary-600">
              Hieronder de drie dingen die je wilt afstrepen voordat je iemand in huis laat: kom
              ik bij jou, wat zit er in het werk, en hoe snel weet je waar je aan toe bent.
            </p>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-10 border-t border-mist pt-12 md:grid-cols-3 md:divide-x md:divide-mist">
            {antwoordblokken.map((b, i) => (
              <div key={b.id} className={`md:px-8 ${i === 0 ? 'md:pl-0' : ''} ${i === antwoordblokken.length - 1 ? 'md:pr-0' : ''}`}>
                <h3 id={b.id} className="font-display text-xl font-semibold leading-snug text-primary-900">
                  {b.vraag}
                </h3>
                {/* text-base (16px): 15px valt buiten contract.fontschaal — gemeten 03-10-2026. */}
                <p className="mt-4 text-base leading-relaxed text-primary-600">
                  {b.delen.map((d, j) =>
                    typeof d === 'string' ? (
                      d
                    ) : (
                      <Link
                        key={j}
                        href={d.href}
                        className="text-primary-900 underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
                      >
                        {d.tekst}
                      </Link>
                    )
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════ DIENSTEN ╗ */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-x">
          <div className="flex items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="eyebrow">Mijn specialismen</div>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl">
                Zes diensten,<br />
                <span className="italic font-light text-primary-600">één vakman.</span>
              </h2>
            </div>
            <Link href="/diensten" className="btn-ghost hidden sm:inline-flex">
              Alles bekijken <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <Link
                  key={s.slug}
                  href={`/diensten/${s.slug}`}
                  className={`group relative overflow-hidden rounded-3xl bg-clay p-8 transition-all duration-500 hover:bg-primary-900 hover:-translate-y-1 hover:shadow-2xl reveal`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {/* Background decoratie */}
                  <div aria-hidden className="absolute -right-8 -top-8 grid grid-cols-3 gap-1 opacity-10 transition-all duration-500 group-hover:opacity-30">
                    {Array.from({ length: 9 }).map((_, j) => (
                      <div key={j} className="h-6 w-6 rounded bg-current" />
                    ))}
                  </div>

                  <div className="relative">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-paper text-accent-600 transition-all duration-300 group-hover:bg-accent-500 group-hover:text-paper">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-semibold text-primary-900 transition-colors group-hover:text-paper">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent-600 transition-colors group-hover:text-accent-300">
                      {s.tagline}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-primary-600 transition-colors group-hover:text-primary-300">
                      {s.short}
                    </p>

                    <div className="mt-8 flex items-center justify-between">
                      <span className="text-sm font-medium text-primary-600 transition-colors group-hover:text-paper">
                        Bekijk dienst
                      </span>
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-900 text-paper transition-all duration-300 group-hover:bg-accent-500 group-hover:rotate-45">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════ PROCES ╗ */}
      <section className="relative bg-clay py-24 lg:py-32 overflow-hidden">
        <div aria-hidden className="absolute top-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-accent-100 blur-3xl opacity-50" />
        <div className="container-x">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow">Zo werk ik</div>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl">
              Van eerste WhatsApp<br />
              <span className="italic font-light text-primary-600">tot oplevering.</span>
            </h2>
          </div>

          <div className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Connecting line */}
            <div aria-hidden className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-px bg-gradient-to-r from-accent-300 via-accent-500 to-accent-300" />

            {[
              { icon: MessageCircle, title: 'WhatsApp', body: 'Stuur me foto’s + maten van je ruimte. Binnen 1 werkdag een eerste prijsindicatie.' },
              { icon: ClipboardCheck, title: 'Vrijblijvend kijken', body: 'Bij interesse kom ik langs om op te meten, materialen te bespreken en de offerte uit te werken.' },
              { icon: Calendar, title: 'Uitvoering', body: 'Je weet exact wanneer ik begin en wanneer ik klaar ben. Strakke planning, geen verrassingen.' },
              { icon: ShieldCheck, title: 'Oplevering + garantie', body: 'We lopen het werk samen na. 5 jaar garantie op tegelwerk en voegwerk, 1 jaar op kitwerk.' },
            ].map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="relative reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-primary-900 text-paper shadow-lg">
                    <span className="absolute font-display text-sm font-bold">0{i+1}</span>
                  </div>
                  <Icon className="absolute top-2 right-2 h-5 w-5 text-accent-500/40" />
                  <h3 className="mt-6 font-display text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary-600">{step.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════ PROJECTEN ╗ */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-x">
          <div className="flex items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="eyebrow">Recente projecten</div>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl">
                Werk dat<br />
                <span className="italic font-light text-primary-600">voor zichzelf spreekt.</span>
              </h2>
            </div>
            <Link href="/projecten" className="btn-ghost hidden sm:inline-flex">
              Alle projecten <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Bento grid */}
          <div className="grid gap-4 md:grid-cols-6 md:grid-rows-2 md:h-[640px]">
            {projects.slice(0, 3).map((p, i) => (
              <Link
                key={p.slug}
                href={`/projecten/${p.slug}`}
                className={`group relative overflow-hidden rounded-3xl img-zoom ${
                  i === 0
                    ? 'md:col-span-4 md:row-span-2'
                    : 'md:col-span-2'
                }`}
              >
                {/* Het beeld staat met `fill` absoluut; zonder een vak met eigen hoogte
                    krijgt de kaart onder md hoogte 0 en verdwijnt de hele sectie.
                    Zelfde idioom als /projecten: aspect op mobiel, volle hoogte in het raster. */}
                <div className="relative aspect-[4/3] md:h-full">
                  <Image
                    src={p.hero}
                    alt={p.title}
                    fill
                    sizes={i === 0 ? '(max-width: 768px) 100vw, 60vw' : '(max-width: 768px) 100vw, 33vw'}
                    className="object-cover"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/40 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                    {p.location} · {p.date}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-paper lg:text-3xl">
                    {p.title}
                  </h3>
                  {i === 0 && (
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/80">{p.description}</p>
                  )}
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-paper transition-all group-hover:gap-2">
                    Bekijk project <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════ REVIEWS ╗ */}
      <section className="bg-primary-900 text-paper py-24 lg:py-32 relative overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="container-x relative">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="eyebrow !text-accent-300 before:!bg-accent-400">Reviews</div>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-paper sm:text-5xl">
                Het werk eerst,<br />
                <span className="italic font-light text-primary-300">de mond als laatste.</span>
              </h2>
              {testimonials.length > 0 && (
                <a
                  href={business.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-3 rounded-full border border-primary-700 bg-primary-800/60 px-5 py-2.5 text-sm text-paper transition-all hover:border-accent-400 hover:bg-primary-800"
                >
                  <span className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-accent-300 text-accent-300" />
                    ))}
                  </span>
                  <span className="font-semibold tabular-nums">5,0</span>
                  <span className="text-primary-300">uit {testimonials.length} Google reviews</span>
                </a>
              )}
            </div>
            {/* Google review CTA — altijd zichtbaar */}
            <a
              href={business.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-paper px-6 py-3.5 text-sm font-semibold text-primary-900 shadow-lg transition-all hover:bg-accent-500 hover:text-paper hover:shadow-xl"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Laat een Google review achter
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {testimonials.length > 0 ? (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
              {testimonials.map((t, i) => (
                <figure
                  key={t.author}
                  className="mb-6 break-inside-avoid rounded-3xl bg-primary-800/50 backdrop-blur border border-primary-700 p-8 reveal"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-accent-300 text-accent-300" />
                    ))}
                  </div>
                  <blockquote className="font-display text-lg leading-relaxed text-paper">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 pt-5 border-t border-primary-700/60 text-sm">
                    <div className="font-semibold text-paper">{t.author}</div>
                    <div className="text-primary-300 mt-0.5">{t.location} · {t.project}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border-2 border-dashed border-primary-700 bg-primary-800/30 p-12 text-center">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-accent-300 text-accent-300" />
                ))}
              </div>
              <p className="font-display text-2xl font-semibold text-paper max-w-xl mx-auto leading-snug">
                Nog geen reviews binnen — <span className="italic text-accent-300">wees de eerste.</span>
              </p>
              <p className="mt-4 text-sm text-primary-300 max-w-md mx-auto">
                Werkte ik onlangs voor je? Ik zou het enorm waarderen als je een korte Google review achterlaat.
              </p>
              <a
                href={business.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-paper transition-all hover:bg-accent-600"
              >
                Schrijf een review
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ╔═══════════════════════════════════════════════ CTA ╗ */}
      <section className="relative overflow-hidden bg-paper py-24 lg:py-32">
        <div aria-hidden className="absolute inset-0 -z-10 tile-pattern opacity-30" />
        <div className="container-x">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-accent-500 to-accent-700 p-12 lg:p-20 relative overflow-hidden">
            <div aria-hidden className="absolute top-0 right-0 grid grid-cols-4 gap-2 opacity-10 p-8">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="h-12 w-12 rounded bg-paper" />
              ))}
            </div>
            <div className="relative max-w-2xl">
              <h2 className="font-display text-4xl font-bold tracking-tight text-paper sm:text-5xl lg:text-6xl leading-[1.05]">
                Klaar voor je nieuwe tegelwerk?
              </h2>
              <p className="mt-6 text-lg text-paper/90 max-w-lg">
                Stuur me een paar foto’s van je ruimte via WhatsApp. Binnen één werkdag krijg je een eerste prijsindicatie. Vrijblijvend en altijd gratis.
              </p>
              <p className="mt-3 text-base text-paper/70">Of bel direct. Ik neem zo veel mogelijk zelf op.</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(business.whatsappPrefills.offerte)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 font-semibold text-accent-700 shadow-lg transition-all hover:bg-primary-900 hover:text-paper"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Jaap
                </a>
                <a href={`tel:${business.phoneE164}`} className="inline-flex items-center gap-2 rounded-full border-2 border-paper px-7 py-3 font-semibold text-paper transition-all hover:bg-paper hover:text-accent-700">
                  <Phone className="h-4 w-4" /> {business.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
