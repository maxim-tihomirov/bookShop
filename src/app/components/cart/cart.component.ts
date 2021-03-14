import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from 'src/app/models/book.model';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  books: IBook[] = [];

  cartItems: CartItem[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartProducts.subscribe((value) => {
      this.cartItems = value;
    });
  }

  isContainSelectedBook(book: IBook): boolean {
    return this.books.indexOf(book) !== -1;
  }

  onDeleteBookFromCart(cartItem: CartItem): void {
    this.cartService.removeBook(cartItem);
  }

  onIncreaseQuantity(cartItem: CartItem): void {
    this.cartService.increaseQuantity(cartItem);
  }

  onDecreaseQuantity(cartItem: CartItem): void {
    this.cartService.decreaseQuantity(cartItem);
  }
}
