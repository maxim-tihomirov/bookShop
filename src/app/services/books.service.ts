import { Injectable } from '@angular/core';
import { Category, IBook } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(): IBook[] {
    return [
      {
        name: 'The Black Obelisk',
        description: 'Is a novel written in 1956',
        price: 35,
        category: Category.Novel,
        createDate: 1956,
        isAvailable: true,
      },
      {
        name: 'All Quiet on the Western Front',
        description: 'Is a novel by Erich Maria Remarque',
        price: 30,
        category: Category.Novel,
        createDate: 1929,
        isAvailable: true,
      },
    ];
  }
}
