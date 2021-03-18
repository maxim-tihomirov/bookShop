import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePipe } from '../pipes/price/price.pipe';
import { ItemHoverDirective } from '../directives/item-hover.directive';

@NgModule({
  declarations: [PricePipe, ItemHoverDirective],
  imports: [CommonModule],
  exports: [CommonModule, PricePipe, ItemHoverDirective],
})
export class SharedModule {}
