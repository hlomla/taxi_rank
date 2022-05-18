class TaxiRank {

    count = 0;
    taxiAvail = 5;
    trips = 0;
    price = 25;
    overallTotal = 0;

    constructor(rank){
        this.rank = rank
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
            return this.trips ++
        }
        totalFare(){
            this.trips 
            this.taxiAvail
            return this.price * this.trips
        }
        amountTotal4Taxis(){
            this.overallTotal = this.price * 5 
            return this.overallTotal  
        }
}
