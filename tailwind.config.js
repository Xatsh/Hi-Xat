import { getIconCollections, iconsPlugin as IconsPlugin } from '@egoist/tailwindcss-icons'
import TypographyPlugin from '@tailwindcss/typography'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

const paper = {
  50: '#FBF8EF',
  100: '#F5EFDB',
  200: '#ECE0BB',
  300: '#DFC990',
  400: '#D0AC5D',
  500: '#C48E40',
  600: '#B17234',
  700: '#98582F',
  800: '#7C482C',
  900: '#643A26',
  950: '#422214',
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,mdx,tsx}'],
  darkMode: 'selector',
  plugins: [
    TypographyPlugin(),
    IconsPlugin({
      collections: getIconCollections(['mingcute']),
    }),
  ],
  theme: {
    extend: {
      colors: {
        atom: {
          dark: colors.black,
          DEFAULT: colors.white,
        },
        decoration: {
          dark: colors.gray[700],
          DEFAULT: colors.gray[200],
        },
        mute: colors.gray[500],
        paper,
        primary: {
          dark: colors.blue[600],
          DEFAULT: paper[600],
        },
        secondary: {
          dark: colors.gray[800],
          DEFAULT: paper[100],
        },
      },
      fontFamily: {
        sans: ['MiSans', ...defaultTheme.fontFamily.sans],
      },
    },
    fontWeight: {
      bold: 700,
      normal: 400,
      semi: 600,
    },
    screens: {
      desktop: '1240px',
      tablet: '600px',
    },
  },
}
