import { presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives } from 'unocss'

/** @type {import('unocss').UserConfig} */
export default {
  content: ['./src/**/*.{astro,mdx,tsx}'],
  preflights: [{
    getCSS: () => `
      * {
        @apply 'selection:bg-primary selection:text-atom';
      }
      :root {
        font-family: 'MiSans', sans-serif;
        cursor: url(/cursor/default.svg), default;
        a, button, input[type="button"], input[type="submit"], [role="button"] {
          cursor: url(/cursor/pointer.svg), pointer;
        }
        textarea, input[type="text"], input[type="email"], input[type="search"], input[type="number"] {
          cursor: url(/cursor/text.svg), text;
        }
      }
      :root.dark {
        cursor: url(/cursor/default_dark.svg), default;
        a, button, input[type="button"], input[type="submit"], [role="button"] {
          cursor: url(/cursor/pointer_dark.svg), pointer;
        }
        textarea, input[type="text"], input[type="email"], input[type="search"], input[type="number"] {
          cursor: url(/cursor/text_dark.svg), text;
        }
      }
      ::view-transition-new(root) {
        mask: url('/switch.svg') top left / 0 no-repeat;
        mask-origin: top left;
        animation: scale 1.5s;
      }
      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: scale 1.5s;
        z-index: -1;
        transform-origin: top left;
      }
      @keyframes scale {
        to {
          mask-size: 400vmax;
        }
      }
    `,
  }],
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
  ],
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
