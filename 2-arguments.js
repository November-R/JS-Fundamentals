const ps = require("prompt-sync");
const prompt = ps();

let userArgument = prompt("Enter your age: ");

if(userArgument == "") {
    console.log("No argument");
} else {
    console.log("Argument found");
}