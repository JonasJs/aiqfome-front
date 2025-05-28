import { Store, StoreAPI } from './store.types';

function toStore(storeAPI: StoreAPI): Store {
  return {
    id: storeAPI.id,
    name: storeAPI.name,
    slug: storeAPI.slug,
    phones: storeAPI.phones,
    virtualAvatar: storeAPI.virtual_avatar,
    status: storeAPI.status,
    aiqentregaActive: storeAPI.aiqentrega_active,
    timeToDelivery: storeAPI.time_to_delivery,
    freeDelivery: storeAPI.free_delivery,
    neighborhoodRestaurants: storeAPI.neighborhood_restaurants.map(
      (neighborhoodRestaurant) => ({
        id: neighborhoodRestaurant.id,
        virtual_delivery_fee: neighborhoodRestaurant.virtual_delivery_fee,
        virtual_name: neighborhoodRestaurant.neighborhood.virtual_name,
      }),
    ),
    ratings: storeAPI.ratings,
  };
}

export const storeAdapter = { toStore };
