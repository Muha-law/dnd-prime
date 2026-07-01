import { Link } from "react-router-dom";
import { CONTACT } from "../data/group";
import { PhoneLink } from "./PhoneLink";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-line px-6 md:px-10 py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2 mb-5">
              <span className="font-extrabold text-2xl tracking-tight border-b-2 border-accent pb-0.5 leading-none text-on-dark">DND</span>
              <span className="font-mono text-label-sm uppercase tracking-widest text-accent">Prime</span>
            </div>
            <p className="text-on-dark/60 text-body-md max-w-sm leading-relaxed mb-2">
              Properties, short lets, cleaning, and maintenance under one roof.
            </p>
          </div>

          <div className="md:col-span-3">
            <span className="font-mono text-label-md uppercase text-on-dark/40 block mb-5">Our services</span>
            <ul className="space-y-3 text-body-md">
              <li><Link to="/properties" className="text-on-dark/75 hover:text-accent transition-colors">Properties</Link></li>
              <li><Link to="/stays" className="text-on-dark/75 hover:text-accent transition-colors">Short Lets</Link></li>
              <li><Link to="/cleaning" className="text-on-dark/75 hover:text-accent transition-colors">Cleaning</Link></li>
              <li><Link to="/maintenance" className="text-on-dark/75 hover:text-accent transition-colors">Maintenance</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <span className="font-mono text-label-md uppercase text-on-dark/40 block mb-5">Get in touch</span>
            <ul className="space-y-3 text-body-md text-on-dark/75">
              <li>WhatsApp / Call: <PhoneLink className="text-on-dark" /></li>
              <li><a href={`mailto:${CONTACT.email}`} className="hover:text-accent transition-colors">{CONTACT.email}</a></li>
              <li>Covering {CONTACT.coverage}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-line flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <span className="font-mono text-label-sm uppercase text-on-dark/40">© {new Date().getFullYear()} DND Prime</span>
          <span className="font-mono text-label-sm uppercase text-on-dark/40">No job too small — quality is our promise</span>
        </div>
      </div>
    </footer>
  );
}
