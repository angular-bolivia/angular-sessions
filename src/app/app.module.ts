import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IvoRojasComponent } from './component/ivo-rojas/ivo-rojas.component';

@NgModule({
  declarations: [
    AppComponent,
    IvoRojasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
