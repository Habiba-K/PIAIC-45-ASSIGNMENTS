"use strict";
/* Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner. */
let GuestList = ["Aniza", "Maryam", "Aaish"];
GuestList.forEach(guest => {
    console.log(`Dear ${guest}, You are invited to dinner at my place.`);
});
