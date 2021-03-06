import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamesListPageRoutingModule } from './games-list-routing.module';

import { GamesListPage } from './games-list.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamesListPageRoutingModule,
    SharedModule,
  ],
  declarations: [GamesListPage]
})
export class GamesListPageModule {}
