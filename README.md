# Elfdahls Fin Snickeri – demo (ljus version)

Vite + React + TypeScript + Tailwind. Ljus, varm och elegant.
Bokning och kontaktformulär är skal (UI fungerar, inget skickas).

## Vad ändrades i denna version
Hela paletten är uppljusad. Tidigare mörka grafit-sektioner är nu ljusa
(kräm/oak) med mörk text. Mörkt används bara där det behövs:
- Hero (fotobakgrund, så vit/guld-loggan och rubriken syns)
- Header vid scroll och på undersidor (vit/guld-logga behöver mörk botten)
- Footer
- Lightbox (helskärmsvisning av bilder)

## Filstruktur
```
elfdahls/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── elfdahlslogo.png    ← din befintliga logga (lägg hit om den inte redan finns)
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── data/content.ts      ← all text, tjänster, projekt, bild-URL:er
    ├── components/
    │   ├── Header.tsx
    │   ├── Footer.tsx        ← "Drivs av Ottoniq.se"-länk längst ner
    │   ├── Bildgalleri.tsx   ← galleri med lightbox
    │   └── Vardekarusell.tsx ← löpande karusell
    └── pages/
        ├── Hem.tsx
        ├── Om.tsx
        ├── Projekt.tsx       ← grupperat per kategori
        ├── Tjanst.tsx        ← egen sida per tjänst
        ├── Boka.tsx          ← bokningsskal (demo)
        └── Kontakt.tsx
```

## Byta till riktiga bilder
Alla bild-URL:er är Unsplash-platshållare. Lägg deras egna bilder i public/
och ändra URL:erna i src/data/content.ts (per tjänst, fältet `bilder`) samt
`bildPerKategori`/`kortbild` i Projekt.tsx respektive Hem.tsx.

## Kör lokalt
```
npm install
npm run dev
```
