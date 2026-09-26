// /2-Object literals/ , 2-encapsulation , 2-abstraction , 2-inheritance , 
// 1-polymorphism , 4-class , 4-object , 2-constructor , 5-method , /3-variables/, /3-conditionals/, /3-loops/, /3-arrays/


//Variables
console.log("--VARIABLES--");

let name = "Sky"; //var 1
let age ="22"; //var 2
let gender = "Boy"; //var 3

console.log("Name: " + name);
console.log("Birthday: " + age);
console.log("Age: " + gender);

//Arrays
console.log("\n--ARRAYS--");

let sports = ["Volleyball", "Pickleball", "Badminton" ]; //Arr 1
let scores = [25, 11 , 21]; //Arr 2
let players = [12, 4, 2]; //Arr 3

console.log("Sports: " + sports);
console.log("Scores to win: " + scores);
console.log("Players Needed: " + players);

//Conditionals
console.log("\n--CONDITIONALS--");

// Condi 1
if (age >= 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is a minor.");
}

// Condi 2
switch (gender) {
  case "Boy":
    console.log("Category: Male division");
    break;
  case "Girl":
    console.log("Category: Female division");
    break;
  default:
    console.log("Category: Open division");
}

// Condi 3
let canRegister = (age >= 18) ? "Eligible for adult tournament" : "Not eligible";
console.log("Registration Status: " + canRegister);


//Loops
console.log("\n--LOOPS--");

// L1
console.log("1. Sports Details:");
for (let i = 0; i < sports.length; i++) {
  console.log("- " + sports[i] + " requires " + players[i] + " players and " + scores[i] + " points to win.");
}

// L2
console.log("\n2. List of Sports:");
for (let sport of sports) {
  console.log("* " + sport);
}

// L3
console.log("\n3. Win Condition Summary:");
for (let index in scores) {
  console.log("Game " + (Number(index) + 1) + " target score: " + scores[index]);
}


//Object Literals
console.log("\n-- OBJECT LITERALS --");
    //OL1
const leagueInfo = {
  name: "National Sports League",
  season: 2026,
  league: function(){
    console.log(`Welcome to ${this.name} year ${this.season}`);
  }
};
leagueInfo.league();

    //OL2
const tournamentLocation = {
  city: "San Francisco",
  venue: "Central Arena",
  tourna: function(){
    console.log(`The game will be at ${this.venue} , ${this.city}`);
  }
};
tournamentLocation.tourna();


//CLASSES & CONSTRUCTORS & ABSTRACTION

// Class 1: Parent Class
class Player {
  // Encapsulation 1: Private field (#id)
  #id;

  // Constructor 1
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.#id = id;
  }

  // Abstraction 1: Internal detail hidden in private method
  #generateBadgeCode() {
    return `BADGE-${this.#id}-${Math.floor(Math.random() * 1000)}`;
  }

  // Method 1
  getDetails() {
    return `Player: ${this.name}, Age: ${this.age}`;
  }

  // Method 2 (Abstraction usage)
  printBadge() {
    // Exposes simple badge info while hiding the complex generation logic
    console.log(`Badge for ${this.name}: ${this.#generateBadgeCode()}`);
  }

  // Encapsulation 1: Public getter to access private #id
  getId() {
    return this.#id;
  }
}

// Class 2: Child Class (Inheritance 1)
class Athlete extends Player {
  // Constructor 2
  constructor(name, age, id, sport) {
    super(name, age, id); // Calls parent constructor
    this.sport = sport;
  }

  // Polymorphism: Overriding getDetails() from Player
  getDetails() {
    return `Athlete: ${this.name}, Age: ${this.age}, Sport: ${this.sport}`;
  }

  // Method 3
  train() {
    console.log(`${this.name} is training for ${this.sport}.`);
  }
}


// Class 3: Child Class (Inheritance 2)
class Coach extends Player {
  constructor(name, age, id, team) {
    super(name, age, id);
    this.team = team;
  }

  // Method 4
  guideTeam() {
    console.log(`Coach ${this.name} is guiding team ${this.team}.`);
  }
}

// Class 4: Encapsulation & Abstraction example class
class Scoreboard {
  // Encapsulation 2: Private field (#score)
  #score = 0;

  // Abstraction 2: Complex calculation hidden in private method
  #calculateBonus() {
    return this.#score > 50 ? 10 : 0;
  }

  // Method 5
  addPoints(points) {
    this.#score += points;
    let total = this.#score + this.#calculateBonus();
    console.log(`Current Total Score (with bonus if applicable): ${total}`);
  }

  // Encapsulation 2: Public getter for #score
  getScore() {
    return this.#score;
  }
}


//Objects
// Object 1: Player instance
const player1 = new Player("Sky", 22, 101);

// Object 2: Athlete instance
const athlete1 = new Athlete("Alex", 24, 102, "Volleyball");

// Object 3: Coach instance
const coach1 = new Coach("Taylor", 45, 103, "Titans");

// Object 4: Scoreboard instance
const board1 = new Scoreboard();


//To print the results
console.log("\n-- ENCAPSULATION & ABSTRACTION --");
player1.printBadge(); 

console.log("Player ID (via getter): " + player1.getId()); 

console.log("\n-- INHERITANCE & ADDITIONAL METHODS --");
athlete1.train();
coach1.guideTeam();





