// Delete items from array

var nums = [48, 29, 30];

var removedValue = nums.splice(1, 1, "new item", "another item", "third");
console.log(nums);

var str = "hello world".split("");
str.splice(0, 1);
str.splice(str.length - 1, 1);
console.log(str.join(""));

var ints = [4, 5, 6];

// var result = ints.filter(el => el > 4).map(el => {
//   ints.splice(ints.indexOf(el), 1);
//   return el;
// });
// console.log(result);
// console.log(ints);

function removeItems(arr, fn) {
  return arr.filter(fn).map(el => {
    arr.splice(arr.indexOf(el), 1);
    return el;
  });
}

var res = removeItems(ints, num => num > 5);
console.log(res);
console.log(ints);
