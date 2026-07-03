import { business } from '@/content/business'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algemene voorwaarden',
  description: 'Algemene voorwaarden van Van Wonderen Tegelwerken, KvK 86555499, gevestigd te Breda.',
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
          {business.legalName} · KvK {business.kvk} · Vestigingsadres: {business.address.street}, {business.address.postalCode} {business.address.city}
        </p>

        <div className="mt-12 space-y-10 text-primary-700 leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 1 – Definities</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li><strong>Van Wonderen Tegelwerken</strong>: de eenmanszaak gevestigd te Breda, ingeschreven bij de Kamer van Koophandel onder nummer 86555499.</li>
              <li><strong>Opdrachtgever</strong>: iedere natuurlijke persoon of rechtspersoon die werkzaamheden laat uitvoeren door Van Wonderen Tegelwerken.</li>
              <li><strong>Werkzaamheden</strong>: alle overeengekomen tegel-, kit-, vloer-, wand-, badkamer-, renovatie- en afbouwwerkzaamheden alsmede aanverwante werkzaamheden.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 2 – Toepasselijkheid</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten, werkzaamheden, leveringen en diensten van Van Wonderen Tegelwerken.</li>
              <li>Afwijkingen van deze voorwaarden zijn uitsluitend geldig indien schriftelijk overeengekomen.</li>
              <li>Eventuele algemene voorwaarden van opdrachtgever worden uitdrukkelijk van de hand gewezen.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 3 – Offertes en overeenkomsten</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>Alle offertes zijn vrijblijvend tenzij schriftelijk anders vermeld.</li>
              <li>Offertes zijn gebaseerd op de op dat moment bekende informatie, omstandigheden en opgegeven werkzaamheden.</li>
              <li>Meerwerk, aanvullende werkzaamheden en wijzigingen worden afzonderlijk in rekening gebracht.</li>
              <li>Een overeenkomst komt tot stand zodra opdrachtgever mondeling, schriftelijk, digitaal of via WhatsApp akkoord geeft op een offerte of opdrachtbevestiging.</li>
              <li>Kennelijke fouten of vergissingen in offertes binden Van Wonderen Tegelwerken niet.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 4 – Planning, annulering en gereserveerde capaciteit</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>Van Wonderen Tegelwerken reserveert tijd, capaciteit en planning specifiek voor opdrachtgever.</li>
              <li>Opdrachtgever dient ervoor zorg te dragen dat werkzaamheden op de afgesproken datum direct uitgevoerd kunnen worden.</li>
              <li>Indien werkzaamheden niet kunnen starten of doorgaan door omstandigheden aan de zijde van opdrachtgever, heeft Van Wonderen Tegelwerken het recht een vergoeding in rekening te brengen wegens gereserveerde capaciteit, personeelskosten, omzetverlies, voorrijkosten en niet-opvulbare planningsruimte.</li>
              <li>
                Onder omstandigheden aan de zijde van opdrachtgever wordt onder andere verstaan:
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>werkruimte niet gereed;</li>
                  <li>materialen niet aanwezig;</li>
                  <li>opdrachtgever niet aanwezig;</li>
                  <li>andere vakmensen nog bezig;</li>
                  <li>onvoldoende voorbereiding;</li>
                  <li>planning zonder overleg gewijzigd;</li>
                  <li>werkzaamheden door derden nog niet afgerond.</li>
                </ul>
              </li>
              <li>Annulering of verplaatsing van werkzaamheden dient minimaal 5 werkdagen voor aanvang schriftelijk gemeld te worden.</li>
              <li>Bij annulering of verplaatsing binnen 5 werkdagen voor aanvang van de werkzaamheden behoudt Van Wonderen Tegelwerken zich het recht voor een vergoeding in rekening te brengen.</li>
              <li>
                Bij annulering binnen:
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>5 tot 2 werkdagen voor aanvang: maximaal 50% van de gereserveerde dagvergoeding;</li>
                  <li>48 uur voor aanvang of minder: maximaal € 400 inclusief btw per ingeplande vakman per dag.</li>
                </ul>
              </li>
              <li>Deze vergoeding geldt uitsluitend indien de vrijgevallen planning redelijkerwijs niet meer kan worden opgevuld.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 5 – Verplichtingen opdrachtgever</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>
                Opdrachtgever zorgt ervoor dat:
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>de werkplek goed bereikbaar is;</li>
                  <li>water en stroom beschikbaar zijn;</li>
                  <li>de ruimte voldoende leeg en werkbaar is;</li>
                  <li>materialen tijdig aanwezig zijn;</li>
                  <li>ondergronden geschikt en gereed zijn.</li>
                </ul>
              </li>
              <li>Vertraging ontstaan door derden komt volledig voor rekening en risico van opdrachtgever.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 6 – Uitvoering werkzaamheden</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>Van Wonderen Tegelwerken voert werkzaamheden uit naar beste inzicht, vakmanschap en professionele normen.</li>
              <li>Kleine kleur-, maat- of structuurverschillen vallen binnen normale toleranties en vormen geen grond voor afkeuring.</li>
              <li>Droogtijden, werking van materialen en eigenschappen van ondergronden kunnen invloed hebben op het eindresultaat.</li>
              <li>Van Wonderen Tegelwerken heeft het recht werkzaamheden geheel of gedeeltelijk door derden te laten uitvoeren.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 7 – Meerwerk</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>Werkzaamheden buiten de oorspronkelijke opdracht worden beschouwd als meerwerk.</li>
              <li>Meerwerk wordt afzonderlijk gefactureerd tegen het geldende tarief.</li>
              <li>Mondeling of digitaal overeengekomen meerwerk is bindend.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 8 – Betaling</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>Facturen dienen binnen 7 dagen na factuurdatum te worden voldaan tenzij schriftelijk anders overeengekomen.</li>
              <li>Van Wonderen Tegelwerken heeft het recht een aanbetaling te verlangen.</li>
              <li>Bij niet tijdige betaling is opdrachtgever van rechtswege in verzuim.</li>
              <li>Wettelijke rente, incassokosten en gerechtelijke kosten komen volledig voor rekening van opdrachtgever.</li>
              <li>Van Wonderen Tegelwerken heeft het recht werkzaamheden op te schorten totdat volledige betaling heeft plaatsgevonden.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 9 – Oplevering en klachten</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>Werkzaamheden gelden als opgeleverd zodra opdrachtgever het werk in gebruik neemt, akkoord geeft of Van Wonderen Tegelwerken redelijkerwijs heeft aangegeven dat het werk gereed is.</li>
              <li>Klachten dienen binnen 5 werkdagen na oplevering schriftelijk gemeld te worden.</li>
              <li>Klachten geven opdrachtgever geen recht betalingsverplichtingen op te schorten.</li>
              <li>Kleine esthetische afwijkingen of normale werking van materialen vormen geen reden voor afkeuring.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 10 – Aansprakelijkheid</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>Van Wonderen Tegelwerken is uitsluitend aansprakelijk voor directe schade veroorzaakt door aantoonbare opzet of grove nalatigheid.</li>
              <li>Aansprakelijkheid is beperkt tot het factuurbedrag van de betreffende werkzaamheden.</li>
              <li>
                Van Wonderen Tegelwerken is niet aansprakelijk voor:
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>gevolgschade;</li>
                  <li>indirecte schade;</li>
                  <li>vertragingen door derden;</li>
                  <li>scheurvorming;</li>
                  <li>werking van ondergronden;</li>
                  <li>vochtproblemen;</li>
                  <li>schade veroorzaakt door materialen van opdrachtgever.</li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 11 – Overmacht</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>Van Wonderen Tegelwerken is niet aansprakelijk voor vertragingen of tekortkomingen als gevolg van overmacht.</li>
              <li>
                Onder overmacht wordt onder andere verstaan: ziekte, weersomstandigheden, verkeersproblemen, materiaaltekorten, storingen, uitval van leveranciers, overheidsmaatregelen.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 12 – Garantie</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>Garantie wordt uitsluitend verleend op correct uitgevoerde werkzaamheden.</li>
              <li>
                Garantie vervalt indien:
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>derden werkzaamheden uitvoeren aan het geleverde werk;</li>
                  <li>schade ontstaat door onjuist gebruik;</li>
                  <li>sprake is van vocht, verzakking of werking van materialen;</li>
                  <li>instructies niet worden opgevolgd.</li>
                </ul>
              </li>
              <li>Op kitwerk wordt 1 jaar garantie verleend. Tegel- en voegwerk: 5 jaar garantie.</li>
              <li>Kitwerk en voegwerk vallen onder normale onderhoudsgevoelige onderdelen.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 13 – Eigendomsvoorbehoud</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>Alle geleverde materialen blijven eigendom van Van Wonderen Tegelwerken totdat volledige betaling heeft plaatsgevonden.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary-900">Artikel 14 – Toepasselijk recht en geschillen</h2>
            <ol className="mt-4 space-y-2 list-decimal pl-5">
              <li>Op alle overeenkomsten is uitsluitend Nederlands recht van toepassing.</li>
              <li>Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement waarin Van Wonderen Tegelwerken gevestigd is.</li>
            </ol>
          </section>
        </div>
      </article>
    </section>
  )
}
