import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardUiModule } from './ng-card/card-ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CardUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
