import { NgModule } from '@angular/core';
import { RunnerNgUiCardComponent } from './runner-ng-ui-card.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [RunnerNgUiCardComponent],
  imports: [
    CommonModule
  ],
  exports: [RunnerNgUiCardComponent]
})
export class RunnerNgUiCardModule { }
