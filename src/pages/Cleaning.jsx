import { useState } from "react";
import { Link } from "react-router-dom";
import {
  cleaningServices,
  cleaningPackages,
  cleaningGallery,
  cleaningWhy,
  CONTACT,
} from "../data/group";

function BeforeAfter({ item }) {
  const [showAfter, setShowAfter] = useState(false);
  return (
    <div className="border border-line">
      <div className="flex items-center justify-between px-4 py-3 border-b border-line">
        <span className="font-mono text-label-md uppercase text-on-dark/70">{item.room}</span>
        <div className="flex gap-1">
          <button
            onClick={() => setShowAfter(false)}
            className={"px-3 py-1 font-mono text-label-sm uppercase transition-colors " + (!showAfter ? "bg-accent text-on-surface" : "text-on-dark/50 hover:text-on-dark")}
          >
            Before
          </button>
          <button
            onClick={() => setShowAfter(true)}
            className={"px-3 py-1 font-mono text-label-sm uppercase transition-colors " + (showAfter ? "bg-accent text-on-surface" : "text-on-dark/50 hover:text-on-dark")}
          >
            After
          </button>
        </div>
      </div>
      <div className="aspect-[4/3] overflow-hidden bg-surface-low relative">
        <img src={item.before} alt={`${item.room} before`} className={"absolute inset-0 w-full h-full object-cover transition-opacity duration-300 " + (showAfter ? "opacity-0" : "opacity-100")} />
        <img src={item.after} alt={`${item.room} after`} className={"absolute inset-0 w-full h-full object-cover transition-opacity duration-300 " + (showAfter ? "opacity-100" : "opacity-0")} />
      </div>
    </div>
  );
}

export default function Cleaning() {
  return (
    <div className="pt-24 md:pt-28">
      {/* HERO */}
      <section className="px-6 md:px-10 py-12 md:py-16 border-b border-line">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-label-md uppercase text-accent tracking-widest block mb-5">
            DND Cleaning · Professional · Reliable · Attention to detail
          </span>
          <h1 className="font-light text-4xl md:text-6xl lg:text-7xl leading-[1.04] mb-6 text-on-dark">
            Cleaning that's
            <br />
            <span className="font-extrabold">done to a standard.</span>
          </h1>
          <p className="text-on-dark/70 text-base md:text-lg max-w-xl leading-relaxed mb-8">
            From regular upkeep to deep cleans, end of tenancy, and Airbnb turnarounds —
            with before-and-after reports on every job.
          </p>
          <a
            href={`https://wa.me/${CONTACT.whatsappIntl}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-accent text-on-surface px-7 py-3.5 text-body-md font-semibold hover:bg-accent-bright transition-colors"
          >
            Get a free quote
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="font-mono text-label-md uppercase text-on-dark/40 block mb-4">Our services</span>
            <h2 className="text-3xl md:text-4xl font-light text-on-dark">
              Everything we <span className="font-semibold">clean.</span>
            </h2>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {cleaningServices.map((s) => (
              <div key={s} className="flex items-center gap-3 py-3 border-b border-line">
                <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                <span className="text-body-md md:text-base text-on-dark/85">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-surface border-y border-line px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-label-md uppercase text-on-dark/40 block mb-4">Popular packages</span>
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-on-dark">
            Clear pricing, <span className="font-semibold">no surprises.</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cleaningPackages.map((p) => (
              <div key={p.name} className="border border-line p-7 hover:border-accent transition-colors flex flex-col">
                <h3 className="text-headline-sm font-semibold mb-4 text-on-dark">{p.name}</h3>
                <p className="text-body-md text-on-dark/60 mb-6 flex-1">{p.blurb}</p>
                <div className="font-mono text-label-sm uppercase text-on-dark/40 mb-1">From</div>
                <div className="text-3xl font-extrabold text-accent">£{p.from}</div>
              </div>
            ))}
          </div>
          <p className="font-mono text-label-md uppercase text-on-dark/40 mt-8">
            Prices may vary by property size and condition · Contact us for a free quote
          </p>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-label-md uppercase text-on-dark/40 block mb-4">The difference</span>
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-on-dark">
            See the <span className="font-semibold">before & after.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cleaningGallery.map((item) => (
              <BeforeAfter key={item.room} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-surface border-y border-line px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-on-dark">
            Why choose <span className="font-semibold">DND Cleaning?</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-5">
            {cleaningWhy.map((w, i) => (
              <div key={w} className="flex items-center gap-4 py-3 border-b border-line">
                <span className="font-mono text-label-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-body-md md:text-base text-on-dark/85">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand label="Book a clean" />
    </div>
  );
}

function CtaBand({ label }) {
  return (
    <section className="px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-light leading-snug text-on-dark mb-3">
            Ready when <span className="font-semibold">you are.</span>
          </h2>
          <p className="text-on-dark/60 text-body-md">Covering {CONTACT.coverage}.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={`https://wa.me/${CONTACT.whatsappIntl}`} target="_blank" rel="noreferrer" className="bg-accent text-on-surface px-8 py-4 text-body-md font-semibold hover:bg-accent-bright transition-colors text-center whitespace-nowrap">
            WhatsApp {CONTACT.whatsapp}
          </a>
          <Link to="/contact" className="border border-line text-on-dark px-8 py-4 text-body-md font-medium hover:border-accent transition-colors text-center whitespace-nowrap">
            {label}
          </Link>
        </div>
      </div>
    </section>
  );
}
