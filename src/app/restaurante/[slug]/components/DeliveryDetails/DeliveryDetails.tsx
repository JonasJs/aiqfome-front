import {
  InfoBadge,
  Button,
  DeliveryIcon,
  Icon,
  Rating,
  Text,
} from '@/components';

interface DeliveryDetailsProps {
  freeDelivery: boolean;
  neighborhoodRestaurants: {
    virtual_delivery_fee: string;
  }[];
}
export function DeliveryDetails({
  freeDelivery,
  neighborhoodRestaurants,
}: DeliveryDetailsProps) {
  return (
    <div className="space-y-1">
      <div className="gap-2 flex-align-center">
        <DeliveryIcon
          type="store-delivery"
          color="primary"
          rightComponent={
            <Button
              color="text-primary"
              variant="text"
              size="medium"
              rightComponent={
                <Icon name="arrow-right" color="primary" size={10} />
              }
            >
              {freeDelivery
                ? neighborhoodRestaurants[0].virtual_delivery_fee
                : 'grátis'}
            </Button>
          }
        />
        <div className="gap-1 flex-align-center">
          <Text variant="ParagraphSmall" weight="bold">
            hoje, 30-40 min
          </Text>
          <Text variant="ParagraphSmall" color="text-neutral-300" weight="bold">
            •
          </Text>
          <Text variant="ParagraphSmall" weight="bold">
            5.2km
          </Text>
        </div>
      </div>
      <InfoBadge type="highlight">Informação em destaque</InfoBadge>

      <div className="gap-2 flex-align-center">
        <Rating size="sm" rating={209} full></Rating>
        <Text variant="ParagraphSmall" color="text-neutral-300" weight="bold">
          •
        </Text>
        <Text variant="ParagraphSmall" weight="bold" color="text-green-500">
          fecha às 20:00
        </Text>
      </div>
      <div>
        <Text variant="ParagraphSmall" weight="bold">
          pedido mínimo: R$ 15,00
        </Text>
      </div>
    </div>
  );
}
