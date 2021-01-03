// Assign array values to variables

var nums = [1, 2, 3, 3.4];

// Destructuring
// var [ one, two, three, decimal ] = nums;
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(decimal);

// Using destructuring to swap variables

var name = "doug@gmail.com";
var email = "doug";

// First construct an array from which to destructure
// Then rename the values
var [email, username] = [name, email];
console.log(email);
console.log(username);
