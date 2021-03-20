import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cartItems: CartItem[];

  totalSum = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartProducts.subscribe((value) => {
      this.cartItems = value.cartItems;
      this.totalSum = value.totalSum;
    });
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
