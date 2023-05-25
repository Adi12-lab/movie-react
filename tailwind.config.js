/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    container: {
      padding: "45px",
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
        gurajada: ['Gurajada', "sans-serif"],
        frenchCanon: ["IM FELL French Canon", "sans-serif"]
      },
      backgroundSize: {
        '100': '100% 100%',
      },
    },
  },
  plugins: [],
}