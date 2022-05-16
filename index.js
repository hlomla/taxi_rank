document.addEventListener('alpine:init', () => {
    Alpine.data('container', () => {
        return {
            init() {
                console.log("Hello World");
            },
            open: false,
            data: [{ }],
            count: 0,
            taxiAvail: 4,
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
            return this.trips ++
            },
            decreaseTaxisAndPassengers(){
            
            }
            }
    

})
})
