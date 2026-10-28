pagina: alle contractpaden (het gaat om twee componenten plus vier terugkerende patronen, niet om één pagina)
klant: wonderen
contract: /Users/bartjaspers/.l3art-bouwer/wonderen-20260903-vw-raakvlak/DESIGN.md
datum: 2026-10-28
door: bouwer-20261028-2305 (TAAK-20260903-VW-RAAKVLAK)
soort: reparatie met ontwerpbesluit — geen nieuwe pagina, geen nieuwe sectie, geen nieuw token

# ── DE VRAAG EN HET ANTWOORD ────────────────────────────────────────────────────────────────
primaire_gebruikersvraag: "Ik sta met mijn telefoon in de verbouwing en wil Jaap nu bereiken. Kan ik dat nummer raken?"

primair_antwoord: "Elk aanraakvlak op de telefoon is minstens 44 bij 44 pixels, het telefoonnummer en het e-mailadres in de voet vooraan."

business_intent: >
  De enige waargenomen conversie op deze site is WhatsApp (motor_conversies, 26 aug 2026) en het
  enige andere directe kanaal is bellen. Een telefoonnummer dat 20 pixels hoog is, is op een
  telefoon geen knop maar een gok. Gemeten op productie 28-10-2026 met de raakvlakmeting van
  designpoort.mjs over de zeventien contractpaden bij 390px: 38 unieke aanraakvlakken onder
  44px, waaronder 06-18249249 (350x20) en wonderentegelwerken@gmail.com (350x20) in de voet en
  de zes dienstlinks (100x17 tot 219x17). Het contract zette `raakvlak_hard` op false met de
  reden "[AANNAME], overgenomen van de andere contracten, niet zelfstandig onderbouwd voor deze
  klant — zet hem op true zodra de raakvlakken op 390px gemeten zijn". Ze zijn nu gemeten.

wat_er_verandert_en_waarom:
  - verandering: "Eén nieuwe grammaticaregel `.raaklink` in globals.css: elk aanraakvlak is minstens 44x44."
    grond: >
      WCAG 2.5.8 (Target Size Minimum, AA) noemt 24px als minimum en 44px als de AAA-maat;
      designpoort.mjs toetst 44 en dat is ook de maat die Apple en Google voorschrijven. Eén
      regel in plaats van een utility per vindplaats, omdat het om vijftien vindplaatsen gaat en
      een maat die op vijftien plekken los wordt ingetypt op de zestiende wordt vergeten.
  - verandering: "In de kruimelbalk draagt de 44px een negatieve marge (`.raaklink-strak`), zodat de rij niet 24px groeit."
    grond: >
      De kruimelbalk staat op elf paginatypes boven de kop. Een rij die daar 24px groeit duwt op
      elf pagina's het eerste scherm omlaag, en dat is een compositiewijziging die deze werkorder
      niet vraagt. Boven en onder de kruimelbalk staat witruimte (pt-8 respectievelijk mt-8/mt-12)
      en geen tweede aanraakvlak, dus de 44px kan daar in die witruimte lopen zonder dat twee
      raakvlakken elkaar overlappen. Overlappende raakvlakken zouden de eis juist tegenwerken.
  - verandering: "In de voetlijsten verdwijnt `space-y-3` en wordt de 44px een echte rij."
    grond: >
      Hier mag de 44px NIET in de witruimte lopen: de dienstlinks staan 29px uit elkaar, dus twee
      hitvlakken van 44px zouden elkaar 15px overlappen en de bezoeker zou juist vaker de
      verkeerde dienst openen. De regelafstand wordt daarom de raakhoogte zelf: zes rijen van
      44px, zonder tussenruimte, pitch 44. Kosten: de voet wordt op 390px ongeveer 190px langer.
      Grond in de these: rijen van gelijke hoogte zonder tussenruimte zijn precies het beeld dat
      `compositie` vraagt — een raster dat sluit, geen reeks losse regeltjes.
  - verandering: "De FAQ-samenvatting (`<summary>`) krijgt `min-h-11`."
    grond: >
      De vraagregel was 32px hoog terwijl de `py-6` op de `<details>` eromheen zat en dus niet
      meeklikte. Het hitvlak groeit naar 44px; de vraag blijft op dezelfde plek staan
      (items-start), het antwoord zakt 12px.
  - verandering: "Het menuknopje gaat van 40x40 naar 44x44, met `-mr-2.5` in plaats van `-mr-2`."
    grond: >
      40x40 is het laatste raakvlak in de kop. De negatieve marge wordt 2px groter zodat het icoon
      optisch op precies dezelfde plek blijft staan als nu (de doos groeit 4px, het icoon blijft
      gecentreerd, dus zonder correctie zou het 2px naar rechts schuiven).
  - verandering: "`raakvlak_hard` gaat in het contract van false naar true."
    grond: >
      De [AANNAME] in DESIGN.md hing expliciet op deze meting. Met nul overgebleven gevallen is
      `true` een vastgesteld feit en geen ambitie, en de poort blokkeert vanaf nu op een terugval.
      Er komt GEEN uitzonderingslijst: designpoort.mjs kent er voor raakvlakken geen, en een norm
      die zacht blijft staan omdat één geval niet past is precies wat deze werkorder verbiedt.

beslispad: >
  Bezoeker leest op de telefoon een antwoordpagina -> wil bellen of appen -> raakt het nummer in
  de voet of de WhatsApp-knop. Breekt die laatste tik, dan is alle tekst erboven verspild.

# ── EERSTE SCHERM ───────────────────────────────────────────────────────────────────────────
eerste_scherm: >
  Ongewijzigd op elke pagina. De kop, de merknaam en de twee CTA's blijven waar ze staan: het
  merklabel in de kop krijgt alleen een minimumhoogte binnen de bestaande h-20 rij, en het
  menuknopje blijft optisch op zijn plek. De kruimelbalk groeit met opzet niet. De voet is de
  enige plek waar de compositie werkelijk verandert, en die staat buiten het eerste scherm.

primaire_cta: ongewijzigd (WhatsApp Jaap) — deze ingreep maakt de secundaire route (bellen, mailen) pas werkelijk raakbaar
secundaire_cta: ongewijzigd (bellen)

bewijs_vroeg: >
  Ongewijzigd. Er gaat geen bewijsblok op de schop; de review-link onder het citaatblok op de
  homepage (318x42, 2px tekort) groeit 2px naar 44.

mobiele_prioriteit: >
  Dit is een mobiele werkorder van begin tot eind: de poort meet alleen onder 500px en de
  bezoeker die deze klant belt doet dat met een telefoon. Waar de twee eisen botsen — compacte
  voet versus raakbare voet — wint de raakbare voet.

contentdichtheid: ongewijzigd — er komt geen woord bij en er gaat geen woord af.

informatiearchitectuur: >
  Ongewijzigd. Geen link verhuist, geen link verdwijnt, geen link komt erbij.

kerncomponenten:
  - ".raaklink — het minimum raakvlak van 44x44. WANNEER: op elke a/button die niet middenin een zin staat en niet al uit zichzelf 44px haalt. NIET op links in een lopende zin: die mogen per WCAG 2.5.8 de regelhoogte volgen en zouden de zin uit elkaar trekken."
  - ".raaklink-strak — dezelfde 44px, maar zonder de rij te laten groeien. WANNEER: alleen waar boven en onder het raakvlak witruimte staat en geen tweede raakvlak, zoals in de kruimelbalk. NOOIT in een lijst van raakvlakken onder elkaar: daar zouden de hitvlakken elkaar overlappen."

ontwerprisicos:
  - risico: "De voet wordt op 390px ongeveer 190px langer."
    weging: >
      Geaccepteerd. De voet is de laatste sectie van de pagina; de kosten zijn scrollhoogte op
      een plek waar de bezoeker al gescrold heeft, de baat is een raakbaar telefoonnummer op het
      enige kanaal dat bij deze klant conversies oplevert.
  - risico: "In de voetlijsten verdwijnt de tussenruimte; rijen raken elkaar."
    weging: >
      Geaccepteerd en op these. Gelijke, sluitende rijen zijn het beeld dat dit contract vraagt;
      losse regeltjes met lucht ertussen zijn dat niet. Er komt geen scheidslijn tussen de rijen
      bij: dat zou een nieuw visueel element zijn en dus een ontwerpbesluit dat deze werkorder
      niet vraagt.
  - risico: "De 44px van een kruimellink loopt 12px in de witruimte boven en onder."
    weging: >
      Geaccepteerd, met één voorbehoud: als een kruimelbalk op 390px over twee regels valt,
      overlappen de hitvlakken van regel 1 de tekst van regel 2. Op de gemeten paden wrapt geen
      kruimelbalk; valt dat later om, dan is `.raaklink` zonder `-strak` daar de juiste keus.
  - risico: "Elk FAQ-item wordt 12px hoger, ook dicht."
    weging: >
      Geaccepteerd. Een vraagregel die niet opengaat als je hem raakt is een duurdere fout dan
      een accordeon die 12px per item langer is.

anti_generic_hier: >
  De verleiding is om de voetlinks als pillen of knoppen vorm te geven, want dan haal je 44px
  "gratis". Dat is precies de kaart-om-elke-alinea die `vorm.kaarten` en de anti-sloplijst
  verbieden. De 44px komt hier uitsluitend uit maat en ruimte, niet uit een nieuw vlak, een
  nieuwe rand of een nieuwe kleur. Er komt geen token bij.

benchmark: >
  Nul raakvlakken onder 44px op de zeventien contractpaden bij 390px, gemeten met de
  raakvlakmeting van motor/scripts/designpoort.mjs, en `raakvlak_hard: true` in het contract
  zodat een terugval vanaf nu blokkeert.

visuele_claims: >
  Geen. Er verandert geen cijfer, geen grafiek en geen verdeling.
