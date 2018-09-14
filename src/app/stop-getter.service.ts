import { Injectable } from '@angular/core';
import { BusStop } from './bus-stop';

@Injectable({
  providedIn: 'root'
})
export class StopGetterService {

  constructor() { }

  getStops() : BusStop[] {
    return [
      new BusStop("Manod"),
      new BusStop("Dolgellau"),
      new BusStop("llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch")
    ]
  }
}
