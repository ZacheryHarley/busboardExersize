export class Arrival {

    constructor(private id:string, private vid:string, private bus:string, private towards:string, private arrival:number) {
    }

    toString():string {
        return this.bus + " towards " + this.towards + " due in " + this.arrival + " mins";
    }

}
