const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    defaultLineHeights: true,
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: {
    content: ['./index.html', './src/**/*.vue', './src/*.vue'],
    whitelist: [':root']
  },
  theme: {
    extend: {
      inset: {
        full: '100%'
      },
      maxWidth: {
        'md+': '30rem'
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
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant('dark', ({ container, separator }) => {
        container.walkRules(rule => {
          rule.selector = `body.dark .${e(`dark${separator}${rule.selector.slice(1)}`)}`
        })
      })
    })
  ]
}
