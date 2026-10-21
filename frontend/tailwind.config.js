/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ph-hueso': '#F8F7F1',
        'ph-taupe': '#49413D',
        'ph-oscuro': '#292929',
        'ph-bronce': '#AD9E7A',
        'ph-verde': '#1F6340',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], 
        serif: ['Erode', 'serif'], 
      }
    },
  },
  plugins: [],
}