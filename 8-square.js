//This is a program that prints a square of a given size using the character 'x'. The size of the square is provided as a command line argument. If no size is provided, it prints "Missing size".
let userArgument1 = process.argv[2];

if (isNaN(userArgument1)) {
    console.log("Missing size");
} else {
    let i = 0;

    while (i < userArgument1) {
        console.log("X".repeat(userArgument1));
        i ++;
    }
}