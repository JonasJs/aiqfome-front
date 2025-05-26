import { BrandDefault } from './variants/BrandDefault';
import { BrandSymbol } from './variants/BrandSymbol';
import { BrandWordmark } from './variants/BrandWordmark';

export const BRAND_VARIANT_MAP = {
  icon: {
    component: BrandSymbol,
    size: 32,
  },
  wordmark: {
    component: BrandWordmark,
    size: 130,
  },
  default: {
    component: BrandDefault,
    size: 64,
  },
};
