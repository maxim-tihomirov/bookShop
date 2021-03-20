import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListPageComponent } from './books-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: BooksListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksListPageRoutingModule {}
