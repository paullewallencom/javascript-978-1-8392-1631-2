// Iterate over a string

var str = "hello world";

/* for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i), i);
} */

/* for (let s in str) {
  console.log(str[s]);
} */

for (let s of str) {
  console.log(s);
}
var newStr = str.split("");

for (let [i, n] of newStr.entries()) {
  console.log(n, i);
}
