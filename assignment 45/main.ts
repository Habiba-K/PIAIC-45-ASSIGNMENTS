
/* Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature. 
Print the Object that’s returned to make sure all the information was
stored correctly. */

function carinfo(manufacturer : string , modelName :string , ...options: { [key : string]: any }[]):{manufacturer : string , modelName :string , [key : string] :any}{
    let caritems= {
        manufacturer,   
        modelName, 
    };

    options.forEach(element => {
        caritems = { ...caritems, ...element};
    });
    return caritems;
}
let Carproperty = carinfo('Toyota','Camry',{color:'white'}, {year: 2017});
console.log(Carproperty); 