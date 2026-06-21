import { useMemo, useState } from 'react';
import { tjanster } from '../data/content';

// ── Bokningsskal ──────────────────────────────────────────────
// Detta är ETT SKAL. UI:t fungerar (man kan klicka sig igenom stegen),
// men ingen data skickas någonstans – sista steget visar bara en
// bekräftelsevy. Koppla in riktig kalender/backend senare där det står
// "TODO: skicka till backend".

type Steg = 1 | 2 | 3 | 4;

interface Bokning {
  tjanst: string;
  datum: string;
  tid: string;
  namn: string;
  epost: string;
  telefon: string;
  meddelande: string;
}

const lediga_tider = ['08:00', '09:30', '11:00', '13:00', '14:30', '16:00'];

// Genererar de kommande 14 vardagarna (demo – inget riktigt schema)
function kommandeVardagar(antal: number): { iso: string; label: string }[] {
  const dagar: { iso: string; label: string }[] = [];
  const d = new Date();
  while (dagar.length < antal) {
    d.setDate(d.getDate() + 1);
    const veckodag = d.getDay();
    if (veckodag === 0 || veckodag === 6) continue; // hoppa helg
    dagar.push({
      iso: d.toISOString().slice(0, 10),
      label: d.toLocaleDateString('sv-SE', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      }),
    });
  }
  return dagar;
}

export default function Boka() {
  const [steg, setSteg] = useState<Steg>(1);
  const [klar, setKlar] = useState(false);
  const [bokning, setBokning] = useState<Bokning>({
    tjanst: '',
    datum: '',
    tid: '',
    namn: '',
    epost: '',
    telefon: '',
    meddelande: '',
  });

  const dagar = useMemo(() => kommandeVardagar(14), []);

  const uppdatera = (falt: keyof Bokning, varde: string) =>
    setBokning((b) => ({ ...b, [falt]: varde }));

  const kanGaVidare =
    (steg === 1 && bokning.tjanst) ||
    (steg === 2 && bokning.datum && bokning.tid) ||
    (steg === 3 && bokning.namn && bokning.epost);

  const skicka = () => {
    // TODO: skicka till backend / kalender-API.
    // I demon visar vi bara en bekräftelse.
    setKlar(true);
  };

  return (
    <div className="bg-ek-50">
      {/* Sidhuvud */}
      <section className="border-b border-ek-200 bg-ek-100 pt-36 pb-20">
        <div className="mx-auto max-w-content px-6">
          <p className="overlinje mb-4 text-massing-mork">Boka</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-tight text-grafit-900 sm:text-6xl">
            Boka ett möte med oss.
          </h1>
          <p className="mt-5 max-w-xl text-grafit-600">
            Välj vad ärendet gäller och en tid som passar, så hörs vi. Vi går
            igenom din idé tillsammans – kostnadsfritt och förutsättningslöst.
          </p>
        </div>
      </section>

      {/* Demo-banner */}
      <div className="border-y border-massing/30 bg-ek-100">
        <div className="mx-auto max-w-content px-6 py-3 text-center text-sm text-massing-mork">
          Detta bokningssystem är en förhandsvisning – inga riktiga bokningar
          registreras än.
        </div>
      </div>

      <section className="papperskorn">
        <div className="mx-auto max-w-2xl px-6 py-16">
          {klar ? (
            <Bekraftelse bokning={bokning} dagar={dagar} />
          ) : (
            <>
              {/* Stegindikator */}
              <ol className="mb-12 flex items-center justify-between">
                {[
                  { n: 1, t: 'Tjänst' },
                  { n: 2, t: 'Tid' },
                  { n: 3, t: 'Uppgifter' },
                  { n: 4, t: 'Bekräfta' },
                ].map((s, i) => (
                  <li key={s.n} className="flex flex-1 items-center">
                    <div className="flex flex-col items-center">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-medium transition-colors ${
                          steg >= s.n
                            ? 'border-grafit-900 bg-grafit-900 text-ek-50'
                            : 'border-ek-300 bg-ek-50 text-grafit-400'
                        }`}
                      >
                        {s.n}
                      </span>
                      <span className="mt-2 text-xs text-grafit-500">{s.t}</span>
                    </div>
                    {i < 3 && (
                      <span
                        className={`mx-2 h-px flex-1 ${
                          steg > s.n ? 'bg-grafit-900' : 'bg-ek-300'
                        }`}
                      />
                    )}
                  </li>
                ))}
              </ol>

              {/* Steg 1 – Tjänst */}
              {steg === 1 && (
                <div className="space-y-3">
                  <h2 className="mb-5 font-serif text-2xl text-grafit-900">
                    Vad gäller ärendet?
                  </h2>
                  {tjanster.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => uppdatera('tjanst', t.titel)}
                      className={`flex w-full items-start gap-4 rounded-sm border p-5 text-left transition-colors ${
                        bokning.tjanst === t.titel
                          ? 'border-grafit-900 bg-ek-100'
                          : 'border-ek-300 bg-ek-50 hover:border-grafit-400'
                      }`}
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-grafit-400">
                        {bokning.tjanst === t.titel && (
                          <span className="h-2.5 w-2.5 rounded-full bg-grafit-900" />
                        )}
                      </span>
                      <span>
                        <span className="block font-medium text-grafit-900">
                          {t.titel}
                        </span>
                        <span className="block text-sm text-grafit-500">
                          {t.ingress}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* Steg 2 – Tid */}
              {steg === 2 && (
                <div>
                  <h2 className="mb-5 font-serif text-2xl text-grafit-900">
                    Välj dag och tid
                  </h2>
                  <p className="mb-3 text-sm font-medium text-grafit-600">Dag</p>
                  <div className="mb-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {dagar.map((d) => (
                      <button
                        key={d.iso}
                        onClick={() => uppdatera('datum', d.iso)}
                        className={`rounded-sm border px-3 py-3 text-sm capitalize transition-colors ${
                          bokning.datum === d.iso
                            ? 'border-grafit-900 bg-grafit-900 text-ek-50'
                            : 'border-ek-300 bg-ek-50 text-grafit-700 hover:border-grafit-400'
                        }`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>

                  <p className="mb-3 text-sm font-medium text-grafit-600">Tid</p>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                    {lediga_tider.map((tid) => (
                      <button
                        key={tid}
                        onClick={() => uppdatera('tid', tid)}
                        disabled={!bokning.datum}
                        className={`rounded-sm border px-2 py-3 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                          bokning.tid === tid
                            ? 'border-grafit-900 bg-grafit-900 text-ek-50'
                            : 'border-ek-300 bg-ek-50 text-grafit-700 hover:border-grafit-400'
                        }`}
                      >
                        {tid}
                      </button>
                    ))}
                  </div>
                  {!bokning.datum && (
                    <p className="mt-3 text-sm italic text-grafit-400">
                      Välj en dag först.
                    </p>
                  )}
                </div>
              )}

              {/* Steg 3 – Uppgifter */}
              {steg === 3 && (
                <div>
                  <h2 className="mb-5 font-serif text-2xl text-grafit-900">
                    Dina uppgifter
                  </h2>
                  <div className="space-y-4">
                    <Falt
                      label="Namn"
                      varde={bokning.namn}
                      onChange={(v) => uppdatera('namn', v)}
                      placeholder="För- och efternamn"
                    />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Falt
                        label="E-post"
                        typ="email"
                        varde={bokning.epost}
                        onChange={(v) => uppdatera('epost', v)}
                        placeholder="namn@exempel.se"
                      />
                      <Falt
                        label="Telefon"
                        typ="tel"
                        varde={bokning.telefon}
                        onChange={(v) => uppdatera('telefon', v)}
                        placeholder="070-000 00 00"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-grafit-700">
                        Beskriv ditt projekt{' '}
                        <span className="text-grafit-400">(valfritt)</span>
                      </label>
                      <textarea
                        rows={4}
                        value={bokning.meddelande}
                        onChange={(e) => uppdatera('meddelande', e.target.value)}
                        placeholder="Mått, material, tidsram eller en bild i ord …"
                        className="w-full rounded-sm border border-ek-300 bg-ek-50 px-4 py-3 text-sm text-grafit-800 outline-none transition-colors focus:border-grafit-900"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Steg 4 – Sammanfattning */}
              {steg === 4 && (
                <div>
                  <h2 className="mb-5 font-serif text-2xl text-grafit-900">
                    Stämmer detta?
                  </h2>
                  <dl className="divide-y divide-ek-200 rounded-sm border border-ek-300 bg-ek-50">
                    <Rad etikett="Tjänst" varde={bokning.tjanst} />
                    <Rad
                      etikett="Dag"
                      varde={
                        dagar.find((d) => d.iso === bokning.datum)?.label ?? '–'
                      }
                    />
                    <Rad etikett="Tid" varde={bokning.tid} />
                    <Rad etikett="Namn" varde={bokning.namn} />
                    <Rad etikett="E-post" varde={bokning.epost} />
                    <Rad etikett="Telefon" varde={bokning.telefon || '–'} />
                    {bokning.meddelande && (
                      <Rad etikett="Meddelande" varde={bokning.meddelande} />
                    )}
                  </dl>
                </div>
              )}

              {/* Navigering */}
              <div className="mt-10 flex items-center justify-between">
                <button
                  onClick={() => setSteg((s) => Math.max(1, s - 1) as Steg)}
                  disabled={steg === 1}
                  className="text-sm font-medium uppercase tracking-widest text-grafit-500 transition-colors hover:text-grafit-900 disabled:invisible"
                >
                  ← Tillbaka
                </button>

                {steg < 4 ? (
                  <button
                    onClick={() => setSteg((s) => (s + 1) as Steg)}
                    disabled={!kanGaVidare}
                    className="knapp-primar disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Nästa
                  </button>
                ) : (
                  <button onClick={skicka} className="knapp-primar bg-massing text-grafit-950 hover:bg-massing-ljus">
                    Bekräfta bokning
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

/* ── Småkomponenter ───────────────────────────────────────── */

function Falt({
  label,
  varde,
  onChange,
  placeholder,
  typ = 'text',
}: {
  label: string;
  varde: string;
  onChange: (v: string) => void;
  placeholder?: string;
  typ?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-grafit-700">
        {label}
      </label>
      <input
        type={typ}
        value={varde}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-sm border border-ek-300 bg-ek-50 px-4 py-3 text-sm text-grafit-800 outline-none transition-colors focus:border-grafit-900"
      />
    </div>
  );
}

function Rad({ etikett, varde }: { etikett: string; varde: string }) {
  return (
    <div className="flex justify-between gap-4 px-5 py-3.5">
      <dt className="text-sm text-grafit-500">{etikett}</dt>
      <dd className="text-right text-sm font-medium text-grafit-900">{varde}</dd>
    </div>
  );
}

function Bekraftelse({
  bokning,
  dagar,
}: {
  bokning: Bokning;
  dagar: { iso: string; label: string }[];
}) {
  return (
    <div className="rounded-sm border border-ek-300 bg-ek-50 p-10 text-center shadow-mjuk">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-massing/20">
        <svg
          className="h-8 w-8 text-massing-mork"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h2 className="font-serif text-3xl text-grafit-900">Tack {bokning.namn.split(' ')[0]}!</h2>
      <p className="mx-auto mt-3 max-w-sm text-grafit-600">
        Din förfrågan om <strong>{bokning.tjanst.toLowerCase()}</strong>{' '}
        {dagar.find((d) => d.iso === bokning.datum)?.label} kl {bokning.tid} är
        mottagen i demon.
      </p>
      <p className="mt-6 text-sm italic text-grafit-400">
        (I en skarp version skulle en bekräftelse nu skickas till {bokning.epost}.)
      </p>
    </div>
  );
}
