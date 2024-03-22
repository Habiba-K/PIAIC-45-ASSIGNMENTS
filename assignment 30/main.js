"use strict";
/*using loop ( Make a array of five or more usernames, including the name 'admin':

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.) */
let usernames = ["Sara", "Eric", "Admin", "Sana", "Ali"];
for (let users of usernames) {
    if (users.toLocaleLowerCase() == 'admin') {
        console.log(`Hello ${users}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${users}, thank you for logging in again.`);
    }
}
