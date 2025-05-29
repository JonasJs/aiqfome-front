'use client';

import { InfoBadge, Text, Counter } from '@/components';
import { useState, useEffect } from 'react';

interface Item {
  id: number;
  name: string;
  price: number;
  description?: string;
}

interface SelectedItem {
  id: number;
  quantity: number;
  price: number;
  name: string;
}

interface MultiQuantityGroupProps {
  items: Item[];
  title?: string;
  subtitle?: string;
  onSelectionChange?: (selectedItems: SelectedItem[]) => void;
}

export function MultiQuantityGroup({
  items = [],
  title = 'acompanhamentos',
  subtitle = 'escolha de 1 a 2',
  onSelectionChange,
}: MultiQuantityGroupProps) {
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  useEffect(() => {
    const initialQuantities: Record<number, number> = {};
    items.forEach((item) => {
      initialQuantities[item.id] = 0;
    });
    setQuantities(initialQuantities);
  }, [items]);

  useEffect(() => {
    if (onSelectionChange) {
      const selectedItems: SelectedItem[] = [];

      Object.entries(quantities).forEach(([itemId, quantity]) => {
        if (quantity > 0) {
          const numericId = Number(itemId);
          const item = items.find((i) => i.id === numericId);

          if (item) {
            selectedItems.push({
              id: numericId,
              quantity,
              name: item.name,
              price: item.price,
            });
          }
        }
      });

      onSelectionChange(selectedItems);
    }
  }, [quantities, items, onSelectionChange]);

  function handleQuantityChange(itemId: number, value: number) {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: value,
    }));
  }

  return (
    <div className="border-b-4 border-neutral-100 py-4">
      <div className="justify-between flex-align-center">
        <div>
          <Text
            variant="ParagraphMedium"
            weight="bold"
            color="text-neutral-700"
          >
            {title}
          </Text>
          <Text variant="ParagraphSmall" weight="semibold">
            {subtitle}
          </Text>
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
              <Counter
                size="small"
                value={quantities[item.id] || 0}
                onChange={(value) => handleQuantityChange(item.id, value)}
                min={0}
                max={10}
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
              <div className="gap-1 flex-align-center">
                <Text
                  variant="ParagraphSmall"
                  color="text-primary"
                  weight="bold"
                  className="leading-none"
                >
                  R$ {item.price.toFixed(2).replace('.', ',')}
                </Text>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
