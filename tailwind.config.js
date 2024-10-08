/** @type {import('tailwindcss').Config} */

import { getIconCollections, iconsPlugin as IconsPlugin } from '@egoist/tailwindcss-icons'
import TypographyPlugin from '@tailwindcss/typography'

export default {
  content: ['./src/**/*.{astro,mdx,ts,tsx}'],
  darkMode: 'class',
  plugins: [
    TypographyPlugin(),
    IconsPlugin({
      collections: getIconCollections(['mingcute']),
    }),
  ],
}
