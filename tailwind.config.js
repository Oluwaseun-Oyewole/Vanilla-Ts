/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,ts,}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C43DD",
        primary200: "#5D5FEF",
        primary800: "#2B1887",
        dark: "#2C2C2C",
        secondary: "#D5CCFF",
      },
    },
  },
  plugins: [],
};
