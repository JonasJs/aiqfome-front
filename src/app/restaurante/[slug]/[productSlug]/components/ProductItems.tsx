'use client';

import { useEffect, useState } from 'react';
import { MultiChoiceGroup } from './MultiChoiceGroup';
import { MultiQuantityGroup } from './MultiQuantityGroup';
import { SingleChoiceGroup } from './SingleChoiceGroup';
import { Button } from '@/components';
import { useCartStore } from '@/store/useCartStore';

const sizeOptionsMock = [
  {
    id: 1,
    name: 'Pequeno',
    hasPromotion: true,
    price: 19.9,
    available: true,
    description: '3 peças',
  },
  {
    id: 2,
    name: 'Médio',
    price: 29.9,
    hasPromotion: false,
    available: false,
    description: '5 peças',
  },
  {
    id: 3,
    name: 'Grande',
    price: 39.9,
    hasPromotion: false,
    available: true,
    description: '6 peças',
  },
];

const extrasOptionsMock = [
  { id: 1, name: 'Shoyu', price: 2.9 },
  { id: 2, name: 'Gengibre' },
  { id: 3, name: 'Wasabi' },
  { id: 4, name: 'Sem acompanhamentos', type: 'single' },
];

const quantityItemsMock = [
  { id: 1, name: 'Hot roll', price: 10.9 },
  { id: 2, name: 'Temaki', price: 15.9 },
  { id: 3, name: 'Sashimi', price: 22.9 },
];

interface ProductItemsProps {
  id: number | string;
  name: string;
  storeName: string;
  storeImage: string;
}

interface SelectedSizeOption {
  id: string | number;
  price: number;
  name: string;
}

interface ExtraOption {
  id: string | number;
  price?: number;
  name: string;
}

interface QuantityOption {
  id: number;
  price: number;
  quantity: number;
  name: string;
}

interface ProductSelection {
  id: string | number;
  name: string;
  price: number;
  quantity?: number;
}

export function ProductItems({
  id: productId,
  name: productName,
  storeName,
  storeImage,
}: ProductItemsProps) {
  const [selectedSize, setSelectedSize] = useState<SelectedSizeOption>();
  const [selectedExtras, setSelectedExtras] = useState<ExtraOption[]>([]);
  const [selectedItemsWithQuantity, setSelectedItemsWithQuantity] = useState<
    QuantityOption[]
  >([]);

  const cartStore = useCartStore();

  function getUnifiedSelections(): ProductSelection[] {
    return [
      selectedSize && {
        id: selectedSize.id,
        name: selectedSize?.name,
        price: selectedSize.price,
        quantity: 1,
      },
      ...selectedExtras.map((extra) => ({
        id: extra.id,
        name: extra?.name,
        price: extra.price ?? 0,
        quantity: 1,
      })),
      ...selectedItemsWithQuantity.map((item) => ({
        id: item.id,
        name: item?.name,
        price: item.price,
        quantity: item.quantity,
      })),
    ].filter(Boolean) as ProductSelection[];
  }

  function handleAddToCart() {
    const cartItem = {
      id: productId,
      name: productName,
      storeName,
      storeImage,
      selections: getUnifiedSelections(),
    };
    cartStore.addProduct(cartItem);
  }

  useEffect(() => {
    const selections = getUnifiedSelections();

    if (selections.length > 0) {
      handleAddToCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSize, selectedExtras, selectedItemsWithQuantity]);

  return (
    <div className="space-y-6">
      <SingleChoiceGroup
        items={sizeOptionsMock}
        onSelectionChange={setSelectedSize}
      />

      <MultiChoiceGroup
        title="Acompanhamentos"
        subTitle="Escolha de 1 a 2"
        items={extrasOptionsMock}
        onSelectionChange={setSelectedExtras}
      />

      <MultiQuantityGroup
        items={quantityItemsMock}
        onSelectionChange={setSelectedItemsWithQuantity}
      />
      {getUnifiedSelections().length > 0 && (
        <Button
          onClick={handleAddToCart}
          className="fixed bottom-9 left-1/2 z-50 w-[80%] -translate-x-1/2 sm:w-[40%]"
        >
          Ver ticket
        </Button>
      )}
    </div>
  );
}
