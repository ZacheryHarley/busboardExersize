import { Arrival } from "./arrival";
import { ArrivalGetterService } from "./arrival-getter.service";

export class BusStop {

    constructor(public id:string,private name:string,private direction:string,private towards:string) {
    }

    toString():string {
        return this.id + ", " + this.name + ", " + this.direction + ", " + this.towards; 
    }

}
