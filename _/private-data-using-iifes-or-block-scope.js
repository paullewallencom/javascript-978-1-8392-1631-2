// Use IIFEs or block scope (w/ let / const) to hide / expose data

/* IIFE */
var getUserData = (function() {
  let name = "John";
  let email = "john@gmail.com";
  let password = "alsdfjaskdf";

  return {
    name: name,
    email: email
  };
})();

getUserData;
// {name: "John", email: "john@gmail.com"}

/* Using block scope with let */
{
  let name = "John";
  let email = "john@gmail.com";
  let password = "alskdfjalk";

  let sayHi = () => {
    return `Hi, ${name}!`;
  };

  var result = {
    name,
    email,
    sayHi
  };
}

result.sayHi();
// "Hi, John!"
