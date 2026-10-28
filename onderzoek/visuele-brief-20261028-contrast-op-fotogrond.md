pagina: /projecten (plus /, /projecten/<slug>, /tegelzetter, /contact, /over-ons — het gaat om twee componenten, niet om één pagina)
klant: wonderen
contract: /Users/bartjaspers/.l3art-bouwer/wonderen-20260903-vw-contrast-beeld/DESIGN.md
datum: 2026-10-28
door: bouwer-20261028-1205 (TAAK-20260903-VW-CONTRAST-BEELD)
soort: reparatie met ontwerpbesluit — geen nieuwe pagina, geen nieuwe sectie

# ── DE VRAAG EN HET ANTWOORD ────────────────────────────────────────────────────────────────
primaire_gebruikersvraag: "Waar en wanneer heeft deze man dit gedaan — en kan ik dat lezen?"

primair_antwoord: "Elke projectfoto draagt plaats en datum. Dat label is het enige stukje bewijs op de kaart dat verifieerbaar is, en het moet dus leesbaar zijn op elke foto die er ooit nog achter komt te liggen."

business_intent: >
  Een metalabel dat niet leest is bewijs dat niet aankomt. Het label plaats-en-datum is bij deze
  klant geen opsmuk: DESIGN.md noemt "eigen projectfoto's met plaats en datum" expliciet een
  category code die je niet mag weghalen zonder vertrouwen te verliezen. Gemeten op productie
  28-10-2026 haalde dat label 1,19:1 tot 4,29:1 op dertien van de monsters — op de homepage, op
  /projecten, op de projectdetailpagina en op /tegelzetter. Dat is geen randgeval maar het
  dragende label van vier paginatypes.

wat_er_verandert_en_waarom:
  - verandering: "Het metalabel op een foto gaat van accent-oranje naar op-donker; het accent keert terug als de haarlijn ervoor."
    grond: >
      Een kleurvervanging lost dit niet op: de achtergrond is geen kleur maar een opname. #9a4f18
      zou op een gemeten fotogrond van #716456 circa 1,6:1 geven — slechter dan nu. Op-donker
      (#fbfaf7) staat al in `contract.tekstkleuren` en vraagt geen palet-uitbreiding. Het accent
      verdwijnt niet maar verhuist naar de rol die dit contract er toch al voor heeft: de voeg.
  - verandering: "De leesgrond wordt door het labelBLOK gemaakt in plaats van door een scrim op de foto."
    grond: >
      De oude scrim was onderaan sterk genoeg voor de witte kop (7,29:1) en te zwak voor het label
      erboven. Dat is een constructiefout, niet een instelling: zodra er een regel tekst bij komt
      schuift het bovenste label buiten de scrim. Een voet die aan het blok hangt kan per
      constructie niet te kort zijn.
  - verandering: "Het stapcijfer 01/02/03 verlaat de display-rol en wordt een microlabel."
    grond: >
      1,43:1 bij 72px, eis 3. Het cijfer draagt de volgorde en is dus tekst. Bovendien stonden er
      drie serif-uitspraken in één scherm terwijl `typography.display.rol` er precies één toestaat,
      en dan nog op een ordinaal — niets naretelbaars.
  - verandering: "Op het signaalvlak staat alle tekst in volle op-donker."
    grond: >
      Op het accent-verloop bestaat geen gedempte tekstkleur die 4,5:1 haalt (op-donker/70 = 3,55:1,
      op-donker-mute = 3,30:1, op-donker/90 = 4,82:1 en dus te krap).

beslispad: >
  Bezoeker scrolt langs projectbeeld -> "is dit echt werk of een stockfoto?" -> leest plaats en
  datum op het beeld -> klikt door naar het project. Breekt het label, dan breekt de eerste stap.

# ── EERSTE SCHERM ───────────────────────────────────────────────────────────────────────────
eerste_scherm: >
  Ongewijzigd in inhoud. Wel verandert de homepage-bento zichtbaar: het label "Badkamer" boven
  "Recent in Breda" wordt wit met een oranje voeg ervoor, op een voet die tot boven dat label
  reikt. De foto zelf blijft onbehandeld — dat is de eis uit `beeld.behandeling`.

primaire_cta: ongewijzigd (WhatsApp Jaap)
secundaire_cta: ongewijzigd (bellen)

bewijs_vroeg: >
  De projectfoto's mét plaats en datum zijn hier het vroege bewijs. Deze ingreep bestaat volledig
  om dat bewijs leesbaar te houden. De voet raakt alleen het labelblok en nooit het bovenste deel
  van de opname, zodat de opbouw op de foto zichtbaar blijft.

mobiele_prioriteit: >
  Op 390px zijn de kaarten smaller en de tekstblokken daardoor HOGER (meer regelomslag). Precies
  daar faalde de oude scrim het hardst en precies daar groeit de blok-gebonden voet vanzelf mee.
  Geen aparte mobiele regel nodig — dat is het punt van de constructie.

contentdichtheid: ongewijzigd — er komt geen woord bij en er gaat geen woord af.

informatiearchitectuur: >
  Ongewijzigd. Dit is een vormingreep op twee bestaande componenten, geen herordening.

kerncomponenten:
  - ".beeldlabel — het metalabel op een foto: microregister, op-donker, accent als haarlijn ervoor. WANNEER: alleen als het label op een foto of verloop ligt. Op papier blijft .eyebrow gelden."
  - ".beeldvoet — de leesgrond die bij het labelblok hoort. WANNEER: op elk blok dat over een foto ligt en tekst draagt."

ontwerprisicos:
  - risico: "De voet maakt de onderkant van elke projectfoto donkerder dan vandaag."
    weging: >
      Geaccepteerd, en per saldo winst: de oude scrim lag over het HELE beeld (inset-0, 30-40% op
      halve hoogte) en sluierde ook de bovenkant. De nieuwe voet raakt alleen het labelblok.
  - risico: "Minder kleur op de kaarten nu het oranje label wit wordt."
    weging: >
      Geaccepteerd. Het accent blijft aanwezig als voeg, en de voeg is in dit contract een
      dragender merkteken dan een gekleurd labeltje.
  - risico: "Het stapcijfer was het visuele anker van twee secties."
    weging: >
      Geaccepteerd. Het anker verschuift naar de serif-kop van elke kaart, en de sectie zakt
      daarmee in het register van technische documentatie — het register dat dit contract bij
      Wise leent.

anti_generic_hier: >
  Het verworpen alternatief (een eigen achtergrondvlakje achter het label) is precies de
  generieke uitkomst die `vorm.kaarten` en de anti-sloplijst verbieden: een doosje om tekst,
  zwevend over bewijs. Het grote vervaagde cijfer 01/02/03 is eveneens een sjabloonfiguur; het
  verdwijnt hier niet om de contrasteis maar omdat het geen uitspraak is.

benchmark: >
  Nul fouten op de contractpaden in motor/scripts/contrastpixels.mjs, gemeten op de werkelijk
  gerenderde pixels en niet op een afgeleide achtergrondkleur.

visuele_claims: >
  Geen. Er wordt geen grafiek, geen verdeling en geen cijferclaim toegevoegd of gewijzigd. Het
  stapcijfer nummert een stap en suggereert geen meting.
