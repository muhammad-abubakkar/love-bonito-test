const autoprefixer = require('autoprefixer')
const tailwincss = require('tailwindcss')('./tailwind.config.js')

module.exports = {
  plugins: [autoprefixer, tailwincss]
}
