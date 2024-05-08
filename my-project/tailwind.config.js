/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'first-color': 'hsl(178, 72%, 55%)',
        'first-color-light': 'hsl(171, 97%, 77%)',
        'first-color-alt': 'hsl(160, 67%, 52%)',
        'first-color-dark': 'hsl(193, 63%, 50%)',
        'first-color-gray': 'hsl(79, 6%, 64%)',
        'title-color': 'hsl(180, 4%, 98%)',
        'title-color-black': 'hsl(180, 4%, 12%)',
        'text-color': 'hsl(180, 4%, 72%)',
        'text-color-light': 'hsl(180, 4%, 65%)',
        'body-color': 'hsl(180, 12%, 8%)',
        "body-color-2": "#0B0F0F"
      },
      fontFamily: {
        body: ['Red Hat Display', 'sans-serif'],
        script: ['Kaushan Script', 'cursive'],
      },
      fontSize: {
        'h2-font-size': '1.25rem', // El tamaño de fuente para h2
      },
      fontWeight: {
        bold: 700, // Correspondiente al valor definido en CSS
      },
      letterSpacing: {
        wide: '1.5px', // Espaciado entre letras
      },
    },
  },
  plugins: [],
}

