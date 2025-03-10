/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      fontFamily: {
        Lobster: ['Lobster'],
        Parisienne: ['Parisienne']
      },

      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      }
      
    },
  },
  plugins: [],
}
