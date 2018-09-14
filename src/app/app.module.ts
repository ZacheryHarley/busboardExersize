import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BusStopComponent } from './bus-stop/bus-stop.component';
import { StopListComponent } from './stop-list/stop-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: '/stops', pathMatch: 'full'},
  {path: 'stops', component: StopListComponent},
  {path: 'stop/:id', component: BusStopComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BusStopComponent,
    StopListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})



export class AppModule { }

