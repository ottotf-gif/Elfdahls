import { Award, Users, Hammer } from 'lucide-react';

const highlights = [
  { icon: Award, label: 'Sedan 2006', description: 'Över 18 års erfarenhet' },
  { icon: Users, label: 'Kompetent team', description: 'Engagerade hantverkare' },
  { icon: Hammer, label: 'Hög kvalitet', description: 'På montage och inredning' },
];

export default function OmOss() {
  return (
    <section id="om-oss" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-wood-600 font-medium text-sm tracking-wide uppercase mb-3">
              Om oss
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif text-slate-900 mb-6">
              Hantverk med passion
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Arbete sedan 2006. Ett kompetent team med stort engagemang, god
              service och hög kvalitet på montage och inredning. Vi är stolta
              över att leverera lösningar som håller i generationer.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Beläget bara 10 minuter från Göteborg i Kungälv erbjuder vi
              personlig service och nära samarbete med våra kunder genom hela
              projektet.
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-5 bg-white rounded-xl p-6 border border-slate-100 shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-wood-100 flex items-center justify-center text-wood-700 shrink-0">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {item.label}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
