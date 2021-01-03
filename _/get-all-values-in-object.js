// Get all values in object

var name = {
  first: "John",
  last: "Doe",
  age: 40
};

// var values = Object.keys(name).map(key => name[key]);
// console.log(values);

var values = Object.values(name);
console.log(values); // [ 'John', 'Doe', 40 ]
