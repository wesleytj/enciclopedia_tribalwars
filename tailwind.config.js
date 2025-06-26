/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['"EB Garamond"', 'serif'],
        content: ['"Dutch Mediaeval"', 'serif'],
      },
      backgroundImage: {
        'castle-wall': "url('/src/assets/images/stone-wall-bg.png')",
      },
    },
  },
  plugins: [],
}
