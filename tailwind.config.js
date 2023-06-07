/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['*.{html, js}'],
  theme: {
    extend: {
      fontFamiy: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
      },
      letterSpacing: {
        widest: '.3rem',
      },
    },
  },
  plugins: [],
};
