import { ComponentProps, ReactNode } from 'react';
import { VariantProps } from 'tailwind-variants';
import { radioButtonVariants } from './RadioButton';

export type RadioButtonVariantsProps = VariantProps<typeof radioButtonVariants>;

export interface RadioButtonProps
  extends RadioButtonVariantsProps,
    Omit<ComponentProps<'input'>, 'type' | 'size'> {
  size?: 'small' | 'medium';
  className?: string;
  rightComponent?: ReactNode;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
