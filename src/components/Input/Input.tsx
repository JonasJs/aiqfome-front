import { tv } from 'tailwind-variants';
import { InputProps } from './Input.types';
import { Icon } from '../Icon/Icon';

export const inputVariants = tv({
  slots: {
    container: [
      'flex items-center gap-2 rounded-lg border border-neutral-200 bg-background',
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

export function Input({ icon, className, ...props }: InputProps) {
  const { container, input } = inputVariants();

  return (
    <div
      className={container({
        className,
      })}
    >
      {icon && <Icon name={icon} color="neutral-300" />}
      <input className={input()} data-slot="input" {...props} />
    </div>
  );
}
