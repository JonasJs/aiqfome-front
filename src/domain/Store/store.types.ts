export enum StoreStatusEnum {
  CLOSED = 'CLOSED',
  OPEN = 'OPEN',
}

export enum PaymentMethodNameEnum {
  DINHEIRO = 'Dinheiro',
  MASTERCARD_CREDITO = 'Mastercard Crédito',
  MASTERCARD_DEBITO = 'Mastercard Débito',
  VISA_CREDITO = 'Visa Crédito',
  VISA_DEBITO = 'Visa Débito',
  PAGAMENTO_ONLINE = 'Pagamento Online',
  PIX = 'Pix',
  NUBANK = 'Nubank',
}

export interface AddressAPI {
  street_name: string;
  number: string;
  complement: string;
  city_name: string;
  state_uf: string;
}

export interface RatingsAPI {
  average: number;
  count: number;
}

export interface PaymentMethodDetailAPI {
  id: number;
  name: PaymentMethodNameEnum;
}

export interface ImageCollectionAPI {
  default: string;
  '132'?: string;
  '160'?: string;
  '300'?: string;
  '500'?: string;
  '960'?: string;
  '1500'?: string;
  [size: string]: string | undefined;
}

export interface NeighborhoodAPI {
  id: number;
  name: string;
  city_id: number;
  created: string;
  created_by: string | null;
  modified: string;
  modified_by: string | null;
  virtual_name: string;
}

export interface NeighborhoodRestaurantAPI {
  id: number;
  delivery_fee: number;
  restaurant_id: number;
  neighborhood_id: number;
  delivery_code: string | null;
  neighborhood: NeighborhoodAPI;
  virtual_delivery_fee: string;
}

export interface StoreAPI {
  id: number;
  name: string;
  slug: string;
  phones: string;
  time_to_prepare_order: number;
  time_to_delivery: string;
  order_minimum_value: string;
  top: boolean;
  free_delivery: boolean;
  virtual_avatar: ImageCollectionAPI;
  highlight_image: ImageCollectionAPI | null;
  status: StoreStatusEnum;
  aiqentrega_active: boolean;
  address: AddressAPI;
  ratings: RatingsAPI;
  payment_methods: Record<string, PaymentMethodDetailAPI | undefined>;
  link: string;
  neighborhood_restaurants: NeighborhoodRestaurantAPI[];
}

interface neighborhoodRestaurants {
  id: number;
  virtual_name: string;
  virtual_delivery_fee: string;
}

export interface Store {
  id: number;
  name: string;
  slug: string;
  phones: string;
  virtualAvatar: ImageCollectionAPI;
  status: keyof typeof StoreStatusEnum;
  aiqentregaActive: boolean;
  timeToDelivery: string;
  freeDelivery: boolean;
  neighborhoodRestaurants: neighborhoodRestaurants[];
  ratings: RatingsAPI;
}
