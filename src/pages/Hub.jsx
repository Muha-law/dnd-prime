import { Link } from "react-router-dom";
import { arms, CONTACT } from "../data/group";

export default function Hub() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-16 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-low/40 to-background" />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <span className="font-mono text-label-md uppercase text-accent tracking-widest block mb-6 animate-fade-in">
            Drive N Discipline in everything we do
          </span>
          <h1 className="font-light text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl mb-8 animate-fade-in text-on-dark">
            One group for your
            <br />
            <span className="font-extrabold">property, start to finish.</span>
          </h1>
          <p className="text-on-dark/70 text-base md:text-lg max-w-xl leading-relaxed animate-fade-in">
            Four services under one roof — find a home, book a stay, get it cleaned,
            and keep it maintained. Pick where you'd like to start.
          </p>
        </div>
      </section>

      {/* FOUR ARMS GRID */}
      <section className="px-6 md:px-10 pb-20 md:pb-28">
        <div className="max-w-[1400px] mx-auto grid sm:grid-cols-2 gap-5">
          {arms.map((arm, i) => (
            <Link
              key={arm.id}
              to={arm.to}
              className="group relative aspect-[16/10] md:aspect-[16/11] overflow-hidden border border-line hover:border-accent transition-colors"
            >
              <img
                src={arm.image}
                alt={arm.name}
                loading={i < 2 ? "eager" : "lazy"}
                className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-65 group-hover:scale-[1.03] transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-7 md:p-9">
                <span className="font-mono text-label-sm uppercase text-accent tracking-widest mb-3">
                  {String(i + 1).padStart(2, "0")} · {arm.tag}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-on-dark">{arm.name}</h2>
                <p className="text-body-md text-on-dark/70 max-w-sm mb-4 leading-relaxed">{arm.blurb}</p>
                <span className="font-mono text-label-md uppercase text-on-dark group-hover:text-accent transition-colors">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-surface border-y border-line px-6 md:px-10 py-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { t: "Reliable", s: "Service" },
            { t: "Trusted", s: "Experts" },
            { t: "Quality", s: "Workmanship" },
            { t: "Community", s: "Focused" },
          ].map((v) => (
            <div key={v.t}>
              <div className="text-accent font-bold text-lg md:text-xl mb-1">{v.t}</div>
              <div className="font-mono text-label-md uppercase text-on-dark/50">{v.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light leading-snug mb-6 text-on-dark">
            One call for
            <span className="font-semibold"> all of it.</span>
          </h2>
          <p className="text-on-dark/65 text-body-md md:text-base mb-10 max-w-md mx-auto">
            Not sure which service you need? Reach out and we'll point you the right way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${CONTACT.whatsappIntl}`}
              target="_blank"
              rel="noreferrer"
              className="bg-accent text-on-surface px-8 py-4 text-body-md font-semibold hover:bg-accent-bright transition-colors"
            >
              WhatsApp {CONTACT.whatsapp}
            </a>
            <Link
              to="/contact"
              className="border border-line text-on-dark px-8 py-4 text-body-md font-medium hover:border-accent transition-colors"
            >
              Send a message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
