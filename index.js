document.addEventListener('alpine:init', () => {
        Alpine.data('container', () => {
            return {
                init() {
                    console.log("Hello World");
            
                    this.inQueue = this.taxiLine.map(line =>{
                        return new TaxiRank(line)
                    })
                },
            
                open: false,
                taxiLine: ["Kuilsriver", "Bellville", "Khayelitsha", "Langa","Stellenbosch"],
                inQueue:[],
                total: 0
            }
    })
    })
    