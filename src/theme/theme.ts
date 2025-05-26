import type { Theme, Themes } from './theme.types';
import { colorsLight } from './tokens/colors/colors.light';

export const colorsKeys = Object.keys(colorsLight);

export type ColorsEnum = keyof typeof colorsLight;

const themeGlobal = {};

const lightTheme: Theme = {
  ...themeGlobal,
  colors: colorsLight,
};

export const themes: Themes = {
  light: lightTheme,
};
