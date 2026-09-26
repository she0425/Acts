

//Act 1.3 create any javascript program with minimum 10 let variables, 10 const variables, 5 arrow functions, 
// 10 template literals, 3 destructured arrays, 3 destructured object literals, 2 arrays using spread operators,  
// 2 object literals using spread operator, 2 arrays using.map(), 2 array using .filter(), 
// 2 object literals using optional chaining.


// 10 const variables
console.log("==CONST VARIABLE==");
const brand1 = "Apple";
const brand2 = "Samsung";
const brand3 = "Xiaomi";
const brand4 = "Google";
const brand5 = "OnePlus";
const brand6 = "Motorola";
const brand7 = "Nokia";
const brand8 = "Sony";
const brand9 = "Vivo";
const brand10 = "Oppo";

console.log("Phone Brands: ", "\n", brand1, "\n", brand2, "\n", brand3, "\n", brand4, "\n", brand5, "\n", brand6, "\n", brand7, "\n", brand8, "\n", brand9, "\n", brand10, "\n" );


// 10 let variables
let storeName = "Super Phone Shop";
let totalPhonesSold = 50;
let isStoreOpen = true;
let currentSaleEvent = "Christmas SALE";
let topSeller = brand1;
let phonesInStock = 100;
let discountRate = 10;
let customerCount = 5;
let storeRating = 4.8;
let managerName = "SKY";


// 5 arrow functions & 10 template literals

console.log("==Arrow Functions & Templates Literals==")
// Arrow Function 1 (Uses Template Literal 1)
const greetCustomer = (name) => `Welcome to ${storeName}, ${name}!`;
// Arrow Function 2 (Uses Template Literals 2 & 3)
const showPrice = (brand, price) => `${brand} costsP${price}.`;
// Arrow Function 3 (Uses Template Literals 4 & 5)
const checkStock = (phone, amount) => `We have ${amount} units of ${phone} left!`;
// Arrow Function 4 (Uses Template Literals 6 & 7)
const applyDiscount = (price, discount) => `Original price: P${price}, Discounted price:P${price - discount}!`;
// Arrow Function 5 (Uses Template Literals 8, 9, & 10)
const storeSummary = () => `Manager ${managerName} says ${storeName} is rated ${storeRating} stars with ${phonesInStock} phones ready!`;

// Testing Template Literals in Console
console.log(greetCustomer("SHE")); // Template Literal 1
console.log(showPrice(brand1,  50000)); // Template Literals 2 & 3
console.log(checkStock(brand1, 15)); // Template Literals 4 & 5
console.log(applyDiscount(50000, 2500)); // Template Literals 6 & 7
console.log(storeSummary(),"\n"); // Template Literals 8, 9, & 10




//Data Setup for arrays & objects
const americanBrands = [brand1, brand4]; // Apple, Google
const asianBrands = [brand2, brand3, brand5]; // Samsung, Xiaomi, OnePlus

const phoneDetails = {
  model: "iPhone 15",
  brandName: brand1,
  price: 50000,
  specs: {
    storage: "128GB",
    color: "Blue"
  }
};

const storeInfo = {
  location: "Main Street",
  hours: "9 AM - 9 PM"
};


// 3 Destructed Arrays
console.log("==Destructed Arrays==");
const [firstBrand, secondBrand] = americanBrands; 
console.log(firstBrand); // "Apple" (1st array destructuring)
const [topAsianBrand] = asianBrands; 
console.log(topAsianBrand); // "Samsung" (2nd array destructuring)
const [fav1, fav2, fav3] = [brand1, brand2, brand3]; 
console.log(fav2, "\n"); // "Samsung" (3rd array destructuring)


// 3 destructed object literals
console.log("==Destructed Object Literals==")
const { model, price } = phoneDetails; 
console.log(model); // "iPhone 15" (1st object destructuring)
const { location, hours } = storeInfo; 
console.log(location); // "Main Street" (2nd object destructuring)
const { storage, color } = phoneDetails.specs; 
console.log(color, "\n"); // "Blue" (3rd object destructuring)


// 2 Arrays using spread operator
console.log("==Arrays using spread operator==")
// Combine two arrays into one big array
const firstBrands = [americanBrands]; // Array Spread 1
const allBrands = [...americanBrands, ...asianBrands];
console.log(allBrands, "\n"); 
// Add a new brand to an existing array
const asiaBrand = [asianBrands];
const expandedBrands = [...asianBrands, brand9, brand10]; // Array Spread 2
console.log(expandedBrands, "\n");



// 2 object literals using spread operator
console.log("==Object Literals Using Spread==")
// Combine phone details with store details
const fullProductInfo = { ...phoneDetails, ...storeInfo }; // Object Spread 1
console.log(fullProductInfo);
// Copy phone details and add a new feature
const upgradedPhone = { ...phoneDetails, Capable: true }; // Object Spread 2
console.log(upgradedPhone, "\n");


//2 arrays using .map()
console.log("==Arrays Using .map()==")
const simplePhoneList = [
  { name: "Galaxy S24", cost: 55000 },
  { name: "Pixel 8", cost: 30000 }
];

// Map 1: Get an array of just the phone names
const phoneNamesOnly = simplePhoneList.map(phone => phone.name);
console.log(phoneNamesOnly); // ["Galaxy S24", "Pixel 8"]
// Map 2: Increase all prices by 1500
const increasedPrices = simplePhoneList.map(phone => phone.cost + 1500);
console.log(increasedPrices, "\n"); 


// 2 arrays using .filter()
console.log("==Arrays Using .filter()==")
const phonePrices = [15000, 51455, 67529, 21402, 10000];
// Filter 1: Find cheap phones
const cheapPhones = phonePrices.filter(cost => cost < 25000);
console.log(cheapPhones); 
// Filter 2: Find expensive phones
const expensivePhones = phonePrices.filter(cost => cost >= 7000);
console.log(expensivePhones); 


// 2 object literals using optional chaining
console.log("==Object Literals using oprional chaining==")
const phoneA = { brand: "Nokia", details: { camera: "12MP" } };
const phoneB = { brand: "Motorola" }; // Has no details property

// Optional Chaining 1: Checks if details exists before looking for camera
console.log(phoneA.details?.camera); // Output: "12MP"
// Optional Chaining 2: Safely checks without crashing the code
console.log(phoneB.details?.camera); // Output: undefined (no error!)