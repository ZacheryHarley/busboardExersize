import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BusStopComponent } from './bus-stop/bus-stop.component';
import { StopListComponent } from './stop-list/stop-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BusStopComponent,
    StopListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
