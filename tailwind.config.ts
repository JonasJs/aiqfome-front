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
    extend: {},
  },
  plugins: [],
} satisfies Config;
