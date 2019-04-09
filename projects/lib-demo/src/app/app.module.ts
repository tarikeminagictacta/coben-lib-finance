import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CobenLibFinanceModule } from '@coben-lib/finance';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CobenLibFinanceModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
