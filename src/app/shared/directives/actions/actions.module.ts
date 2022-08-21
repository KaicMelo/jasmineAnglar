import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActionDiretive } from './actions.directive';

@NgModule({
  declarations: [ActionDiretive],
  imports: [CommonModule],
  exports: [ActionDiretive],
})
export class ActionDiretiveModule {}
