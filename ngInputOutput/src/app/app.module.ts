import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppchildComponent } from './appchild/appchild.component';
import { StockstatusComponent } from './stockstatus/stockstatus.component';

@NgModule({
  declarations: [
    AppComponent,
    AppchildComponent,
    StockstatusComponent
  ],
  imports: [
    BrowserModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
