import { Component, OnInit, Input } from '@angular/core';
import { BusStop } from '../bus-stop';
import { BusStopComponent } from '../bus-stop/bus-stop.component';

@Component({
  selector: 'app-stop-list',
  templateUrl: './stop-list.component.html',
  styleUrls: ['./stop-list.component.css']
})
export class StopListComponent implements OnInit {

  busStops:BusStop[];
  selectedStop:BusStop;

  constructor() { 
    this.busStops = [
      new BusStop("Manod"),
      new BusStop("Dolgellau"),
      new BusStop("llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch")
    ]
  }

  ngOnInit() {
  }

  onClick(stop:BusStop){
    this.selectedStop=stop;
  }

}
