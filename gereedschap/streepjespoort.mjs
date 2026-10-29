#!/usr/bin/env node
// streepjespoort.mjs — telt liggende streepjes (em-dash, U+2014) in de tekst die
// Van Wonderen uitstuurt: in de BRON van onze eigen copy, en in de GESERVEERDE
// tekst van een draaiende site.
//
// Waarom dit bestaat. De norm is nul (brand/voice-of-tone.md, 'Geen liggende
// streepjes', 27 aug 2026): de em-dash is het duidelijkste teken dat een tekst uit
// een generator komt, en in Nederlands zakelijk schrijven gebruikt bijna niemand
// hem met de hand. Die norm werd op twee plekken gehandhaafd en geen van beide
// keek naar déze site: de schrijfpoort-hook filtert op een pad binnen de
// l3art-repository en stapt stil uit zodra het bestand in een klantwerkmap staat,
// en scripts/acceptatie.mjs van l3art loopt de sitemap van l3art.nl af, waar
// /llms.txt van een klantsite niet in staat. Resultaat: op 16-09-2026 stonden er
// 12 em-dashes in /llms.txt van deze site en niemand mat dat. De pagina's waren
// schoon; de leeslaag voor assistenten niet. (Lering 8e93ec56, 16-09-2026.)
//
// TWEE MODI, en je kiest er expliciet een. Er is bewust GEEN standaardbasis.
// Lering cf725486: een poort met een productie-URL als standaardwaarde gaf na een
// lokale build een groen dat niets over de wijziging zei, omdat alleen het AANTAL
// controles in de staart verschilde. Daarom noemt deze poort zijn doel én zijn
// aantal URL's in de staart, en weigert hij te draaien als je niet zegt waar.
//
//   --bron                     de bron van deze repo (geen netwerk, geen build)
//   --basis <url>              een draaiende site (productie of localhost)
//
// WAT --bron MEET. Alleen tekst die werkelijk tekst is: string-literals, template-
// literals en JSX-tekst in .ts/.tsx, gevonden via de TypeScript-parser en niet via
// een regex. Commentaar wordt dus niet geteld — de code van deze site staat vol
// gemeten ontwerpnotities met een streepje erin, en die leest geen bezoeker. Dit
// is de kant waar lering 23c219ce om vraagt: toets de copy-regels op de BRON,
// want in de render staat ook geciteerde data die wij niet mogen herschrijven.
//
// WAT --basis MEET. Per URL uit de sitemap de zichtbare tekst, plus de <title>,
// de metabeschrijving, de og-velden en de alt-teksten: die staan in attributen en
// vallen bij een kale tag-strip weg, terwijl de norm ze expliciet noemt. Plus
// /llms.txt en /robots.txt als platte tekst.
//
// GECITEERDE DATA IS EEN AANDACHTSPUNT, GEEN FOUT. De Google review van Edward
// bevat een em-dash die een klant zelf zo heeft getypt. Die bijschaven is een bron
// falsificeren (wet art. 1.1), en een review mag alleen de eigenaar wijzigen
// (art. 1.3). Lering 23c219ce zegt precies dat: de renderende poort MELDT een
// afwijking in data, hij keurt er niet op af. Welke tekst geciteerd is wordt niet
// geraden maar gelezen uit content/testimonials.ts. Staat er een em-dash in onze
// eigen copy, dan is het wel een fout.
//
// Gebruik:
//   node gereedschap/streepjespoort.mjs --bron
//   node gereedschap/streepjespoort.mjs --basis https://www.wonderentegelwerken.nl
//   node gereedschap/streepjespoort.mjs --basis http://localhost:3000 --pad /llms.txt
//
// Exitcode: 0 = nul em-dashes in eigen copy · 1 = gevonden · 2 = de meting kon
// niet draaien (geen modus, sitemap onbereikbaar, of een URL zonder 200). Code 2
// is met opzet geen 1: een poort die niet kon draaien is geen geslaagde poort,
// maar ook geen bevinding.
//
// Kostenrails: geen API, geen model, één poging per URL, timeout 20 s, pauze
// tussen de verzoeken, harde cap op het aantal URL's.

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const WORTEL = join(dirname(fileURLToPath(import.meta.url)), '..')

const UA = 'l3art-streepjespoort/1.0 (+https://l3art.nl)'
const TIMEOUT = 20000
const PAUZE = 250
const MAX_URLS = 80
const EXTRA = ['/llms.txt', '/robots.txt']

const EM = '—'
const EN = '–'

// Mappen zonder geserveerde copy. onderzoek/ is werkmateriaal, public/ is beeld.
const SLA_OVER = new Set(['node_modules', '.next', '.git', 'onderzoek', 'public', 'gereedschap'])
// Bestanden die LETTERLIJK geciteerde klanttekst bevatten. Zie de kop.
const GECITEERD = ['content/testimonials.ts']

const args = process.argv.slice(2)
const heeft = (naam) => args.includes(naam)
const vlag = (naam) => {
  const i = args.indexOf(naam)
  return i === -1 ? null : args[i + 1]
}
const alle = (naam) => args.flatMap((a, i) => (a === naam && args[i + 1] ? [args[i + 1]] : []))

function gebruik(reden) {
  console.error(`STREEPJESPOORT KON NIET DRAAIEN: ${reden}\n`)
  console.error('  node gereedschap/streepjespoort.mjs --bron')
  console.error('  node gereedschap/streepjespoort.mjs --basis <url> [--pad /x ...]\n')
  console.error('Er is geen standaardbasis: een poort die zelf kiest waar hij meet,')
  console.error('geeft een groen dat niets over jouw wijziging zegt (lering cf725486).')
  process.exit(2)
}

// ── de letterlijk geciteerde klantteksten, uit de bron gelezen ───────────────
function citaten() {
  const uit = []
  for (const pad of GECITEERD) {
    let bron
    try {
      bron = readFileSync(join(WORTEL, pad), 'utf8')
    } catch {
      continue
    }
    for (const m of bron.matchAll(/text:\s*'((?:[^'\\]|\\.)*)'/g)) {
      uit.push(m[1].replace(/\\'/g, "'").replace(/\\\\/g, '\\'))
    }
  }
  return uit
}

// ────────────────────────────── BRON ─────────────────────────────────────────

function tsBestanden(map, uit = []) {
  for (const naam of readdirSync(map)) {
    if (SLA_OVER.has(naam)) continue
    const pad = join(map, naam)
    const st = statSync(pad)
    if (st.isDirectory()) tsBestanden(pad, uit)
    else if (/\.(ts|tsx)$/.test(naam)) uit.push(pad)
  }
  return uit
}

/**
 * Alleen tekst die tekst IS. De TypeScript-parser weet het verschil tussen een
 * string en een commentaarregel; een regex weet dat niet, en deze repo staat vol
 * ontwerpnotities met een streepje erin.
 */
async function meetBron() {
  let ts
  try {
    ts = (await import('typescript')).default
  } catch {
    gebruik('typescript niet gevonden (npm install), dus de bron kon niet geparseerd worden')
  }

  const bestanden = tsBestanden(WORTEL).sort()
  const quotes = citaten().filter((q) => q.includes(EM))
  const fouten = []
  const aandacht = []

  for (const pad of bestanden) {
    const rel = relative(WORTEL, pad)
    const bron = readFileSync(pad, 'utf8')
    if (!bron.includes(EM)) continue
    const sf = ts.createSourceFile(rel, bron, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)

    const loop = (node) => {
      const soort =
        ts.isStringLiteral(node) ||
        ts.isNoSubstitutionTemplateLiteral(node) ||
        ts.isTemplateHead(node) ||
        ts.isTemplateMiddle(node) ||
        ts.isTemplateTail(node) ||
        ts.isJsxText(node)
      if (soort && node.text && node.text.includes(EM)) {
        const regel = sf.getLineAndCharacterOfPosition(node.getStart(sf)).line + 1
        const stuk = node.text.replace(/\s+/g, ' ').trim()
        const geciteerd =
          GECITEERD.includes(rel) && quotes.some((q) => stuk.includes(q.slice(0, 60)))
        const aantal = (node.text.match(new RegExp(EM, 'g')) || []).length
        const rij = { rel, regel, aantal, stuk }
        ;(geciteerd ? aandacht : fouten).push(rij)
      }
      ts.forEachChild(node, loop)
    }
    loop(sf)
  }

  console.log(`streepjespoort · BRON ${WORTEL} · ${bestanden.length} ts/tsx-bestanden`)
  console.log(`norm: 0 em-dash (U+2014) in eigen copy · commentaar wordt niet geteld\n`)

  const toon = (rij, teken) => {
    const k = rij.stuk.indexOf(EM)
    console.log(`  ${teken}  ${rij.rel}:${rij.regel} — ${rij.aantal}×`)
    console.log(`       …${rij.stuk.slice(Math.max(0, k - 45), k + 46)}…`)
  }
  fouten.forEach((r) => toon(r, 'X'))
  aandacht.forEach((r) => toon(r, '?'))

  const em = fouten.reduce((n, r) => n + r.aantal, 0)
  const aand = aandacht.reduce((n, r) => n + r.aantal, 0)
  if (!em && !aand) console.log('  ok  geen em-dash in string-, template- of JSX-tekst')

  console.log(`\nBRON ${WORTEL}`)
  console.log(`${bestanden.length} bestanden gelezen · ${em}× em-dash in eigen copy · ${aand}× in letterlijk geciteerde klanttekst (aandachtspunt, geen fout)`)
  if (aand) console.log('Geciteerde tekst herschrijven is een bron falsificeren (wet art. 1.1); een review wijzigt alleen de eigenaar (art. 1.3).')
  process.exit(em ? 1 : 0)
}

// ───────────────────────────── GESERVEERD ────────────────────────────────────

async function haal(url) {
  const ac = new AbortController()
  const t = setTimeout(() => ac.abort(), TIMEOUT)
  try {
    const r = await fetch(url, { headers: { 'user-agent': UA }, signal: ac.signal })
    return { status: r.status, tekst: r.status === 200 ? await r.text() : '' }
  } catch (e) {
    return { status: 0, tekst: '', fout: e.name === 'AbortError' ? 'timeout' : e.message }
  } finally {
    clearTimeout(t)
  }
}

const pauzeer = (ms) => new Promise((r) => setTimeout(r, ms))

const ontEntiteit = (s) =>
  s
    .replace(/&mdash;|&#8212;|&#x2014;/gi, EM)
    .replace(/&ndash;|&#8211;|&#x2013;/gi, EN)
    .replace(/&nbsp;/gi, ' ')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;|&#x27;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&amp;/gi, '&')

/**
 * De tekst die werkelijk bij een lezer aankomt. Script, stijl en JSON-LD gaan
 * eruit: wat daarin staat wordt niet als proza gelezen. De attribuutvelden die de
 * norm wél noemt worden eerst apart geoogst, omdat ze bij het strippen van tags
 * verdwijnen — de dash-test van l3art zelf mist de metabeschrijving daardoor.
 */
function zichtbareTekst(html) {
  const velden = []
  const pak = (re, label) => {
    for (const m of html.matchAll(re)) velden.push(`[${label}] ${ontEntiteit(m[1])}`)
  }
  pak(/<title[^>]*>([\s\S]*?)<\/title>/gi, 'title')
  pak(/<meta[^>]+name="description"[^>]+content="([^"]*)"/gi, 'description')
  pak(/<meta[^>]+property="og:(?:title|description)"[^>]+content="([^"]*)"/gi, 'og')
  pak(/<img[^>]+alt="([^"]*)"/gi, 'alt')

  const romp = html
    .replace(/<(script|style|noscript|svg|template)[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')

  return `${velden.join('\n')}\n${ontEntiteit(romp)}`
}

/** De tekstbereiken waar letterlijk geciteerde klanttekst staat. */
function citaatBereiken(tekst, quotes) {
  const bereiken = []
  for (const q of quotes) {
    const naald = q.replace(/\s+/g, ' ')
    const hooi = tekst.replace(/\s+/g, ' ')
    const i = hooi.indexOf(naald)
    if (i !== -1) bereiken.push([i, i + naald.length])
  }
  return bereiken
}

function treffers(tekst, quotes) {
  const plat = tekst.replace(/\s+/g, ' ')
  const bereiken = citaatBereiken(tekst, quotes)
  const uit = { eigen: [], geciteerd: [] }
  let k = plat.indexOf(EM)
  while (k !== -1) {
    const context = `…${plat.slice(Math.max(0, k - 45), k + 46).trim()}…`
    const inCitaat = bereiken.some(([a, b]) => k >= a && k < b)
    uit[inCitaat ? 'geciteerd' : 'eigen'].push(context)
    k = plat.indexOf(EM, k + 1)
  }
  return uit
}

async function padenUitSitemap(basis) {
  const r = await haal(`${basis}/sitemap.xml`)
  if (r.status !== 200) return { fout: `sitemap.xml status ${r.status}${r.fout ? ` (${r.fout})` : ''}` }
  const urls = [...r.tekst.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
  if (!urls.length) return { fout: 'sitemap.xml bevat geen <loc>' }
  const paden = urls.map((u) => {
    try {
      return new URL(u).pathname || '/'
    } catch {
      return null
    }
  })
  return { paden: [...new Set(paden.filter(Boolean))] }
}

async function meetGeserveerd(basis) {
  const handmatig = alle('--pad')
  let paden
  let herkomst
  if (handmatig.length) {
    paden = handmatig
    herkomst = '--pad'
  } else {
    const uit = await padenUitSitemap(basis)
    if (uit.fout) gebruik(uit.fout)
    paden = [...new Set([...uit.paden, ...EXTRA])]
    herkomst = `sitemap (${uit.paden.length}) + ${EXTRA.length} vast`
  }
  if (paden.length > MAX_URLS) gebruik(`${paden.length} URL's, de cap staat op ${MAX_URLS}`)

  const quotes = citaten()
  console.log(`streepjespoort · GESERVEERD ${basis} · ${paden.length} URL's uit ${herkomst}`)
  console.log(`norm: 0 em-dash (U+2014) in eigen copy · ${quotes.length} letterlijk citaat bekend\n`)

  let em = 0
  let cit = 0
  let en = 0
  let onmeetbaar = 0
  let gemeten = 0

  for (const pad of paden) {
    await pauzeer(PAUZE)
    const r = await haal(basis + pad)
    if (r.status !== 200) {
      onmeetbaar++
      console.log(`  ?  ${pad} — status ${r.status}${r.fout ? ` (${r.fout})` : ''}, NIET gemeten`)
      continue
    }
    gemeten++
    const isHtml = /^\s*</.test(r.tekst)
    const tekst = isHtml ? zichtbareTekst(r.tekst) : r.tekst
    const t = treffers(tekst, quotes)
    const enAantal = (tekst.match(new RegExp(EN, 'g')) || []).length
    em += t.eigen.length
    cit += t.geciteerd.length
    en += enAantal
    const staart = enAantal ? ` · ${enAantal}× en-dash (mag, in bereiken)` : ''
    if (t.eigen.length) {
      console.log(`  X  ${pad} — ${t.eigen.length}× em-dash in eigen copy${staart}`)
      t.eigen.forEach((c) => console.log(`       ${c}`))
    } else if (t.geciteerd.length) {
      console.log(`  ?  ${pad} — 0 in eigen copy, ${t.geciteerd.length}× in citaat${staart}`)
    } else {
      console.log(`  ok ${pad}${staart}`)
    }
    t.geciteerd.forEach((c) => console.log(`       citaat: ${c}`))
  }

  console.log(`\nGESERVEERD ${basis}`)
  console.log(`${gemeten} van ${paden.length} URL gemeten · ${em}× em-dash in eigen copy · ${cit}× in letterlijk citaat (aandachtspunt) · ${en}× en-dash · ${onmeetbaar} niet gemeten`)
  if (cit) console.log('Geciteerde tekst herschrijven is een bron falsificeren (wet art. 1.1); een review wijzigt alleen de eigenaar (art. 1.3).')

  if (onmeetbaar && !em) {
    console.error('STREEPJESPOORT ONVOLLEDIG: niet elke URL kon gelezen worden')
    process.exit(2)
  }
  process.exit(em ? 1 : 0)
}

// ────────────────────────────── start ────────────────────────────────────────

const basis = vlag('--basis')
if (heeft('--bron') && basis) gebruik('--bron en --basis sluiten elkaar uit; kies één modus')
else if (heeft('--bron')) await meetBron()
else if (basis) await meetGeserveerd(basis.replace(/\/$/, ''))
else gebruik('geen modus gekozen')
