import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page.component';
import { CartPageRoutingModule } from './cart-page-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CartModule } from '../../components/cart/cart.module';

@NgModule({
  declarations: [CartPageComponent],
  imports: [CommonModule, CartPageRoutingModule, SharedModule, CartModule],
})
export class CartPageModule {}
