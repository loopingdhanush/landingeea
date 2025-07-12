/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Kollektif"', 'sans-serif'], // must be quoted
        body: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
