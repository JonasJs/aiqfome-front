import type { Config } from 'tailwindcss';
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
    extend: {},
  },
  plugins: [],
} satisfies Config;
