// Prevent object properties from being added/deleted

var user = {
  name: "john",
  email: "john@gmail.com"
};

Object.getOwnPropertyDescriptors(user);
// {
//   email: {value: "john@gmail.com", writable: true, enumerable: true, configurable: false},
//   name: {value: "john", writable: true, enumerable: true, configurable: false}
// }

user.password = "john";
// "john"

delete user.name;
// false

Object.isSealed(user);
// true
