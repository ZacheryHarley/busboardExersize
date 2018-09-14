export class Arrival {

    bus:string;
    towards:string;
    arrival:number;

    constructor(bus:string, towards:string, arrival:number) {
        this.bus = bus;
        this.towards = towards;
        this.arrival = arrival;
    }

    toString():string {
        return this.bus + " towards " + this.towards + " due in " + this.arrival + " mins";
    }

}
