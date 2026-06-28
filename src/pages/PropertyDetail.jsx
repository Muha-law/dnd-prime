import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProperty, properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";

export default function PropertyDetail() {
  const { id } = useParams();
  const property = getProperty(id);
  const [active, setActive] = useState(0);

  if (!property) {
    return (
      <div className="pt-40 pb-32 px-6 text-center">
        <h1 className="text-3xl font-light mb-4">We couldn't find that stay.</h1>
        <Link to="/stays" className="font-mono text-label-md uppercase text-accent">
          Back to all stays →
        </Link>
      </div>
    );
  }

  const more = properties.filter((p) => p.id !== property.id).slice(0, 3);

  return (
    <div className="pt-24 md:pt-32">
      {/* Breadcrumb */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-6">
        <Link to="/stays" className="font-mono text-label-md uppercase text-on-dark/50 hover:text-accent transition-colors">
          ← All stays
        </Link>
      </div>

      {/* Gallery */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-10 md:mb-14">
        <div className="aspect-[16/9] overflow-hidden bg-surface-low mb-3">
          <img
            src={property.images[active]}
            alt={`${property.name} view ${active + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {property.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={
                "aspect-[16/10] overflow-hidden bg-surface-low border-2 transition-colors " +
                (active === i ? "border-accent" : "border-transparent hover:border-line")
              }
            >
              <img src={img} alt={`${property.name} thumbnail ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </section>

      {/* Detail body */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: details */}
          <div className="lg:col-span-7">
            <span className="font-mono text-label-md uppercase text-on-dark/40 block mb-3">
              {property.type} · {property.area}
            </span>
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              {property.name}
            </h1>

            <div className="flex flex-wrap gap-6 pb-8 mb-8 border-b border-line">
              {[
                { l: "Guests", v: property.guests },
                { l: "Bedrooms", v: property.bedrooms },
                { l: "Bathrooms", v: property.baths },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-semibold">{s.v}</div>
                  <div className="font-mono text-label-sm uppercase text-on-dark/50">{s.l}</div>
                </div>
              ))}
            </div>

            <p className="text-base text-on-dark/80 leading-relaxed mb-10 max-w-xl">
              {property.blurb}
            </p>

            <h2 className="font-mono text-label-md uppercase text-on-dark/40 mb-5">
              What's inside
            </h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-lg">
              {property.amenities.map((a) => (
                <li key={a} className="flex items-center gap-3 text-body-md text-on-dark/80">
                  <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: booking panel */}
          <div className="lg:col-span-5">
            <div className="border border-line p-7 md:p-8 lg:sticky lg:top-28">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-extrabold">${property.pricePerNight}</span>
                <span className="text-on-dark/50 text-body-md">/ night</span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="border border-line">
                  <div className="grid grid-cols-2">
                    <div className="p-3 border-r border-line">
                      <label className="font-mono text-label-sm uppercase text-on-dark/40 block mb-1">Check in</label>
                      <input type="date" className="w-full text-body-md outline-none bg-transparent" />
                    </div>
                    <div className="p-3">
                      <label className="font-mono text-label-sm uppercase text-on-dark/40 block mb-1">Check out</label>
                      <input type="date" className="w-full text-body-md outline-none bg-transparent" />
                    </div>
                  </div>
                  <div className="p-3 border-t border-line">
                    <label className="font-mono text-label-sm uppercase text-on-dark/40 block mb-1">Guests</label>
                    <select className="w-full text-body-md outline-none bg-transparent">
                      {Array.from({ length: property.guests }, (_, i) => (
                        <option key={i}>{i + 1} guest{i > 0 ? "s" : ""}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <button className="w-full bg-accent text-on-surface py-4 text-body-md font-semibold hover:bg-accent-bright transition-colors mb-3">
                Request to book
              </button>
              <button className="w-full border border-line py-4 text-body-md font-medium hover:border-accent transition-colors">
                Ask about this stay
              </button>
              <p className="text-center font-mono text-label-sm uppercase text-on-dark/40 mt-5">
                No charge until confirmed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More stays */}
      <section className="bg-surface px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-10">
            More <span className="font-semibold">DND stays</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {more.map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
