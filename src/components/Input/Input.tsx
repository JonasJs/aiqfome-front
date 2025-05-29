import { tv } from 'tailwind-variants';
import { InputProps } from './Input.types';
import { Icon } from '../Icon/Icon';

export const inputVariants = tv({
  slots: {
    container: [
      'gap-2 rounded-lg border border-neutral-200 bg-background flex-align-center',
      'focus-within:ring-1 focus-within:ring-primary',
      'px-2 py-1',
      'min-h-10',
    ],
    input: [
      'bg-transparent text-neutral-600 w-full flex-1 placeholder-neutral-300 outline-none',
      'text-sm font-semibold',
    ],
  },
  variants: {},
});

export function Input({ icon, className, id, label, ...props }: InputProps) {
  const { container, input } = inputVariants();
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div
      className={container({
        className,
      })}
    >
      {label && (
        <label htmlFor={inputId} className="sr-only">
          {label}
        </label>
      )}
      {icon && <Icon name={icon} color="neutral-300" aria-hidden="true" />}
      <input
        id={inputId}
        className={input()}
        data-slot="input"
        aria-label={!label ? props.placeholder : undefined}
        {...props}
      />
    </div>
  );
}
