module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.vue', './src/*.vue'],
  theme: {
    extend: {
      inset: {
        full: '100%'
      },
      screens: {
        print: { raw: 'print' }
      },
      borderWidth: {
        img: '.25rem'
      },
      fontFamily: {
        display: ['Playfair\\ Display'],
        sans: [
          'Rubik',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        serif: [
          'Spectral',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif'
        ]
      }
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'dark'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'dark'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'dark'],
    backgroundOpacity: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'dark'],
    gradientColorStops: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'dark']
  },
  plugins: []
}
