import { tv } from 'tailwind-variants';
import { TextareaProps } from './Textarea.types';

export const textareaVariants = tv({
  slots: {
    container: [
      'gap-2 rounded-lg border border-neutral-200 flex-align-center',
      'focus-within:ring-1 focus-within:ring-primary',
      'overflow-hidden',
    ],
    textarea: [
      'bg-transparent flex-1 text-neutral-500 placeholder-neutral-400 outline-none',
      'text-sm font-semibold',
      'px-4 py-2',
    ],
  },
  variants: {
    resizable: {
      true: {
        textarea: 'resize',
      },
      false: {
        textarea: 'resize-none',
      },
    },
  },
});

export function Textarea({ rows = 5, resizable, ...props }: TextareaProps) {
  const { container, textarea } = textareaVariants({
    resizable,
  });

  return (
    <div className={container()}>
      <textarea rows={rows} className={textarea()} {...props} />
    </div>
  );
}
