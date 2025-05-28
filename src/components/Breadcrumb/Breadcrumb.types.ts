import { VariantProps } from 'tailwind-variants';
import { breadcrumbVariants } from './Breadcrumb';

export type BreadcrumbVariants = VariantProps<typeof breadcrumbVariants>;

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface BreadcrumbProps extends BreadcrumbVariants {
  items: BreadcrumbItem[];
  className?: string;
}
