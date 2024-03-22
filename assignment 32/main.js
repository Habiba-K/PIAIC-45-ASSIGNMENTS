"use strict";
// Checking Usernames: To create a program that simulates how websites ensure that everyone has a unique username.
let current_users = ["Sara", "Eric", "Admin", "Sana", "Ali"];
let new_users = ["Muniba", "Nabiha", "Aniza", "ERIC", "Ali"];
for (let users of new_users) {
    let setusers = current_users.some(user => user.toLowerCase() === users.toLowerCase());
    if (setusers) {
        console.log(`The person ${users} will need to enter a new username`);
    }
    else {
        console.log(`The username ${users} is available.`);
    }
}
