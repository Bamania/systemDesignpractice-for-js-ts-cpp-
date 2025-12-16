// Method rule has Two condition ->PreCondition->Child should follow the Parents
// condition that is running before some methods 
//  >PostCondition=Child show follow the parent condition which is after some methods 

// PRECONDITION: Child can WEAKEN (accept more) but NOT STRENGTHEN (accept less)
// POSTCONDITION: Child can STRENGTHEN (guarantee more) but NOT WEAKEN (guarantee less)

class Car {
    fuel: number;
    maxFuel: number = 100;

    constructor(fuel: number) {
        this.fuel = fuel;
    }

    // Here the preCondition is fueel must be > 0
    
    // here the postCondition is fuel level should be <= maxFuel after refueling
    refuel(amount: number): void {
        // Precondition check
        if (amount <= 0) {
            throw new Error("Fuel amount must be positive");
        }
        
        // Refuel
        this.fuel += amount;
        
        // Postcondition: ensure we don't exceed max
        if (this.fuel > this.maxFuel) {
            this.fuel = this.maxFuel;
        }
        
        console.log(`Refueled !! Current fuel: ${this.fuel}`);
    }
}


class ElectricCar extends Car {
    batteryLevel: number = 0;

    refuel(amount: number): void {
        // PRECONDITION WEAKENED: accepts amount >= 0 (weaker than parent's > 0)
        // This is OK - accepts MORE cases than parent
        if (amount < 0) {
            throw new Error("Fuel amount cannot be negative");
        }
        
        // Refuel
        this.fuel += amount;
        
        // POSTCONDITION STRENGTHENED: ensures fuel is EXACTLY within limits
        // AND updates battery - guarantees MORE than parent
        if (this.fuel > this.maxFuel) {
            this.fuel = this.maxFuel;
        }
        this.batteryLevel = this.fuel; // Extra guarantee that we are imposing to make sure the POSt condition check exists !
        
        console.log(`Electric car charged. Fuel: ${this.fuel}, Battery: ${this.batteryLevel}`);
    }
}

//  WRONG: Breaks LSP
class BrokenElectricCar extends Car {
    refuel(amount: number): void {
        // PRECONDITION STRENGTHENED: requires amount > 10 (stricter than parent's > 0)
        //  This BREAKS LSP - accepts FEWER cases than parent
        if (amount <= 10) {
            throw new Error("Electric car needs at least 10 units to charge!");
        }
        
        this.fuel += amount;
        
        // POSTCONDITION WEAKENED: doesn't check maxFuel
        //  This BREAKS LSP - guarantees LESS than parent
        // fuel can now exceed maxFuel!
        
        console.log(`Charged with ${amount}. Fuel might exceed max: ${this.fuel}`);
    }
}

// Client expects any Car
function refuelVehicle(vehicle: Car, amount: number) {
    vehicle.refuel(amount);
}

const normalCar = new Car(50);
const electricCar = new ElectricCar(50);
const brokenCar = new BrokenElectricCar(50);

console.log("--- Normal Car ---");
refuelVehicle(normalCar, 5);  // Works

console.log(" Electric Car (LSP Compliant) ---");
refuelVehicle(electricCar, 5);  //  Works - accepts amount > 0

console.log(" Broken Electric Car (LSP Violation) ---");
try {
    refuelVehicle(brokenCar, 5);  //  Fails - expects amount > 10!
} catch (e: any) {
    console.log("ERROR:", e.message);
    console.log("Client expected Car to accept amount > 0, but child requires > 10!");
}
  