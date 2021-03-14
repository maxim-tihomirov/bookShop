import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './components/cart/cart.module';
import { SharedModule } from './shared/shared.module';
import { BooksListModule } from './components/books-list/books-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BooksListModule, CartModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
