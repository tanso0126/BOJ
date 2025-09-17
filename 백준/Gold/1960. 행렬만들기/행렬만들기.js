var [n,r,h] = require('fs').readFileSync(0,'utf8').trim().split('\n')
n=+n
r = r.split(' ').map(Number)
h = h.split(' ').map(Number)

var v = [...Array(n)].map(e=>Array(n).fill(0))

for(var i = 0; i < n;) {
    if(r[i]) {
        for(var j = n-1; j >= 0; j--) {
            if(!v[i][j]) {
                var max = j
                break
            }
        }
        for(var j = 0; j < n; j++) {
            if(h[max] < h[j] && !v[i][j]) max = j
        }
        v[i][max] = 1
        r[i]--
        h[max]--
    }else i++
}

if(r.filter(e=>e).length + h.filter(e=>e).length != 0) console.log(-1)
else console.log('1\n' + v.map(e=>e.join('')).join('\n'))