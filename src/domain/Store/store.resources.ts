'use server';

import { StoreDetailAPI, SummaryStoreAPI } from './store.types';

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
  // Busca menos dados
  // const res = await fetch(
  //   'https://www.aiqfome.com/api/stores/filter%5Bcity_ids%5D=6190&filter%5Bculinary_id%5D=498',
  //   {},
  // );

  // Busca todos os dados, aqui o idela seria renderizar na home apenas o necessario e paginar
  const res = await fetch(
    'https://www.aiqfome.com/api/stores/filter%5Bcity_ids%5D=6190',
    {
      next: {
        revalidate: 360,
        tags: ['storeList'],
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Erro ${res.status} ao buscar lojas`);
  }

  const response = await res.json();

  return response;
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
    throw new Error(`Erro ${res.status} ao buscar loja "${slug}"`);
  }

  return res.json();
}
