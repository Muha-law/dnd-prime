import { useState } from "react";
import { Link } from "react-router-dom";
import { estateListings } from "../data/properties";

const filters = ["All", "To Rent", "For Sale"];

export default function Properties() {
  const [deal, setDeal] = useState("All");
  const list = estateListings.filter((p) => deal === "All" || p.deal === deal);

  return (
    <div className="pt-24 md:pt-28">
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
            {list.map((p) => (
              <Link key={p.id} to={`/properties/${p.id}`} className="group block bg-surface border border-line hover:border-accent transition-colors">
                <div className="aspect-[4/3] overflow-hidden bg-surface-low relative">
                  <img src={p.cover} alt={p.name} loading="lazy" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-500" />
                  <span className="absolute top-3 left-3 bg-accent text-on-surface px-3 py-1 font-mono text-label-sm uppercase">{p.deal}</span>
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
