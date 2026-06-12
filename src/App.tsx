import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hem from './pages/Hem';
import Om from './pages/Om';
import Projekt from './pages/Projekt';
import Kontakt from './pages/Kontakt';
import Tjanst from './pages/Tjanst';

type Sida = 'hem' | 'om' | 'projekt' | 'kontakt' | 'tjanst';

export default function App() {
  const [sida, setSida] = useState<Sida>('hem');
  // Vilken tjänst som visas på tjänstesidan
  const [tjanstId, setTjanstId] = useState<string>('mobler');

  // Enkel routing via state. Scrolla till toppen vid sidbyte.
  const navigera = (ny: string, scrollTo?: string) => {
    setSida(ny as Sida);
    if (scrollTo) {
      requestAnimationFrame(() => {
        const el = document.getElementById(scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Öppna en specifik tjänst (från korten på startsidan)
  const oppnaTjanst = (id: string) => {
    setTjanstId(id);
    setSida('tjanst');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Stöd för #hash-länkar
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (['hem', 'om', 'projekt', 'kontakt'].includes(hash)) {
      setSida(hash as Sida);
    }
  }, []);

  // Header markerar "Hem" som aktiv även när man är inne på en tjänst
  const aktivSida = sida === 'tjanst' ? 'hem' : sida;

  return (
    <div className="flex min-h-screen flex-col">
      <Header aktivSida={aktivSida} navigera={navigera} />

      <main className="flex-1">
        {sida === 'hem' && <Hem navigera={navigera} oppnaTjanst={oppnaTjanst} />}
        {sida === 'om' && <Om />}
        {sida === 'projekt' && <Projekt />}
        {sida === 'kontakt' && <Kontakt navigera={navigera} />}
        {sida === 'tjanst' && (
          <Tjanst
            tjanstId={tjanstId}
            navigera={navigera}
            oppnaTjanst={oppnaTjanst}
          />
        )}
      </main>

      <Footer navigera={navigera} />
    </div>
  );
}