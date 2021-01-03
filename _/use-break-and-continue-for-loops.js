// Use 'break' and 'continue' for greater control when iterating

var users = [
  { name: "Don", country: "England" },
  { name: "Vladimir", country: "Russia" },
  { name: "Maria", country: "Spain" }
];

// var russianUser;

// for (let user of users) {
//   console.log(user);
//   if (user.country === 'Russia') {
//     russianUser = user;
//     break;
//   }
// }

// console.log(russianUser);

var newUsers = [];

for (let user of users) {
  if (user.name === "Don") {
    continue;
  }
  console.log(user);
  newUsers.push(user);
}

console.log(newUsers);
