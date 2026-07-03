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

export default function HomePage() {
  return (
    <>
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
              <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,4.75rem)] font-bold leading-[1.02] tracking-tight text-primary-900">
                Tegelwerk dat{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-accent-600">jaren</span>
                  <span aria-hidden className="absolute inset-x-0 bottom-1 h-3 bg-accent-200/70 -z-0" />
                </span>{' '}
                blijft staan.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-600 sm:text-xl">
                Voor je badkamerrenovatie, vloer, wand, terras of nieuw kitwerk. Persoonlijk vakwerk, geen onderaannemers, vijf jaar garantie.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(business.whatsappPrefills.offerte)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#1ebe57] hover:shadow-lg active:scale-[0.98]"
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
                  <ShieldCheck className="h-4 w-4 text-accent-600" /> 5 jaar garantie
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
                      <span className="text-sm font-medium text-primary-700 transition-colors group-hover:text-paper">
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
                <Image
                  src={p.hero}
                  alt={p.title}
                  fill
                  sizes={i === 0 ? '(max-width: 768px) 100vw, 60vw' : '(max-width: 768px) 100vw, 33vw'}
                  className="object-cover"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/40 to-transparent" />
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
              <div className="eyebrow !text-accent-400 before:!bg-accent-400">Reviews</div>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-paper sm:text-5xl">
                Het werk eerst,<br />
                <span className="italic font-light text-primary-300">de mond als laatste.</span>
              </h2>
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
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <figure
                  key={t.author}
                  className="rounded-3xl bg-primary-800/50 backdrop-blur border border-primary-700 p-8 reveal"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex gap-0.5 mb-6">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-accent-400 text-accent-400" />
                    ))}
                  </div>
                  <blockquote className="font-display text-lg leading-relaxed text-paper">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 text-sm">
                    <div className="font-semibold text-paper">{t.author}</div>
                    <div className="text-primary-400">{t.location} · {t.project}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border-2 border-dashed border-primary-700 bg-primary-800/30 p-12 text-center">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <p className="font-display text-2xl font-semibold text-paper max-w-xl mx-auto leading-snug">
                Nog geen reviews binnen — <span className="italic text-accent-400">wees de eerste.</span>
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
