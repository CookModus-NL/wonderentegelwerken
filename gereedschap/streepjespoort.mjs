#!/usr/bin/env node
// streepjespoort.mjs — telt liggende streepjes (em-dash, U+2014) in de tekst die
// een bezoeker én een AI-assistent van deze site krijgt.
//
// Waarom dit bestaat. De norm is nul (brand/voice-of-tone.md, 'Geen liggende
// streepjes', 27 aug 2026): de em-dash is het duidelijkste teken dat een tekst uit
// een generator komt, en in Nederlands zakelijk schrijven gebruikt bijna niemand
// hem met de hand. Die norm werd tot nu toe op twee plekken gehandhaafd, en geen
// van beide keek naar déze site: de schrijfpoort-hook filtert op een pad binnen de
// l3art-repository en stapt stil uit zodra het bestand in een klantwerkmap staat,
// en scripts/acceptatie.mjs van l3art loopt de sitemap van l3art.nl af. Resultaat:
// op 16-09-2026 stonden er 12 em-dashes in /llms.txt van deze site, en niemand
// mat dat. De pagina's waren schoon; de leeslaag voor assistenten niet.
//
// Wat de poort meet. De GESERVEERDE tekst, niet de bron. Per URL uit de sitemap:
// de zichtbare tekst, plus de <title>, plus de metabeschrijving en de og-velden —
// die staan in attributen en vallen bij een kale tag-strip weg, terwijl de norm ze
// expliciet meeneemt. Daarnaast /llms.txt en /robots.txt als platte tekst.
//
// Wat de poort NIET doet. Hij beslist niet of de tekst goed is, en hij repareert
// niets. Hij bewijst dat déze fout eruit is. De en-dash (U+2013) mag wél, maar
// alleen in bereiken; hij wordt daarom geteld en gemeld, niet afgekeurd.
//
// OPEN GEVAL, LEES DIT VOOR JE DENKT DAT DE POORT STUK IS (29-10-2026). Er is nog
// GEEN uitzonderingslijst, en de poort staat daarom op rood door één em-dash op /:
// hij staat in de LETTERLIJKE Google review van Edward (content/testimonials.ts),
// een tekst die een klant zelf zo heeft getypt. Die komma zetten wij er niet in —
// een geciteerde review bijschaven is een bron falsificeren (wet art. 1.1), en een
// review is bovendien een gevoelig feit dat alleen de eigenaar mag wijzigen
// (art. 1.3). De norm 'nul em-dashes' en de citaatplicht botsen hier dus echt, en
// dat is een besluit voor Bart: of de norm krijgt een uitzondering voor letterlijk
// geciteerde tekst, of de review wordt korter geciteerd. Zolang dat besluit er niet
// is, blijft dit zichtbaar als rood in plaats van weggefilterd — een poort die zijn
// eigen uitzonderingen verzint meet niets meer.
//
// Gebruik:
//   node gereedschap/streepjespoort.mjs                  # productie
//   node gereedschap/streepjespoort.mjs --basis http://localhost:3000
//   node gereedschap/streepjespoort.mjs --pad /llms.txt --pad /
//
// Exitcode: 0 = nul em-dashes · 1 = gevonden · 2 = de meting kon niet draaien
// (sitemap onbereikbaar of leeg). Code 2 is met opzet geen 1: een poort die niet
// kon draaien is geen geslaagde poort, maar ook geen bevinding.
//
// Kostenrails: geen API, geen model, één poging per URL, timeout 20 s, pauze
// tussen de verzoeken, harde cap op het aantal URL's.

const UA = 'l3art-streepjespoort/1.0 (+https://l3art.nl)'
const TIMEOUT = 20000
const PAUZE = 250
const MAX_URLS = 80

const args = process.argv.slice(2)
const vlag = (naam, standaard) => {
  const i = args.indexOf(naam)
  return i === -1 ? standaard : args[i + 1]
}
const alle = (naam) =>
  args.flatMap((a, i) => (a === naam && args[i + 1] ? [args[i + 1]] : []))

const BASIS = (vlag('--basis', 'https://www.wonderentegelwerken.nl') || '').replace(/\/$/, '')
const EXTRA = ['/llms.txt', '/robots.txt']

const EM = '—'
const EN = '–'

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
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')

/**
 * De tekst die werkelijk bij een lezer aankomt. Scripts, stijl en JSON-LD gaan
 * eruit: wat daarin staat wordt niet gelezen als proza. De attribuutvelden die de
 * norm wél meeneemt (titel, metabeschrijving, og-velden, alt-teksten) worden eerst
 * apart geoogst, omdat ze bij het strippen van tags verdwijnen.
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

function omgeving(tekst, teken) {
  const regels = tekst.split('\n')
  const uit = []
  regels.forEach((r, i) => {
    let k = r.indexOf(teken)
    while (k !== -1) {
      uit.push(`r${i + 1}: …${r.slice(Math.max(0, k - 40), k + 41).trim()}…`)
      k = r.indexOf(teken, k + 1)
    }
  })
  return uit
}

async function padenUitSitemap() {
  const r = await haal(`${BASIS}/sitemap.xml`)
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

async function main() {
  const handmatig = alle('--pad')
  let paden
  if (handmatig.length) {
    paden = handmatig
  } else {
    const uit = await padenUitSitemap()
    if (uit.fout) {
      console.error(`STREEPJESPOORT KON NIET DRAAIEN: ${uit.fout}`)
      process.exit(2)
    }
    paden = [...new Set([...uit.paden, ...EXTRA])]
  }

  if (paden.length > MAX_URLS) {
    console.error(`STREEPJESPOORT KON NIET DRAAIEN: ${paden.length} URL's, cap staat op ${MAX_URLS}`)
    process.exit(2)
  }

  console.log(`streepjespoort · ${BASIS} · ${paden.length} URL's · norm: 0 em-dash (U+2014)\n`)

  let em = 0
  let en = 0
  let onmeetbaar = 0

  for (const pad of paden) {
    await pauzeer(PAUZE)
    const r = await haal(BASIS + pad)
    if (r.status !== 200) {
      onmeetbaar++
      console.log(`  ?  ${pad} — status ${r.status}${r.fout ? ` (${r.fout})` : ''}, NIET gemeten`)
      continue
    }
    const plat = /^\s*</.test(r.tekst) === false
    const tekst = plat ? r.tekst : zichtbareTekst(r.tekst)
    const treffers = omgeving(tekst, EM)
    const enAantal = (tekst.match(new RegExp(EN, 'g')) || []).length
    em += treffers.length
    en += enAantal
    const staart = enAantal ? ` · ${enAantal}× en-dash (mag, in bereiken)` : ''
    if (treffers.length) {
      console.log(`  X  ${pad} — ${treffers.length}× em-dash${staart}`)
      treffers.forEach((t) => console.log(`       ${t}`))
    } else {
      console.log(`  ok ${pad}${staart}`)
    }
  }

  console.log(`\ntotaal: ${em}× em-dash · ${en}× en-dash · ${onmeetbaar} URL niet gemeten`)

  if (onmeetbaar && !em) {
    console.error('STREEPJESPOORT ONVOLLEDIG: niet elke URL kon gelezen worden')
    process.exit(2)
  }
  process.exit(em ? 1 : 0)
}

await main()
