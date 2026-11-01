import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { business } from '@/content/business'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/werkgebied' },
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
            {/* Inkomende link naar de antwoordeenheid op de homepage (contract 961be3b4, 3 okt 2026). */}
            <p className="mt-5 text-base text-primary-600 max-w-xl leading-relaxed">
              Het korte antwoord op wie er komt, wat er in het tegelwerk zit en binnen welke
              termijn je een prijs hebt, staat bij{' '}
              <Link href="/#tegelzetter-breda" className="text-primary-900 underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
                tegelzetter in Breda: wie er komt
              </Link>
              .
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
                  <MapPin className="h-4 w-4 text-accent-600 shrink-0" />
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
            {/* Uitgaande link naar de plaats die zijn eigen antwoord draagt (contract f4d87796,
                19 okt 2026, samenvoegen). Deze pagina kreeg zelf vertoningen op "tegelzetter
                etten leur"; in plaats van mee te dingen wijst hij nu naar de pagina die de vraag
                beantwoordt. Eén plaats, omdat er één zo'n pagina is — niet als voorkeur. */}
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-600">
              Voor Etten-Leur staat de aanpak apart uitgeschreven:{' '}
              <Link
                href="/tegelzetter/etten-leur"
                className="text-primary-900 underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
              >
                tegelzetter in Etten-Leur, met reistijd, wat er in het tegelwerk zit en waar de
                garantie stopt
              </Link>
              .
            </p>
          </div>

          {/* Tier 3 */}
          <div>
            <div className="flex items-baseline gap-4 mb-6">
              <div className="font-display text-2xl font-semibold text-primary-600">Op aanvraag</div>
              <div className="text-sm text-primary-500">voor grotere projecten</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {tiers.verder.map((city) => (
                <div key={city} className="rounded-full bg-primary-100 px-4 py-2 text-sm text-primary-600">
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GEEN INHOUDSBEELD OP DIT PAD, EN DAT IS GEMETEN (01-11-2026, bouwer-20261101-0905).
          Hier stond sinds 29-10 een projectfiguur met de kop "Een vloer in Teteringen" en de
          regel "Dit is wat daar ligt", boven portfolio-2025-03-wa0006.webp. Die foto is op 01-11
          opnieuw zelf bekeken: een smalle betegelde toiletnis, betonlook wandtegels, een
          inbouwreservoir met de bedrading van de spoelplaat nog open, een afvoerstomp met gele
          dop — en achter de deur een lichte HOUTEN vloer. Geen woonkamer, geen 42 m2, geen 80x80
          betonlook. Er ligt op deze foto dus niet wat de regel eronder zegt dat er ligt.
          Dezelfde bevinding als TAAK-20260920-WONDEREN-VLOER-MAART-2025-BEELDWAARHEID en
          TAAK-20260902-WONDEREN-FOTOFEIT, beide open en beide geblokkeerd op Jaap. Een
          werkgebiedpagina die zijn plaatsnamen met een foto staaft doet een claim; die claim
          moet waar zijn (wet art. 1.1 en 3.6). Weg tot bekend is welke klus dit werkelijk was. */}

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
