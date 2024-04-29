/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyColor : "#252422",
        navColor : "#eb5e28",
        letrasColor : "#FFDB01"
      },
      fontFamily: {
        primary: ['Bebas Neue', 'Sans-serif'],
        secondary: ['Ubuntu', 'Sans-serif'],
        text: ['Ubuntu', 'Sans-serif'],
        accent: ['Ubuntu', 'Sans-serif'],
      },
    },
  },
  plugins: [],
}

