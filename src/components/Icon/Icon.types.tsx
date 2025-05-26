import { ColorName } from '@/theme/theme.types';
import { ICON_MAP } from './Icon.utils';

export type IconName = keyof typeof ICON_MAP;

export interface Icon {
  size?: number;
  color?: ColorName;
}

export interface IconProps extends Icon {
  name: IconName;
}
