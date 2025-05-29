import { Skeleton } from '@/components';

export default function ProductLoading() {
  return (
    <div className="mb-5">
      <div className="container md:px-4">
        <div className="relative aspect-[390/130] min-h-[195px] w-full overflow-hidden md:mt-2 md:rounded-lg">
          <Skeleton className="h-full w-full" />
        </div>
      </div>
      <div className="container px-4">
        <div className="m-1 hidden items-center gap-2 lg:flex">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-32" />
        </div>

        <div className="mt-2">
          <Skeleton className="mb-2 h-6 w-3/4" />
          <div className="mb-2 gap-2 flex-align-center">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-6 w-24" />
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="mt-1 h-4 w-2/3" />
        </div>

        <div className="justify-between border-b-4 border-neutral-100 py-5 flex-align-center">
          <div>
            <Skeleton className="mb-2 h-5 w-24" />
            <div className="gap-1 flex-align-center">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
          <Skeleton className="h-10 w-28 rounded-full" />
        </div>

        <div className="mt-4 space-y-6">
          <div className="border-b-4 border-neutral-100 py-4">
            <div className="justify-between flex-align-center">
              <div>
                <Skeleton className="mb-2 h-5 w-32" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
            <div className="mt-4 space-y-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <div className="flex-1">
                    <Skeleton className="mb-1 h-4 w-32" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                  <Skeleton className="h-4 w-16" />
                </div>
              ))}
            </div>
          </div>

          <div className="border-b-4 border-neutral-100 py-4">
            <div className="justify-between flex-align-center">
              <div>
                <Skeleton className="mb-2 h-5 w-40" />
                <Skeleton className="h-4 w-28" />
              </div>
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
            <div className="mt-4 space-y-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Skeleton className="h-5 w-5 rounded" />
                  <div className="flex-1">
                    <Skeleton className="h-4 w-28" />
                  </div>
                  <Skeleton className="h-4 w-16" />
                </div>
              ))}
            </div>
          </div>

          <div className="py-4">
            <div className="mb-4 justify-between flex-align-center">
              <div>
                <Skeleton className="mb-2 h-5 w-36" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between border-b border-neutral-100 py-2"
              >
                <div className="flex-1">
                  <Skeleton className="mb-1 h-4 w-28" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-6 w-6" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <Skeleton className="h-24 w-full rounded" />
        </div>
      </div>
    </div>
  );
}
