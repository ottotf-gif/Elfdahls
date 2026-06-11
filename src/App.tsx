import Header from './components/Header';
import Hero from './components/Hero';
import Tjanster from './components/Tjanster';
import OmOss from './components/OmOss';
import Kontakt from './components/Kontakt';
import BokaTid from './components/BokaTid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Tjanster />
        <OmOss />
        <Kontakt />
        <BokaTid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
