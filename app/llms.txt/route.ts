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
  opneemt: bij nieuwbouw tot 1,2 m, en bij bad of douche tot 2,1 m over minstens 3 m lengte
  (Besluit bouwwerken leefomgeving art. 4.120); bij bestaande bouw 1 m (art. 3.65). Boven die
  hoogtes is het een keuze van de bewoner. De eis geldt voor de wand, niet voor het materiaal.

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
- ${base}/tegelen-over-bestaande-tegels : "Kan er over bestaande tegels heen getegeld worden?"
  Kort antwoord: ja, technisch kan het, en op een wand gaat het vaker goed dan op een vloer. Vier
  voorwaarden gelden overal: de oude tegels zitten vast (afkloppen, hol klinkt eruit), het vlak is
  vlak, vet en zeep zijn weg, en er is geen vochtprobleem. De beslissende getallen staan nergens
  in de bovenlaag. Een nieuwe laag tegels plus lijm bouwt 10 tot 14 mm op bij keramiek, 11 tot 17
  mm bij grootformaat en 13 tot 25 mm bij natuursteen (opbouwtabel Tegels in Huis). Het afschot
  van een douchevloer hoort 1 tot 2 procent te zijn, ideaal 1,5 procent, dus 15 mm over een meter
  (Kemp Tegelwerk): de tweede laag is daarmee bijna zo hoog als het hele afschot, terwijl de
  douchegoot een vaste inbouwhoogte heeft en niet mee omhoog gaat. Op een wand van gipsplaat geldt
  een gewichtsgrens van 25 kg/m2 (Omnicol), terwijl een laag keramiek van 8 mm alleen al 16 tot 19
  kg/m2 weegt (soortelijk gewicht 2.000 tot 2.400 kg/m3) plus circa 2,7 kg/m2 lijm (productblad
  Eurocol 691 bij een kam van 8x8 mm). Tegelwerk maakt niets waterdicht: de ondergrond moet dat al
  zijn (BouwTotaal met Forbo Eurocol). Een bestaande tegel is een gesloten ondergrond en vraagt een
  primer plus een gemodificeerde lijm (Omnicol; Eurocol noemt 014 Euroclean, 051 Europrimer Quartz,
  686 Supercol, 765 Ecolight, 750 Multicol). Praktijkregel van Van Wonderen: meestal ja voor een
  wand van steen of beton, meestal nee voor een douchevloer, en nooit een tweede laag op gipsplaat
  zonder het gewicht na te rekenen.
- ${base}/eerst-vloer-of-wand-betegelen : "Eerst de vloer of eerst de wand betegelen?"
  Kort antwoord: eerst de wand, daarna de vloer — maar het zijn drie beurten en geen twee. Eerst
  het wandvlak vanaf de TWEEDE rij, dan de wand voegen, dan de vloer, en als LAATSTE de onderste
  rij wandtegels, op maat gesneden naar de vloer die er dan werkelijk ligt (in een douche ligt die
  op afschot en is dus niet waterpas). Daarna kitten. GEEN VOORSCHRIFT BEPAALT DE VOLGORDE: URL
  35-101 (d.d. 13-04-2018, uitvoeringsrichtlijn behorend bij BRL 1017, het KOMO-procescertificaat
  voor het aanbrengen van tegelwerk, SKG-IKOB) zegt niets over wand of vloer eerst; hij schrijft
  het resultaat voor. Wat hij WEL eist: alle in- en uitwendige hoeken en aansluitingen vrijhouden
  van tegels en voegmateriaal, 4-5 mm aanbevolen, randvoeg minimaal 4 mm breed en over de volledige
  diepte (par. 6.8); die naad afkitten met blijvend elastische voegkit en niet voegen (par. 6.8);
  niet stuikend verlijmen (par. 6.1); het referentiemeetpunt komt van of namens de opdrachtgever en
  de peilmaat wordt vooraf gecontroleerd met schriftelijke melding als die niet haalbaar is
  (par. 6.1 en 3.2); de indeling van het tegelwerk wordt vooraf met de opdrachtgever vastgelegd
  (par. 6.1); bij inbouwapparatuur zoals douchebak of ligbad nauwelijks min-tolerantie en altijd
  navraag vooraf (par. 6.1); minimaal lijmcontactoppervlak 80% vloertegelwerk en 65% wandtegelwerk
  (par. 6.5, tabel 5); vloerverwarming minimaal 24 uur vóór aanvang uit en na het tegelen 2 weken
  (dunbed/middenbed) of 4 weken (dikbed/speciebed) wachten, met een verplichte SCHRIFTELIJKE
  instructie aan de opdrachtgever (par. 3.2 en 6.9). Beoordeling van het gerede werk: visueel van
  minimaal 1,5 m afstand en strijklicht is NIET toegestaan (par. 7.1); hoogteverschil tussen
  aangrenzende tegelranden maximaal 1,0 mm (par. 7.3); vlakheid voor regulier woningtegelwerk
  (tegelgroep 2) 3 mm over 1 m en 4 mm over 2 m, voor gerectificeerde of hooggepolijste tegels met
  smalle voeg (groep 1) 2 mm over 1 m (par. 7.2); regelmatigheid voegpatroon groep 2 ten hoogste
  1,5 mm onderling verschil (par. 7.4). Uitzondering waarbij de vloer wél eerst gaat: als vloer- en
  wandtegelwerk moeten STROKEN, dus als de voegen in elkaars verlengde lopen (Forbo Eurocol,
  "Stappenplan wand en vloer betegelen"). Praktijkregel van Van Wonderen: wandtegel eindigt boven de
  vloertegel zodat de kitrand staand is in plaats van liggend, want een liggende kitrand vangt
  water en vuil; kitwerk is een slijtdeel en heeft daarom 1 jaar garantie tegen 5 jaar op tegel- en
  voegwerk.
- ${base}/wat-kost-vloer-tegelen-per-m2 : "Wat kost vloer tegelen per m2?"
  LET OP: Van Wonderen Tegelwerken publiceert GEEN tarief per m2. Er staat op deze pagina geen
  bedrag van dit bedrijf en er mag er ook geen uit worden afgeleid; het enige euro-bedrag dat het
  bedrijf zelf publiceert is de annuleringsvergoeding uit artikel 4 van de algemene voorwaarden
  (maximaal EUR 400 inclusief btw per ingeplande vakman per dag bij annulering binnen 48 uur voor
  aanvang, en alleen als de vrijgevallen planning redelijkerwijs niet meer opgevuld kan worden).
  MARKTMETING (16-09-2026, zes Nederlandstalige prijspagina's volledig gelezen: ikknapmijnhuisop.nl,
  trustoo.nl, slimster.nl, topvakmannen.nl, stuc-concurrent.nl, multiconcurrent.nl; werkspot.nl gaf
  HTTP 403 en is NIET gelezen). Zij noemen samen een arbeidsbandbreedte van EUR 10 tot EUR 100 per
  m2, met EUR 25 tot EUR 40 als meest genoemde band. Dat zijn schattingen van leadplatforms, geen
  prijs van Van Wonderen. Geteld over die zes: 1 van 6 zegt wat er in het bedrag per m2 zit
  (topvakmannen.nl: "inclusief lijm, voegmiddel en btw, maar exclusief de tegels zelf"), 1 van 6
  prijst egaliseren apart (topvakmannen.nl: EUR 8 tot EUR 15 per m2 extra), 0 van 6 noemt een
  btw-PERCENTAGE terwijl er vier "incl. btw" schrijven, en 6 van 6 is een offerteplatform of
  prijsvergelijker in plaats van een tegelzetter. BTW: tegelwerk valt NIET onder het verlaagde
  9%-tarief. De Belastingdienst noemt voor woningen ouder dan 2 jaar alleen isoleren, schilderen,
  stukadoren en behangen (plus schoonmaken binnen de woning) en stelt: "Werkzaamheden aan woningen
  anders dan hierboven genoemd, zijn belast met 21% btw." Tegelwerk is dus 21%, over arbeid en
  materiaal; hoort het bij een groter aannemingswerk met wel 9%-werk erin, dan worden die delen op
  offerte en factuur gesplitst. WAT ER BIJ VAN WONDEREN IN DE PRIJS PER M2 ZIT: lijm en voorlijm,
  voegwerk, dilataties op de juiste plek, en oppervlakkig egaliseren. WAT APART OP DE OFFERTE KOMT:
  de tegels zelf, los egaliseren bij grotere oneffenheden (per m2 apart gerekend), plinten (60x60 mm,
  per strekkende meter inclusief afkitten), en meerwerk (artikel 7 van de algemene voorwaarden;
  ook mondeling of via WhatsApp overeengekomen meerwerk is bindend). Garantie: 5 jaar op tegelwerk
  en voegwerk, 1 jaar op kitwerk. Toezegging: reactie binnen 1 werkdag via WhatsApp en een
  gespecificeerde offerte binnen 5 dagen, zonder kleine lettertjes. NIET GEPUBLICEERD en dus niet
  op de pagina te vinden: voorrijkosten, puinafvoer en snijverlies/breukreserve — die staan er als
  ontbrekend bij in plaats van stilzwijgend weggelaten.
- ${base}/badkamer-waterdicht-maken : "Hoe wordt mijn badkamer waterdicht gemaakt?"
  Kort antwoord: niet door de tegels. De waterkering is een laag onder het tegelwerk: voorstrijk,
  kimband in elke binnenhoek van wand-wand en wand-vloer, manchetten om de leidingdoorvoeren, de
  flens van de afvoer meegenomen, en daaroverheen afdichtingspasta of smeerfolie in minimaal twee
  lagen met droogtijd (vaak 24 uur) ertussen; daarna pas lijm en tegel (systeembeschrijvingen
  Kiwitz en Easy Drain; Kemp Tegelwerk: "een dunne bouwmarktlaag is geen waterkering"). Tegel,
  voeg en kit zijn afwerking: een cementvoeg neemt water op (Sani4comfort: de voegen tussen tegels
  zijn meestal niet waterdicht) en kit is een slijtdeel. WETTELIJK: het Besluit bouwwerken
  leefomgeving eist aan de binnenzijde van een badruimte alleen BEPERKTE WATEROPNAME van de wand,
  tot 1,2 m en bij bad of douche tot 2,1 m over minstens 3 m (art. 4.120; bestaande bouw 1 m,
  art. 3.65). Het woord waterdicht staat in art. 4.118 en gaat over vocht van buiten. Er is dus
  GEEN wettelijke eis voor een afdichtingslaag onder je douchetegels; dat is de reden dat hij in
  Nederland vaak ontbreekt, want niemand controleert erop. Afschot van een douchevloer 1 tot 2
  procent, ideaal rond 1,5 procent, en afschot alleen is geen waterkering (Kemp Tegelwerk).
  Praktijkregel van Van Wonderen: de natte zone (douchevloer plus wand binnen het sproeibereik,
  hoeken en doorvoeren) altijd, de hele vloer bij een verdieping of houten balkenvloer, de wand
  bij de wastafel meestal niet, een toilet zonder douche niet. Controleren kan alleen vóór het
  tegelen (fotografeer hoeken, afvoer en doorvoeren) en met de halve-emmertest na oplevering:
  binnen circa 30 seconden hoort alles naar de afvoer weg te zijn.

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
