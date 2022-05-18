class TaxiRoute {

    count = 0;
    taxiAvail = 5;
    trips = 0;
    overallTotal = 0;
    constructor(rank, price){
        this.rank = rank;
        this.price = price;
    }

    passengerCountUp(){
        return this.count++
        }
        passengerCountDown(){
        return this.count--
        }
        taxisAvail(){
            return this.taxiAvail
        }
        taxiTrips(){
            return this.trips
        }
        leaveRank(){
           this.count = this.count - 5
            this.taxiAvail =  this.taxiAvail- 1
            this.overallTotal += this.price * 5
            return this.trips ++
        }
        totalFare(){
           
            return this.overallTotal
        }
}
