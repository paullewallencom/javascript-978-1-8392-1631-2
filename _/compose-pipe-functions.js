// Compose / pipe functions

// number -> 'double' -> 'subtractTwo' -> result
// 3 -> 6 -> 4

var double = num => num * 2;
var subtract = (num1, num2) => num1 - num2;

var compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
var pipe = (...fns) => fns.reduceRight((f, g) => (...args) => f(g(...args)));

var subtractAndDouble = pipe(
  subtract,
  double
);
console.log(subtractAndDouble(6, 5)); // 2

// example(func1, func2)(1, 2, 3) -> [1, 2, 3] -> func2(func1(1, 2, 3)) -> func2(6)
// var example = (func1, func2) => (...args) => func2(func1(...args));
// var add = (a, b, c) => a + b + c;
// var multiply = num => num * 2;

// var result = example(add, multiply)(1, 2, 3);
// console.log(result); // 12
