// All firmainfo samlad på ett ställe – lätt att uppdatera utan att röra komponenterna.

import { bildUrl } from '../lib/storage';

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
      bildUrl('Mobler1.jpeg'),
      bildUrl('Mobler3.jpeg'),
      bildUrl('Mobler6.jpeg'),
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
      bildUrl('Kok2.jpeg'),
      bildUrl('Kok3.jpeg'),
      bildUrl('Kok5.jpg'),
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
      bildUrl('Butik2.jpg'),
      bildUrl('Butik8.jpg'),
      bildUrl('Butik9.jpg'),
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
      bildUrl('3d1.jpeg'),
      bildUrl('3d2.jpeg'),
      bildUrl('3d6.jpeg'),
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
  bild: string;
}

// PLATSHALLARE: Dessa projekt ar exempeltexter baserade pa Elfdahls sociala medier.
// Byt ut mot riktiga projektbeskrivningar fran Urban innan lansering.
export const projekt: Projekt[] = [
  {
    id: 'vinkallardorr',
    titel: 'Isolerad vinkällardörr',
    plats: 'Privatbostad, Göteborg',
    kategori: 'Specialsnickeri',
    ar: 2024,
    beskrivning: 'En fin isolerad vinkällardörr, allt från skiss till montering.',
    bild: '/Mobler6.jpeg',
  },
  {
    id: 'garderob-kivik',
    titel: 'Platsbyggt kök',
    plats: 'Kivik, Skåne',
    kategori: 'Kök',
    ar: 2024,
    beskrivning: 'Platsbyggt kök med köksö, öppna hyllor och marmorbänkskiva.',
    bild: '/Kok5.jpg',
  },
  {
    id: 'vildmarkshotell',
    titel: 'Inredning vildmarkshotell',
    plats: 'Kolmården',
    kategori: 'Butik & kontor',
    ar: 2023,
    beskrivning: 'Närproducerad inredning byggd på plats till vildmarkshotellet.',
    bild: '/Butik2.jpg',
  },
  {
    id: 'disk-skinn-metall',
    titel: 'Butiksinredning med växtvägg',
    plats: 'Butiksprojekt',
    kategori: 'Butik & kontor',
    ar: 2023,
    beskrivning: 'Butiksinredning med klädställningar och integrerad växtvägg.',
    bild: '/Butik8.jpg',
  },
  {
    id: 'gastrumsgarderob',
    titel: 'Garderob med belysning',
    plats: 'Privatbostad',
    kategori: 'Garderober',
    ar: 2023,
    beskrivning: 'Mörk platsbyggd garderob med integrerade spotlights och bänkskiva.',
    bild: '/Kok3.jpeg',
  },
  {
    id: 'hotellrum-sthlm',
    titel: 'Skyltlösning butik',
    plats: 'Stockholm',
    kategori: 'Butik & kontor',
    ar: 2022,
    beskrivning: 'Specialbyggd skyltlösning med integrerad belysning för butik.',
    bild: '/Butik9.jpg',
  },
  {
    id: 'vitrinskap',
    titel: 'Vitrinskåp med belysning',
    plats: 'Privatbostad',
    kategori: 'Möbler',
    ar: 2023,
    beskrivning: 'Platsbyggt vitrinskåp i mörkt trä med glasdörrar och ek-bänkskiva.',
    bild: '/Mobler1.jpeg',
  },
  {
    id: 'tv-bank-ek',
    titel: 'Väggfast förvaring',
    plats: 'Privatbostad',
    kategori: 'Möbler',
    ar: 2022,
    beskrivning: 'Heltäckande förvaringslösning byggd vägg till vägg i mörkt utförande.',
    bild: '/Mobler3.jpeg',
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
  { label: 'Kontakt', href: '#kontakt', sida: 'kontakt' as const },
];

// Partner som driver sajten
export const partner = {
  namn: 'Ottoniq.se',
  url: 'https://ottoniq.se',
};