import { storeAdapter } from './store.adapter';
import * as storeResources from './store.resources';
import { Store } from './store.types';

export async function getOpenStores(): Promise<Store[]> {
  try {
    const { data } = await storeResources.getOpenStores();

    const stores = data;
    // .filter(
    //   (store) => store.status === StoreStatusEnum.OPEN,
    // );

    return stores.map((store) => storeAdapter.toStore(store));
  } catch (error) {
    throw error;
  }
}

export async function findStoreBySlug(slug: string): Promise<Store | null> {
  try {
    console.log('slug', slug);
    const { data } = await storeResources.getOpenStores();

    const store = data.find((store) => store.slug === slug);

    if (!store) {
      return null;
    }

    return storeAdapter?.toStore(store);
  } catch (error) {
    throw error;
  }
}
