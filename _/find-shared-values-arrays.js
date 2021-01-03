// Find shared values between two arrays

var men = ["Jim", "Doug", "Fred"];

var over50 = ["Angie", "Dave", "Jessica", "Fred"];

var shared = over50.filter(person => men.includes(person));
console.log(shared);
