import { ReactNode, createContext, useState } from 'react';
import { Product } from '../lib';

export type CartValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

const defaultCartValue: CartValue = {
  cart: [],
  addToCart: () => undefined,
};

export const CartContext = createContext(defaultCartValue);

type Props = {
  children: ReactNode;
};

export function CartProvider({ children }: Props) {
  const [cartContents, setCartContents] = useState([] as Product[]);

  function addToCart(product: Product): void {
    setCartContents([...cartContents, product]);
    alert(`Added ${product?.name} to cart`);
  }

  const cartContextValues = { cart: cartContents, addToCart: addToCart };
  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
}
