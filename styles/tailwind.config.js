/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        accent: '#2196F3',
        highlight: '#FF9800',
        text: '#000000',
      },
    },
  },
  plugins: [],
}
