import { getIconCollections, iconsPlugin as IconsPlugin } from '@egoist/tailwindcss-icons'
import TypographyPlugin from '@tailwindcss/typography'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,mdx,ts,tsx}'],
  darkMode: 'class',
  plugins: [
    TypographyPlugin(),
    IconsPlugin({
      collections: getIconCollections(['mingcute']),
    }),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['MiSans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
