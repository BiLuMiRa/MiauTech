/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      miaudota: 'var(--color-miaudota)',
      miaujuda: 'var(--color-miaujuda)'
    },
    extend: {},
  },
  plugins: [],
}
