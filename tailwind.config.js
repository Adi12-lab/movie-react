/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      "padding": "16px"
    },
    letterSpacing: {
      widest: '.5em'
    },
    extend: {
      colors : {
        'primary': "#CCFF00",
        'secondary': "#B0DC00",
        'dark': "#2E2E2E",
        'gray': "#ACACAC"
      },
      fontFamily: {
        imprima: ["Imprima", "sans-serif"],
        homenaje: ["Homenaje", "cursive"],
        frenchCanon: ["IM FELL French Canon", "sans-serif"]
      }
    },
  },
  plugins: [],
}