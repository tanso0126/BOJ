let input = require('fs').readFileSync(0).toString().trim();

input = parseInt(input)

console.log(Math.ceil(input/5))