import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamesListPageRoutingModule } from './games-list-routing.module';

import { GamesListPage } from './games-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamesListPageRoutingModule
  ],
  declarations: [GamesListPage]
})
export class GamesListPageModule {}
