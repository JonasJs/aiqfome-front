import { ComponentProps } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const skeletonVariants = tv({
  base: 'animate-pulse rounded-md bg-neutral-100',
});

export type SkeletonVariants = VariantProps<typeof skeletonVariants>;

export interface SkeletonProps extends SkeletonVariants, ComponentProps<'div'> {
  className?: string;
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return <div className={skeletonVariants({ className })} {...props} />;
}
