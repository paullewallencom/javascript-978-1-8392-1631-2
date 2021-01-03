// Shortcircuiting with Logical 'And' (&&)

var loggedIn = true;

var h1 = document.querySelector("h1");

if (loggedIn) {
  h1.style.display = "block";
}
// 'block'

h1.style.display = "none"; // 'none'

loggedIn; // true
loggedIn && (h1.style.display = "block"); // "block"

h1.style.display = "none"; // "none"

loggedIn && (h1.style.display = "block") && "cool!"; // "cool!"
