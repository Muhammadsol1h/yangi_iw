/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner' : "url('/public/image/hero/hero.png')",
      },
      backgroundImage: {
        'bannertwo' : "url('/public/image/decont/banner2.png')",
      },
      colors: {
        'pink': 'rgba(187, 38, 73, 0.5)',
      },
      colors: {
        'onecart': 'linear-gradient(180deg, rgba(217, 217, 217, 0.04) 12.5% , rgba(115, 115, 115, 0.02) 98%)'
      },
    },
  },
  plugins: [],
}

