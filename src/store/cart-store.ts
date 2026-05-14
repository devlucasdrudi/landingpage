import { create } from "zustand";

export type CartLine = {
  productId: string;
  variantId: string;
  name: string;
  sku: string;
  size: string;
  color: string;
  priceInCents: number;
  quantity: number;
  imageUrl?: string;
};

type CartState = {
  items: CartLine[];
  addItem: (item: CartLine) => void;
  removeItem: (variantId: string) => void;
  clearCart: () => void;
  totalItems: () => number;
  subtotal: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((line) => line.variantId === item.variantId);

      if (!existing) {
        return { items: [...state.items, item] };
      }

      return {
        items: state.items.map((line) =>
          line.variantId === item.variantId
            ? { ...line, quantity: line.quantity + item.quantity }
            : line
        )
      };
    }),
  removeItem: (variantId) =>
    set((state) => ({ items: state.items.filter((item) => item.variantId !== variantId) })),
  clearCart: () => set({ items: [] }),
  totalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
  subtotal: () =>
    get().items.reduce((total, item) => total + item.priceInCents * item.quantity, 0)
}));
