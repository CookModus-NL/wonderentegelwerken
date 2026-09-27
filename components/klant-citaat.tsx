import { testimonials } from '@/content/testimonials'
import { business } from '@/content/business'

/**
 * Een Google-review als bewijs op een antwoordpagina. De tekst komt letterlijk uit
 * content/testimonials.ts (daar staat hij zoals op Google), zodat er één bron is.
 * `fragment` moet een letterlijk stuk van die review zijn; staat het er niet in, dan
 * faalt de build in plaats van dat er een verbouwd citaat live gaat.
 */
export function KlantCitaat({
  auteur,
  fragment,
  donker = false,
}: {
  auteur: string
  fragment?: string
  donker?: boolean
}) {
  const t = testimonials.find((x) => x.author === auteur)
  if (!t) throw new Error(`KlantCitaat: geen review van ${auteur}`)
  if (fragment && !t.text.includes(fragment)) throw new Error(`KlantCitaat: fragment staat niet letterlijk in de review van ${auteur}`)
  const tekst = fragment ?? t.text
  const begin = t.text.indexOf(tekst)
  const weergave = `${begin > 0 ? '(…) ' : ''}${tekst}${begin + tekst.length < t.text.length ? ' (…)' : ''}`
  const bron = `https://www.google.com/maps/place/?q=place_id:${business.googlePlaceId}`

  return (
    <figure className={`border-l-2 border-accent-400 pl-6 ${donker ? 'text-paper' : ''}`}>
      <blockquote className={`text-lg italic leading-relaxed ${donker ? 'text-paper' : 'text-primary-900'}`}>
        &ldquo;{weergave}&rdquo;
      </blockquote>
      <figcaption className={`mt-3 text-sm ${donker ? 'text-primary-300' : 'text-primary-600'}`}>
        {t.author},{' '}
        <a href={bron} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-accent-600">
          {t.location}
        </a>
      </figcaption>
    </figure>
  )
}
