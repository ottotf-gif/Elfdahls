import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hem"
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-wood-50 via-white to-slate-50" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-wood-100/40 blur-3xl -translate-y-1/4 translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-wood-600 font-medium text-sm tracking-wide uppercase mb-4">
            Hantverk sedan 2006
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-slate-900 leading-[1.1] mb-6">
            Elfdahls Fin Snickeri
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-10">
            Ett mångsidigt snickeri som tillverkar inredning och möbler, 10 min
            från Göteborg. Vi skapar skräddarsydda lösningar med passion för
            detaljer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#boka-tid"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-wood-700 text-white font-medium rounded-lg hover:bg-wood-800 transition-all duration-200 shadow-lg shadow-wood-700/20 hover:shadow-xl hover:shadow-wood-700/30 hover:-translate-y-0.5"
            >
              Boka tid
              <ArrowRight size={18} />
            </a>
            <a
              href="#tjanster"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:border-wood-300 hover:text-wood-700 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Play size={16} />
              Se vår verksamhet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
