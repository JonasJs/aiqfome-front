import { Suspense } from 'react';
import { Text } from '@/components';
import { Banner } from './components/Banner';
import { BannerSkeleton } from './components/BannerSkeleton';

export default function HomePage() {
  return (
    <main>
      <div className="container md:px-4">
        <Suspense fallback={<BannerSkeleton />}>
          <Banner />
        </Suspense>
      </div>

      <div className="container px-4 py-6">
        <Text variant="HeadingSmall" color="text-primary">
          Abertos
        </Text>
      </div>
    </main>
  );
}
