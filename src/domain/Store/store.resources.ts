import { StoreAPI } from './store.types';
import StoresMock from './stores.mock.json';

interface GetOpenStoresResponse {
  data: StoreAPI[];
  meta: {
    currentPage: number;
    hasNextPage: boolean;
    to: number;
  };
}
export async function getOpenStores(): Promise<GetOpenStoresResponse> {
  await new Promise((resolve) => setTimeout(resolve, 0));

  return {
    data: StoresMock.data as StoreAPI[],
    meta: StoresMock.meta,
  };
}
