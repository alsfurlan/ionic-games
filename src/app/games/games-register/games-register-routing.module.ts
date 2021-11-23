import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesRegisterPage } from './games-register.page';

const routes: Routes = [
  {
    path: '',
    component: GamesRegisterPage
  },
  {
    path: ':id',
    component: GamesRegisterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRegisterPageRoutingModule {}
