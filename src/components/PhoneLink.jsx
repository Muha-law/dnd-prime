import { useState, useRef, useEffect } from "react";
import { CONTACT } from "../data/group";

function PhonePopup({ onClose, dir = "up" }) {
  const pos = dir === "up" ? "bottom-full mb-2" : "top-full mt-2";
  return (
    <div className={`absolute left-0 ${pos} bg-surface border border-line z-50 min-w-[180px] shadow-lg`}>
      <a
        href={`tel:${CONTACT.whatsapp.replace(/\s/g, "")}`}
        className="flex items-center gap-3 px-4 py-3.5 text-body-md text-on-dark hover:bg-surface-low transition-colors"
        onClick={onClose}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-accent">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.41 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.58 6.58l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Call
      </a>
      <a
        href={`https://wa.me/${CONTACT.whatsappIntl}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 px-4 py-3.5 text-body-md text-on-dark hover:bg-surface-low transition-colors border-t border-line"
        onClick={onClose}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-accent">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}

function useOutsideClick(ref, handler) {
  useEffect(() => {
    const listener = (e) => { if (!ref.current?.contains(e.target)) handler(); };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler]);
}

// Inline number — renders as tappable text
export function PhoneLink({ className = "", dir = "up" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => setOpen(false));

  return (
    <span ref={ref} className={"relative inline-block " + className}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="hover:text-accent transition-colors"
      >
        {CONTACT.whatsapp}
      </button>
      {open && <PhonePopup onClose={() => setOpen(false)} dir={dir} />}
    </span>
  );
}

// CTA button — renders styled like a primary action button
export function PhoneCta({ className = "" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => setOpen(false));

  return (
    <span ref={ref} className={"relative inline-block " + className}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="bg-accent text-on-surface px-8 py-4 text-body-md font-semibold hover:bg-accent-bright transition-colors whitespace-nowrap flex items-center gap-2"
      >
        Call or WhatsApp
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && <PhonePopup onClose={() => setOpen(false)} dir="up" />}
    </span>
  );
}
