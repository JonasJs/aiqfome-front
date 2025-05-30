'use client';
import { InfoBadge, Text, RadioButton, Icon } from '@/components';
import { MenuCategoriesItemItemSize } from '@/domain/Store/store.types';
import { formatMoney } from '@/utils/utils';
import { useState } from 'react';

interface SelectedItem extends MenuCategoriesItemItemSize {
  quantity: number;
}

interface SingleChoiceGroupProps {
  items: MenuCategoriesItemItemSize[];
  onSelectionChange?: (selected: SelectedItem) => void;
}

export function SingleChoiceGroup({
  items,
  onSelectionChange,
}: SingleChoiceGroupProps) {
  const [selectedOption, setSelectedOption] = useState<number>();

  function handleChange(item: MenuCategoriesItemItemSize) {
    setSelectedOption(item.size.id);
    onSelectionChange?.({
      ...item,
      quantity: 1,
    });
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
        {items.map((item) => (
          <div key={item.size.id} className="justify-between flex-align-center">
            <RadioButton
              size="small"
              name="acompanhamento"
              checked={selectedOption === item.size.id}
              onChange={() => handleChange(item)}
              rightComponent={
                <div className="flex-align-center">
                  {item.hasPromotion && (
                    <Icon name="discount" color="green-500" />
                  )}
                  <Text
                    variant="ParagraphSmall"
                    weight="semibold"
                    color="text-neutral-700"
                    className="leading-none"
                  >
                    {item.size.name}
                  </Text>
                </div>
              }
            />
            <div className="gap-1 text-right flex-align-center">
              {item?.promotionalPrice && item.hasPromotion && (
                <Text variant="ParagraphCapiton" weight="bold">
                  de {formatMoney(item.price)} por
                </Text>
              )}
              <Text
                variant="ParagraphSmall"
                color="text-green-500"
                weight="extrabold"
              >
                R$ {formatMoney(item?.promotionalPrice || item.price)}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
