import { tv } from 'tailwind-variants';
import { Text } from '../Text/Text';
import type { TextProps } from '../Text/Text.types';
import { ButtonProps } from './Button.types';

const sizeToTextVariant: Record<
  NonNullable<ButtonProps['size']>,
  TextProps['variant']
> = {
  xsmall: 'ParagraphCapiton',
  medium: 'ParagraphSmall',
  large: 'ParagraphMedium',
};

export const buttonVariants = tv({
  slots: {
    container: [
      'rounded-lg transition-colors',
      'justify-center gap-1 flex-align-center',
    ],
    label: 'text-white',
  },
  variants: {
    size: {
      xsmall: {
        container: 'h-6 px-1',
      },
      medium: {
        container: 'h-12 px-6',
      },
      large: {
        container: 'h-12 w-full px-6',
      },
    },
    variant: {
      solid: { container: 'bg-primary hover:bg-primary-400' },
      outline: {
        container: 'border border-primary',
        label: 'text-primary',
      },
      text: {
        container: 'bg-transparent',
        label: 'text-primary',
      },
    },
    disabled: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      disabled: true,
      class: {
        container: [
          'bg-neutral-500 hover:bg-neutral-500',
          'disabled:cursor-not-allowed disabled:opacity-50',
        ],
      },
    },
    {
      variant: 'outline',
      disabled: true,
      class: {
        container:
          'border-neutral-300 text-neutral-300 hover:border-neutral-300',
      },
    },
    {
      variant: 'text',
      disabled: true,
      class: {
        container: 'text-neutral-300 hover:text-neutral-300',
      },
    },
    {
      variant: 'text',
      size: ['xsmall', 'medium', 'large'],
      class: {
        container: 'h-6 px-0',
      },
    },
  ],
  defaultVariants: {
    size: 'medium',
    variant: 'solid',
    disabled: false,
  },
});

export function Button({
  children,
  size,
  variant,
  disabled = false,
  color = 'text-neutral-500',
  className,
  rightComponent: RightComponent,
  ...props
}: ButtonProps) {
  const { container, label } = buttonVariants({
    size,
    variant,
    disabled,
  });

  const textVariant = sizeToTextVariant[size!];
  const textColor = color ?? label();

  return (
    <button
      className={container({
        class: className,
      })}
      disabled={disabled}
      {...props}
    >
      <Text as="span" variant={textVariant} weight="bold" color={textColor}>
        {children}
      </Text>
      {RightComponent && RightComponent}
    </button>
  );
}
