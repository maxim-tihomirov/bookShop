import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { IBook } from '../../models/book.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  booksList: IBook[];

  constructor(private booksService: BooksService, private cartService: CartService) {}

  ngOnInit(): void {
    this.booksList = this.booksService.getBooks();
  }

  selectBook(book: IBook): void {
    this.cartService.addBook(book);
  }
}
