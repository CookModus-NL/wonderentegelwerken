# GEO-audit: Van Wonderen Tegelwerken

**Datum:** 5 november 2026
**URL:** https://www.wonderentegelwerken.nl
**Type:** lokaal vakbedrijf (eenmanszaak tegelzetter, Breda)
**Basis:** broncode `main` + tak `partners-vermelding`, 34 sitemap-URL's, ~25 verzoeken naar de live site (bewust laag: Vercel-challenge bij crawlen)
**Aanleiding:** de vermelding van tegelwinkels (Gigategelstore, Designtegels) duidelijk en professioneel maken

---

## Samenvatting

**GEO-score: 59/100 (Poor, op de grens van Fair)**

De inhoud is sterk: eigen metingen, letterlijke bronnen, server-side gerenderd, alle AI-crawlers toegelaten. Wat de score drukt is de entiteit eromheen. Er is één sameAs, geen Person voor Jaap, geen WebPage-graaf en vrijwel geen onafhankelijke vermeldingen. De tegelwinkels zijn juist daarom waardevol: Designtegels is de enige externe partij die Van Wonderen bij naam noemt.

| Categorie | Score | Gewicht | Gewogen |
|---|---|---|---|
| AI-citeerbaarheid | 80 | 25% | 20,0 |
| Merkautoriteit | 22 | 20% | 4,4 |
| Inhoud (E-E-A-T) | 66 | 20% | 13,2 |
| Techniek | 89 | 15% | 13,4 |
| Schema | 32 | 10% | 3,2 |
| Platforms | 51 | 10% | 5,1 |
| **Totaal** | | | **59** |

Scores gelden voor `main`. De tak `partners-vermelding` lost de schemapunten over de winkels op (WebPage + mentions), de rest staat hieronder als werk.

---

## Wat er op de tak `partners-vermelding` is gedaan

Sectie "Tegelwinkels in Breda" op de homepage en op /tegels-zelf-kopen-of-via-de-tegelzetter, gegenereerd uit één bron (`content/partners.ts`) voor kaarten, JSON-LD en llms.txt.

| Bevinding uit de audit | Oplossing |
|---|---|
| Logo + link leest als partner/affiliate; relatie niet duidelijk (E-E-A-T) | Per winkel één zin over de relatie, plus "Waar je op let" met hun eigen retour- en breukregels en leesdatum |
| "Deze winkels ken ik" te vaag; claim "weet wat ze verkopen" ongedekt | Kop "Ik ken de regels van de winkel"; Designtegels' retourpagina gelezen op 5-11 zodat beide kaarten gedekt zijn |
| Naam dubbel voorgelezen (logo-aria + h3) (techniek) | Logo's decoratief (aria-hidden, alt="") |
| Geen schema voor de winkels (schema) | `WebPage.mentions` → twee `HomeGoodsStore`-knopen met adres; Designtegels' tegelzetterslijst als hún WebPage die `#business` noemt. Geen partner/memberOf/brand/sameAs |
| Partnerrelaties begraven in een lang llms-antwoord (citeerbaarheid) | Eigen sectie `## Tegelwinkels` in llms.txt, derde persoon, met bron-URL |
| Gigategelstore-adres niet bevestigd (schema) | Bevestigd: algemene voorwaarden art. 1.1, Hukon B.V., Ettensebaan 19, 4813 AH Breda |
| Logo 23 KB voor 64px (techniek) | 160px, 12 KB |
| Links: nofollow of niet? | Gewone redactionele links; `rel="sponsored"` alleen als er ooit een vergoeding tegenover staat |
| Designpoort | Palet- en raakvlakfout uit de nieuwe sectie hersteld; poort meldt nog één raakvlak ("bron", 30x44) dat al op `main` stond |

---

## Open voor een mens (vóór livegang)

1. **Jaap: krijgt hij iets van deze winkels (commissie, korting)?** Bij nee kan "Ik krijg er niets voor" erbij, de sterkste vertrouwensregel die er is. Bij ja: `rel="sponsored"` en vermelden.
2. **Jaap: vaste leveranciers of niet?** `content/services.ts:50` zegt "Ik adviseer graag bij vaste leveranciers", `app/badkamer-renovatie-breda/page.tsx:788` zegt "geen voorkeursleverancier". Beide zijn zijn woorden; één moet wijken.
3. **NAP-conflict:** Oozo (afgeleid van KvK 86555499) toont Bollaard 39, 4847 AX Teteringen; de site zegt Leistraat 19, 4818 NA Breda. Welk adres staat in het KvK-register?
4. **Release:** `main` staat 28 commits voor op productie; deze tak hoort in dezelfde releasebeslissing.

---

## Prioriteiten

### Hoog
- **Wederzijdse vermelding afmaken (buiten de site, hoogste opbrengst).** Designtegels vragen hun regel aan te vullen met "Breda" en te linken naar `https://www.wonderentegelwerken.nl/` (nu non-www, met redirect). Gigategelstore vragen om een regel "tegelzetter nodig?" met naam. Een AI noemt Van Wonderen pas bij winkelvragen als een bron die niet van hemzelf is winkel en tegelzetter in één passage noemt.
- **sameAs uitbreiden** (`lib/schema.ts:56`): alleen profielen die over deze entiteit gaan en bestaan. Kandidaten na verificatie: Trustoo, Goudengids, vakman-indebuurt, LinkedIn-bedrijfspagina.
- **Person voor Jaap** als `founder` met `@id`, `jobTitle`, `knowsAbout`; `alternateName: 'Jaap van Wonderen'` op het bedrijf eraf (`lib/schema.ts:17`).
- **Dubbele `#business` op stadspagina's** (`app/tegelzetter/[stad]/page.tsx:60`): twee knopen met dezelfde @id en tegenstrijdige `areaServed`. Maak er een Service/WebPage met `provider` van.

### Middel
- Article/WebPage met `author`, `dateModified` en `publisher` op de ~12 vraagpagina's.
- Antwoordblokken van 300+ woorden openen met één zin van maximaal 40 woorden.
- `/badkamer-renovatie-breda` ontbreekt in de paginalijst van llms.txt en heeft geen `lastmod` (`app/sitemap.ts:53`).
- Homepage-description 199 tekens (`app/page.tsx:22`).
- Content-Security-Policy ontbreekt.
- Opname in Trustoo Breda en Goudengids; Bing Webmaster Tools verifiëren.

### Laag
- Redirectketen http → https → www in één stap.
- `decoding="async"` en alt-dekking op overige afbeeldingen (poort: 6 van 27 zonder alt).

---

## Per platform

| Platform | Score | Kern |
|---|---|---|
| Google AI Overviews | 64 | Sterke vraagstructuur en FAQ; positie ~6 op "tegelzetter breda" |
| ChatGPT search | 42 | Zwakke entiteit: één sameAs, geen auteur |
| Perplexity | 47 | Goede primaire bron (eigen metingen), geen vermeldingen op fora |
| Gemini | 50 | Google-profiel aanwezig, schema mager |
| Bing Copilot | 52 | Bing koppelt Van Wonderen al aan Designtegels' lijst |

## Bronnen
- Designtegels tegelzetters: https://www.designtegels.nl/pages/tegelzetters (5-11-2026)
- Designtegels retour: https://www.designtegels.nl/pages/retourneren-en-garantie (5-11-2026)
- Designtegels showroom: https://www.designtegels.nl/pages/showroom-breda (5-11-2026)
- Gigategelstore voorwaarden: https://gigategelstore.com/Algemene-voorwaarden-NL/ (12-10 en 5-11-2026)
- Oozo: https://www.oozo.nl/bedrijven/breda/teteringen/teteringen/2646988/van-wonderen-tegelwerken
- Linkgat-rapport: ~/l3art/motor/rapporten/2026-10-13-linkgat-wonderen.md
