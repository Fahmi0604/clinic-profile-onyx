// app/fonts/my-font.ts
import localFont from "next/font/local";

export const CustomFonts = localFont({
  src: "./Helvetica.ttf",
  variable: "--font-helvetica",
  display: "swap", // optional, for font loading strategy
});
