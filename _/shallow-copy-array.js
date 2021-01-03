// Shallow copy / clone an array

/* Shallow copy array when mutating original */
var fruits = ["apple", "banana"];
var newFruits = fruits;
newFruits.push("cherry");
console.log(fruits);
// ['apple', 'banana', 'cherry']

/* .slice() */

var fruits = ["apple", "banana"];
var newFruits = fruits.slice();
newFruits.push("cherry");
console.log(fruits);
// ['apple', 'banana']

/* [].concat(arr) */

var fruits = ["apple", "banana"];
var newFruits = [].concat(fruits);
newFruits.push("cherry");
console.log(fruits);
// ['apple', 'banana']

/* Spread operator */

var fruits = ["apple", "banana"];
var newFruits = [...fruits, "cherry"];
console.log(fruits);
// ['apple', 'banana']

/* Often when you are mutating an array, there is a method which is non-mutating and creates a new copy of the array on its own; i.e. .concat() instead of .push() */

var fruits = ["apple", "banana"];
var newFruits = fruits.concat("cherry");
console.log(fruits);
// ['apple', 'banana']
