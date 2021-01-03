// Return last item of array

var arr1 = [5, 6, 7, 8];
arr1.pop(); // 8
arr1; // [5, 6, 7]

function findLast(arr, fn) {
  return arr.filter(fn).pop();
}
var findLast = (arr, fn) => arr.filter(fn).pop();

findLast(arr1, el => el > 4);

arr1; // (3) [5, 6, 7]
arr1.map((el, i) => [el, i]); // (3) [Array(2), Array(2), Array(2)]

var overFive = num => num > 5;

arr1
  .map((el, i) => [el, i])
  .filter(([el, i]) => overFive(el, i))
  .pop()[1]; // 2

function findLastIndex(arr, fn) {
  return arr
    .map((el, i) => [el, i])
    .filter(([el, i]) => fn(el, i))
    .pop()[1];
}

var names = ["jim", "jeff", "bob"];
var containsJ = name => name.includes("j");

findLastIndex(names, containsJ);
// 1
