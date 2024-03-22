//Print array without modify the actual list,
//Print array in alphabetical order, reverse alphabetical order without modify actual array
//reverse array two times 
//Print array in alphabetical order, reverse alphabetical order

let places : string[] = ["Paris","London", "Turkey", "Dubai", "Pakistan"];

//print array in original order
console.log(`Original Order:\n\t${places}`);

//Print your array in alphabetical order without modifying the actual list.([...places] creates a shallow copy of the places array using the spread operator (...). This copy ensures that the original array remains unchanged.)
console.log(`Alphabetical Order:\n\t${[...places].sort()}`);

//print array in original order
console.log(`Original Order:\n\t${places}`);

//print array in reverse alphabetical order without changing original list
console.log(`Reverse Alphabetical Order:\n\t${[...places].sort().reverse()}`);

//print array in original order
console.log(`Original Order:\n\t${places}`);

//print array in reverse order without changing original list
console.log(`Reverse Order:\n\t${places.reverse()}`);

//again reverse order to show that array in original order
console.log(`Again Reverse Order:\n\t${places.reverse()}`);

// stored in alphabetical order 
console.log(`Stored in Alphabetical Order:\n\t${places.sort()}`);

//Sort array in reverse alphabetical order
console.log(`Reverse Alphabetical Order order has changed:\n\t${places.sort().reverse()}`);

//print array in new order
console.log(`New Order:\n\t${places}`);