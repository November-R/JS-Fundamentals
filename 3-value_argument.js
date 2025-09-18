//A program that takes a value from the command line argument and prints it to the console.
let userArgument = process.argv[2];

if (userArgument == undefined){
    console.log("No argument");
} else {
    console.log(userArgument);
}

//console.log(process.argv[2]);