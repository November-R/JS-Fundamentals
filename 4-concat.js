//A program that takes two values from the command line arguments and prints them in the format "value1 is value2". If one or both values are missing, the if statement handles them appropriately.
let userArgument1 = process.argv[2];
let userArgument2 = process.argv[3];

if(userArgument1 == undefined && userArgument2 == undefined) {
    console.log(userArgument1 + " is " + userArgument2);
} else if(userArgument1 != undefined && userArgument2 == undefined){
    console.log(userArgument1 + " is " + userArgument2);
} else if(userArgument1 != undefined && userArgument2 != undefined) {
    console.log(userArgument1 + " is " + userArgument2);
}

