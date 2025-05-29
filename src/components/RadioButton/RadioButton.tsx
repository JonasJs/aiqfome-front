'use client';

import { tv } from 'tailwind-variants';
import { RadioButtonProps } from './RadioButton.types';

export const radioButtonVariants = tv({
  slots: {
    container: ['flex items-start gap-2'],
    radio: [
      'appearance-none',
      'rounded-full border-2 border-neutral-300',
      'checked:border-primary checked:bg-white',
      'relative',
      'transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50',
      'after:absolute after:rounded-full after:bg-primary after:opacity-0 after:transition-opacity',
      'checked:after:opacity-100',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],
    rightComponentWrapper: ['cursor-pointer'],
  },
  variants: {
    size: {
      small: {
        radio: [
          'h-4 w-4',
          'after:left-1/2 after:top-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:-translate-y-1/2',
        ],
      },
      medium: {
        radio: [
          'h-5 w-5',
          'after:left-1/2 after:top-1/2 after:h-2.5 after:w-2.5 after:-translate-x-1/2 after:-translate-y-1/2',
        ],
      },
    },
    checked: {
      true: {
        radio: ['border-primary'],
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

export function RadioButton({
  size = 'medium',
  className,
  disabled,
  rightComponent,
  onChange,
  checked,
  ...props
}: RadioButtonProps) {
  const { container, radio, rightComponentWrapper } = radioButtonVariants({
    size,
  });

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (disabled) return;

    e.preventDefault();

    if (onChange) {
      const event = {
        target: { checked: true, name: props.name, value: props.value },
      } as React.ChangeEvent<HTMLInputElement>;

      onChange(event);
    }
  }

  return (
    <div className={container({ className })}>
      <input
        type="radio"
        disabled={disabled}
        className={radio()}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      {rightComponent && (
        <div
          className={rightComponentWrapper({
            className: disabled ? 'cursor-not-allowed' : '',
          })}
          onClick={handleClick}
        >
          {rightComponent}
        </div>
      )}
    </div>
  );
}
