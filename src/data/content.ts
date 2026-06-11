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
  beskrivning: string;
}

export const tjanster: Tjanst[] = [
  {
    id: 'mobler',
    titel: 'Möbler & specialsnickerier',
    ingress: 'Platsbyggt, från skiss till färdig detalj.',
    beskrivning:
      'Vi tillverkar platsbyggda möbler på uppdrag från samarbetspartners och direkt från dig som kund. Varje stycke ritas, tillverkas och anpassas efter rummet det ska leva i.',
  },
  {
    id: 'kok',
    titel: 'Kök & inredning på beställning',
    ingress: 'Flexibelt – allt från utseende till storlek.',
    beskrivning:
      'Vår köks- och garderobsserie är mycket flexibel. Vi formger luckor, stommar och lösningar efter dina mått och din smak, med material som håller i generationer.',
  },
  {
    id: 'butik',
    titel: 'Butik- & kontorsinredning',
    ingress: 'Helhetslösningar för publika rum.',
    beskrivning:
      'En total inredningslösning tillsammans med samarbetspartners och direkt till kund för allmänna utrymmen – från butiksdiskar till mötesrum.',
  },
  {
    id: 'ritning',
    titel: 'Ritning & 3D-underlag',
    ingress: 'Se rummet innan en spån har sågats.',
    beskrivning:
      'Ritningar och underlag i bland annat 3D. Vi visualiserar projektet i förväg så att du kan känna dig trygg med varje beslut innan tillverkningen börjar.',
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