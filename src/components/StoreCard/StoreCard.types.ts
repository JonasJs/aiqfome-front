import { VariantProps } from 'tailwind-variants';
import { storeCardVariants } from './StoreCard';
import { SummaryStore } from '@/domain/Store/store.types';

export type StoreCardVariants = VariantProps<typeof storeCardVariants>;

export interface StoreCardProps extends StoreCardVariants {
  store: SummaryStore;
}
