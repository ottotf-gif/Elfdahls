import { Phone, Mail, MapPin, User } from 'lucide-react';

const team = [
  {
    name: 'Urban Elfdahl',
    role: 'Daglig ledare',
    phone: '070-9929398',
    email: 'urban@elfdahl.se',
  },
  {
    name: 'Magnus Sundén',
    role: 'Arbetsledare',
    phone: '076-1652335',
    email: 'magnus@elfdahl.se',
  },
];

export default function Kontakt() {
  return (
    <section id="kontakt" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-wood-600 font-medium text-sm tracking-wide uppercase mb-3">
            Kontakt
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-slate-900 mb-4">
            Hör av dig
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Vi hjälper gärna till med ert nästa projekt. Tveka inte att kontakta
            oss för en kostnadsfri konsultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((person) => (
            <div
              key={person.name}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100"
            >
              <div className="w-14 h-14 rounded-full bg-wood-100 flex items-center justify-center text-wood-700 mb-5">
                <User size={24} />
              </div>
              <h3 className="text-xl font-serif text-slate-900 mb-1">
                {person.name}
              </h3>
              <p className="text-wood-600 font-medium text-sm mb-5">
                {person.role}
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${person.phone.replace(/-/g, '')}`}
                  className="flex items-center gap-3 text-slate-600 hover:text-wood-700 transition-colors"
                >
                  <Phone size={16} />
                  <span>{person.phone}</span>
                </a>
                <a
                  href={`mailto:${person.email}`}
                  className="flex items-center gap-3 text-slate-600 hover:text-wood-700 transition-colors"
                >
                  <Mail size={16} />
                  <span>{person.email}</span>
                </a>
              </div>
            </div>
          ))}

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="w-14 h-14 rounded-full bg-wood-100 flex items-center justify-center text-wood-700 mb-5">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-serif text-slate-900 mb-1">
              Besöksadress
            </h3>
            <p className="text-wood-600 font-medium text-sm mb-5">Verkstad</p>
            <address className="not-italic text-slate-600 leading-relaxed">
              Svarvaregatan 23
              <br />
              442 34 Kungälv
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
