import { IBook } from './book.model';

export interface CartItem {
  id: number;
  book: IBook;
  count: number;
  itemSum: number;
}
