/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.jsx",
    "./src/components/**/*.jsx",
    "./src/pages/**/*.jsx",
    "./index.html",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Unbounded", "sans-serif"],
    },
  },
  plugins: [],
};
