/**
 * Testimonials — echte Google reviews van Van Wonderen Tegelwerken.
 *
 * Bron: https://www.google.com/maps/place/?q=place_id:ChIJfcatV_uhxkcRTfbk2q7Iaas
 * Publieke review-URL (deel deze met klanten):
 * https://search.google.com/local/writereview?placeid=ChIJfcatV_uhxkcRTfbk2q7Iaas
 *
 * Voeg nieuwe reviews toe zodra ze binnenkomen — teksten letterlijk uit Google.
 */

export type Testimonial = {
  text: string
  author: string
  location: string
  project: string
  rating: 5 // alleen 5-sterren tonen
}

export const testimonials: Testimonial[] = [
  {
    text: 'Jaap van Wonderen heeft een prachtig vloertje gelegd! Hij moest werken met door mij aangeschafte budgettegels die net verschillende afmetingen hadden, op een vloer met een bult, tegen slordige woningbouw-tegelwanden, -plinten en -dorpels aan. Je zou denken dat je die obstakels wel terugziet in het eindresultaat, maar niet als je Jaap inschakelt dus!',
    author: 'Liza Verhaert',
    location: 'Google review',
    project: 'Vloertegelwerk',
    rating: 5,
  },
  {
    text: 'Na eindelijk geslaagd te zijn voor een tegelvloer werd ons Jaap aangeraden. Wij hebben geen moment getwijfeld over onze aanbeveling. Wat een vakman! Mijn vrouw noemde hem de tegelfluisteraar — zeer bewust van het juiste legpatroon neemt hij rustig de tijd om de perfecte verdeling te creëren. Vooraf werd duidelijk gecommuniceerd wat de kosten zouden zijn, en bij de eindafrekening werd het zelfs nog iets lager, dat hoor je tegenwoordig nog maar zelden. De vloer ligt er prachtig bij en ook hebben wij totaal geen last gehad van rotzooi of stof, daar er keurig een stoffen loper werd uitgerold door Jaap. Van Wonderen Tegelwerken is zeer aanbevelenswaardig.',
    author: 'Edward',
    location: 'Google review · Local Guide',
    project: 'Tegelvloer',
    rating: 5,
  },
  {
    text: 'Echt een vakman! Heel secuur en hij overlegt goed over de details, bespreekt de opties en mogelijkheden voor de afwerking. Wat ik ontzettend belangrijk vond is dat hij altijd zijn afspraken na kwam. De communicatie was top en hij kon snel schakelen. Van deze man krijg je geen stress in je bouwval!',
    author: 'Brenda Van der Swaluw',
    location: 'Google review',
    project: 'Tegelwerk',
    rating: 5,
  },
  {
    text: 'Toilet, badkamer, keuken en bijkeuken laten tegelen. Goede afspraken en alles netjes en snel afgewerkt. Echt vakwerk, zeker een aanrader!',
    author: 'Marjorie du Pree',
    location: 'Google review · Local Guide',
    project: 'Toilet, badkamer & keuken',
    rating: 5,
  },
  {
    text: 'Wij raden Van Wonderen Tegelwerken zeker aan! Levert super strak tegel- en kitwerk af. Denkt goed mee en adviseert. Erg fijn in de communicatie en komt afspraken na. Heeft in onze nieuwe huis het tegelwerk gedaan en heeft naast het tegelwerk ook allerlei andere dingen afgekit. Zeker een aanrader.',
    author: 'Max de Koning',
    location: 'Google review · Local Guide',
    project: 'Tegelwerk & kitwerk',
    rating: 5,
  },
  {
    text: 'Steengoed in keramisch tegelwerk! Absolute aanrader.',
    author: 'Bart Jaspers',
    location: 'Google review · Local Guide',
    project: 'Keramisch tegelwerk',
    rating: 5,
  },
  {
    text: 'Het allerbeste van het beste.',
    author: 'Mustafa Mirzad',
    location: 'Google review',
    project: 'Tegelwerk',
    rating: 5,
  },
]
