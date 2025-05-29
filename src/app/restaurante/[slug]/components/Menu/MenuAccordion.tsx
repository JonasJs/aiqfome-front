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
                  <Link
                    href={`/restaurante/${slug}/${slugify(item.name)}`}
                    key={item.name}
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
