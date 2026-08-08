import { useRef, useEffect, useState } from "react";

/**
 * Reveals children on scroll.
 *
 * The important property here is that content is never *withheld*. This renders
 * at opacity 0 and waits for an IntersectionObserver, and on the properties grid
 * that observer was firing seconds late — cards sat invisible under a heading
 * that said "2 properties available", which reads as a page that failed to load.
 *
 * So the reveal is now guaranteed by three independent paths, and the animation
 * is only ever a bonus on top of content that will appear regardless:
 *
 *  1. The observer fires (the normal, nice case).
 *  2. A timer fires REVEAL_BY_MS after mount, whatever the observer is doing.
 *  3. Neither is possible — no observer support, or reduced motion — so the
 *     content starts visible and never animates at all.
 */
const REVEAL_BY_MS = 1200;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const canObserve = () => typeof window !== "undefined" && "IntersectionObserver" in window;

export default function FadeIn({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  // Start visible when we can't (or shouldn't) animate, so there is no frame in
  // which the content is hidden with nothing scheduled to reveal it.
  const [visible, setVisible] = useState(() => !canObserve() || prefersReducedMotion());

  useEffect(() => {
    if (visible) return;

    const el = ref.current;
    if (!el) return;

    // threshold 0: any intersection at all counts. The previous 0.12 meant an
    // element that had not yet been laid out — images still loading, so zero
    // area — could not satisfy it, because a zero-area box has ratio 0.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);

    // Backstop. Whatever the observer is doing, the content appears.
    const timer = setTimeout(() => {
      setVisible(true);
      observer.disconnect();
    }, REVEAL_BY_MS);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [visible]);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
