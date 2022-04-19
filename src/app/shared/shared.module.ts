import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneroPipe } from './pipes/genero.pipe';

@NgModule({
  declarations: [GeneroPipe],
  imports: [CommonModule],
  exports: [GeneroPipe],
})
export class SharedModule {}
