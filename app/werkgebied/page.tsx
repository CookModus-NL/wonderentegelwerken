import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { business } from '@/content/business'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Werkgebied',
  description: 'Van Wonderen Tegelwerken werkt in Breda, Teteringen, Oosterhout, Tilburg, Etten-Leur en heel West-Brabant.',
}

const tiers = {
  kern: ['Breda', 'Teteringen', 'Princenhage', 'Bavel', 'Ulvenhout', 'Effen', 'Dorst'],
  uitbreiding: ['Oosterhout', 'Etten-Leur', 'Rijen', 'Tilburg', 'Zundert'],
  verder: ['Made', 'Dongen', 'Gilze', 'Roosendaal'],
}

export default function WerkgebiedPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-paper pt-16 pb-12 lg:pt-24">
        <div aria-hidden className="absolute inset-0 -z-10 tile-pattern opacity-30" />
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="eyebrow">Werkgebied</div>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-primary-900 sm:text-6xl lg:text-7xl leading-[1.02]">
              Actief in<br/>
              <span className="italic font-light text-primary-600">heel West-Brabant.</span>
            </h1>
            <p className="mt-8 text-lg text-primary-600 max-w-xl leading-relaxed">
              Vanuit Breda werk ik in {business.serviceArea.length} kerngemeenten. Net buiten het kerngebied? Voor grotere projecten rijd ik gerust wat verder.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper pb-24">
        <div className="container-x space-y-12">
          {/* Tier 1 — Kerngebied */}
          <div>
            <div className="flex items-baseline gap-4 mb-6">
              <div className="font-display text-4xl font-bold text-primary-900">Kerngebied</div>
              <div className="text-sm text-primary-500">≤ 15 min rijden</div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {tiers.kern.map((city) => (
                <div key={city} className="group flex items-center gap-3 rounded-2xl border border-mist bg-paper px-5 py-4 transition-all hover:border-accent-300 hover:shadow-md hover:-translate-y-0.5">
                  <MapPin className="h-4 w-4 text-accent-500 shrink-0" />
                  <span className="font-display text-lg font-semibold">{city}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 2 */}
          <div>
            <div className="flex items-baseline gap-4 mb-6">
              <div className="font-display text-3xl font-bold text-primary-900">Reguliere uitbreiding</div>
              <div className="text-sm text-primary-500">15–30 min</div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {tiers.uitbreiding.map((city) => (
                <div key={city} className="flex items-center gap-3 rounded-2xl bg-clay px-5 py-4">
                  <MapPin className="h-4 w-4 text-primary-600 shrink-0" />
                  <span className="font-medium text-primary-900">{city}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 3 */}
          <div>
            <div className="flex items-baseline gap-4 mb-6">
              <div className="font-display text-2xl font-semibold text-primary-700">Op aanvraag</div>
              <div className="text-sm text-primary-500">voor grotere projecten</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {tiers.verder.map((city) => (
                <div key={city} className="rounded-full bg-primary-100 px-4 py-2 text-sm text-primary-700">
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-clay py-20">
        <div className="container-tight text-center">
          <h2 className="font-display text-3xl font-bold text-primary-900 sm:text-4xl">Jouw plaats niet in de lijst?</h2>
          <p className="mt-4 text-primary-600 max-w-md mx-auto">
            Vraag het me. Vaak kan ik toch inplannen, vooral voor grotere of meerdaagse projecten.
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Stel je vraag <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
