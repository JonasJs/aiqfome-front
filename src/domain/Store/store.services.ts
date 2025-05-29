'use server';

import { slugify } from '@/utils/utils';
import { storeAdapter } from './store.adapter';
import * as storeResources from './store.resources';
import {
  MenuCategoriesItem,
  StoreDetail,
  SummaryStore,
  SummaryStoreStatusEnum,
} from './store.types';

interface GetProductBySlugResponse extends MenuCategoriesItem {
  store: StoreDetail;
}

export async function getOpenStores(): Promise<{
  storesOpended: SummaryStore[];
  storesClosed: SummaryStore[];
}> {
  try {
    const { data } = await storeResources.getOpenStores();

    const stores = data.map((store) => storeAdapter.toSummaryStore(store));

    const storesOpended = stores.filter((store) => {
      return store.status === SummaryStoreStatusEnum.OPEN;
    });

    const storesClosed = stores.filter((store) => {
      return store.status !== SummaryStoreStatusEnum.OPEN;
    });

    return {
      storesOpended,
      storesClosed,
    };
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
