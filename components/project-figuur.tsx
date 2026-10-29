import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/content/projects'

/**
 * EEN EIGEN PROJECTFOTO ALS INHOUDSBEELD.
 *
 * Grond (DESIGN.md > beeld.bron, beeld.labelvoet, en "Codes die blijven"): eigen
 * projectfoto's met plaats en datum zijn op deze site geen decoratie maar bewijs —
 * een tegelzetter zonder projectfoto's is ongeloofwaardig. Stock is verboden.
 * Daarom komen plaats, datum, kop en bestandsnaam alle vier uit content/projects.ts
 * en staat er geen woord in dit bestand dat niet uit die bron komt. Een onbekende
 * slug faalt hard, net als bij KlantCitaat: een verbouwd bewijsstuk gaat niet live.
 *
 * De vorm is de grammatica die al op /, /projecten, /projecten/[slug] en
 * /tegelzetter staat: het label in op-donker met de haarlijn ervoor (.beeldlabel),
 * de leesgrond uit het labelblok zelf (.beeldvoet). Geen nieuw vlak en geen nieuw
 * token; dit is dezelfde kaart, op een plek waar de pagina nog geen beeld had.
 */
export function ProjectFiguur({ slug }: { slug: string }) {
  const p = projects.find((x) => x.slug === slug)
  if (!p) throw new Error(`ProjectFiguur: geen project met slug ${slug}`)

  return (
    <figure className="group relative overflow-hidden rounded-3xl img-zoom">
      {/* DE UITSNEDE IS GEMETEN, NIET GEKOZEN (losse render 29-10-2026).
          Het labelblok heeft op 390px 202px nodig en de leesgrond loopt er per
          .beeldvoet nog 4rem bovenuit: samen 266px. In een 4/3-kader van 350px
          breed is dat 263px hoog en dan ligt de voet over de HELE foto — dan
          staat er wel een beeld maar zie je het werk niet, en dat is precies
          wat deze figuur moet doen. Op 4/5 is het kader 437px en blijft er
          171px onbehandelde foto boven de voet staan. Vanaf 640px is de kolom
          breed genoeg voor een 16/9-strook: 324px kader tegen 234px voet. */}
      <div className="relative aspect-[4/5] sm:aspect-[16/9]">
        <Image
          src={p.hero}
          alt={p.title}
          fill
          sizes="(max-width: 1023px) 100vw, 1184px"
          className="object-cover"
        />
      </div>
      <figcaption className="beeldvoet absolute inset-x-0 bottom-0 p-6 lg:p-8">
        <div className="beeldlabel">
          {p.location} · {p.date}
        </div>
        <p className="mt-2 max-w-xl font-display text-2xl font-semibold text-paper lg:text-3xl">
          {p.title}
        </p>
        <Link
          href={`/projecten/${p.slug}`}
          className="raaklink mt-3 gap-2 text-sm font-semibold text-paper transition-all hover:gap-3"
        >
          Bekijk dit project <ArrowUpRight className="h-4 w-4" />
        </Link>
      </figcaption>
    </figure>
  )
}
