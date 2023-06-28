/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "'Raleway', sans-serif",
        openSans: "'Open Sans', sans-serif",
      },
      colors: {
        heading: "#07043b",
        thirdSection: "#575989",
      }
    },
  },
  plugins: [],
}

