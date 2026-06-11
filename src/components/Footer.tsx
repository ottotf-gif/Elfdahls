import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <img
              src="/elfdahlslogo.png"
              alt="Elfdahls Fin Snickeri"
              className="h-10 w-auto mb-5 brightness-0 invert opacity-90"
            />
            <p className="text-slate-400 leading-relaxed">
              Skräddarsydda möbler och inredningslösningar med passion för
              kvalitet och detaljer.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-wood-400" />
                <span>070-9929398</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-wood-400" />
                <span>urban@elfdahl.se</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-wood-400" />
                <span>Svarvaregatan 23, 442 34 Kungälv</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Snabblänkar</h4>
            <nav className="space-y-2">
              <a href="#hem" className="block hover:text-wood-300 transition-colors">Hem</a>
              <a href="#tjanster" className="block hover:text-wood-300 transition-colors">Tjänster</a>
              <a href="#om-oss" className="block hover:text-wood-300 transition-colors">Om oss</a>
              <a href="#kontakt" className="block hover:text-wood-300 transition-colors">Kontakt</a>
              <a href="#boka-tid" className="block hover:text-wood-300 transition-colors">Boka tid</a>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Elfdahls Fin Snickeri. Alla
          rättigheter förbehållna.
        </div>
      </div>
    </footer>
  );
}
