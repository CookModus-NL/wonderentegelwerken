import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/content/projects'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/projecten' },
  title: 'Projecten · recent tegelwerk',
  description: 'Recente badkamerrenovaties, vloeren en terras-projecten in Breda en omstreken. Bekijk wat ik recent heb opgeleverd.',
}

export default function ProjectenPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-paper pt-16 pb-16 lg:pt-24">
        <div aria-hidden className="absolute inset-0 -z-10 tile-pattern opacity-30" />
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="eyebrow">Projecten</div>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-primary-900 sm:text-6xl lg:text-7xl leading-[1.02]">
              Werk dat<br/>
              <span className="italic font-light text-primary-600">voor zichzelf spreekt.</span>
            </h1>
            <p className="mt-8 text-lg text-primary-600 max-w-xl leading-relaxed">
              Een selectie van wat ik recent heb opgeleverd in Breda en omstreken. Klik door voor foto’s, oppervlakten en gebruikte materialen.
            </p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-paper pb-24 lg:pb-32">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-12">
            {projects.map((p, i) => {
              // Magazine layout: 1e groot, daarna varieren.
              //
              // HET MOZAIEK BEGINT PAS OP xl (1280px), NIET OP lg (1024px).
              // Gemeten op productie 29-10-2026 bij 1024px: de twee kleine kaarten waren
              // 293x220 (col-span-4, aspect 4/3) terwijl hun labelblok 327px nodig had. Dat
              // blok hangt op bottom-0, dus het stak 107px BOVEN de kaart uit en werd daar
              // door overflow-hidden afgeknipt: plaats, datum en de halve projectkop vielen
              // weg, en de regel die wel buiten de kaart viel stond op de paginagrond in
              // plaats van op de foto (designpoort meldde hem als 2,15:1 #e59e58 op #fbfaf7).
              // Een kaart van 293px breed kan die kop niet dragen; 452px wel.
              // Daarom: in de band 1024-1279px staat de grote kaart over de volle twaalf
              // kolommen en staan de twee kleine op zes — 452x339, met 339px voor 253px
              // inhoud. Vanaf 1280px is de kaart 379px breed en past het mozaiek weer zoals
              // het op 1440px al deed. Dit is geen nieuwe compositie maar dezelfde, met het
              // omslagpunt op de breedte waar hij werkelijk past: boven- en onderlijn van
              // twee kolommen horen volgens dit contract altijd gelijk te zijn, en een kop
              // die uit zijn kaart breekt is precies wat het raster niet mag doen.
              const layouts = [
                'lg:col-span-12 xl:col-span-8 xl:row-span-2',
                'lg:col-span-6 xl:col-span-4',
                'lg:col-span-6 xl:col-span-4',
              ]
              const span = layouts[i % layouts.length]
              return (
                <Link
                  key={p.slug}
                  href={`/projecten/${p.slug}`}
                  className={`group relative overflow-hidden rounded-3xl img-zoom reveal ${span}`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="relative aspect-[4/3] xl:h-full">
                    <Image
                      src={p.hero}
                      alt={p.title}
                      fill
                      sizes={i === 0 ? '(max-width: 1279px) 100vw, 60vw' : '(max-width: 1023px) 100vw, (max-width: 1279px) 50vw, 40vw'}
                      className="object-cover"
                    />
                  </div>
                  <div className="beeldvoet absolute inset-x-0 bottom-0 p-6 lg:p-8">
                    <div className="beeldlabel">
                      {p.location} · {p.date}
                    </div>
                    <h2 className="mt-2 font-display text-2xl font-semibold text-paper lg:text-3xl">{p.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-paper/85 max-w-md line-clamp-2">{p.description}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-paper transition-all group-hover:gap-3">
                      Bekijk project <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
