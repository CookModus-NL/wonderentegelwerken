/**
 * HET TITELSJABLOON VAN DEZE SITE — één regel voor alle pagina's.
 *
 * BESLUIT 06-11-2026 (bouwer-20261106-2005, TAAK-20261103-WONDEREN-TITELLENGTE-SJABLOON):
 *
 *   Het merkachtervoegsel ' | Van Wonderen Tegelwerken' wordt alleen gezet als de
 *   gerenderde title daarmee ONDER de 60 tekens blijft. Past hij niet, dan staat de
 *   paginatitel alleen.
 *
 * Dat is één sjabloonregel voor de hele site, niet een uitzondering per pagina. Elke
 * paginatitel loopt door `paginaTitel()`; welke vorm eruit komt is een rekensom, geen keuze
 * van de pagina-auteur.
 *
 * WAT ER MIS WAS, GEMETEN. Het achtervoegsel is 27 tekens lang en stond tot vandaag
 * onvoorwaardelijk achter elke paginatitel (`template: '%s | Van Wonderen Tegelwerken'` in
 * app/layout.tsx). Gemeten op de lokale productiebuild van 03-11-2026 (34 URL's uit de eigen
 * sitemap, commit 88848b5) stonden 17 van de 34 gerenderde titles boven 60 tekens, met als
 * langste /tegelvloer-belopen-en-vloerverwarming-aanzetten op 99. Google kapt rond 60 af, dus
 * op die 17 pagina's viel precies dit achtervoegsel uit het zoekresultaat — en op de langste
 * ook nog een stuk van de paginatitel zelf. Het achtervoegsel deed daar dus geen werk; het
 * kostte alleen het einde van de titel.
 *
 * WAAROM HET MERK NIET KORTER IS GEMAAKT, maar WEGGELATEN. De korte vorm ' | Van Wonderen'
 * (15 tekens) is afgewogen en verworpen op de zoekvragen zelf. De stam "tegelwerk" staat in de
 * zichtbare zoekvragen van vier URL's ("tegelwerk genderen", "tegelwerk veen",
 * "tegelwerk andel"; motor_gsc dimensies=query,page, 22-08 t/m 03-11-2026) en wordt op
 * /over-ons, /werkgebied, /contact en /algemene-voorwaarden door NIETS ANDERS in de title
 * gedragen dan door het woord "Tegelwerken" in dit achtervoegsel. "Van Wonderen" zonder
 * "Tegelwerken" haalt die stam dus van vier pagina's weg, en dat is precies wat deze ingreep
 * niet mag kosten. Daarom: of het hele merk, of geen merk.
 *
 * WAAROM DE PAGINATITELS ZELF BLIJVEN STAAN. Inkorten van de paginatitel is afgewogen per URL
 * tegen de zichtbare zoekvragen van die URL (zelfde bron, zelfde periode) en op één
 * uitzondering na verworpen: elke kortere variant van de lange titels haalt een stam weg die nu
 * vertoningen draagt. Voor /tegelen-over-bestaande-tegels was dat 03-11-2026 al vastgesteld in
 * contract aa2d384c-66bc-48f6-8cef-4597e5bb716f (de huidige title dekt 12 vertoningen volledig,
 * de beste vervanger 6). De uitzondering is /contact: zie hieronder.
 *
 * WAT ER WEL IS INGEKORT: /contact, van 43 naar 30 tekens, zodat het merk daar juist WEL past
 * (30 + 27 = 57). Grond: /contact is de enige URL met zichtbare zoekvragen die de stam
 * "tegelwerk" nodig heeft ("tegelwerk veen" 4 vertoningen, "tegelwerk andel" 2, positie 75-80)
 * én een title die niet paste. Het geschrapte woord ("vrijblijvende") komt in geen enkele
 * zichtbare zoekvraag van die URL voor; "WhatsApp" blijft staan, want dat is het enige
 * waargenomen conversiekanaal van deze site (motor_conversies, 26-08-2026).
 *
 * WAT DIT NIET OPLOST. /tegelvloer-belopen-en-vloerverwarming-aanzetten blijft op 72 tekens
 * staan: zijn paginatitel is alleen korter te maken door "wanneer", "mag" of "vloerverwarming"
 * te laten vallen, en alle drie dragen zichtbare vertoningen op die URL. Eén title boven 60 die
 * geen zoekterm kost is beter dan een title van 55 die er wel een kost.
 *
 * DRIE PAGINA'S WACHTEN, MET EEN DATUM. Op /badkamer-betegelen-tot-plafond,
 * /tegelvloer-belopen-en-vloerverwarming-aanzetten en /tegelen-over-bestaande-tegels loopt een
 * CTR-meting waarin de meta-description de ENIGE variabele is. Daar de title tegelijk wijzigen
 * geeft die meting een tweede oorzaak en maakt het effect van geen van beide toerekenbaar — dus
 * houden die drie hun oude, te lange title tot hun meetmoment. Dat is geen pagina die van het
 * sjabloon afwijkt maar een pagina die er nog niet in mag: de regel is al geschreven, het
 * invoermoment staat vast, en `titelVastVoorMeting()` dwingt een datum en een contractnummer af.
 * Zie TITELS_VAST_VOOR_METING hieronder; na die datum haalt een volgende run de aanroep weg en
 * staan er nog 1 van de 34 boven de 60.
 */

/** Het merkachtervoegsel, inclusief scheidingsteken. 27 tekens. */
export const MERK_ACHTERVOEGSEL = ' | Van Wonderen Tegelwerken'

/**
 * De afkapgrens van Google, in tekens. Niet exact (Google rekent in pixels), daarom een
 * conservatieve ronde grens — dezelfde die de compliancepoort en de meetlus gebruiken.
 */
export const TITEL_MAX = 60

/**
 * Bouwt de `<title>` van een pagina volgens het sjabloon hierboven.
 *
 * Geeft altijd een `absolute`-title terug, zodat het `template` in app/layout.tsx er niet
 * nóg een keer een achtervoegsel achter zet.
 */
export function paginaTitel(titel: string): { absolute: string } {
  const metMerk = titel + MERK_ACHTERVOEGSEL
  return { absolute: metMerk.length <= TITEL_MAX ? metMerk : titel }
}

/**
 * De drie pagina's die hun OUDE title houden tot hun klikmeting is beoordeeld. Overgenomen uit
 * de state van TAAK-20261103-WONDEREN-TITELLENGTE-SJABLOON; de data komen uit de contracten
 * zelf (9bee4aac: meetmoment_28 = 2026-11-13; aa2d384c: t+28 = 2026-11-30).
 *
 * DIT IS EEN WACHTLIJST, GEEN UITZONDERINGENLIJST. Elke regel heeft een datum en een
 * contractnummer; is die datum verstreken en het oordeel geveld, dan vervalt de regel en gaat de
 * pagina gewoon door `paginaTitel()`. Een regel zonder datum hoort hier niet te staan.
 */
export const TITELS_VAST_VOOR_METING = [
  { pad: '/badkamer-betegelen-tot-plafond', tot: '2026-11-13', contract: '9bee4aac' },
  { pad: '/tegelvloer-belopen-en-vloerverwarming-aanzetten', tot: '2026-11-13', contract: '9bee4aac' },
  { pad: '/tegelen-over-bestaande-tegels', tot: '2026-11-30', contract: 'aa2d384c' },
] as const

/**
 * Houdt de title letterlijk zoals hij was: paginatitel + het volle merkachtervoegsel, ook als hij
 * daarmee over de 60 gaat. Alleen voor de paden in TITELS_VAST_VOOR_METING, en de aanroep draagt
 * de reden mee zodat niemand hem zonder grond kan kopiëren.
 */
export function titelVastVoorMeting(
  titel: string,
  _reden: `contract ${string}, tot ${string}`
): { absolute: string } {
  return { absolute: titel + MERK_ACHTERVOEGSEL }
}
