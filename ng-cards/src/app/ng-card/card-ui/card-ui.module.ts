import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCardComponent } from '../ng-card.component';



@NgModule({
  declarations: [
    NgCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgCardComponent
  ]
})
export class CardUiModule { }
