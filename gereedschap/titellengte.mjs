#!/usr/bin/env node
/**
 * TITELLENGTE — meet de gerenderde <title> van elke URL in de sitemap, ZONDER build.
 *
 * WAAROM DIT BESTAAT. De lus die hier hoort — `next build && next start`, dan per <loc> uit
 * /sitemap.xml de lengte van <title> uit de gerenderde HTML — kan op de werkmachine van de
 * bouwer niet draaien (8 GB; een build naast de rest is verboden). Dit script doet dezelfde
 * telling op de BRON: het leest de titelargumenten uit app/**\/page.tsx, vult de dynamische
 * routes met de echte content, en past dezelfde regel toe als lib/titel.ts.
 *
 * HET IS GEEN VERVANGING VAN DE RENDERMETING, het is een voorspelling ervan. De voorspelling is
 * geijkt: op de stand van 03-11-2026 (commit 88848b5, vóór de ingreep) gaf dit script voor de
 * vijf URL's die de werkorder bij naam noemt exact dezelfde lengtes als de productiebuild —
 * /tegelvloer-belopen-en-vloerverwarming-aanzetten 99, /tegelzetter 86,
 * /tegels-zelf-kopen-of-via-de-tegelzetter 85, /losse-tegels-en-scheurende-voegen 84,
 * /tegelen-over-bestaande-tegels 77. Wie wél kan bouwen hoort de echte lus te draaien.
 *
 * Gebruik:  node gereedschap/titellengte.mjs [--grens 60]
 * Exit 0 = hoogstens `--max` titles boven de grens (standaard 3), exit 1 = meer, exit 2 = het
 * script kon een title niet vaststellen (dan is de meting ONBESLIST, nooit "schoon").
 */

import fs from 'node:fs'
import path from 'node:path'

const WORTEL = path.resolve(import.meta.dirname, '..')
const arg = (naam, standaard) => {
  const i = process.argv.indexOf(naam)
  return i === -1 ? standaard : Number(process.argv[i + 1])
}
const GRENS = arg('--grens', 60)
const MAX_BOVEN = arg('--max', 3)

const lees = (p) => fs.readFileSync(path.join(WORTEL, p), 'utf8')

/** Het sjabloon, letterlijk zoals lib/titel.ts het toepast. */
const { MERK_ACHTERVOEGSEL, TITEL_MAX } = (() => {
  const src = lees('lib/titel.ts')
  const m = src.match(/MERK_ACHTERVOEGSEL = '([^']+)'/)
  const g = src.match(/TITEL_MAX = (\d+)/)
  if (!m || !g) throw new Error('lib/titel.ts: MERK_ACHTERVOEGSEL of TITEL_MAX niet gevonden')
  return { MERK_ACHTERVOEGSEL: m[1], TITEL_MAX: Number(g[1]) }
})()
const sjabloon = (titel) => {
  const metMerk = titel + MERK_ACHTERVOEGSEL
  return metMerk.length <= TITEL_MAX ? metMerk : titel
}

/** De paden uit app/sitemap.ts, met dezelfde drie dynamische families. */
function sitemapPaden() {
  const src = lees('app/sitemap.ts')
  const vast = [...src.matchAll(/entry\('([^']+)'/g)].map((m) => m[1])
  const slugs = (bestand, veld = 'slug') =>
    [...lees(bestand).matchAll(new RegExp(`^    ${veld}: '([^']+)'`, 'gm'))].map((m) => m[1])
  return [
    ...vast,
    ...slugs('content/services.ts').map((s) => `/diensten/${s}`),
    ...slugs('content/projects.ts').map((s) => `/projecten/${s}`),
    ...slugs('content/cities.ts').map((s) => `/tegelzetter/${s}`),
  ]
}

/** Veld uit een contentlijst: slug -> waarde, zoals de content zelf het schrijft. */
function contentVeld(bestand, veld) {
  const src = lees(bestand)
  const uit = new Map()
  let huidig = null
  for (const regel of src.split('\n')) {
    const s = regel.match(/^    slug: '([^']+)',/)
    if (s) { huidig = s[1]; continue }
    const v = regel.match(new RegExp(`^    ${veld}: '(.*)',$`))
    if (v && huidig) uit.set(huidig, v[1].replace(/\\'/g, "'"))
  }
  return uit
}
const dienstTitels = contentVeld('content/services.ts', 'title')
const projectTitels = contentVeld('content/projects.ts', 'title')
const plaatsNamen = contentVeld('content/cities.ts', 'name')

/** De paden die hun oude title houden tot hun klikmeting beoordeeld is. */
const VAST = new Map(
  [...lees('lib/titel.ts').matchAll(/\{ pad: '([^']+)', tot: '([^']+)', contract: '([^']+)' \}/g)]
    .map((m) => [m[1], { tot: m[2], contract: m[3] }])
)

/**
 * Het argument van de eerste paginaTitel(...) of titelVastVoorMeting(...) in een paginabestand.
 * `vast: true` betekent: achtervoegsel altijd, ongeacht de lengte (zie lib/titel.ts).
 */
function paginaTitelArgument(bestand) {
  const src = lees(bestand)
  const m = src.match(
    /(paginaTitel|titelVastVoorMeting)\(\s*(?:'((?:[^'\\]|\\.)*)'|`([^`]*)`|([A-Za-z][\w.]*))\s*(?:,|\))/
  )
  if (!m) return null
  const vast = m[1] === 'titelVastVoorMeting'
  if (m[2] !== undefined) return { soort: 'letterlijk', waarde: m[2].replace(/\\'/g, "'"), vast }
  if (m[3] !== undefined) return { soort: 'sjabloon', waarde: m[3], vast }
  return { soort: 'uitdrukking', waarde: m[4], vast }
}

/** Pad -> paginabestand; dynamische routes vallen op hun [param]-map terug. */
function bestandVoor(pad) {
  const kaal = pad === '/' ? '' : pad
  const direct = path.join('app', kaal, 'page.tsx')
  if (fs.existsSync(path.join(WORTEL, direct))) return direct
  const delen = kaal.split('/').filter(Boolean)
  for (const param of ['[slug]', '[stad]']) {
    const kandidaat = path.join('app', ...delen.slice(0, -1), param, 'page.tsx')
    if (fs.existsSync(path.join(WORTEL, kandidaat))) return kandidaat
  }
  return null
}

/** De paginatitel vóór het sjabloon — de %s dus. */
function paginaTitelVan(pad) {
  const bestand = bestandVoor(pad)
  if (!bestand) return { fout: `geen paginabestand voor ${pad}` }
  const slug = pad.split('/').filter(Boolean).at(-1)
  const arg = paginaTitelArgument(bestand)
  if (!arg) {
    // Geen paginaTitel(): dan draagt het layout-sjabloon de title (de homepage).
    if (pad === '/') {
      const m = lees('app/layout.tsx').match(/default: '([^']+)'/)
      if (!m) return { fout: 'layout.tsx: title.default niet gevonden' }
      return { bestand, gerenderd: m[1], viaSjabloon: false }
    }
    return { fout: `${bestand} zet zijn title niet via paginaTitel()` }
  }
  let titel = arg.waarde
  if (arg.soort === 'sjabloon' || arg.soort === 'uitdrukking') {
    const vul = (bron, naam) => {
      const w = bron.get(slug)
      if (w === undefined) return { fout: `${naam} mist slug ${slug}` }
      return { w }
    }
    if (bestand.includes('diensten/[slug]')) {
      const r = vul(dienstTitels, 'content/services.ts')
      if (r.fout) return r
      titel = titel.replace('${service.title}', r.w)
    } else if (bestand.includes('projecten/[slug]')) {
      const r = vul(projectTitels, 'content/projects.ts')
      if (r.fout) return r
      titel = arg.soort === 'uitdrukking' ? r.w : titel.replace('${project.title}', r.w)
    } else if (bestand.includes('tegelzetter/[stad]')) {
      const r = vul(plaatsNamen, 'content/cities.ts')
      if (r.fout) return r
      titel = titel.replace('${city.name}', r.w)
    } else {
      return { fout: `${bestand}: dynamische title zonder bekende bron` }
    }
    if (titel.includes('${')) return { fout: `${bestand}: title niet volledig opgelost (${titel})` }
  }
  if (arg.vast) {
    const v = VAST.get(pad)
    if (!v) return { fout: `${pad} staat op titelVastVoorMeting maar niet in TITELS_VAST_VOOR_METING` }
    return { bestand, gerenderd: titel + MERK_ACHTERVOEGSEL, vast: v }
  }
  if (VAST.has(pad)) return { fout: `${pad} staat in TITELS_VAST_VOOR_METING maar gebruikt paginaTitel()` }
  return { bestand, gerenderd: sjabloon(titel) }
}

const paden = sitemapPaden()
const rijen = []
const fouten = []
for (const pad of paden) {
  const r = paginaTitelVan(pad)
  if (r.fout) { fouten.push(r.fout); continue }
  rijen.push({ pad, titel: r.gerenderd, lengte: r.gerenderd.length, vast: r.vast })
}

rijen.sort((a, b) => b.lengte - a.lengte)
for (const r of rijen) {
  const vlag = r.lengte > GRENS ? 'BOVEN' : '     '
  const wacht = r.vast ? `  [VAST t/m ${r.vast.tot}, contract ${r.vast.contract}]` : ''
  console.log(`${String(r.lengte).padStart(3)} ${vlag}  ${r.pad}${wacht}\n          ${r.titel}`)
}

const lengtes = rijen.map((r) => r.lengte).sort((a, b) => a - b)
const mediaan = lengtes.length % 2
  ? lengtes[(lengtes.length - 1) / 2]
  : (lengtes[lengtes.length / 2 - 1] + lengtes[lengtes.length / 2]) / 2
const boven = rijen.filter((r) => r.lengte > GRENS)
console.log(`\nURL's uit de sitemap: ${paden.length}, gemeten: ${rijen.length}`)
console.log(`boven ${GRENS} tekens: ${boven.length}  ·  boven 70: ${rijen.filter((r) => r.lengte > 70).length}  ·  mediaan: ${mediaan}  ·  langste: ${lengtes.at(-1)}`)
const vastBoven = boven.filter((r) => r.vast)
if (vastBoven.length) {
  console.log(
    `waarvan VAST voor een lopende klikmeting: ${vastBoven.length} ` +
      `(${vastBoven.map((r) => `${r.pad} t/m ${r.vast.tot}`).join(', ')})`
  )
  console.log(`boven ${GRENS} na het vrijgeven van die ${vastBoven.length}: ${boven.length - vastBoven.length + vastBoven.filter((r) => r.titel.length - MERK_ACHTERVOEGSEL.length > GRENS).length}`)
}

if (fouten.length) {
  console.log('\nONBESLIST — deze titles zijn niet vastgesteld:')
  for (const f of fouten) console.log('  ' + f)
  process.exit(2)
}
if (boven.length > MAX_BOVEN) {
  console.log(`\nFAIL — ${boven.length} titles boven ${GRENS}, hoogstens ${MAX_BOVEN} toegestaan.`)
  process.exit(1)
}
console.log(`\nOK — ${boven.length} van ${rijen.length} boven ${GRENS} tekens (grens: hoogstens ${MAX_BOVEN}).`)
