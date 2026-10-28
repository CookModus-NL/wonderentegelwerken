pagina: /diensten/badkamer-renovatie en / (het gaat om twee componenten: de dienst-hero en de reviewkaart — niet om één pagina)
klant: wonderen
contract: /Users/bartjaspers/.l3art-bouwer/wonderen-20260903-vw-contractafwijking/DESIGN.md
datum: 2026-10-28
door: bouwer-20261028-2205 (TAAK-20260903-VW-CONTRACTAFWIJKING)
soort: contractreparatie — geen nieuwe pagina, geen nieuwe sectie, geen nieuw token

# ── DE VRAAG EN HET ANTWOORD ────────────────────────────────────────────────────────────────
primaire_gebruikersvraag: "Is dit dezelfde man op elke pagina, of kijk ik naar een verzameling losse pagina's?"

primair_antwoord: "Eén typeschaal en één palet over de hele site. Drie waarden stonden erbuiten en gaan eruit."

business_intent: >
  Deze klant verkoopt uitlijning. `DESIGN.md > visuele_these`: "uitlijning is bij tegelwerk geen
  smaak maar vakmanschap — een vloer die uit lood ligt is een mislukte klus, ook als de tegel
  mooi is. De site moet dus zelf in lood liggen." Een lettergrootte die bij één schermbreedte
  tussen twee traptreden hangt en een vlakkleur die net naast een token ligt zijn precies dat:
  de site die niet in lood ligt. Het zijn geen smaakkwesties maar meetbare afwijkingen van het
  eigen contract, en de poort meldt ze hard.

wat_er_verandert_en_waarom:
  - verandering: "De h1 van de dienst-detailpagina gaat van clamp(2.25rem,5vw,4rem) naar vaste traptreden: 36 / 48 / 60px (text-4xl sm:text-5xl xl:text-6xl)."
    grond: >
      Gemeten op productie 28-10-2026 (designpoort.mjs, 51 renderingen): deze h1 is de enige
      lettergrootte buiten de schaal, en alleen op 1024px — daar levert 5vw exact 51,2px, en
      51,2 is geen traptrede. Een clamp() loopt per definitie door alle waarden tussen zijn
      grenzen; alleen het vloeiende bereik 60-76 uit `contract.fontschaal_vloeiend` mag dat.
      Deze clamp begint op 36 en kan die vrijstelling dus niet gebruiken.
      Waarom niet simpelweg de display-clamp clamp(3.75rem,6vw,4.75rem) van de homepage? Omdat
      hij hier niet past, en dat is gemeten en niet beredeneerd: de langste titel in
      content/services.ts is "Buitentegelwerk" en de h1-kolom is 350px op 390, 432px op 1024 en
      560px op 1440. Bij 60px is dat woord 477px breed — dat loopt op 390 én op 1024 over de
      rand, en `contract.overloop_max_px` is 0. De gemeten plafonds zijn 36px op 390, 48px op
      1024 en 64px op 1440. 36 / 48 / 60 past overal, staat volledig in de schaal (36 en 48 als
      traptrede, 60 als ondergrens van het vloeiende display-bereik) en houdt het desktopformaat
      op 4px van wat er nu staat.
  - verandering: "De reviewkaart op de homepage verliest zijn vulling bg-primary-800/50 (plus de daarmee zinloos geworden backdrop-blur) en wordt gescheiden door de haarlijn die er al om staat."
    grond: >
      Gemeten: #201e1a, 14x, op zeven van de acht reviewkaarten bij 1440 en 390. De bron is
      `bg-primary-800/50` — primary-800 (#1F1D1A) staat in globals.css maar niet in
      `contract.vlakken`, en half doorzichtig meet hij als #201e1a. De dichtstbijzijnde
      contractwaarde is #14130f (ink), en dat is exact de grond van de sectie eronder — de
      vulling weglaten geeft die waarde dus letterlijk. Dat is geen noodgreep maar de regel:
      `vorm.lijnen` zegt "Scheiding ontstaat met een haarlijn van 1px in de rustige grijstint,
      nooit met een schaduw", en die haarlijn (border-primary-700) staat er al. Dezelfde vulling
      zit op twee andere plekken in dezelfde sectie — de review-pil en het leeg-blok — en gaat
      daar om dezelfde reden weg; het leeg-blok rendert nu niet (er zijn acht reviews) maar zou
      de afwijking terugbrengen op de dag dat de lijst leeg is.
  - verandering: "accent-500 (#B86220) verdwijnt uit elke TEKSTrol en wordt accent-600 (#9a4f18)."
    grond: >
      #9a4f18 is het `signaal`-token en staat in `contract.tekstkleuren`; #b86220 staat daar
      niet en is er de dichtstbijzijnde buur van. De 18 gemeten gevallen op productie
      (`text-accent-500/30` op de stapcijfers van /contact en /over-ons) zijn op deze tak al weg
      door het ontwerpbesluit van vandaag over het decoratieve cijfer. Wat overblijft zijn twaalf
      plekken waar accent-500 nog in een kleurrol (`text-*`/`fill-*`) staat en die de poort
      vandaag niet ziet omdat ze geen tekstknoop zijn of niet renderen: het aanhalingsteken op de
      projectdetailpagina (rendert niet, want geen project in content/projects.ts heeft een
      quote), negen iconen (het hoekicoon in de opbouw-sectie, de vijf sterren in de trust-strip,
      de plaatspin op /werkgebied en /contact, de vier projectmeta-iconen, het vinkje op de
      dienstpagina) en de cijfers op /404 en de foutpagina (geen contractpaden). Ze gaan mee
      omdat het dezelfde afwijking is, omdat ze hem terugbrengen zodra er een quote of een
      contractpad bij komt, en omdat accent-600 in diezelfde trust-strip al de icoonkleur is
      (de ShieldCheck ernaast staat er al in) — accent-500 was daar de uitzondering.
      NIET gewijzigd: accent-500 als VLAK (de CTA-verloopblokken, de knoppen, de tegelstippen).
      `contract.vlakken` noemt geen enkele accentkleur, terwijl `vorm.signaalvlak` het
      accent-verloop van de CTA-blokken met zoveel woorden als ontwerpelement beschrijft; die
      twee met elkaar in overeenstemming brengen is een ontwerpbesluit en niet van de bouwer
      (wet art. 3.5, slotregel van bouwer.md §3c).
  - verandering: "Vier regels lopende tekst op /tegels-zelf-kopen-of-via-de-tegelzetter gaan van primary-700 (#2F2D29) naar primary-600 (#4b4842, ink-mute)."
    grond: >
      #2f2d29 was in maart van deze werkorder een van de vijf oorspronkelijke afwijkers (74x) en
      is sitebreed weggehaald; op deze pagina stonden nog vier resten. De poort ziet ze niet
      omdat dit pad niet in `contract.paden` staat, maar de pagina staat wél in de sitemap
      (prioriteit 0,8) en rendert dus voor echte bezoekers. Lering 28ab3c76 (actief, hoog): "een
      poort die een vaste padenlijst rendert is een STEEKPROEF, geen populatie — wie zijn
      bevindingenlijst afwerkt repareert de steekproef." Waarom ink-mute en niet ink: de rol is
      lopende tekst in een definitielijst, en twee regels verderop staat op dezelfde pagina
      diezelfde rol al in primary-600. (Op pure kleurafstand ligt #14130f één stap dichterbij —
      27 tegen 28 — maar de rol beslist hier, niet de afstand.)

beslispad: >
  Ongewijzigd. Bezoeker leest een dienstpagina -> kop, belofte, bullets, WhatsApp. Bezoeker leest
  de reviews op de homepage -> acht kaarten -> Google-review-link. Deze ingreep raakt geen stap in
  dat pad; hij haalt drie waarden weg die er niet horen.

# ── EERSTE SCHERM ───────────────────────────────────────────────────────────────────────────
eerste_scherm: >
  Twee zichtbare verschillen, beide in het eerste scherm van hun pagina.
  (1) /diensten/<slug>: de h1 is op 1440 vier pixels kleiner (64 -> 60) en op 1024 drie pixels
  kleiner (51,2 -> 48). Op 390 verandert er niets: daar stond de clamp al op zijn minimum 36px.
  (2) /: de reviewkaarten verliezen hun lichtere vulling en staan als omlijnde vlakken op de
  donkere sectiegrond. De kop, de sterren en de citaten blijven staan waar ze staan.

primaire_cta: ongewijzigd (WhatsApp Jaap op de dienstpagina; de Google-review-link in de reviewsectie)
secundaire_cta: ongewijzigd (bellen; de 5,0-pil naar het Google-profiel)

bewijs_vroeg: >
  De reviewkaarten ZIJN het bewijs van deze sectie. Ze worden niet zwakker: de haarlijn en de
  radius 24px blijven, en de citaattekst staat onveranderd in op-donker op #14130f (18,2:1).
  Wat weggaat is een vulling die alleen maar een vierde donkergrijs toevoegde.

mobiele_prioriteit: >
  Op 390 staat de reviewsectie in één kolom en zijn de kaarten het hoogst; daar was de afwijking
  ook het grootst (7 van de 14 metingen). De haarlijn werkt daar identiek — hij hangt aan de
  kaart, niet aan de kolombreedte. De dienst-h1 blijft op 390 exact 36px, dus de mobiele hero
  verschuift geen pixel. Dat is bewust: 48px laat "Vloertegelwerk" (353px) al over de 350px
  kolom lopen.

contentdichtheid: ongewijzigd — er komt geen woord bij en er gaat geen woord af.

informatiearchitectuur: >
  Ongewijzigd. Geen sectie verplaatst, geen blok erbij, geen blok eraf.

kerncomponenten:
  - "dienst-hero h1 — display in vaste traptreden 36/48/60. WANNEER: op elke /diensten/<slug>. De vloeiende display-clamp 60-76 blijft gelden waar de kop kort is (homepage, /tegelzetter/<stad>, de antwoordpagina's)."
  - "reviewkaart — figure met radius 24px, haarlijn 1px, geen vulling, op de sectiegrond #14130f. WANNEER: alleen waar de inhoud werkelijk los staat; een review is dat (vorm.kaarten)."

ontwerprisicos:
  - risico: "De reviewkaarten komen zonder vulling minder naar voren op de donkere sectie."
    weging: >
      Geaccepteerd, en het is de regel van dit contract en niet een compromis: de haarlijn IS het
      scheidingsmiddel (`vorm.lijnen`), en de haarlijn is bij deze klant "de VOEG van het
      ontwerp". Een kaart die zijn buur met een vulling van 2% helderheid wegduwt, voegt een
      vierde donkergrijs toe aan een palet dat er drie heeft.
  - risico: "De dienst-h1 krijgt drie vaste traptreden in plaats van een vloeiende schaal; tussen 640 en 1279px staat hij op 48px."
    weging: >
      Geaccepteerd. De vloeiende variant is hier gemeten onmogelijk: elke clamp die op 1440 boven
      de 48px uitkomt loopt onderweg door waarden die niet in de schaal staan, tenzij hij
      volledig binnen 60-76 blijft — en dat kan niet, want 60px laat de langste titel op 390 en
      1024 over de rand lopen. Vaste traptreden zijn precies wat `contract.fontschaal` is.
  - risico: "Twaalf kleine accenten (iconen, sterren, het aanhalingsteken) verschuiven van #b86220 naar #9a4f18 — iets donkerder oranje."
    weging: >
      Geaccepteerd en per saldo winst: #9a4f18 is het signaaltoken dat de hele site al gebruikt
      (elke .eyebrow staat erin), en op #f4efe6 haalt het 5,5:1 waar #b86220 op 3,9:1 blijft.

anti_generic_hier: >
  Niets wordt toegevoegd. De ingreep haalt juist het generieke eruit: een lichter doosje op een
  donkere sectie is het sjabloon-reviewblok dat op elke vakmanssite staat, en een vloeiende
  typeschaal die bij elke breedte een ander getal oplevert is de SaaS-manoeuvre die dit contract
  bij IBM expliciet níet overneemt ("precisie in de chroom maakt de inhoud geloofwaardig").

gemeten_na: >
  Zonder build en zonder dev-server (harde grens: 8 GB machine) kan designpoort.mjs niet op de
  kandidaat draaien. In plaats daarvan is de wijziging in de LIVE pagina's aangebracht en daarna
  opnieuw gemeten met de normalisatie van designpoort.mjs — 22 paden (de 17 contractpaden plus de
  vijf overige dienstpagina's) x 3 viewports, 28-10-2026. Uitkomst: 0 vlakken buiten het palet
  (was #201e1a 14x), 0 harde tekstkleuren buiten het palet (was #b96321 18x; de drie
  bijna-dubbels van halfdoorzichtig op-donker blijven, zacht en ongewijzigd), 0 lettergroottes
  buiten de schaal (was 51,2px), en 0px overloop op alle 66 renderingen. De h1 meet 36px op 390,
  48px op 1024 en 60px op 1440, op alle zes dienstpagina's. De echte poort moet na de deploy
  alsnog draaien; dit bewijst de uitkomst van de wijziging, niet de build.

benchmark: >
  node motor/scripts/designpoort.mjs meldt op de contractpaden geen bevinding van het soort
  `typeschaal` en geen bevinding van het soort `palet`. Nulmeting op productie 28-10-2026
  (origin/main 1ffd0b4 c.s.): typeschaal 1 (51,2px), palet 2 (#201e1a 14x vlak, #b96321 18x
  tekst). De overige vier harde bevindingen van die meting (contrast 4x, afgekapte tabel op
  /badkamer-waterdicht-maken@390, 15 renders onder 1 inhoudsbeeld) horen bij andere werkorders
  en blijven in deze ronde expliciet staan.

visuele_claims: >
  Geen. Er wordt geen grafiek, geen verdeling en geen cijferclaim toegevoegd of gewijzigd.
