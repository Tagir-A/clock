/** @type {import('tailwindcss').Config} */


const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          
          from: {
            transform: 'translateX(0)'
          },
          to:{
            transform: `translateX(calc(-100% - 1rem))`
          }
        }
      }
    },
    animation: {
      marquee: 'marquee 60s linear infinite'
    }
  },
  plugins: [],
}
