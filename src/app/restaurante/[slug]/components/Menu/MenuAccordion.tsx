import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/Accordion/Accordion';
import { MenuCategories, StoreDetail } from '@/domain/Store/store.types';
import { ProductRow } from './ProductRow';
import { ProductHeader } from './ProductHeader';
import Link from 'next/link';
import { slugify } from '@/utils/utils';

interface MenuAccordionProps {
  categories: StoreDetail['menu']['categories'];
  slug: string;
}

export function MenuAccordion({ categories, slug }: MenuAccordionProps) {
  function hasPromotion(category: MenuCategories) {
    return category.items.some((item) => item.hasPromotion);
  }

  return (
    <Accordion type="multiple">
      {categories.length > 0 &&
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
                category.items.map((item, index) => (
                  <Link
                    href={`/restaurante/${slug}/${slugify(item.name)}`}
                    key={`${category.id}-${item.name}-${index}`}
                  >
                    <ProductRow {...item} />
                  </Link>
                ))}
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
}
