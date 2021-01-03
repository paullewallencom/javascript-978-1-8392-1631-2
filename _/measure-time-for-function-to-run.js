// Measure time it takes function to run

var getUserData = async () => await fetch("https://api.github.com/users/tom");

var time = fn => {
  console.time("time");
  let result = fn();
  console.timeEnd("time");
  return result;
};

time(() => getUserData());
// time: 2.06396484375ms
// Promise {<pending>}

/* With variables to timed function */

var getUserData = async user =>
  await fetch(`https://api.github.com/users/${user}`);

var time = (fn, ...args) => {
  console.time("time");
  let result = fn(...args);
  console.timeEnd("time");
  return result;
};

time(() => getUserData("wesbos"));
// time: 1.2021484375ms
// Promise {<pending>}
