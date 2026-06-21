import { tjanster } from '../data/content';
import Bildgalleri from '../components/Bildgalleri';

interface TjanstProps {
  tjanstId: string;
  navigera: (sida: string) => void;
  oppnaTjanst: (id: string) => void;
}

export default function Tjanst({ tjanstId, navigera, oppnaTjanst }: TjanstProps) {
  const tjanst = tjanster.find((t) => t.id === tjanstId) ?? tjanster[0];
  const andra = tjanster.filter((t) => t.id !== tjanst.id);

  return (
    <div className="bg-ek-50">
      {/* Sidhuvud */}
      <section className="border-b border-ek-200 bg-ek-100 pt-36 pb-16">
        <div className="mx-auto max-w-content px-6">
          <button
            onClick={() => navigera('hem')}
            className="mb-6 text-sm font-medium uppercase tracking-widest text-grafit-500 transition-colors hover:text-massing-mork"
          >
            ← Tillbaka
          </button>
          <p className="overlinje mb-4 text-massing-mork">Vår verksamhet</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-tight text-grafit-900 sm:text-6xl">
            {tjanst.titel}
          </h1>
          <p className="mt-4 max-w-xl font-serif text-xl italic text-grafit-600">
            {tjanst.ingress}
          </p>
        </div>
      </section>

      {/* Text */}
      <section className="papperskorn">
        <div className="mx-auto max-w-content px-6 py-16">
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-grafit-700">
            {tjanst.text.map((stycke, i) => (
              <p key={i}>{stycke}</p>
            ))}
          </div>

          {/* Galleri */}
          <div className="mt-12">
            <div className="mb-6 flex items-center gap-4">
              <span className="signatur-linje" />
              <h2 className="font-serif text-2xl text-grafit-900">Exempel</h2>
            </div>
            <Bildgalleri bilder={tjanst.bilder} alt={tjanst.titel} />
            <p className="mt-6 text-sm italic text-grafit-400">
              Fler exempel läggs till löpande.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ek-700">
        <div className="mx-auto max-w-content px-6 py-14 text-center">
          <h2 className="font-serif text-3xl text-ek-50">
            Vill du veta mer om {tjanst.titel.toLowerCase()}?
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <button onClick={() => navigera('boka')} className="knapp-primar bg-ek-50 text-grafit-900 hover:bg-massing-ljus">
              Boka ett möte
            </button>
            <button
              onClick={() => navigera('kontakt')}
              className="knapp-sekundar border-ek-50/50 text-ek-50 hover:border-ek-50 hover:bg-ek-50 hover:text-grafit-900"
            >
              Kontakta oss
            </button>
          </div>
        </div>
      </section>

      {/* Andra tjänster */}
      <section className="papperskorn">
        <div className="mx-auto max-w-content px-6 py-14">
          <p className="overlinje mb-6 text-massing-mork">Mer av vad vi gör</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {andra.map((t) => (
              <button
                key={t.id}
                onClick={() => oppnaTjanst(t.id)}
                className="rounded-sm border border-ek-300 bg-ek-50 p-6 text-left transition-colors hover:border-grafit-400"
              >
                <h3 className="font-serif text-xl text-grafit-900">{t.titel}</h3>
                <p className="mt-2 text-sm text-grafit-500">{t.ingress}</p>
                <span className="mt-4 inline-block text-sm font-medium text-massing-mork">
                  Läs mer →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
