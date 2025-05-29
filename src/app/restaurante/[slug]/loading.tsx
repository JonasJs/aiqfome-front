import { Skeleton } from '@/components';
import { BannerSkeleton } from './components/HeaderStore/HeaderStoreSkeleton';

export default function StoreLoading() {
  return (
    <div className="container px-4 pb-10">
      <div className="mt-2 flex items-center gap-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-32" />
      </div>

      <div className="space-y-2 py-3">
        <BannerSkeleton />

        <div className="space-y-1">
          <div className="gap-2 flex-align-center">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-5 w-24" />
          </div>
          <Skeleton className="h-6 w-48 rounded-full" />

          <div className="gap-2 flex-align-center">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-24" />
          </div>

          <Skeleton className="h-4 w-40" />
        </div>
      </div>

      <div className="mt-3">
        <div className="space-y-4">
          {[1, 2, 3].map((category) => (
            <div key={category} className="border-b-4 border-neutral-100 pb-4">
              <div className="flex items-center justify-between py-3">
                <div className="space-y-1">
                  <div className="gap-1 flex-align-center">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-5 w-5 rounded-full" />
                  </div>
                  <Skeleton className="h-4 w-48" />
                </div>
                <Skeleton className="h-5 w-5" />
              </div>

              <div className="mt-2 space-y-2">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-start justify-between gap-6 rounded-sm px-2 py-3"
                  >
                    <div className="flex-1">
                      <div className="gap-1 flex-align-center">
                        <Skeleton className="h-5 w-40" />
                        <Skeleton className="h-5 w-5 rounded-full" />
                      </div>
                      <Skeleton className="mt-1 h-4 w-32" />
                    </div>
                    <Skeleton className="h-5 w-16 text-right" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
