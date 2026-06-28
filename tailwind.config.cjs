/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#111111",
        "surface-low": "#1a1a1a",
        "surface-raised": "#171717",
        "surface-light": "#f7f6f3",
        primary: "#0a0a0a",
        accent: "#c8973f",        // DND gold/bronze
        "accent-bright": "#e0b25a",
        "accent-dim": "#8f6c2e",
        "on-surface": "#0a0a0a",
        "on-dark": "#f5f3ee",
        "on-primary": "#ffffff",
        line: "#2a2521",
      },
      animation: {
        "slide-up": "slideUp 0.5s ease-out",
        "fade-in": "fadeIn 0.7s ease-out both",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        mono: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "headline-sm": ["1.5rem", { lineHeight: "1.2" }],
        "title-lg": ["2.5rem", { lineHeight: "1.1" }],
        "body-md": ["0.875rem", { lineHeight: "1.6" }],
        "label-md": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.04em" }],
        "label-sm": ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
      },
      borderRadius: { none: "0px" },
      boxShadow: { ambient: "0 20px 50px rgba(0,0,0,0.5)" },
    },
  },
  plugins: [],
};
