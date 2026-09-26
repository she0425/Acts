// Object literals 2, encapsulation 2, abstraction 1, inheritance 2, 
// polymorphism 1, class 4, object 4, constructor 2, method 5, variables 3, 
// conditionals 3, loops 3, arrays 3.

//Class 1
class Vehicle {
  // CONSTRUCTOR
  constructor(vehicleId, brand) {
    this.vehicleId = vehicleId; 
    this.brand = brand;
  }

  // method 1
  details() {
    console.log("ID: " + this.vehicleId, "Brand: " + this.brand);
  }
  getVehicleDetails() {
    return `ID: ${this.vehicleId}, Brand: ${this.brand}${this.model ? ', Model: ' + this.model : ''}`;
  }
}
let vehi = new Vehicle("INOVA", "Toyota");
vehi.details();

//Class 2
class Car extends Vehicle {
  // encapsulation 
  #fuelLevel;

  // constructor
  constructor(vehicleId, brand, model, fuelLevel) {
    super(vehicleId, brand); 
    this.model = model;
    this.#fuelLevel = fuelLevel;
  }
  
  // method 2
  drive() {
    // conditionals 1
    if (this.#fuelLevel > 0) {
      this.#fuelLevel -= 10;
      console.log(`${this.brand} ${this.model} is driving. Fuel remaining: ${this.#fuelLevel}%`);
    } else {
      console.log(`Out of fuel!`);
    }
  }

  // abstraction 1
  startCar() {
    console.log("Checking engine systems...");
    this.drive();
  }

  // method 3
  performMaintenance() {
    console.log(`Performing basic oil change for ${this.brand} ${this.model}.`);
  }

  getVehicleDetails() {
    return `ID: ${this.vehicleId}, Brand: ${this.brand}, Model: ${this.model}`;
  }
}

// class 3
class ElectricCar extends Car {
  constructor(vehicleId, brand, model, fuelLevel, batteryCapacity) {
    super(vehicleId, brand, model, fuelLevel);
    this.batteryCapacity = batteryCapacity;
  }

  // polymorphism 1
  performMaintenance() {
    console.log(`Performing battery checkup for ${this.brand} ${this.model}. Battery: ${this.batteryCapacity}`);
  }
}

// class 4
class Showroom {
  constructor(name) {
    this.name = name;
  }
}

// variable 1,2,3
const maxCapacity = 5;
let currentYear = 2026;
var statusMessage = "Showroom Open";

// object literals 1,2
const ownerInfo = { name: "Alice", role: "Manager" };
const storeLocation = { city: "Cebu", zip: 6000 };

// objects 1,2,3
const car1 = new Car("C01", "Toyota", "Corolla", 50);
const car2 = new Car("C02", "Honda", "Civic", 0);
const electricCar1 = new ElectricCar("E01", "Tesla", "Model 3", 80, "75kWh");

// object 4
const mainShowroom = new Showroom("Central Autos");

// arrays 1,2,3
const carInventory = [car1, car2, electricCar1]; 
const carColors = ["Red", "Blue", "Black"];          
const prices = [20000, 22000, 35000];               

// method 4
function runShowroomDemo() {
  console.log(`${mainShowroom.name} (${statusMessage})`);

  // loop1
  for (let i = 0; i < carInventory.length; i++) {
    console.log(`Car ${i + 1}: ${carInventory[i].getVehicleDetails()}`);
  }

  console.log("\nStarting Cars");
  // loop2
  for (const car of carInventory) {
    car.startCar(); 
  }

  console.log("\nMaintenance Checkup (Polymorphism)");
  // loop3
  carInventory.forEach((car) => {
    // polymorphism
    car.performMaintenance();
  });

  console.log("\nInventory Price Check");
  // conditionals 2,3
  prices.forEach((price) => {
    if (price > 30000) {
      console.log(`Price ${price}: Premium Vehicle`);
    } else if (price >= 20000) {
      console.log(`Price ${price}: Standard Vehicle`);
    } else {
      console.log(`Price ${price}: Budget Vehicle`);
    }
  });
}
runShowroomDemo();