import { tv } from 'tailwind-variants';
import Image from 'next/image';
import { Text } from '../Text/Text';
import { type StoreCardProps } from './StoreCard.types';
import { DeliveryIcon } from '../DeliveryIcon/DeliveryIcon';
import { Rating } from '../Rating/Rating';

export const storeCardVariants = tv({
  slots: {
    container: [
      'overflow-hidden flex-align-center',
      'bg-neutral-50 transition hover:bg-neutral-100',
      'border-1 rounded-lg border-neutral-100',
    ],
    imageWrapper: [
      'relative h-[72px] w-[72px]',
      'border-r-2 border-neutral-100',
    ],
    deliveryInfo: 'gap-1 flex-align-center',
    content: 'flex-1 space-y-1 p-3',
  },
});

export async function StoreCard({ store }: StoreCardProps) {
  const { container, imageWrapper, content, deliveryInfo } =
    storeCardVariants();

  return (
    <div className={container()}>
      <div className={imageWrapper()}>
        <Image src={store.virtualAvatar.default} alt={store.name} fill />
      </div>

      <div className={content()}>
        <Text variant="ParagraphMedium" weight="bold" color="text-neutral-500">
          {store.name}
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
                  ? store.neighborhoodRestaurants[0].virtual_delivery_fee
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
