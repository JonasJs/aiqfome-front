'use client';
import { InfoBadge, Text, RadioButton, Icon } from '@/components';
import { MenuCategoriesItemItemSize } from '@/domain/Store/store.types';
import { formatMoney } from '@/utils/utils';
import { useFormContext } from 'react-hook-form';

interface SingleChoiceGroupProps {
  items: MenuCategoriesItemItemSize[];
  errorMessage?: string;
}

export function SingleChoiceGroup({
  items,
  errorMessage,
}: SingleChoiceGroupProps) {
  const { register, watch, setValue } = useFormContext();
  const selectedId = watch('selectedSizeId');

  const itemsAvailable = items.filter((item) => item.price && item.available);

  function handleChange(item: MenuCategoriesItemItemSize) {
    setValue('selectedSizeItem', item);
  }

  return (
    <div
      className="border-b-4 border-neutral-100 py-4"
      role="group"
      aria-labelledby="group-title group-subtitle"
    >
      <div className="justify-between flex-align-center">
        <div>
          <Text
            id="group-title"
            variant="ParagraphMedium"
            weight="bold"
            color="text-neutral-700"
          >
            qual o tamanho?
          </Text>
          <Text id="group-subtitle" variant="ParagraphSmall" weight="semibold">
            escolha 1
          </Text>
        </div>
        <InfoBadge>obrigatório</InfoBadge>
      </div>

      <div className="mt-4 space-y-2">
        {itemsAvailable.map((item) => (
          <div key={item.size.id} className="justify-between flex-align-center">
            <RadioButton
              size="small"
              {...register('selectedSizeId', {
                onChange: () => handleChange(item),
              })}
              value={item.size.id.toString()}
              checked={selectedId === item.size.id.toString()}
              rightComponent={
                <div className="flex-align-center">
                  {item.hasPromotion && (
                    <Icon name="discount" color="green-500" />
                  )}
                  <Text
                    variant="ParagraphSmall"
                    weight="semibold"
                    className="leading-none"
                  >
                    {item.size.name}
                  </Text>
                </div>
              }
            />
            <div className="gap-1 text-right flex-align-center">
              {item?.promotionalPrice && item.hasPromotion ? (
                <>
                  <Text variant="ParagraphCapiton" weight="bold">
                    de {formatMoney(item.price)} por
                  </Text>
                  <Text
                    variant="ParagraphSmall"
                    color="text-green-500"
                    weight="extrabold"
                  >
                    R$ {formatMoney(Number(item?.promotionalPrice))}
                  </Text>
                </>
              ) : (
                <Text
                  variant="ParagraphSmall"
                  color="text-green-500"
                  weight="extrabold"
                >
                  R$ {formatMoney(Number(item.price))}
                </Text>
              )}
            </div>
          </div>
        ))}
      </div>

      {errorMessage && (
        <Text
          variant="ParagraphSmall"
          color="text-red-500"
          className="mt-2 text-center"
        >
          {errorMessage}
        </Text>
      )}
    </div>
  );
}
