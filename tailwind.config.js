/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
     },
     colors: {
        primary : '#032987',
        secondary : '#1f5eff',
        menu:"#ECEDED",
        outline:"#1D7EBB"
     }
    },
  },
  plugins: [],
}