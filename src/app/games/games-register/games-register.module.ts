import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamesRegisterPageRoutingModule } from './games-register-routing.module';

import { GamesRegisterPage } from './games-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamesRegisterPageRoutingModule
  ],
  declarations: [GamesRegisterPage]
})
export class GamesRegisterPageModule {}
