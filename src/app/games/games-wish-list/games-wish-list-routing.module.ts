import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesWishListPage } from './games-wish-list.page';

const routes: Routes = [
  {
    path: '',
    component: GamesWishListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesWishListPageRoutingModule {}
