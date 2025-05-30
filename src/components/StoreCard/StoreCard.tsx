import { tv } from 'tailwind-variants';
import Image from 'next/image';
import { Text } from '../Text/Text';
import { type StoreCardProps } from './StoreCard.types';
import { DeliveryIcon } from '../DeliveryIcon/DeliveryIcon';
import { Rating } from '../Rating/Rating';
import { truncateText } from '@/utils/utils';

export const storeCardVariants = tv({
  slots: {
    container: [
      'overflow-hidden flex-align-center',
      'bg-neutral-50 transition hover:bg-neutral-100',
      'border-1 rounded-lg border-neutral-100',
    ],
    imageWrapper: [
      'border-r-2 border-neutral-100',
      'relative aspect-[1/1] h-[72px] w-[72px] overflow-hidden',
    ],
    deliveryInfo: 'gap-1 flex-align-center',
    content: 'flex-1 space-y-1 px-3 py-2',
  },
});

export async function StoreCard({ store }: StoreCardProps) {
  const { container, imageWrapper, content, deliveryInfo } =
    storeCardVariants();

  return (
    <div
      className={container()}
      role="article"
      aria-label={`${store.name} - Restaurante`}
    >
      <div className={imageWrapper()}>
        <Image
          src={store.virtualAvatar.default}
          alt={`Logo do restaurante ${store.name}`}
          fill
          sizes="(max-width: 768px) 72px, 72px"
          aria-hidden="true"
        />
      </div>

      <div className={content()}>
        <Text
          variant="ParagraphMedium"
          weight="bold"
          color="text-neutral-500"
          className="block max-w-full truncate"
        >
          {truncateText(store.name, 30)}
        </Text>
        <div className={deliveryInfo()}>
          <DeliveryIcon
            type={store.aiqentregaActive ? 'aiq-delivery' : 'store-delivery'}
            color={store.freeDelivery ? 'teal-600' : 'primary'}
            rightComponent={
              <Text
                as="span"
                color={store.freeDelivery ? 'text-teal-600' : 'text-primary'}
                variant="ParagraphSmall"
                weight="bold"
              >
                {store.freeDelivery
                  ? store.neighborhoodRestaurants[0].virtualDeliveryFee
                  : 'grátis'}
              </Text>
            }
          />

          {store.ratings.count > 0 && (
            <>
              <Text
                variant="ParagraphCapiton"
                color="text-neutral-300"
                weight="bold"
              >
                •
              </Text>
              <Rating rating={store.ratings.average} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
