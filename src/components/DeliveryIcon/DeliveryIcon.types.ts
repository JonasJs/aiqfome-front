import { ReactNode } from 'react';
import { Icon } from '../Icon/Icon.types';

export enum DeliveryIconEnum {
  AIQ_DELIVERY_PURPLE = 'aiq-delivery',
  PICKUP = 'pickup',
  STORE_DELIVERY = 'store-delivery',
  NO_DELIVERY = 'no-delivery',
}

export type DeliveryIconValue = `${DeliveryIconEnum}`;

export interface DeliveryIconProps extends Icon {
  type: DeliveryIconValue;
  rightComponent?: ReactNode;
}
