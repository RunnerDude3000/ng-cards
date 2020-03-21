import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { RunnerNgUiCardModule } from 'runner-ng-ui-card';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RunnerNgUiCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
