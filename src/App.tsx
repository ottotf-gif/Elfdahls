import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hem from './pages/Hem';
import Om from './pages/Om';
import Projekt from './pages/Projekt';
import Boka from './pages/Boka';
import Kontakt from './pages/Kontakt';

type Sida = 'hem' | 'om' | 'projekt' | 'boka' | 'kontakt';

export default function App() {
  const [sida, setSida] = useState<Sida>('hem');

  // Enkel routing via state. Scrolla till toppen vid sidbyte.
  const navigera = (ny: string) => {
    setSida(ny as Sida);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Stöd för #hash-länkar (t.ex. om någon delar /#projekt)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (['hem', 'om', 'projekt', 'boka', 'kontakt'].includes(hash)) {
      setSida(hash as Sida);
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header aktivSida={sida} navigera={navigera} />

      <main className="flex-1">
        {sida === 'hem' && <Hem navigera={navigera} />}
        {sida === 'om' && <Om />}
        {sida === 'projekt' && <Projekt />}
        {sida === 'boka' && <Boka />}
        {sida === 'kontakt' && <Kontakt navigera={navigera} />}
      </main>

      <Footer navigera={navigera} />
    </div>
  );
}