'use client';
import { InfoBadge, Text, RadioButton } from '@/components';
import { useState } from 'react';

interface Item {
  id: number | string;
  name: string;
  hasPromotion: boolean;
  price: number;
  available: boolean;
  description: string;
}

interface SingleChoiceGroupProps {
  items: Item[];
  onSelectionChange?: (selectedItemId: string | number) => void;
}

export function SingleChoiceGroup({
  items,
  onSelectionChange,
}: SingleChoiceGroupProps) {
  const [selectedOption, setSelectedOption] = useState<string>('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedId = event.target.value;
    setSelectedOption(selectedId);
    onSelectionChange?.(selectedId);
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
            acompanhamentos
          </Text>
          <Text variant="ParagraphSmall" weight="semibold">
            escolha de 1 a 2
          </Text>
        </div>
        <InfoBadge>obrigatório</InfoBadge>
      </div>

      <div className="mt-4 space-y-2">
        {items.map((item) => (
          <RadioButton
            key={item.id}
            size="small"
            name="acompanhamento"
            value={item.id.toString()}
            checked={selectedOption === item.id.toString()}
            onChange={handleChange}
            rightComponent={
              <div>
                <Text
                  variant="ParagraphSmall"
                  weight="semibold"
                  color="text-neutral-700"
                  className="leading-none"
                >
                  {item.name}
                </Text>
                <Text variant="ParagraphSmall" color="text-neutral-500">
                  {item.description}
                </Text>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}
