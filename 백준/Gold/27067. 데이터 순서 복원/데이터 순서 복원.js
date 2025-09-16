var [n,a,b,c] = require('fs').readFileSync(0,'utf8').trim().split('\n')
var ma = new Map()
var mb = new Map()
var mc = new Map()

a = a.split(' ').map(Number)
b = b.split(' ').map(Number)
c = c.split(' ').map(Number)

for(var i = 0; i < n; i++) {
    ma.set(a[i],i)
    mb.set(b[i],i)
    mc.set(c[i],i)
}

function M(i,j) {
    var k = 0
    if(ma.get(i) < ma.get(j)) k++
    if(mb.get(i) < mb.get(j)) k++
    if(mc.get(i) < mc.get(j)) k++
    if(k > 1) return -1
    else return 1
}

console.log(a.sort((a,b)=>M(a,b)).join(' '))