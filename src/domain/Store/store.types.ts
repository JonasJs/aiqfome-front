import { Observation } from '@/utils/enum';

export enum SummaryStoreStatusEnum {
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

export interface Ratings {
  average: number;
  count: number;
}

export interface PaymentMethodDetailAPI {
  id: number;
  name: PaymentMethodNameEnum;
}

export interface ImageCollection {
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

export interface SummaryStoreAPI {
  id: number;
  name: string;
  slug: string;
  phones: string;
  time_to_prepare_order: number;
  time_to_delivery: string;
  order_minimum_value: string;
  top: boolean;
  free_delivery: boolean;
  virtual_avatar: ImageCollection;
  highlight_image: ImageCollection | null;
  status: SummaryStoreStatusEnum;
  aiqentrega_active: boolean;
  address: AddressAPI;
  ratings: Ratings;
  payment_methods: Record<string, PaymentMethodDetailAPI | undefined>;
  link: string;
  neighborhood_restaurants: NeighborhoodRestaurantAPI[];
}

export interface NeighborhoodRestaurant {
  id: number | string;
  virtualName: string;
  virtualDeliveryFee: string;
}

export interface SummaryStore {
  id: number;
  name: string;
  slug: string;
  phones: string;
  virtualAvatar: ImageCollection;
  status: keyof typeof SummaryStoreStatusEnum;
  aiqentregaActive: boolean;
  timeToDelivery: string;
  freeDelivery: boolean;
  neighborhoodRestaurants: NeighborhoodRestaurant[];
  ratings: Ratings;
}

export interface MenuCategoriesItemAPI {
  id: string | number;
  nome: string;
  descricao: string;
  promocao: number;
  observacoes: string;
  itens_tamanhos: Array<{
    valor: number;
    valor_promocional?: number;
    disponivel: boolean;
  }>;
  disponivel: boolean;
}

export interface MenuCategoriesAPI {
  id: string;
  nome: string;
  descricao: string;
  itens: MenuCategoriesItemAPI[];
}

export interface StoreDetailAPI {
  nome: string;
  virtual_avatar: ImageCollection;
  free_delivery: boolean;
  tempo_entrega: string;
  pedido_minimo: number;
  horario: string;
  avaliacao_media: number;
  quantidade_avaliacoes: number;
  aiqentrega_ativo: number;
  bairros_restaurantes: Array<{
    id: string;
    virtual_valor_entrega: string;
    bairro: {
      id: string;
      virtual_nome: string;
      nome: string;
    };
  }>;
  menu: {
    cardapios_categorias: Record<string, MenuCategoriesAPI>;
  };
}

export interface MenuCategoriesItemItemSizes {
  price: number;
  promotionalPrice?: number;
  available: boolean;
}

export interface MenuCategoriesItem {
  id: string | number;
  name: string;
  description?: string;
  itemSizes: MenuCategoriesItemItemSizes[];
  available: boolean;
  hasPromotion: boolean;
  observations: Observation[];
}

export interface MenuCategories {
  name: string;
  id: string;
  description: string;
  items: MenuCategoriesItem[];
}

interface Menu {
  categories: MenuCategories[];
}

export interface StoreDetail {
  name: string;
  freeDelivery: boolean;
  virtualAvatar: ImageCollection;
  timeToDelivery: string;
  orderMinimumValue: number;
  closingTime: string;
  openingTime: string;
  ratings: Ratings;
  aiqentregaActive: boolean;
  neighborhoodRestaurants: NeighborhoodRestaurant[];
  menu: Menu;
}
