import { Component, OnInit, Input } from '@angular/core';
import { BusStop } from '../bus-stop';
import { BusStopComponent } from '../bus-stop/bus-stop.component';
import { StopGetterService } from '../stop-getter.service';

@Component({
  selector: 'app-stop-list',
  templateUrl: './stop-list.component.html',
  styleUrls: ['./stop-list.component.css']
})
export class StopListComponent implements OnInit {

  busStops:BusStop[];
  selectedStop:BusStop;

  constructor(private stopsService: StopGetterService) { 
  }

  ngOnInit() {
    console.log(this.stopsService);
    this.busStops = this.stopsService.getStops();
  }

  onClick(stop:BusStop){
    this.selectedStop=stop;
  }

}
