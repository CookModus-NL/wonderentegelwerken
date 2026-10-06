import { business } from '@/content/business'
import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'

/**
 * Algemene voorwaarden, versie 2.
 *
 * WAAROM EEN NIEUWE VERSIE. Versie 1 (bewaard op /algemene-voorwaarden/versie-1) was geschreven
 * voor tegelwerk, terwijl de site een complete badkamerrenovatie verkoopt: over sloop, wat je
 * bij sloop aantreft, asbest, sanitair, leidingwerk, waterdichting en termijnbetaling stond er
 * niets. Daarnaast spraken bepalingen de getekende feiten tegen (mondeling meerwerk bindend
 * tegenover `wonderen-principe-prijs`;
 * voegwerk "onderhoudsgevoelig" tegenover 5 jaar garantie in `wonderen-garantie`), en een deel
 * hield tegenover een consument geen stand (forumkeuze en uitsluiting van opschorting staan op
 * de zwarte lijst van art. 6:236 BW; bedenktijd bij een overeenkomst via WhatsApp of aan huis
 * ontbrak helemaal).
 *
 * HOE DEZE TEKST GEEN FEITEN VERZINT. Wat per klus verschilt (welke onderdelen Jaap zelf doet,
 * garantie buiten tegel/voeg/kit, termijnen, stelposten) staat niet hier maar in de offerte;
 * de voorwaarden regelen alleen het mechanisme. De enige getallen komen uit getekende feiten
 * (5 en 1 jaar garantie) of uit versie 1 (annuleringsbedragen, 7 dagen betaaltermijn, 5
 * werkdagen). Nieuwe beleidskeuzes (bijv. aanbetaling ten hoogste de helft, 30 dagen overmacht,
 * 8 dagen opleveringsreactie) staan in de wijzigingenlijst voor Jaap.
 *
 * NUMMERING. Artikel 1 t/m 14 houden onderwerp en nummer van versie 1, omdat acht
 * antwoordpagina's en llms.txt naar die nummers verwijzen. Nieuw: 15 (renovatie), 16
 * (bedenktijd), 17 (versies), plus het modelformulier.
 *
 * STATUS. Vastgesteld door Jaap op 6 okt 2026 (WhatsApp aan Bart, 08:34-08:39): "Alleen 9 nee"
 * op de twintig punten in onderzoek/voorstellen/av-v2-voor-jaap.md. Punt 9 (werk door anderen)
 * is in zijn woorden herschreven: "Ik blijf wel eindverantwoordelijk natuurlijk. Maar ik kan
 * mijn werk dus wel uitbestede." Daarmee vervalt "geen onderaannemers" overal op de site en in
 * `wonderen-persoon-jaap`. Zolang `versie.vastgesteld` null is: "concept" en noindex.
 * Het voorstel onderzoek/voorstellen/av-art12-garantietermijnen.patch (27 sep) is hierin opgegaan.
 */
const versie = {
  nummer: 2,
  /** ISO-datum waarop Jaap deze versie vaststelt; null = concept. */
  vastgesteld: '2026-10-06' as string | null,
}

const isConcept = versie.vastgesteld === null

export const metadata: Metadata = {
  alternates: { canonical: '/algemene-voorwaarden' },
  ...(isConcept ? { robots: { index: false, follow: true } } : {}),
  title: 'Algemene voorwaarden',
  description:
    'Algemene voorwaarden van Van Wonderen Tegelwerken (KvK 86555499, Breda): offerte, meerwerk, betaling, oplevering, garantie, badkamerrenovatie en bedenktijd, in gewone taal.',
}

const linkClass = 'underline decoration-primary-300 underline-offset-4 hover:text-accent-600'

type Lid = ReactNode | { tekst: ReactNode; lijst: ReactNode[] }
type Artikel = { nr: number; titel: string; leden: Lid[] }

const artikelen: Artikel[] = [
  {
    nr: 1,
    titel: 'Wie is wie',
    leden: [
      <>
        <strong>Ik</strong>: Van Wonderen Tegelwerken, de eenmanszaak van Jaap van Wonderen,
        gevestigd in Breda en ingeschreven bij de Kamer van Koophandel onder nummer {business.kvk}.
      </>,
      <>
        <strong>Jij</strong>: iedereen die mij een offerte vraagt of mij werk laat uitvoeren, als
        particulier of als bedrijf. Waar de wet een particulier meer bescherming geeft, noem ik je{' '}
        <strong>consument</strong>: iemand die niet handelt voor zijn beroep of bedrijf.
      </>,
      <>
        <strong>Het werk</strong>: alles wat we afspreken, zoals tegelwerk op vloer en wand,
        voeg- en kitwerk, egaliseren, en bij een badkamerrenovatie ook sloop, afvoer, waterdichting,
        leidingwerk, sanitair plaatsen en afwerking, voor zover de offerte dat noemt.
      </>,
      <>
        <strong>Schriftelijk</strong>: op papier, per e-mail of via WhatsApp. Een bericht in
        WhatsApp telt dus als schriftelijk; een telefoongesprek niet.
      </>,
    ],
  },
  {
    nr: 2,
    titel: 'Wanneer deze voorwaarden gelden',
    leden: [
      'Deze voorwaarden gelden voor elke offerte en elke overeenkomst tussen jou en mij.',
      'Ik stuur ze mee met elke offerte, of ik stuur een link naar deze pagina waar je ze kunt opslaan en printen. Zo ken je ze voordat je akkoord geeft.',
      'Staat in de offerte iets anders dan in deze voorwaarden, dan geldt de offerte.',
      'Leg andere afspraken schriftelijk vast, dan weten we allebei waar we aan toe zijn. Algemene voorwaarden van een zakelijke opdrachtgever gelden niet.',
      'Blijkt één bepaling niet geldig, dan blijven de andere staan.',
    ],
  },
  {
    nr: 3,
    titel: 'Offerte en overeenkomst',
    leden: [
      'Mijn offerte is gespecificeerd: er staat in wat ik doe, wat ik lever en wat jij zelf regelt. Wat niet in de offerte staat, zit niet in de prijs.',
      'De offerte is gebaseerd op wat ik bij de opname heb gezien en wat jij mij hebt verteld. Blijkt de situatie anders, dan geldt artikel 7.',
      'Een offerte is vrijblijvend tot jij akkoord geeft. De overeenkomst ontstaat zodra je schriftelijk akkoord geeft op de offerte.',
      'Een kennelijke fout in de offerte, bijvoorbeeld een rekenfout of een verschreven bedrag, bindt geen van ons beiden.',
    ],
  },
  {
    nr: 4,
    titel: 'Planning, verplaatsen en annuleren',
    leden: [
      'We spreken samen een startdatum af. Die dagen houd ik voor jou vrij en neem ik geen ander werk aan.',
      'Kan ik op de afgesproken dag niet beginnen of doorwerken door iets aan jouw kant (zie artikel 5), dan meld ik dat meteen en zoek ik ander werk voor die dagen. Lukt dat niet, dan mag ik een vergoeding vragen voor de dagen die leeg blijven, met als maximum de bedragen uit lid 4.',
      'Verplaatsen of annuleren kan zonder kosten tot 5 werkdagen voor de startdatum. Laat het mij schriftelijk weten.',
      {
        tekst: 'Annuleer of verplaats je later, dan mag ik een vergoeding vragen van ten hoogste:',
        lijst: [
          'tussen 5 en 2 werkdagen voor de start: per geplande werkdag de helft van wat één werkdag kost (de prijs van het werk gedeeld door het aantal geplande werkdagen);',
          'binnen 2 werkdagen voor de start: € 400 inclusief btw per geplande werkdag per ingeplande vakman.',
        ],
      },
      'Die vergoeding vraag ik alleen voor dagen die ik redelijkerwijs niet meer met ander werk kan vullen. Vul ik ze toch, dan reken ik niets.',
      'Zeg je de overeenkomst op nadat ik ben begonnen, dan geldt de wet: je betaalt de prijs, min wat ik bespaar doordat ik het werk niet afmaak.',
      'Heb je als consument nog bedenktijd (artikel 16), dan geldt dat artikel en niet dit artikel.',
      'Loop ik zelf vertraging op, dan laat ik je dat weten zodra ik het weet, met een nieuwe datum.',
    ],
  },
  {
    nr: 5,
    titel: 'Wat ik van jou vraag',
    leden: [
      {
        tekst: 'Zodat ik op de afgesproken dag kan beginnen, zorg jij ervoor dat:',
        lijst: [
          'de ruimte bereikbaar, leeg en werkbaar is;',
          'er water en stroom zijn;',
          'materialen die jij levert er op tijd zijn (zie ook artikel 15);',
          'werk van anderen dat vóór mij klaar moet zijn, klaar is;',
          'je mij vooraf vertelt waar leidingen, kabels en vloerverwarming in vloer en wanden lopen, voor zover je dat weet;',
          'je, als je in een appartement woont, toestemming van de VvE regelt waar die nodig is, en mij vertelt welke werktijden daar gelden.',
        ],
      },
      'Lukt dat niet, of loopt het werk vertraging op door vakmensen die jij zelf inschakelt, dan komt die vertraging voor jouw rekening, met de grenzen uit artikel 4 lid 2.',
    ],
  },
  {
    nr: 6,
    titel: 'Hoe ik werk',
    leden: [
      'Ik voer het werk uit volgens de regels van het vak en de geldende bouwregels.',
      'Ik mag het werk, of een deel ervan, laten uitvoeren door een andere vakman. Ik blijf dan eindverantwoordelijk voor het hele werk, ook voor de garantie, en je blijft mij aanspreken. Ik werk niet met tussenpersonen.',
      'Zie ik dat de ondergrond, een materiaal of een onderdeel van de opdracht niet deugt, dan waarschuw ik je voordat ik verder ga, en we besluiten samen hoe het verder gaat.',
      'Tegels uit verschillende productiepartijen kunnen iets in kleur of maat verschillen. Verschillen die binnen de opgave van de fabrikant blijven, zijn geen gebrek.',
      'Lijm, voeg en kit hebben droogtijd nodig, en een nieuwe dekvloer moet eerst uitharden. Ik vertel je wanneer je de vloer mag belopen, wanneer je mag douchen en wanneer de vloerverwarming aan mag. Vloerverwarming gaat altijd gefaseerd aan.',
    ],
  },
  {
    nr: 7,
    titel: 'Meerwerk en minderwerk',
    leden: [
      'Meerwerk is werk dat niet in de offerte staat. Ik doe meerwerk alleen nadat ik je de reden en de prijs heb gegeven en jij er schriftelijk akkoord op hebt gegeven. Zonder dat akkoord komt er geen meerwerk op de factuur, behalve in het geval van lid 2.',
      'Uitzondering: dreigt er directe schade, bijvoorbeeld een lekkage die ik bij het werk tegenkom, dan mag ik doen wat nodig is om die schade te voorkomen. Ik laat je dat zo snel mogelijk weten, met wat ik heb gedaan en wat het kost.',
      'Vervalt er werk uit de offerte (minderwerk), dan verreken ik dat.',
      'Staat er in de offerte een stelpost (een geschat bedrag voor iets wat nog gekozen moet worden), dan reken ik af wat het werkelijk kost en laat ik je zien waar dat bedrag vandaan komt.',
    ],
  },
  {
    nr: 8,
    titel: 'Betalen',
    leden: [
      'Je betaalt een factuur binnen 7 dagen na de factuurdatum, tenzij we schriftelijk iets anders hebben afgesproken.',
      'Ik kan een aanbetaling vragen. Dat staat dan in de offerte, en het is nooit meer dan de helft van de prijs.',
      'Bij een grotere klus kan de offerte betaling in termijnen noemen. Elke termijn hoort dan bij een stuk werk dat klaar is.',
      'Betaal je niet op tijd, dan stuur ik eerst een herinnering. Daarin staat dat je 14 dagen na ontvangst de tijd hebt om alsnog te betalen, en welke incassokosten ik reken als dat niet gebeurt. Betaal je ook dan niet, dan mag ik de wettelijke rente en die incassokosten (volgens de wettelijke staffel) rekenen, en mag ik het werk stilleggen tot er betaald is.',
      'Heb je een klacht over een deel van het werk, dan mag je het bedrag voor dat deel inhouden tot het is opgelost. De rest betaal je op tijd.',
    ],
  },
  {
    nr: 9,
    titel: 'Oplevering en klachten',
    leden: [
      'Als het werk klaar is, laat ik het je weten en lopen we het samen na. Wat je dan ziet en niet goed vindt, schrijven we op. Die punten los ik binnen een redelijke termijn op.',
      'Het werk is opgeleverd als jij het hebt goedgekeurd, of als je niet binnen 8 dagen na mijn bericht dat het klaar is laat weten wat er niet goed is. In dat bericht wijs ik je op die 8 dagen. Douchen of de ruimte gewoon gebruiken telt niet als goedkeuren.',
      'Een klein opleverpunt dat het gebruik niet in de weg zit, houdt de oplevering niet tegen.',
      'Ontdek je later een gebrek, meld het mij dan zodra je het ziet, het liefst met foto’s. Een melding binnen twee maanden na ontdekking is altijd op tijd.',
      'Geef mij eerst de gelegenheid het gebrek te herstellen voordat je iemand anders inschakelt. Bij een noodgeval, zoals een lekkage die doorloopt terwijl ik niet op tijd kan komen, mag je meteen doen wat nodig is om erger te voorkomen; laat het me dan direct weten.',
    ],
  },
  {
    nr: 10,
    titel: 'Aansprakelijkheid',
    leden: [
      'Schiet ik tekort in het werk, dan ben ik aansprakelijk volgens de wet, met de grenzen uit dit artikel.',
      'Mijn aansprakelijkheid voor schade is beperkt tot het bedrag van de opdracht waar het om gaat. Keert een verzekering in dat geval meer uit, dan geldt dat hogere bedrag.',
      'Voor indirecte schade en gevolgschade, zoals gederfde inkomsten, ben ik niet aansprakelijk.',
      {
        tekst: 'Ik ben niet aansprakelijk voor schade die niet door mijn werk komt, zoals:',
        lijst: [
          'vocht, scheuren of verzakking die ontstaan in de constructie van het huis, in een dekvloer die ik niet heb aangebracht, of door opstijgend vocht;',
          'lekkage uit leidingen of sanitair die ik niet heb aangelegd of aangesloten;',
          'gebreken in de ondergrond of in materialen die jij hebt geleverd, behalve als ik ze had moeten zien en je niet heb gewaarschuwd (artikel 6 lid 3).',
        ],
      },
      'Deze grenzen gelden niet als de schade komt door opzet of bewuste roekeloosheid van mijn kant. Ze gelden ook niet voor zover de wet bepaalt dat er ten nadele van een consument niet van mag worden afgeweken.',
    ],
  },
  {
    nr: 11,
    titel: 'Overmacht',
    leden: [
      'Kan ik door overmacht niet werken, dan is dat geen tekortkoming en schuift de planning op. Overmacht is bijvoorbeeld ziekte van mij, extreem weer bij buitenwerk, een leverancier die niet levert terwijl ik op tijd heb besteld en ik geen vervanger kan vinden, of een maatregel van de overheid.',
      'Duurt de overmacht langer dan 30 dagen, dan mogen we allebei de overeenkomst schriftelijk beëindigen voor het deel dat nog niet is uitgevoerd. Het werk dat al is gedaan, betaal je.',
    ],
  },
  {
    nr: 12,
    titel: 'Garantie',
    leden: [
      'Op tegelwerk en voegwerk geef ik 5 jaar garantie, op kitwerk 1 jaar. De garantie loopt vanaf de oplevering.',
      'Garantie betekent: komt een tegel los, scheurt een voeg of laat de kit los doordat ik het werk niet goed heb gedaan, dan herstel ik dat zonder kosten. Ook als zo’n gebrek zich eerst laat zien als vocht of als een scheur.',
      'Voor andere onderdelen van het werk noemt de offerte de garantie. Noemt de offerte niets, dan gelden je rechten volgens de wet. Lever ik sanitair of materialen zelf, dan kun je bij een gebrek daarin bij mij terecht; de garantie van de fabrikant komt daar bovenop. Lever jij ze, dan sta ik in voor de montage en loopt de garantie op het product via jouw leverancier.',
      {
        tekst: 'Buiten de garantie valt:',
        lijst: [
          'verkleuring, vervuiling en slijtage van voegen en kit door gebruik of schoonmaakmiddelen; kit is na het eerste jaar onderhoud;',
          'schade door verkeerd gebruik, gebrek aan onderhoud, of het niet opvolgen van mijn aanwijzingen over droogtijden en vloerverwarming;',
          'het deel van het werk waaraan iemand anders na de oplevering heeft gewerkt;',
          'vocht, scheuren of verzakking met een oorzaak buiten mijn werk, zoals genoemd in artikel 10 lid 4.',
        ],
      },
      'De garantie komt bovenop je rechten volgens de wet en vervangt die niet.',
    ],
  },
  {
    nr: 13,
    titel: 'Eigendom van materialen',
    leden: [
      'Materialen die ik lever en die nog niet zijn verwerkt, blijven van mij tot de factuur is betaald.',
    ],
  },
  {
    nr: 14,
    titel: 'Recht en geschillen',
    leden: [
      'Op onze overeenkomst is Nederlands recht van toepassing.',
      'Hebben we een meningsverschil, dan zoeken we eerst samen een oplossing.',
      'Lukt dat niet, dan beslist de rechter die volgens de wet bevoegd is. Ben je een zakelijke opdrachtgever, dan is dat de rechtbank Zeeland-West-Brabant.',
    ],
  },
  {
    nr: 15,
    titel: 'Badkamerrenovatie en andere verbouwingen',
    leden: [
      'Dit artikel geldt aanvullend als het werk meer is dan tegelwerk, zoals een complete badkamerrenovatie.',
      'De offerte noemt per onderdeel of ik het doe: sloop en afvoer van puin, leidingwerk voor water en afvoer, waterdichting, tegelwerk, sanitair plaatsen, kitwerk en afwerking. De offerte noemt ook wie welke materialen levert. Een onderdeel dat er niet in staat, zoals elektra, regel je zelf met een eigen vakman. Die valt niet onder onze overeenkomst; we stemmen de planning wel samen af.',
      'Bij slopen kom ik soms iets tegen wat vooraf niet te zien was, zoals rot, een oude lekkage, een ondergrond die niet draagt of leidingen die niet meer voldoen. Dan stop ik met dat onderdeel, laat ik je zien wat ik heb gevonden en geef ik je een prijs voor het herstel. Ik ga pas verder als jij schriftelijk akkoord geeft (artikel 7). Voor de dagen dat ik op jouw besluit moet wachten geldt artikel 4 lid 2.',
      'Is je huis gebouwd vóór 1994, dan kan er asbest in zitten, bijvoorbeeld in oude vloerbedekking, kitten of platen. Vertel mij vooraf wat je daarover weet. Vermoed ik asbest, dan stop ik op die plek. Onderzoek en verwijdering laat je doen door een bedrijf dat daarvoor gecertificeerd is, voor jouw rekening. De planning schuift dan op. Voor de dagen dat ik daardoor niet kan werken geldt artikel 4 lid 2, ook als je niet wist dat er asbest zat.',
      'De waterdichting zit straks onder de tegels en is daarna niet meer te zien. Daarom maak ik er foto’s van voordat ik eroverheen tegel, en stuur ik je die. Foto’s van jouw huis gebruik ik alleen voor mijn site of social media als jij daar toestemming voor geeft.',
      'Lever je zelf sanitair of andere materialen, controleer ze dan bij aflevering op schade en compleetheid. Zie ik voor de montage een gebrek, dan meld ik dat voordat ik monteer. Een gebrek in het product zelf los je op met je leverancier.',
      'Tijdens de renovatie is de badkamer buiten gebruik. Ik vertel je vooraf hoeveel dagen, en bij de oplevering wanneer je weer mag douchen.',
    ],
  },
  {
    nr: 16,
    titel: 'Bedenktijd voor consumenten',
    leden: [
      'Sluiten we de overeenkomst op afstand (via WhatsApp, telefoon of e-mail) of bij jou thuis, dan heb je als consument 14 dagen bedenktijd, te tellen vanaf de dag na je akkoord. In die tijd kun je de overeenkomst zonder opgave van reden ontbinden (de wet noemt dat herroepen).',
      <>
        Ontbinden doe je met een duidelijk bericht via WhatsApp, e-mail of per brief (adres
        bovenaan deze pagina). Je mag daarvoor het{' '}
        <a href="#modelformulier" className={linkClass}>
          modelformulier
        </a>{' '}
        onderaan deze pagina gebruiken, maar dat hoeft niet. Je bent op tijd als je bericht
        binnen de 14 dagen is verstuurd.
      </>,
      'Ontbind je binnen de bedenktijd, dan betaal ik wat je al hebt betaald binnen 14 dagen na je bericht terug, min wat je volgens lid 4 verschuldigd bent.',
      'Wil je dat ik binnen de bedenktijd begin, dan vraag je dat schriftelijk. In dat verzoek zeg je ook dat je weet dat je bedenktijd vervalt zodra ik het werk helemaal heb afgemaakt. Ontbind je daarna toch, dan betaal je voor het werk dat ik tot dat moment heb gedaan, naar verhouding van de hele prijs. Heb ik het werk binnen de bedenktijd op dat verzoek helemaal afgemaakt, dan kun je niet meer ontbinden.',
      'Heb ik je niet goed over je bedenktijd geïnformeerd, dan betaal je niets voor werk dat ik binnen de bedenktijd heb gedaan.',
      'Heb je mij zelf gevraagd langs te komen voor een dringende reparatie, dan geldt voor die reparatie geen bedenktijd. Doe ik bij dat bezoek meer dan de dringende reparatie, dan heb je voor dat extra werk wel bedenktijd.',
    ],
  },
  {
    nr: 17,
    titel: 'Versies van deze voorwaarden',
    leden: [
      'Ik kan deze voorwaarden aanpassen. Voor jouw overeenkomst geldt de versie die gold op het moment dat je akkoord gaf; een latere versie geldt niet voor een lopende klus.',
      <>
        Deze pagina is versie {versie.nummer}. De{' '}
        <Link href="/algemene-voorwaarden/versie-1" className={linkClass}>
          vorige versie
        </Link>{' '}
        blijft te lezen voor overeenkomsten die daaronder zijn gesloten.
      </>,
    ],
  },
]

function formatDatum(iso: string) {
  return new Date(iso).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function AVPage() {
  return (
    <section className="bg-paper py-16 lg:py-24">
      <article className="container-tight">
        <div className="eyebrow">Juridisch</div>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl">
          Algemene voorwaarden
        </h1>
        <p className="mt-4 text-primary-600">
          {business.legalName} · KvK {business.kvk} · {business.address.street},{' '}
          {business.address.postalCode} {business.address.city} · {business.phone} ·{' '}
          {business.email}
        </p>
        <p className="mt-2 text-sm text-primary-500">
          Versie {versie.nummer} ·{' '}
          {versie.vastgesteld
            ? `geldt voor offertes vanaf ${formatDatum(versie.vastgesteld)}`
            : 'concept, nog niet vastgesteld'}
        </p>

        <p className="mt-8 max-w-2xl leading-relaxed text-primary-600">
          Geen kleine lettertjes: hieronder staat in gewone taal wat we afspreken als ik voor je
          werk. Ik schrijf in de ik-vorm, want ik ben degene die het werk doet.
        </p>

        <nav aria-label="Inhoud" className="mt-10 border-t border-mist pt-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
            Inhoud
          </div>
          <ol className="mt-4 grid gap-x-10 gap-y-1 text-primary-600 sm:grid-cols-2">
            {artikelen.map((a) => (
              <li key={a.nr}>
                <a href={`#artikel-${a.nr}`} className={`inline-flex min-h-11 items-center ${linkClass}`}>
                  {a.nr}. {a.titel}
                </a>
              </li>
            ))}
            <li>
              <a href="#modelformulier" className={`inline-flex min-h-11 items-center ${linkClass}`}>
                Modelformulier voor ontbinding
              </a>
            </li>
          </ol>
        </nav>

        <div className="mt-12 space-y-12 leading-relaxed text-primary-600">
          {artikelen.map((a) => (
            <section key={a.nr} id={`artikel-${a.nr}`} className="scroll-mt-28 border-t border-mist pt-8">
              <h2 className="font-display text-2xl font-bold text-primary-900">
                Artikel {a.nr} – {a.titel}
              </h2>
              <ol className="mt-4 max-w-2xl list-decimal space-y-2 pl-5">
                {a.leden.map((lid, i) =>
                  lid && typeof lid === 'object' && 'lijst' in lid ? (
                    <li key={i}>
                      {lid.tekst}
                      <ul className="mt-2 list-disc space-y-1 pl-5">
                        {lid.lijst.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={i}>{lid as ReactNode}</li>
                  )
                )}
              </ol>
            </section>
          ))}

          <section id="modelformulier" className="scroll-mt-28 border-t border-mist pt-8">
            <h2 className="font-display text-2xl font-bold text-primary-900">
              Modelformulier voor ontbinding
            </h2>
            <p className="mt-4 max-w-2xl">
              Alleen invullen en terugsturen als je de overeenkomst binnen de bedenktijd wilt
              ontbinden (herroepen, artikel 16).
            </p>
            <div className="mt-6 max-w-2xl space-y-3 border-l border-mist pl-6">
              <p>
                Aan: {business.legalName}, {business.address.street}, {business.address.postalCode}{' '}
                {business.address.city}, {business.email}
              </p>
              <p>
                Ik/Wij (*) deel/delen (*) u hierbij mede dat ik/wij (*) onze overeenkomst
                betreffende de verkoop van de volgende goederen/levering van de volgende dienst (*)
                herroep/herroepen (*): ……………………
              </p>
              <p>Besteld op (*)/Ontvangen op (*): ……………………</p>
              <p>Naam/Namen consument(en): ……………………</p>
              <p>Adres consument(en): ……………………</p>
              <p>
                Handtekening van consument(en) (alleen wanneer dit formulier op papier wordt
                ingediend): ……………………
              </p>
              <p>Datum: ……………………</p>
              <p className="text-sm text-primary-500">(*) Doorhalen wat niet van toepassing is.</p>
            </div>
          </section>
        </div>
      </article>
    </section>
  )
}
