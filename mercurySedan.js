//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class car extends vehicle{
    constructor(make, model, year, color, mileage, maxPassengers, numberOfWheels, maximumSpeed, fuel, scheduleService){
        super(make,model,year,color,mileage)
        this.maxPassengers = maxPassengers
        this.passengers = passengers
        this.numberOfWheels= numberOfWheels
        this.maximumSpeed= maximumSpeed
        this.fuel= fuel
        this.scheduleService= scheduleService
        this.maintenance = false
    }
    LoadPassenger(num){
        if(this.passengers + num<= this.maxPassengers){
        this.passengers = this.passengers + num
        }else{
            console.log("that many people dont fit")
        }
    }

    Start(){
        if (this.fuel >0){
            this.start = true
        }
        else{
            console.log('not enough fuel to start')
        }
    }
    
    scheduleService(mileage){
        if(mileage > 30000){
            this.maintenance = true
        }
        else{
            console.log('car not in need of maintenance yet')
        }
    }
}


const a28 = new car('mercury','a28',1992, 'grey', 30000 , 5, 4, 160, 10, false)

console.log(a28)

a28.LoadPassenger(2)
console.log(a28.passengers)
a28.LoadPassenger(4)