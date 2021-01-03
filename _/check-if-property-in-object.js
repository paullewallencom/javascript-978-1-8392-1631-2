// Check if a property exists in object

var user = {
  name: "John",
  address: {
    street: "Main",
    city: "New York"
  }
};

// var property = 'name' in user;

var property = user.address.hasOwnProperty("street");
console.log(property); // true
