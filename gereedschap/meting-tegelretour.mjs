#!/usr/bin/env node
// meting-tegelretour.mjs — wat beloven Nederlandse tegelleveranciers zelf over
// SNIJVERLIES (hoeveel extra bestellen), KLEURBAD/CHARGE en RETOUR van het restant?
//
// Waarom dit bestaat. Op de vraag "koop ik de tegels zelf of levert de tegelzetter
// ze?" bestaat de hele bovenlaag uit offerteplatforms. Zij zeggen alle drie hetzelfde:
// "beide kan, bestel ~10% extra, spreek het af". Niemand rekent door wat die 10% kost
// als je hem niet kwijt kunt. Dat is precies het bedrag dat de keuze bepaalt, en het
// staat bij de partij waar je koopt — niet bij het offerteplatform.
//
// Dit script haalt per leverancier de kandidaat-pagina's op (retour, klantenservice,
// voorwaarden, bezorgen) en telt LEZEND of er een uitspraak staat over drie dingen:
//   snijverlies-advies · kleurbad/charge/partij · retour van ongebruikte dozen.
// Het classificeert NIET automatisch: het print de gevonden zinnen, en een mens
// beslist. Een regex is een vindmiddel, geen oordeel (wet art. 1.1).
//
// Kostenrails: geen API, geen model, timeout 20 s, één poging per pad, pauze tussen
// leveranciers, harde cap op het aantal paden.

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
const TIMEOUT = 20000
const PAUZE = 900

const LEVERANCIERS = [
  'maxaro.nl', 'tegelhoek.nl', 'tegeldepot.nl', 'tegelsenlaminaat.nl',
  'debudgettegels.nl', 'tegelzetshop.nl', 'tegel-uitverkoop.nl', 'hornbach.nl',
  'gamma.nl', 'praxis.nl', 'tegels.nl', 'vtwonen-tegels.nl',
]

const PADEN = [
  '/retourneren', '/retour', '/klantenservice', '/klantenservice/retourneren',
  '/service/retourneren', '/veelgestelde-vragen', '/algemene-voorwaarden',
  '/klantenservice/veelgestelde-vragen', '/faq',
]

const TERMEN = {
  snijverlies: /(snijverlies|zaagverlies|knipverlies|breukverlies|[0-9]{1,2}\s*%\s*(extra|meer|verlies|reserve))/i,
  charge: /(kleurbad|charge|productiepartij|dezelfde partij|zelfde partij|kleurnuance|kleurverschil|batch|caliber|kaliber)/i,
  retour: /(retour|retourneren|terugsturen|herroeping|bedenktijd|ongeopende? (doos|dozen|verpakking))/i,
}

const ontHtml = (s) => s
  .replace(/<(script|style|noscript|svg)[^>]*>[\s\S]*?<\/\1>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;/g, "'").replace(/&eacute;/g, 'é')
  .replace(/\s+/g, ' ').trim()

const wacht = (ms) => new Promise((r) => setTimeout(r, ms))

async function haal(url) {
  try {
    const r = await fetch(url, {
      headers: { 'user-agent': UA, 'accept-language': 'nl-NL,nl;q=0.9' },
      redirect: 'follow', signal: AbortSignal.timeout(TIMEOUT),
    })
    return { status: r.status, tekst: r.status === 200 ? await r.text() : '' }
  } catch (e) {
    return { status: 0, tekst: '', fout: e.message }
  }
}

function zinnen(tekst, regex) {
  const uit = []
  for (const zin of tekst.split(/(?<=[.!?])\s+/)) {
    if (regex.test(zin) && zin.length < 400) uit.push(zin.trim())
    if (uit.length >= 3) break
  }
  return uit
}

const uitslag = []
for (const host of LEVERANCIERS) {
  const rij = { host, bereikt: [], mislukt: [], vondsten: {} }
  for (const pad of PADEN) {
    const url = `https://www.${host}${pad}`
    const { status, tekst } = await haal(url)
    if (status !== 200 || tekst.length < 2000) { rij.mislukt.push(`${pad} http ${status}`); continue }
    rij.bereikt.push(pad)
    const plat = ontHtml(tekst)
    for (const [naam, re] of Object.entries(TERMEN)) {
      const z = zinnen(plat, re)
      if (z.length) (rij.vondsten[naam] ||= []).push({ pad, zinnen: z })
    }
    await wacht(PAUZE)
  }
  uitslag.push(rij)
  console.error(`${host}: ${rij.bereikt.length} pad(en) gelezen, ${Object.keys(rij.vondsten).join('+') || 'geen treffer'}`)
}

console.log(JSON.stringify({ gemeten_op: new Date().toISOString(), leveranciers: LEVERANCIERS.length, paden: PADEN, uitslag }, null, 1))
