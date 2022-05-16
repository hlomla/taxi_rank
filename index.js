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
            },
            
        }
        
        // this.count

})
})
