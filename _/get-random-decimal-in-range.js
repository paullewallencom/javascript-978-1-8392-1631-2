// Random decimal in range

// 2, 10 -> 6.23490813

Math.random() * (10 - 2) + 2;
// 7.715471356865184

function getRandomDecimal(min, max) {
  return Math.random() * (max - min) + min;
}

getRandomDecimal(2, 20);
// 14.024958870262425

getRandomDecimal(2, 20);
// 4.751101660573324
