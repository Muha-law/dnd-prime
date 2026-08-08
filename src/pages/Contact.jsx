import { CONTACT } from "../data/group";
import SEO from "../components/SEO";

// Opens the Tawk.to widget embedded in index.html. That script is deferred, and
// the click's own pointerdown is what kicks off its load — so poll briefly for
// the API to appear rather than giving up on the first miss. Falls back to email
// if it never arrives (blocked by an extension, offline, or script error).
const openChat = () => {
  const deadline = Date.now() + 5000;
  (function attempt() {
    if (window.Tawk_API?.maximize) return window.Tawk_API.maximize();
    if (Date.now() > deadline) {
      window.location.href = `mailto:${CONTACT.email}`;
      return;
    }
    setTimeout(attempt, 150);
  })();
};

export default function Contact() {
  return (
    <div className="pb-20 md:pb-28">
      <SEO
        title="Contact Us"
        description="Get in touch with the DND Living team in Birmingham. Call, WhatsApp, or email us about properties, short lets, cleaning, or maintenance services."
        canonical="/contact"
      />

      {/* HERO */}
      <section className="relative min-h-[45vh] flex items-end pb-12 pt-36 px-6 md:px-12 overflow-hidden border-b border-line mb-16 md:mb-20">
        <img
          src="/images/contact.webp"
          alt="DND Living team"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <span className="font-mono text-label-md uppercase text-accent tracking-widest block mb-4">Contact</span>
          <h1 className="text-4xl md:text-5xl font-light leading-tight text-on-dark">
            Talk to the
            <br />
            <span className="font-extrabold">DND Living team.</span>
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-body-md md:text-lg text-on-dark/70 leading-relaxed mb-12 md:mb-16 max-w-2xl">
            Looking for a specific home, a longer stay, or a corporate booking?
            Reach us whichever way suits you — we answer every one.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${CONTACT.whatsappIntl}`}
              target="_blank"
              rel="noreferrer"
              className="group bg-background p-7 md:p-10 hover:bg-surface-low transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-accent mb-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              <div className="font-mono text-label-sm uppercase text-on-dark/40 mb-2">WhatsApp</div>
              <div className="text-lg md:text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                {CONTACT.whatsapp}
              </div>
              <p className="text-body-md text-on-dark/50">Fastest reply — message us directly.</p>
            </a>

            {/* Call */}
            <a
              href={`tel:${CONTACT.whatsapp.replace(/\s/g, "")}`}
              className="group bg-background p-7 md:p-10 hover:bg-surface-low transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent mb-6">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.41 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.58 6.58l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div className="font-mono text-label-sm uppercase text-on-dark/40 mb-2">Call</div>
              <div className="text-lg md:text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                {CONTACT.whatsapp}
              </div>
              <p className="text-body-md text-on-dark/50">Speak to the team directly.</p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT.email}`}
              className="group bg-background p-7 md:p-10 hover:bg-surface-low transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent mb-6">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 6 10-6" />
              </svg>
              <div className="font-mono text-label-sm uppercase text-on-dark/40 mb-2">Email</div>
              <div className="text-body-md md:text-lg font-semibold mb-2 break-all group-hover:text-accent transition-colors">
                {CONTACT.email}
              </div>
              <p className="text-body-md text-on-dark/50">Best for detailed enquiries.</p>
            </a>
          </div>

          {/* Live chat + coverage */}
          <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
              <h2 className="text-xl md:text-2xl font-light mb-3">
                Prefer to <span className="font-extrabold">chat right here?</span>
              </h2>
              <p className="text-body-md text-on-dark/60 leading-relaxed mb-6 max-w-md">
                Open the live chat in the corner and a member of the team will reply
                in the window — no need to leave the site.
              </p>
              <button
                onClick={openChat}
                className="bg-accent text-on-surface px-8 py-4 text-body-md font-semibold hover:bg-accent-bright transition-colors"
              >
                Start live chat
              </button>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-line pt-8 md:pt-0 md:pl-12">
              <div className="font-mono text-label-sm uppercase text-on-dark/40 mb-2">Covering</div>
              <div className="text-lg md:text-xl">{CONTACT.coverage}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
