import { cache } from 'react';
import { storeServices } from '@/domain/services';

export const findStoreBySlug = cache(async (slug: string) => {
  return storeServices.findStoreBySlug(slug);
});
