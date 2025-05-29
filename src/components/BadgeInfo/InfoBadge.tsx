import { tv } from 'tailwind-variants';
import { Text } from '../Text/Text';
import { InfoBadgeProps } from './BadgeInfo.types';

export const badgeVariants = tv({
  slots: {
    container: 'w-fit rounded-[4px] px-4 py-1.5',
    text: 'font-bold',
  },
  variants: {
    type: {
      highlight: {
        container: 'bg-teal-50',
        text: 'text-teal-600',
      },
      promo: {
        container: 'bg-teal-400',
        text: 'text-white',
      },
      default: {
        container: 'bg-neutral-700',
        text: 'text-white',
      },
    },
  },
  defaultVariants: {
    type: 'default',
  },
});

export function InfoBadge({ type = 'default', children }: InfoBadgeProps) {
  const { container, text } = badgeVariants({ type });

  return (
    <div className={container()}>
      <Text variant="ParagraphSmall" className={text()}>
        {children}
      </Text>
    </div>
  );
}
