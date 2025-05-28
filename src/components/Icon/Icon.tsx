import { useTheme } from '@/hooks/useTheme';
import { ICON_MAP } from './Icon.utils';
import { IconProps } from './Icon.types';

export function Icon({
  name,
  size = 24,
  color = 'neutral-500',
  'aria-label': ariaLabel,
}: IconProps) {
  const { theme } = useTheme();
  const Icon = ICON_MAP[name];

  return (
    <i>
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
