/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./src/**/*.{html,js}", 
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
        fontFamily:{
        'Karla-Regular':['Karla-Regular'],
        'Karla-Heavy':['Karla-Heavy'],
        'Karla-Bold':['Karla-Bold'],
        'Karla-ExtraBold':['Karla-ExtraBold']
      }, 
        boxShadow: {
        'btnShadow': '0px 2px 10px rgba(0, 14, 95, 0.12)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tw-elements/dist/plugin')
  ],
}
