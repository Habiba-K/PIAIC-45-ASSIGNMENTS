"use strict";
/* Make an array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array. */
let magicianNames = ["Criss Angel", "David Copperfield", "David Blaine", "Penn & Teller", "Helder Guimaraes"];
function show_magicians(magicianNames) {
    magicianNames.forEach(name => {
        console.log(name);
    });
}
show_magicians(magicianNames);
