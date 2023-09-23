import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgaChipsModule } from 'projects/nga-chips/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgaChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
