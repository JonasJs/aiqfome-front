import { Icon, Text } from '@/components';
import { MenuCategoriesItem } from '@/domain/Store/store.types';
import { formatMoney } from '@/utils/utils';
import { tv } from 'tailwind-variants';
import { useMemo } from 'react';

// TODO: Quebrar em componentes menores
type ProductRowProps = MenuCategoriesItem;

const productRow = tv({
  base: [
    'flex items-start justify-between rounded-sm px-2 py-3 transition-opacity hover:bg-neutral-50',
    'gap-6',
  ],
  variants: {
    isEnabled: {
      true: 'opacity-100',
      false: 'opacity-50',
    },
  },
  defaultVariants: {
    isEnabled: true,
  },
});

function computePriceData(
  itemSizes: Array<{
    price: number;
    promotionalPrice?: number;
    available: boolean;
  }>,
  hasPromotion: boolean,
) {
  const availableSizes = itemSizes.filter(
    (size) => size.available && size.price != null,
  );
  const firstSize = availableSizes[0];

  if (hasPromotion && firstSize?.promotionalPrice != null) {
    return {
      type: 'discount',
      original: formatMoney(firstSize.price),
      current: formatMoney(firstSize.promotionalPrice),
    };
  }

  if (availableSizes.length > 1) {
    const lowest = Math.min(...availableSizes.map((s) => s.price));
    return {
      type: 'starting-at',
      current: formatMoney(lowest),
    };
  }

  return {
    type: 'normal',
    current: formatMoney(firstSize?.price ?? 0),
  };
}

function PriceTag({
  priceData,
  hasPromotion,
}: {
  priceData: ReturnType<typeof computePriceData>;
  hasPromotion: boolean;
}) {
  return (
    <div className="text-right">
      {priceData.type === 'discount' && (
        <Text weight="bold" variant="ParagraphCapiton" className="line-through">
          R$ {priceData.original}
        </Text>
      )}

      {priceData.type === 'starting-at' && (
        <Text weight="bold" variant="ParagraphCapiton">
          A partir de
        </Text>
      )}

      <div className="flex items-center justify-end gap-0.5">
        {hasPromotion && priceData.type === 'discount' && (
          <Icon size={20} name="discount" color="green-500" />
        )}
        <Text
          weight="bold"
          variant="ParagraphSmall"
          color={hasPromotion ? 'text-green-500' : 'text-primary'}
        >
          R$ {priceData.current}
        </Text>
      </div>
    </div>
  );
}

export function ProductRow({
  name,
  itemSizes,
  hasPromotion,
  description,
  available,
  observations,
}: ProductRowProps) {
  const availableCount = useMemo(
    () => itemSizes.filter((s) => s.available && s.price != null).length,
    [itemSizes],
  );

  const priceData = useMemo(
    () => computePriceData(itemSizes, hasPromotion),
    [itemSizes, hasPromotion],
  );

  const className = productRow({ isEnabled: available && availableCount > 0 });

  return (
    <div className={className}>
      <div className="flex-1">
        <div className="gap-1 flex-align-center">
          <Text
            weight="semibold"
            variant="ParagraphMedium"
            color="text-neutral-900"
          >
            {name}
          </Text>

          {observations.length > 0 &&
            observations.map((observation) => (
              <Icon
                aria-label={observation.ariaLabel}
                key={observation.icon}
                size={20}
                name={observation.icon}
                color="green-500"
              />
            ))}
        </div>
        {description && (
          <Text weight="semibold" variant="ParagraphSmall">
            {description}
          </Text>
        )}
      </div>

      {availableCount > 0 ? (
        <PriceTag priceData={priceData} hasPromotion={hasPromotion} />
      ) : (
        <div className="w-24 text-right">
          <Text
            weight="extrabold"
            variant="ParagraphMedium"
            color="text-green-500"
          >
            ---
          </Text>
        </div>
      )}
    </div>
  );
}
