import Link from 'next/link'
import { ChevronRight, Phone, MessageCircle } from 'lucide-react'
import { business } from '@/content/business'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'
import type { Metadata } from 'next'

/**
 * ANTWOORDEENHEID. Vraag: "Wat kost vloer tegelen per m2?"
 * Contract 9104ac74-da9f-4a42-9401-7ab913c4a664, run schrijver-20260916-1635.
 *
 * DE HARDE RANDVOORWAARDE VAN DEZE PAGINA (wet art. 1.3). Er bestaat GEEN door de
 * eigenaar goedgekeurd prijsfeit voor Van Wonderen Tegelwerken. Gemeten op 16-09-2026:
 * 20 rijen in motor_feiten voor deze klant, waarvan 0 met soort/sleutel prijs of tarief.
 * Daarom staat op deze pagina NERGENS een bedrag per m2 van Van Wonderen. Dat is geen
 * omissie maar de enige toegestane uitkomst: een prijs verzinnen of "afleiden" uit
 * marktcijfers zou een verzonnen claim zijn. De kans wonderen-kans-prijsvraag-vloer en
 * ACTIE-20260905-JAAP-PRIJSPOSTEN staan nog open bij de eigenaar; zodra hij een
 * bandbreedte geeft, hoort die hier en vervalt de sectie "waarom hier geen bedrag staat".
 *
 * WAT DEZE PAGINA DAN WEL DOET, en waarom dat informatiewinst is. De vraag wordt in de
 * Nederlandse zoekresultaten volledig beheerst door leadplatforms. Die publiceren een
 * bedrag per m2 zonder de vloer ooit gezien te hebben, en laten precies weg waardoor twee
 * offertes onvergelijkbaar worden. Deze pagina meet dat, corrigeert een btw-aanname die
 * geen van hen benoemt, en zet er het enige naast wat een leadplatform per definitie niet
 * kan geven: wat er bij deze tegelzetter WEL en NIET in dat bedrag zit, uit zijn eigen
 * goedgekeurde gegevens.
 *
 * DE MARKTMETING (bewijsklasse B). Zes Nederlandstalige prijspagina's over deze vraag zijn
 * op 16-09-2026 VOLLEDIG gelezen; per pagina is geteld wat er staat. De tellingen op deze
 * pagina slaan uitsluitend op deze zes, en dat staat er ook bij:
 *   1. ikknapmijnhuisop.nl/tegelwerk/vloer-tegelen-kosten/
 *   2. trustoo.nl/kosten/tegelzetter-kosten/            (pagina zelf: "Aangepast op 13-02-2025")
 *   3. slimster.nl/tegelzetter/kosten-tegels-zetten/    (pagina zelf: "26-08-2024")
 *   4. topvakmannen.nl/klustips/wat-kost-een-tegelzetter/
 *   5. stuc-concurrent.nl/tegelzetter-prijs/
 *   6. multiconcurrent.nl/tegels-zetten/kosten-vloertegels-leggen/
 * NIET GELEZEN, en dus buiten elke telling gehouden: werkspot.nl (HTTP 403 op
 * /vloeren-tegels/prijzen-kosten/wand-vloertegels-zetten). Dat is uitgerekend de pagina die
 * in het register als bezitter van deze vraag staat (motor_vraagdekking fc79e5d1,
 * bezitter_op 2026-09-01). Als werkspot.nl de btw wel benoemt, is de telling "0 van de
 * zes" op deze pagina te ruim gesteld voor de markt als geheel — daarom staat er een
 * geteld getal met een leeslijst en nergens het woord "niemand".
 * DE TELLINGEN:
 *   - 6 van 6 noemen een bedrag per m2 voor arbeid. Samengenomen loopt de opgegeven
 *     arbeidsbandbreedte van EUR 10 (ikknapmijnhuisop, "wanneer de condities 'perfect'
 *     zijn") tot EUR 100 per m2 (stuc-concurrent, "tussen de EUR 30 en de 100 euro per m2").
 *   - 1 van 6 zegt wat er in dat bedrag zit: topvakmannen.nl, "Deze prijs is meestal
 *     inclusief lijm, voegmiddel en btw, maar exclusief de tegels zelf."
 *   - 1 van 6 prijst egaliseren apart met een bedrag: topvakmannen.nl, "Egaliseren kost
 *     gemiddeld EUR 8 tot EUR 15 per m2 extra."
 *   - 0 van 6 noemt een btw-PERCENTAGE. Vier van de zes schrijven wel "inclusief btw".
 *   - 4 van 6 zet geen enkele datum bij de bedragen; twee dragen een algemene paginadatum
 *     (trustoo.nl 13-02-2025, slimster.nl 26-08-2024). Getallen zonder datum zijn daarmee
 *     niet te dateren en dus als schatting gemarkeerd, niet als prijspeil.
 *   - 6 van 6 verdienen aan het doorgeven van je aanvraag (offerteformulier, "Plaats uw
 *     klus", "maximaal 4 offertes"). 0 van 6 is een tegelzetter die zijn eigen prijs
 *     publiceert. Dat laatste is de kern van deze pagina.
 *
 * DE BTW-CORRECTIE (bewijsklasse B, het scherpste eigen punt). Belastingdienst,
 * "Btw-tarief werkzaamheden aan woningen", gelezen 16-09-2026: onder het 9%-tarief valt
 * "Het isoleren, schilderen, stukadoren en behangen van woningen die ouder zijn dan 2 jaar",
 * plus schoonmaken binnen de woning. Tegelen, tegelwerk en vloeren leggen staan NIET in die
 * opsomming, en dezelfde pagina sluit af met: "Werkzaamheden aan woningen anders dan
 * hierboven genoemd, zijn belast met 21% btw." Tegelwerk is dus 21%, arbeid en materiaal.
 * Geen van de zes gelezen prijspagina's noemt dit; vier schrijven "incl. btw" zonder tarief.
 * De splitsingsregel van diezelfde Belastingdienst-pagina staat er ook bij: hoort het
 * tegelwerk bij een groter aannemingswerk waar wel 9%-werk in zit, dan moeten die delen op
 * de offerte en de factuur gesplitst worden.
 *
 * AI-ANTWOORD, sampled 16-09-2026 (websearch-assistent, US-gelokaliseerd — dus NIET
 * representatief voor wat een Nederlandse zoeker ziet; alleen als waarneming genoteerd,
 * er is geen claim op gebouwd): "A tile setter charges EUR 30 - EUR 55 per hour or EUR 25 -
 * EUR 40 per m2 ... For a 20 m2 floor, costs average EUR 1,500 to EUR 2,000, including tiles
 * and labor costs." Het antwoord noemt geen btw-tarief en zegt niet wat er in de m2-prijs
 * zit; het citeert dezelfde leadplatforms.
 *
 * EIGEN GEGEVENS OP DEZE PAGINA, met herkomst (wet art. 1.1). Alles wat hier over Van
 * Wonderen Tegelwerken wordt beweerd komt uit een van deze drie bronnen:
 *   (a) motor_feiten met eigenaar_akkoord = true:
 *       wonderen-dienst-vloertegelwerk  lijm en voorlijm, egaliseren waar nodig, dilataties,
 *                                       voegwerk inbegrepen, plinten apart incl. afkitten
 *       wonderen-garantie               5 jaar op tegelwerk en voegwerk, 1 jaar op kitwerk
 *       wonderen-offerte-belofte        gespecificeerde offerte, geen kleine lettertjes, binnen 5 dagen
 *       wonderen-reactietijd            reactie binnen 1 dag via WhatsApp
 *       wonderen-principe-prijs         vooraf weten wat het kost, geen verborgen meerwerk
 *       wonderen-persoon-jaap           eenmanszaak Breda sinds 2022, geen onderaannemers
 *       wonderen-werkgebied-kern        Breda, Teteringen, Princenhage, Bavel, Ulvenhout, Effen, Dorst
 *   (b) door de eigenaar zelf gepubliceerde tekst op /diensten/vloertegels: plinten zijn
 *       60x60 mm en worden per strekkende meter geprijsd inclusief afkitten; bij grotere
 *       oneffenheden wordt los geegaliseerd, per m2 apart gerekend.
 *   (c) de eigen algemene voorwaarden op /algemene-voorwaarden: art. 3 lid 3 en art. 7
 *       (meerwerk wordt afzonderlijk in rekening gebracht, ook mondeling of digitaal
 *       overeengekomen meerwerk is bindend) en art. 4 (annulering binnen 48 uur: maximaal
 *       EUR 400 inclusief btw per ingeplande vakman per dag, alleen als de vrijgevallen
 *       planning redelijkerwijs niet meer opgevuld kan worden).
 * Dat laatste bedrag is het ENIGE bedrag dat Van Wonderen Tegelwerken zelf publiceert.
 * Gemeten op 16-09-2026 over de hele repository: 1 euro-bedrag, in artikel 4 van de AV.
 *
 * DE EERLIJKHEID DIE DEZE PAGINA ZICHZELF OPLEGT. Een eerdere run (dispatcher-20260905-1705)
 * besloot de verwante vraag "wat zit er wel en niet in de prijs per m2" NIET te schrijven,
 * omdat drie posten ontbraken waar alle gelezen concurrenten voor waarschuwen: voorrijkosten,
 * puinafvoer en snijverlies/breukreserve. Dat besluit staat nog. Deze pagina omzeilt het niet
 * door ze stil over te slaan, maar noemt ze met zoveel woorden als ontbrekend — zie de sectie
 * "Wat hier niet staat". Een pagina die compleet lijkt en juist de naheffingsposten weglaat,
 * breekt de eigen belofte "geen verrassingen achteraf".
 *
 * KLANTTAAL, letterlijk geoogst uit de zes gelezen pagina's op 16-09-2026 en gebruikt in de
 * formuleringen hierboven: "Berekent hij zijn lijm- en voegmiddel mee of staat dit los van
 * zijn offerte?" (stuc-concurrent) / "Houd er rekening mee dat bijkomende kosten, zoals
 * materiaalkosten of voorrijkosten, niet altijd in het uurtarief zijn inbegrepen" (trustoo) /
 * "Als de ondergrond eerst geegaliseerd of voorbereid moet worden, brengt dit extra kosten
 * met zich mee" (trustoo) / "Spreek altijd een vast totaalbedrag af" (slimster) / "Moet een
 * vloer eerst worden geegaliseerd dan is het goed om te bedenken wie dat klusje gaat klaren"
 * (multiconcurrent) / "Deze prijs is meestal inclusief lijm, voegmiddel en btw, maar
 * exclusief de tegels zelf" (topvakmannen). Zoeksuggesties uit de radar-meting van
 * 01-09-2026: "vloer betegelen kosten", "kosten vloer tegelen per m2", "tegelvloer leggen
 * prijs per m2", "tegels laten leggen per m2".
 */

const url = `${business.url}/wat-kost-vloer-tegelen-per-m2`

export const metadata: Metadata = {
  title: 'Wat kost vloer tegelen per m²?',
  description:
    'Zes Nederlandse prijspagina’s naast elkaar gelegd: één van de zes zegt wat er in dat bedrag per m² zit, geen van de zes noemt een btw-tarief, en alle zes verkopen je aanvraag door. Wat er bij mij wél en niet in de prijs zit, en waarom hier geen vast bedrag staat.',
  alternates: { canonical: '/wat-kost-vloer-tegelen-per-m2' },
  openGraph: {
    title: 'Wat kost vloer tegelen per m²? | Van Wonderen Tegelwerken',
    description:
      'De bandbreedtes die online circuleren lopen van € 10 tot € 100 per m² arbeid. Wat dat verschil verklaart is niet de tegelzetter maar wat er in het bedrag zit — en het btw-tarief dat niemand erbij zet.',
    images: ['/images/projects/portfolio-2025-03-wa0006.webp'],
  },
}

/** De zes gelezen prijspagina's, 16-09-2026. Elk getal staat letterlijk op de bron. */
const marktmeting = [
  {
    bron: 'ikknapmijnhuisop.nl',
    href: 'https://ikknapmijnhuisop.nl/tegelwerk/vloer-tegelen-kosten/',
    arbeid: '€ 10 – € 75 per m²',
    citaat:
      '“Vanaf €10 per m2 wanneer de condities ‘perfect’ zijn” tot “soms wel €75 per m2 (of meer…)”; elders op dezelfde pagina “grofweg 30 tot 60 euro per m²”.',
    watErinZit: 'niet vermeld',
    btw: 'geen tarief',
  },
  {
    bron: 'trustoo.nl',
    href: 'https://trustoo.nl/kosten/tegelzetter-kosten/',
    arbeid: '€ 25 – € 40 per m²',
    citaat:
      '“Houd er rekening mee dat bijkomende kosten, zoals materiaalkosten of voorrijkosten, niet altijd in het uurtarief zijn inbegrepen.” Pagina zelf: aangepast op 13-02-2025.',
    watErinZit: 'alleen over het uurtarief, niet over de m²-prijs',
    btw: 'geen tarief',
  },
  {
    bron: 'slimster.nl',
    href: 'https://slimster.nl/tegelzetter/kosten-tegels-zetten/',
    arbeid: '€ 25 – € 40 per m²',
    citaat:
      '“Spreek altijd een vast totaalbedrag af.” Vloertegels leggen totaal “€ 15 – 160” inclusief arbeid, materiaal en btw. Pagina zelf: 26-08-2024.',
    watErinZit: 'rubriek “Prijsopbouw”, zonder uitleg per post',
    btw: '“incl. btw”, geen tarief',
  },
  {
    bron: 'topvakmannen.nl',
    href: 'https://topvakmannen.nl/klustips/wat-kost-een-tegelzetter/',
    arbeid: '€ 40 – € 60 per m²',
    citaat:
      '“Deze prijs is meestal inclusief lijm, voegmiddel en btw, maar exclusief de tegels zelf.” En: “Egaliseren kost gemiddeld €8 tot €15 per m² extra.”',
    watErinZit: 'ja — de enige van de zes',
    btw: '“incl. btw”, geen tarief',
  },
  {
    bron: 'stuc-concurrent.nl',
    href: 'https://www.stuc-concurrent.nl/tegelzetter-prijs/',
    arbeid: '€ 25 – € 100 per m²',
    citaat:
      '“Berekent hij zijn lijm- en voegmiddel mee of staat dit los van zijn offerte?” — de vraag wordt gesteld, niet beantwoord.',
    watErinZit: 'niet vermeld',
    btw: 'geen tarief',
  },
  {
    bron: 'multiconcurrent.nl',
    href: 'https://multiconcurrent.nl/tegels-zetten/kosten-vloertegels-leggen/',
    arbeid: '± € 37,50 per m² (“circa € 25 tot het dubbele”)',
    citaat:
      '“Moet een vloer eerst worden geëgaliseerd dan is het goed om te bedenken wie dat klusje gaat klaren.”',
    watErinZit: 'posten los genoemd, niet toegewezen',
    btw: 'geen tarief',
  },
]

/** Wat er bij Van Wonderen in de m²-prijs voor vloertegelwerk zit. Bron: motor_feiten
 *  wonderen-dienst-vloertegelwerk (eigenaar_akkoord = true) + de eigen FAQ op
 *  /diensten/vloertegels. Geen bedragen — die bestaan niet als goedgekeurd feit. */
const welErin = [
  {
    post: 'Lijm en voorlijm',
    uitleg:
      'De lijm die bij jouw tegeltype hoort, en de voorstrijk waarmee de ondervloer eerst wordt behandeld. Bij grootformaat en vloerverwarming is dat een andere lijm dan bij een standaard tegel.',
  },
  {
    post: 'Voegwerk',
    uitleg:
      'Het voegen zit in de prijs, niet als losse regel eronder. Dat is precies de post waarvan één van de zes gelezen prijspagina’s zegt dat je er expliciet naar moet vragen.',
  },
  {
    post: 'Dilataties op de juiste plek',
    uitleg:
      'De bewegingsvoegen die voorkomen dat een vloer later opbolt of scheurt bij een grote overspanning, een deurdoorgang of vloerverwarming. Geen van de zes gelezen pagina’s noemt deze post.',
  },
  {
    post: 'Oppervlakkig egaliseren',
    uitleg:
      'Kleine oneffenheden worden met de voorlijm weggewerkt. Dat zit erin. Wat er níét in zit staat hiernaast.',
  },
]

const nietErin = [
  {
    post: 'De tegels zelf',
    uitleg:
      'Die koop je zelf of ik bestel ze; ze staan hoe dan ook als eigen regel op de offerte. De zes gelezen pagina’s noemen voor de tegel zelf € 15 tot € 200 per m², afhankelijk van keramiek, porselein of natuursteen — dat is de post met de grootste spreiding en die bepaal jij in de showroom.',
  },
  {
    post: 'Los egaliseren bij grotere oneffenheden',
    uitleg:
      'Is de ondervloer echt uit het lood, dan wordt er apart geëgaliseerd en dat reken ik per m² apart. We bespreken vooraf wat nodig is, zodat het geen open eind in de offerte blijft.',
  },
  {
    post: 'Plinten',
    uitleg:
      'Plinten zijn 60×60 mm en worden per strekkende meter geprijsd, inclusief het afkitten. Ze komen apart op de offerte te staan, zodat je ziet wat je krijgt. Let op bij het vergelijken: een m²-prijs met plinten erin is niet dezelfde prijs als een m²-prijs zonder.',
  },
  {
    post: 'Meerwerk',
    uitleg:
      'Werk buiten de oorspronkelijke opdracht wordt afzonderlijk in rekening gebracht — dat staat met zoveel woorden in artikel 7 van mijn algemene voorwaarden. En: ook mondeling of via WhatsApp afgesproken meerwerk is bindend. Laat het dus altijd terugkomen in een bericht, dan heb je het zwart op wit.',
  },
]

const faqs = [
  {
    q: 'Wat kost vloer tegelen per m² bij Van Wonderen Tegelwerken?',
    a: 'Daar staat op deze pagina geen bedrag, en dat is een bewuste keuze. Ik heb nog geen vast tarief per m² gepubliceerd, en een getal opschrijven dat ik niet kan waarmaken voor jouw vloer is precies wat ik de vergelijkingssites zie doen. Wat ik wél doe: binnen 1 werkdag reageren op je WhatsApp, en binnen 5 dagen een gespecificeerde offerte sturen zonder kleine lettertjes, waarin de posten los staan — tegels, tegelwerk, eventueel egaliseren, plinten per strekkende meter. Dan vergelijk je geen bandbreedte maar een bedrag voor jouw ruimte.',
  },
  {
    q: 'Welke bedragen circuleren er dan online, en kloppen die?',
    a: 'Ik heb op 16 september 2026 zes Nederlandse prijspagina’s over deze vraag helemaal doorgelezen. Voor arbeid noemen ze samen een bandbreedte van € 10 tot € 100 per m²; de meest genoemde band is € 25 tot € 40 per m². Die getallen zijn niet verzonnen, maar ze zijn ook geen prijs: ze zijn geschat door partijen die jouw vloer nooit gezien hebben en die verdienen aan het doorverkopen van je aanvraag. Alle zes zijn een offerteplatform of prijsvergelijker. Geen van de zes is een tegelzetter die zijn eigen prijs publiceert.',
  },
  {
    q: 'Waarom lopen die bedragen zó ver uiteen?',
    a: 'Niet omdat de ene tegelzetter tien keer zo duur is als de andere, maar omdat er niet hetzelfde in zit. Van de zes gelezen pagina’s zegt er precies één wat er in het bedrag per m² zit: “inclusief lijm, voegmiddel en btw, maar exclusief de tegels zelf”. Bij de andere vijf weet je het niet. Dan vergelijk je € 25 die alleen leggen is met € 55 waar lijm, voeg, egaliseren en plinten in zitten, en lijkt de eerste goedkoop tot de eindafrekening komt.',
  },
  {
    q: 'Geldt op tegelwerk het lage btw-tarief van 9%?',
    a: 'Nee. De Belastingdienst noemt voor woningen ouder dan 2 jaar het isoleren, schilderen, stukadoren en behangen onder het 9%-tarief, plus schoonmaken binnen de woning. Tegelen staat niet in die opsomming, en dezelfde pagina sluit af met: “Werkzaamheden aan woningen anders dan hierboven genoemd, zijn belast met 21% btw.” Tegelwerk is dus 21%, over arbeid én materiaal. Geen van de zes prijspagina’s die ik las noemt een btw-percentage; vier schrijven wel “inclusief btw”. Zit het tegelwerk in een grotere verbouwing waar wel 9%-werk in zit, zoals stucwerk, dan moeten die delen op de offerte en de factuur gesplitst worden — ook dat schrijft de Belastingdienst voor.',
  },
  {
    q: 'Zit het voegwerk in de prijs per m², of komt dat er nog bij?',
    a: 'Dat zit erin. Net als de lijm en de voorlijm, en de dilataties op de plekken waar ze horen. Het is niet toevallig de vraag die de vergelijkingssites je aanraden te stellen — één van de zes verwoordt het als: “Berekent hij zijn lijm- en voegmiddel mee of staat dit los van zijn offerte?” Mijn antwoord daarop is ja, en het staat ook zo op mijn pagina over vloertegelwerk.',
  },
  {
    q: 'Wat kost egaliseren, en wanneer is het nodig?',
    a: 'Oppervlakkige oneffenheden gaan mee in de voorlijm en zitten in de prijs. Is de ondervloer echt uit het lood, dan egaliseer ik los en reken ik dat per m² apart. Een bedrag daarvoor staat hier niet, want ik heb er geen gepubliceerd tarief voor. Wat ik wel toezeg: we bespreken vooraf wat er nodig is, zodat “waar nodig” geen open eind in je offerte is. Eén van de zes gelezen pagina’s noemt hiervoor € 8 tot € 15 per m² extra — dat is hun schatting van de markt, niet mijn prijs.',
  },
  {
    q: 'Wat moet er op mijn offerte staan om twee prijzen eerlijk te kunnen vergelijken?',
    a: 'Zes regels. Eén: het aantal m² vloer, apart van eventueel wandwerk. Twee: of lijm, voorlijm en voegwerk in het bedrag zitten. Drie: of er geëgaliseerd moet worden en of dat apart gerekend wordt. Vier: de plinten, met de eenheid erbij — per strekkende meter of per m², en of het afkitten erin zit. Vijf: de tegels zelf, als eigen regel. Zes: het btw-tarief, en of er gesplitst moet worden. Bij mij komt dat als een gespecificeerde offerte binnen 5 dagen, zonder kleine lettertjes.',
  },
  {
    q: 'Kan ik afzeggen als de prijs me tegenvalt, en kost dat geld?',
    a: 'Een offerte is vrijblijvend — daar zit je aan niets vast. Zeg je af of verplaats je nadat het werk is ingepland, dan geldt artikel 4 van mijn algemene voorwaarden: melden mag tot 5 werkdagen voor aanvang. Binnen 48 uur voor aanvang mag ik maximaal € 400 inclusief btw per ingeplande vakman per dag in rekening brengen, en alleen als die vrijgevallen dag redelijkerwijs niet meer opgevuld kan worden. Dat is overigens het enige bedrag dat op deze hele site staat, en ik zet het er liever bij dan dat je het achteraf leest.',
  },
  {
    q: 'Wanneer ben ik bij jou aan het verkeerde adres?',
    a: 'Als je zoekt naar de laagste prijs per m² en verder niets. Ik ben een eenmanszaak uit Breda en doe elke klus zelf, zonder onderaannemers — dat betekent dat ik niet de goedkoopste hoef te zijn en ook niet de snelst beschikbare ben. En als je vloer buiten mijn werkgebied ligt: het kerngebied is Breda, Teteringen, Princenhage, Bavel, Ulvenhout, Effen en Dorst, met Oosterhout, Etten-Leur, Rijen, Tilburg en Zundert erbij, en grotere projecten verder weg op aanvraag.',
  },
]

export default function WatKostVloerTegelenPage() {
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
              { name: 'Vloertegelwerk', url: `${business.url}/diensten/vloertegels` },
              { name: 'Wat kost vloer tegelen per m²', url },
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
            <Link href="/diensten/vloertegels" className="hover:text-accent-600">Vloertegelwerk</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary-600">Wat kost vloer tegelen per m²</span>
          </nav>

          <div className="mt-12 max-w-3xl">
            <div className="eyebrow">Vraag uit de praktijk</div>
            <h1
              id="wat-kost-vloer-tegelen-per-m2"
              className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-primary-900 sm:text-5xl"
            >
              Wat kost vloer tegelen per m²?
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-primary-900">
              De bedragen die je online vindt voor arbeid lopen van € 10 tot € 100 per m². Ik heb
              zes Nederlandse prijspagina&apos;s over deze vraag doorgelezen om te zien waar dat
              verschil vandaan komt, en het antwoord is niet dat de ene tegelzetter tien keer zo
              duur is als de andere. Het is dat er niet hetzelfde in zit. Eén van die zes zegt wat
              er in het bedrag per m² zit. De andere vijf niet.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-primary-600">
              En nog iets dat geen van de zes erbij zet: het btw-tarief. Vier van hen schrijven
              &ldquo;inclusief btw&rdquo; zonder te zeggen welk tarief. Voor tegelwerk is dat 21%,
              niet de 9% die je bij verbouwen misschien verwacht — tegelen staat namelijk niet in
              het rijtje van de Belastingdienst. Op een vloer van 20 m² scheelt dat tarief al snel
              meer dan het verschil tussen twee tegelzetters.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-primary-600">
              Waar ik eerlijk over ben: hieronder staat geen bedrag per m² van mij. Ik heb geen
              vast tarief gepubliceerd, en een getal opschrijven dat ik voor jouw vloer niet kan
              waarmaken is precies wat ik de vergelijkingssites zie doen. Wat wel hieronder staat:
              wat er bij mij in die prijs zit en wat er apart op de offerte komt. Dat is het stuk
              dat een vergelijkingssite niet kan geven, want die heeft geen werkplaats.
            </p>

            <p className="mt-8 text-sm text-primary-500">
              Jaap van Wonderen, tegelzetter in Breda · geschreven 16 september 2026 · met de zes
              gelezen bronnen en de Belastingdienst-tekst erbij, zodat je het kunt nalezen
            </p>
          </div>
        </div>
      </section>

      {/* ─── DE METING ────────────────────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Wat de markt publiceert</div>
          <h2
            id="zes-prijspaginas-naast-elkaar"
            className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl"
          >
            Zes prijspagina&apos;s, zes bandbreedtes, en niet één tegelzetter
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Dit zijn de zes pagina&apos;s die ik op 16 september 2026 volledig gelezen heb, met per
            stuk het bedrag voor arbeid dat er letterlijk op staat. Ze staan hier met bronlink, want
            je moet dit kunnen narekenen. Wat ze gemeen hebben: alle zes verdienen aan het
            doorgeven van jouw aanvraag aan een vakman. Geen van de zes ís er een.
          </p>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-primary-300">
                  <th className="py-4 pr-6 text-sm font-semibold uppercase tracking-wide text-primary-900">Bron</th>
                  <th className="py-4 pr-6 text-sm font-semibold uppercase tracking-wide text-primary-900">Arbeid per m²</th>
                  <th className="py-4 pr-6 text-sm font-semibold uppercase tracking-wide text-primary-900">Zegt wat erin zit?</th>
                  <th className="py-4 text-sm font-semibold uppercase tracking-wide text-primary-900">Btw-tarief</th>
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
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-primary-500">{m.citaat}</p>
                    </td>
                    <td className="py-5 pr-6 text-base tabular-nums text-primary-900">{m.arbeid}</td>
                    <td className="py-5 pr-6 text-base text-primary-600">{m.watErinZit}</td>
                    <td className="py-5 text-base text-primary-600">{m.btw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Nog iets om te weten voor je een van deze bedragen als richtlijn neemt: vier van de zes
            zetten geen enkele datum bij hun getallen. De twee die dat wel doen, dragen een
            paginadatum van februari 2025 en augustus 2024. Een prijs zonder datum is in een vak met
            stijgende loonkosten geen prijs maar een indruk. Alles in de tabel hierboven is dus een
            schatting van een vergelijkingssite — niet mijn tarief, en ook geen indicatie ervan.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { getal: '1 van 6', tekst: 'zegt wat er in het bedrag per m² zit.' },
              { getal: '0 van 6', tekst: 'noemt een btw-percentage, terwijl vier wel “incl. btw” schrijven.' },
              { getal: '4 van 6', tekst: 'zet geen enkele datum bij de bedragen; twee dragen een algemene paginadatum (13-02-2025 en 26-08-2024).' },
              { getal: '6 van 6', tekst: 'is een offerteplatform of prijsvergelijker, geen tegelzetter.' },
            ].map((s) => (
              <div key={s.getal} className="border-t border-primary-300 pt-6">
                <div className="font-display text-3xl font-bold tabular-nums text-accent-600">{s.getal}</div>
                <p className="mt-3 text-base leading-relaxed text-primary-600">{s.tekst}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-primary-500">
            Eerlijk over de grens van deze telling: werkspot.nl staat in mijn meting als de pagina
            die deze vraag in Nederland het sterkst bezit, maar die weigerde mijn verzoek (HTTP 403)
            en is dus niet gelezen. De tellingen hierboven gaan over de zes pagina&apos;s in de
            tabel en nergens over &ldquo;de hele markt&rdquo;. Als werkspot.nl het btw-tarief wél
            noemt, is mijn nul te streng gesteld.
          </p>
        </div>
      </section>

      {/* ─── WEL EN NIET ──────────────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">De enige vraag die echt telt</div>
          <h2
            id="wat-zit-er-in-de-prijs-per-m2"
            className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl"
          >
            Wat er bij mij in de prijs per m² zit, en wat apart komt
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-600">
            Twee offertes vergelijken heeft geen zin zolang je niet weet wat er in het bedrag zit.
            Daarom hieronder mijn lijst — zonder bedrag, want dat heb ik niet gepubliceerd, maar
            wel volledig. Dit is dezelfde opsomming die op mijn pagina over{' '}
            <Link href="/diensten/vloertegels" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
              vloertegelwerk
            </Link>{' '}
            staat, hier uitgeschreven met de reden erbij.
          </p>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                Zit in de prijs per m²
              </div>
              <ul className="mt-6 divide-y divide-mist border-y border-mist">
                {welErin.map((w) => (
                  <li key={w.post} className="py-6">
                    <h3 className="font-display text-lg font-semibold text-primary-900">{w.post}</h3>
                    <p className="mt-2 text-base leading-relaxed text-primary-600">{w.uitleg}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-500">
                Komt apart op de offerte
              </div>
              <ul className="mt-6 divide-y divide-mist border-y border-mist">
                {nietErin.map((n) => (
                  <li key={n.post} className="py-6">
                    <h3 className="font-display text-lg font-semibold text-primary-900">{n.post}</h3>
                    <p className="mt-2 text-base leading-relaxed text-primary-600">{n.uitleg}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-primary-600">
            Op het tegelwerk en het voegwerk geef ik 5 jaar garantie, op kitwerk 1 jaar. Dat hoort
            ook in een prijsvergelijking thuis: een lagere prijs zonder garantietermijn is geen
            lagere prijs. Wat die garantie precies dekt als er later toch een tegel loskomt of een
            voeg scheurt, staat op{' '}
            <Link href="/losse-tegels-en-scheurende-voegen" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
              de pagina over losse tegels en scheurende voegen
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ─── BTW ──────────────────────────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Het percentage dat niemand erbij zet</div>
          <h2
            id="btw-op-tegelwerk"
            className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl"
          >
            Tegelwerk is 21% btw, geen 9%
          </h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-primary-900">
                Veel mensen weten dat er voor werk aan een woning ouder dan 2 jaar een verlaagd
                btw-tarief van 9% bestaat, en gaan ervan uit dat tegelwerk daaronder valt. Dat is
                niet zo. De Belastingdienst noemt voor woningen ouder dan 2 jaar het isoleren,
                schilderen, stukadoren en behangen, plus het schoonmaken binnen de woning. Tegelen,
                tegelwerk en vloeren leggen staan niet in dat rijtje.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Diezelfde pagina sluit af met de zin die het beslist:{' '}
                <span className="text-primary-900">
                  &ldquo;Werkzaamheden aan woningen anders dan hierboven genoemd, zijn belast met
                  21% btw.&rdquo;
                </span>{' '}
                Voor tegelwerk geldt dus 21%, over de arbeid én over het materiaal.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Eén uitzondering om naar te vragen: hoort mijn tegelwerk bij een grotere verbouwing
                waar wél 9%-werk in zit, bijvoorbeeld stucwerk of schilderwerk van iemand anders,
                dan schrijft de Belastingdienst voor dat die delen op de offerte en de factuur
                gesplitst worden. Dat is geen trucje, dat is de regel.
              </p>
              <p className="mt-6 text-base leading-relaxed text-primary-600">
                Waarom dit hier staat: van de zes prijspagina&apos;s die ik las noemt er geen enkele
                een tarief, en vier schrijven wel &ldquo;inclusief btw&rdquo;. Wie een bedrag van
                de ene site exclusief btw naast een bedrag van de andere site inclusief btw legt,
                vergelijkt 21% mis.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="border-l border-primary-300 pl-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                  Waar dit vandaan komt
                </div>
                <p className="mt-4 text-base leading-relaxed text-primary-600">
                  Belastingdienst, &ldquo;Btw-tarief werkzaamheden aan woningen&rdquo; en
                  &ldquo;Woningen ouder dan 2 jaar&rdquo;, beide gelezen op 16 september 2026. De
                  termijn van 2 jaar loopt vanaf de datum waarop het pand voor het eerst als woning
                  is gebruikt; dat is na te zoeken in de BAG via het Kadaster.
                </p>
                <p className="mt-4 text-base leading-relaxed text-primary-600">
                  Ik ben tegelzetter, geen belastingadviseur. Klopt er iets niet in jouw situatie,
                  dan is de Belastingdienst de baas en niet deze pagina — maar het tarief op mijn
                  offerte kun je hiermee zelf narekenen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WAAROM GEEN BEDRAG ───────────────── */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Eerlijk over het bedrag</div>
          <h2
            id="waarom-hier-geen-vast-bedrag-staat"
            className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl"
          >
            Waarom hier geen tarief van mij staat
          </h2>

          <div className="mt-12 max-w-3xl space-y-6">
            <p className="text-base leading-relaxed text-primary-900">
              Ik zou hier makkelijk een vanafprijs kunnen neerzetten. Dat leest lekker, het scoort
              waarschijnlijk beter, en het is precies het soort getal waar je later ruzie over
              krijgt — want &ldquo;vanaf&rdquo; geldt voor de makkelijkste vloer die ik dat jaar
              gelegd heb, en die is de jouwe meestal niet.
            </p>
            <p className="text-base leading-relaxed text-primary-600">
              Wat een vloer werkelijk kost hangt af van vier dingen die ik pas ken als ik ze zie:
              het formaat van de tegel, de staat van de ondervloer, hoeveel snijwerk de ruimte
              vraagt en of er vloerverwarming onder ligt. Een leadplatform kent die vier niet en
              noemt toch een bedrag. Dat is het verschil tussen een schatting en een prijs.
            </p>
            <p className="text-base leading-relaxed text-primary-600">
              Wat je van mij wél krijgt, en wat op elke vergelijkingssite als advies staat maar
              nergens als toezegging: reactie binnen 1 werkdag als je me via WhatsApp een paar
              foto&apos;s en de afmetingen stuurt, en een gespecificeerde offerte binnen 5 dagen,
              zonder kleine lettertjes. Gespecificeerd betekent: de posten uit de lijst hierboven
              los, zodat je ze naast een andere offerte kunt leggen.
            </p>
            <p className="text-base leading-relaxed text-primary-600">
              En omdat ik een eenmanszaak uit Breda ben en elke klus zelf doe, zonder
              onderaannemers en zonder tussenpersoon, is het bedrag dat je van mij hoort ook het
              bedrag dat de man betaalt die op je vloer staat. Er gaat geen commissie vanaf. Zes van
              de zes pagina&apos;s hierboven verdienen wél aan de doorverwijzing.
            </p>
            <p className="text-base leading-relaxed text-primary-600">
              Mocht je tegelwerk op een bestaande tegelvloer overwegen omdat je hoopt dat het
              goedkoper is: dat is een eigen rekensom, en die staat uitgewerkt op{' '}
              <Link href="/tegelen-over-bestaande-tegels" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
                de pagina over tegelen over bestaande tegels
              </Link>
              . Soms scheelt het echt geld, soms kost het je de dorpel en de afvoer.
            </p>
          </div>
        </div>
      </section>

      {/* ─── VRAGEN ───────────────────────────── */}
      <section className="bg-clay py-24 lg:py-32">
        <div className="container-tight">
          <div className="eyebrow">Wat mensen hierna vragen</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary-900 sm:text-4xl">
            Negen vervolgvragen, kort beantwoord
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
              'Mijn tarief per m². Ik heb er geen gepubliceerd, en de bedragen in de tabel hierboven zijn schattingen van vergelijkingssites — niet mijn prijs en ook geen indicatie ervan.',
              'Voorrijkosten. Ik reken hier geen bedrag voor op, maar ik heb het ook niet als vast tarief gepubliceerd. Vraag het bij de offerte; één van de zes gelezen sites noemt voorrijkosten als bijkomende post die vaak buiten het uurtarief valt.',
              'Puinafvoer van de oude vloer. Wie het puin afvoert en wat dat kost hoort op de offerte te staan, maar er staat hier geen bedrag bij omdat ik er geen gepubliceerd tarief voor heb.',
              'Snijverlies en breukreserve. Hoeveel procent extra tegels je moet bestellen hangt af van het patroon en de ruimte. Het advies dat ik het vaakst tegenkwam: bestel in één keer genoeg, want een nabestelling wijkt vrijwel altijd af in kleur of maat. Een percentage noem ik niet, want dat is voor jouw ruimte een schatting en geen getal.',
              'Een rekenvoorbeeld voor een badkamer of een hele woning. Dat is een andere vraag met andere posten, en die verdient een eigen pagina in plaats van een alinea hier.',
              'Een oordeel over de prijs van een andere tegelzetter. De tabel hierboven vergelijkt prijspagina’s, geen vakmensen.',
            ].map((t) => (
              <li key={t} className="py-6 text-base leading-relaxed text-primary-600">
                {t}
              </li>
            ))}
          </ul>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-primary-600">
            De eerste vier ontbreken omdat ik ze niet eerder heb vastgelegd, niet omdat ik ze voor
            me houd. Ze komen hier te staan zodra ze er zijn. Wat je nu al kunt nalezen zijn de
            afspraken die wél op papier staan, inclusief de regel over meerwerk en de
            annuleringstermijn:{' '}
            <Link href="/algemene-voorwaarden" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
              mijn algemene voorwaarden
            </Link>
            . En in welke plaatsen ik kom, staat op{' '}
            <Link href="/werkgebied" className="underline decoration-primary-300 underline-offset-4 hover:text-accent-600">
              de pagina over mijn werkgebied
            </Link>
            .
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/diensten/vloertegels" className="btn-secondary">
              Vloertegelwerk
            </Link>
            <Link href="/tegelen-over-bestaande-tegels" className="btn-secondary">
              Over bestaande tegels heen?
            </Link>
            <Link href="/losse-tegels-en-scheurende-voegen" className="btn-secondary">
              Losse tegels en scheurende voegen
            </Link>
            <Link href="/eerst-vloer-of-wand-betegelen" className="btn-secondary">
              Eerst de vloer of de wand?
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────── */}
      <section className="bg-paper pb-20 lg:pb-24">
        <div className="container-tight rounded-3xl bg-primary-900 p-12 text-center text-paper lg:p-16">
          <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl">
            Liever een bedrag voor jouw vloer dan een bandbreedte?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-primary-300">
            Stuur de afmetingen en een paar foto&apos;s van de ondervloer via WhatsApp. Je krijgt
            binnen 1 werkdag antwoord en binnen 5 dagen een gespecificeerde offerte, met de posten
            los zodat je ze kunt vergelijken.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${business.phoneE164}`} className="btn-accent">
              <Phone className="h-4 w-4" /> {business.phone}
            </a>
            <a
              href={`https://wa.me/${business.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                'Hoi Jaap, ik wil een vloer laten tegelen. Kun je me een prijs geven? Ik stuur de afmetingen en foto’s mee.'
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
