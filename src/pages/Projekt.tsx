import { useState } from 'react';
import { projekt } from '../data/content';

// Bildplatshållare per kategori – byt mot egna projektbilder i /public/projekt/
const bildPerKategori: Record<string, string> = {
  Specialsnickeri:
    'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=900&q=80',
  Garderober:
    'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=900&q=80',
  'Butik & kontor':
    'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=900&q=80',
};

const kategorier = ['Alla', ...Array.from(new Set(projekt.map((p) => p.kategori)))];

export default function Projekt() {
  const [filter, setFilter] = useState('Alla');

  const synliga =
    filter === 'Alla' ? projekt : projekt.filter((p) => p.kategori === filter);

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

      {/* Filter + galleri */}
      <section className="papperskorn">
        <div className="mx-auto max-w-content px-6 py-16">
          {/* Filterknappar */}
          <div className="mb-10 flex flex-wrap gap-3">
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

          {/* Rutnät */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {synliga.map((p) => (
              <article
                key={p.id}
                className="group overflow-hidden rounded-sm bg-ek-50 shadow-mjuk"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={bildPerKategori[p.kategori]}
                    alt={p.titel}
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

          {/* Demo-notis: galleriet är ett urval */}
          <p className="mt-12 text-center text-sm italic text-grafit-400">
            Fler projekt läggs till löpande.
          </p>
        </div>
      </section>
    </div>
  );
}