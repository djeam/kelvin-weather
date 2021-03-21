//The temperature is described in Kelvin 
const kelvin = 293;

//The temperature is converted to Celsius
const celsius = kelvin - 273;

//The temperature is converted to Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

//Fahrenheit is rounded down from decimal
fahrenheit = Math.floor(fahrenheit);

//Temperature output in Fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);