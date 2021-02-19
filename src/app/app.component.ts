import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Category, IBook } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', { static: false })
  appTitle: ElementRef;

  title = 'Book shop';

  selectedBook: IBook;

  books: IBook[] = [
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

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.textContent = 'Books shop';
  }

  selectBook(book: IBook): void {
    this.selectedBook = book;
  }
}
