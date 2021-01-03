// Prevent object properties from being added, deleted or modified

var user = {
  name: "Greg",
  email: "greg@gmail.com"
};

Object.getOwnPropertyDescriptors(user);
// {
//   email: {value: "greg@gmail.com", writable: true, enumerable: true, configurable: true},
//   name: {value: "Greg", writable: true, enumerable: true, configurable: true
// }

Object.freeze(user);
// {name: "Greg", email: "greg@gmail.com"}

Object.getOwnPropertyDescriptors(user);
// {
//   email: {value: "greg@gmail.com", writable: false, enumerable: true, configurable: false},
//   name: {value: "Greg", writable: false, enumerable: true, configurable: false}
// }

user.email = "alksjf";
// "alksjf"

user;
// {name: "Greg", email: "greg@gmail.com"}

delete user.name;
// false

user.password = "greg";
// "greg"

user;
// {name: "Greg", email: "greg@gmail.com"}

Object.isFrozen(user);
// true
