import { StoreDetail } from '@/domain/Store/store.types';
import { MenuAccordion } from './MenuAccordion';

interface MenuProps {
  menu: StoreDetail['menu'];
  slug: string;
}

export function Menu({ menu, slug }: MenuProps) {
  return <MenuAccordion categories={menu.categories} slug={slug} />;
}
