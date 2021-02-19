import { Component } from '@angular/core';
import { Category, IBook } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Book shop';

  book: IBook = {
    name: 'Book',
    description: 'string',
    price: 2,
    category: Category.Horror,
    createDate: 2,
    isAvailable: true,
  };

  selectBook(book: IBook) {
    console.log(book);
  }
}
