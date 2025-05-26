import { tv } from 'tailwind-variants';

import { TextProps } from './Text.types';

export const textVariants = tv({
  base: 'text-lg',
  variants: {
    variant: {
      HeadingLarge: 'text-3xl',
      HeadingMedium: 'text-2xl',
      HeadingSmall: 'text-xl',

      ParagraphLarge: 'text-lg',
      ParagraphMedium: 'text-base',
      ParagraphSmall: 'text-sm',
      ParagraphCapiton: 'text-xs',
    },
    weight: {
      normal: 'font-normal',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  compoundVariants: [
    {
      variant: ['HeadingLarge', 'HeadingMedium', 'HeadingSmall'],
      weight: 'normal',
      class: 'font-bold',
    },
  ],
  defaultVariants: {
    variant: 'ParagraphMedium',
    weight: 'normal',
  },
});

export function Text({
  children,
  as: Component = 'p',
  variant,
  weight,
  color = 'text-neutral-500',
  className,
}: TextProps) {
  return (
    <Component
      className={textVariants({
        variant,
        weight,
        class: `${color} ${className}`,
      })}
    >
      {children}
    </Component>
  );
}
