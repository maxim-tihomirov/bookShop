import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list.component';
import { BookModule } from '../book/book.module';

@NgModule({
  declarations: [BooksListComponent],
  imports: [CommonModule, BookModule],
  exports: [BooksListComponent],
})
export class BooksListModule {}
