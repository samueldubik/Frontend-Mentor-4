const { hsl } = require("color-convert");

module.exports = {
  content: ["./src/**/*.{html,js}","index.html"],
  theme: {
    colors: {
      'pale-blue': '#e0e8ff',
      'bright-blue': '#3829e0',
      'very-pale-blue': '#f5f7ff',
      'desaturated-blue': '#222244',
      'dark-blue': '#1f2f56'
    },

    fontFamily: {
      'red-hat' : ['Red Hat Display', 'sans-serif']
    },


    extend: {},
  },
  plugins: [],
}
