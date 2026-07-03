import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MapPin, MessageCircle, Phone, ArrowRight, ArrowUpRight } from 'lucide-react'
import { cities, citiesBySlug } from '@/content/cities'
import { services } from '@/content/services'
import { projects } from '@/content/projects'
import { business } from '@/content/business'
import { localBusinessSchema, breadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

export const dynamicParams = false

export function generateStaticParams() {
  return cities.map((c) => ({ stad: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ stad: string }> }): Promise<Metadata> {
  const { stad } = await params
  const city = citiesBySlug[stad]
  if (!city) return {}
  return {
    title: `Tegelzetter ${city.name}`,
    description: `Tegelzetter in ${city.name} en omstreken. Badkamerrenovatie, vloer- en wandtegels, kitwerk en buitentegelwerk. Eén vakman voor alles. WhatsApp Jaap op 06-18249249.`,
    keywords: [
      `tegelzetter ${city.name}`,
      `tegelzetter in ${city.name}`,
      `badkamer renoveren ${city.name}`,
      `vloertegels ${city.name}`,
      `tegelzetter ${city.region}`,
    ],
    alternates: { canonical: `/tegelzetter/${city.slug}` },
    openGraph: {
      title: `Tegelzetter ${city.name} | Van Wonderen Tegelwerken`,
      description: city.intro,
      images: [city.heroImage],
    },
  }
}

export default async function CityPage({ params }: { params: Promise<{ stad: string }> }) {
  const { stad } = await params
  const city = citiesBySlug[stad]
  if (!city) notFound()

  const project = city.featuredProjectSlug
    ? projects.find((p) => p.slug === city.featuredProjectSlug)
    : null

  const waText = encodeURIComponent(`Hoi Jaap, ik woon in ${city.name} en wil graag een offerte voor tegelwerk. Ik stuur zo wat foto’s door.`)
  const waNumber = business.whatsapp.replace('+', '')

  return (
    <>
      {/* JSON-LD: LocalBusiness + Breadcrumb voor lokale SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        ...localBusinessSchema(),
        areaServed: { '@type': 'City', name: city.name },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Home', url: business.url },
        { name: 'Werkgebied', url: `${business.url}/tegelzetter` },
        { name: `Tegelzetter ${city.name}`, url: `${business.url}/tegelzetter/${city.slug}` },
      ])) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-paper pt-12 lg:pt-20 pb-16 lg:pb-24">
        <div aria-hidden className="absolute inset-0 -z-10 tile-pattern opacity-30" />
        <div aria-hidden className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-accent-100 to-transparent blur-3xl opacity-60" />
        <div className="container-x">
          <nav className="text-sm text-primary-500">
            <Link href="/" className="hover:text-accent-600">Home</Link> ·{' '}
            <Link href="/tegelzetter" className="hover:text-accent-600">Werkgebied</Link> ·{' '}
            <span className="text-primary-700">Tegelzetter {city.name}</span>
          </nav>

          <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-7 reveal">
              <div className="eyebrow">
                <MapPin className="h-3 w-3" /> {city.distance} van mijn werkplaats
              </div>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.75rem)] font-bold leading-[1.02] tracking-tight text-primary-900">
                Tegelzetter <span className="text-accent-600">{city.name}</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-600 sm:text-xl">
                {city.intro}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${waNumber}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#1ebe57] hover:shadow-lg"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Jaap
                </a>
                <a href={`tel:${business.phoneE164}`} className="btn-secondary">
                  <Phone className="h-4 w-4" /> {business.phone}
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 reveal reveal-delay-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl img-zoom">
                <Image src={city.heroImage} alt={`Tegelwerk in ${city.name}`} fill priority sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL CONTEXT */}
      <section className="bg-clay py-20">
        <div className="container-tight">
          <div className="eyebrow">Wat ik in {city.name} doe</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Lokale aanpak,<br/>
            <span className="italic font-light text-primary-600">geen standaard pakket.</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-primary-700">{city.localContext}</p>
        </div>
      </section>

      {/* DIENSTEN GRID */}
      <section className="bg-paper py-20">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow">Diensten in {city.name}</div>
            <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
              Wat ik voor je doe
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <Link
                  key={s.slug}
                  href={`/diensten/${s.slug}`}
                  className="group relative overflow-hidden rounded-3xl bg-clay p-8 transition-all duration-500 hover:bg-primary-900 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="relative">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-paper text-accent-600 transition-all duration-300 group-hover:bg-accent-500 group-hover:text-paper">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-primary-900 transition-colors group-hover:text-paper">
                      {s.title} in {city.name}
                    </h3>
                    <p className="mt-3 text-sm text-primary-600 leading-relaxed transition-colors group-hover:text-primary-300">{s.short}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROJECT */}
      {project && (
        <section className="bg-paper pb-20">
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <div className="eyebrow">Recent project</div>
                <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
                  {project.title}
                </h2>
                <p className="mt-4 text-primary-600 leading-relaxed">{project.description}</p>
                <Link href={`/projecten/${project.slug}`} className="btn-secondary mt-8">
                  Bekijk project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="lg:col-span-7">
                <Link href={`/projecten/${project.slug}`} className="block relative aspect-[16/10] overflow-hidden rounded-3xl img-zoom">
                  <Image src={project.hero} alt={project.title} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-paper pb-20">
        <div className="container-x">
          <a
            href={`https://wa.me/${waNumber}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-accent-500 to-accent-700 p-12 lg:p-16"
          >
            <div aria-hidden className="absolute top-0 right-0 grid grid-cols-4 gap-2 opacity-10 p-8">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="h-12 w-12 rounded bg-paper" />
              ))}
            </div>
            <div className="relative max-w-2xl text-paper">
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Tegelwerk in {city.name}?
              </h2>
              <p className="mt-6 text-lg text-paper/90">
                WhatsApp me met foto’s en wat maten. Binnen 1 werkdag krijg je een eerste prijsindicatie.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 font-semibold text-accent-700 transition-transform group-hover:scale-105">
                <MessageCircle className="h-4 w-4" /> Start WhatsApp
              </div>
            </div>
          </a>

          {/* Andere plaatsen */}
          <div className="mt-16">
            <div className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary-500 mb-6">Ook tegelzetter in</div>
            <div className="flex flex-wrap gap-2">
              {cities.filter(c => c.slug !== city.slug).map(c => (
                <Link key={c.slug} href={`/tegelzetter/${c.slug}`} className="rounded-full bg-clay px-4 py-2 text-sm text-primary-700 transition-all hover:bg-primary-900 hover:text-paper">
                  {c.name} <ArrowUpRight className="inline h-3 w-3" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
