import { useState } from "react";
import { CONTACT } from "../data/group";
import { PhoneLink } from "../components/PhoneLink";
import SEO from "../components/SEO";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = () => {
    if (!form.name || !form.email || !form.message) return;
    // TODO: wire to backend / email service when ready.
    setSent(true);
  };

  return (
    <div className="pt-28 md:pt-36 pb-20 md:pb-28">
      <SEO
        title="Contact Us"
        description="Get in touch with the DND Living team in Birmingham. Call, WhatsApp, or email us about properties, short lets, cleaning, or maintenance services."
        canonical="/contact"
      />
      <section className="px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left */}
          <div className="md:col-span-5">
            <span className="font-mono text-label-md uppercase text-on-dark/40 block mb-4">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              Talk to the
              <br />
              <span className="font-extrabold">DND Stays team.</span>
            </h1>
            <p className="text-body-md md:text-base text-on-dark/70 leading-relaxed mb-10 max-w-md">
              Looking for a specific home, a longer stay, or a corporate booking?
              Send a note or just open the chat in the corner and we'll reply right there.
            </p>

            <div className="space-y-6">
              <div className="border-b border-line pb-4">
                <div className="font-mono text-label-sm uppercase text-on-dark/40 mb-1">WhatsApp / Call</div>
                <PhoneLink className="text-body-md md:text-base" dir="down" />
              </div>
              <div className="border-b border-line pb-4">
                <div className="font-mono text-label-sm uppercase text-on-dark/40 mb-1">Email</div>
                <a href={`mailto:${CONTACT.email}`} className="text-body-md md:text-base hover:text-accent transition-colors">{CONTACT.email}</a>
              </div>
              <div className="border-b border-line pb-4">
                <div className="font-mono text-label-sm uppercase text-on-dark/40 mb-1">Covering</div>
                <div className="text-body-md md:text-base">{CONTACT.coverage}</div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-7">
            <div className="border border-line p-7 md:p-10">
              {sent ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 bg-accent mx-auto mb-6 flex items-center justify-center">
                    <span className="text-on-surface text-2xl">✓</span>
                  </div>
                  <h2 className="text-headline-sm font-semibold mb-2">Message sent</h2>
                  <p className="text-body-md text-on-dark/60">
                    Thanks, {form.name.split(" ")[0]}. The team will reply to {form.email} shortly.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="font-mono text-label-md uppercase text-on-dark/40 block mb-2">
                      Your name
                    </label>
                    <input
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3.5 text-body-md bg-surface-low border border-line text-on-dark placeholder:text-on-dark/40 focus:border-accent outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-label-md uppercase text-on-dark/40 block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="jane@email.com"
                      className="w-full px-4 py-3.5 text-body-md bg-surface-low border border-line text-on-dark placeholder:text-on-dark/40 focus:border-accent outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-label-md uppercase text-on-dark/40 block mb-2">
                      Message
                    </label>
                    <textarea
                      value={form.message}
                      onChange={update("message")}
                      rows={5}
                      placeholder="Tell us what you're looking for…"
                      className="w-full px-4 py-3.5 text-body-md bg-surface-low border border-line text-on-dark placeholder:text-on-dark/40 focus:border-accent outline-none resize-none"
                    />
                  </div>
                  <button
                    onClick={submit}
                    className="w-full bg-accent text-on-surface py-4 text-body-md font-semibold hover:bg-accent-bright transition-colors"
                  >
                    Send message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
