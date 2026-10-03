---
pagina: / (homepage, https://www.wonderentegelwerken.nl/)
klant: wonderen
contract: /Users/bartjaspers/klanten/wonderentegelwerken/DESIGN.md
datum: 2026-10-03
door: schrijver-20261003-1535 (interventiecontract 961be3b4, antwoordeenheid-verdiepen op "tegelzetter breda")

# ── DE VRAAG EN HET ANTWOORD ────────────────────────────────────────────────────────────────
primaire_gebruikersvraag: "Tegelzetter in Breda nodig — wie komt er dan, kom je ook in mijn plaats, en wat zit er in het werk?"

primair_antwoord: "Jaap van Wonderen, eenmanszaak aan de Leistraat in Breda, sinds 2022. Hij legt zelf; kerngebied is Breda en zeven plaatsen binnen een kwartier rijden; binnen 1 werkdag antwoord en binnen 5 dagen een gespecificeerde offerte."

business_intent: >
  Van 93 vertoningen op "tegelzetter breda" in 28 dagen (motor_gsc, 02-09 t/m 29-09-2026) komen 2 kliks.
  De pagina staat op gemiddeld 8,4 — vandaag (03-10-2026, Google NL desktop via DataForSEO) organisch 5
  maar absoluut 10, want boven ons staan een kaartblok van drie, een vergelijkblok en vier concurrenten.
  Doel is dat de passage zelf het antwoord wordt waar de zoeker op doorklikt. Dit wijkt af van wat de
  bezoeker wil (hij wil een prijs): daarom leidt de passage hem naar de bestaande prijspagina in plaats
  van op de homepage een bedrag te noemen dat er niet is.

beslispad: >
  Landen uit een lokale zoekvraag → "is dit een echt mens hier in de buurt of weer een offerteplatform?"
  → "kom je in mijn plaats?" → "wat zit er in dat tegelwerk, wordt het straks duurder?" → "hoe snel heb
  ik antwoord en een prijs?" → WhatsApp of bellen.

# ── HET EERSTE SCHERM ───────────────────────────────────────────────────────────────────────
# De hero blijft ongewijzigd. De nieuwe passage staat direct na de cijferstrook, dus in de eerste
# 30% van de pagina — niet in het eerste venster, en dat is bewust: de hero doet al wat-is-dit en
# wat-kan-ik-doen. De brief beschrijft hieronder het eerste scherm zoals het blijft.
eerste_scherm:
  wat_is_dit: "Tegelzetter in Breda en West-Brabant, eenmanszaak"
  is_dit_voor_mij: "Eyebrow 'Eenmanszaak · Breda en West-Brabant' plus 'Ik ben Jaap, jouw vaste tegelzetter uit Breda.'"
  belangrijkste_antwoord: "Tegelwerk dat jaren blijft staan — met de reden eronder in één alinea"
  waarom_geloof_ik_het: "Vijf sterren Google reviews, 'Eigen vakman', eigen projectfoto's uit Breda"
  wat_kan_ik_doen: "WhatsApp Jaap (primair) of bellen (secundair)"
  dominant: "Tegelwerk dat jaren blijft staan."
  moet_zichtbaar:
    - "Ik ben Jaap, jouw vaste tegelzetter uit Breda."
    - "Tegelwerk dat"

# ── ACTIES ──────────────────────────────────────────────────────────────────────────────────
# De passage voegt GEEN derde knop toe. Binnen de passage zijn de acties tekstlinks naar bestaande
# pagina's; de conversie-CTA blijft die van de hero en het slotblok.
primaire_cta:
  tekst: "WhatsApp Jaap"
  bestemming: "wa.me/31618249249 met voorgevulde offertetekst"
  vorm: "gevulde pil (ongewijzigd, hero en slotblok)"
secundaire_cta:
  tekst: "06-18249249 bellen"
  vorm: "omlijnde pil — nooit dezelfde vulling als primair (ongewijzigd)"

# ── BEWIJS ──────────────────────────────────────────────────────────────────────────────────
bewijs_vroeg:
  - wat: "Vestigingsadres Leistraat 19, Breda, en KvK 86555499"
    bron: "motor_feiten wonderen bedrijf.registratie (eigenaar_akkoord=true)"
    peildatum: 2026-08-23
    waar: "bij de claim dat dit een eenmanszaak uit Breda is en niet een platform"
  - wat: "Kerngebied van zeven plaatsen op maximaal 15 minuten rijden, plus vijf op 15-30 minuten"
    bron: "motor_feiten wonderen werkgebied.kern + werkgebied.uitbreiding (eigenaar_akkoord=true)"
    peildatum: 2026-08-23
    waar: "bij de vraag 'kom je ook in mijn plaats?'"
  - wat: "Wat er standaard in het vloertegelwerk zit en wat apart op de offerte staat"
    bron: "motor_feiten wonderen dienst.vloertegelwerk + voorwaarde.offerte (eigenaar_akkoord=true)"
    peildatum: 2026-08-23
    waar: "bij de vraag of het voegwerk erin zit"

# ── MOBIEL ──────────────────────────────────────────────────────────────────────────────────
mobiele_prioriteit:
  eerste_scherm: "Ongewijzigd: eyebrow, 'Ik ben Jaap...', de kop, de alinea, WhatsApp- en belknop. De nieuwe passage valt op 390px onder de vouw, na de cijferstrook."
  scanvolgorde: "Kop van de passage → het korte antwoord → de drie vragen als gestapelde blokken in deze volgorde: plaats, wat zit erin, hoe snel."
  verdwijnt: ["niets — de passage is volledige tekst op elke breedte"]
  verschijnt: ["niets"]
  verandert_van_volgorde: ["de drie vraagblokken gaan van drie kolommen (1024+) naar één kolom, in dezelfde leesorde"]
  cta_verandering: "geen; de zwevende WhatsApp-knop blijft de mobiele actie"
  zwevende_elementen: "components/whatsapp-floating.tsx staat rechtsonder vast. De passage houdt daarom onderaan ruimte vrij (pb-24) en zet geen bewijs of link in de rechteronderhoek."

# ── VORM EN INHOUD ──────────────────────────────────────────────────────────────────────────
contentdichtheid: >
  hoog voor deze homepage, en dat is de ingreep. De doelgroep staat midden in een verbouwing en is
  bang voor scheuren en meerwerk (DESIGN.md, merk.doelgroep); de homepage had tot nu toe geen enkele
  alinea lopende tekst die een vraag afmaakt, alleen labels en kaarten. Drie van de vier concurrenten
  boven ons hebben datzelfde gebrek. Dichtheid is hier het onderscheid.

informatiearchitectuur:
  - sectie: "Antwoord-eerst alinea onder de kop"
    doel: "In vijf regels: wie, waar vandaan, sinds wanneer, wie het werk doet, hoe snel je antwoord hebt. Los leesbaar als je hem uit de pagina knipt."
    vorm: "lopende tekst, één alinea — want dit is het blok dat een antwoordmachine moet kunnen overnemen"
  - sectie: "Kom je ook in mijn plaats?"
    doel: "De eerste afbreekvraag van een lokale zoeker. Drie ringen met reistijd in plaats van een vage regio."
    vorm: "vraag als kop, antwoord als lopende tekst met de plaatsnamen uitgeschreven — geen logo-raster, geen kaartje, want een kaartje is geen antwoord"
  - sectie: "Zit het voegwerk in het tegelwerk, of komt dat er nog bij?"
    doel: "De angst voor meerwerk. Noemt wat erin zit, wat apart staat, en zegt eerlijk dat de rest per klus in de offerte staat."
    vorm: "vraag als kop, antwoord als lopende tekst met twee interne links — geen vinkjeslijst, want een halve vinkjeslijst ziet compleet uit (lering 6aec5cb3)"
  - sectie: "Hoe snel heb ik antwoord en een gespecificeerde prijs?"
    doel: "De 'vind snel een vakman'-intentie die de platforms bedienen, met een termijn in plaats van een belofte."
    vorm: "vraag als kop, antwoord als lopende tekst"

kerncomponenten:
  - "sectie op bg-clay met container-x en py-24/py-32 — het bestaande sectie-idioom van deze site; clay omdat de buren paper (diensten) en primary-900 (cijfers) zijn en de passage daartussen een eigen vlak moet zijn zonder nieuw token"
  - "eyebrow + font-display h2 in het bestaande kopritme — geen nieuwe typeschaalstap"
  - "drie gelijke tekstblokken in een md:grid-cols-3 met een dunne lijn als scheiding (border-primary-900/10), de voeg uit DESIGN.md grote_idee — geen kaarten met schaduw, want dat zou een vierde kaartsoort op deze pagina zijn"

# ── RISICO'S EN LAT ─────────────────────────────────────────────────────────────────────────
ontwerprisicos:
  - "Een vierde kaartsoort toevoegen op een pagina die al diensten-kaarten, project-kaarten en review-kaarten heeft. Tegengif: platte tekstkolommen met een lijn, geen kaart."
  - "De passage leest als SEO-tekst onder de echte pagina. Tegengif: hij staat hoog (direct na de cijferstrook), de koppen zijn echte vragen, en elk antwoord bevat een gegeven dat alleen deze klant heeft."
  - "Tekstmuur op 390px. Tegengif: drie blokken van maximaal vier regels, elk met een eigen vraagkop."
  - "Een halve wel-en-niet-lijst die compleet lijkt. Tegengif: expliciet benoemen dat sloop, puinafvoer en voorrijkosten niet in de standaardlijst staan maar per klus in de gespecificeerde offerte."
  - "Een prijs of garantietermijn introduceren. Tegengif: geen bedrag en geen nieuwe termijn in deze passage; de garantie staat al tweemaal in de hero en de cijferstrook, de prijs leeft op /wat-kost-vloer-tegelen-per-m2."

anti_generic_hier:
  - "'kwaliteit, service en vakmanschap' — vervangen door drie narekenbare gegevens (reistijd, wat er in de post zit, een termijn)"
  - "'al jarenlang uw specialist' — het bedrijf bestaat sinds 2022 en dat staat er zo"
  - "gestileerde luxe-badkamer als sfeerbeeld bij de passage — er komt geen beeld bij; er is geen klantfoto van werk in uitvoering en stock is verboden"
  - "sterren of keurmerken zonder bron — geen enkel nieuw bewijsteken in deze passage"

benchmark:
  - url: "http://blomtegelwerken.nl/ (organisch 1 op 03-10-2026)"
    wat_wint_daar: "Vier reviews met naam direct op de homepage, en een duidelijke eerste regel 'uw tegelzetter in Breda en omgeving'."
    hoe_winnen_wij: "Zij noemen drie plaatsen zonder reistijd, geen garantie, geen ervaring, geen enkel woord over wat er in het werk zit. Wij noemen twaalf plaatsen in drie reistijdringen, het vestigingsadres, en wat er standaard in het tegelwerk zit."
  - url: "https://tegelzetterbreda.net/ (organisch 2)"
    wat_wint_daar: "Niets inhoudelijk; het staat hoog op een naam die de zoekvraag ís."
    hoe_winnen_wij: "Het is een offerteplatform zonder één narekenbaar gegeven en zonder naam van een vakman. Onze passage begint met de persoon, het adres en het jaar."
  - url: "https://www.nickystegelwerken.nl/ (organisch 4, direct boven ons)"
    wat_wint_daar: "Twee uitgewerkte klantverhalen en een duidelijke specialisatie wand- en vloerafwerking."
    hoe_winnen_wij: "Hun ervaringsteller staat op 'Jaren ervaring: 0 +' (onopgevuld sjabloon), er is geen werkgebied met afstand, geen garantie, geen prijs- of postenuitleg. Wij zetten het jaartal, de reistijd en de postenlijst er wel."
  - url: "https://www.werkspot.nl/vloeren-tegels/tegelzetter-vakmannen/breda (organisch 3) en https://trustoo.nl/noord-brabant/breda/tegelzetter/ (organisch 6)"
    wat_wint_daar: "Zij geven wél bedragen (€ 35-60 per uur, € 25-50 per m²) en een indeling van wat de prijs beïnvloedt."
    hoe_winnen_wij: "Wij geven geen bedrag — dat hebben we niet als goedgekeurd feit — maar we geven wat zij per constructie niet kunnen geven: wie er komt, vanaf welk adres, binnen welke reistijd, en wat er in díe ene offerte staat. De bedragvraag krijgt een link naar onze eigen prijspagina, die zes van deze platforms zij-aan-zij legt."

visuele_claims:
  - wat: "Geen. De passage bevat geen grafiek, geen balk, geen meter en geen percentage."
    waarnemingen: "n.v.t."
    bron: "n.v.t."
    vorm: "alleen tekst en getallen met eenheid (minuten rijden, werkdagen), elk uit een goedgekeurd feit"
---

# Visuele brief — homepage, antwoordeenheid "tegelzetter breda"

## De compositie in één alinea

De homepage is nu een beeldcompositie met een spanningsboog die in één keer van *zien* naar *doen*
springt: hero met foto's, cijferstrook, dienstkaarten, proces, projectfoto's, reviews, slot-CTA. Er
zit geen moment *begrijpen* in — geen enkele alinea maakt een vraag af. Deze ingreep zet dat ene
rustmoment er tussen: direct na de donkere cijferstrook een licht clay-vlak met één kop, één
antwoordalinea en drie vragen op een rij, gescheiden door dunne lijnen die als voeg lezen. Van een
afstand is het een rustige, horizontale tekstband tussen twee beeldrijke secties — het enige vlak op
de pagina waar je leest in plaats van kijkt. Dat contrast is de bedoeling: het is de plek waar de
bezoeker die écht twijfelt even kan stoppen, en het is tegelijk het blok dat een antwoordmachine uit
de pagina kan tillen zonder dat het zijn betekenis verliest.

## Wat deze pagina NIET wordt

Geen FAQ-accordeon onderaan de pagina — dat is precies waar zulke tekst normaal belandt en waar hij
niets doet. Geen vierde kaartsoort: deze homepage heeft al dienstkaarten, projectkaarten en
reviewkaarten, en een vierde variant maakt de pagina generiek in plaats van rijker. Geen iconenrij
bij de drie vragen; een schildje naast "garantie" is decoratie die bewijs suggereert. Geen kaartje
van West-Brabant — een bezoeker die wil weten of je in Dongen komt, wil het woord Dongen lezen, niet
een vlek. Geen tweede WhatsApp-knop in deze sectie: de hero en het slotblok dragen de actie, en een
derde identieke pil zou de actiehiërarchie plat slaan. En geen beeld: er is geen klantfoto van werk
in uitvoering (het signature moment uit DESIGN.md wacht nog op Jaaps opbouwfotografie) en stockbeeld
is verboden.

## Openstaande vragen

- **Wat valt er buiten de standaardposten?** De goedgekeurde feiten noemen wat er in het vloertegelwerk
  zit (lijm, voorlijm, egaliseren waar nodig, dilataties, voegwerk) en dat plinten apart staan. Ze
  zeggen níets over sloopwerk, puinafvoer, snijverlies en voorrijkosten — en juist die drie noemen de
  gelezen concurrenten als bron van meerwerk (lering 6aec5cb3, 05-09-2026). De passage schrijft daarom
  niet dat die posten erin of eruit zitten, maar dat ze per klus in de gespecificeerde offerte staan.
  Dit blokkeert de bouw niet; het wordt een vraag aan Jaap zodat een volgende ronde de lijst compleet
  kan maken.
- **Geen beeld van werk in uitvoering.** Blokkeert de bouw niet (deze sectie is bewust tekst), maar het
  signature moment uit DESIGN.md — de doorsnede van de vloeropbouw — kan pas gebouwd worden als die
  foto's bestaan.
- **Geen gepubliceerd m²-tarief.** Bewust, staat al zo op /wat-kost-vloer-tegelen-per-m2. Blokkeert niet.
