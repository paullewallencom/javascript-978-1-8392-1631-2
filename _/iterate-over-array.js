// Iterate over array

var nums = [1, 2, 3, 4, 5];

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

var newArr = [];

nums.forEach((num, i, arr) => {
  // console.log(num + arr[i]);
  newArr.push(num);
  return newArr;
});

console.log(newArr); // [1,2,3,4,5]

var result = nums.map((el, i, arr) => arr[i] + el);
console.log(result); // [2,4,6,8,10]

let newArr2 = [];

for (let [i, num] of nums.entries()) {
  newArr2.push([i, num]);
}

console.log(newArr2); // [[0,1], [1,2], [2,3], [3,4], [4,5]]

var res = nums.reduce((acc, val, i, arr) => {
  acc.push(arr[i]);

  return acc;
}, []);

console.log(res);
