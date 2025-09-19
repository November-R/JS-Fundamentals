 let userArgument1 = process.argv[2];
 let userArgument2 = process.argv[3];
 let userArgument3 = process.argv[4];

 if (userArgument1 == undefined && userArgument2 == undefined && userArgument3 == undefined) {
    console.log("No argument");

 } else if (userArgument1 != undefined && userArgument2 == undefined && userArgument3 == undefined) {
    console.log("Argument found");
 }

 else if (userArgument1 == undefined && userArgument2 != undefined && userArgument3 == undefined) {
    console.log("Argument found");
 }

 else if (userArgument1 == undefined && userArgument2 == undefined && userArgument3 != undefined) {
    console.log("Argument found");
 
 } else if (userArgument1 != undefined || userArgument2 == undefined || userArgument3 == undefined) {
    console.log("Arguments found");
 }