"use strict";
/* Use an if-else chain inside the loop to print the proper ordinal ending for each number.
Your output should read "1st 2nd 3rd 4th 5th 6th7th 8th 9th", and each result should be on a separate line. */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(num => {
    if (num == 1) {
        console.log(`${num}st `);
    }
    else if (num == 2) {
        console.log(`${num}nd`);
    }
    else if (num == 3) {
        console.log(`${num}rd`);
    }
    else {
        console.log(`${num}th`);
    }
});
