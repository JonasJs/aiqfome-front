import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/Accordion/Accordion';
import { MenuCategories, StoreDetail } from '@/domain/Store/store.types';
import { ProductRow } from './ProductRow';
import { ProductHeader } from './ProductHeader';

interface MenuAccordionProps {
  categories: StoreDetail['menu']['categories'];
}

export function MenuAccordion({ categories }: MenuAccordionProps) {
  function hasPromotion(category: MenuCategories) {
    return category.items.some((item) => item.hasPromotion);
  }

  return (
    <Accordion type="multiple">
      {categories.length &&
        categories.map((category) => (
          <AccordionItem key={category.id} value={category.name}>
            <AccordionTrigger>
              <ProductHeader
                name={category.name}
                description={category?.description}
                hasPromotion={hasPromotion(category)}
              />
            </AccordionTrigger>
            <AccordionContent>
              {category.items.length &&
                category.items.map((item) => (
                  <ProductRow {...item} key={item.name} />
                ))}
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
}
