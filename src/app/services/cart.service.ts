import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IBook } from '../models/book.model';
import { CartItem } from '../models/cartItem.model';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts$: Subject<Cart> = new Subject<Cart>();

  cartItems: CartItem[] = [];

  cart: Cart;

  id = 0;

  books: IBook[] = [];

  totalSum = 0;

  get cartProducts(): Observable<Cart> {
    return this.cartProducts$.asObservable();
  }

  isExistBookInCart(book: IBook): boolean {
    return this.cartItems.length
      ? !!this.cartItems.filter((item) => item.book === book).length
      : false;
  }

  addBook(book: IBook): void {
    if (!this.isExistBookInCart(book)) {
      this.cartItems.push({
        id: (this.id += 1),
        book,
        count: 1,
        itemSum: book.price,
      });
      this.totalSum += book.price;
      this.updateCartData();
    }
  }

  removeBook(cartItem: CartItem): void {
    this.cartItems = this.cartItems.filter((item) => item.book !== cartItem.book);
    this.totalSum = this.cartItems.reduce((prev, cur) => prev + cur.book.price * cur.count, 0);
    this.updateCartData();
  }

  increaseQuantity(cartItem: CartItem): void {
    const currentItem = cartItem;
    this.cartItems[this.cartItems.indexOf(currentItem)] = {
      ...currentItem,
      count: (currentItem.count += 1),
      itemSum: currentItem.count * currentItem.book.price,
    };
    this.totalSum += currentItem.book.price;
    this.updateCartData();
  }

  decreaseQuantity(cartItem: CartItem): void {
    const currentItem = cartItem;
    if (currentItem.count > 1) {
      this.cartItems[this.cartItems.indexOf(currentItem)] = {
        ...currentItem,
        count: currentItem.count > 1 ? (currentItem.count -= 1) : currentItem.count,
        itemSum: currentItem.count * currentItem.book.price,
      };
      this.totalSum -= currentItem.book.price;
      this.updateCartData();
    }
  }

  removeAllBooks(): void {
    this.cartItems = [];
    this.totalSum = 0;
    this.updateCartData();
  }

  updateCartData(): void {
    this.cart = {
      cartItems: this.cartItems,
      totalSum: this.totalSum,
    };
    this.cartProducts$.next(this.cart);
  }
}
