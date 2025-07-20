/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kollektif: ['Kollektif', 'Open Sans', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
