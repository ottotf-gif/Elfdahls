import { foretag, tjanster } from '../data/content';
import { bildUrl } from '../lib/storage';
import Vardekarusell from '../components/Vardekarusell';

interface HemProps {
  navigera: (sida: string) => void;
  oppnaTjanst: (id: string) => void;
}

const kortbild: Record<string, string> = {
  mobler: bildUrl('Mobler1.jpeg'),
  kok: bildUrl('Kok2.jpeg'),
  butik: bildUrl('Butik2.jpg'),
  ritning: bildUrl('3d1.jpeg'),
};

export default function Hem({ navigera, oppnaTjanst }: HemProps) {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        id="hem"
        className="relative flex min-h-screen items-center overflow-hidden bg-grafit-900"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-grafit-950/95 via-grafit-950/80 to-grafit-900/40" />
        <div className="absolute inset-0 papperskorn opacity-40" />

        <div className="relative mx-auto w-full max-w-content px-6 py-32">
          <div className="max-w-2xl animate-fadeUp">
            <p className="overlinje mb-6 text-massing-ljus">
              Snickeri i {foretag.ort} · sedan {foretag.grundat}
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] text-ek-50 sm:text-6xl lg:text-7xl">
              Möbler och inredning,
              <span className="block italic text-massing-ljus">
                byggd för hand.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ek-100/85">
              Vi erbjuder en omfattande lösning inom möbel och inredning, och ser
              alltid möjligheter utifrån era önskemål. Tio minuter från Göteborg.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => navigera('boka')}
                className="knapp-primar bg-massing text-grafit-950 hover:bg-massing-ljus"
              >
                Boka ett möte
              </button>
              <button
                onClick={() => navigera('projekt')}
                className="knapp-sekundar border-ek-100/40 text-ek-50 hover:border-ek-50 hover:bg-ek-50 hover:text-grafit-900"
              >
                Se våra projekt
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ek-100/50 md:flex">
          <span className="text-[10px] uppercase tracking-widest2">Scrolla</span>
          <span className="h-10 w-px bg-ek-100/30" />
        </div>
      </section>

      {/* ── INTRO / FILOSOFI ─────────────────────────────────── */}
      <section className="bg-ek-50 papperskorn">
        <div className="mx-auto max-w-content px-6 py-24">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div>
              <span className="signatur-linje mb-6" />
              <h2 className="font-serif text-4xl leading-tight text-grafit-900 sm:text-5xl">
                Ett litet team med stort engagemang.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-grafit-700">
              <p>
                Sedan {foretag.grundat} har vi haft ett kompetent team som alltid
                är ute efter nya utmaningar. Vi är med genom hela processen, från
                ritning och tillverkning till leverans och montering.
              </p>
              <p>
                Allt från platsbyggda möbler och inredning för privatpersoner till
                stora butiks- och kontorsuppdrag. Tillsammans gör vi idéerna
                verkliga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TJÄNSTER (bild över, titel under – klickbara) ────── */}
      <section id="tjanster" className="bg-grafit-900 text-ek-50">
        <div className="mx-auto max-w-content px-6 py-24">
          <div className="mb-14 text-center">
            <p className="overlinje mb-4 text-massing-ljus">Vår verksamhet</p>
            <h2 className="font-serif text-4xl text-ek-50 sm:text-5xl">
              Det vi gör bäst
            </h2>
            <p className="mx-auto mt-4 max-w-md text-ek-100/70">
              Klicka på en kategori för att se exempel och läsa mer.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2">
            {tjanster.map((t) => (
              <button
                key={t.id}
                onClick={() => oppnaTjanst(t.id)}
                className="group text-left"
              >
                <div className="relative aspect-[5/3] overflow-hidden rounded-sm bg-grafit-800">
                  <img
                    src={kortbild[t.id]}
                    alt={t.titel}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-grafit-950/10 transition-colors duration-300 group-hover:bg-grafit-950/0" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-ek-50 transition-colors group-hover:text-massing-ljus sm:text-3xl">
                  {t.titel}
                </h3>
                <span className="signatur-linje my-3" />
                <p className="max-w-md text-sm leading-relaxed text-ek-100/75">
                  {t.kort}
                </p>
                <span className="mt-4 inline-block text-sm font-medium uppercase tracking-widest text-massing-ljus opacity-0 transition-opacity group-hover:opacity-100">
                  Läs mer →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── VÄRDERINGAR (löpande karusell) ───────────────────── */}
      <section className="bg-ek-100 papperskorn">
        <div className="mx-auto max-w-content px-6 py-20">
          <div className="mb-10 flex flex-col items-center text-center">
            <span className="signatur-linje mb-6" />
            <h2 className="mb-3 font-serif text-3xl text-grafit-900 sm:text-4xl">
              Hos kund och i verkstad
            </h2>
            <p className="max-w-md text-grafit-600">
              Värden vi bär med oss in i varje projekt, oavsett storlek.
            </p>
          </div>
        </div>
        {/* Karusellen i full bredd */}
        <Vardekarusell />
        <div className="py-10" />
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-grafit-950">
        <div className="absolute inset-0 papperskorn opacity-30" />
        <div className="relative mx-auto max-w-content px-6 py-20 text-center">
          <h2 className="font-serif text-3xl text-ek-50 sm:text-4xl">
            Har du ett projekt på gång?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ek-100/75">
            Berätta om din idé, så ser vi tillsammans vad som är möjligt.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigera('boka')}
              className="knapp-primar bg-massing text-grafit-950 hover:bg-massing-ljus"
            >
              Boka ett möte
            </button>
            <button
              onClick={() => navigera('kontakt')}
              className="knapp-sekundar border-ek-100/40 text-ek-50 hover:border-ek-50 hover:bg-ek-50 hover:text-grafit-900"
            >
              Kontakta oss
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}