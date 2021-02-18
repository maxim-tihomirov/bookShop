import { Component, Input } from '@angular/core';
import { Category, IBook } from 'src/app/models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() book: IBook;

  constructor() {
    this.book = {
      name: 'Book',
      description: 'string',
      price: 2,
      category: Category.Horror,
      createDate: 2,
      isAvailable: true,
    };

    // ngOnInit(): void {}
  }
}
