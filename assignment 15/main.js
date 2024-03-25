"use strict";
/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to
send out a new set of invitations. You’ll have to think of someone else to invite. */
let GuestList = ["Aniza", "Maryam", "Aaish"];
let notAttend = "Maryam";
console.log(`${notAttend} cannot attend the dinner\n`);
GuestList.splice(1, 1, "Muniba");
console.log("\nSecond set of invitation messages:");
GuestList.forEach(guest => {
    console.log(`Dear ${guest}, You are cordially invited to dinner at my place.`);
});
