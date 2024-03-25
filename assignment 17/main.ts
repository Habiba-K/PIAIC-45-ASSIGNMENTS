// Shrinking guest list:You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//Add a new line that prints a message saying that you can invite only two people for dinner.
//remove last two people and show empty array

let GuestList: string[] = ["Nabiha","Aniza","Sonia", "Muniba", "Aaish","Zubia"];
console.log("\n For limited seats, I invite only two people for dinner.\n");

// Remove guests from your list one at a time until only two names remain in your list.
while(GuestList.length > 2){
    let removeGuest = GuestList.pop();
    console.log(`Sorry, ${removeGuest} you can’t invite them to dinner.`)
}
console.log("\n");

//invite only 2 people
GuestList.forEach(guest => {
    console.log(`Dear ${guest}, You're still inivited on dinner.`);
});

//remove last two people and show empty array
while(GuestList.length > 0 ){
    GuestList.pop();
} 
console.log("Final guest list: ", GuestList);
