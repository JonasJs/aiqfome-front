import { Metadata } from 'next';
import { HeaderStore } from './components/HeaderStore/HeaderStore';
import * as storeActions from './actions';
import { DeliveryDetails } from './components/DeliveryDetails/DeliveryDetails';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import { Menu } from './components/Menu/Menu';

interface StorePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: StorePageProps): Promise<Metadata> {
  const { slug } = await params;
  const store = await storeActions.findStoreBySlug(slug);

  // TODO: Melhorar para SEO
  return {
    title: `aiqfome - ${store?.name}` || 'aiqfome',
  };
}

export default async function StorePage({ params }: StorePageProps) {
  const { slug } = await params;
  const store = await storeActions.findStoreBySlug(slug);

  if (!store) {
    return <p>Nenhuma loja encontrada</p>;
  }

  const breadcrumbItems = [
    { label: 'Início', href: '/' },
    { label: store.name, href: `/restaurante/${slug}` },
  ];

  return (
    <main>
      <div className="container px-4 pb-10">
        <Breadcrumb items={breadcrumbItems} className="mt-2" />
        <div className="space-y-2 py-3">
          <HeaderStore
            name={store?.name}
            image={store?.virtualAvatar?.default}
          />
          <DeliveryDetails
            ratings={store?.ratings}
            closingTime={store?.closingTime}
            openingTime={store?.openingTime}
            orderMinimumValue={store?.orderMinimumValue}
            timeToDelivery={store?.timeToDelivery}
            freeDelivery={store?.aiqentregaActive}
            neighborhoodRestaurants={store?.neighborhoodRestaurants}
          />
        </div>
        <div className="mt-3">
          <Menu menu={store.menu} />
        </div>
      </div>
    </main>
  );
}
