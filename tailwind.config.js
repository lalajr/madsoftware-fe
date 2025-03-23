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
      
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1624px',  // This is the max-width
        },
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      minWidth: {
        'container': '320px',  // This sets the minimum width
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}; 