import Link from 'next/link'
import { ChevronRight, Phone, MessageCircle } from 'lucide-react'
import { business } from '@/content/business'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

/**
 * ANTWOORDEENHEID. Vraag: "Wat kost een complete badkamer betegelen (wand + vloer)?"
 * Contract 24de6b53-45aa-4790-84f5-d3e882e622ad, run schrijver-20260916-1735.
 *
 * DE HARDE RANDVOORWAARDE (wet art. 1.3), gelijk aan die van /wat-kost-vloer-tegelen-per-m2.
 * Er bestaat GEEN door de eigenaar goedgekeurd prijsfeit voor Van Wonderen Tegelwerken.
 * Opnieuw gemeten op 16-09-2026: 20 rijen in motor_feiten voor deze klant, waarvan 0 met
 * soort of sleutel prijs of tarief. Op deze pagina staat daarom NERGENS een bedrag van Van
 * Wonderen. Het enige euro-bedrag dat dit bedrijf zelf publiceert is de annuleringsvergoeding
 * uit artikel 4 van de eigen algemene voorwaarden.
 *
 * WAAROM DEZE PAGINA NIET DE VORIGE HERHAALT. /wat-kost-vloer-tegelen-per-m2 beantwoordt de
 * TARIEF-helft van de prijsvraag (wat rekent men per m2, wat zit erin, welk btw-tarief geldt)
 * en sluit expliciet af met: "Een rekenvoorbeeld voor een badkamer of een hele woning. Dat is
 * een andere vraag met andere posten, en die verdient een eigen pagina in plaats van een alinea
 * hier." Dit is die pagina, en hij beantwoordt de ANDERE helft: hoeveel vierkante meter
 * tegelwerk je eigenlijk laat leggen. Bij een vloer is dat de vloer. Bij een badkamer is de
 * vloer de kleine helft.
 *
 * HET EIGEN, CONTROLEERBARE GEGEVEN VAN DEZE PAGINA (bewijsklasse A: het is rekenwerk, geen
 * bewering). De rekenregel wand = omtrek x tegelhoogte - deur, met omtrek = 2 x (lengte +
 * breedte). Toegepast op drie rechthoekige badkamers, tegelhoogte 2,60 m (plafond), deur
 * 0,80 x 2,00 m afgetrokken:
 *     1,80 x 2,20 m -> vloer  4,0 m2 · omtrek  8,0 m · wand 19,2 m2 · tegelwerk 23,2 m2
 *     2,20 x 2,60 m -> vloer  5,7 m2 · omtrek  9,6 m · wand 23,4 m2 · tegelwerk 29,1 m2
 *     2,80 x 3,20 m -> vloer  9,0 m2 · omtrek 12,0 m · wand 29,6 m2 · tegelwerk 38,6 m2
 * De wand is dus 3,3 tot 4,8 keer de vloer, en het totaal 4,3 tot 5,8 keer de vloer. De
 * verhouding loopt OP naarmate de badkamer kleiner is: omtrek groeit lineair met de
 * afmetingen, oppervlak kwadratisch. Dat is meetkunde en dus na te rekenen met een rolmaat.
 *
 * VALIDATIE VAN DE REKENREGEL TEGEN EEN ONAFHANKELIJKE BRON (bewijsklasse A). Kemp Tegelwerk
 * (Haarlem) publiceert het voorbeeld "35 m2 wand plus 12 m2 vloer (47 m2)". Een rechthoekige
 * badkamer van 3,00 x 4,00 m heeft 12 m2 vloer en 14 m omtrek; 14 x 2,60 - 1,60 = 34,8 m2 wand.
 * De regel reproduceert hun getal op 0,2 m2 na. Zij noemen de tegelhoogte niet; de regel laat
 * zien dat hun voorbeeld tot het plafond gaat.
 *
 * DE IMPLICIETE TEGELHOOGTE, het scherpste eigen punt (bewijsklasse A op gelezen getallen).
 * Vier van de gelezen bronnen noemen een wand- EN een vloeroppervlak, geen enkele noemt erbij
 * tot welke hoogte er dan betegeld is. Die hoogte volgt uit hun eigen twee getallen. Om niet
 * te overdrijven is per bron gerekend met de VIERKANTE plattegrond: bij een gegeven oppervlak
 * heeft een vierkant de kortste omtrek, en dat levert de HOOGST mogelijke tegelhoogte op. Het
 * zijn dus bovengrenzen:
 *     homedeal.nl   15 m2 wand bij  7 m2 vloer -> ten hoogste 1,53 m
 *     bobex.nl      20 m2 wand bij  8 m2 vloer -> ten hoogste 1,90 m
 *     decorstone.nl 20 m2 wand bij  5 m2 vloer -> ten hoogste 2,41 m
 *     kemptegelwerk 35 m2 wand bij 12 m2 vloer -> ten hoogste 2,64 m
 * Alleen het voorbeeld van Kemp gaat aantoonbaar tot het plafond. Wie het voorbeeld van
 * homedeal.nl als maatstaf neemt voor een tot het plafond betegelde badkamer, rekent met
 * ongeveer een derde van het tegelwerk.
 *
 * DE MARKTMETING (bewijsklasse B). Zes Nederlandstalige pagina's over DEZE vraag zijn op
 * 16-09-2026 volledig gelezen. De tellingen op deze pagina slaan uitsluitend op deze zes:
 *   1. homedeal.nl/tegels-zetten/badkamer-betegelen-kosten/        (pagina zelf: 11/11/2025)
 *   2. zoofy.nl/en/price-guides/bathroom-tiling-costs/             ("Last updated: 22 July 2026")
 *   3. bobex.nl/nl-nl/badkamerrenovatie/betegelen/                 (titel draagt "2026")
 *   4. klaardeklus.nl/cms/blog/badkamer-betegelen-kosten           ("Vrijdag 15 mei 2026")
 *   5. multiconcurrent.nl/tegels-zetten/badkamer-betegelen-kosten/ (geen datum)
 *   6. kemptegelwerk.nl/advies/kosten-badkamer-betegelen           ("Bijgewerkt 2026-08-04")
 *   7. decorstone.nl/prijzen-badkamer-betegelen.htm                (artikeldatum 16-09-2026)
 * Dat zijn er zeven; de tellingen hieronder gaan over alle zeven en dat staat er ook bij.
 * NIET GELEZEN, en dus buiten elke telling: werkspot.nl/vloeren-tegels/prijzen-kosten/
 * badkamer-betegelen (HTTP 403). Dat is uitgerekend de pagina die in motor_vraagdekking db06057b
 * als bezitter van deze vraag staat. Een telling die "geen van de bronnen" zou zeggen is
 * daarom nergens gebruikt; er staat steeds "van de zeven gelezen pagina's" (lering 10b9965b).
 * DE TELLINGEN:
 *   - 7 van 7 noemen een bedrag per m2 of een totaalbedrag.
 *   - 4 van 7 noemen een voorbeeld met wand- EN vloeroppervlak apart (homedeal, bobex,
 *     decorstone, kemp); 0 van 7 zet daar de tegelhoogte bij.
 *   - 0 van 7 geeft de lezer een rekenregel waarmee hij zijn EIGEN wandoppervlak uit de
 *     afmetingen van zijn badkamer kan halen. Voor homedeal.nl en bobex.nl is dat expliciet
 *     nagevraagd en bevestigd ("staat er niet"); bij de overige vijf is het bij volledige
 *     lezing niet aangetroffen.
 *   - 3 van 7 noemen het btw-tarief van 21% (zoofy, kemp, decorstone). Dat is meer dan bij de
 *     vloervraag, waar het er 0 van 6 waren.
 *   - 2 van 7 zijn een tegelzetter met een eigen werkplaats die zijn prijs publiceert (kemp,
 *     decorstone). Dat is een verschil met de vloervraag, waar alle zes gelezen pagina's een
 *     leadplatform of prijsvergelijker waren.
 *   - 3 van 7 prijzen de waterdichting van de natte zone als aparte post (klaardeklus EUR 10-20
 *     per m2, kemp EUR 15-25 per m2, decorstone rekent kim en band mee in zijn m2-prijs).
 *
 * WAT DE TWEE TEGELZETTERS PUBLICEREN, EN WAAROM DAT ERTOE DOET (bewijsklasse B).
 *   - kemptegelwerk.nl: "Gemiddeld rekent u op 45 tot 75 euro per m2 arbeid, exclusief
 *     materiaal." Plus lijm en voeg "ongeveer 8 euro per m2", waterdichting natte zone "15 tot
 *     25 euro per m2", afschot "250 tot 450 euro". Voorbeeld: "35 m2 wand plus 12 m2 vloer
 *     (47 m2) tegen 55 euro komt op circa 2.585 euro arbeid."
 *   - decorstone.nl: "EUR 56,00 p/m2" exclusief 21% btw, met kim en band, voorstrijk, pastalijm,
 *     tegelhoekstrips en waterwerende voegmortel erin; rekenvoorbeeld 20 m2 wanden + 5 m2 vloer
 *     = 25 m2 tegelwerk, EUR 1.400,00 exclusief en EUR 1.694,00 inclusief btw.
 * De leadplatforms in dezelfde lijst noemen voor arbeid EUR 25 tot EUR 40 per m2 (homedeal,
 * klaardeklus). Die getallen staan hier naast elkaar als waarneming, niet als oordeel over wie
 * gelijk heeft: het zijn schattingen van een platform tegenover gepubliceerde tarieven van twee
 * eenmanszaken. Wat er wel uit volgt is dat de spreiding op het TARIEF kleiner is dan de fout
 * die je maakt op het AANTAL m2.
 *
 * BTW. Voor tegelwerk geldt 21%, ook in een badkamer. Onderbouwing en het citaat van de
 * Belastingdienst staan op /wat-kost-vloer-tegelen-per-m2 en worden hier niet herhaald. Twee
 * van de gelezen bronnen bevestigen het zelfstandig: kemptegelwerk.nl ("Nee. De Belastingdienst
 * schaart tegelen onder 21%.") en decorstone.nl (prijzen "exclusief 21% btw").
 *
 * AI-ANTWOORD, sampled 16-09-2026 (websearch-assistent, US-gelokaliseerd, dus NIET
 * representatief voor wat een Nederlandse zoeker ziet; alleen als waarneming genoteerd):
 * "Voor het tegelen van een complete badkamer (wanden en vloer) reken je in totaal op zo'n
 * EUR 2.000 tot EUR 5.000 inclusief materiaal en arbeid", met een indeling in "kleine",
 * "gemiddelde" en "grotere" badkamer. Het antwoord definieert die drie maten nergens in m2,
 * noemt geen btw-tarief en geeft geen rekenregel voor het wandoppervlak.
 *
 * SERP-METING. motor/scripts/serp.mjs op DuckDuckGo, 16-09-2026, zoekopdracht "wat kost een
 * badkamer betegelen": bezitter homedeal.nl; top10 homedeal.nl, zoofy.nl, werkspot.nl,
 * cerados.nl, mygo.nl, stuc-concurrent.nl, bobex.nl, topvakmannen.nl, verbouwkosten.com,
 * ikknapmijnhuisop.nl. wonderentegelwerken.nl staat er niet in. Brave weigerde twee keer met
 * HTTP 429; GOOGLE ONGEMETEN (machinaal geblokkeerd, serp.mjs --diagnose). Dit is dus een
 * Bing-index-uitslag en geen Google-uitslag (wet art. 1.2).
 *
 * EIGEN GEGEVENS OP DEZE PAGINA, met herkomst (wet art. 1.1):
 *   (a) motor_feiten met eigenaar_akkoord = true: voorwaarde.garantie (5 jaar tegelwerk en
 *       voegwerk, 1 jaar kitwerk), voorwaarde.offerte (gespecificeerd, geen kleine lettertjes,
 *       binnen 5 dagen), proces.reactietijd (reactie binnen 1 dag via WhatsApp),
 *       persoon.eigenaar (eenmanszaak Breda sinds 2022, geen onderaannemers),
 *       principe.prijsopgaaf (vooraf weten wat het kost, geen verborgen meerwerk),
 *       dienst.vloertegelwerk (lijm en voorlijm, egaliseren waar nodig, dilataties, voegwerk
 *       inbegrepen, plinten apart incl. afkitten), werkgebied.kern en werkgebied.uitbreiding.
 *   (b) door de eigenaar zelf gepubliceerde tekst op /diensten/badkamer-renovatie (sloopwerk en
 *       afvoer, leidingwerk checken, egaliseren, wand- en vloertegelwerk, sanitair, voeg- en
 *       kitwerk, schone oplevering; "voor een standaard badkamer van 4 tot 6 m2 plan ik 2 tot 3
 *       weken in") en op /diensten/wandtegels (laserwaterpas, kruisingen symmetrisch uitgemeten,
 *       afkitten in tegelkleur, visgraat kost extra materiaalverlies).
 *   (c) de eigen algemene voorwaarden: artikel 7 (meerwerk apart in rekening, ook mondeling of
 *       digitaal overeengekomen meerwerk is bindend) en artikel 4 (annulering binnen 48 uur:
 *       maximaal EUR 400 inclusief btw per ingeplande vakman per dag, alleen als de vrijgevallen
 *       planning redelijkerwijs niet meer opgevuld kan worden).
 *
 * TOEGEPAST PRINCIPE uit kennis/10-pricing-offers.md: P2 ("Show Prices for Common Scenarios",
 * NN/g 2006) schrijft representatieve gevallen voor in plaats van een configurator. Een bedrag
 * mag hier niet, dus is de representatieve-gevallen-vorm toegepast op de helft van de som die
 * wel mag: drie doorgerekende badkamers in vierkante meters tegelwerk. P6 (onverwachte kosten
 * zijn een eigen afhaakreden) draagt de sectie met de posten die alleen in een badkamer zitten.
 *
 * KLANTTAAL, letterlijk geoogst uit de zeven gelezen pagina's op 16-09-2026: "Wil je je
 * badkamervloer en -wanden laten betegelen en ben je benieuwd naar de kosten?" (homedeal) /
 * "Een gemiddelde badkamer heeft een wandoppervlakte van zo'n 20 vierkante meter." (bobex) /
 * "Een tegelzetter die de waterdichting niet meeneemt in zijn offerte is een rode vlag."
 * (klaardeklus) / "Een eerlijke offerte splits arbeid en materiaal, noemt waterdichting en
 * afschot, en zet de aanbetaling erbij." (kemp) / "Meer dan 50 procent vooraf is niet
 * standaard." (kemp) / "Voor particulieren badkamers, zowel renovatie als nieuwbouw hanteren
 * wij een prijs per vierkante meter." (decorstone) / "Bespaar ook niet op de lijm bij het lijmen
 * van de badkamertegels." (multiconcurrent).
 */

const url = `${business.url}/wat-kost-een-badkamer-betegelen`

export const metadata: Metadata = {
  title: 'Wat kost een badkamer betegelen (wand + vloer)?',
  description:
    'Je betaalt per m² tegelwerk, en dat is wand plus vloer. In een badkamer van 2,20 bij 2,60 m die tot het plafond wordt betegeld is dat 29 m² op 5,7 m² vloer. Met de rekenregel, zeven gelezen prijspagina’s en de posten die alleen in een badkamer zitten.',
  alternates: { canonical: '/wat-kost-een-badkamer-betegelen' },
  openGraph: {
    title: 'Wat kost een badkamer betegelen (wand + vloer)? | Van Wonderen Tegelwerken',
    description:
      'De wand is drie tot vijf keer de vloer. Vier prijspagina’s noemen een wandoppervlak, geen van de vier zegt tot welke hoogte er dan getegeld is. Terwijl dat het getal bepaalt.',
    images: ['/images/projects/portfolio-2025-07-laag-1.webp'],
  },
}

/** De drie doorgerekende badkamers. Tegelhoogte 2,60 m (plafond), deur 0,80 × 2,00 m afgetrokken.
 *  wand = 2 × (lengte + breedte) × hoogte − deur. Meetkunde, na te rekenen met een rolmaat. */
const rekenvoorbeelden = [
  {
    maat: '1,80 × 2,20 m',
    label: 'Klein: rijtjeshuis boven',
    vloer: '4,0 m²',
    omtrek: '8,0 m',
    wand: '19,2 m²',
    totaal: '23,2 m²',
    verhouding: '5,8 × de vloer',
    bblWand: '11,3 m²',
    bblTotaal: '15,3 m²',
  },
  {
    maat: '2,20 × 2,60 m',
    label: 'Standaard: wat Jaap 4 tot 6 m² noemt',
    vloer: '5,7 m²',
    omtrek: '9,6 m',
    wand: '23,4 m²',
    totaal: '29,1 m²',
    verhouding: '5,1 × de vloer',
    bblWand: '13,3 m²',
    bblTotaal: '19,0 m²',
  },
  {
    maat: '2,80 × 3,20 m',
    label: 'Ruim: uitbouw of nieuwbouw',
    vloer: '9,0 m²',
    omtrek: '12,0 m',
    wand: '29,6 m²',
    totaal: '38,6 m²',
    verhouding: '4,3 × de vloer',
    bblWand: '16,1 m²',
    bblTotaal: '25,1 m²',
  },
]

/** De zeven volledig gelezen pagina's, 16-09-2026. Elk getal staat letterlijk op de bron. */
const marktmeting = [
  {
    bron: 'homedeal.nl',
    href: 'https://www.homedeal.nl/tegels-zetten/badkamer-betegelen-kosten/',
    soort: 'offerteplatform',
    bedrag: '€ 25 – € 40 per m² arbeid · totaal € 50 – € 300 per m²',
    citaat:
      '“Je badkamerwand van 15 m² laten betegelen met keramische tegels van hogere kwaliteit kost in totaal gemiddeld € 1000.” Pagina zelf: 11/11/2025.',
    hoogte: 'niet vermeld. Volgt uit hun eigen getallen: ten hoogste 1,53 m',
    btw: 'geen tarief',
  },
  {
    bron: 'zoofy.nl',
    href: 'https://zoofy.nl/en/price-guides/bathroom-tiling-costs/',
    soort: 'boekingsplatform',
    bedrag: '€ 50 – € 100 per m² wand én vloer · € 2.450 – € 2.600 voor 25–30 m²',
    citaat:
      '“All mentioned prices include 21% VAT and labour from the affiliated professionals.” Engelstalige prijsgids. Last updated: 22 July 2026.',
    hoogte: 'niet vermeld; noemt wel 25–30 m² tegelwerk voor een hele badkamer',
    btw: '21%',
  },
  {
    bron: 'bobex.nl',
    href: 'https://www.bobex.nl/nl-nl/badkamerrenovatie/betegelen/',
    soort: 'offerteplatform',
    bedrag: '€ 25 – € 40 per m² arbeid · € 1.100 – € 5.000 totaal · sloop € 300',
    citaat:
      '“Een gemiddelde badkamer heeft een wandoppervlakte van zo’n 20 vierkante meter.” Elders: badkamervloer van 8 m².',
    hoogte: 'niet vermeld. Volgt uit hun eigen getallen: ten hoogste 1,90 m',
    btw: 'geen tarief',
  },
  {
    bron: 'klaardeklus.nl',
    href: 'https://www.klaardeklus.nl/cms/blog/badkamer-betegelen-kosten',
    soort: 'offerteplatform',
    bedrag: '€ 25 – € 40 per m² arbeid · waterdichte onderlaag € 10 – € 20 per m² extra',
    citaat:
      '“Een tegelzetter die de waterdichting niet meeneemt in zijn offerte is een rode vlag.” Prijzen gedateerd: vrijdag 15 mei 2026.',
    hoogte: 'niet vermeld; geen voorbeeld met oppervlakten',
    btw: 'geen tarief',
  },
  {
    bron: 'multiconcurrent.nl',
    href: 'https://multiconcurrent.nl/tegels-zetten/badkamer-betegelen-kosten/',
    soort: 'blog van een aannemersbedrijf',
    bedrag: '€ 1.100 – € 2.000 voor “een badkamer van 20 m2”',
    citaat:
      '“Bespaar ook niet op de lijm bij het lijmen van de badkamertegels.” Geen datum bij de bedragen.',
    hoogte: 'niet vermeld; ook niet of die 20 m² vloer of tegelwerk is',
    btw: 'geen tarief',
  },
  {
    bron: 'kemptegelwerk.nl',
    href: 'https://www.kemptegelwerk.nl/advies/kosten-badkamer-betegelen',
    soort: 'tegelzetter (eenmanszaak, Haarlem)',
    bedrag: '€ 45 – € 75 per m² arbeid, excl. materiaal · waterdichting € 15 – € 25 per m² · afschot € 250 – € 450',
    citaat:
      '“Voorbeeld: 35 m² wand plus 12 m² vloer (47 m²) tegen 55 euro komt op circa 2.585 euro arbeid.” Bijgewerkt 2026-08-04.',
    hoogte: 'niet vermeld. Volgt uit hun eigen getallen: ten hoogste 2,64 m, dus tot het plafond',
    btw: '21%',
  },
  {
    bron: 'decorstone.nl',
    href: 'https://decorstone.nl/prijzen-badkamer-betegelen.htm',
    soort: 'tegelzetter (eenmanszaak)',
    bedrag: '€ 56,00 per m² tegelwerk, excl. 21% btw · 25 m² = € 1.400 excl. / € 1.694 incl.',
    citaat:
      '“Voor particulieren badkamers, zowel renovatie als nieuwbouw hanteren wij een prijs per vierkante meter.” Rekenvoorbeeld: 20 m² wanden + 5 m² vloer.',
    hoogte: 'niet vermeld. Volgt uit hun eigen getallen: ten hoogste 2,41 m',
    btw: '21%',
  },
]

/** Posten die in een badkamer zitten en in een kale vloerprijs per m² per definitie niet.
 *  Bedragen zijn van de gelezen bronnen, nooit van Van Wonderen. */
const badkamerposten = [
  {
    post: 'De waterdichting onder de tegels',
    uitleg:
      'Tegels en voegwerk zijn zelf niet waterdicht; de kering is een laag eronder. Dit is de post die op een vloerprijs per m² nooit zit en in een badkamer altijd hoort. Drie van de zeven gelezen pagina’s prijzen hem apart: klaardeklus.nl noemt € 10 tot € 20 per m² extra, kemptegelwerk.nl € 15 tot € 25 per m² voor de natte zone, en decorstone.nl rekent kim en band mee in zijn m²-prijs.',
  },
  {
    post: 'Afschot naar de afvoer',
    uitleg:
      'Een douchevloer zonder douchebak moet aflopen naar de goot of het putje. Dat is vlakwerk vóór het tegelwerk, en het is de reden dat een tweede laag tegels op een bestaande douchevloer zelden past. kemptegelwerk.nl prijst het apart met € 250 tot € 450; de andere zes gelezen pagina’s noemen geen bedrag.',
  },
  {
    post: 'Sloop en afvoer van de oude tegels',
    uitleg:
      'Drie van de zeven gelezen pagina’s zetten hier een getal bij, en die getallen lopen ver uiteen: bobex.nl € 300 voor het sloopwerk, zoofy.nl € 400 voor het verwijderen plus € 400 tot € 500 containerhuur, klaardeklus.nl € 25 tot € 30 per uur plus € 50 tot € 150 container.',
  },
  {
    post: 'Snij- en pasrondes die een vloer niet heeft',
    uitleg:
      'In een badkamer komen doorvoeren, een inbouwreservoir, een nis, kranen en een afvoerputje in het tegelwerk te liggen. Elk daarvan is pas- en snijwerk in plaats van rechttoe rechtaan leggen, en het zit in dezelfde m² die je op papier voor vol aanziet.',
  },
  {
    post: 'De onderste rij wandtegels, ná de vloer',
    uitleg:
      'Die rij gaat er als laatste op en wordt op maat gezaagd, omdat de naad tussen wand en vloer geen voeg maar een kitrand hoort te zijn. Het is een derde beurt in plaats van een tweede, en dat kost tijd.',
  },
  {
    post: 'Hoekprofielen en kitwerk',
    uitleg:
      'Een badkamer heeft binnen- en buitenhoeken die een vloer niet heeft. decorstone.nl noemt tegelhoekstrips als inbegrepen post; hoeveel strekkende meter dat bij jou is, hangt van de plattegrond af en niet van het aantal m².',
  },
]

const faqs = [
  {
    q: 'Wat kost een complete badkamer betegelen bij Van Wonderen Tegelwerken?',
    a: 'Daar staat op deze pagina geen bedrag, en dat is een bewuste keuze: ik heb geen tarief per m² gepubliceerd en ik ga er hier ook geen verzinnen. Wat ik je wel geef is de helft van de som die je zelf kunt maken en die je nergens anders krijgt: hoeveel vierkante meter tegelwerk jouw badkamer is. Stuur me daarna de afmetingen en een paar foto’s via WhatsApp. Je krijgt binnen 1 werkdag antwoord en binnen 5 dagen een gespecificeerde offerte zonder kleine lettertjes, met de posten los.',
  },
  {
    q: 'Hoeveel m² tegelwerk zit er in een gemiddelde badkamer?',
    a: 'Reken zelf: wand = omtrek × tegelhoogte, min de deuropening, en daar de vloer bij op. Een badkamer van 2,20 bij 2,60 meter heeft 5,7 m² vloer en 9,6 meter omtrek; tot een plafond van 2,60 meter is dat 23,4 m² wand, dus 29 m² tegelwerk in totaal. Dat is ruim vijf keer je vloeroppervlak. In een kleinere badkamer loopt die verhouding op: bij 1,80 bij 2,20 meter is het bijna zes keer. Dat komt doordat de omtrek meegroeit met de lengte van de muren en het vloeroppervlak met het kwadraat.',
  },
  {
    q: 'Waarom is dat belangrijk als ik alleen naar de prijs per m² kijk?',
    a: 'Omdat “per m²” bij een badkamer bijna altijd per m² tegelwerk is, en niet per m² vloer. Neem je een tarief van € 40 per m² en vermenigvuldig je dat met je vloeroppervlak van 5,7 m², dan kom je op € 228. Reken je met de 29 m² die er werkelijk ligt, dan is het € 1.160. De fout die je op het aantal vierkante meters maakt is dus veel groter dan het verschil tussen twee tegelzetters. Het tarief is de kleine knop; het aantal m² is de grote.',
  },
  {
    q: 'Waarom lopen de wandoppervlakken op die prijspagina’s zo uiteen?',
    a: 'Omdat er een getal ontbreekt: tot welke hoogte er betegeld wordt. Vier van de zeven pagina’s die ik op 16 september 2026 volledig las noemen een voorbeeld met wand én vloer, en geen van de vier zegt tot welke hoogte. Je kunt die hoogte uit hun eigen twee getallen terugrekenen. Ik heb dat gedaan met de gunstigste plattegrond die er bestaat, een vierkante badkamer, want die heeft bij een gegeven oppervlak de kortste omtrek. Zo is het een bovengrens. Dan komt homedeal.nl uit op ten hoogste 1,53 meter, bobex.nl op 1,90 meter, decorstone.nl op 2,41 meter en kemptegelwerk.nl op 2,64 meter. Alleen dat laatste voorbeeld gaat aantoonbaar tot het plafond.',
  },
  {
    q: 'Scheelt het echt geld om niet tot het plafond te betegelen?',
    a: 'Ja, en het is de grootste knop die je zelf in handen hebt. De bouwregels eisen in een nieuwbouwbadkamer dat de wand geen water opneemt tot 1,2 meter, en bij bad of douche tot 2,1 meter over minstens 3 meter lengte (Besluit bouwwerken leefomgeving artikel 4.120). Betegel je precies dat minimum in plaats van tot een plafond van 2,60 meter, dan gaat het tegelwerk in alle drie de badkamers hierboven met ongeveer 35% omlaag: van 29,1 naar 19,0 m² in de standaardmaat. Wat je daarvoor terugkrijgt is stucwerk of verf boven de tegels, en dat kost ook geld. Dat deel van de besparing valt dus weg. Wat er precies wel en niet moet, staat op mijn pagina over betegelen tot het plafond.',
  },
  {
    q: 'Geldt op het tegelwerk in een badkamer 9% of 21% btw?',
    a: '21%, over arbeid én materiaal. Tegelen staat niet in het rijtje werkzaamheden waarvoor de Belastingdienst het verlaagde tarief van 9% noemt bij woningen ouder dan 2 jaar. Ik heb dat uitgezocht en met het citaat van de Belastingdienst erbij gezet op mijn pagina over de prijs per m² voor een vloer. Twee van de zeven pagina’s die ik voor deze vraag las komen zelfstandig tot hetzelfde: kemptegelwerk.nl schrijft “Nee. De Belastingdienst schaart tegelen onder 21%”, en decorstone.nl prijst expliciet exclusief 21% btw.',
  },
  {
    q: 'Zit de waterdichting in de prijs, of komt die er nog bij?',
    a: 'Dat moet je per offerte nakijken, want de gelezen pagina’s doen het alle drie anders: klaardeklus.nl rekent € 10 tot € 20 per m² extra, kemptegelwerk.nl € 15 tot € 25 per m² voor de natte zone, en decorstone.nl heeft kim en band in zijn m²-prijs zitten. Het is de post die na oplevering onzichtbaar is, en dus de post waar het bij een prijsvergelijking stilletjes misgaat. Hoe die laag is opgebouwd en hoe je na het tegelen nog kunt vaststellen dat hij er ligt, staat op mijn pagina over een badkamer waterdicht maken.',
  },
  {
    q: 'Welke regels moeten er op de offerte staan om twee prijzen eerlijk te vergelijken?',
    a: 'Acht. Eén: het aantal m² wandtegelwerk, met de tegelhoogte erbij. Twee: het aantal m² vloertegelwerk, apart. Drie: of lijm, voorlijm en voegwerk in het tarief zitten. Vier: de waterdichting van de natte zone, als eigen regel. Vijf: het afschot van de douchevloer. Zes: sloop en afvoer van het oude tegelwerk. Zeven: de tegels zelf. Acht: het btw-tarief. Zonder de tegelhoogte bij regel één is de rest van de vergelijking zinloos, want dan vergelijk je twee verschillende hoeveelheden werk. Kemptegelwerk.nl verwoordt dezelfde eis zo: “Een eerlijke offerte splits arbeid en materiaal, noemt waterdichting en afschot, en zet de aanbetaling erbij.”',
  },
  {
    q: 'Wat zit er bij jou in het tegelwerk en wat komt apart?',
    a: 'In het tegelwerk zitten de lijm en de voorlijm, egaliseren waar dat oppervlakkig kan, de dilataties op de juiste plek en het voegwerk. Apart op de offerte komen: de tegels zelf, los egaliseren als de ondergrond echt uit het lood ligt, en plinten per strekkende meter inclusief afkitten. Doe ik de hele badkamer, dan staan sloopwerk en afvoer, het controleren van leiding- en afvoerwerk en het plaatsen van sanitair er ook als eigen posten bij; dat staat zo op mijn pagina over badkamerrenovatie. Meerwerk wordt afzonderlijk in rekening gebracht. Dat staat in artikel 7 van mijn algemene voorwaarden, en let op: ook via WhatsApp afgesproken meerwerk is bindend. Laat het dus altijd in een bericht terugkomen.',
  },
  {
    q: 'Hoe lang duurt het, en kost een visgraatpatroon extra?',
    a: 'Voor een standaard badkamer van 4 tot 6 m² plan ik 2 tot 3 weken in, voor grote of complexe ruimtes 3 tot 4 weken. Een visgraat of een ander decoratief verband doe ik, maar daar reken ik extra materiaalverlies voor; daar is niet omheen te komen, want je zaagt meer tegels doormidden. kemptegelwerk.nl zegt hetzelfde over de arbeidskant: “Visgraat, grootformaat vanaf 120×60, sloop of egaliseren duwen de arbeid omhoog.”',
  },
  {
    q: 'Wanneer ben ik bij jou aan het verkeerde adres?',
    a: 'Als je alleen de laagste prijs per m² zoekt. Ik ben een eenmanszaak uit Breda en doe elke klus zelf, zonder onderaannemers. Ik hoef dus niet de goedkoopste te zijn en ik ben ook niet de snelst beschikbare. En als je badkamer buiten mijn gebied ligt: mijn kerngebied is Breda, Teteringen, Princenhage, Bavel, Ulvenhout, Effen en Dorst, met Oosterhout, Etten-Leur, Rijen, Tilburg en Zundert erbij, en grotere projecten verder weg op aanvraag.',
  },
]

export default function WatKostBadkamerBetegelenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: business.url },
              { name: 'Diensten', url: `${business.url}/diensten` },
              { name: 'Badkamer renovatie', url: `${business.url}/diensten/badkamer-renovatie` },
              { name: 'Wat kost een badkamer betegelen', url },
            ])
          ),
        }}
      />

      {/* ─── HET ANTWOORD ─────────────────────── */}
      <section className="relative overflow-hidden bg-paper pt-8 pb-20 lg:pb-24">
        <div aria-hidden className="absolute inset-0 -z-10 tile-pattern opacity-30" />
        <div className="container-tight">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 pt-8 text-sm text-primary-500">
            <Link href="/" className="hover:text-accent-600">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/diensten" className="hover:text-accent-600">Diensten</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/diensten/badkamer-renovatie" className="hover:text-accent-600">Badkamer renovatie</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-600">Wat kost een badkamer betegelen</span>
          </nav>

          <div className="mt-12 max-w-3xl">
            <div className="eyebrow">Vraag uit de praktijk</div>
            <h1
              id="wat-kost-een-badkamer-betegelen"
              className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-primary-900 sm:text-5xl"
            >
              Wat kost een badkamer betegelen, wand en vloer samen?
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-primary-900">
              Een badkamer wordt niet afgerekend per vierkante meter vloer, maar per vierkante
              meter tegelwerk, en dat is wand plus vloer. In een badkamer van 2,20 bij 2,60 meter
              die tot het plafond wordt betegeld, is dat 29 m² tegelwerk op 5,7 m² vloer: ruim vijf
              keer zoveel. Wie een tarief per m² op zijn vloeroppervlak loslaat, rekent zich dus een
              factor vijf arm.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-primary-600">
              Dat aantal vierkante meters kun je zelf uitrekenen, en hieronder staat hoe. Het is de
              helft van de som die je nergens krijgt: ik heb op 16 september 2026 zeven Nederlandse
              pagina&apos;s over deze vraag volledig gelezen, en geen van de zeven zet de rekenregel
              erbij waarmee je je eigen wandoppervlak uit je eigen afmetingen haalt. Vier ervan
              noemen wél een voorbeeld met een wand- en een vloeroppervlak, zonder erbij te zeggen
              tot welke hoogte er dan betegeld is. Terwijl dat precies het getal is dat de uitkomst
              bepaalt.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-primary-600">
              Waar ik eerlijk over ben: hieronder staat geen bedrag van mij. Ik heb geen tarief per
              m² gepubliceerd, en een getal opschrijven dat ik voor jouw badkamer niet kan waarmaken
              is precies wat ik de vergelijkingssites zie doen. Over de tarieven die wél circuleren
              en over het btw-tarief dat erbij hoort, schreef ik eerder een aparte pagina:{' '}
              <Link href="/wat-kost-vloer-tegelen-per-m2" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
                wat kost vloer tegelen per m²
              </Link>
              . Deze pagina gaat over het andere getal in dezelfde som.
            </p>

            <p className="mt-8 text-sm text-primary-500">
              Jaap van Wonderen, tegelzetter in Breda · geschreven 16 september 2026 · met de zeven
              gelezen bronnen erbij, zodat je het kunt narekenen
            </p>
          </div>
        </div>
      </section>

      {/* ─── DE REKENSOM ──────────────────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Het getal dat nergens staat</div>
          <h2
            id="hoeveel-m2-tegelwerk-zit-er-in-jouw-badkamer"
            className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl"
          >
            Hoeveel m² tegelwerk zit er in jouw badkamer?
          </h2>

          <div className="mt-8 max-w-2xl space-y-4">
            <p className="text-base leading-relaxed text-primary-900">
              Drie maten met een rolmaat en je hebt het: de lengte, de breedte en de hoogte waarop
              je wilt stoppen. Daarna is het één regel.
            </p>
            <div className="border-l-2 border-accent-600 py-2 pl-6">
              <p className="font-display text-xl leading-relaxed text-primary-900">
                wand = 2 × (lengte + breedte) × tegelhoogte − de deuropening
              </p>
              <p className="mt-3 text-base leading-relaxed text-primary-600">
                en daar tel je de vloer (lengte × breedte) bij op. Dat is het aantal m² tegelwerk
                waarover je offerte gaat.
              </p>
            </div>
            <p className="text-base leading-relaxed text-primary-600">
              Een raam trek je er ook af, een inloopdouche zonder wand telt gewoon mee. Meer is het
              niet. Het is meetkunde, geen schatting, en je kunt het narekenen.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <caption className="sr-only">
                Drie badkamers doorgerekend: vloeroppervlak, omtrek, wandoppervlak en totaal
                tegelwerk bij een tegelhoogte van 2,60 meter
              </caption>
              <thead>
                <tr className="border-b border-primary-300">
                  <th scope="col" className="py-4 pr-6 text-sm font-semibold uppercase tracking-wide text-primary-900">Badkamer</th>
                  <th scope="col" className="py-4 pr-6 text-sm font-semibold uppercase tracking-wide text-primary-900">Vloer</th>
                  <th scope="col" className="py-4 pr-6 text-sm font-semibold uppercase tracking-wide text-primary-900">Omtrek</th>
                  <th scope="col" className="py-4 pr-6 text-sm font-semibold uppercase tracking-wide text-primary-900">Wand tot 2,60 m</th>
                  <th scope="col" className="py-4 pr-6 text-sm font-semibold uppercase tracking-wide text-primary-900">Tegelwerk totaal</th>
                  <th scope="col" className="py-4 text-sm font-semibold uppercase tracking-wide text-primary-900">Verhouding</th>
                </tr>
              </thead>
              <tbody>
                {rekenvoorbeelden.map((r) => (
                  <tr key={r.maat} className="border-b border-mist align-top">
                    <td className="py-5 pr-6">
                      <div className="font-semibold text-primary-900">{r.maat}</div>
                      <p className="mt-1 text-sm text-primary-500">{r.label}</p>
                    </td>
                    <td className="py-5 pr-6 text-base tabular-nums text-primary-600">{r.vloer}</td>
                    <td className="py-5 pr-6 text-base tabular-nums text-primary-600">{r.omtrek}</td>
                    <td className="py-5 pr-6 text-base tabular-nums text-primary-600">{r.wand}</td>
                    <td className="py-5 pr-6 text-base font-semibold tabular-nums text-primary-900">{r.totaal}</td>
                    <td className="py-5 text-base tabular-nums text-accent-600">{r.verhouding}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-base leading-relaxed text-primary-900">
                Let op wat er in de rechterkolom gebeurt: hoe kléiner de badkamer, hoe méér
                tegelwerk per vierkante meter vloer. Dat is geen toeval en geen prijsbeleid. De
                omtrek groeit mee met de lengte van je muren, het vloeroppervlak met het kwadraat.
                Een badkamer van 4 m² is dus niet half zo veel werk als een van 9 m². Hij is
                ongeveer zestig procent van het werk.
              </p>
              <p className="text-base leading-relaxed text-primary-600">
                De tweede knop is de tegelhoogte, en dat is de enige knop waar je zelf helemaal over
                gaat. De bouwregels eisen in een nieuwbouwbadkamer dat de wand geen water opneemt
                tot 1,2 meter, en bij het bad of de douche tot 2,1 meter over minstens 3 meter
                lengte. Betegel je precies dat minimum in plaats van tot een plafond van 2,60 meter,
                dan daalt het tegelwerk in alle drie de badkamers hierboven met ongeveer 35%.
              </p>
              <p className="text-base leading-relaxed text-primary-600">
                Daar staat wel iets tegenover: boven de tegels moet dan gestuct of geverfd worden,
                en dat kost ook geld. Wat de bouwregels precies eisen, waar het smaak wordt en
                waarom een scheef plafond een reëel argument is om lager te stoppen, staat op{' '}
                <Link href="/badkamer-betegelen-tot-plafond" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
                  de pagina over betegelen tot het plafond
                </Link>
                .
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="border-l border-primary-300 pl-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                  Hetzelfde, op het wettelijk minimum
                </div>
                <ul className="mt-6 divide-y divide-mist border-y border-mist">
                  {rekenvoorbeelden.map((r) => (
                    <li key={r.maat} className="flex items-baseline justify-between gap-4 py-4">
                      <span className="text-sm text-primary-600">{r.maat}</span>
                      <span className="text-base tabular-nums text-primary-900">
                        {r.totaal} → {r.bblTotaal}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-primary-500">
                  Gerekend met 1,2 meter rondom plus 2,1 meter over 3 meter lengte bij de douche,
                  de eisen uit het Besluit bouwwerken leefomgeving artikel 4.120 voor nieuwbouw.
                  Bij een bestaande badkamer is de ondergrens 1 meter (artikel 3.65).
                </p>
              </div>
            </div>
          </div>

          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-primary-500">
            Eerlijk over de aannames in de tabel: tegelhoogte 2,60 meter, een rechthoekige
            plattegrond, en één deur van 0,80 bij 2,00 meter eraf. Een raam, een schuin dak of een
            vrijstaande wand verandert de uitkomst, en dan doe je de som opnieuw met jouw maten. De
            rekenregel zelf verandert niet.
          </p>
        </div>
      </section>

      {/* ─── DE METING ────────────────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Wat de markt publiceert</div>
          <h2
            id="zeven-prijspaginas-naast-elkaar"
            className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl"
          >
            Zeven pagina&apos;s over deze vraag, en de hoogte die er bij geen van zevenen bij staat
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Dit zijn de zeven pagina&apos;s die ik op 16 september 2026 volledig gelezen heb, met
            per stuk wat er letterlijk op staat. Twee ervan zijn een tegelzetter die zijn eigen
            prijs publiceert. Dat is een verschil met de vraag over vloertegelwerk, waar ik alleen
            leadplatforms tegenkwam.
          </p>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <caption className="sr-only">
                Zeven gelezen prijspagina&apos;s met bedrag, btw-vermelding en de tegelhoogte die
                hun voorbeeld impliceert
              </caption>
              <thead>
                <tr className="border-b border-primary-300">
                  <th scope="col" className="py-4 pr-6 text-sm font-semibold uppercase tracking-wide text-primary-900">Bron</th>
                  <th scope="col" className="py-4 pr-6 text-sm font-semibold uppercase tracking-wide text-primary-900">Wat er staat</th>
                  <th scope="col" className="py-4 pr-6 text-sm font-semibold uppercase tracking-wide text-primary-900">Tegelhoogte</th>
                  <th scope="col" className="py-4 text-sm font-semibold uppercase tracking-wide text-primary-900">Btw</th>
                </tr>
              </thead>
              <tbody>
                {marktmeting.map((m) => (
                  <tr key={m.bron} className="border-b border-mist align-top">
                    <td className="py-5 pr-6">
                      <a
                        href={m.href}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="font-semibold text-primary-900 underline decoration-primary-300 underline-offset-4 hover:text-accent-600"
                      >
                        {m.bron}
                      </a>
                      <p className="mt-1 text-sm text-primary-500">{m.soort}</p>
                    </td>
                    <td className="py-5 pr-6">
                      <p className="text-base text-primary-900">{m.bedrag}</p>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-primary-500">{m.citaat}</p>
                    </td>
                    <td className="py-5 pr-6 max-w-[15rem] text-sm leading-relaxed text-primary-600">{m.hoogte}</td>
                    <td className="py-5 text-base text-primary-600">{m.btw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { getal: '4 van 7', tekst: 'noemt een voorbeeld met wand- én vloeroppervlak. 0 van 7 zet de tegelhoogte erbij.' },
              { getal: '0 van 7', tekst: 'geeft je een rekenregel om je eigen wandoppervlak uit je eigen afmetingen te halen.' },
              { getal: '3 van 7', tekst: 'noemt het btw-tarief van 21%. Bij de vloervraag waren dat er 0 van 6.' },
              { getal: '2 van 7', tekst: 'is een tegelzetter met een eigen werkplaats die zijn prijs publiceert.' },
            ].map((s) => (
              <div key={s.getal} className="border-t border-primary-300 pt-6">
                <div className="font-display text-3xl font-bold tabular-nums text-accent-600">{s.getal}</div>
                <p className="mt-3 text-base leading-relaxed text-primary-600">{s.tekst}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl space-y-6">
            <p className="text-base leading-relaxed text-primary-900">
              Die derde kolom is het punt van deze pagina. Geen van de zeven schrijft de tegelhoogte
              op, maar vier van hen verraden hem: als je hun wandoppervlak deelt door de omtrek die
              bij hun vloeroppervlak hoort, rolt de hoogte eruit. Ik heb dat per bron gedaan met de
              gunstigste plattegrond die bestaat: een vierkante badkamer heeft bij een gegeven
              oppervlak de kortste omtrek. Zo is het een bovengrens en doe ik niemand tekort.
            </p>
            <p className="text-base leading-relaxed text-primary-600">
              De uitkomst: het voorbeeld van homedeal.nl gaat tot ten hoogste 1,53 meter, dat van
              bobex.nl tot ten hoogste 1,90 meter, dat van decorstone.nl tot 2,41 meter en dat van
              kemptegelwerk.nl tot 2,64 meter. Alleen de laatste gaat aantoonbaar tot het plafond.
              Wie de € 1.000 van homedeal.nl voor &ldquo;een badkamerwand van 15 m²&rdquo; als
              maatstaf neemt voor een badkamer die tot het plafond betegeld wordt, rekent met
              ongeveer een derde van het werk.
            </p>
            <p className="text-base leading-relaxed text-primary-600">
              De rekenregel is trouwens te controleren op hun eigen cijfers. Kemptegelwerk.nl
              publiceert &ldquo;35 m² wand plus 12 m² vloer&rdquo;. Een badkamer van 3,00 bij 4,00
              meter heeft 12 m² vloer en 14 meter omtrek; 14 × 2,60 − 1,60 voor de deur = 34,8 m².
              Dat is hun getal op 0,2 m² na, zonder dat zij de hoogte noemen.
            </p>
          </div>

          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-primary-500">
            Eerlijk over de grens van deze telling: werkspot.nl staat in mijn meting als de pagina
            die deze vraag in Nederland bezit, maar weigerde mijn verzoek (HTTP 403) en is dus niet
            gelezen. De tellingen hierboven gaan over de zeven pagina&apos;s in de tabel en nergens
            over &ldquo;de hele markt&rdquo;. De ranglijst zelf komt uit een meting op een
            Bing-index van 16 september 2026; Google zelf blokkeert mijn meetinstrument en is dus
            ongemeten.
          </p>
        </div>
      </section>

      {/* ─── BADKAMERPOSTEN ───────────────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Waarom een vloerprijs hier niet werkt</div>
          <h2
            id="posten-die-alleen-in-een-badkamer-zitten"
            className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl"
          >
            Zes posten die in een badkamer zitten en in een kale vloerprijs niet
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Ook als je het aantal vierkante meters goed hebt, is een tarief voor een woonkamervloer
            geen tarief voor een badkamer. Er zit werk in dat een vloer niet kent. De bedragen
            hieronder zijn van de gelezen bronnen: het zijn hun schattingen en niet mijn prijs.
          </p>

          <ul className="mt-12 grid gap-x-16 gap-y-2 md:grid-cols-2">
            {badkamerposten.map((p) => (
              <li key={p.post} className="border-t border-mist py-6">
                <h3 className="font-display text-lg font-semibold text-primary-900">{p.post}</h3>
                <p className="mt-2 text-base leading-relaxed text-primary-600">{p.uitleg}</p>
              </li>
            ))}
          </ul>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-primary-600">
            Die eerste post is de belangrijkste en tegelijk de enige die je na oplevering niet meer
            kunt zien. Hoe de waterkering is opgebouwd, op welke vlakken hij hoort en hoe je
            achteraf nog kunt vaststellen dat hij er ligt, staat op{' '}
            <Link href="/badkamer-waterdicht-maken" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
              de pagina over een badkamer waterdicht maken
            </Link>
            . En waarom de onderste rij wandtegels er pas ná de vloer op gaat, met een kitrand in
            plaats van een voeg, staat op{' '}
            <Link href="/eerst-vloer-of-wand-betegelen" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
              eerst de vloer of eerst de wand
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ─── WAT ER BIJ MIJ IN ZIT ────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Eerlijk over het bedrag</div>
          <h2
            id="waarom-hier-geen-tarief-van-mij-staat"
            className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl"
          >
            Wat je van mij krijgt in plaats van een vanafprijs
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-base leading-relaxed text-primary-900">
                Ik heb geen tarief per m² gepubliceerd en ik ga er hier ook geen neerzetten. Wat een
                badkamer werkelijk kost hangt af van dingen die ik pas ken als ik ze zie: het
                tegelformaat, de staat van de wanden en de ondervloer, hoeveel pas- en snijwerk de
                plattegrond vraagt, en of er afschot en waterdichting bij komen. Een vanafprijs
                geldt voor de makkelijkste badkamer die ik dat jaar gedaan heb, en die is de jouwe
                meestal niet.
              </p>
              <p className="text-base leading-relaxed text-primary-600">
                Wat ik wél toezeg: stuur me via WhatsApp de afmetingen van de ruimte, de hoogte
                waarop je wilt stoppen en een paar foto&apos;s, dan heb je binnen 1 werkdag antwoord
                en binnen 5 dagen een gespecificeerde offerte zonder kleine lettertjes.
                Gespecificeerd betekent hier: wand- en vloertegelwerk als aparte regels met de
                hoeveelheid erbij, zodat je ze naast een andere offerte kunt leggen in plaats van
                twee eindbedragen te vergelijken.
              </p>
              <p className="text-base leading-relaxed text-primary-600">
                In het tegelwerk zitten de lijm en de voorlijm, oppervlakkig egaliseren, de
                dilataties op de juiste plek en het voegwerk. Apart op de offerte komen de tegels
                zelf, los egaliseren als de ondergrond echt uit het lood ligt, en plinten per
                strekkende meter inclusief afkitten. Doe ik de hele ruimte, dan staan het sloopwerk
                en de afvoer, het controleren van leiding- en afvoerwerk en het plaatsen van
                sanitair er als eigen posten bij. Dat is de werkwijze die op{' '}
                <Link href="/diensten/badkamer-renovatie" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
                  mijn pagina over badkamerrenovatie
                </Link>{' '}
                staat.
              </p>
              <p className="text-base leading-relaxed text-primary-600">
                Op het tegelwerk en het voegwerk geef ik 5 jaar garantie, op kitwerk 1 jaar. Dat
                hoort in een prijsvergelijking thuis: een lagere prijs zonder garantietermijn is
                geen lagere prijs. Meerwerk breng ik afzonderlijk in rekening. Dat staat in
                artikel 7 van{' '}
                <Link href="/algemene-voorwaarden" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
                  mijn algemene voorwaarden
                </Link>
                , en ook een afspraak via WhatsApp telt daar mee. Laat het dus altijd in een bericht
                terugkomen, dan heb je het zwart op wit.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="border-l border-primary-300 pl-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                  De acht regels op je offerte
                </div>
                <ol className="mt-6 list-none space-y-4">
                  {[
                    'm² wandtegelwerk, mét de tegelhoogte erbij',
                    'm² vloertegelwerk, apart',
                    'lijm, voorlijm en voegwerk: erin of niet',
                    'waterdichting van de natte zone',
                    'afschot van de douchevloer',
                    'sloop en afvoer van het oude tegelwerk',
                    'de tegels zelf',
                    'het btw-tarief',
                  ].map((t, i) => (
                    <li key={t} className="flex gap-4 text-base leading-relaxed text-primary-600">
                      <span className="font-display text-sm tabular-nums text-accent-600">{i + 1}</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 text-sm leading-relaxed text-primary-500">
                  Zonder de tegelhoogte bij regel 1 is de rest van de vergelijking zinloos: dan leg
                  je twee verschillende hoeveelheden werk naast elkaar. Dit lijstje geldt voor mij
                  net zo goed als voor ieder ander. Vraag het dus ook aan mij.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VRAGEN ───────────────────────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Wat mensen hierna vragen</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Elf vervolgvragen, kort beantwoord
          </h2>
          <dl className="mt-12 divide-y divide-mist border-y border-mist">
            {faqs.map((f) => (
              <div key={f.q} className="py-8">
                <dt className="font-display text-lg font-semibold text-primary-900">{f.q}</dt>
                <dd className="mt-3 text-base leading-relaxed text-primary-600">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── WAT HIER NIET STAAT ──────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Eerlijk over de grens</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Wat hier niet staat, en waarom niet
          </h2>
          <ul className="mt-12 divide-y divide-mist border-y border-mist">
            {[
              'Mijn tarief per m². Ik heb er geen gepubliceerd. De bedragen in de tabel hierboven zijn van andere partijen: niet mijn prijs en ook geen indicatie ervan.',
              'Een totaalbedrag voor jouw badkamer. Dat kan pas als het aantal m², de tegelhoogte en de staat van de ondergrond bekend zijn. De eerste twee weet je na deze pagina zelf; de derde zie ik het liefst op een foto.',
              'Het sanitair, de leidingen en de elektra. Deze pagina gaat over het tegelwerk. Een complete badkamerrenovatie is een groter verhaal met meer posten, en dat staat op mijn dienstenpagina.',
              'Een percentage voor snijverlies en breukreserve. Dat hangt af van het patroon en de plattegrond, en een getal noemen zou hier een schatting zijn en geen som. Wat er altijd geldt: bestel in één keer genoeg, want een nabestelling wijkt vrijwel altijd af in kleur of maat.',
              'Voorrijkosten en puinafvoer als bedrag van mij. Die heb ik nergens gepubliceerd. Volgens de Autoriteit Consument & Markt horen onvermijdbare bijkomende kosten sowieso in de prijs die je als eerste ziet. Vraag bij elke offerte na hoe dat verwerkt is.',
              'Een oordeel over de prijs van de twee tegelzetters in de tabel. Ik zet hun gepubliceerde cijfers erbij omdat ze het enige zijn wat in deze zoekresultaten niet van een platform komt. Wie het beter doet, bepaalt hun klant en niet ik.',
            ].map((t) => (
              <li key={t} className="py-6 text-base leading-relaxed text-primary-600">
                {t}
              </li>
            ))}
          </ul>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-primary-600">
            Overweeg je over het bestaande tegelwerk heen te tegelen omdat je hoopt dat het
            goedkoper is? Op een badkamervloer botst dat vaak op het afschot naar de douchegoot;
            die rekensom staat uitgewerkt op{' '}
            <Link href="/tegelen-over-bestaande-tegels" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
              de pagina over tegelen over bestaande tegels
            </Link>
            . En in welke plaatsen ik kom, staat op{' '}
            <Link href="/werkgebied" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
              de pagina over mijn werkgebied
            </Link>
            .
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/wat-kost-vloer-tegelen-per-m2" className="btn-secondary">
              Wat kost vloer tegelen per m²?
            </Link>
            <Link href="/badkamer-betegelen-tot-plafond" className="btn-secondary">
              Tot het plafond betegelen?
            </Link>
            <Link href="/badkamer-waterdicht-maken" className="btn-secondary">
              Hoe wordt het waterdicht?
            </Link>
            <Link href="/diensten/badkamer-renovatie" className="btn-secondary">
              Badkamerrenovatie
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────── */}
      <section className="bg-paper pb-20 lg:pb-24">
        <div className="container-tight rounded-3xl bg-primary-900 p-12 text-center text-paper lg:p-16">
          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl">
            Je m² weet je nu. Wil je er een bedrag bij?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-primary-300">
            Stuur de lengte, de breedte, de hoogte waarop je wilt stoppen en een paar foto&apos;s
            via WhatsApp. Je krijgt binnen 1 werkdag antwoord en binnen 5 dagen een gespecificeerde
            offerte, met wand en vloer als aparte regels.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${business.phoneE164}`} className="btn-accent">
              <Phone className="h-4 w-4" /> {business.phone}
            </a>
            <a
              href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                'Hoi Jaap, ik wil mijn badkamer laten betegelen. De ruimte is ongeveer … bij … meter en ik wil tegelen tot … meter hoog. Kun je me een prijs geven?'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !border-paper !text-paper hover:!bg-paper hover:!text-primary-900"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Jaap
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
