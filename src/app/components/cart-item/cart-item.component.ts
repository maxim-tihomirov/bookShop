import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from 'src/app/models/book.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() selectedBook: IBook;

  @Output() deleteBookFromCart = new EventEmitter<IBook>();

  amountOfBooks = 1;

  onIncrementCount(): void {
    this.amountOfBooks += 1;
  }

  onDecrementCount(): void {
    this.amountOfBooks -= 1;
  }

  onDeleteBookFromCart(): void {
    this.deleteBookFromCart.emit(this.selectedBook);
  }
}
