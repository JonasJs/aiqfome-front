import { Skeleton } from '@/components';

export function BannerSkeleton() {
  return (
    <div className="gap-2 flex-align-center">
      <Skeleton className="h-10 w-10 rounded-[4px]" />
      <Skeleton className="h-7 w-[250px]" />
    </div>
  );
}
