/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "'Raleway', sans-serif",
      },
      colors: {
        heading: "#07043b",
        thirdSection: "#575989",
      }
    },
  },
  plugins: [],
}

