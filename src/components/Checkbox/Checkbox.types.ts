import { ComponentProps, ReactNode } from 'react';
import { VariantProps } from 'tailwind-variants';
import { checkboxVariants } from './Checkbox';

export type CheckboxVariantsProps = VariantProps<typeof checkboxVariants>;

export interface CheckboxProps
  extends CheckboxVariantsProps,
    Omit<ComponentProps<'input'>, 'type' | 'size'> {
  size?: 'small' | 'medium';
  className?: string;
  rightComponent?: ReactNode;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
