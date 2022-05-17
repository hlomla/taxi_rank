document.addEventListener('alpine:init', () => {
    Alpine.data('container', () => {
        return {
            init() {
                console.log("Hello World");
            },
            open: false,
            data: [{ }],
            count: 0,
            taxiAvail: 5,
            trips: 0,
            price: 25,
            count1: 0,
            taxiAvail1: 5,
            trips1: 0,
            price1: 25,
            count2: 0,
            taxiAvail2: 5,
            trips2: 0,
            price2: 25,

            passengerCountUp(){
            return this.count++
            },
            passengerCountDown(){
            return this.count--
            },
            taxisAvail(){
                return this.taxiAvail
            },
            taxiTrips(){
                return this.trips
            },
            leaveRank(){
               this.count = this.count - 5
                this.taxiAvail =  this.taxiAvail- 1
                return this.trips ++
            }, passengerCountUpBell(){
                return this.count1++
                },
                passengerCountDownBell(){
                return this.count1--
                },
                taxisAvailBell(){
                    return this.taxiAvail1
                },
                taxiTripsBell(){
                    return this.trips1
                },
                leaveRankBell(){
                   this.count1 = this.count1 - 5
                    this.taxiAvail1 =  this.taxiAvail1- 1
                    return this.trips1 ++
                },
                passengerCountUpK(){
                    return this.count2++
                    },
                    passengerCountDownK(){
                    return this.count2--
                    },
                    taxisAvailK(){
                        return this.taxiAvail2
                    },
                    taxiTripsK(){
                        return this.trips2
                    },
                    leaveRankK(){
                       this.count2 = this.count2 - 5
                        this.taxiAvail2 =  this.taxiAvail2- 1
                        return this.trips2 ++
                    },
            
        }
        
        // this.count

})
})
