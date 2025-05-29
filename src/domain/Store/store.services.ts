'use server';

import { slugify } from '@/utils/utils';
import { storeAdapter } from './store.adapter';
import * as storeResources from './store.resources';
import { MenuCategoriesItem, StoreDetail, SummaryStore } from './store.types';

interface GetProductBySlugResponse extends MenuCategoriesItem {
  store: StoreDetail;
}

export async function getOpenStores(): Promise<SummaryStore[]> {
  try {
    const { data } = await storeResources.getOpenStores();

    // TODO: Adicionar filtro para lojas abertas
    const stores = data;
    // .filter(
    //   (store) => store.status === StoreStatusEnum.OPEN,
    // );

    return stores.map((store) => storeAdapter.toSummaryStore(store));
  } catch (error) {
    throw error;
  }
}

export async function findStoreBySlug(
  slug: string,
): Promise<StoreDetail | null> {
  try {
    const res = await storeResources.getStoreBySlug(slug);

    const data = res?.data ?? res;

    if (!data) {
      return null;
    }
    return storeAdapter.toStoreDetail(data);
  } catch (error) {
    throw error;
  }
}

export async function getProductBySlug(
  storeSlug: string,
  productSlug: string,
): Promise<GetProductBySlugResponse | null> {
  try {
    const response = await storeResources.getStoreBySlug(storeSlug);
    const storeData = response?.data ?? response;

    if (!storeData) return null;

    const store = storeAdapter.toStoreDetail(storeData);

    for (const category of store.menu.categories) {
      const foundItem = category.items.find(
        (item) => slugify(item.name) === productSlug,
      );

      if (foundItem) {
        return {
          ...foundItem,
          store,
        };
      }
    }

    return null;
  } catch (error) {
    throw error;
  }
}
