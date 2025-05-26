import { VariantProps } from 'tailwind-variants';
import { ComponentProps } from 'react';
import { textareaVariants } from './Textarea';

export type TextareaVariants = VariantProps<typeof textareaVariants>;

export interface TextareaProps
  extends Omit<ComponentProps<'textarea'>, 'rows'> {
  rows?: number;
  resizable?: boolean;
}
