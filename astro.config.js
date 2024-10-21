import uno from 'unocss/astro'

/** @type {import('astro').AstroUserConfig} */
export default {
  integrations: [uno({
    injectReset: true,
  })],
  site: 'https://xat.moe',
  trailingSlash: 'never',
}
