import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7B2C2C",
        background: "#F5EFE6",
        accent: "#C9A45C",
        dark: "#2C2C2C",
        maroon: {
          light: "#8B3A3A",
          DEFAULT: "#7B2C2C",
          dark: "#5A1F1F",
        },
        beige: {
          light: "#FAF6F0",
          DEFAULT: "#F5EFE6",
          dark: "#E8DFD0",
        },
        gold: {
          light: "#D4B96A",
          DEFAULT: "#C9A45C",
          dark: "#A88A45",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Playfair Display", "serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
