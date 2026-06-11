import { foretag, tjanster, varderingar } from '../data/content';

interface HemProps {
  navigera: (sida: string) => void;
}

export default function Hem({ navigera }: HemProps) {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        id="hem"
        className="relative flex min-h-screen items-center overflow-hidden bg-grafit-900"
      >
        {/* Bakgrundsbild: verkstad. Byt mot egen bild i /public. */}
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
              <button onClick={() => navigera('boka')} className="knapp-primar bg-massing text-grafit-950 hover:bg-massing-ljus">
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

        {/* Liten detalj: vertikal "scrolla"-markering */}
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

      {/* ── TJÄNSTER ─────────────────────────────────────────── */}
      <section id="tjanster" className="bg-grafit-900 text-ek-50">
        <div className="mx-auto max-w-content px-6 py-24">
          <div className="mb-14 text-center">
            <p className="overlinje mb-4 text-massing-ljus">Vår verksamhet</p>
            <h2 className="font-serif text-4xl text-ek-50 sm:text-5xl">
              Det vi gör bäst
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-sm bg-grafit-800 sm:grid-cols-2">
            {tjanster.map((t, i) => (
              <article
                key={t.id}
                className="group bg-grafit-900 p-9 transition-colors duration-300 hover:bg-grafit-800"
              >
                <span className="font-serif text-3xl text-massing/50">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-serif text-2xl text-ek-50">{t.titel}</h3>
                <p className="mt-1 text-sm italic text-massing-ljus">
                  {t.ingress}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ek-100/75">
                  {t.beskrivning}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── VÄRDERINGAR ──────────────────────────────────────── */}
      <section className="bg-ek-100 papperskorn">
        <div className="mx-auto max-w-content px-6 py-20">
          <div className="flex flex-col items-center text-center">
            <span className="signatur-linje mb-6" />
            <h2 className="mb-3 font-serif text-3xl text-grafit-900 sm:text-4xl">
              Hos kund och i verkstad
            </h2>
            <p className="mb-10 max-w-md text-grafit-600">
              Värden vi bär med oss in i varje projekt, oavsett storlek.
            </p>
            <ul className="flex flex-wrap justify-center gap-3">
              {varderingar.map((v) => (
                <li
                  key={v}
                  className="rounded-full border border-ek-300 bg-ek-50 px-5 py-2 text-sm font-medium text-grafit-700"
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
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
            <button onClick={() => navigera('boka')} className="knapp-primar bg-massing text-grafit-950 hover:bg-massing-ljus">
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