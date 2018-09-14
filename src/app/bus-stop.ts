import { Arrival } from "./arrival";

export class BusStop {

    name:string;

    arrivals: Arrival[];

    constructor(name:string) {
        this.name = name;

        this.arrivals = [
            new Arrival("X1", "Pothmadog", 4),
            new Arrival("35", "Dolgellau", 7),
            new Arrival("B4", "Llandudno", 9),
            new Arrival("01", "Blaenau Ffestiniog", 14),
        ]
    }

}
