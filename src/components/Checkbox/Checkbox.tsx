'use client';

import { tv } from 'tailwind-variants';
import { CheckboxProps } from './Checkbox.types';

export const checkboxVariants = tv({
  slots: {
    container: ['flex items-start gap-2'],
    checkbox: [
      'appearance-none',
      'rounded-md border-2 border-neutral-300',
      'checked:border-primary checked:bg-primary',
      'relative',
      'transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50',
      'after:absolute after:left-1/2 after:top-1/2 after:h-[6px] after:w-[9px] after:-translate-x-1/2 after:-translate-y-1/2',
      'after:rotate-45 after:border-b-[2px] after:border-r-[2px] after:border-white after:opacity-0',
      'checked:after:opacity-100',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],
    rightComponentWrapper: ['cursor-pointer'],
  },
  variants: {
    size: {
      small: {
        checkbox: ['h-4 w-4'],
      },
      medium: {
        checkbox: ['h-5 w-5'],
      },
    },
    checked: {
      true: {
        checkbox: ['border-primary bg-primary'],
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

export function Checkbox({
  size = 'medium',
  className,
  disabled,
  rightComponent,
  onChange,
  checked,
  ...props
}: CheckboxProps) {
  const { container, checkbox, rightComponentWrapper } = checkboxVariants({
    size,
  });

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (disabled) return;

    e.preventDefault();

    if (onChange) {
      const newChecked = !checked;
      const event = {
        target: { checked: newChecked, name: props.name, value: props.value },
      } as React.ChangeEvent<HTMLInputElement>;

      onChange(event);
    }
  }

  return (
    <div className={container({ className })}>
      <input
        type="checkbox"
        disabled={disabled}
        className={checkbox()}
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
