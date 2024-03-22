/* Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message. */

function make_shirt(size: string , msg : string = 'I love Typescript'): void{
    console.log(`You order ${size} size shirt and message is ${msg}`);
}

make_shirt('large');
make_shirt('medium');
make_shirt('small', 'Stay Positive');
