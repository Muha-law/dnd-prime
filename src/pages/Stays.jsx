import { useState } from "react";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";

const areas = ["All areas", "Lekki Phase 1, Lagos", "Victoria Island, Lagos", "Ikoyi, Lagos"];

export default function Stays() {
  const [area, setArea] = useState("All areas");
  const [sort, setSort] = useState("default");

  let list = properties.filter((p) => area === "All areas" || p.area === area);
  if (sort === "low") list = [...list].sort((a, b) => a.pricePerNight - b.pricePerNight);
  if (sort === "high") list = [...list].sort((a, b) => b.pricePerNight - a.pricePerNight);

  return (
    <div className="pt-28 md:pt-36">
      {/* Header */}
      <section className="px-6 md:px-12 pb-10">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-label-md uppercase text-on-dark/40 block mb-4">
            Our stays
          </span>
          <h1 className="text-4xl md:text-6xl font-light leading-[1.05] mb-6">
            Every home,
            <span className="font-semibold"> ready to book.</span>
          </h1>
          <p className="text-body-md md:text-base text-on-dark/70 max-w-xl leading-relaxed">
            A managed collection across Lagos. Filter by area, sort by price, and
            message the team about any of them right from the page.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 md:px-12 sticky top-[60px] md:top-[72px] z-30 bg-background/95 backdrop-blur-md border-y border-line py-4">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap gap-2">
            {areas.map((a) => (
              <button
                key={a}
                onClick={() => setArea(a)}
                className={
                  "px-4 py-2 text-body-md border transition-colors " +
                  (area === a
                    ? "bg-accent text-on-surface border-accent"
                    : "bg-surface text-on-dark/70 border-line hover:border-accent")
                }
              >
                {a === "All areas" ? a : a.split(",")[0]}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="ml-auto px-4 py-2 text-body-md bg-surface border border-line focus:border-accent outline-none"
          >
            <option value="default">Sort: Featured</option>
            <option value="low">Price: Low to high</option>
            <option value="high">Price: High to low</option>
          </select>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-label-md uppercase text-on-dark/40 mb-8">
            {list.length} {list.length === 1 ? "home" : "homes"} available
          </p>
          {list.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-headline-sm font-light text-on-dark/60">
                No homes in this area yet.
              </p>
              <button
                onClick={() => setArea("All areas")}
                className="mt-4 font-mono text-label-md uppercase text-accent"
              >
                Show all areas →
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
