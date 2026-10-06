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
- De eigenaar is eindverantwoordelijk voor elk werk en het aanspreekpunt van de klant; geen tussenpersonen. Hij mag (een deel van) het werk laten uitvoeren door een andere vakman (algemene voorwaarden art. 6 lid 2).
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
  (maximaal EUR 400 inclusief btw per geplande werkdag per ingeplande vakman bij annulering binnen
  2 werkdagen voor de start, en alleen voor dagen die redelijkerwijs niet meer te vullen zijn).
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
  per strekkende meter inclusief afkitten), en meerwerk (artikel 7 van de algemene voorwaarden:
  alleen na schriftelijk akkoord op reden en prijs, WhatsApp telt; zonder akkoord geen meerwerk op
  de factuur). Garantie: 5 jaar op tegelwerk
  en voegwerk, 1 jaar op kitwerk. Toezegging: reactie binnen 1 werkdag via WhatsApp en een
  gespecificeerde offerte binnen 5 dagen, zonder kleine lettertjes. NIET GEPUBLICEERD en dus niet
  op de pagina te vinden: voorrijkosten, puinafvoer en snijverlies/breukreserve. Die staan er als
  ontbrekend bij in plaats van stilzwijgend weggelaten.
- ${base}/wat-kost-een-badkamer-betegelen : "Wat kost een complete badkamer betegelen (wand + vloer)?"
  LET OP: Van Wonderen Tegelwerken publiceert GEEN tarief per m2. Er staat op deze pagina geen bedrag
  van dit bedrijf en er mag er ook geen uit worden afgeleid.
  KERNANTWOORD: een badkamer wordt niet afgerekend per m2 vloer maar per m2 TEGELWERK, en dat is wand
  plus vloer. REKENREGEL: wand = 2 x (lengte + breedte) x tegelhoogte, min de deuropening; daar de
  vloer (lengte x breedte) bij op. Doorgerekend bij een tegelhoogte van 2,60 m, deur 0,80 x 2,00 m
  eraf: 1,80 x 2,20 m geeft 4,0 m2 vloer en 19,2 m2 wand (23,2 m2 tegelwerk); 2,20 x 2,60 m geeft
  5,7 m2 vloer en 23,4 m2 wand (29,1 m2 tegelwerk); 2,80 x 3,20 m geeft 9,0 m2 vloer en 29,6 m2 wand
  (38,6 m2 tegelwerk). Het totaal is dus 4,3 tot 5,8 keer het vloeroppervlak, en die verhouding loopt
  OP naarmate de badkamer kleiner is (omtrek groeit lineair, oppervlak kwadratisch). Op het wettelijk
  minimum (1,2 m rondom plus 2,1 m over 3 m bij de douche, Besluit bouwwerken leefomgeving art. 4.120;
  bestaande bouw 1 m, art. 3.65) daalt het tegelwerk met circa 35 procent.
  MARKTMETING (16-09-2026, zeven pagina's over DEZE vraag volledig gelezen: homedeal.nl, zoofy.nl,
  bobex.nl, klaardeklus.nl, multiconcurrent.nl, kemptegelwerk.nl, decorstone.nl; werkspot.nl gaf
  HTTP 403 en is NIET gelezen). Geteld over die zeven: 4 van 7 noemt een voorbeeld met wand- EN
  vloeroppervlak, 0 van 7 zet de tegelhoogte erbij, 0 van 7 geeft de lezer een rekenregel voor zijn
  eigen wandoppervlak, 3 van 7 noemt het btw-tarief van 21 procent, en 2 van 7 is een tegelzetter die
  zijn eigen prijs publiceert. De tegelhoogte die hun voorbeelden impliceren is terug te rekenen en
  staat als BOVENGRENS op de pagina. De formule is voor alle vier dezelfde: hoogte = (wandoppervlak +
  1,60 voor de deuropening) gedeeld door de omtrek van een VIERKANTE plattegrond met dat vloeroppervlak
  (een vierkant heeft de kortste omtrek, dus de hoogste uitkomst). Homedeal.nl 16,6 / 10,58 = ten
  hoogste 1,57 m, bobex.nl 21,6 / 11,31 = 1,91 m, decorstone.nl 21,6 / 8,94 = 2,41 m, kemptegelwerk.nl
  36,6 / 13,86 = 2,64 m; alleen die laatste gaat tot het plafond.
  BTW: 21 procent, ook in een badkamer; onderbouwing staat op
  ${base}/wat-kost-vloer-tegelen-per-m2.
  POSTEN DIE IN EEN BADKAMER ZITTEN EN IN EEN KALE VLOERPRIJS NIET: de waterdichting onder de tegels,
  het afschot naar de afvoer, sloop en afvoer van het oude tegelwerk, pas- en snijwerk rond doorvoeren
  en nissen, de onderste rij wandtegels die er na de vloer op gaat, en hoekprofielen met kitwerk.
  WAT VAN WONDEREN TOEZEGT: reactie binnen 1 werkdag via WhatsApp, een gespecificeerde offerte binnen
  5 dagen zonder kleine lettertjes met wand- en vloertegelwerk als aparte regels, 5 jaar garantie op
  tegelwerk en voegwerk en 1 jaar op kitwerk, en meerwerk alleen na schriftelijk akkoord op reden en
  prijs (artikel 7 van de algemene voorwaarden; wat bij sloop tevoorschijn komt: eerst laten zien en
  een prijs, pas door na akkoord, artikel 15).
- ${base}/tegels-zelf-kopen-of-via-de-tegelzetter : "Koop ik de tegels zelf of levert de tegelzetter ze?"
  LET OP: Van Wonderen Tegelwerken publiceert GEEN tegelprijs en GEEN kortingspercentage. Er staat op
  deze pagina geen bedrag van dit bedrijf; de bedragen die er staan zijn retourkosten van derden.
  KERNANTWOORD: beide mag. Zelf kopen bij een willekeurige leverancier kan en kost bij Van Wonderen
  niets extra; hij verwerkt de tegels gewoon. In het tarief zitten lijm, voorlijm, voegwerk en
  oppervlakkig egaliseren; de tegels en de plinten staan als aparte regel op de offerte. De keuze
  gaat niet over inkoopkorting maar over drie dingen: de bestelmarge, het overschot, en waar het
  materiaalrisico ligt.
  MARKTMETING (17-09-2026, SERP gemeten met een eigen lezer op DuckDuckGo en Brave; GOOGLE ONGEMETEN,
  machinaal geblokkeerd, dus geen Google-uitslag). DuckDuckGo gaf op drie formuleringen drie
  bezitters: doe-hetzelf.nl, tegelzetter-direct.nl en offerteman.nl; Brave gaf homedeal.nl, met
  offerteman.nl op 2 en werkspot.nl op 3. Twaalf pagina's volledig gelezen en geteld: 10 van de 12
  is offerteplatform, prijsvergelijker of doe-het-zelf-handleiding en 0 van de 12 is een tegelzetter
  die zijn eigen afspraak publiceert. 3 van 12 noemt een percentage extra bestellen, 1 van 12 maakt
  dat percentage afhankelijk van legverband of formaat, 3 van 12 waarschuwt voor een andere charge
  bij nabestelling, 0 van 12 noemt een retourvoorwaarde van een leverancier, 0 van 12 noemt een
  wetsartikel over materiaalrisico of de waarschuwingsplicht, en 0 van 12 zegt wat zelf kopen doet
  met de garantie van de tegelzetter.
  EIGEN METING RETOURBELEID (17-09-2026, twaalf tegelleveranciers bevraagd op negen vaste paden,
  VIJF leverden een leesbare pagina, ZEVEN staan als ongemeten en niet als "geen retour").
  Maxaro: 365 dagen bedenktijd, retourkosten 9,95 euro pakketdienst of 19,95 euro groottransport,
  samples/showroommodellen/maatwerk uitgesloten. Tegels en Laminaat: webshop 14 dagen wettelijke
  herroeping, te veel besteld binnen 2 weken en dan maximaal 5 procent van de bestelde hoeveelheid
  in ongeopende verpakking, showroomaankoop met een staffel retourkosten van 25 procent onder 8
  dagen tot 75 procent tussen 30 en 45 dagen en daarna geen retour, speciaal bestelde producten
  nooit retour. Tegelzetshop: 30 dagen herroeping, retourzending voor eigen rekening, pallet of
  lengtevracht extra kosten. Tegel-uitverkoop: 14 kalenderdagen, retourvracht via hun transporteur
  82 euro, en letterlijk "Heeft u bij het bestellen van de producten teveel besteld en zijn er na
  het leggen van de tegels dozen over? Dan kunnen wij deze helaas niet retour nemen, tenzij vooraf
  anders overeengekomen." Praxis: 30 dagen, met Praxis Plus 90 dagen, op maat gemaakte artikelen
  uitgesloten.
  DE BOTSING: de bovenlaag adviseert eensgezind circa 10 procent extra bestellen, terwijl Tegels en
  Laminaat maximaal 5 procent terugneemt en Tegel-uitverkoop overgebleven dozen helemaal niet.
  Dezelfde marge kost dus 9,95 euro, de helft, of alles. Bovendien loopt de retourtermijn vanaf
  AFLEVERING en niet vanaf oplevering, terwijl een standaard badkamer op 2 tot 3 weken werk staat.
  WETTELIJKE ONDERLAAG (geldende toestand 2026-07-01, BWBR0005290): art. 7:760 lid 1 legt de gevolgen
  van ongeschikt materiaal van de aannemer bij de aannemer; lid 2 legt de gevolgen van ongeschikt
  materiaal van de opdrachtgever bij de opdrachtgever, voor zover de aannemer zijn waarschuwingsplicht
  niet heeft geschonden; art. 7:754 lid 2 eist dat die waarschuwing bij aanneming van een bouwwerk
  schriftelijk en ondubbelzinnig is en kan niet ten nadele van een particuliere opdrachtgever worden
  gewijzigd; art. 7:23 lid 1 geeft bij consumentenkoop een kennisgeving binnen twee maanden na
  ontdekking als tijdig. Artikel 10 van de eigen algemene voorwaarden sluit aansprakelijkheid uit
  voor gebreken in materialen van de opdrachtgever, behalve als de tegelzetter ze had moeten zien
  en niet heeft gewaarschuwd.
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
