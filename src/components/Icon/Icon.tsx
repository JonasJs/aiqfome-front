import { useTheme } from '@/hooks/useTheme';
import { ICON_MAP } from './Icon.utils';
import { IconProps } from './Icon.types';

export function Icon({ name, size = 24, color = 'neutral-500' }: IconProps) {
  const { theme } = useTheme();
  const Icon = ICON_MAP[name];

  return (
    <div>
      <Icon fill={theme.colors[color]} width={size} height={size} />
    </div>
  );
}
