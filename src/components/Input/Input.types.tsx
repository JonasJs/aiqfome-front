import { VariantProps } from 'tailwind-variants';
import { inputVariants } from './Input';
import { ComponentProps } from 'react';
import { IconName } from '../Icon/Icon.types';

export type InputVariants = VariantProps<typeof inputVariants>;

export interface InputProps extends InputVariants, ComponentProps<'input'> {
  icon?: IconName;
  label?: string;
}
