import { presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives } from 'unocss'

/** @type {import('unocss').UserConfig} */
export default {
  content: ['./src/**/*.{astro,mdx,tsx}'],
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
        '.dark a': {
          color: presetUno().theme.colors.sky[400],
        },
        'a': {
          color: presetUno().theme.colors.amber[600],
        },
        'h1, h2, h3, h4, h5, h6': {
          'margin-top': '0',
          'scroll-margin-top': '3.5rem',
        },
      },
    }),
  ],
  rules: [
    ['xat-typo', {
      'text-align': 'justify',
      'text-justify': 'inter-ideograph',
      'text-wrap': 'wrap',
      'word-break': 'break-all',
      'word-wrap': 'break-word',
    }],
    ['xat-html', {
      '-moz-osx-font-smoothing': 'auto',
      '-webkit-font-smoothing': 'auto',
      'font-family': 'MiSans, sans-serif',
      'font-smooth': 'always',
      'scroll-behavior': 'smooth',
    }],
  ],
  theme: {
    breakpoints: {
      desktop: '1240px',
      tablet: '600px',
    },
    colors: {
      atom: {
        dark: presetUno().theme.colors.black,
        DEFAULT: presetUno().theme.colors.white,
      },
      decoration: {
        dark: presetUno().theme.colors.gray[700],
        DEFAULT: presetUno().theme.colors.gray[200],
      },
      mute: presetUno().theme.colors.slate[500],
      primary: {
        dark: presetUno().theme.colors.sky[400],
        DEFAULT: presetUno().theme.colors.amber[600],
      },
      secondary: {
        dark: presetUno().theme.colors.gray[800],
        DEFAULT: presetUno().theme.colors.amber[100],
      },
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
