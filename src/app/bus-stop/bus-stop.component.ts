import { Component, OnInit } from '@angular/core';
import { Arrival } from '../arrival';
import { BusStop } from '../bus-stop';

@Component({
  selector: 'app-bus-stop',
  templateUrl: './bus-stop.component.html',
  styleUrls: ['./bus-stop.component.css']
})
export class BusStopComponent implements OnInit {

  busStop:BusStop = new BusStop("Manod");

  constructor() { 
    
  }

  ngOnInit() {
  }

}
