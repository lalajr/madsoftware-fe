const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'crimson': '#D72638',
        'madsoft-charcoal': '#121212',
        'soft-white': '#EAEAEA',
        'silver-gray': '#BBBBBB',
        'deep-charcoal': '#212121',
        'muted-gray': '#555555'
      },
      maxWidth: {
        'default': '1624px',
      },
      fontFamily: {
        bebas: ['Bebas_Neue', 'sans-serif'],
        helvetica: ['HelveticaNeue', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}; 