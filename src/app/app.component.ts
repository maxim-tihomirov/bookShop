import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { IBook } from './models/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', { static: false })
  appTitle: ElementRef;

  selectedBook: IBook;

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.textContent = 'Books shop';
  }

  selectBook(book: IBook): void {
    this.selectedBook = book;
  }
}
