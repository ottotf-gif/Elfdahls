# Elfdahls Fin Snickeri – demo

Mörk/varm, rustik-elegant demo. Vite + React + TypeScript + Tailwind.
Alla sidor finns; **bokning och kontaktformulär är skal** (UI fungerar, men inget skickas).

## Var varje fil ska ligga

Ersätt/lägg in i din bolt.new-struktur enligt nedan. **Allt här är nytt** – din
gamla start kan tas bort.

```
elfdahls/
├── index.html                  ← NY (ersätt befintlig)
├── package.json                ← NY (slå ihop dependencies om du har egna)
├── tsconfig.json               ← NY
├── vite.config.ts              ← NY
├── tailwind.config.js          ← NY  ← viktig: färger & typsnitt bor här
├── postcss.config.js           ← NY
├── public/
│   └── elfdahlslogo.png        ← DIN befintliga logga (vit + guld). Ligger redan här.
└── src/
    ├── main.tsx                ← NY
    ├── App.tsx                 ← NY  ← all routing (state-baserad, ingen router)
    ├── index.css               ← NY  ← Tailwind + Google Fonts + bas-stilar
    ├── data/
    │   └── content.ts          ← NY  ← ALL text/firmainfo. Ändra innehåll HÄR.
    ├── components/
    │   ├── Header.tsx          ← NY
    │   └── Footer.tsx          ← NY
    └── pages/
        ├── Hem.tsx             ← NY
        ├── Om.tsx              ← NY
        ├── Projekt.tsx         ← NY
        └── Boka.tsx            ← NY  ← bokningsskal (demo)
        └── Kontakt.tsx         ← NY
```

## Vad som INTE fungerar än (med flit)

- **Boka.tsx** – stegvis bokningsflöde. Sista steget visar bara en bekräftelse.
  Sök på `TODO: skicka till backend` för att koppla in kalender/API.
- **Kontakt.tsx** – formuläret visar en tack-vy men skickar inget.

## Att byta ut sen

- Hero-bild och projektbilder pekar mot Unsplash-platshållare. Byt mot egna
  foton: lägg i `public/` och ändra `backgroundImage` i `Hem.tsx` samt
  `bildPerKategori` i `Projekt.tsx`.
- Texter, tjänster, projekt, kontakter: allt ligger i `src/data/content.ts`.

## Kör lokalt
```
npm install
npm run dev
```