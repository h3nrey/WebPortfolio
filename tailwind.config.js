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
      "text": "#6B606C",
      "pink": "#FE007A"
    },
    fontFamily: {
      'pop': "Poppins"
    },
    screens:{
      "xl": "1200px",
      "lg": "900px",
      "sm": "300px",
    }
  },
  plugins: [],
}