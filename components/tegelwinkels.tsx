import Link from 'next/link'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { business } from '@/content/business'
import { tegelwinkels } from '@/content/partners'
import { tegelwinkelsSchema } from '@/lib/schema'

/**
 * Mijn vaste tegelwinkels in Breda. Per winkel: wat de relatie is (één zin met bron) en wat
 * de klant eraan heeft (hun eigen retour- en breukregels, met leesdatum). Een logo alleen
 * zou lezen als een partner- of affiliateblok, en dat is het niet.
 *
 * TOON (Bart 05-11-2026: "professioneel doch een beetje eigenwijs, dit is Jaap"): Jaap zegt
 * waar het misgaat, niet wat de winkel mooi maakt. Geen uitleg van het voor de hand liggende.
 *
 * VORM, na de rubric-review van 05-11-2026 (7,2 FAIL, herbouwd):
 *  - Op md+ één gelegd vlak met één doorlopende voeg tussen de winkels (DESIGN.md grote_idee,
 *    vorm.lijnen); rijen liggen via subgrid in beide kolommen op dezelfde lijn.
 *  - Onder md twee losse tegels met de voeg als ruimte (gap-3), zodat je ziet waar een winkel
 *    eindigt; de logoband is samengevoegd met de naamrij.
 *  - De regels wegen zwaarder dan de relatie: daar komt de lezer voor.
 *  - Winkelnamen in Inter: de serif blijft voor de kop (typography.display.rol).
 *  - Logo's in één grijstint, decoratief (aria-hidden / alt=""): de naam staat in de h3.
 *
 * Zichtbaar == schema: dezelfde array levert de tegels en de JSON-LD (WebPage.mentions).
 * Links zijn redactioneel, geen nofollow/sponsored; komt er ooit een vergoeding tegenover,
 * dan rel="sponsored".
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
  const wa = `https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(
    'Hoi Jaap, deze tegel heb ik op het oog: ',
  )}`

  return (
    <section id={id} aria-labelledby={`${id}-kop`} className="bg-clay py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tegelwinkelsSchema(paginaUrl)) }}
      />
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="eyebrow">Tegels kopen in Breda</div>
          <h2
            id={`${id}-kop`}
            className="mt-4 font-display text-4xl font-bold tracking-tight text-balance text-primary-900 sm:text-5xl"
          >
            Je tegels koop je zelf.
            <br />
            <span className="italic font-light text-primary-600">De kleine lettertjes lees ik.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-primary-600">
            Waar je je tegels koopt, maakt mij niet uit. Wat de winkel terugneemt wel: een doos die
            niet retour mag of een nabestelling uit een andere kleurbatch, daar gaat het mis, niet
            bij de tegel. Met deze twee winkels in Breda werk ik vast. Hun regels staan hieronder,
            uit hun eigen voorwaarden.
          </p>
        </div>

        <ul className="mt-14 grid gap-3 md:grid-cols-2 md:grid-rows-[auto_auto_auto_auto] md:gap-0 md:overflow-hidden md:rounded-[12px] md:border md:border-primary-200 md:bg-paper">
          {tegelwinkels.map((w, i) => (
            <li
              key={w.slug}
              className={`overflow-hidden rounded-[12px] border border-primary-200 bg-paper md:row-span-4 md:grid md:grid-rows-subgrid md:rounded-none md:border-0 md:bg-transparent ${
                i > 0 ? 'md:border-l md:border-primary-200' : ''
              }`}
            >
              <div className="flex flex-col items-start gap-4 px-6 pt-6 sm:flex-row sm:items-center sm:gap-5 sm:px-8 lg:px-10 lg:pt-8">
                <div className="flex h-12 shrink-0 items-center sm:w-28" aria-hidden="true">
                  {w.soort === 'woordmerk' ? (
                    <span
                      className="block h-8 bg-primary-600 opacity-70"
                      style={{
                        aspectRatio: `${w.breedte} / ${w.hoogte}`,
                        WebkitMask: `url(${w.logo}) left center / contain no-repeat`,
                        mask: `url(${w.logo}) left center / contain no-repeat`,
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
                      className="h-12 w-12 rounded-[12px] opacity-60 grayscale brightness-110"
                    />
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="font-sans text-lg font-semibold text-primary-900">{w.naam}</h3>
                  <p className="mt-0.5 text-sm text-primary-500">
                    {w.filiaal && <>{w.filiaal} · </>}
                    {w.straat}, <span className="whitespace-nowrap">{w.postcode} {w.plaats}</span>
                  </p>
                </div>
              </div>

              <p className="px-6 pt-4 pb-6 text-sm leading-relaxed text-primary-600 sm:px-8 lg:px-10">
                {w.relatie}
              </p>

              <div className="border-t border-primary-200 px-6 py-6 sm:px-8 lg:px-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                  Waar je op let
                </p>
                <ul className="mt-4 space-y-3">
                  {w.letOp.map((r) => (
                    <li key={r} className="flex gap-3 text-base leading-relaxed text-primary-900">
                      <span aria-hidden="true" className="mt-[13px] h-0 w-3 shrink-0 border-t border-accent-500" />
                      {r}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-primary-500">
                  Uit hun eigen voorwaarden, gelezen op {w.gelezen}.
                </p>
              </div>

              <div className="border-t border-primary-200 px-6 sm:px-8 lg:px-10">
                <a
                  href={w.href}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex min-h-14 items-center gap-1 text-sm font-semibold text-primary-900 underline decoration-accent-400 underline-offset-4 transition-colors hover:text-accent-600"
                >
                  {w.linkTekst}
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  <span className="sr-only"> (opent in een nieuw venster)</span>
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <a
            href={wa}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-11 items-start gap-2 py-2 text-base font-semibold text-primary-900"
          >
            <MessageCircle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
            <span className="underline decoration-accent-400 underline-offset-4">
              Noem je tegel vóór je bestelt. Dan zeg ik of hij past bij je ruimte en je ondergrond.
            </span>
            <span className="sr-only"> (opent WhatsApp)</span>
          </a>
          {gidsLink && (
            <Link
              href="/tegels-zelf-kopen-of-via-de-tegelzetter"
              className="raaklink shrink-0 text-sm font-semibold text-accent-600 hover:underline hover:decoration-accent-400 hover:underline-offset-4"
            >
              {/* Eén tekstkind: als flex-kinderen verdween de spatie vóór "misgaat". */}
              <span>
                Zelf tegels kopen: wat het kost en waar het{' '}
                <span className="whitespace-nowrap">
                  misgaat
                  <ArrowUpRight aria-hidden="true" className="ml-1 inline h-4 w-4 align-[-3px]" />
                </span>
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
