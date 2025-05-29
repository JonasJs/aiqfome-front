import { StoreDetail } from '@/domain/Store/store.types';
import { MenuAccordion } from './MenuAccordion';

interface MenuProps {
  menu: StoreDetail['menu'];
}

export function Menu({ menu }: MenuProps) {
  return <MenuAccordion categories={menu.categories} />;
}
