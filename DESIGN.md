---
versie: 1
# route toegevoegd 23 sep 2026 (wet art. 3.5b): deze site is door l3art gebouwd, dus het
# contract komt uit ontwerpbesluiten en niet uit een opgraving van een bestaande site.
route: ontworpen
klant: wonderen
domein: https://www.wonderentegelwerken.nl
opgesteld: 2026-09-03
herkomst: >
  DESCRIPTIEF (gemeten 03-09-2026 met `node motor/scripts/designpoort.mjs --meten`, 16 renderingen
  over 8 paden op 1440 en 390): letterfamilies, vlakken, de gebruikte tekstkleuren, de radii, het
  sectieritme en de containerbreedtes. Die meting legt vast wat de site DOET.
  PRESCRIPTIEF (ontwerpbesluit dispatcher-20260903-1205 onder de pet Chief Architect Designer,
  03-09-2026): de visuele these, het grote idee, de typeschaal, welke tekstkleuren en radii mogen
  blijven, en de anti-sloplijst. Die leggen vast wat de site MOET.
  Waar meting en besluit botsen wint het besluit en is de afwijking werk, geen norm — het contract
  is nadrukkelijk niet de status quo (design-architectuur par. 6, wet art. 9.5).
  Het merkblok hieronder komt volledig uit `motor_feiten` (10 rijen, bedrijf_id=wonderen). Niets
  daarin is ingevuld; wat niet in de feiten staat, staat hieronder als [AANNAME] of als vraag.

name: Van Wonderen — de opbouw onder het oppervlak
description: >
  Een lichte, strak uitgelijnde site waarin het RASTER zelf het merkteken is: kolommen, voegen en
  witruimte staan in lijn zoals een goed gelegde vloer in lijn staat, en er breekt nooit iets
  doorheen. Bijna alle tekst staat in één rustige sans; de serif is gereserveerd voor precies één
  uitspraak of getal per scherm. Het beeld toont geen gestileerde badkamer maar de opbouw: de
  ondervloer, de dilatatie, de voeglijn, het detail waar twee vlakken samenkomen. Je herkent hem
  aan drie dingen: het raster staat overal in lood, de voeg is een echt ontwerpelement in plaats
  van een lijntje, en elke belofte over duurzaamheid wordt gedekt door een technisch detail dat
  je kunt narekenen.

merk:
  identiteit: eenmanszaak van Jaap van Wonderen (Breda, sinds 2022) die vloeren, wanden, badkamers en buitentegelwerk legt en voor elke klus eindverantwoordelijk is, ook als hij werk uitbesteedt (6 okt 2026, Jaap) — geen tussenpersonen
  belofte: tegelwerk dat blijft liggen, met vooraf een gespecificeerde prijs en achteraf geen meerwerk
  karakter: technisch, uitgelijnd, nuchter, controleerbaar, onopgesmukt
  gewenste_perceptie: deze man weet wat er ONDER de tegel gebeurt, en legt dat uit voordat ik het vraag
  gewenste_emotie: gerustheid dat het niet gaat scheuren, loskomen of duurder worden
  doelgroep: particuliere huiseigenaar in en rond Breda die een badkamer of vloer laat betegelen, meestal midden in een verbouwing, en die vooral bang is voor scheuren, uitloop en meerwerk
  marktpositie: "[ONBEKEND] — er is geen vastgelegd prijs- of kwaliteitsbesluit ten opzichte van lokale tegelzetters. De m2-prijsvraag ligt al bij de ondernemer (wonderen-kans-prijsvraag-vloer, TAAK-20260830-02). Niet invullen zonder antwoord."

visuele_these: >
  Wat een klant van een tegelzetter koopt is niet de tegel — die kiest hij zelf in de winkel. Hij
  koopt de LAAG ERONDER: een vlakke ondervloer, dilataties op de goede plek, lijm die bij
  vloerverwarming hoort, droogtijd die gerespecteerd is, een voeg die niet uitloopt. Dat is precies
  het deel dat hij nooit te zien krijgt en waar hij dus bang voor is. Alle vier de feiten die Jaap
  onderscheiden gaan daarover, en geen enkele concurrent laat het zien.
  Daarom is de opbouw de hoofdrolspeler van de beeldtaal en niet de opgeleverde badkamer, en daarom
  is het RASTER de dragende vorm: uitlijning is bij tegelwerk geen smaak maar vakmanschap — een
  vloer die uit lood ligt is een mislukte klus, ook als de tegel mooi is. De site moet dus zelf in
  lood liggen. Kolommen sluiten aan, secties beginnen op dezelfde lijn, en de scheiding tussen
  vlakken is een dunne lijn die leest als een voeg. Er breekt nooit iets uit het raster, want dat
  zou het enige zijn wat de site over zichzelf niet mag beweren.
  De typografie treedt daarbij terug: één sans draagt vrijwel alles, zodat de serif — precies één
  keer per scherm, op een getal of een uitspraak — het gewicht krijgt dat hij in dit vak verdient
  (5 jaar garantie, 15 minuten rijden, binnen 1 dag antwoord).

grote_idee: leg de site zoals je een vloer legt — alles in lijn, de voeg zichtbaar, de opbouw kloppend

# -------------------------------------------------------------------- kleuren
# Rollen, geen merknamen. Descriptief gemeten 03-09-2026 en tot besluit verheven, behalve waar
# hieronder anders staat. #25d366 is geen merkkleur maar de voorgeschreven WhatsApp-groen op de
# WhatsApp-knop; die moet exact die waarde houden en telt niet als palet-uitbreiding.
colors:
  canvas: "#fbfaf7"
  surface: "#f4efe6"
  ink: "#14130f"
  ink-mute: "#4b4842"
  meta: "#6b6862"
  op-donker: "#fbfaf7"
  op-donker-mute: "#c7c4be"
  signaal: "#9a4f18"
  signaal-licht: "#e59e58"
  whatsapp: "#25d366"

typography:
  display:
    fontFamily: "Fraunces Variable"
    fontSizeMin: 60
    fontSizeMax: 76
    letterSpacing: "-0.01em"
    rol: >
      precies EEN uitspraak of getal per scherm — nooit elke kop. Dit is het verschil met een
      gewone koppenhierarchie: de serif is hier een stempel, geen niveau.
  h2:
    fontFamily: "Inter Variable"
    fontSizeMin: 24
    fontSizeMax: 36
  basis:
    fontFamily: "Inter Variable"
    fontSize: 16
    rol: alle lopende tekst — één maat
  micro:
    fontFamily: "Inter Variable"
    fontSize: 12
    rol: labels, maten, stempels
  regellengte_max: 72 tekens

compositie:
  grid: >
    12 kolommen binnen een container van 1280px (gemeten: 52 van de 63 secties gebruiken die
    breedte al). De regel die eruit volgt is de these: NIETS breekt uit het raster — geen
    full-bleed beeld dat de kolom negeert, geen kaart die een halve kolom uitsteekt. Waar een
    ander merk spanning haalt uit doorbreken, haalt dit merk vertrouwen uit sluiten.
  asymmetrie: >
    Alleen in de VERDELING (bijvoorbeeld 7/5 voor tekst naast beeld), nooit in de UITLIJNING.
    Twee kolommen mogen ongelijk breed zijn; hun boven- en onderlijn zijn dat nooit.
  ritme_basis: clamp(64px, 6vw, 96px)
  ritme_moment: clamp(96px, 9vw, 128px) — alleen voor de opbouw-sectie en het projectbewijs
  dichtheid: >
    gemiddeld. De koper zit midden in een verbouwing en leest op een telefoon tussen twee
    beslissingen door: genoeg technisch detail om te vertrouwen, nooit een muur tekst.

vorm:
  radius_basis: 12
  lijnen: >
    Scheiding ontstaat met een haarlijn van 1px in de rustige grijstint, nooit met een schaduw.
    Die lijn is bewust de VOEG van het ontwerp: hij is overal even breed, loopt door waar vlakken
    elkaar raken, en stopt niet halverwege. Een ongelijke voeg is bij deze klant een inhoudelijke
    fout, geen detail.
  signaalvlak: >
    ONTWERPBESLUIT 28-10-2026 (zelfde ronde). Op het signaalvlak — het accent-verloop van de
    CTA-blokken — draagt transparantie GEEN hiërarchie. Gemeten op productie: een regel in
    op-donker/70 haalde daar 3,55:1 en op-donker/90 bleef op 4,82:1 steken, en op-donker-mute
    (#c7c4be) zou er 3,30:1 geven — op dit vlak bestaat dus geen gedempte tekstkleur die de eis
    haalt. Alle tekst op het signaalvlak staat daarom in volle op-donker; het verschil tussen
    eerste en tweede regel komt van maat en gewicht, zoals het in een technisch register hoort.
  kaarten: >
    Alleen waar de inhoud werkelijk los staat (een project, een dienst, een werkgebied). Nooit om
    een alinea heen — een kaart die alleen tekst inpakt maakt van het raster een verzameling
    dozen en dat is precies de generieke uitkomst die dit vak al heeft.
  raakvlak: >
    ONTWERPBESLUIT 28-10-2026 (bouwer-20261028-2305, TAAK-20260903-VW-RAAKVLAK). Elk aanraakvlak
    is minstens 44x44, uitgezonderd een link die middenin een lopende zin staat — die mag per
    WCAG 2.5.8 ("inline: constrained by the line-height of non-target text") de regelhoogte
    volgen, want 44px zou de zin uit elkaar trekken. Grammatica: .raaklink en .raaklink-strak in
    globals.css. GROND: de enige waargenomen conversie op deze site is WhatsApp (motor_conversies,
    26 aug 2026) en het enige andere directe kanaal is bellen; een telefoonnummer van 20px hoog is
    op een telefoon geen knop maar een gok. Dit was tot vandaag `raakvlak_hard: false` met als
    enige grond "overgenomen van de andere contracten" — een norm die zacht stond omdat niemand
    hem gemeten had. GEMETEN: voor, op productie 28-10-2026 over de zeventien contractpaden bij
    390px, 38 unieke raakvlakken onder 44px, waaronder 06-18249249 (350x20) en
    wonderentegelwerken@gmail.com (350x20) in de voet en de zes dienstlinks (100x17 tot 219x17).
    DE TWEE REGELS. EEN: waar boven en onder het raakvlak witruimte staat en geen tweede
    raakvlak — de kruimelbalk op elf paginatypes — loopt de 44px in die witruimte
    (.raaklink-strak, negatieve marge), zodat de rij niet groeit en het eerste scherm op zijn
    plek blijft. TWEE: waar raakvlakken onder elkaar staan — de drie lijsten in de voet — mag dat
    NIET, want twee hitvlakken van 44px op 29px afstand overlappen elkaar 15px en dan opent de
    bezoeker juist vaker de verkeerde link. Daar is de raakhoogte de regelafstand geworden: rijen
    van 44px zonder tussenruimte. Dat kost op 390px ongeveer 190px voethoogte en het is op these:
    sluitende rijen van gelijke hoogte zijn het raster dat dit contract belooft, losse regeltjes
    met lucht ertussen niet. VERWORPEN: de voetlinks als pillen of knoppen vormgeven, want dan
    komt de 44px er "gratis" bij — dat is precies de kaart om een alinea die `vorm.kaarten` en de
    anti-sloplijst verbieden. De 44px komt hier uitsluitend uit maat en ruimte: geen nieuw vlak,
    geen nieuwe rand, geen nieuw token. GEEN UITZONDERINGSLIJST: designpoort.mjs kent er voor
    raakvlakken geen, en een norm die zacht blijft staan omdat één geval niet past is precies wat
    deze ronde opruimt. Blijft er later toch een geval over, dan is dat een ontwerpbesluit hier en
    geen stille terugval naar false.

beeld:
  bron: >
    first-party. Er staan 42 afbeeldingen op de gemeten paden, alle 42 met alt-tekst. Drie
    projectcases hebben eigen fotografie. Wat ontbreekt is de opbouw — zie de openstaande vraag.
  onderwerp: >
    In volgorde van belang: (1) de OPBOUW en het detail — ondervloer, egalisatie, dilatatievoeg,
    lijmkam, de aansluiting tussen vloer en wand; (2) het werk in uitvoering; (3) pas daarna het
    opgeleverde vlak. Een gestileerde badkamer zonder mens en zonder gereedschap staat nooit
    bovenaan een pagina.
  behandeling: >
    Recht van voren of recht van boven, daglicht, geen kleurfilter, geen kunstmatige warmte.
    Uitsnede volgt het raster: de beeldrand valt samen met een kolomlijn.
  stock: verboden zolang er eigen werk gefotografeerd kan worden — en dat kan altijd
  labelvoet: >
    ONTWERPBESLUIT 28-10-2026 (bouwer-20261028-1205, TAAK-20260903-VW-CONTRAST-BEELD).
    Op een foto is de achtergrond geen kleur maar een opname: hij verschilt per project, per
    uitsnede en per daglicht. Leesbaarheid is daarom nooit een eigenschap van de foto en altijd
    een eigenschap van het ontwerp. Twee regels, samen de grammatica .beeldlabel/.beeldvoet in
    globals.css. EEN: op een foto draagt het accent geen TEKST meer maar de VOEG — de tekst van
    het metalabel staat in op-donker (#fbfaf7), het accent keert terug als de haarlijn ervoor,
    en die haarlijn staat op elk label, ook waar er al een icoon staat, zodat de labelregels van
    naast elkaar liggende kaarten op dezelfde x beginnen. TWEE: de leesgrond hoort bij het
    LABELBLOK en niet bij de foto — de voet wordt door het blok zelf gemaakt (::before, uitloop
    4rem) en reikt dus altijd tot boven zijn eigen tekst, ongeacht hoeveel regels erin staan.
    GROND IN DE THESE: het raster is de belofte en de voeg is het ontwerpelement dat dat raster
    draagt; het accent als voeg laten terugkomen houdt die belofte, een oranje label op een foto
    breekt hem. Verworpen alternatief A, een eigen achtergrondvlakje achter het label: dat is de
    kaart om een alinea die `vorm.kaarten` en de anti-sloplijst verbieden, en het zweeft
    bovendien over bewijs. Verworpen alternatief B, alleen de scrim verzwaren: dat laat de
    leesbaarheid van elke volgende projectfoto een gok, en het was precies de te korte scrim die
    deze fouten maakte. BIJVANGST: de oude scrim lag over het HELE beeld (inset-0, 30-40% op
    halve hoogte) en sluierde dus ook de bovenkant; de voet raakt alleen het labelblok, zodat de
    opbouw op de foto onbehandeld in beeld blijft — wat `beeld.behandeling` sowieso al eiste.
    GEMETEN: voor, op productie 28-10-2026, 13 monsters van 1,19:1 tot 4,29:1 over /, /projecten,
    /projecten/badkamer-juli-2025 en /tegelzetter; na, in de losse render van dezelfde kaarten
    over dezelfde foto's, 10,9:1 tot 17,5:1 (motor/scripts/contrastpixels.mjs).

motion:
  micro: 120-200ms
  ui: 180-350ms
  redactioneel: 400-800ms
  easing: entrance cubic-bezier(0.2, 0, 0, 1) · exit cubic-bezier(0.4, 0, 1, 1)
  doel_verplicht: [orientatie, hierarchie, feedback, continuiteit, focus]
  verboden: [alles-fade-in, scroll-jacking, intro voor content, parallax op het raster]
  reduced_motion: volwaardige site zonder beweging
  opmerking: >
    Beweging mag het raster nooit tijdelijk uit lijn zetten. Een element dat binnenschuift en
    onderweg 8px naast zijn kolom staat, weerspreekt de these zolang de animatie duurt.

driedimensionaal:
  status: niet in gebruik
  voorwaarde: >
    Alleen als een doorsnede van de vloeropbouw aantoonbaar beter te begrijpen is in 3D dan als
    getekende of gefotografeerde doorsnede. Eerst de platte versie maken en meten; 3D is hier een
    laatste redmiddel, geen ambitie.

do_not_use:
  - de gestileerde luxe-badkamer met vrijstaand bad en handdoek in beeld — dat is de foto van de tegelleverancier, niet van de tegelzetter, en hij staat op elke concurrentensite
  - de vakman met duim omhoog, de bouwhelm, het blauwe klusjesman-register
  - "kwaliteit, service en vakmanschap" als drieluik — dat is de zin die iedereen in dit vak schrijft en die dus niets zegt
  - sterren, keurmerklogo's of cijfers die niet uit een verifieerbare bron komen (wet art. 1)
  - de beeld-breekt-het-raster-compositie van JDG (`~/klanten/jdg-maatwerkinterieur/DESIGN.md`) — daar is de ongebroken LIJN van maker tot montage het idee en mag het beeld het raster sturen; hier is het raster zelf de belofte en zou lenen de these van beide klanten verzwakken
  - monospace als werkplaatsstem — óók van JDG; twee vakmansites van hetzelfde bureau met dezelfde typografische truc is een bureaustijl, geen merk
  - een kaart om elke alinea

# ---------------------------------------------------------------------------
# CONTRACT — machinaal gehandhaafd door motor/scripts/designpoort.mjs.
# ---------------------------------------------------------------------------
contract:
  # PADEN = PAGINATYPES, niet een greep uit de sitemap. Uitgebreid 6 sep 2026
  # (TAAK-20260904-CONTRACT-PADENDEKKING). Aanleiding, gemeten op jdg: een contrastfout die
  # op 50 van de 87 live URL's rendert werd door de poort op EEN pagina gezien, omdat het
  # paginatype waarop hij stond geen pad in het contract had. Een type kan tientallen URL's
  # dragen; een ongedekt type is geen gaatje maar een gat.
  # Per regel staat welk TYPE het pad vertegenwoordigt. Een pad TOEVOEGEN verscherpt de norm
  # en mag de bouwer; een pad WEGHALEN is een ontwerpbesluit. Let op: de YAML-subset van de
  # poort kent geen commentaar ACHTER een lijstitem — daarom staat het type erboven.
  paden:
    # homepage
    - /
    # overzicht diensten
    - /diensten
    # dienst-detail
    - /diensten/badkamer-renovatie
    # overzicht projecten
    - /projecten
    # project-detail
    - /projecten/badkamer-juli-2025
    # overzicht plaatsen
    - /tegelzetter
    # tegelzetter-stad
    - /tegelzetter/breda
    # werkgebied
    - /werkgebied
    # redactionele pagina
    - /over-ons
    # antwoordpagina (antwoordlaag: één klantvraag, volledig beantwoord)
    # 20 sep 2026 (TAAK-20260919-WONDEREN-CONTRACTPAD-404, dispatcher-20260920-2137):
    # /tegelen-op-houten-ondervloer is hier WEGGEHAALD en /badkamer-waterdicht-maken
    # toegevoegd. Grond voor het weghalen: Jaap wees die vraag 10 sep 2026 in het portaal af
    # ("krijg ik zelden tot nooit"), de pagina is 15 sep teruggetrokken (commit e4f79f6) en
    # geeft op productie 404 — het pad mat een gat in de meting, niet in de site. Weghalen is
    # per de kop hierboven een ontwerpbesluit: ter bekrachtiging bij Bart uitgezet.
    # Grond voor het toevoegen: /badkamer-waterdicht-maken is live (200) en staat in de
    # productie-sitemap, maar stond in geen enkel contractpad en werd dus niet gemeten.
    - /badkamer-betegelen-tot-plafond
    - /badkamer-waterdicht-maken
    - /losse-tegels-en-scheurende-voegen
    - /tegelvloer-belopen-en-vloerverwarming-aanzetten
    - /tegelen-over-bestaande-tegels
    # lokale dienstvraag met antwoordeenheid (toegevoegd 14 okt 2026 door
    # schrijver-20261014-1435, contract 8dca7665: een pad TOEVOEGEN verscherpt de norm)
    - /badkamer-renovatie-breda
    # formulierpagina
    - /contact
    # juridische pagina
    - /privacy
  viewports: [1440, 1024, 390]
  fontfamilies: [Inter Variable, Fraunces Variable]
  fontschaal: [12, 14, 16, 18, 20, 24, 30, 36, 48]
  fontschaal_vloeiend: [60-76]
  min_font_px: 12
  vlakken: ["#fbfaf7", "#f4efe6", "#14130f", "#25d366"]
  tekstkleuren: ["#14130f", "#4b4842", "#6b6862", "#fbfaf7", "#c7c4be", "#9a4f18", "#e59e58", "#ffffff"]
  kleur_tolerantie: 2
  radii: [2, 12, 16, 24, "3.35544e+07"]
  contrast_min: 4.5
  ritme_metronoom_max: 0.5
  overloop_max_px: 0
  # GEMETEN 28-10-2026 en daarmee van [AANNAME] naar besluit — zie raakvlak hieronder.
  raakvlak_hard: true
  reduced_motion: true
  min_beelden_per_pagina: 1
---

# DESIGN.md — Van Wonderen Tegelwerken

## Wat deze site anders maakt

**1. De opbouw is de hoofdrolspeler, niet het resultaat.** Elke concurrent toont de afgewerkte
badkamer. Deze site toont wat eronder zit, omdat dáár het geld en het risico zitten: egaliseren,
dilataties, vloerverwarmingsvriendelijke lijm, droogtijd, voegwerk. Dat zijn geen verzonnen
verkoopargumenten maar vier vastgelegde feiten uit `motor_feiten`.

**2. Het raster is de belofte.** Bij tegelwerk is uitlijning geen esthetiek maar het vak zelf. Een
site die zelf niet in lijn ligt, weerspreekt de belofte die hij doet. Daarom breekt hier niets uit
het raster — een beperking die bij een fotograaf of een meubelmaker onnodig zou zijn.

**3. De serif is een stempel, geen koppenniveau.** Precies één serif-uitspraak per scherm, altijd
op iets naretelbaars: *5 jaar garantie*, *binnen 1 dag antwoord*, *max 15 minuten rijden*. Zo
draagt de typografie de controleerbaarheid in plaats van de sfeer.

Haal het logo weg en je ziet nog steeds waarvoor dit ontworpen is: een vlak, een voeg, een raster
in lood, en een technische doorsnede.

## Referentieonderzoek

Vier bronnen uit `brand/referenties/design-md/`, elk voor één principe. Geen van de vier levert een
layout; alle vier leveren een mechanisme.

**Stripe** — REFERENTIE: een merk waarvan het product volstrekt onzichtbaar is (betaalinfrastructuur)
en dat toch vertrouwen wint. PRINCIPE: onzichtbare infrastructuur wordt geloofwaardig door hem
STAP VOOR STAP zichtbaar te maken, met getallen in tabulaire cijfers waar het over geld gaat — niet
door hem mooier te beschrijven. VERTALING: de vloeropbouw krijgt een eigen, sequentiële uitleg
(ondervloer → egaliseren → vloerverwarming → lijm → tegel → voeg → dilatatie), en elke prijs of maat
staat in tabulaire cijfers zodat je kolommen kunt vergelijken. ORIGINALISERING: geen indigo, geen
gradient-mesh, geen SaaS-chroom; ons medium is gefotografeerd materiaal, niet illustratie.

**IBM (Carbon)** — REFERENTIE: hoeken van 0-4px, dunlijns tegels zonder schaduw, één enkel accent.
PRINCIPE: een strak, hoekig register leest als technische competentie; precisie in de chroom maakt
de inhoud geloofwaardig zonder er een woord aan te wijden. VERTALING: scheiding met haarlijnen in
plaats van schaduwen, en één signaalkleur in plaats van een palet. ORIGINALISERING: niet IBM-blauw
en niet Plex — ons accent is de terracotta die al op de site staat, en ons raster komt uit
tegelformaten, niet uit een enterprise-systeem. Wij nemen de hoekigheid ook niet integraal over:
12px blijft de basisradius, want een consumentensite in dit vak mag niet als software aanvoelen.

**BMW M** — REFERENTIE: de merkenergie komt volledig uit full-bleed fotografie en detailopnamen
(carbon van dichtbij), de interface draagt zelf geen decoratie. PRINCIPE: als het materiaal het
product is, moet het materiaal ook de compositie dragen; de chroom treedt terug. VERTALING: de
close-up van de dilatatievoeg, de lijmkam en de aansluiting vloer-wand is het hoofdbeeld — het
materiaal van dichtbij, niet het interieur van veraf. ORIGINALISERING: lichte grond in plaats van
bijna-zwart, geen tricolor-signatuur, en onze close-ups tonen CONSTRUCTIE waar BMW schoonheid toont.

**Wise** — REFERENTIE: een merk dat het volledige kostenplaatje toont, inclusief wat je níet betaalt,
en daarmee het register van de eigen categorie (bank) verlaat. PRINCIPE: volledige opsplitsing wint
meer vertrouwen dan een laag kopgetal — en het lenen van een aangrenzend, geloofwaardiger register
haalt je uit het wantrouwen van je eigen branche. VERTALING: de offerte- en prijsuitleg specificeert
wat inbegrepen is en wat apart geprijsd wordt (plinten staan letterlijk zo in de feiten), en het
register dat we lenen is dat van technische documentatie in plaats van de klusjesmanfolder.
ORIGINALISERING: geen limegroen, geen zware display-sans, geen fintech-kaarten; alleen het
mechanisme van volledig uitsplitsen.

## Category codes vs. clichés

**Codes die blijven** (weghalen kost vertrouwen): eigen projectfoto's met plaats en datum — een
tegelzetter zonder projectfoto's is ongeloofwaardig; een expliciet werkgebied met reistijd, want de
koper wil weten of hij überhaupt komt; garantietermijnen in jaren; een telefoonnummer en WhatsApp
die zichtbaar zijn zonder formulier; de prijs per m² als eenheid, want zo denkt de koper.

**Clichés die weg moeten** (ze maken generiek): de gestileerde luxe-badkamer van de
tegelleverancier; het drieluik "kwaliteit, service en vakmanschap"; de vakman met duim omhoog; de
stockfoto van een waterpas op een perfect vlakke vloer; sterren en keurmerken zonder verifieerbare
bron; "al jarenlang uw specialist" bij een bedrijf dat sinds 2022 bestaat — dat is bovendien in
strijd met wet art. 1.

## Signature moment

**De doorsnede.** Eén sectie die de vloeropbouw laag voor laag toont — ondervloer, egalisatie,
vloerverwarming, lijm, tegel, voeg, en de dilatatie op de goede plek — met bij elke laag één zin
over wat er misgaat als je hem overslaat. Het is het enige element op de site dat een bezoeker een
dag later kan navertellen, het volgt rechtstreeks uit de vastgelegde feiten, en geen enkele
concurrent in dit werkgebied heeft het. Het is bovendien het beste antwoord op de angst die deze
koper werkelijk heeft: niet "wordt het mooi", maar "gaat het scheuren".

## Openstaande ontwerpbesluiten

- **Marktpositie is [ONBEKEND].** Er ligt geen prijs- of kwaliteitsbesluit ten opzichte van lokale
  tegelzetters. De m²-prijsvraag staat al bij de ondernemer (`wonderen-kans-prijsvraag-vloer`,
  `TAAK-20260830-02`). Niet invullen zonder antwoord.
- **De opbouwfotografie bestaat nog niet.** Het signature moment vraagt beeld van werk in
  uitvoering: een gezette dilatatie, een lijmkam, een geëgaliseerde ondervloer. Dat kan alleen Jaap
  maken en het is een vraag aan hem, geen bouwtaak. Zonder dat beeld is de doorsnede een tekening
  en dus zwakker bewijs.
- **[AANNAME] Hoekigheid.** De these pleit ervoor de zichtbare geometrie hoekiger te maken
  (radii terug naar 2 en 12) omdat een tegel een rechthoek is. Het contract laat nu 16 en 24 nog
  toe, omdat die op de bestaande site dragend zijn en een gedwongen herbouw niet in verhouding
  staat tot het budget van deze klant. Dit is een richting, geen norm — pas aan bij de eerstvolgende
  ontwerpronde, niet tussendoor.
- **Het decoratieve cijfer is geen ornament meer (besloten 28-10-2026).** De stapcijfers
  01/02/03 op `/contact` en `/over-ons` stonden in 72px serif op 30% dekking en maten 1,43:1.
  Besluit: een cijfer dat de stap nummert is TEKST, want het draagt de volgorde. Het is daarom
  naar het microregister van dit contract verhuisd (`typography.micro`: labels, maten, stempels)
  en gebruikt de bestaande `.eyebrow`-grammatica — gemeten 5,23:1. Tweede grond: 72px serif was
  een tweede, derde en vierde serif-uitspraak per scherm, terwijl `typography.display.rol` er
  precies één toestaat, en een ordinaal is bovendien niets naretelbaars. Het alternatief
  (`aria-hidden` + de stap in woorden) is verworpen: het cijfer blijft dan op het scherm staan
  en blijft dus gemeten tekst — onzichtbaar voor de schermlezer én onleesbaar voor het oog is
  geen oplossing maar een verbergtruc.

- **GEEN ontwerpbesluit: vier van de veertien gemelde contrastfouten zijn meetfouten.**
  `contrastpixels.mjs` meet alle tekstrechthoeken éénmaal vooraf en fotografeert ze daarna één
  voor één; bij paginas die tijdens die reeks nog verschuiven wijst een rechthoek dan naar een
  andere plek. Nagemeten met een verse rechthoek vlak vóór elke opname (28-10-2026) staat de
  eyebrow `Breda` op `/projecten/badkamer-juli-2025` op zuiver #fbfaf7 — 795 van de 795 pixels —
  en haalt dus 5,75:1 in plaats van de gemelde 4,20:1; hetzelfde geldt voor `Fase` op
  `/badkamer-renovatie-breda` en voor twee handtekeningregels in #6b6862. Die vier zijn NIET
  gerepareerd: een kleurwijziging op grond van een meetfout verslechtert het ontwerp zonder iets
  op te lossen. Uitgezet als werkorder voor de motor-bouwer (het meetinstrument is motorcode en
  niet van deze klant).

- **`raakvlak_hard` staat op `true` (besloten 28-10-2026).** De [AANNAME] die hier stond hing
  expliciet op één voorwaarde: "zet hem op `true` zodra de raakvlakken op 390px gemeten zijn".
  Ze zijn gemeten — 38 unieke raakvlakken onder 44px over de zeventien contractpaden, met het
  telefoonnummer en het e-mailadres in de voet erbij — en ze zijn alle 38 op maat gebracht. De
  twee regels en hun grond staan in `vorm.raakvlak`; de grammatica is `.raaklink` en
  `.raaklink-strak`. Wat hiervan NIET onder de norm valt is één geval: een link middenin een
  lopende zin, omdat WCAG 2.5.8 daar zelf een uitzondering maakt en designpoort.mjs die
  uitzondering sinds 7 sep 2026 meemeet.
