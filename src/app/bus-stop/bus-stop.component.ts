import { Component, OnInit, Input } from '@angular/core';
import { Arrival } from '../arrival';
import { BusStop } from '../bus-stop';
import { ArrivalGetterService } from '../arrival-getter.service';
import { ActivatedRoute } from '@angular/router';
import { StopGetterService } from '../stop-getter.service';

@Component({
  selector: 'app-bus-stop',
  templateUrl: './bus-stop.component.html',
  styleUrls: ['./bus-stop.component.css']
})
export class BusStopComponent implements OnInit {

  busStop:BusStop;
  arrivals:Arrival[];

  constructor(private stopsService: StopGetterService, private activatedRoute:ActivatedRoute) { 
  }


  getStop(id:string){
    this.stopsService.getStops().subscribe(busStops => busStops.forEach(stop => {
      if(stop.id == id) {
        this.busStop = stop;
        this.stopsService.getArrivals(this.busStop).subscribe(arrs => this.arrivals = arrs);
      }
    }));
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getStop(id);
  }

}
