// Remove falsy values from array

var temps = [72, 68, 65, undefined, 80, 0, NaN, "", null];

var newTemps = temps.filter(temp => Boolean(temp));
console.log(newTemps);

// Falsy values = values which, when converted to a boolean always become false
// Five falsy values in JS = '', 0, null, undefined, NaN
