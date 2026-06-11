import { foretag, kontakter, navlankar, partner } from '../data/content';

interface FooterProps {
  navigera: (sida: string) => void;
}

export default function Footer({ navigera }: FooterProps) {
  return (
    <footer className="bg-grafit-950 text-ek-100">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Varumärke */}
          <div>
            <img
              src="/elfdahlslogo.png"
              alt="Elfdahls Fin Snickeri"
              className="mb-5 h-11 w-auto"
            />
            <p className="max-w-xs text-sm leading-relaxed text-ek-200/80">
              {foretag.beskrivning} Vi är med genom hela processen – från ritning
              och tillverkning till leverans och montering.
            </p>
            <p className="mt-5 font-serif text-lg italic text-massing-ljus">
              Tillsammans gör vi idéerna verkliga.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="overlinje mb-4 text-massing-ljus">Sidor</h4>
            <ul className="space-y-2.5">
              {navlankar.map((lank) => (
                <li key={lank.sida}>
                  <button
                    onClick={() => navigera(lank.sida)}
                    className="text-sm text-ek-200/80 transition-colors hover:text-massing-ljus"
                  >
                    {lank.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="overlinje mb-4 text-massing-ljus">Kontakt</h4>
            <address className="space-y-4 text-sm not-italic text-ek-200/80">
              {kontakter.map((k) => (
                <div key={k.epost}>
                  <p className="font-medium text-ek-100">{k.namn}</p>
                  <p className="text-xs uppercase tracking-wide text-ek-200/60">
                    {k.roll}
                  </p>
                  <p className="mt-1">{k.telefon}</p>
                  <a
                    href={`mailto:${k.epost}`}
                    className="transition-colors hover:text-massing-ljus"
                  >
                    {k.epost}
                  </a>
                </div>
              ))}
              <div className="pt-1">
                <p>{foretag.adress.gata}</p>
                <p>
                  {foretag.adress.postnr} {foretag.adress.ort}
                </p>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-grafit-800 pt-6 text-xs text-ek-200/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {foretag.namn} {foretag.undertitel} ·{' '}
            {foretag.adress.ort}
          </p>
          <p>
            Drivs av{' '}
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-massing-ljus underline-offset-2 transition-colors hover:text-massing hover:underline"
            >
              {partner.namn}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}