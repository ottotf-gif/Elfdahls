import { varderingar } from '../data/content';

// Oändlig, självgående rad. Vi dubblerar listan så att den loopar sömlöst.
// Hastighet/animation styrs i index.css (.marquee).
export default function Vardekarusell() {
  const rad = [...varderingar, ...varderingar];

  return (
    <div className="relative overflow-hidden py-2">
      {/* Mjuka kanter så orden tonar in/ut i sidorna */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ek-100 to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ek-100 to-transparent sm:w-28" />

      <div className="marquee flex w-max gap-4">
        {rad.map((v, i) => (
          <span
            key={`${v}-${i}`}
            className="flex items-center gap-4 whitespace-nowrap font-serif text-2xl text-grafit-700 sm:text-3xl"
          >
            {v}
            <span className="text-massing">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
