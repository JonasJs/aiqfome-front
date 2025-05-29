'use client';
import Image from 'next/image';
import { Button, Counter, Text } from '@/components';
import { useCartStore } from '@/store/useCartStore';
import { formatMoney } from '@/utils/utils';
import { useMemo } from 'react';

export default function CartPage() {
  const { products, updateProductSelectionQuantity } = useCartStore();

  const totalValue = useMemo(() => {
    return products.reduce((total, product) => {
      const productTotal = product.selections.reduce((subtotal, item) => {
        const quantity = item.quantity ?? 1;
        return subtotal + item.price * quantity;
      }, 0);
      return total + productTotal;
    }, 0);
  }, [products]);

  return (
    <div className="container flex-1 px-4 py-6">
      {products.length > 0 ? (
        <>
          {products.map((product) => (
            <div key={product.id} className="mb-6">
              <div className="gap-2 flex-align-center">
                <div className="relative h-9 w-9 overflow-hidden rounded border border-neutral-100 bg-neutral-50">
                  <Image
                    src={product.storeImage}
                    alt={product.storeName}
                    fill
                    priority
                  />
                </div>
                <div>
                  <Text variant="ParagraphSmall" weight="bold">
                    seus itens em
                  </Text>
                  <Text
                    variant="ParagraphMedium"
                    weight="bold"
                    color="text-neutral-700"
                  >
                    {product.storeName}
                  </Text>
                </div>
              </div>

              <div className="mt-2">
                {product?.selections.length > 0 &&
                  product?.selections.map((item) => (
                    <div
                      key={item?.id}
                      className="flex flex-col items-end justify-between gap-2 border-b-4 border-neutral-100 p-4"
                    >
                      <div className="w-full justify-between flex-align-center">
                        <Text
                          variant="ParagraphSmall"
                          weight="bold"
                          color="text-neutral-700"
                        >
                          {item.name}
                        </Text>
                        <Text
                          variant="ParagraphSmall"
                          weight="bold"
                          color="text-primary"
                        >
                          R$ {formatMoney(item.price)}
                        </Text>
                      </div>

                      <Counter
                        onChange={(newQuantity) =>
                          updateProductSelectionQuantity(
                            product.id,
                            item.id,
                            newQuantity,
                          )
                        }
                        size="small"
                        value={item?.quantity ?? 1}
                        min={0}
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}

          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white p-4 shadow-cart-store">
            <div className="container mx-auto flex items-center justify-between">
              <div>
                <Text variant="ParagraphSmall" weight="bold">
                  subtotal
                </Text>
                <Text variant="HeadingSmall" weight="bold" color="text-primary">
                  R$ {formatMoney(totalValue)}
                </Text>
              </div>
              <Button size="medium" variant="solid">
                ir para pagamento
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex h-full flex-col items-center justify-center">
          <Text
            variant="HeadingMedium"
            weight="bold"
            color="text-neutral-700"
            className="mb-2"
          >
            Seu carrinho está vazio
          </Text>
          <Text variant="ParagraphMedium" color="text-neutral-500">
            Adicione itens para continuar
          </Text>
        </div>
      )}
    </div>
  );
}
