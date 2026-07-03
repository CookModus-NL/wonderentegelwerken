/**
 * Testimonials — echte Google reviews van klanten.
 *
 * Voeg een testimonial toe nadat een klant een review geplaatst heeft:
 *   - Neem tekst uit de Google review (met permissie / publiek zichtbaar)
 *   - Vul naam + plaats + project + rating
 *   - Site wordt automatisch geüpdatet bij volgende deploy
 *
 * Publieke review-URL (deel deze met klanten):
 * https://search.google.com/local/writereview?placeid=ChIJfcatV_uhxkcRTfbk2q7Iaas
 */

export type Testimonial = {
  text: string
  author: string
  location: string
  project: string
  rating: 5 // alleen 5-sterren tonen
}

export const testimonials: Testimonial[] = [
  // Voeg hier reviews toe zodra ze binnenkomen via Google.
  // Voorbeeld:
  // {
  //   text: 'Strak werk, perfect afgewerkt en alles binnen planning opgeleverd.',
  //   author: 'Familie de Vries',
  //   location: 'Breda',
  //   project: 'Badkamerrenovatie',
  //   rating: 5,
  // },
]
