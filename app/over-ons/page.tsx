import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'
import { business } from '@/content/business'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over ons',
  description: 'Van Wonderen Tegelwerken: tegelzettersbedrijf uit Breda, opgericht in 2022. Persoonlijk vakwerk zonder onderaannemers.',
}

export default function OverOnsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-paper pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div aria-hidden className="absolute inset-0 -z-10 tile-pattern opacity-30" />
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 reveal">
              <div className="eyebrow">Over ons</div>
              <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-primary-900 sm:text-6xl leading-[1.05]">
                Persoonlijk<br/>
                <span className="italic font-light text-primary-600">vakmanschap.</span>
              </h1>
              <div className="mt-10 space-y-5 text-lg leading-relaxed text-primary-600 max-w-xl">
                <p>
                  Ik ben Jaap van <strong className="text-primary-900">Van Wonderen Tegelwerken</strong>. Eenmanszaak uit Breda, sinds 2022 gespecialiseerd in binnen- en buitentegelwerk, kitwerk en complete badkamerrenovaties.
                </p>
                <p>
                  Geen tussenpersonen, geen onderaannemers. Je krijgt vanaf de eerste WhatsApp tot de laatste voeg dezelfde vakman op de klus. Eerlijk advies, strakke planning, kwaliteit waar ik mijn naam aan verbind.
                </p>
              </div>

              <Link href="/contact" className="btn-primary mt-10">
                Maak kennis <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-5 reveal reveal-delay-2">
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl img-zoom">
                  <Image src="/images/projects/portfolio-2025-07-laag-1.webp" alt="Recente badkamer van Van Wonderen Tegelwerken" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
                </div>
                <div aria-hidden className="absolute -bottom-4 -right-4 grid grid-cols-3 gap-1.5">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className={`h-8 w-8 rounded ${i % 2 ? 'bg-accent-500' : 'bg-primary-900'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pijlers */}
      <section className="bg-clay py-24">
        <div className="container-x">
          <div className="max-w-2xl mb-16">
            <div className="eyebrow">Waar ik voor sta</div>
            <h2 className="mt-4 font-display text-4xl font-bold text-primary-900 sm:text-5xl">
              Drie principes,<br/>
              <span className="italic font-light text-primary-600">elke klus.</span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                num: '01',
                title: 'Eerlijke prijsopgaaf',
                body: 'Je weet vooraf wat het kost. Geen verrassingen achteraf, geen verborgen meerwerk.',
              },
              {
                num: '02',
                title: 'Strakke planning',
                body: 'Afspraak is afspraak. Geen klant die drie weken zonder badkamer zit door slechte planning.',
              },
              {
                num: '03',
                title: 'Schoon opgeleverd',
                body: 'Bij oplevering laat ik de ruimte beter achter dan ik hem aantrof. Standaard, geen meerwerk.',
              },
            ].map((p) => (
              <div key={p.num} className="reveal">
                <div className="font-display text-7xl font-bold text-accent-500/30 leading-none">{p.num}</div>
                <h3 className="mt-4 font-display text-2xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-primary-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-900 text-paper py-20">
        <div className="container-x">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="font-display text-6xl font-bold text-accent-400">2022</div>
              <div className="mt-2 text-sm text-primary-300">Opgericht</div>
            </div>
            <div>
              <div className="font-display text-6xl font-bold text-accent-400">{business.serviceArea.length}</div>
              <div className="mt-2 text-sm text-primary-300">Plaatsen waar ik werk</div>
            </div>
            <div>
              <div className="font-display text-6xl font-bold text-accent-400">5 jr</div>
              <div className="mt-2 text-sm text-primary-300">Garantie standaard</div>
            </div>
            <div>
              <div className="font-display text-6xl font-bold text-accent-400">100%</div>
              <div className="mt-2 text-sm text-primary-300">Eigen werk, geen onderaannemers</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
