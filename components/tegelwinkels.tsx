import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { tegelwinkels } from '@/content/partners'
import { tegelwinkelsSchema } from '@/lib/schema'

/**
 * De tegelwinkels die ik bij naam noem. Per winkel staat er wat de relatie IS (één zin met
 * bron) en wat de klant eraan heeft (hun eigen retour- en breukregels, met leesdatum); een
 * logo alleen zou lezen als een partner- of affiliateblok, en dat is het niet.
 *
 * Logo's in één grijstint (zelfde idee als de klantlogo's van learninq): een woordmerk als
 * masker in ink-mute, een badge zonder schone vorm (Gigategelstore publiceert alleen een JPG
 * met eigen achtergrond) grijs in een vak. Ze zijn decoratief (aria-hidden / alt=""): de naam
 * staat als tekst in de h3, anders leest een schermlezer hem twee keer.
 *
 * Zichtbaar == schema: dezelfde array levert de kaarten en de JSON-LD (WebPage.mentions).
 * Links zijn gewone redactionele links, geen nofollow/sponsored: er staat geen vergoeding
 * tegenover die we kennen. Komt die er, dan rel="sponsored".
 */
export function Tegelwinkels({
  paginaUrl,
  id = 'tegelwinkels',
  gidsLink = true,
}: {
  paginaUrl: string
  id?: string
  gidsLink?: boolean
}) {
  return (
    <section id={id} aria-labelledby={`${id}-kop`} className="bg-clay py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tegelwinkelsSchema(paginaUrl)) }}
      />
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="eyebrow">Tegelwinkels in Breda</div>
          <h2
            id={`${id}-kop`}
            className="mt-4 font-display text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl"
          >
            Je kiest de tegel zelf.
            <br />
            <span className="italic font-light text-primary-600">Ik ken de regels van de winkel.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-primary-600">
            Je koopt je tegels waar je wilt, ik leg ze. Twee winkels in Breda noem ik bij naam: bij
            Gigategelstore kopen mijn klanten bijna elke maand, en Designtegels noemt mij zelf als
            tegelzetter. Per winkel staat hieronder wat je vóór het bestellen moet weten, uit hun
            eigen voorwaarden.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 md:grid-cols-2">
          {tegelwinkels.map((w) => (
            <li key={w.slug}>
              <article className="flex h-full flex-col rounded-3xl border border-primary-200 bg-paper p-8 lg:p-10">
                <div className="flex h-16 items-center" aria-hidden="true">
                  {w.soort === 'woordmerk' ? (
                    <span
                      className="block h-10 bg-primary-600 opacity-70"
                      style={{
                        aspectRatio: `${w.breedte} / ${w.hoogte}`,
                        WebkitMask: `url(${w.logo}) center / contain no-repeat`,
                        mask: `url(${w.logo}) center / contain no-repeat`,
                      }}
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element -- klein vast beeld, geen optimalisatie nodig
                    <img
                      src={w.logo}
                      alt=""
                      width={w.breedte}
                      height={w.hoogte}
                      loading="lazy"
                      decoding="async"
                      className="h-16 w-auto rounded-xl opacity-60 grayscale brightness-125 contrast-[.85]"
                    />
                  )}
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary-900">{w.naam}</h3>
                <p className="mt-1 text-sm text-primary-500">
                  {w.straat}, {w.postcode} {w.plaats}
                </p>
                {/* Drie regels vast op md+: de voeglijn boven "Waar je op let" ligt dan in beide kaarten op dezelfde hoogte. */}
                <p className="mt-5 text-base leading-relaxed text-primary-900 md:min-h-[5.25rem]">{w.relatie}</p>

                <div className="mt-6 border-t border-primary-200 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                    Waar je op let
                  </p>
                  <ul className="mt-3 space-y-2">
                    {w.letOp.map((r) => (
                      <li key={r} className="flex gap-3 text-sm leading-relaxed text-primary-600">
                        <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-accent-500" />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-primary-500">
                    Uit hun eigen voorwaarden, gelezen op {w.gelezen}.
                  </p>
                </div>

                <a
                  href={w.href}
                  target="_blank"
                  rel="noopener"
                  className="mt-auto inline-flex min-h-11 items-end gap-1 pt-8 text-sm font-semibold text-primary-900 underline decoration-accent-400 underline-offset-4 transition-colors hover:text-accent-600"
                >
                  {w.linkTekst}
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </article>
            </li>
          ))}
        </ul>

        {gidsLink && (
          <Link
            href="/tegels-zelf-kopen-of-via-de-tegelzetter"
            className="mt-8 inline-flex min-h-11 items-center gap-1 py-2 text-sm font-semibold text-accent-600 transition-all hover:gap-2"
          >
            Zelf tegels kopen: wat het kost en waar het misgaat <ArrowUpRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </section>
  )
}
