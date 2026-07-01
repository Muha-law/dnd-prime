import { Link } from "react-router-dom";
import {
  maintenanceServices,
  maintenanceAllServices,
  maintenanceWhy,
  CONTACT,
} from "../data/group";
import { PhoneCta } from "../components/PhoneLink";
import FadeIn from "../components/FadeIn";

export default function Maintenance() {
  return (
    <div className="pt-24 md:pt-28">
      {/* HERO */}
      <section className="px-6 md:px-10 py-12 md:py-16 border-b border-line">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-label-md uppercase text-accent tracking-widest block mb-5">
            DND Maintenance · Professional · Reliable · Affordable
          </span>
          <h1 className="font-light text-4xl md:text-6xl lg:text-7xl leading-[1.04] mb-6 text-on-dark">
            One call for all your
            <br />
            <span className="font-extrabold">maintenance needs.</span>
          </h1>
          <p className="text-on-dark/70 text-base md:text-lg max-w-xl leading-relaxed mb-8">
            Reliable property and building maintenance for residential and commercial
            spaces. No job too small — quality is our promise.
          </p>
          <a
            href={`https://wa.me/${CONTACT.whatsappIntl}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-accent text-on-surface px-7 py-3.5 text-body-md font-semibold hover:bg-accent-bright transition-colors"
          >
            Request a callout
          </a>
        </div>
      </section>

      {/* HEADLINE SERVICES GRID */}
      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-label-md uppercase text-on-dark/40 block mb-4">What we do</span>
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-on-dark">
            Skilled hands for <span className="font-semibold">every job.</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {maintenanceServices.map((s, i) => (
              <FadeIn key={s.name} delay={i * 80}>
                <div className="border border-line p-6 hover:border-accent transition-colors h-full">
                  <h3 className="text-base font-semibold mb-2 text-on-dark">{s.name}</h3>
                  <p className="text-body-md text-on-dark/60 leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FULL SERVICES + WHY (two columns, like the flyer) */}
      <section className="bg-surface border-y border-line px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <span className="font-mono text-label-md uppercase text-accent block mb-6">Our services include</span>
            <ul className="space-y-3">
              {maintenanceAllServices.map((s) => (
                <li key={s} className="flex items-center gap-3 py-2 border-b border-line">
                  <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                  <span className="text-body-md md:text-base text-on-dark/85">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-mono text-label-md uppercase text-accent block mb-6">Why choose DND?</span>
            <ul className="space-y-3">
              {maintenanceWhy.map((w) => (
                <li key={w} className="flex items-center gap-3 py-2 border-b border-line">
                  <span className="text-accent shrink-0">✓</span>
                  <span className="text-body-md md:text-base text-on-dark/85">{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CALLOUT BANNER */}
      <section className="bg-accent text-on-surface px-6 md:px-10 py-14">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="font-mono text-label-md uppercase tracking-widest mb-2 text-on-surface/70">No job too small</p>
          <h2 className="text-2xl md:text-4xl font-bold">Quality is our promise.</h2>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-light leading-snug text-on-dark mb-3">
              Got something that <span className="font-semibold">needs fixing?</span>
            </h2>
            <p className="text-on-dark/60 text-body-md">Fast response · Fully insured · {CONTACT.coverage}.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <PhoneCta />
            <Link to="/contact" className="border border-line text-on-dark px-8 py-4 text-body-md font-medium hover:border-accent transition-colors text-center whitespace-nowrap">
              Send a message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
