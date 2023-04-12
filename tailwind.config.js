/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      "bg": "#22212C",
      "box": "#302F3D",
      "title": "#7F6F81",
      "text": "#6B606C"
    },
    fontFamily: {
      'pop': "Poppins"
    }
  },
  plugins: [],
}