import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RunnerNgUiCardModule } from 'runner-ng-ui-card';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    // RouterModule,
    RunnerNgUiCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
