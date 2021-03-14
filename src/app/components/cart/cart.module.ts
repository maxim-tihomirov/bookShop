import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './cart.component';

@NgModule({
  declarations: [CartComponent, CartItemComponent],
  imports: [CommonModule],
  exports: [
    CartComponent
  ]
})
export class CartModule {}
