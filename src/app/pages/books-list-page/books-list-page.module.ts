import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListPageComponent } from './books-list-page.component';
import { BooksListModule } from '../../components/books-list/books-list.module';
import { CartModule } from '../../components/cart/cart.module';
import { BooksListPageRoutingModule } from './books-list-page-routing.module';

@NgModule({
  declarations: [BooksListPageComponent],
  imports: [CommonModule, BooksListModule, CartModule, BooksListPageRoutingModule],
})
export class BooksListPageModule {}
