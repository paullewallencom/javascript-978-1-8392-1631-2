// Find certain element / index of array

var people = ["John", "Mary", "Joe", "John"];

var result = people.findIndex(person => person === "John");
console.log(result);

function findIndexAll(arr, value) {
  let indices = [];
  arr.forEach((el, i) => el === value && indices.push(i));
  return indices;
}

var res = findIndexAll(people, "John");
console.log(res);
