import { Observation, observationsMap } from '@/utils/enum';
import {
  MenuCategoriesAPI,
  StoreDetail,
  StoreDetailAPI,
  SummaryStore,
  SummaryStoreAPI,
} from './store.types';

function toSummaryStore(summaryStoreAPI: SummaryStoreAPI): SummaryStore {
  return {
    id: summaryStoreAPI.id,
    name: summaryStoreAPI.name,
    slug: summaryStoreAPI.slug,
    phones: summaryStoreAPI.phones,
    virtualAvatar: summaryStoreAPI.virtual_avatar,
    status: summaryStoreAPI.status,
    aiqentregaActive: summaryStoreAPI.aiqentrega_active,
    timeToDelivery: summaryStoreAPI.time_to_delivery,
    freeDelivery: summaryStoreAPI.free_delivery,
    neighborhoodRestaurants: summaryStoreAPI.neighborhood_restaurants.map(
      (neighborhoodRestaurant) => ({
        id: neighborhoodRestaurant.id,
        virtualDeliveryFee: neighborhoodRestaurant.virtual_delivery_fee,
        virtualName: neighborhoodRestaurant.neighborhood.virtual_name,
      }),
    ),
    ratings: summaryStoreAPI.ratings,
  };
}

function toObservationsMap(value: string): Observation[] {
  if (!value) return [];

  const codes = new Set(value.match(/\d+/g) ?? []);

  return Object.keys(observationsMap)
    .filter((code) => codes.has(code))
    .map((code) => observationsMap[code]);
}

function toCategoryItems(itens: MenuCategoriesAPI['itens']) {
  let data = itens;

  if (!itens.length) {
    data = Object.values(itens || {});
  }

  return data.map((item) => ({
    id: item.id,
    name: item.nome,
    description: item.descricao,
    itemSizes: item.itens_tamanhos.map((size) => ({
      price: size.valor,
      promotionalPrice: size.valor_promocional,
      available: size.disponivel,
    })),
    observations: toObservationsMap(item.observacoes),
    hasPromotion: !!item.promocao,
    available: item.disponivel,
  }));
}

function toStoreDetail(storeDetail: StoreDetailAPI): StoreDetail {
  const [openingTime = '', closingTime = ''] =
    storeDetail?.horario?.split(/\s*-\s*/);

  const menuCategories = Object.values(
    storeDetail.menu.cardapios_categorias ?? {},
  ) as MenuCategoriesAPI[];

  return {
    name: storeDetail.nome,
    virtualAvatar: storeDetail.virtual_avatar,
    freeDelivery: storeDetail.free_delivery,
    timeToDelivery: storeDetail.tempo_entrega,
    orderMinimumValue: storeDetail.pedido_minimo,
    closingTime,
    openingTime,
    ratings: {
      average: storeDetail.avaliacao_media,
      count: storeDetail.quantidade_avaliacoes,
    },
    aiqentregaActive: !!storeDetail.aiqentrega_ativo,
    neighborhoodRestaurants: storeDetail?.bairros_restaurantes?.map(
      (neighborhood) => ({
        id: neighborhood.id,
        virtualName: neighborhood.bairro.virtual_nome,
        virtualDeliveryFee: neighborhood.virtual_valor_entrega,
      }),
    ),
    menu: {
      categories: menuCategories.map((category) => ({
        description: category.descricao,
        id: category.id,
        name: category.nome,
        items: toCategoryItems(category.itens),
      })),
    },
  };
}

export const storeAdapter = { toSummaryStore, toStoreDetail };
