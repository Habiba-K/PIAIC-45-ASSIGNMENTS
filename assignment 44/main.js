"use strict";
/*  Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time. */
let Sandwitchitems = [];
function order(...Sandwitchitems) {
    console.log(`Making Sandwich with the following items:\n ${Sandwitchitems}`);
    console.log("\n");
}
order("tomato", "cucumber", "ketchup");
order("ketchup");
order("Cheese", "tomato", "cucumber", "ketchup");
