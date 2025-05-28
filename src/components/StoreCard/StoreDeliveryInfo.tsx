import { DeliveryIcon } from '../DeliveryIcon/DeliveryIcon';
import { Text } from '../Text/Text';

interface StoreDeliveryInfoProps {
  aiqentregaActive: boolean;
  freeDelivery: boolean;
  virtualDeliveryFee?: string;
}

export function StoreDeliveryInfo({
  aiqentregaActive,
  freeDelivery,
  virtualDeliveryFee,
}: StoreDeliveryInfoProps) {
  const deliveryFeeText = [
    {
      condition: freeDelivery,
      text: 'Grátis',
    },
    {
      condition: !freeDelivery && !!virtualDeliveryFee,
      text: virtualDeliveryFee,
    },
  ].find((item) => item.condition)?.text;

  return (
    <div className="gap-2 flex-align-center">
      <DeliveryIcon
        type={aiqentregaActive ? 'aiq-delivery' : 'store-delivery'}
      />
      {deliveryFeeText && (
        <Text variant="ParagraphSmall" color="text-neutral-500">
          {deliveryFeeText}
        </Text>
      )}
    </div>
  );
}
