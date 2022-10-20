/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      // Using modern `hsl`
      primary: 'hsl(var(--color-primary) / <alpha-value>)',
      lightgray: 'hsl(var(--color-lightgray) / <alpha-value>)',
      mediumgray: 'hsl(var(--color-mediumgray) / <alpha-value>)',
      cleardarkblue: 'hsl(var(--color-cleardarkblue) / <alpha-value>)',
      darkblue: 'hsl(var(--color-darkblue) / <alpha-value>)',
      verydarkblue: 'hsl(var(--color-verydarkblue) / <alpha-value>)',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    }
  },
  plugins: [],
}
