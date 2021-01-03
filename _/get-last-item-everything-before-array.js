// Get last item in array, get everything before last item in array

var names = ["Bill", "Fred", "Doug", "Jessica", "Abe", "John", "Angie"];
var lastName = names[names.length - 1];
console.log(lastName);

var beforeLastName = names.slice(0, -1);
console.log(beforeLastName);
