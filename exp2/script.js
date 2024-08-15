// Function to append text to the output div
function log(text) {
    document.getElementById("output").innerHTML += text + "<br>";
}

// Variable declarations
let a = 5;
const b = 10;
var c = 15;

log(`Variable Declarations:`);
log(`let a = ${a}, const b = ${b}, var c = ${c}`);
log("<hr>");

// If-else statement
log("If-else Statement:");
if (a > b) {
    log("a is greater than b");
} else if (a < b) {
    log("a is less than b");
} else {
    log("a is equal to b");
}
log("<hr>");

// Switch statement
log("Switch Statement:");
let day = new Date().getDay();
switch (day) {
    case 0:
        log("Sunday");
        break;
    case 1:
        log("Monday");
        break;
    case 2:
        log("Tuesday");
        break;
    case 3:
        log("Wednesday");
        break;
    case 4:
        log("Thursday");
        break;
    case 5:
        log("Friday");
        break;
    case 6:
        log("Saturday");
        break;
    default:
        log("Invalid day");
}
log("<hr>");

// For loop
log("For Loop:");
for (let i = 0; i < 5; i++) {
    log(`Iteration ${i}`);
}
log("<hr>");

// While loop
log("While Loop:");
let counter = 0;
while (counter < 5) {
    log(`Counter: ${counter}`);
    counter++;
}
log("<hr>");

// Do-while loop
log("Do-while Loop:");
let x = 0;
do {
    log(`x: ${x}`);
    x++;
} while (x < 5);
log("<hr>");

// Ternary operator
log("Ternary Operator:");
let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
log(`Age: ${age}, Status: ${message}`);
log("<hr>");

// Try-catch-finally
log("Try-catch-finally:");
try {
    // Assuming fakeFunc is a function that might throw an error
    let result = fakeFunc(); 
    log(result);
} catch (error) {
    log(`Error caught: ${error.message}`);
} finally {
    log("Finally block executed");
}