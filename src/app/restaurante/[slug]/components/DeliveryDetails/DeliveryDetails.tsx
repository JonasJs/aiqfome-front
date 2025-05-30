import {
  InfoBadge,
  Button,
  DeliveryIcon,
  Icon,
  Rating,
  Text,
} from '@/components';
import {
  NeighborhoodRestaurant,
  StoreDetail,
} from '@/domain/Store/store.types';
import { PrefixedColor } from '@/theme/theme.types';
import { formatMoney } from '@/utils/utils';

interface DeliveryDetailsProps {
  freeDelivery: boolean;
  neighborhoodRestaurants: NeighborhoodRestaurant[];
  timeToDelivery: string;
  orderMinimumValue: number;
  closingTime: string;
  openingTime: string;
  ratings: StoreDetail['ratings'];
}

export function getstoreStatus(
  openingTime: string,
  closingTime: string,
): { value: string; color: PrefixedColor<'text'> } {
  const now = new Date().toTimeString().slice(0, 5);

  console.log(openingTime);
  if (openingTime === 'Fechado') {
    return {
      value: 'Fechado',
      color: 'text-red-500',
    };
  }

  if (now < openingTime) {
    return {
      value: `Abre às ${openingTime}`,
      color: 'text-green-500',
    };
  }

  if (now < closingTime) {
    return {
      value: `Fechando às ${closingTime}`,
      color: 'text-yellow-500',
    };
  }

  return {
    value: 'Fechado',
    color: 'text-red-500',
  };
}

export async function DeliveryDetails({
  freeDelivery,
  neighborhoodRestaurants,
  timeToDelivery,
  orderMinimumValue,
  closingTime,
  openingTime,
  ratings,
}: DeliveryDetailsProps) {
  // TODO format esta renderizando no cliente e o componente DeliveryIcon tbm
  const orderMinimumvalueFormated = await formatMoney(orderMinimumValue);

  const storeStatus = (() => getstoreStatus(openingTime, closingTime))();

  return (
    <div className="space-y-1">
      <div className="gap-2 flex-align-center">
        <DeliveryIcon
          type="store-delivery"
          color="primary"
          rightComponent={(() => {
            const hasVirtualDeliveryFee =
              neighborhoodRestaurants?.[0]?.virtualDeliveryFee;

            if (!freeDelivery && !hasVirtualDeliveryFee) {
              return null;
            }

            return (
              <Button
                color="text-primary"
                variant="text"
                size="medium"
                rightComponent={
                  <Icon name="arrow-right" color="primary" size={10} />
                }
              >
                {freeDelivery ? 'grátis' : hasVirtualDeliveryFee}
              </Button>
            );
          })()}
        />
        <div className="gap-1 flex-align-center">
          <Text variant="ParagraphSmall" weight="bold">
            hoje, {timeToDelivery} min
          </Text>
          <Text variant="ParagraphSmall" color="text-neutral-300" weight="bold">
            •
          </Text>
          {/* TODO: Calcular a distancia */}
          <Text variant="ParagraphSmall" weight="bold">
            5.2km
          </Text>
        </div>
      </div>
      <InfoBadge type="highlight">Informação em destaque</InfoBadge>

      <div className="gap-2 flex-align-center">
        {ratings.count > 0 && (
          <Rating size="sm" rating={ratings.average} full></Rating>
        )}
        <Text variant="ParagraphSmall" color="text-neutral-300" weight="bold">
          •
        </Text>
        <Text variant="ParagraphSmall" weight="bold" color={storeStatus.color}>
          {storeStatus.value}
        </Text>
      </div>

      <Text variant="ParagraphSmall" weight="bold">
        pedido mínimo: R$ {orderMinimumvalueFormated}
      </Text>
    </div>
  );
}
