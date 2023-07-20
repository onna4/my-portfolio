// @type {import('tailwindcss').Config}
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      ...colors,
      'red-variant': '#dc2430',
      'violet-variant': '#7b4397'
    },
    extend: {},
  },
  plugins: [],
}

