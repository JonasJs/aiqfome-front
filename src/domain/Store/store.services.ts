'use server';

import { storeAdapter } from './store.adapter';
import * as storeResources from './store.resources';
import { StoreDetail, SummaryStore } from './store.types';

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
