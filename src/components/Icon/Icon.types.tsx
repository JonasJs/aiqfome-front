import { ColorName } from '@/theme/theme.types';
import { ICON_MAP } from './Icon.utils';
import { iconVariants } from './Icon';
import { VariantProps } from 'tailwind-variants';

export type IconName = keyof typeof ICON_MAP;
export type IconVariantsProps = VariantProps<typeof iconVariants>;

export interface Icon {
  size?: number;
  color?: ColorName;
}

export interface IconProps extends Icon, IconVariantsProps {
  name: IconName;
  'aria-label'?: string;
  className?: string;
}
