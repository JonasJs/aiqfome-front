import { Suspense } from 'react';

import { Banner } from './components/Banner/Banner';
import { BannerSkeleton } from './components/Banner/BannerSkeleton';
import { OpenStoresList } from './components/OpenStoresList/OpenStoresList';
import { OpenStoresListSkeleton } from './components/OpenStoresList/OpenStoresListSkeleton';

export const metadata = {
  title: 'aiqfome - Delivery de comida na sua cidade | Peça agora',
  description:
    'Delivery de comida com os melhores restaurantes da sua cidade. Peça lanches, pizza, japonesa, marmita e muito mais. Entrega rápida, pagamento online e promoções exclusivas.',
  keywords:
    'delivery comida, restaurantes delivery, comida online, pedir comida, delivery de comida, aiqfome delivery',
  alternates: {
    canonical: 'https://www.aiqfome.com',
  },
};

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
