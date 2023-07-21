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
    extend: {}
  },
  plugins: [],
}

