import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SucculentCardComponent } from './succulent-card/succulent-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SucculentCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
