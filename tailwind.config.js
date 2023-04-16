/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
      },
      colors: {
        mioblack: "#1f1f1f",
        miogray: {
          50: "#444647",
          100: "#28292a",
        },
        miowhite: {
          50: "#f8fafd",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
