/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Sans', 'sans-serif'],
      },
      colors: {
        primary: '#1E3A8A', // A deep blue color
        secondary: '#3B82F6', // A lighter blue for accents
      },
    },
  },
  plugins: [],
}

