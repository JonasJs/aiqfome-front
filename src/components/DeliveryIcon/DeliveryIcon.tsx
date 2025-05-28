import { SVGProps } from 'react';
import { tv } from 'tailwind-variants';
import {
  DeliveryIconEnum,
  DeliveryIconProps,
  DeliveryIconValue,
} from './DeliveryIcon.types';
import { useTheme } from '@/hooks/useTheme';

import { AiqDeliveryPurpleIcon } from './icons/AiqDeliveryPurpleIcon';
import { NoDeliveryIcon } from './icons/NoDeliveryIcon';
import { InStoreBagIcon } from './icons/InStoreBagIcon';
import { StoreDeliveryIcon } from './icons/StoreDeliveryIcon';

const ICON_MAP: Record<DeliveryIconValue, React.FC<SVGProps<SVGSVGElement>>> = {
  [DeliveryIconEnum.AIQ_DELIVERY_PURPLE]: AiqDeliveryPurpleIcon,
  [DeliveryIconEnum.PICKUP]: InStoreBagIcon,
  [DeliveryIconEnum.STORE_DELIVERY]: StoreDeliveryIcon,
  [DeliveryIconEnum.NO_DELIVERY]: NoDeliveryIcon,
};

const deliveryIconVariants = tv({
  base: 'flex-align-center',
  variants: {
    hasRightComponent: {
      true: 'gap-1',
      false: 'block',
    },
  },
  defaultVariants: {
    hasRightComponent: false,
  },
});

export function DeliveryIcon({
  type,
  size = 24,
  color = 'primary',
  rightComponent: RightComponent,
}: DeliveryIconProps) {
  const { theme } = useTheme();
  const Icon = ICON_MAP[type];

  const container = deliveryIconVariants({
    hasRightComponent: !!RightComponent,
  });

  return (
    <div className={container}>
      <Icon fill={theme.colors[color]} width={size} height={size} />

      {RightComponent && RightComponent}
    </div>
  );
}
