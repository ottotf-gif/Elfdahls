import { useEffect, useState } from 'react';
import { navlankar } from '../data/content';

interface HeaderProps {
  aktivSida: string;
  navigera: (sida: string) => void;
}

export default function Header({ aktivSida, navigera }: HeaderProps) {
  const [scrollad, setScrollad] = useState(false);
  const [oppen, setOppen] = useState(false);

  useEffect(() => {
    const hantera = () => setScrollad(window.scrollY > 40);
    hantera();
    window.addEventListener('scroll', hantera);
    return () => window.removeEventListener('scroll', hantera);
  }, []);

  // På startsidan är headern transparent över den mörka hjälten tills man scrollar.
  const morkBakgrund = aktivSida === 'hem' && !scrollad;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrollad || aktivSida !== 'hem'
          ? 'bg-grafit-900/95 py-3 shadow-mjuk backdrop-blur'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6">
        <button
          onClick={() => navigera('hem')}
          className="flex items-center gap-3"
          aria-label="Till startsidan"
        >
          {/* Vit/guld logga mot mörk header – syns alltid */}
          <img
            src="/elfdahlslogo.png"
            alt="Elfdahls Fin Snickeri"
            className="h-9 w-auto sm:h-10"
          />
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navlankar.map((lank) => (
            <button
              key={lank.sida}
              onClick={() => navigera(lank.sida)}
              className={`relative text-sm font-medium uppercase tracking-widest transition-colors ${
                morkBakgrund ? 'text-ek-100' : 'text-ek-100'
              } hover:text-massing-ljus ${
                aktivSida === lank.sida ? 'text-massing-ljus' : ''
              }`}
            >
              {lank.label}
              {aktivSida === lank.sida && (
                <span className="absolute -bottom-1.5 left-0 h-px w-full bg-massing" />
              )}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setOppen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Meny"
        >
          <span className="h-0.5 w-6 bg-ek-100" />
          <span className="h-0.5 w-6 bg-ek-100" />
          <span className="h-0.5 w-6 bg-ek-100" />
        </button>
      </div>

      {/* Mobilmeny */}
      {oppen && (
        <nav className="mt-3 flex flex-col gap-1 border-t border-grafit-700 bg-grafit-900 px-6 py-4 md:hidden">
          {navlankar.map((lank) => (
            <button
              key={lank.sida}
              onClick={() => {
                navigera(lank.sida);
                setOppen(false);
              }}
              className="py-2 text-left text-sm font-medium uppercase tracking-widest text-ek-100 hover:text-massing-ljus"
            >
              {lank.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}