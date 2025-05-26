import { SVGProps } from 'react';
import {
  DeliveryTypeEnum,
  DeliveryTypeProps,
  DeliveryTypeValue,
} from './DeliveryType.types';
import { useTheme } from '@/hooks/useTheme';

import { AiqDeliveryPurpleIcon } from './icons/AiqDeliveryPurpleIcon';
import { NoDeliveryIcon } from './icons/NoDeliveryIcon';
import { InStoreBagIcon } from './icons/InStoreBagIcon';
import { StoreDeliveryIcon } from './icons/StoreDeliveryIcon';

const ICON_MAP: Record<DeliveryTypeValue, React.FC<SVGProps<SVGSVGElement>>> = {
  [DeliveryTypeEnum.AIQ_DELIVERY_PURPLE]: AiqDeliveryPurpleIcon,
  [DeliveryTypeEnum.PICKUP]: InStoreBagIcon,
  [DeliveryTypeEnum.STORE_DELIVERY]: StoreDeliveryIcon,
  [DeliveryTypeEnum.NO_DELIVERY]: NoDeliveryIcon,
};

export function DeliveryType({
  type,
  size = 24,
  color = 'primary',
}: DeliveryTypeProps) {
  const { theme } = useTheme();
  const Icon = ICON_MAP[type];

  return (
    <div>
      <Icon fill={theme.colors[color]} width={size} height={size} />
    </div>
  );
}
