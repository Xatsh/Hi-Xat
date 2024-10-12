import mdx from '@astrojs/mdx'
import uno from 'unocss/astro'

/** @type {import('astro').AstroUserConfig} */
export default {
  integrations: [uno({
    injectReset: true,
  }), mdx()],
}
