import { useState } from 'react';

interface BildgalleriProps {
  bilder: string[];
  alt: string;
}

// Återanvändbart galleri. Klick på en bild öppnar den i helskärm (lightbox).
export default function Bildgalleri({ bilder, alt }: BildgalleriProps) {
  const [oppen, setOppen] = useState<number | null>(null);

  const stang = () => setOppen(null);
  const nasta = () =>
    setOppen((i) => (i === null ? null : (i + 1) % bilder.length));
  const forra = () =>
    setOppen((i) =>
      i === null ? null : (i - 1 + bilder.length) % bilder.length
    );

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {bilder.map((src, i) => (
          <button
            key={src}
            onClick={() => setOppen(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-grafit-800"
          >
            <img
              src={src}
              alt={`${alt} ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-grafit-950/0 transition-colors duration-300 group-hover:bg-grafit-950/15" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {oppen !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-grafit-950/90 p-4"
          onClick={stang}
        >
          <button
            onClick={stang}
            className="absolute right-5 top-5 text-3xl text-ek-100 hover:text-massing-ljus"
            aria-label="Stäng"
          >
            ×
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              forra();
            }}
            className="absolute left-4 text-4xl text-ek-100 hover:text-massing-ljus sm:left-10"
            aria-label="Föregående"
          >
            ‹
          </button>
          <img
            src={bilder[oppen]}
            alt={`${alt} ${oppen + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-sm object-contain shadow-mjuk"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              nasta();
            }}
            className="absolute right-4 text-4xl text-ek-100 hover:text-massing-ljus sm:right-10"
            aria-label="Nästa"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}