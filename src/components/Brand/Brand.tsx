import { useTheme } from '@/hooks/useTheme';
import { BrandProps } from './Brand.types';
import { BRAND_VARIANT_MAP } from './Brand.utils';

export function Brand({
  variant = 'default',
  size,
  color = 'primary',
}: BrandProps) {
  const { theme } = useTheme();
  const { component: BrandComponent, size: defaultSize } =
    BRAND_VARIANT_MAP[variant];

  return (
    <BrandComponent
      width={size || defaultSize}
      fill={theme.colors[color]}
    ></BrandComponent>
  );
}
