import { Armchair, LayoutGrid, Store, Box } from 'lucide-react';

const services = [
  {
    icon: Armchair,
    title: 'Möbler och hyllor',
    description:
      'Skräddarsydda möbler och hyllsystem i massivt trä. Vi bygger efter era mått och önskemål för ett hem som känns unikt.',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: LayoutGrid,
    title: 'Kök och garderober',
    description:
      'Platsbyggda kök och garderober som utnyttjar varje centimeter. Funktionella lösningar med vackra detaljer.',
    image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Store,
    title: 'Butik- och kontorsinredning',
    description:
      'Professionell inredning för butiker, kontor och offentliga miljöer. Från koncept till färdig montering.',
    image: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Box,
    title: '3D-ritningar',
    description:
      'Visualisera ert projekt innan det byggs. Vi tar fram detaljerade 3D-ritningar så ni ser resultatet i förväg.',
    image: 'https://images.pexels.com/photos/8961438/pexels-photo-8961438.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Tjanster() {
  return (
    <section id="tjanster" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-wood-600 font-medium text-sm tracking-wide uppercase mb-3">
            Våra tjänster
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-slate-900 mb-4">
            Vad vi gör
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Från idé till färdig produkt — vi hjälper er genom hela processen
            med hantverk och noggrannhet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:border-wood-200 transition-all duration-300 hover:shadow-lg hover:shadow-wood-100/50"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-wood-100 flex items-center justify-center text-wood-700">
                    <service.icon size={20} />
                  </div>
                  <h3 className="text-xl font-serif text-slate-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
