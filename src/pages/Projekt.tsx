import { useState } from 'react';
import { projekt } from '../data/content';

const bildPerKategori: Record<string, string[]> = {
  Möbler: ['/Mobler1.jpeg', '/Mobler3.jpeg', '/Mobler6.jpeg'],
  Specialsnickeri: ['/Mobler3.jpeg', '/Mobler6.jpeg'],
  Garderober: ['/Kok5.jpg', '/Kok3.jpeg'],
  'Butik & kontor': ['/Butik2.jpg', '/Butik8.jpg', '/Butik9.jpg'],
};

const ordning = ['Möbler', 'Kök & garderober', 'Garderober', 'Butik & kontor', 'Specialsnickeri'];

const kategorier = ['Alla', ...Array.from(new Set(projekt.map((p) => p.kategori)))];

export default function Projekt() {
  const [filter, setFilter] = useState('Alla');

  // Vilka kategorier som ska visas (en, eller alla)
  const visaKategorier =
    filter === 'Alla'
      ? Array.from(new Set(projekt.map((p) => p.kategori))).sort(
          (a, b) => ordning.indexOf(a) - ordning.indexOf(b)
        )
      : [filter];

  return (
    <div className="bg-ek-50">
      {/* Sidhuvud */}
      <section className="bg-grafit-900 pt-36 pb-20">
        <div className="mx-auto max-w-content px-6">
          <p className="overlinje mb-4 text-massing-ljus">Projekt</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-tight text-ek-50 sm:text-6xl">
            Ett urval av vad vi byggt.
          </h1>
          <p className="mt-5 max-w-xl text-ek-100/80">
            Från en isolerad vinkällardörr till hela hotellrum – varje projekt
            börjar med en skiss och slutar på plats hos kund.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="papperskorn">
        <div className="mx-auto max-w-content px-6 pt-16">
          <div className="flex flex-wrap gap-3">
            {kategorier.map((k) => (
              <button
                key={k}
                onClick={() => setFilter(k)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                  filter === k
                    ? 'border-grafit-900 bg-grafit-900 text-ek-50'
                    : 'border-ek-300 bg-ek-50 text-grafit-700 hover:border-grafit-400'
                }`}
              >
                {k}
              </button>
            ))}
          </div>
        </div>

        {/* Grupperat per kategori */}
        <div className="mx-auto max-w-content px-6 py-12">
          {visaKategorier.map((kategori) => {
            const iKategori = projekt.filter((p) => p.kategori === kategori);
            if (iKategori.length === 0) return null;

            return (
              <div key={kategori} className="mb-16 last:mb-0">
                {/* Kategorirubrik */}
                <div className="mb-7 flex items-center gap-4">
                  <h2 className="font-serif text-3xl text-grafit-900">
                    {kategori}
                  </h2>
                  <span className="h-px flex-1 bg-ek-300" />
                  <span className="text-sm text-grafit-400">
                    {iKategori.length} projekt
                  </span>
                </div>

                {/* Projekt i kategorin */}
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                  {iKategori.map((p, idx) => (
                    <article
                      key={p.id}
                      className="group overflow-hidden rounded-sm bg-ek-50 shadow-mjuk"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={(bildPerKategori[p.kategori] ?? [])[idx % (bildPerKategori[p.kategori]?.length ?? 1)]}
                          alt={p.titel}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute left-3 top-3 rounded-full bg-grafit-950/80 px-3 py-1 text-xs uppercase tracking-wide text-ek-100">
                          {p.kategori}
                        </span>
                      </div>
                      <div className="p-6">
                        <div className="flex items-baseline justify-between">
                          <h3 className="font-serif text-xl text-grafit-900">
                            {p.titel}
                          </h3>
                          <span className="text-sm text-grafit-400">{p.ar}</span>
                        </div>
                        <p className="mt-1 text-sm text-massing-mork">{p.plats}</p>
                        <p className="mt-3 text-sm leading-relaxed text-grafit-600">
                          {p.beskrivning}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}

          <p className="mt-4 text-center text-sm italic text-grafit-400">
            Fler projekt läggs till löpande.
          </p>
        </div>
      </section>
    </div>
  );
}