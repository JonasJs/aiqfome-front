import { colorsLight } from './tokens/colors/colors.light';

export type ColorName = keyof typeof colorsLight;

export type Colors = Record<ColorName, string>;

export type PrefixedColor<
  P extends string,
  C extends string = ColorName,
> = `${P}-${C}`;

export type Theme = {
  colors: Colors;
};

export type ThemeEnum = 'light';

export type Themes = Record<ThemeEnum, Theme>;
