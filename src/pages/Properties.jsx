import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { estateListings } from "../data/properties";
import FadeIn from "../components/FadeIn";
import SEO from "../components/SEO";

const filters = ["All", "To Rent", "For Sale"];

function CardCarousel({ images, alt }) {
  const [idx, setIdx] = useState(0);
  const total = images.length;
  const touchStartX = useRef(null);

  const prev = (e) => { e.preventDefault(); e.stopPropagation(); setIdx((i) => (i - 1 + total) % total); };
  const next = (e) => { e.preventDefault(); e.stopPropagation(); setIdx((i) => (i + 1) % total); };

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? setIdx((i) => (i + 1) % total) : setIdx((i) => (i - 1 + total) % total);
    touchStartX.current = null;
  };

  return (
    <div
      className="aspect-[4/3] overflow-hidden bg-surface-low relative group/carousel"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <img
        key={idx}
        src={images[idx]}
        alt={`${alt} ${idx + 1}`}
        loading="lazy"
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 animate-image-fade"
      />

      {total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/70 text-on-dark flex items-center justify-center md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity hover:bg-background"
            aria-label="Previous image"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/70 text-on-dark flex items-center justify-center md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity hover:bg-background"
            aria-label="Next image"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIdx(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === idx ? "bg-accent" : "bg-on-dark/40"}`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Properties() {
  const [deal, setDeal] = useState("All");
  const list = estateListings.filter((p) => deal === "All" || p.deal === deal);

  return (
    <div className="pt-24 md:pt-28">
      <SEO
        title="Properties to Rent &amp; Buy in Birmingham"
        description="Browse quality homes to rent and buy across Birmingham, managed by DND Living. View luxury apartments at The Cube, Eastside Apartments, and Birmingham city centre."
        canonical="/properties"
      />
      {/* HERO */}
      <section className="px-6 md:px-10 py-12 md:py-16 border-b border-line">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-label-md uppercase text-accent tracking-widest block mb-5">
            DND Properties · Buy · Rent · Manage
          </span>
          <h1 className="font-light text-4xl md:text-6xl lg:text-7xl leading-[1.04] mb-6 text-on-dark">
            Find a home
            <br />
            <span className="font-extrabold">worth settling into.</span>
          </h1>
          <p className="text-on-dark/70 text-base md:text-lg max-w-xl leading-relaxed">
            Quality homes to rent and buy across Birmingham, managed by a team that
            stands behind every property.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="px-6 md:px-10 py-6 border-b border-line">
        <div className="max-w-[1400px] mx-auto flex gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setDeal(f)}
              className={"px-5 py-2 text-body-md border transition-colors " +
                (deal === f ? "bg-accent text-on-surface border-accent" : "bg-surface text-on-dark/70 border-line hover:border-accent")}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-label-md uppercase text-on-dark/40 mb-8">
            {list.length} {list.length === 1 ? "property" : "properties"} available
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((p, i) => (
              <FadeIn key={p.id} delay={i * 100}>
              <Link to={`/properties/${p.id}`} className="group block bg-surface border border-line hover:border-accent transition-colors h-full">
                <div className="relative">
                  <CardCarousel images={p.images} alt={p.name} />
                  {p.letAgreed ? (
                    <span className="absolute top-3 left-3 z-10 bg-on-dark text-background px-3 py-1 font-mono text-label-sm uppercase">Let Agreed</span>
                  ) : (
                    <span className="absolute top-3 left-3 z-10 bg-accent text-on-surface px-3 py-1 font-mono text-label-sm uppercase">{p.deal}</span>
                  )}
                </div>
                <div className="p-5">
                  <span className="font-mono text-label-sm uppercase text-on-dark/40">{p.building}</span>
                  <h3 className="text-headline-sm font-semibold mt-1 mb-1 text-on-dark group-hover:text-accent transition-colors">{p.name}</h3>
                  <p className="text-body-md text-on-dark/55 mb-4">{p.area}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-line">
                    <span className="text-body-md text-on-dark/65">{p.beds} bed · {p.baths} bath</span>
                    <span className="text-body-md font-semibold text-accent">{p.price}</span>
                  </div>
                </div>
              </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface border-t border-line px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="text-3xl md:text-5xl font-light leading-snug text-on-dark max-w-2xl">
            Looking to let or sell <span className="font-semibold">with DND?</span>
          </h2>
          <Link to="/contact" className="bg-accent text-on-surface px-8 py-4 text-body-md font-semibold hover:bg-accent-bright transition-colors self-start whitespace-nowrap">
            Talk to our team
          </Link>
        </div>
      </section>
    </div>
  );
}
