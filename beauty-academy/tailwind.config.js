/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "bg-main": "rgb(var(--bg-main) / <alpha-value>)",
        "bg-surface": "rgb(var(--bg-surface) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-light": "rgb(var(--primary-light) / <alpha-value>)",
        "primary-dark": "rgb(var(--primary-dark) / <alpha-value>)",
        "text-main": "rgb(var(--text-main) / <alpha-value>)",
        "text-muted": "rgb(var(--text-muted) / <alpha-value>)",
        gold: "rgb(var(--gold) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        liftFade: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        unlock: {
          "0%": { opacity: "1", filter: "blur(0px)" },
          "100%": { opacity: "0", filter: "blur(6px)" },
        },
      },
      animation: {
        "lift-fade": "liftFade 0.6s cubic-bezier(0.16,1,0.3,1) both",
        unlock: "unlock 0.7s ease forwards",
      },
    },
  },
  plugins: [],
};
