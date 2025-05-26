import { ColorName } from '@/theme/theme.types';
import { BRAND_VARIANT_MAP } from './Brand.utils';

export type Variants = keyof typeof BRAND_VARIANT_MAP;

export interface BrandProps {
  variant?: Variants;
  size?: number;
  color?: ColorName;
}
