document.addEventListener('alpine:init', () => {
        Alpine.data('container', () => {
            return {
                init() {
                    console.log("Hello World");
            
                    this.routes = this.taxiRoutes.map(route =>{
                        return new TaxiRoute(route.destination, route.price)
                    })
                   
                },
            
                open: false,
                taxiRoutes: [{destination: "Kuilsriver", price: 25},{destination: "Bellville", price: 20},{destination: "Khayelitsha", price: 18.50}, {destination: "Stellenbosch", price: 35}, {destination: "Langa", price: 15}],
                inQueue:[],
                dailyTotal(){
                    let total = 0;
                    this.routes.forEach( route => { 
                        total += route.totalFare()
                    });
                    return total
                }
                
            }
    })
    })
    