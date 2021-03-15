import { CartItem } from './cartItem.model';

export interface Cart {
  cartItems: CartItem[];
  totalSum: number;
}
