// Check if every array item meets certain criteria

var nums = [1, 2, 3, 4, 5];

var result = nums.every(number => number > 2);
console.log(result);

var users = [
  { name: "John", subscribed: true },
  { name: "Mary", subscribed: "" }
];

var result = users.every(user => user.subscribed);
console.log(result);
