//This program takes a number from the command line argument and prints "C is fun" that many times. If the argument is missing or not a number, it prints "Missing number of occurrences".
let userArgument = process.argv[2];

if (userArgument == undefined || isNaN(userArgument)) {
    console.log("Missing number of occurrences");
} else {
    let i = 0;

    while (i < parseInt(userArgument)) {
        console.log("C is fun!");

        i++;
    }
}










