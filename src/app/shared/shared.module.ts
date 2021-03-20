import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePipe } from './pipes/price/price.pipe';
import { ItemHoverDirective } from './directives/item-hover.directive';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';

@NgModule({
  declarations: [PricePipe, ItemHoverDirective, OrderByPipe],
  imports: [CommonModule],
  exports: [CommonModule, PricePipe, ItemHoverDirective, OrderByPipe],
})
export class SharedModule {}
