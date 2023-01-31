// import plugin from 'tailwindcss/plugin'
const plugin = require('tailwindcss/plugin');


/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/ui/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff7652',
        purple: '#6c5ecf',
        'light-blue': '#32a8e2',
        gray: {
          400: '#9898ad',
          500: '#6b6b7b',
          600: '#5b5b6b',
          800: '#353340',
          900: '#272532',
        },
      },
      boxShadow: {
        DEFAULT: '0 3px 12px rgba(0, 0, 0, 0.03)',
        md: '0 3px 12px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        scaleIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)',
          },
          '50%': {
            opacity: 0.3,
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        fade: 'fade .5s easy-in-out',
        scaleIn: 'scaleIn .35s easy-in-out',
      },
      fontSize: {
        xs: '.9rem',
        sm: '1rem',
        tiny: '1.2rem',
        base: '1.4rem',
        lg: '1.5rem',
        xl: '1.6rem',
        '2xl': '1.75rem',
        '3xl': '1.9rem',
        '4xl': '2.4rem',
        '5xl': '3.5rem',
        '6xl': '4.5rem',
        '7xl': '5.5rem',
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.shadow-block': {
          display: 'block',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          animation: 'scaleIn .35s easy-in-out',
          backgroundColor: '#272532',
        },
      });
    }),
  ],
};
