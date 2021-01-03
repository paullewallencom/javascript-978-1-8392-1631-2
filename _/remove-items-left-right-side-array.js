// Remove items from left / right side of array

var nums = [23, 987, 45, 89];

var removeFromLeft = nums.slice(0, 3);
console.log(removeFromLeft);

var removeFromRight = nums.slice(1);
console.log(removeFromRight);

console.log(nums);

var getNthItem = (arr, num) => arr.slice(num - 1, num)[0];

var res = getNthItem(nums, 3);
console.log(res);

function offsetArray(arr, offset) {
  return [...arr.slice(offset), ...arr.slice(0, offset)];
}

var result = offsetArray([1, 2, 3, 4], 0);
console.log(result);
