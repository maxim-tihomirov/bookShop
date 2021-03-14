import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from 'src/app/models/book.model';
import { CartItem } from '../../../../models/cartItem.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() cartItem: CartItem;

  @Output() deleteBookFromCart = new EventEmitter<CartItem>();

  @Output() increaseQuantity = new EventEmitter<CartItem>();

  @Output() decreaseQuantity = new EventEmitter<CartItem>();

  onIncrementCount(): void {
    this.increaseQuantity.emit(this.cartItem);
  }

  onDecrementCount(): void {
    this.decreaseQuantity.emit(this.cartItem);
  }

  onDeleteBookFromCart(): void {
    this.deleteBookFromCart.emit(this.cartItem);
  }
}
