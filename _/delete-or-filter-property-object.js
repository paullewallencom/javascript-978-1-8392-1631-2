// Delete or filter a property from an object

var name = { first: "John", middle: "Bob", last: "Doe" };

// delete name.last;
// console.log(name);

function filterObj(obj, prop) {
  var filteredObj = {};
  Object.keys(obj)
    .filter(k => k !== prop)
    .map(key => (filteredObj[key] = obj[key]));
  return filteredObj;
}

console.log(filterObj(name, "last"));
// { first: 'John', middle: 'Bob' }
