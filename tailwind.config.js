/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
         formbgclr : "#E6E6E6",
         formbtnclr : "#0068C8"
      },
    },
  },
  plugins: [],
}