const ps = require("prompt-sync");
const prompt = ps();

let userArgument1 = prompt("Enter your name: ");
let userArgument2 = prompt("Enter your age: ");
let userArgument3 = prompt("Enter your favorite movie: ");

if(userArgument1 == "" && userArgument2 == "" && userArgument3 == "") {
    console.log("No argument");
} else if(userArgument1 != "" && userArgument2 == "" && userArgument3 == "") {
    console.log("Argument found");
} else if(userArgument1 == "" && userArgument2 != "" && userArgument3 == "") {
    console.log("Argument found");
} else if(userArgument1 == "" && userArgument2 == "" && userArgument3 != "") {
    console.log("Argument found");
} else if(userArgument1 != "" || userArgument2 != "" || userArgument3 != "") {
    console.log("Arguments found");
}