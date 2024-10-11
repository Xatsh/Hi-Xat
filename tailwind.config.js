import { getIconCollections, iconsPlugin as IconsPlugin } from '@egoist/tailwindcss-icons'
import TypographyPlugin from '@tailwindcss/typography'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

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
        mute: colors.slate[500],
        primary: {
          dark: colors.sky[400],
          DEFAULT: colors.amber[600],
        },
        secondary: {
          dark: colors.gray[800],
          DEFAULT: colors.amber[100],
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
