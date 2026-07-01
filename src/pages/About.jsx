import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function About() {
  return (
    <div className="pt-28 md:pt-36">
      <SEO
        title="About DND Living"
        description="Meet DND Living — Birmingham's trusted team for property management, short lets, professional cleaning, and property maintenance. One team, four services."
        canonical="/about"
      />
      {/* Intro */}
      <section className="px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-label-md uppercase text-on-surface/40 block mb-4">
            About DND Stays
          </span>
          <h1 className="text-4xl md:text-6xl font-light leading-[1.08] max-w-4xl">
            We run homes the way
            <br />
            <span className="font-extrabold">we'd want to stay in them.</span>
          </h1>
        </div>
      </section>

      {/* Image band */}
      <section className="px-6 md:px-12 mb-16 md:mb-24">
        <div className="max-w-[1400px] mx-auto aspect-[21/9] overflow-hidden bg-surface-low">
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1920&q=80"
            alt="A DND Stays managed living space"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Story */}
      <section className="px-6 md:px-12 pb-20 md:pb-28">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <span className="font-mono text-label-md uppercase text-on-surface/40">
              The DND way
            </span>
          </div>
          <div className="md:col-span-8 space-y-6 text-base text-on-surface/80 leading-relaxed max-w-2xl">
            <p>
              DND Stays is the short-let and serviced apartment arm of the DND group.
              Where the rest of the group is built around discipline and showing up,
              this side of the business is about the opposite feeling: arriving
              somewhere that already feels handled.
            </p>
            <p>
              Every home in our collection is one we manage directly. We furnish it,
              maintain it, clean it, and answer for it. That means consistent quality
              and a single team standing behind every stay, whether you're here for two
              nights or three months.
            </p>
            <p>
              And when you have a question, you talk to us on the site. No bouncing
              between apps, no waiting on an email thread. A real person from the team,
              answering where you already are.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-on-surface text-on-primary px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-light leading-snug mb-14 max-w-2xl">
            What every stay
            <span className="font-semibold"> comes with.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {[
              { t: "Managed in-house", d: "No third-party hosts. Every home is run by our own team, to one standard." },
              { t: "Ready on arrival", d: "Cleaned, stocked, and set up for self check-in before you walk in the door." },
              { t: "Support that answers", d: "Reach us on-site any time during your stay. We reply where you're already talking to us." },
            ].map((v, i) => (
              <div key={i}>
                <div className="font-mono text-label-md text-accent mb-5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-headline-sm font-semibold mb-3">{v.t}</h3>
                <p className="text-body-md text-on-primary/70 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="text-3xl md:text-5xl font-light leading-snug max-w-2xl">
            Find your
            <span className="font-semibold"> next stay.</span>
          </h2>
          <Link
            to="/stays"
            className="bg-accent text-on-primary px-8 py-4 text-body-md font-medium hover:bg-on-surface transition-colors self-start whitespace-nowrap"
          >
            Browse all homes
          </Link>
        </div>
      </section>
    </div>
  );
}
