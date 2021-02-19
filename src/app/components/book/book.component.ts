import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from 'src/app/models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() book: IBook;

  @Output() selectBook = new EventEmitter<IBook>();

  onBuy(): void {
    this.selectBook.emit(this.book);
  }
}
