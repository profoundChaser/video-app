/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
module.exports = {
  prefix:'tw-',
  content: [
    './index.html',
    './src/**/*.{vue, js, ts, jsx, tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  // presets: [require('./tailwind.preset.js')],
  screens:{
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  theme: {
    extend: {
      minWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        280: '280px',
        360: '360px',
        450: '450px',
      },
      rotate: {
        270: '270deg',
        '-270': '-270deg',
        360: '360deg',
        '-360': '360deg',
      },
      skew: {
        '-30': '-30deg',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      //添加更大的断点
      screens: {
        '3xl': '1600px',
      },
    },
  },
  corePlugins: {
    // aspectRatio: false,
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.skew-10deg': {
          transform: 'skewY(-10deg)',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
  darkMode: 'class', // or 'media' or 'class'
};
