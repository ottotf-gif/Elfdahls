import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BokaTid() {
  return (
    <section id="boka-tid" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-wood-600 font-medium text-sm tracking-wide uppercase mb-3">
            Boka tid
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-slate-900 mb-4">
            Boka en konsultation
          </h2>
          <p className="text-slate-600 text-lg mb-12">
            Berätta om ert projekt så hjälper vi er att komma igång. Första
            mötet är alltid kostnadsfritt.
          </p>

          {/* Placeholder for future booking system */}
          <div className="bg-white rounded-2xl border border-slate-200 p-12 shadow-sm">
            <div className="flex justify-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-wood-50 flex items-center justify-center text-wood-600">
                <Calendar size={28} />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-wood-50 flex items-center justify-center text-wood-600">
                <Clock size={28} />
              </div>
            </div>
            <h3 className="text-2xl font-serif text-slate-900 mb-3">
              Bokningssystem kommer snart
            </h3>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
              Vårt online-bokningssystem är under utveckling. Under tiden kan ni
              kontakta oss direkt för att boka en tid.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-7 py-4 bg-wood-700 text-white font-medium rounded-lg hover:bg-wood-800 transition-all duration-200 shadow-lg shadow-wood-700/20 hover:shadow-xl hover:-translate-y-0.5"
            >
              Kontakta oss istället
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
