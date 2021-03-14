import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IBook } from '../models/book.model';
import { CartItem } from '../models/cartItem.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts$: Subject<CartItem[]> = new Subject<CartItem[]>();

  cartItems: CartItem[] = [];

  id = 0;

  books: IBook[] = [];

  totalQuantity: number;

  totalSum: number;

  get cartProducts(): Observable<CartItem[]> {
    return this.cartProducts$.asObservable();
  }

  addBook(book: IBook): void {
    this.cartItems.push({
      id: this.id + 1,
      book,
      count: 1,
    });
    this.updateCartData();
  }

  removeBook(cartItem: CartItem): void {
    this.cartItems = this.cartItems.filter((item) => item.book !== cartItem.book);
    this.updateCartData();
  }

  increaseQuantity(cartItem: CartItem): void {
    const currentItem = cartItem;
    this.cartItems[this.cartItems.indexOf(currentItem)] = {
      ...currentItem,
      count: (currentItem.count += 1),
    };
  }

  decreaseQuantity(cartItem: CartItem): void {
    const currentItem = cartItem;
    this.cartItems[this.cartItems.indexOf(currentItem)] = {
      ...currentItem,
      count: currentItem.count > 1 ? (currentItem.count -= 1) : currentItem.count,
    };
  }

  removeAllBooks() {}

  updateCartData(): void {
    this.cartProducts$.next(this.cartItems);
  }
}
