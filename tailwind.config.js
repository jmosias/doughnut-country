module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['"Martel Sans"', 'sans-serif']
    },
    extend: {
      colors: {
        'c-primary': '#ffdd91',
        'c-secondary': '#d8b98b',
        'c-tertiary': '#49240f',
        'c-black': '#131217',
        'c-white': '#fff',
        'c-pastel-red': '#ffadad',
        'c-pastel-orange': '#ffd6a5',
        'c-pastel-yellow': '#fdffb6'
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
