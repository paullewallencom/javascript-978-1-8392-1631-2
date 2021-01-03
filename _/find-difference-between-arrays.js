// Find the difference (non-shared items) between two arrays

var arr1 = ["fred", "doug", "amy", "amy"];
var arr2 = ["fred", "doug", "joe"];

var result = [...new Set(arr1)].filter(el => !arr2.includes(el));
console.log(result); // [ 'amy' ]
