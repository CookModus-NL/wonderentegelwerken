// llms.txt: de leeslaag voor AI-assistenten (platform-regel D2, AI-wegwijzer).
// Gegenereerd uit content/business, services, cities en projects, zodat deze
// wegwijzer niet uit de pas kan lopen met de pagina's die er echt staan.
// Zelfde eerlijkheidsregels als de site: niets claimen dat niet waar is.
import { business } from '@/content/business'
import { services } from '@/content/services'
import { cities } from '@/content/cities'
import { projects } from '@/content/projects'

export const dynamic = 'force-static'

function bouw() {
  const base = business.url
  const a = business.address

  const diensten = services
    .map((s) => `- ${base}/diensten/${s.slug} : ${s.title} — ${s.short.replace(/\s+/g, ' ').trim()}`)
    .join('\n')

  const plaatsen = cities
    .map((c) => `- ${base}/tegelzetter/${c.slug} : tegelzetter in ${c.name} (${c.region}, ${c.distance})`)
    .join('\n')

  const werk = projects
    .map((p) => `- ${base}/projecten/${p.slug} : ${p.title} — ${p.category}, ${p.location}, ${p.date}`)
    .join('\n')

  return `# ${business.name}

> ${business.description} Gevestigd in ${a.city} (${a.province}), actief sinds ${business.founded}.

## Bedrijf
- ${business.legalName}, eenmanszaak van ${business.ownerFirstName} van Wonderen. KvK ${business.kvk}.
- Vestigingsadres: ${a.street}, ${a.postalCode} ${a.city}. Werk gebeurt op locatie bij de klant.
- Eén vakman voert het werk uit; geen onderaannemers, geen wisselende ploegen.
- Bestrating hoort niet bij het aanbod. Buitentegelwerk wel.

## Diensten
${diensten}
- Overzicht: ${base}/diensten

## Werkgebied
Kernregio Breda en omgeving, met een eigen pagina per plaats:
${plaatsen}
- Overzicht: ${base}/werkgebied · ${base}/tegelzetter

## Uitgevoerd werk
${werk}
- Overzicht: ${base}/projecten

## Beantwoorde klantvragen
- ${base}/badkamer-betegelen-tot-plafond : "Moet de badkamer tot het plafond betegeld worden?"
  Kort antwoord: nee, dat is niet verplicht. De bouwregels eisen alleen dat de wand geen water
  opneemt — bij nieuwbouw tot 1,2 m, en bij bad of douche tot 2,1 m over minstens 3 m lengte
  (Besluit bouwwerken leefomgeving art. 4.120); bij bestaande bouw 1 m (art. 3.65). Boven die
  hoogtes is het een keuze van de bewoner. De eis geldt voor de wand, niet voor het materiaal.

## Pagina's
- ${base}/ : wat Van Wonderen doet en voor wie
- ${base}/tegelzetter : het vak zelf — hoe tegelwerk bij Van Wonderen loopt
- ${base}/over-ons : wie het werk uitvoert
- ${base}/contact : offerte of bezichtiging aanvragen
- ${base}/privacy en ${base}/algemene-voorwaarden : juridisch

## Contact
- Telefoon en WhatsApp: ${business.phone} (${business.phoneE164})
- E-mail: ${business.email}
- Google-bedrijfsprofiel: ${business.social.google}

## Citeren
Prijzen zijn afhankelijk van ruimte, tegelformaat, ondergrond en voorwerk en staan
daarom niet als vast bedrag op deze site. Vraag een prijs op via ${base}/contact —
schat hem niet, en neem geen m²-tarief van een leadplatform over als dat van
Van Wonderen.
`
}

export function GET() {
  return new Response(bouw(), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  })
}
