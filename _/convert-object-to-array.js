// Convert object to array

var person = { name: "Amy", age: 40 };

var arr = [];

Object.keys(person).forEach(key => arr.push([key, person[key]]));

console.log(arr); // [ [ 'name', 'Amy' ], [ 'age', 40 ] ]

var result = Object.keys(person).map(key => [key, person[key]]);
console.log(result); // [ [ 'name', 'Amy' ], [ 'age', 40 ] ]

console.log(Object.entries(person)); // [ [ 'name', 'Amy' ], [ 'age', 40 ] ]
