// Use function declarations for more flexible code

age = 30;
var age;
// 30

name = 'john';
let name;
// Uncaught ReferenceError: name is not defined

email = 'john@gmail.com';
const email;
// Uncaught SyntaxError: Missing initializer in const declaration


fn();

var fn = function() {};
// Uncaught TypeError: fn is not a function


func();

let func = () => {};
// Uncaught ReferenceError: func is not defined


log();

function log() {
  console.log('john');
}
// john


log('jeff');

function log(name) {
  console.log(name);
}
// jeff

