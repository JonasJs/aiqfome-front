import { VariantProps } from 'tailwind-variants';

import { badgeVariants } from './InfoBadge';

export type ButtonVariantsProps = VariantProps<typeof badgeVariants>;

export interface InfoBadgeProps extends ButtonVariantsProps {
  children: React.ReactNode;
}
