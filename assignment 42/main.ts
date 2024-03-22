/* Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified. */

let magicianNames : string[] = ["Criss Angel", "David Copperfield", "David Blaine", "Penn & Teller","Helder Guimaraes"];
function show_magicians(magicianNames:string[]): void{
    magicianNames.forEach(name => {
        console.log(name);
    });
}


function make_great(magicianNames:string[]): void{
  for (let i = 0; i < magicianNames.length; i++) {
    magicianNames[i] = `The Great ${magicianNames[i]}`;
    
  }
}
//before modify
console.log('Before modify');
show_magicians(magicianNames);

// modify array
make_great(magicianNames);

//After modify
console.log('\nAfter modify');
show_magicians(magicianNames);