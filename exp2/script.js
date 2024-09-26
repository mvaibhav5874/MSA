function log(text) {
    document.getElementById("output").innerHTML += text + "<br>";
}

let a = 5;
const b = 10;
var c = 15;

log(`Variable Declarations:`);
log(`let a = ${a}, const b = ${b}, var c = ${c}`);
log("<hr>");

log("If-else Statement:");
if (a > b) {
    log("a is greater than b");
} else if (a < b) {
    log("a is less than b");
} else {
    log("a is equal to b");
}
log("<hr>");

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

log("For Loop:");
for (let i = 0; i < 5; i++) {
    log(`Iteration ${i}`);
}
log("<hr>");

log("While Loop:");
let counter = 0;
while (counter < 5) {
    log(`Counter: ${counter}`);
    counter++;
}
log("<hr>");

log("Do-while Loop:");
let x = 0;
do {
    log(`x: ${x}`);
    x++;
} while (x < 5);
log("<hr>");

log("Ternary Operator:");
let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
log(`Age: ${age}, Status: ${message}`);
log("<hr>");

log("Try-catch-finally:");
try {
    let result = fakeFunc(); 
    log(result);
} catch (error) {
    log(`Error caught: ${error.message}`);
} finally {
    log("Finally block executed");
}