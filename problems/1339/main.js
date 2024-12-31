let [n,...l] = require('fs').readFileSync(0).toString().trim().split("\n");

var abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var v = new Array(26).fill(0)

l.forEach(e => {
    var i = e.length
    e.split("").forEach(f => {
        v[abc.indexOf(f)] += 10**(i-1)
        i--
    })
})

v = v.filter(v => v != 0).sort((a,b)=>b-a)
const f = (arr, n) => arr.map((v, i) => v * (n - i))
v = f(v,9)

var sum = 0
v.forEach(e => sum += e)
console.log(sum)