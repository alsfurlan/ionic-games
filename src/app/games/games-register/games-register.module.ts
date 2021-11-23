import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamesRegisterPageRoutingModule } from './games-register-routing.module';

import { GamesRegisterPage } from './games-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GamesRegisterPageRoutingModule
  ],
  declarations: [GamesRegisterPage]
})
export class GamesRegisterPageModule {}
