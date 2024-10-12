import { presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives } from 'unocss'

/** @type {import('unocss').UserConfig} */
export default {
  content: ['./src/**/*.{astro,tsx}'],
  presets: [
    presetWebFonts({
      fonts: {
        sans: ['MiSans', 'sans-serif'],
      },
      provider: 'none',
    }),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetUno(),
    presetTypography({
      cssExtend: {
        'a': {
          color: 'var(---xat-primary)',
        },
        'a:visited': {
          color: 'var(---xat-pick)',
        },
        'h1, h2, h3, h4, h5, h6': {
          'margin-top': '0',
          'scroll-margin-top': '3.5rem',
        },
      },
    }),
  ],
  shortcuts: {
    'xat-container': 'w-full desktop:w-4/7 tablet:w-4/5 px-6 py-8',
    'xat-typo': 'text-wrap break-word',
  },
  theme: {
    breakpoints: {
      desktop: '1240px',
      tablet: '600px',
    },
    colors: {
      atom: 'var(---xat-atom)',
      decoration: 'var(---xat-decoration)',
      glass: 'var(---xat-glass)',
      major: 'var(---xat-major)',
      mute: 'var(---xat-mute)',
      pick: 'var(---xat-pick)',
      primary: 'var(---xat-primary)',
      secondary: 'var(---xat-secondary)',
    },
    fontWeight: {
      bold: 700,
      normal: 400,
    },
  },
  transformers: [
    transformerDirectives(),
  ],
}
