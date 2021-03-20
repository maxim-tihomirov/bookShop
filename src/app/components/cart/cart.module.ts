import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './cart.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CartComponent, CartItemComponent],
  imports: [CommonModule, SharedModule],
  exports: [CartComponent, CartItemComponent],
})
export class CartModule {}
