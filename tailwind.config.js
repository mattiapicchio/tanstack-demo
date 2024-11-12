import { COLORS } from "./src/assets/css/tailwindColors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // disable automatic dark mode
  theme: {
    extend: {
      colors: COLORS,
    },
  },
  plugins: [],
};
