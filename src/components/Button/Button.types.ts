import { ButtonHTMLAttributes, ReactNode } from 'react';
import { VariantProps } from 'tailwind-variants';
import { buttonVariants } from './Button';
import { TextProps } from '../Text/Text.types';

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends ButtonVariantsProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  children: ReactNode;
  disabled?: boolean;
  color?: TextProps['color'];
}
