//A program that takes two numbers from the command line arguments and prints their sum to the console.

function add(a, b) {
    return parseInt(a) + parseInt(b);
}


console.log(add(process.argv[2], process.argv[3]));