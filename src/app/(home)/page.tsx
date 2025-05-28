import { Suspense } from 'react';

import { Banner } from './components/Banner/Banner';
import { BannerSkeleton } from './components/Banner/BannerSkeleton';
import { OpenStoresList } from './components/OpenStoresList';

export default function HomePage() {
  return (
    <main>
      <div className="container md:px-4">
        <Suspense fallback={<BannerSkeleton />}>
          <Banner />
        </Suspense>
      </div>

      <div className="container px-4 py-6">
        <Suspense fallback={<p>Loading...</p>}>
          <OpenStoresList />
        </Suspense>
      </div>
    </main>
  );
}
