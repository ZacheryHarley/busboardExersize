import { Injectable } from '@angular/core';
import { BusStop } from './bus-stop';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Arrival } from './arrival';

interface StopsCollection {
  stopPoints:StopRecord[]
}

interface StopRecord {
  id:string;
  commonName:string;
  additionalProperties:AdditionalProperties[]
}

interface AdditionalProperties {
  key:string;
  value:string;
}

interface BusArival{
  id:string;
  vehicleId:string;
  bearing:string;
  destinationName:string;
  timeToStation:number
}

interface Posititon{
  latitude:number;
  longitude:number;
}

@Injectable({
  providedIn: 'root'
})
export class StopGetterService {

  private id = "a0977be0";
  private key = "4db640c61767cef24ca6861875658108";
  private lat = "51.507351";
  private lon = "-0.127758";
  private reqURL = "https://api.tfl.gov.uk/StopPoint";
  private postCodeUrl = "api.postcodes.io/postcodes/";

  constructor(private http: HttpClient) { }

    createArrival(arrivalData:BusArival, arrivals:Array<Arrival>){
    let newBus = new Arrival(
      arrivalData.id,
      arrivalData.vehicleId,
      arrivalData.bearing,
      arrivalData.destinationName,
      Math.ceil(arrivalData.timeToStation/60)
    );
    console.log(newBus);
    arrivals.push(newBus);
  }

  getArrivals(busStop:BusStop) : Observable<Arrival[]> {
    return this.http.get<BusArival[]>(this.reqURL + "/" + busStop.id + "/Arrivals")
    .pipe(map(busses => {
      console.log(busses);
      //Convert to array
      let arrivals = [];
      busses.forEach(bus => {
        this.createArrival(bus ,arrivals);
      });
      return arrivals;
    }))
  }

  createStop(stopData:StopRecord, stops:Array<BusStop>){
    if(stopData.additionalProperties.length == 1){
      stopData.additionalProperties.push({key:"",value:""});
    }
    let newBustop = new BusStop(
      stopData.id,
      stopData.commonName,
      stopData.additionalProperties[0].value,
      stopData.additionalProperties[1].value);
    stops.push(newBustop);
  }
  
  getStops() : Observable<BusStop[]> {
    let stops = Array();

    return this.http.get<StopsCollection>(this.reqURL,
      {params: {
        stopTypes: "NaptanPublicBusCoachTram",
        modes: "bus",
        lat: this.lat,
        lon: this.lon,
        app_id: this.id,
        app_key: this.key
      }}
    ).pipe(map(stopsCollection => {
      //Convert to busstops
      stopsCollection.stopPoints.forEach(stop => {
        this.createStop(stop, stops);
      });
      return stops;
    }));
  }

  getStopsForPostCode(postCode:string) : Observable<void> {
    return this.http.get<Posititon>(this.postCodeUrl+"/"+postCode).pipe(map( loc =>{
      this.lat = loc.latitude.toString();
      this.lon = loc.longitude.toString();
      return;
    }))
  }

}
