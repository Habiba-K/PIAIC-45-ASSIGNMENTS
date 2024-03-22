"use strict";
/* Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase. */
/*  the forward slash(/) is represent starting of regular expression
   \b represent boundary (each empty string represents a word boundary)
   \w represent characters of the word
   /g represent global
   => arrow function
   */
let personName = "habiba khan";
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
let TitleCase = personName.replace(/\b\w/g, match => match.toUpperCase());
console.log(TitleCase);
