import { tv } from 'tailwind-variants';
import Link from 'next/link';
import { Text } from '../Text/Text';
import { BreadcrumbProps } from './Breadcrumb.types';

export const breadcrumbVariants = tv({
  slots: {
    nav: 'py-2',
    list: 'flex items-center gap-2',
    separator: 'text-neutral-300',
    link: 'text-neutral-400 transition-colors hover:text-primary',
    active: 'font-bold text-neutral-500',
  },
});

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const { nav, list, separator, link, active } = breadcrumbVariants();

  return (
    <nav className={nav({ className })} aria-label="Breadcrumb">
      <ol className={list()}>
        {items.map((item, index) => (
          <li key={item.href} className="space-x-2">
            {index > 0 && (
              <Text
                as="span"
                variant="ParagraphSmall"
                className={separator()}
                aria-hidden="true"
              >
                /
              </Text>
            )}
            {index === items.length - 1 ? (
              <Text
                as="span"
                variant="ParagraphSmall"
                className={active()}
                aria-current="page"
              >
                {item.label}
              </Text>
            ) : (
              <Link href={item.href} className={link()}>
                <Text as="span" variant="ParagraphSmall">
                  {item.label}
                </Text>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
