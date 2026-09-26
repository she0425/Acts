//make any javascript program with minimum 3 of each;
//Variables
//conditionals
//loops
//arrays

//Variables
console.log("--VARIABLES--");
let studname1 = "Sheraica";
let studname2 ="Sky";
let studname3 = "Joy";
console.log(studname1);
console.log(studname2);
console.log(studname3);

//Arrays
console.log("\n--ARRAYS--");

let age = [23, 18, 19];
let yrLevel = [3, 1, 2];
let course = ["BSCS", "BSCE", "BSBA"];

console.log("Age: " + age);
console.log("YearLevel: " + yrLevel);
console.log("Course: " + course);


//LOOPS
console.log("\n--LOOPS--");
for (let i = 0; i<age.length; i++){
    console.log("Age: " + age[i]);
}

let index = 0;
while(index < yrLevel.length){
    console.log("Year Level: " + yrLevel[index] );
    index++;
}

for (let c of course){
    console.log("Course: " + c);
}

//Conditional
console.log("\n--CONDITIONALS--");
if (age[0] >= 18){
    console.log(studname1 + "is adult.");
}else{
    console.log(studname + "is minor.");
}

if (yrLevel[1] === 1){
    console.log(studname2 + " is a Freshman.");
}else{
    console.log(studname2 + " is a Senior.");
}

if (course[2]==="BSCS"){
    console.log(studname3 + " is taking Computer Science.");
}else if (course[2]==="BSCE"){
    console.log(studname3 + " is taking Civil Engineeringg.");
}else{
    console.log(studname3 + " is taking Another Course.");
}

