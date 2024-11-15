import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import uno from 'unocss/astro'

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  integrations: [uno({
    injectReset: true,
  }), sitemap()],

  site: 'https://xat.sh',
  trailingSlash: 'never',
})
