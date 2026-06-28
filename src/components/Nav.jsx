import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  const solid = scrolled || !isHome;
  const bg = solid ? "bg-background/95 border-b border-line" : "bg-transparent";

  const links = [
    { to: "/properties", label: "Properties" },
    { to: "/stays", label: "Short Lets" },
    { to: "/cleaning", label: "Cleaning" },
    { to: "/maintenance", label: "Maintenance" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className={"fixed top-0 left-0 right-0 z-50 backdrop-blur-[16px] transition-colors duration-300 " + bg}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4 md:py-5 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 text-on-dark">
          <span className="font-extrabold text-lg tracking-tight border-b-2 border-accent pb-0.5 leading-none">DND</span>
          <span className="font-mono text-label-sm uppercase tracking-widest text-accent">Prime</span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => {
            const active = location.pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={"text-body-md transition-colors " + (active ? "text-accent" : "text-on-dark/80 hover:text-accent")}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="bg-accent text-on-surface px-5 py-2.5 text-body-md font-semibold hover:bg-accent-bright transition-colors"
          >
            Get a quote
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-1.5 p-2 text-on-dark"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="w-6 h-0.5 bg-current" />
          <span className="w-6 h-0.5 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-surface border-t border-line px-6 py-6 space-y-4">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="block text-base text-on-dark/90">{l.label}</Link>
          ))}
          <Link to="/contact" className="block text-center bg-accent text-on-surface px-5 py-3 text-body-md font-semibold">
            Get a quote
          </Link>
        </div>
      )}
    </nav>
  );
}
