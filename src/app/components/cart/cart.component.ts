import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IBook } from 'src/app/models/book.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnChanges {
  @Input() selectedBook: IBook;

  selectedBooks: IBook[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedBook) {
      if (this.selectedBook && !this.isContainSelectedBook(this.selectedBook)) {
        this.selectedBooks.push(this.selectedBook);
      }
    }
  }

  isContainSelectedBook(book: IBook): boolean {
    return this.selectedBooks.indexOf(book) !== -1;
  }

  onDeleteBookFromCart(book: IBook): void {
    this.selectedBooks = this.selectedBooks.filter((currentBook) => currentBook !== book);
  }
}
