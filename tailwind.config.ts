import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { COLORS } from "./src/assets/css/tailwindColors";

/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class", // disable automatic dark mode
  theme: {
    extend: {
      colors: COLORS,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "4rem",
      },
    },
  },
  plugins: [
    // https://github.com/jamiebuilds/tailwindcss-animate
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate"),
    plugin(({ addComponents, addUtilities, theme }) => {
      addUtilities({
        ".ease-cube": {
          "transition-timing-function": "cubic-bezier(.25, 0, .2, 1)",
        },
        ".transition-opacity": {
          transition: "opacity 150ms ease-in-out",
        },
      });
      addComponents({
        ".button-primary": {
          backgroundColor: theme("colors.brand-orange"),
          color: theme("colors.white"),
          borderRadius: theme("borderRadius.md"),
          padding: `${theme("spacing.1")} ${theme("spacing.4")}`,

          "&:hover": {
            backgroundColor: theme("colors.gray.dark"),
          },
        },
      });
    }),
  ],
};

export default config;
