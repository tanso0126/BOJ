let [n,s] = require('fs').readFileSync(0).toString().trim().split("\n");

n = parseInt(n)
var a = ''

for(var i = 0; i < s.length; i+=n) {
    a += s[i]
}
console.log(a)
