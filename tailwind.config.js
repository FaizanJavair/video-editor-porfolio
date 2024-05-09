/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0F0F0F",
        "fun-gray-light": "#EEEEEE",
        "fun-gray": "#3A4750",
        "fun-gray-medium": "#767c85",
        "fun-gray-darker": "#2a2a2c",
        "fun-gray-dark": "#1F1F20",
        "fun-gray-darkest": "#B6B6B6",
        "fun-pink": "#eeeeee",
        "fun-pink-darker": "#B6B6B6",
        "fun-pink-darkest": "#E6B31E",
        "fun-pink-dark": "#B6B6B6",
        "fun-pink-light": "#E6B31E",
      }
    },
  },
  plugins: [],
}

