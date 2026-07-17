// Spread operator essentially "copies" elements of an array/object into a new array/object
// array spread
const fruits = ["Apple", "Orange"];

console.log(fruits);

const moreFruits = [...fruits, "Banana"];

console.log(moreFruits);

const bananaInFront = ["Banana", ...fruits];

console.log(bananaInFront);

console.log(fruits);
