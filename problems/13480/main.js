let input = require('fs').readFileSync(0,'utf8').split("\n")
var s = ''
let t = [0,1,2,[0,1,2,]]
input.shift()
input.forEach(e => {
    var [w,h] = e.split(" ").map(Number)
    if(w==h) {
        s += `1\n0 0 ${w}`
        return
    }
    if(w==1) {
        s += String(h) + '\n'
        for (let i = 0; i <= h-1; i++) s += `0 ${i} 1\n`
        return
    }
    if(h==1) {
        s += String(w) + '\n'
        for (let i = 0; i <= w-1; i++) s += `${i} 0 1\n`
        return
    }
    if(w==2) {
        s += String(h%2?h/2:(h-1)/2+2) + '\n'
        for (let i = 0; i < h-1; i+=2) s += `0 ${i} 1\n`
        if(h%2) s += `0 ${h-1} 1\n1 ${h-1} 1\n`
        return
    }
    if(h==2) {
        s += String(w%2?w/2:(w-1)/2+2) + '\n'
        for (let i = 0; i < w-1; i+=2) s += `${i} 0 1\n`
        if(w%2) s += `${w-1} 0 1\n${w-1} 1 1\n`
        return
    }

})