import { StoreCard, Text } from '@/components';
import { storeServices } from '@/domain/services';
import Link from 'next/link';

export async function OpenStoresList() {
  const stores = await storeServices.getOpenStores();

  if (!stores) {
    throw new Error('Falha ao carregar lojas');
  }

  return (
    <div>
      <Text variant="HeadingSmall" weight="bold" color="text-primary">
        Abertos
      </Text>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stores?.storesOpended.map((store) => (
          <Link href={`/restaurante/${store.slug}`} key={store.id}>
            <StoreCard store={store} />
          </Link>
        ))}
      </div>
      <div className="mt-6">
        <Text variant="HeadingSmall" weight="bold" color="text-primary">
          Fechados
        </Text>
        <div className="mt-4 grid grid-cols-1 gap-4 opacity-65 md:grid-cols-2 lg:grid-cols-3">
          {stores?.storesClosed.map((store) => (
            <Link href={`/restaurante/${store.slug}`} key={store.id}>
              <StoreCard store={store} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
