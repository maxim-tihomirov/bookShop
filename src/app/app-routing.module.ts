import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/books-list-page/books-list-page.module').then((m) => m.BooksListPageModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart-page/cart-page.module').then((m) => m.CartPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
