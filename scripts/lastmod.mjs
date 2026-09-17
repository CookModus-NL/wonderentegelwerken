/**
 * Genereert content/lastmod.json: per URL de datum van de laatste ECHTE
 * inhoudelijke wijziging, afgeleid uit git.
 *
 * Waarom dit bestaat: app/sitemap.ts stempelde elke URL met `new Date()`, dus
 * met het buildmoment. Daardoor beweerde elke deploy dat alle 24 pagina's waren
 * gewijzigd (live gemeten 2 sep 2026: 24/24 lastmod identiek). Een sitemap die
 * altijd "alles is nieuw" zegt, zegt niets — platform-regel A8.
 *
 * Granulariteit: voor pagina's die uit een lijst in een databestand komen
 * (diensten, projecten, plaatsen) wordt de datum per ITEM bepaald met
 * `git log -L <regelbereik>`, niet per bestand. Anders zou elke dienstpagina
 * weer dezelfde datum dragen en was het probleem alleen verplaatst.
 *
 * Faalgedrag: zonder git-historie (bijv. een shallow clone) schrijft dit script
 * NIETS en blijft het gecommitte bestand staan. Stil terugvallen op het
 * buildmoment zou de fout opnieuw introduceren zonder dat iemand het ziet.
 */
import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const git = (args) =>
  execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim()

function fileDate(file) {
  try {
    return git(['log', '-1', '--format=%cI', '--', file]) || null
  } catch {
    return null
  }
}

/** Laatste commitdatum die de regels van dit item raakte. */
function blockDate(file, from, to) {
  try {
    const out = git(['log', '-1', '--format=%cI', `-L${from},${to}:${file}`])
    const first = out.split('\n')[0].trim()
    return /^\d{4}-\d{2}-\d{2}T/.test(first) ? first : null
  } catch {
    return null
  }
}

/** Regelbereik per slug in een databestand met `slug: 'x'`-items. */
function slugRanges(file) {
  const lines = readFileSync(join(root, file), 'utf8').split('\n')
  const marks = []
  lines.forEach((line, i) => {
    const m = line.match(/^\s*slug:\s*['"]([^'"]+)['"]/)
    if (m) marks.push({ slug: m[1], line: i + 1 })
  })
  return marks.map((m, i) => ({
    slug: m.slug,
    from: m.line,
    to: i + 1 < marks.length ? marks[i + 1].line - 1 : lines.length,
  }))
}

const newest = (...dates) => dates.filter(Boolean).sort().pop() ?? null

try {
  git(['rev-parse', '--git-dir'])
} catch {
  console.warn('[lastmod] geen git-historie beschikbaar — bestaand content/lastmod.json blijft staan')
  process.exit(0)
}

const F = {
  business: 'content/business.ts',
  services: 'content/services.ts',
  projects: 'content/projects.ts',
  cities: 'content/cities.ts',
  testimonials: 'content/testimonials.ts',
}
const d = Object.fromEntries(Object.entries(F).map(([k, v]) => [k, fileDate(v)]))

const map = {
  '/': newest(fileDate('app/page.tsx'), d.business, d.testimonials, d.services),
  '/diensten': newest(fileDate('app/diensten/page.tsx'), d.services),
  '/projecten': newest(fileDate('app/projecten/page.tsx'), d.projects),
  '/tegelzetter': newest(fileDate('app/tegelzetter/page.tsx'), d.cities),
  '/over-ons': newest(fileDate('app/over-ons/page.tsx'), d.business),
  '/werkgebied': newest(fileDate('app/werkgebied/page.tsx'), d.cities),
  '/contact': newest(fileDate('app/contact/page.tsx'), d.business),
  // Antwoordeenheid: één losstaande pagina, dus één bestand bepaalt de datum.
  '/badkamer-betegelen-tot-plafond': fileDate('app/badkamer-betegelen-tot-plafond/page.tsx'),
  '/tegelen-op-houten-ondervloer': fileDate('app/tegelen-op-houten-ondervloer/page.tsx'),
  '/losse-tegels-en-scheurende-voegen': fileDate('app/losse-tegels-en-scheurende-voegen/page.tsx'),
  '/tegelvloer-belopen-en-vloerverwarming-aanzetten': fileDate('app/tegelvloer-belopen-en-vloerverwarming-aanzetten/page.tsx'),
  '/tegelen-over-bestaande-tegels': fileDate('app/tegelen-over-bestaande-tegels/page.tsx'),
  '/badkamer-waterdicht-maken': fileDate('app/badkamer-waterdicht-maken/page.tsx'),
  '/eerst-vloer-of-wand-betegelen': fileDate('app/eerst-vloer-of-wand-betegelen/page.tsx'),
  '/wat-kost-vloer-tegelen-per-m2': fileDate('app/wat-kost-vloer-tegelen-per-m2/page.tsx'),
  '/wat-kost-een-badkamer-betegelen': fileDate('app/wat-kost-een-badkamer-betegelen/page.tsx'),
  '/tegels-zelf-kopen-of-via-de-tegelzetter': fileDate('app/tegels-zelf-kopen-of-via-de-tegelzetter/page.tsx'),
}

const groups = [
  { prefix: '/diensten/', file: F.services, tpl: 'app/diensten/[slug]/page.tsx', extra: [] },
  { prefix: '/projecten/', file: F.projects, tpl: 'app/projecten/[slug]/page.tsx', extra: [] },
  { prefix: '/tegelzetter/', file: F.cities, tpl: 'app/tegelzetter/[stad]/page.tsx', extra: [F.services] },
]

for (const g of groups) {
  const tplDate = fileDate(g.tpl)
  const fallback = fileDate(g.file)
  for (const { slug, from, to } of slugRanges(g.file)) {
    map[g.prefix + slug] = newest(
      blockDate(g.file, from, to) ?? fallback,
      tplDate,
      ...g.extra.map(fileDate)
    )
  }
}

const out = join(root, 'content/lastmod.json')
const payload = { gegenereerd_door: 'scripts/lastmod.mjs', bron: 'git commitdatums', paden: map }
const prev = existsSync(out) ? JSON.parse(readFileSync(out, 'utf8')) : null
writeFileSync(out, JSON.stringify(payload, null, 2) + '\n')

const uniek = new Set(Object.values(map).filter(Boolean)).size
console.log(`[lastmod] ${Object.keys(map).length} paden, ${uniek} verschillende datums${prev ? '' : ' (nieuw bestand)'}`)
