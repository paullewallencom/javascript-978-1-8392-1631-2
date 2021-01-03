// Get random integer in range

// 2, 10 -> 5

Math.round(Math.random() * (10 - 2) + 2); // inclusive of min and max
// 2

Math.floor(Math.random() * (10 - 2) + 2); // inclusive of min
// 6

Math.ceil(Math.random() * (10 - 2) + 2); // inclusive of max
// 10

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

getRandomInt(2, 15);
// 10

getRandomInt(2, 15);
// 5
