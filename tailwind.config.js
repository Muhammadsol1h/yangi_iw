/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner' : "url('/public/image/hero/hero.png')"
      },
      colors: {
        'pink': 'rgba(187, 38, 73, 0.5)',
        'pnk': 'rgba(212, 46, 91, 1)'
      },
    },
  },
  plugins: [],
}

