module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {

    extend: {

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        square: ['Square Peg', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
        updock: ['Updock', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
        beau: ['Beau Rivage', 'cursive'],
        web: ['Titillium Web', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        short: ['Short Stack', 'cursive'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        monst: ['Montserrat', 'sans-serif'],
      },
    },
    backgroundImage: {
      'background': "url('./src/images/back.webp')"
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
