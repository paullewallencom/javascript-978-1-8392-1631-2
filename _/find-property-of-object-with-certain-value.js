// Find property of object with certain value

var users = {
  John: { id: 1, subscribed: true },
  Doug: { id: 2, subscribed: false },
  Dave: { id: 3, subscribed: true }
};

var property = Object.keys(users).find(key => users[key].subscribed === true);

console.log(property);
// John

var value = Object.values(users).find(obj => obj.subscribed === true);

console.log(value);
// { id: 1, subscribed: true }