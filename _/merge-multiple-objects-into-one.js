// Merge multiple objects into one object

var defaultUser = {
  name: "",
  email: "",
  subscribed: true
};

var actualUser = {
  name: "Don",
  email: "don@gmail.com",
  phone: 55523123123
};

var userData = { ...defaultUser, ...actualUser };
console.log(userData);
// { name: 'Don', email: 'don@gmail.com', subscribed: true, phone: 55523123123 }
