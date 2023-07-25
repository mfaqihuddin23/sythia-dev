/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "index.html"],
  theme: {
    container: {
      center: true,
      screens:{
        xl:'1170px'
      }
    },
    fontFamily: {
      jakarta:['"Plus Jakarta Sans"'],
      spring: ['FontspringDemo']
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'blue-700':'#0B4AEB',
        'stone-950':'#0D0D0D',
        'neutral-900':'#131313',
        'zinc-900':'#1C1C1C',
        'indigo-700':'#240CF3',
        'neutral-700':'#3B3B3B',
        'neutral-400':'#8D8D8D',
        'sythia': {
          100: '#8D8D8D',
          200: '#3B3B3B',
          300: '#1C1C1C',
          400: '#131313',
          500: '#0D0D0D',
          600: '#0B4AEB',
          700: '#240CF3',
          800: '',
          900: '',
        },
      },
    }
  },
  plugins: [],
}

