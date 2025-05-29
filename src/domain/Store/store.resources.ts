'use server';

import { StoreDetailAPI, SummaryStoreAPI } from './store.types';
import StoresMock from './stores.mock.json';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333';

interface GetOpenStoresResponse {
  data: SummaryStoreAPI[];
  meta: {
    currentPage: number;
    hasNextPage: boolean;
    to: number;
  };
}

interface GetStoreBySlugResponse {
  data: StoreDetailAPI;
}

export async function getOpenStores(): Promise<GetOpenStoresResponse> {
  await new Promise((resolve) => setTimeout(resolve, 0));

  return {
    data: StoresMock.data as SummaryStoreAPI[],
    meta: StoresMock.meta,
  };
}

export async function getStoreBySlug(
  slug: string,
): Promise<GetStoreBySlugResponse> {
  const res = await fetch(`${API_URL}/store/${slug}`, {
    next: {
      revalidate: 360,
      tags: ['store'],
    },
  });

  if (!res.ok) {
    throw new Error(`Erro ${res.status} ao buscar store "${slug}"`);
  }

  return res.json();
}
