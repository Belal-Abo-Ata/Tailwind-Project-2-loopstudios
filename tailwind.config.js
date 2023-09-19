/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./**/*.{html, js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.3rem',
      },
    },
  },
  plugins: [],
};
