import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'

/** @type {import('astro').AstroUserConfig} */
export default {
  integrations: [tailwind(), mdx()],
}
