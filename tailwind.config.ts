// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // deal with bold styling clash
      fontFamily: {
        // outfit: "var(--font-outfit)",
        // gotham: "var(--font-gotham)",
        helvetica: "var(--font-helvetica)",
        ebGaramond: "var(--font-eb-garamond)",
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-bold": "inherit",
          },
        },
      },
      keyframes: {
        slideShow: {
          "0%": { transform: "translateX(0%)" },
          "25%": { transform: "translateX(0%)" },
          "26%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(-100%)" },
          "51%": { transform: "translateX(-200%)" },
          "75%": { transform: "translateX(-200%)" },
          "76%": { transform: "translateX(-300%)" },
          "100%": { transform: "translateX(-300%)" },
        },
      },
      animation: {
        slideShow: "slideShow 16s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
