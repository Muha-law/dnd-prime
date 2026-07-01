import { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { getEstate } from "../data/properties";
import { CONTACT } from "../data/group";
import { PhoneLink } from "../components/PhoneLink";

export default function EstateDetail() {
  const { id } = useParams();
  const property = getEstate(id);
  const [active, setActive] = useState(0);
  const images = property?.images.slice(1) ?? [];
  const touchStartX = useRef(null);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) setActive((i) => diff > 0 ? (i + 1) % images.length : (i - 1 + images.length) % images.length);
    touchStartX.current = null;
  };

  if (!property) {
    return (
      <div className="pt-40 pb-32 px-6 text-center">
        <h1 className="text-3xl font-light mb-4 text-on-dark">We couldn't find that property.</h1>
        <Link to="/properties" className="font-mono text-label-md uppercase text-accent">
          Back to all properties →
        </Link>
      </div>
    );
  }

  const facts = [
    { l: "Type", v: property.type },
    { l: "Bedrooms", v: property.beds },
    { l: "Bathrooms", v: property.baths },
    { l: "Furnished", v: property.furnished },
    { l: "Available", v: property.available },
    { l: "Deposit", v: property.deposit },
    { l: "Min. tenancy", v: property.minTenancy },
    { l: "EPC", v: property.epc },
  ];

  return (
    <div className="pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="px-6 md:px-10 max-w-[1400px] mx-auto mb-6">
        <Link to="/properties" className="font-mono text-label-md uppercase text-on-dark/50 hover:text-accent transition-colors">
          ← All properties
        </Link>
      </div>

      {/* Gallery */}
      <section className="px-6 md:px-10 max-w-[1400px] mx-auto mb-10 md:mb-14">
        {/* Main image with carousel controls */}
        <div className="aspect-[16/9] overflow-hidden bg-surface-low mb-3 relative group" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <img
            key={active}
            src={images[active]}
            alt={`${property.name} view ${active + 1}`}
            className="w-full h-full object-cover animate-image-fade"
          />
          <span className="absolute top-4 left-4 bg-accent text-on-surface px-3 py-1 font-mono text-label-sm uppercase z-10">
            {property.deal}
          </span>
          <span className="absolute bottom-4 right-4 bg-background/80 text-on-dark px-3 py-1 font-mono text-label-sm">
            {active + 1} / {images.length}
          </span>
          <button
            onClick={() => setActive((i) => (i - 1 + images.length) % images.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/70 text-on-dark flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-background"
            aria-label="Previous image"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button
            onClick={() => setActive((i) => (i + 1) % images.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/70 text-on-dark flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-background"
            aria-label="Next image"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="grid grid-cols-5 sm:grid-cols-7 gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={"aspect-square overflow-hidden bg-surface-low border-2 transition-colors " +
                (active === i ? "border-accent" : "border-transparent hover:border-line")}
            >
              <img src={img} alt={`${property.name} thumbnail ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </section>

      {/* Body */}
      <section className="px-6 md:px-10 max-w-[1400px] mx-auto pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-7">
            <span className="font-mono text-label-md uppercase text-accent block mb-3">
              {property.building}
            </span>
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-2 text-on-dark">
              {property.name}
            </h1>
            <p className="text-on-dark/60 text-base mb-8">{property.area}</p>

            <div className="flex flex-wrap gap-x-10 gap-y-4 pb-8 mb-8 border-b border-line">
              <div>
                <div className="text-2xl font-extrabold text-accent">{property.price}</div>
                <div className="font-mono text-label-sm uppercase text-on-dark/50">{property.priceNote}</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-on-dark">{property.beds}</div>
                <div className="font-mono text-label-sm uppercase text-on-dark/50">Bedroom</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-on-dark">{property.baths}</div>
                <div className="font-mono text-label-sm uppercase text-on-dark/50">Bathroom</div>
              </div>
            </div>

            <p className="text-base text-on-dark/80 leading-relaxed mb-10 max-w-xl">
              {property.description}
            </p>

            <h2 className="font-mono text-label-md uppercase text-on-dark/40 mb-5">Key features</h2>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 max-w-lg mb-12">
              {property.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-body-md text-on-dark/85">
                  <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <h2 className="font-mono text-label-md uppercase text-on-dark/40 mb-5">Property details</h2>
            <div className="grid sm:grid-cols-2 gap-x-10 max-w-lg">
              {facts.map((f) => (
                <div key={f.l} className="flex justify-between py-3 border-b border-line">
                  <span className="font-mono text-label-sm uppercase text-on-dark/50">{f.l}</span>
                  <span className="text-body-md text-on-dark/85 text-right">{f.v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: enquiry panel */}
          <div className="lg:col-span-5">
            <div className="border border-line p-7 md:p-8 lg:sticky lg:top-28 bg-surface">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-extrabold text-accent">{property.price}</span>
              </div>
              <p className="font-mono text-label-sm uppercase text-on-dark/50 mb-6">{property.priceNote}</p>

              <p className="text-body-md text-on-dark/70 mb-6 leading-relaxed">
                Interested in this property? Message the DND Living team for availability,
                viewings, and full details.
              </p>

              <a
                href={`https://wa.me/${CONTACT.whatsappIntl}?text=${encodeURIComponent("Hi, I'm interested in the " + property.name + " at " + property.building + ".")}`}
                target="_blank"
                rel="noreferrer"
                className="block w-full bg-accent text-on-surface py-4 text-center text-body-md font-semibold hover:bg-accent-bright transition-colors mb-3"
              >
                Enquire on WhatsApp
              </a>
              <Link
                to="/contact"
                className="block w-full border border-line py-4 text-center text-body-md font-medium text-on-dark hover:border-accent transition-colors"
              >
                Request a viewing
              </Link>

              <div className="mt-6 pt-6 border-t border-line space-y-2">
                <div className="flex justify-between text-body-md">
                  <span className="text-on-dark/50">Call / WhatsApp</span>
                  <PhoneLink className="text-on-dark" dir="down" />
                </div>
                <div className="flex justify-between text-body-md">
                  <span className="text-on-dark/50">Email</span>
                  <span className="text-on-dark">{CONTACT.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
