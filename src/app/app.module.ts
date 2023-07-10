import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UncomponenteComponent } from './uncomponente/uncomponente.component';

@NgModule({
  declarations: [
    AppComponent,
    UncomponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
