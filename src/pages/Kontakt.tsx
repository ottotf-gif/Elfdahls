import { useState } from 'react';
import { foretag, kontakter } from '../data/content';

interface KontaktProps {
  navigera: (sida: string) => void;
}

export default function Kontakt({ navigera }: KontaktProps) {
  const [skickat, setSkickat] = useState(false);

  return (
    <div className="bg-ek-50">
      {/* Sidhuvud */}
      <section className="bg-grafit-900 pt-36 pb-20">
        <div className="mx-auto max-w-content px-6">
          <p className="overlinje mb-4 text-massing-ljus">Kontakt</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-tight text-ek-50 sm:text-6xl">
            Hör av dig.
          </h1>
          <p className="mt-5 max-w-xl text-ek-100/80">
            Ring, mejla eller skriv några rader nedan – vi svarar så fort vi kan.
          </p>
        </div>
      </section>

      <section className="papperskorn">
        <div className="mx-auto max-w-content px-6 py-16">
          <div className="grid gap-14 md:grid-cols-[1fr_1.2fr]">
            {/* Kontaktuppgifter */}
            <div>
              <span className="signatur-linje mb-6" />
              <h2 className="mb-8 font-serif text-3xl text-grafit-900">
                Prata med oss direkt
              </h2>

              <div className="space-y-7">
                {kontakter.map((k) => (
                  <div key={k.epost}>
                    <p className="font-serif text-xl text-grafit-900">
                      {k.namn}
                    </p>
                    <p className="text-sm uppercase tracking-wide text-massing-mork">
                      {k.roll}
                    </p>
                    <div className="mt-2 space-y-1 text-grafit-700">
                      <p>
                        <a
                          href={`tel:${k.telefon.replace(/\s/g, '')}`}
                          className="transition-colors hover:text-massing-mork"
                        >
                          {k.telefon}
                        </a>
                      </p>
                      <p>
                        <a
                          href={`mailto:${k.epost}`}
                          className="transition-colors hover:text-massing-mork"
                        >
                          {k.epost}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}

                <div className="border-t border-ek-200 pt-7">
                  <p className="text-sm uppercase tracking-wide text-massing-mork">
                    Besök oss
                  </p>
                  <p className="mt-2 text-grafit-700">
                    {foretag.adress.gata}
                    <br />
                    {foretag.adress.postnr} {foretag.adress.ort}
                  </p>
                </div>
              </div>
            </div>

            {/* Formulär (demo) */}
            <div className="rounded-sm border border-ek-300 bg-ek-50 p-8 shadow-mjuk">
              {skickat ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-massing/20">
                    <svg
                      className="h-7 w-7 text-massing-mork"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl text-grafit-900">
                    Tack för ditt meddelande!
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-grafit-500">
                    Detta är en demo, så inget skickas på riktigt – men så här
                    skulle det se ut.
                  </p>
                  <button
                    onClick={() => navigera('hem')}
                    className="mt-6 text-sm font-medium uppercase tracking-widest text-grafit-600 hover:text-grafit-900"
                  >
                    Till startsidan →
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="mb-6 font-serif text-2xl text-grafit-900">
                    Skicka en förfrågan
                  </h2>
                  {/* Demo: skickar inget, visar bara bekräftelse */}
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        placeholder="Namn"
                        className="rounded-sm border border-ek-300 bg-ek-50 px-4 py-3 text-sm outline-none transition-colors focus:border-grafit-900"
                      />
                      <input
                        placeholder="E-post"
                        type="email"
                        className="rounded-sm border border-ek-300 bg-ek-50 px-4 py-3 text-sm outline-none transition-colors focus:border-grafit-900"
                      />
                    </div>
                    <input
                      placeholder="Ämne"
                      className="w-full rounded-sm border border-ek-300 bg-ek-50 px-4 py-3 text-sm outline-none transition-colors focus:border-grafit-900"
                    />
                    <textarea
                      rows={5}
                      placeholder="Ditt meddelande"
                      className="w-full rounded-sm border border-ek-300 bg-ek-50 px-4 py-3 text-sm outline-none transition-colors focus:border-grafit-900"
                    />
                    <button
                      onClick={() => setSkickat(true)}
                      className="knapp-primar w-full"
                    >
                      Skicka
                    </button>
                    <p className="text-center text-xs italic text-grafit-400">
                      Formuläret är en förhandsvisning och skickar inget än.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}