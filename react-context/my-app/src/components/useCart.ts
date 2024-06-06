import { useContext } from 'react';
import { CartContext } from './CartContext';

export function useCart() {
  const cartContext = useContext(CartContext);
  if (cartContext === undefined) {
    throw new Error('hook can only be used inside the CartProvider tree');
  }
  return cartContext;
}
