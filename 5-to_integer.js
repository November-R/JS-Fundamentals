//A program that takes a value from the command line argument and prints its integer value to the console. If the argument is not a number, it should print "Not a number".
let userArgument = process.argv[2];

if (isNaN(userArgument)){
    console.log("Not a number");
} else {
    console.log(parseInt(userArgument));
}