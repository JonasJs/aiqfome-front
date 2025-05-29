import { StoreCardSkeleton } from '@/components/';
import { Text } from '@/components/Text/Text';

export function OpenStoresListSkeleton() {
  const skeletonItems = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div>
      <Text variant="HeadingSmall" weight="bold" color="text-primary">
        Abertos
      </Text>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skeletonItems.slice(0, 12).map((item) => (
          <StoreCardSkeleton key={`open-${item}`} />
        ))}
      </div>
      <div className="mt-6">
        <Text variant="HeadingSmall" weight="bold" color="text-primary">
          Fechados
        </Text>
        <div className="mt-4 grid grid-cols-1 gap-4 opacity-65 md:grid-cols-2 lg:grid-cols-3">
          {skeletonItems.slice(0, 12).map((item) => (
            <StoreCardSkeleton key={`closed-${item}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
