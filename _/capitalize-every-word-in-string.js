// Capitalize every word in string

// 'hello world' -> 'Hello World'

function capitalizeWords(str) {
  return str.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ');
}

var result = capitalizeWords('hello world');
console.log(result);