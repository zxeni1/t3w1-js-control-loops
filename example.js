// console.log("Hello!")
// if and if/else statements

let someMessage = "Bananas";

if (someMessage == "Oranges") {
    //truthy condition
    console.log("We have oranges");
}

console.log(someMessage);
let someNumber = 3;

if (someNumber === 10) {
    console.log("We have 10!!");
}

if (someNumber >= 5) {
    console.log("we have 5 or more!");
} else {
    console.log("Less than 5");
}

//ternary opperators

let someCoolMessage = (someMessage === "Bananas") ? 
    someMessage.toLocaleUpperCase() 
    : "Defult message here."

if (someMessage === "Bananas"){
    someCoolMessage = someMessage.substring(0,2).toLocaleUpperCase();
} else {
    someCoolMessage = "Defult message in the else statement.";
}

console.log(someCoolMessage);

// switch operator 

someMessage = "mango";

switch (someMessage) {
    case "orange":
        console.log("We have oranges");
        break;
    case "banana":
        break;
        console.log("We have bananas");
        break;
    case "mango":
        console.log("We have mangos");
        break;
    default:
        console.log("We have another fruit");
}

// Short circut logic

someMessage = "Mango";
//evaluate if first part is true, if it is we return second one 
// if the first part is false, it returns the first part "", 0, false boolean
let circutLogicMessage = someMessage && "We have a message";

console.log(circutLogicMessage);

// it returns the first block that is true
// if both false it will return the second one 
circutLogicMessage = "" || 0;

console.log(circutLogicMessage);