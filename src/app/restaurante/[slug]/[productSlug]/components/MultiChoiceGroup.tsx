'use client';
import { InfoBadge, Text, Checkbox } from '@/components';
import { formatMoney } from '@/utils/utils';
import { useState } from 'react';

interface Item {
  id: number;
  name: string;
  price?: number;
  type?: string;
}

export interface SelectedOptions {
  price: number;
  id: number;
  type?: string;
  name: string;
}

interface MultiChoiceGroupProps {
  items: Item[];
  maxSelect?: number;
  title?: string;
  subTitle?: string;
  onSelectionChange?: (selectedItems: SelectedOptions[]) => void;
}

export function MultiChoiceGroup({
  items,
  maxSelect = 2,
  title = 'qual o tamanho?',
  subTitle,
  onSelectionChange,
}: MultiChoiceGroupProps) {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions[]>([]);
  function handleChange(item: Item, checked: boolean) {
    let newSelection: SelectedOptions[] = [];

    if (item?.type === 'single') {
      newSelection = [
        {
          price: item?.price ?? 0,
          id: item.id,
          type: item?.type,
          name: item.name,
        },
      ];
    } else {
      const isSingleSelected = selectedOptions.some(
        (opt) => opt?.type === 'single',
      );

      if (isSingleSelected) {
        newSelection = [
          {
            price: item?.price ?? 0,
            id: item.id,
            type: item?.type,
            name: item.name,
          },
        ];
      } else if (checked) {
        if (selectedOptions.length < maxSelect) {
          newSelection = [
            ...selectedOptions,
            {
              price: item?.price ?? 0,
              id: item.id,
              type: item?.type,
              name: item.name,
            },
          ];
        } else {
          newSelection = [...selectedOptions];
        }
      } else {
        newSelection = selectedOptions.filter(
          (option) => option.id !== item.id,
        );
      }
    }

    setSelectedOptions(newSelection);
    onSelectionChange?.(newSelection);
  }

  return (
    <div
      className="border-b-4 border-neutral-100 py-4"
      role="group"
      aria-labelledby="multi-group-title multi-group-subtitle"
    >
      <div className="justify-between flex-align-center">
        <div>
          <Text
            id="multi-group-title"
            variant="ParagraphMedium"
            weight="bold"
            color="text-neutral-700"
          >
            {title}
          </Text>
          {subTitle && (
            <Text
              id="multi-group-subtitle"
              variant="ParagraphSmall"
              weight="semibold"
            >
              {subTitle}
            </Text>
          )}
        </div>
        <InfoBadge>obrigatório</InfoBadge>
      </div>
      <div className="mt-4 space-y-2">
        {items.length > 0 &&
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between py-1"
            >
              <Checkbox
                size="small"
                name={`option-${item.id}`}
                value={item.id.toString()}
                checked={
                  !!selectedOptions.find((option) => option.id === item.id)
                }
                onChange={(e) => handleChange(item, e.target.checked)}
                rightComponent={
                  <Text
                    variant="ParagraphSmall"
                    weight="semibold"
                    color="text-neutral-700"
                    className="leading-none"
                  >
                    {item.name}
                  </Text>
                }
              />
              {item?.price && (
                <Text
                  variant="ParagraphSmall"
                  color="text-primary"
                  weight="bold"
                  className="leading-none"
                >
                  +R$ {formatMoney(item.price)}
                </Text>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
