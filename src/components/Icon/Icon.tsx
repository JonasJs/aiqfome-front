import { useTheme } from '@/hooks/useTheme';
import { ICON_MAP } from './Icon.utils';
import { IconProps } from './Icon.types';
import { tv } from 'tailwind-variants';

export const iconVariants = tv({
  base: 'inline-flex',
  slots: {
    container: 'inline-flex',
  },
});

// TODO: Trocar tudo para svg padrão, colocando fill currentColor e sem width e height
export function Icon({
  name,
  size = 24,
  color = 'neutral-500',
  'aria-label': ariaLabel,
  className,
}: IconProps) {
  const { theme } = useTheme();
  const Icon = ICON_MAP[name];

  const { container } = iconVariants();

  return (
    <i
      className={container({
        className,
      })}
      title={ariaLabel}
    >
      <Icon
        role={ariaLabel ? 'img' : undefined}
        fill={theme.colors[color]}
        width={size}
        height={size}
        aria-label={ariaLabel}
        aria-hidden={ariaLabel ? undefined : true}
        focusable={false}
      />
    </i>
  );
}
