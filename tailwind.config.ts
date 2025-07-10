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
        outfit: "var(--font-outfit)",
        gotham: "var(--font-gotham)",
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-bold": "inherit",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
