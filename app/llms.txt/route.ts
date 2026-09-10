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
- ${base}/tegelen-op-houten-ondervloer : "Kan er op een houten ondervloer getegeld worden?"
  Kort antwoord: ja, maar zelden met grootformaat tegels. Forbo Eurocol adviseert op houten
  vloeren niet groter te gaan dan 30x30; Omnicol noemt als technisch uitgangspunt een
  doorbuiging van maximaal L/500 bij volle belasting en "zo klein mogelijke tegels met een zo
  breed mogelijke voeg". Een ontkoppelingsmat vangt krimp en uitzetting op, geen doorbuiging.
  De gangbare opbouw kost 35-41 mm hoogte (afgeleid uit gepubliceerde componentmaten). Voor
  een vochtige ruimte is het antwoord strenger: Omnicol raadt rechtstreeks tegelen op houten
  plaatmateriaal in een vochtige ruimte ten strengste af, en Eurocol adviseert daar
  cementgebonden vloerplaten.
- ${base}/losse-tegels-en-scheurende-voegen : "Wat gebeurt er als er later tegels loskomen of
  een voeg scheurt?"
  Kort antwoord: eerst melden bij de tegelzetter die het werk deed en hem de gelegenheid geven
  het te herstellen (art. 7:759 lid 1 BW), daarna vaststellen waar de beweging vandaan komt,
  want dat bepaalt wie betaalt. Garantie (afspraak: 5 jaar op tegel- en voegwerk, 1 jaar op
  kitwerk) en aansprakelijkheid (Burgerlijk Wetboek Boek 7 titel 12) zijn twee verschillende
  lagen. Art. 7:758 lid 4 BW legt gebreken die bij oplevering niet zijn ontdekt bij de
  aannemer; art. 7:754 BW legt hem een waarschuwingsplicht op voor een ongeschikte ondergrond
  of ongeschikt materiaal van de opdrachtgever; art. 7:761 lid 1 BW laat de verjaring van twee
  jaar pas lopen nadat de opdrachtgever heeft geprotesteerd. Bij twee van die artikelen staat
  in de wettekst zelf dat er niet ten nadele van een particuliere opdrachtgever van mag worden
  afgeweken.
- ${base}/tegelvloer-belopen-en-vloerverwarming-aanzetten : "Hoe lang moet ik wachten voor ik op
  de vloer mag lopen en wanneer mag de vloerverwarming aan?"
  Kort antwoord: er lopen twee klokken. Lopen hangt aan de lijm (bij een gewone cementgebonden
  tegellijm meestal 12 tot 24 uur voorzichtig beloopbaar, 48 uur normaal belastbaar, 7 dagen
  voor puntlasten zoals een bad of een kast). De vloerverwarming hangt aan de dekvloer eronder,
  niet aan de tegel: op een bestaande dekvloer die eerder warm is geweest is het ongeveer een
  week (Coba: na 1 week; PCI Flexmoertel: 7 dagen en geen opstookprotocol nodig), bij een
  nieuwe of net ingefreesde dekvloer 3 tot 6 weken (Coba 3-4 weken, Vloerverwarming Direct 4
  weken, Tegelhuis 6 weken). Die spreiding komt doordat de bronnen over verschillende vloeren
  gaan. Let op het opstookprotocol: TBA (Technisch Bureau Afbouw) schrijft in kennispaper 3
  (maart 2023) dat het klassieke opstook- en afkoelprotocol uit TBA-richtlijn 2.1 is ontworpen
  voor een dekvloer die los op isolatie ligt, dat die vloer vrijwel nooit meer wordt gemaakt, en
  dat het protocol op een hechtende dekvloer juist onthechting en scheuren veroorzaakt; NOA en
  TBA adviseren een ingebruiknameprotocol zonder afkoelfase, met een proceswatertemperatuur van
  doorgaans 30 en hooguit 35 graden.

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
