import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
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
