import { Icon } from '../Icon/Icon.types';
export enum DeliveryTypeEnum {
  AIQ_DELIVERY_PURPLE = 'aiq-delivery',
  PICKUP = 'pickup',
  STORE_DELIVERY = 'store-delivery',
  NO_DELIVERY = 'no-delivery',
}

export type DeliveryTypeValue = `${DeliveryTypeEnum}`;

export interface DeliveryTypeProps extends Icon {
  type: DeliveryTypeValue;
}
