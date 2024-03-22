/*  Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name. */

let magicianNames : string[] = ["Criss Angel", "David Copperfield", "David Blaine", "Penn & Teller","Helder Guimaraes"];
function show_magicians(magicianNames:string[]): void{
    magicianNames.forEach(name => {
        console.log(name);
    });
}


function make_great(magicianNames:string[]): string[] {
  
  let greatMagician : string[] = [];
  magicianNames.forEach(name => {
   greatMagician.push(`The Great ${name}`);
    
  });
  return greatMagician;
}
//before modify
console.log('Before modify');
show_magicians(magicianNames);

// modify array
let greatMagician : string[] = make_great(magicianNames);

//After modify
console.log('\nAfter modify');
 show_magicians(greatMagician);
  show_magicians(magicianNames); 