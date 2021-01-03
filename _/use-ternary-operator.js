// Using the ternary operator

var loggedIn = false;
var user = "John";

if (loggedIn) {
  console.log(user + " is logged in");
} else {
  console.log("no user :("); // no user :(
}

loggedIn ? user + " is logged in" : "no user"; // 'no user'

var api = "https://api.myjson.com/bins/71z2m";
var body = document.querySelector("body");

fetch(api)
  .then(res => res.json())
  .then(data => outputUserInfo(data));

function outputUserInfo({ name, age, email }) {
  body.innerHTML = `
    <h1>${name}</h1>
    <p>${age}</p>
    <p>${email ? `Email: ${email}` : `no email listed for ${name}`}</p>
  `;
}
