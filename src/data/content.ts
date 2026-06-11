// All firmainfo samlad på ett ställe – lätt att uppdatera utan att röra komponenterna.

export const foretag = {
  namn: 'Elfdahls',
  undertitel: 'Fin Snickeri',
  grundat: 2006,
  ort: 'Kungälv',
  tagline: 'Möbler och inredning, byggd för hand sedan 2006.',
  beskrivning:
    'Elfdahls är ett mångsidigt snickeri som tillverkar inredning och möbler, tio minuter från Göteborg.',
  adress: {
    gata: 'Svarvaregatan 23',
    postnr: '442 34',
    ort: 'Kungälv',
  },
};

export const kontakter = [
  {
    namn: 'Urban Elfdahl',
    roll: 'Daglig ledare',
    telefon: '070-992 93 98',
    epost: 'urban@elfdahl.se',
  },
  {
    namn: 'Magnus Sundén',
    roll: 'Arbetsledare',
    telefon: '076-165 23 35',
    epost: 'magnus@elfdahl.se',
  },
];

export interface Tjanst {
  id: string;
  titel: string;
  ingress: string;
  // Kort text på kortet
  kort: string;
  // Längre text på tjänstens egen sida (en eller flera stycken)
  text: string[];
  // Bildernas filnamn. Lägg riktiga bilder i public/tjanster/ och ändra här.
  bilder: string[];
}

export const tjanster: Tjanst[] = [
  {
    id: 'mobler',
    titel: 'Möbler och hyllor',
    ingress: 'Platsbyggt, från skiss till färdig detalj.',
    kort: 'Vi tillverkar platsbyggda möbler på uppdrag från samarbetspartners och direkt från dig som kund.',
    text: [
      'Vi tillverkar platsbyggda möbler på uppdrag från samarbetspartners och direkt från dig som kund.',
      'Möbler med kvalitetsmaterial och hög finish. Rejäla stommar och sammansättningar. Till exempel konsollbord, bokhyllor, vägghängda tv-bänkar, vitrinskåp, bord, bänkar och sänggavlar.',
    ],
    bilder: [
      '/Mobler1.jpeg',
      '/Mobler2.jpeg',
      '/Mobler3.jpeg',
      '/Mobler4.jpeg',
      '/Mobler5.jpeg',
      '/Mobler6.jpeg',
    ],
  },
  {
    id: 'kok',
    titel: 'Kök och garderober',
    ingress: 'Flexibelt – allt från utseende till storlek.',
    kort: 'Vår köks- och garderobsserie är mycket flexibel, allt från utseende till storlek.',
    text: [
      'Vår köks- och garderobsserie är mycket flexibel, allt från utseende till storlek.',
      'Med CNC-programmering och proffsiga underlag har vi tagit fram en serie kök och garderober med inredning som är flexibel och går att bygga utifrån era mått. Vi ritar upp ett gemensamt förslag på ert kök eller era garderober. Utifrån det kan vi använda 3D-ritningarna till att göra underlag med endast några knapptryckningar, och sen är tillverkningen igång på riktigt.',
    ],
    bilder: [
      '/Kok1.jpeg',
      '/Kok2.jpeg',
      '/Kok3.jpeg',
      '/Kok4.jpeg',
      '/Kok5.jpg',
      '/Kok6.gif',
      '/Kok7.jpg',
    ],
  },
  {
    id: 'butik',
    titel: 'Butik- och kontorsinredning',
    ingress: 'Helhetslösningar för publika rum.',
    kort: 'En total inredningslösning med samarbetspartners och direkt till kund för allmänna utrymmen.',
    text: [
      'En total inredningslösning med samarbetspartners och direkt till kund för allmänna utrymmen.',
      'Vi arbetar med väl kända arkitekter som har helhetslösningar, där vi är med och förverkligar idéer och ritningar till färdig produkt.',
    ],
    bilder: [
      '/Butik1.jpg',
      '/Butik2.jpg',
      '/Butik3.jpg',
      '/Butik4.jpg',
      '/Butik5.jpg',
      '/Butik6.jpg',
      '/Butik7.jpg',
      '/Butik8.jpg',
      '/Butik9.jpg',
    ],
  },
  {
    id: 'ritning',
    titel: '3D-ritningar',
    ingress: 'Se rummet innan en spån har sågats.',
    kort: 'Ritningar och underlag i bland annat 3D är framtiden även inom snickeri.',
    text: [
      'Ritningar och underlag i bland annat 3D är framtiden även inom snickeri.',
      'Underlag till projekten är en stor förändring och underlättar vår produktion. Vi visualiserar projektet i förväg så att du kan känna dig trygg med varje beslut innan tillverkningen börjar.',
    ],
    bilder: [
      '/3d1.jpeg',
      '/3d2.jpeg',
      '/3d3.jpeg',
      '/3d4.jpeg',
      '/3d5.jpeg',
      '/3d6.jpeg',
    ],
  },
];

export interface Projekt {
  id: string;
  titel: string;
  plats: string;
  kategori: string;
  ar: number;
  beskrivning: string;
}

// Hämtade och bearbetade från deras egna inlägg – ger trovärdighet
export const projekt: Projekt[] = [
  {
    id: 'vinkallardorr',
    titel: 'Isolerad vinkällardörr',
    plats: 'Privatbostad, Göteborg',
    kategori: 'Specialsnickeri',
    ar: 2024,
    beskrivning: 'En fin isolerad vinkällardörr, allt från skiss till montering.',
  },
  {
    id: 'garderob-kivik',
    titel: 'Platsbyggd garderob',
    plats: 'Kivik, Skåne',
    kategori: 'Garderober',
    ar: 2024,
    beskrivning: 'Monterad garderob anpassad efter rummets vinklar och tak.',
  },
  {
    id: 'vildmarkshotell',
    titel: 'Inredning vildmarkshotell',
    plats: 'Kolmården',
    kategori: 'Butik & kontor',
    ar: 2023,
    beskrivning: 'Närproducerad inredning byggd på plats till vildmarkshotellet.',
  },
  {
    id: 'disk-skinn-metall',
    titel: 'Disk i skinn & metall',
    plats: 'Butiksprojekt',
    kategori: 'Butik & kontor',
    ar: 2023,
    beskrivning: 'En liten disk i skinn och metall – materialmöten som kräver precision.',
  },
  {
    id: 'gastrumsgarderob',
    titel: 'Garderob i gästrum',
    plats: 'Privatbostad',
    kategori: 'Garderober',
    ar: 2023,
    beskrivning: 'En liten garderob i gästrum, måttanpassad in i minsta detalj.',
  },
  {
    id: 'hotellrum-sthlm',
    titel: 'Rum på hotell',
    plats: 'Stockholm',
    kategori: 'Butik & kontor',
    ar: 2022,
    beskrivning: 'Nya rum på ett lite finare hotell – fast inredning och möbler.',
  },
  {
    id: 'tv-bank-ek',
    titel: 'Vägghängd tv-bänk i ek',
    plats: 'Privatbostad',
    kategori: 'Möbler',
    ar: 2023,
    beskrivning: 'Vägghängd tv-bänk med lådor, byggd i massiv ek med hög finish.',
  },
  {
    id: 'vitrinskap',
    titel: 'Vitrinskåp med belysning',
    plats: 'Privatbostad',
    kategori: 'Möbler',
    ar: 2022,
    beskrivning: 'Platsbyggt vitrinskåp med glasdörrar och integrerad belysning.',
  },
];

export const varderingar = [
  'Kommunikation',
  'Ansvar',
  'Hantverk',
  'Lagarbete',
  'Säkerhet',
  'Erfarenhet',
  'Kvalitet',
  'Gemenskap',
];

export const navlankar = [
  { label: 'Hem', href: '#hem', sida: 'hem' as const },
  { label: 'Om oss', href: '#om', sida: 'om' as const },
  { label: 'Projekt', href: '#projekt', sida: 'projekt' as const },
  { label: 'Boka', href: '#boka', sida: 'boka' as const },
  { label: 'Kontakt', href: '#kontakt', sida: 'kontakt' as const },
];

// Partner som driver sajten
export const partner = {
  namn: 'Ottoniq.se',
  url: 'https://ottoniq.se',
};