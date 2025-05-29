import { Suspense } from 'react';

import { Banner } from './components/Banner/Banner';
import { BannerSkeleton } from './components/Banner/BannerSkeleton';
import { OpenStoresList } from './components/OpenStoresList/OpenStoresList';
import { OpenStoresListSkeleton } from './components/OpenStoresList/OpenStoresListSkeleton';

export default function HomePage() {
  return (
    <div className="flex-1">
      <div className="container md:px-4">
        <Suspense fallback={<BannerSkeleton />}>
          <Banner />
        </Suspense>
      </div>

      <div className="container px-4 py-6">
        <Suspense fallback={<OpenStoresListSkeleton />}>
          <OpenStoresList />
        </Suspense>
      </div>
    </div>
  );
}
