import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Product {
  name: string;
  id: string | number;
  storeName: string;
  storeImage: string;
  selections: Array<{
    name: string;
    id: string | number;
    price: number;
    quantity?: number;
  }>;
}

interface CartState {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productName: string) => void;
  clearCart: () => void;
  updateProductSelectionQuantity: (
    productId: string | number,
    selectionId: string | number,
    quantity: number,
  ) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      products: [],
      addProduct: (product) => {
        const products = get().products;
        const existingIndex = products.findIndex((p) => p.id === product.id);

        if (existingIndex !== -1) {
          const updatedProducts = [...products];
          updatedProducts[existingIndex] = product;
          set({ products: updatedProducts });
        } else {
          set({ products: [...products, product] });
        }
      },
      removeProduct: (id) => {
        set({
          products: get().products.filter((product) => product.id !== id),
        });
      },
      clearCart: () => {
        set({ products: [] });
      },
      updateProductSelectionQuantity: (productId, selectionId, quantity) => {
        const updated = get()
          .products.map((product) => {
            if (product.id !== productId) return product;

            const selections = product.selections
              .map((s) =>
                s.id === selectionId ? { ...s, quantity: quantity ?? 0 } : s,
              )
              .filter((s) => typeof s.quantity === 'number' && s.quantity > 0);

            return selections.length ? { ...product, selections } : null;
          })
          .filter(Boolean) as Product[];

        set({ products: updated });
      },
    }),
    {
      name: 'aiqfome-cart',
      version: 1,
    },
  ),
);
