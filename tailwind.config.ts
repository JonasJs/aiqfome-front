import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import { themes } from './src/theme/theme';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...themes.light.colors,
    },
    fontFamily: {
      nunito: ['var(--font-nunito)'],
    },
    container: {
      center: true,
      screens: {
        sm: '740px',
        md: '960px',
        lg: '960px',
        xl: '1120px',
        '2xl': '1120px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.flex-align-center': {
          display: 'flex',
          'align-items': 'center',
        },
        '.shadow-cart-store': {
          boxShadow: '0 -4px 6px -1px rgba(64, 64, 64, 0.1)',
        },
      });
    }),
  ],
} satisfies Config;
