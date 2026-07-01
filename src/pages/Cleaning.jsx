import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  cleaningServices,
  cleaningPackages,
  cleaningGallery,
  cleaningWhy,
  cleaningQuoteTypes,
  cleaningQuoteExtras,
  CONTACT,
} from "../data/group";
import { PhoneCta } from "../components/PhoneLink";
import FadeIn from "../components/FadeIn";

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
            href="#quote"
            className="inline-block bg-accent text-on-surface px-7 py-3.5 text-body-md font-semibold hover:bg-accent-bright transition-colors"
          >
            Get an instant quote
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
            {cleaningPackages.map((p, i) => (
              <FadeIn key={p.name} delay={i * 80}>
                <div className="border border-line p-7 hover:border-accent transition-colors flex flex-col h-full">
                  <h3 className="text-headline-sm font-semibold mb-4 text-on-dark">{p.name}</h3>
                  <p className="text-body-md text-on-dark/60 mb-6 flex-1">{p.blurb}</p>
                  <div className="font-mono text-label-sm uppercase text-on-dark/40 mb-1">From</div>
                  <div className="text-3xl font-extrabold text-accent">£{p.from}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="font-mono text-label-md uppercase text-on-dark/40 mt-8">
            Prices may vary by property size and condition · Contact us for a free quote
          </p>
        </div>
      </section>

      {/* QUOTE ESTIMATOR */}
      <section id="quote" className="px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-label-md uppercase text-on-dark/40 block mb-4">Instant quote</span>
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-on-dark">
            Get a price <span className="font-semibold">in seconds.</span>
          </h2>
          <QuoteEstimator />
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

const sizes = ["Studio", "1 Bed", "2 Bed", "3 Bed", "4 Bed+"];

function useCountUp(target, duration = 450) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const fromRef = useRef(0);

  useEffect(() => {
    if (target === null) { fromRef.current = 0; setDisplay(0); return; }
    const from = fromRef.current;
    const to = target;
    cancelAnimationFrame(rafRef.current);
    startRef.current = null;
    const tick = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const p = Math.min((ts - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(from + (to - from) * eased));
      if (p < 1) { rafRef.current = requestAnimationFrame(tick); }
      else { fromRef.current = to; }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return display;
}

function QuoteEstimator() {
  const [type, setType] = useState(null);
  const [size, setSize] = useState(null);
  const [extras, setExtras] = useState([]);
  const animatedTotal = useCountUp(
    type && size ? (type.prices[size] + extras.reduce((s, n) => s + (cleaningQuoteExtras.find(e => e.name === n)?.price ?? 0), 0)) : null
  );

  const toggleExtra = (name) =>
    setExtras((prev) => prev.includes(name) ? prev.filter((e) => e !== name) : [...prev, name]);

  const basePrice = type && size ? type.prices[size] : null;
  const extrasTotal = extras.reduce((sum, name) => {
    const extra = cleaningQuoteExtras.find((e) => e.name === name);
    return sum + (extra ? extra.price : 0);
  }, 0);
  const total = basePrice !== null ? basePrice + extrasTotal : null;

  const waMessage = type && size
    ? encodeURIComponent(`Hi, I'd like to book a ${type.name} for a ${size} property. Estimated quote: £${total}${extras.length ? ` (incl. ${extras.join(", ")})` : ""}. Please can you confirm availability?`)
    : "";

  return (
    <div className="grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-7 space-y-10">
        {/* Step 1 */}
        <div>
          <p className="font-mono text-label-md uppercase text-on-dark/40 mb-4">01 · Type of clean</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {cleaningQuoteTypes.map((t) => (
              <button
                key={t.name}
                onClick={() => setType(t)}
                className={"text-left border p-5 transition-colors " + (type?.name === t.name ? "border-accent bg-surface" : "border-line hover:border-accent")}
              >
                <span className="block font-semibold text-on-dark mb-1">{t.name}</span>
                <span className="block text-body-md text-on-dark/55">{t.blurb}</span>
                {type?.name === t.name && size && (
                  <span className="block font-mono text-label-sm uppercase text-accent mt-3">£{t.prices[size]}</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 */}
        <div>
          <p className="font-mono text-label-md uppercase text-on-dark/40 mb-4">02 · Property size</p>
          <div className="flex flex-wrap gap-3">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={"px-5 py-2.5 border font-mono text-label-md uppercase transition-colors " + (size === s ? "bg-accent text-on-surface border-accent" : "border-line text-on-dark/70 hover:border-accent")}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3 */}
        <div>
          <p className="font-mono text-label-md uppercase text-on-dark/40 mb-4">03 · Add extras <span className="text-on-dark/30">(optional)</span></p>
          <div className="grid sm:grid-cols-2 gap-3">
            {cleaningQuoteExtras.map((e) => {
              const selected = extras.includes(e.name);
              return (
                <button
                  key={e.name}
                  onClick={() => toggleExtra(e.name)}
                  className={"flex items-center justify-between border px-4 py-3 transition-colors " + (selected ? "border-accent bg-surface" : "border-line hover:border-accent")}
                >
                  <span className="text-body-md text-on-dark/85">{e.name}</span>
                  <span className={"font-mono text-label-sm uppercase " + (selected ? "text-accent" : "text-on-dark/40")}>+£{e.price}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="lg:col-span-5">
        <div className="sticky top-28 border border-line p-8">
          {total === null ? (
            <div className="text-center py-10">
              <p className="font-mono text-label-md uppercase text-on-dark/30 mb-2">Your estimate</p>
              <p className="text-on-dark/40 text-body-md">Select a clean type and property size to see your price.</p>
            </div>
          ) : (
            <>
              <p className="font-mono text-label-md uppercase text-on-dark/40 mb-6">Your estimate</p>
              <div className="border-b border-line pb-6 mb-6 space-y-3">
                <div className="flex justify-between text-body-md">
                  <span className="text-on-dark/70">{type.name} · {size}</span>
                  <span className="text-on-dark font-medium">£{basePrice}</span>
                </div>
                {extras.map((name) => {
                  const ex = cleaningQuoteExtras.find((e) => e.name === name);
                  return (
                    <div key={name} className="flex justify-between text-body-md">
                      <span className="text-on-dark/70">{name}</span>
                      <span className="text-on-dark/70">+£{ex.price}</span>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between items-baseline mb-8">
                <span className="font-mono text-label-md uppercase text-on-dark/40">Estimated total</span>
                <span className="text-4xl font-extrabold text-accent">£{animatedTotal}</span>
              </div>
              <p className="text-body-md text-on-dark/40 mb-6 text-sm leading-relaxed">
                This is an estimate. Final price confirmed after a quick chat about your property.
              </p>
              <a
                href={`https://wa.me/${CONTACT.whatsappIntl}?text=${waMessage}`}
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center bg-accent text-on-surface px-6 py-4 text-body-md font-semibold hover:bg-accent-bright transition-colors"
              >
                Book on WhatsApp
              </a>
            </>
          )}
        </div>
      </div>
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
          <PhoneCta />
          <Link to="/contact" className="border border-line text-on-dark px-8 py-4 text-body-md font-medium hover:border-accent transition-colors text-center whitespace-nowrap">
            {label}
          </Link>
        </div>
      </div>
    </section>
  );
}
