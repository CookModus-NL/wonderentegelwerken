import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { partners } from '@/content/partners'

/**
 * De tegelwinkels die ik bij naam noem, met logo in één grijstint (zelfde idee als de
 * klantlogo's van learninq: herkenbaar, maar het palet van deze site blijft intact).
 * Een woordmerk wordt als masker in ink-mute gevuld; een badge zonder schone vorm
 * (Gigategelstore publiceert alleen een JPG met eigen achtergrond) staat grijs in een vak.
 * Op hover krijgt het logo zijn volle dekking terug; kleur komt er nooit bij.
 * De bron van elke regel staat in content/partners.ts.
 */
export function Tegelwinkels({ id = 'tegelwinkels', gidsLink = true }: { id?: string; gidsLink?: boolean }) {
  return (
    <section id={id} aria-labelledby={`${id}-kop`} className="bg-clay py-24 lg:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">Tegelwinkels</div>
            <h2 id={`${id}-kop`} className="mt-4 font-display text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl">
              Je kiest de tegel zelf.<br />
              <span className="italic font-light text-primary-600">Deze winkels ken ik.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-primary-600">
              Je koopt je tegels waar je wilt, ik verwerk ze. Bij deze winkels weet ik wat ze
              verkopen en hoe ze werken, en dat scheelt bij de opname en het bestellen.
            </p>
            {gidsLink && (
              <Link
                href="/tegels-zelf-kopen-of-via-de-tegelzetter"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 hover:gap-2 transition-all"
              >
                Waar je op let als je zelf tegels koopt <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {partners.map((p) => (
              <li key={p.naam}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener"
                  className="group flex h-full flex-col rounded-3xl border border-primary-200 bg-paper p-8 transition-colors hover:border-primary-400"
                >
                  <div className="flex h-20 items-center">
                    {p.soort === 'woordmerk' ? (
                      <span
                        role="img"
                        aria-label={`Logo ${p.naam}`}
                        className="block h-11 bg-primary-600 opacity-70 transition-opacity group-hover:opacity-100"
                        style={{
                          aspectRatio: `${p.breedte} / ${p.hoogte}`,
                          WebkitMask: `url(${p.logo}) center / contain no-repeat`,
                          mask: `url(${p.logo}) center / contain no-repeat`,
                        }}
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element -- klein vast beeld, geen optimalisatie nodig
                      <img
                        src={p.logo}
                        alt={`Logo ${p.naam}`}
                        width={p.breedte}
                        height={p.hoogte}
                        loading="lazy"
                        className="h-20 w-auto rounded-xl opacity-60 grayscale brightness-125 contrast-[.85] transition-opacity group-hover:opacity-90"
                      />
                    )}
                  </div>
                  <div className="mt-8 border-t border-primary-200 pt-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold text-primary-900">{p.naam}</h3>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-primary-500 transition-transform group-hover:rotate-45" />
                    </div>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-primary-500">{p.plaats}</p>
                    <p className="mt-4 text-sm leading-relaxed text-primary-600">{p.relatie}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
