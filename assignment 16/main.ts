//  three more guests to invite to dinner.
/*Add a print statement to the end of your program informing people that you found a
bigger dinner table.*/


const GuestList: string[] = ["Aniza", "Maryam", "Aaish"];


let notAttend : string = "Maryam";

console.log(`${notAttend} cannot attend the dinner\n`)

GuestList.splice(1,1,"Muniba");

GuestList.forEach(guest => {
    console.log(`Dear ${guest}, I found a bigger dinner table so I invite more people `);
});

// add guest in the beggining
let BeginningGuest : string = "Nabiha";
GuestList.unshift(`${BeginningGuest}`);

// add guest in the middle
let midIndex = GuestList.length/2;
GuestList.splice(midIndex,0,"Sonia");


// add guest in the end use append()
let EndGuest : string = "Zubia";
GuestList.push(EndGuest);

//Print a new set of invitation messages, one for each person in your list.

console.log("\nSecond set of invitation messages:");
GuestList.forEach(guest => {
    console.log(`Dear ${guest}, You can inivite more people on dinner.`);
});
