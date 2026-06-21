import { foretag, kontakter, varderingar } from '../data/content';

export default function Om() {
  return (
    <div className="bg-ek-50">
      {/* Sidhuvud */}
      <section className="border-b border-ek-200 bg-ek-100 pt-36 pb-20">
        <div className="mx-auto max-w-content px-6">
          <p className="overlinje mb-4 text-massing-mork">Om oss</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-tight text-grafit-900 sm:text-6xl">
            Arbete med trä sedan {foretag.grundat}.
          </h1>
        </div>
      </section>

      {/* Berättelse */}
      <section className="papperskorn">
        <div className="mx-auto max-w-content px-6 py-20">
          <div className="grid gap-14 md:grid-cols-[1.3fr_1fr]">
            <div className="space-y-6 text-lg leading-relaxed text-grafit-700">
              <p className="font-serif text-2xl italic text-grafit-900">
                Vi gör många typer av möbler och inredning.
              </p>
              <p>
                Sedan {foretag.grundat} har vi haft ett kompetent team med stort
                engagemang som alltid är ute efter nya utmaningar. Vi har god
                service och hög kvalitet på montage och inredning, och är alltid
                redo att tillgodose dina önskemål.
              </p>
              <p>
                Vi har omfattande erfarenhet och har arbetat med en mängd olika
                former av projekt genom åren – allt från platsbyggda möbler och
                inredning för privatpersoner till stora butiks- och
                kontorsutföranden.
              </p>
              <p>
                {foretag.beskrivning} Vi finns på {foretag.adress.gata} i{' '}
                {foretag.adress.ort}, men jobbar i hela landet.
              </p>
            </div>

            {/* Faktaruta */}
            <aside className="h-fit rounded-sm border border-ek-300 bg-ek-100 p-8">
              <h3 className="font-serif text-xl text-grafit-900">
                I korthet
              </h3>
              <span className="signatur-linje my-4" />
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-grafit-500">Grundat</dt>
                  <dd className="font-medium text-grafit-900">
                    {foretag.grundat}
                  </dd>
                </div>
                <div>
                  <dt className="text-grafit-500">Ort</dt>
                  <dd className="font-medium text-grafit-900">
                    {foretag.adress.ort}, 10 min från Göteborg
                  </dd>
                </div>
                <div>
                  <dt className="text-grafit-500">Specialitet</dt>
                  <dd className="font-medium text-grafit-900">
                    Möbler, kök & platsbyggd inredning
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-y border-ek-200 bg-ek-100">
        <div className="mx-auto max-w-content px-6 py-20">
          <p className="overlinje mb-4 text-massing-mork">Människorna</p>
          <h2 className="mb-12 font-serif text-4xl text-grafit-900">
            Vilka du pratar med
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {kontakter.map((k) => (
              <div
                key={k.epost}
                className="flex items-center gap-5 rounded-sm border border-ek-200 bg-ek-50 p-7 shadow-mjuk"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-massing/15 font-serif text-2xl text-massing-mork">
                  {k.namn
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-grafit-900">{k.namn}</h3>
                  <p className="text-sm uppercase tracking-wide text-massing-mork">
                    {k.roll}
                  </p>
                  <p className="mt-2 text-sm text-grafit-600">{k.telefon}</p>
                  <a
                    href={`mailto:${k.epost}`}
                    className="text-sm text-grafit-600 transition-colors hover:text-massing-mork"
                  >
                    {k.epost}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Värderingar */}
      <section className="papperskorn">
        <div className="mx-auto max-w-content px-6 py-20 text-center">
          <span className="signatur-linje mb-6" />
          <h2 className="mb-10 font-serif text-3xl text-grafit-900 sm:text-4xl">
            Det vi står för
          </h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {varderingar.map((v) => (
              <li
                key={v}
                className="rounded-full border border-ek-300 bg-ek-100 px-5 py-2 text-sm font-medium text-grafit-700"
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
