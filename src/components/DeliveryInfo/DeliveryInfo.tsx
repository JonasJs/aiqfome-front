// DeliveryInfo.tsx
import { tv } from 'tailwind-variants';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { memo } from 'react';

const deliveryVariants = tv({
  slots: {
    wrapper: [
      'flex items-center gap-2',
      'cursor-pointer',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
      'transition-colors',
    ],
    label: 'space-y-0 text-left',
    location: 'flex items-center gap-1',
  },
});

interface DeliveryInfoProps {
  address: string;
  onClick?: () => void;
}

function DeliveryInfoComponent({ address, onClick }: DeliveryInfoProps) {
  const { wrapper, label, location } = deliveryVariants();

  return (
    <button
      type="button"
      className={wrapper()}
      onClick={onClick}
      aria-label={`Alterar endereço de entrega. Endereço atual: ${address}`}
    >
      <Icon name="location" aria-label="Localização da entrega" color="white" />
      <div className={label()}>
        <Text variant="ParagraphSmall" color="text-primary-200">
          entregando em
        </Text>
        <div className={location()}>
          <Text color="text-white" weight="bold">
            {address}
          </Text>
          <Icon name="arrow-right" color="white" size={16} />
        </div>
      </div>
    </button>
  );
}

const DeliveryInfo = memo(DeliveryInfoComponent);
DeliveryInfo.displayName = 'DeliveryInfo';

export { DeliveryInfo };
