import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamesWishListPageRoutingModule } from './games-wish-list-routing.module';

import { GamesWishListPage } from './games-wish-list.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamesWishListPageRoutingModule,
    SharedModule,
  ],
  declarations: [GamesWishListPage]
})
export class GamesWishListPageModule {}
