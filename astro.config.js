import tailwind from '@astrojs/tailwind'
import font from 'vite-plugin-font'

/** @type {import('astro').AstroUserConfig} */
export default {
  integrations: [tailwind()],
  vite: {
    plugins: [
      font.vite({
        scanFiles: ['src/**/*.{astro,mdx,ts,tsx}'],
      }),
    ],
  },
}
