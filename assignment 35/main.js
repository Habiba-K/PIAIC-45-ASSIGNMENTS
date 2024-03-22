"use strict";
/* Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal،
• Printing a statement about each animal
• Printing the common characteristic */

let animals = ["cat", "dog", "rabbit"];
//Printing the names of each animal 
for (let Animals of animals) {
    console.log(Animals);
}
// Printing a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
// Printing the common characteristic
console.log("Cats, dogs, and rabbits are all popular choices as household pets due to their affectionate nature and ability to form strong bonds with their owners.");
// 
