/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      green: '#44FFA1',
      purple: {
        100: '#FCF8FF',
        500: '#584D62',
        900: '#24053E',
      },
      white: '#FFFFFF',
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      serif: ['Fraunces', 'serif'],
    },
    fontSize: {
      'base': [
        '1.125rem',
        {
          lineHeight: '180%',
          letterSpacing: '0px',
        },
      ],
      '2xl': [
        '1.5rem',
        {
          lineHeight: '2.5rem',
          letterSpacing: '0px',
          fontWeight: '600',
        },
      ],
      '3xl': [
        '2rem',
        {
          lineHeight: '120%',
          letterSpacing: '0px',
          fontWeight: '600',
        },
      ],
      '5xl': [
        '3.5rem',
        {
          lineHeight: '120%',
          letterSpacing: '0px',
          fontWeight: '600',
        },
      ],
      '7xl': [
        '5rem',
        {
          lineHeight: '100%',
          letterSpacing: '0px',
          fontWeight: '600',
        },
      ],
    },
    extend: {
      spacing: {
        100: '0.5rem',
        150: '0.75',
        200: '1rem',
        250: '1.25rem',
        350: '1.75rem',
        400: '2rem',
        500: '2.5rem',
        550: '2.75',
        700: '3.5rem',
        800: '4rem',
        1000: '5rem',
        1100: '5.5rem',
        1400: '7.5rem',
        1600: '8rem',
        1800: '9rem',
        2100: '10.5rem',
        3700: '18.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
