import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { cities } from '@/content/cities'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tegelzetter per plaats · Breda, Oosterhout, Tilburg en meer',
  description: 'Tegelzetter Van Wonderen werkt in Breda, Teteringen, Oosterhout, Etten-Leur, Tilburg en heel West-Brabant. Klik op je plaats voor lokale info en projecten.',
}

export default function TegelzetterIndexPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-paper pt-16 pb-12 lg:pt-24">
        <div aria-hidden className="absolute inset-0 -z-10 tile-pattern opacity-30" />
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="eyebrow">Werkgebied per plaats</div>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-primary-900 sm:text-6xl lg:text-7xl leading-[1.02]">
              Tegelzetter in<br/>
              <span className="italic font-light text-primary-600">jouw plaats.</span>
            </h1>
            <p className="mt-8 text-lg text-primary-600 max-w-xl leading-relaxed">
              Klik op je woonplaats voor de aanpak die ik daar volg. Lokale aandachtspunten, recente projecten en de snelste route naar een offerte.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper pb-24">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cities.map((city, i) => (
              <Link
                key={city.slug}
                href={`/tegelzetter/${city.slug}`}
                className="group relative overflow-hidden rounded-3xl img-zoom aspect-[4/5] reveal"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <Image
                  src={city.heroImage}
                  alt={`Tegelzetter in ${city.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                    <MapPin className="h-3 w-3" /> {city.distance}
                  </div>
                  <h2 className="mt-3 font-display text-3xl font-bold text-paper">
                    {city.name}
                  </h2>
                  <p className="mt-2 text-sm text-paper/80">{city.region}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-paper transition-all group-hover:gap-3">
                    Bekijk werkwijze <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
