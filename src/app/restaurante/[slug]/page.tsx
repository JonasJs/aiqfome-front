import { Metadata } from 'next';
import { HeaderStore } from './components/HeaderStore/HeaderStore';
import * as storeActions from './actions';
import { DeliveryDetails } from './components/DeliveryDetails/DeliveryDetails';
import { Breadcrumb } from '@/components';
import { Menu } from './components/Menu/Menu';
import { Text } from '@/components';

interface StorePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: StorePageProps): Promise<Metadata> {
  const { slug } = await params;
  const store = await storeActions.findStoreBySlug(slug);

  if (!store) {
    return {
      title: 'Restaurante não encontrado | aiqfome',
      description:
        'O restaurante que você procura não está disponível no momento.',
    };
  }

  const deliveryInfo = store.freeDelivery
    ? 'Entrega grátis'
    : `Tempo de entrega: ${store.timeToDelivery}`;

  const ratingInfo = store.ratings
    ? `Avaliação ${store.ratings.average}/5 (${store.ratings.count} avaliações)`
    : '';

  return {
    title: `${store.name} - Delivery Online | aiqfome`,
    description: `Peça ${store.name} no aiqfome! ${deliveryInfo}. ${ratingInfo}. Pedido mínimo R$ ${store.orderMinimumValue}. Entrega rápida e segura.`,
    keywords: `${store.name}, delivery, comida online, restaurante delivery, ${slug}, aiqfome delivery`,
    alternates: {
      canonical: `https://www.aiqfome.com/restaurante/${slug}`,
    },
    openGraph: {
      title: `${store.name} - Delivery Online | aiqfome`,
      description: `Peça ${store.name} no aiqfome! ${deliveryInfo}. Entrega rápida e segura.`,
      url: `https://www.aiqfome.com/restaurante/${slug}`,
      images: [
        {
          url: store.virtualAvatar?.default || '/web-app-manifest-512x512.png',
          width: 512,
          height: 512,
          alt: `Logo ${store.name}`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${store.name} - Delivery Online | aiqfome`,
      description: `Peça ${store.name} no aiqfome! ${deliveryInfo}. Entrega rápida e segura.`,
      images: [store.virtualAvatar?.default || '/web-app-manifest-512x512.png'],
    },
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
    <div className="container px-4 pb-10">
      <Breadcrumb items={breadcrumbItems} className="mt-2" />
      <div className="space-y-2 py-3">
        <HeaderStore name={store?.name} image={store?.virtualAvatar?.default} />
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
        {store.menu.categories.length > 0 ? (
          <Menu menu={store.menu} slug={slug} />
        ) : (
          <Text
            weight="semibold"
            variant="ParagraphMedium"
            color="text-neutral-700"
          >
            Nenhum item encontrado
          </Text>
        )}
      </div>
    </div>
  );
}
