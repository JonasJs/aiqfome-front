import { Metadata } from 'next';
import { HeaderStore } from './components/HeaderStore/HeaderStore';
import * as storeActions from './actions';
import { DeliveryDetails } from './components/DeliveryDetails/DeliveryDetails';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';

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
      <div className="container px-4 py-2">
        <Breadcrumb items={breadcrumbItems} className="mb-4" />
        <HeaderStore name={store?.name} image={store?.virtualAvatar.default} />
        <div className="mt-2">
          <DeliveryDetails
            freeDelivery={store?.aiqentregaActive}
            neighborhoodRestaurants={store.neighborhoodRestaurants}
          />
        </div>
      </div>
    </main>
  );
}
