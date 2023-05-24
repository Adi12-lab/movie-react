/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: "16px",
      center: true,
    },
    letterSpacing: {
      widest: '.5em'
    },
    extend: {
      colors : {
        'primary': "#CCFF00",
        'secondary': "#B0DC00",
        'dark': "#2E2E2E",
        'darkness': '#242424',
        'gray': "#ACACAC"
      },
      fontFamily: {
        imprima: ["Imprima", "sans-serif"],
        homenaje: ["Homenaje", "cursive"],
        frenchCanon: ["IM FELL French Canon", "sans-serif"]
      },
      backgroundSize: {
        '100': '100% 100%',
      },
    },
  },
  plugins: [],
}