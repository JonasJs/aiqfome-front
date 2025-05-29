import { JSX, ReactNode } from 'react';
import { VariantProps } from 'tailwind-variants';
import { textVariants } from './Text';
import { PrefixedColor } from '@/theme/theme.types';

export type TextVariantProps = VariantProps<typeof textVariants>;

export type AsTags = keyof JSX.IntrinsicElements;

export interface TextProps extends TextVariantProps {
  as?: AsTags;
  children: ReactNode;
  color?: PrefixedColor<'text'>;
  className?: string;
  id?: string;
}
