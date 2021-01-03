// Prevent object properties from being added

var user = {
  name: "jeff",
  email: "jeff@gmail.com"
};

Object.getOwnPropertyDescriptors(user);
// {
//   email: {value: "jeff@gmail.com", writable: true, enumerable: true, configurable: true},
//   name: {value: "jeff", writable: true, enumerable: true, configurable: true}
// }

Object.preventExtensions(user);
// {name: "jeff", email: "jeff@gmail.com"}

Object.getOwnPropertyDescriptors(user);
// {
//   email: {value: "jeff@gmail.com", writable: true, enumerable: true, configurable: true},
//   name: {value: "jeff", writable: true, enumerable: true, configurable: true}
// }

user.password = "jeff";
// "jeff"

user;
// {name: "jeff", email: "jeff@gmail.com"}

delete user.name;
// true

user;
// {email: "jeff@gmail.com"}

Object.isExtensible(user);
// false
