import Link from 'next/link'

/**
 * Een FAQ-antwoord blijft platte tekst (dat gaat ongewijzigd het FAQPage-schema in);
 * `links` maakt per link het eerste voorkomen van `tekst` klikbaar, in volgorde van de
 * tekst. Staat een tekst er niet in, dan blijft dat stuk gewoon tekst: geen link is beter
 * dan een verkeerde. Een href die met http begint opent in een nieuw tabblad.
 */
export type FaqLink = { tekst: string; href: string }

const klasse = 'underline decoration-accent-400 underline-offset-4 hover:text-accent-600'

export function FaqAntwoord({ a, links = [] }: { a: string; links?: FaqLink[] }) {
  const delen: React.ReactNode[] = []
  let rest = a
  for (const l of links) {
    const i = rest.indexOf(l.tekst)
    if (i < 0) continue
    delen.push(rest.slice(0, i))
    delen.push(
      l.href.startsWith('http') ? (
        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={klasse}>
          {l.tekst}
        </a>
      ) : (
        <Link key={l.href} href={l.href} className={klasse}>
          {l.tekst}
        </Link>
      ),
    )
    rest = rest.slice(i + l.tekst.length)
  }
  delen.push(rest)
  return <>{delen}</>
}
