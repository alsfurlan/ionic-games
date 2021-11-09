import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesListPage } from './games-list.page';

const routes: Routes = [
  {
    path: '',
    component: GamesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesListPageRoutingModule {}
