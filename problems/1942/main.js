let input = require('fs').readFileSync(0).toString().trim().split("\n");

function ch(n) {
    var nn = n
    if(nn % 100 == 60) nn += 40
    if(nn % 10000 == 6000) nn += 4000
    return nn
}

for(var i = 0; i < 3; i++) {
    var a = parseInt(input[i].split(" ")[0].replace(/:/g,''))
    var b = parseInt(input[i].split(" ")[1].replace(/:/g,''))
    var threec = 0
    if(a > b) b += 240000
    while(a <= b) {
        if(a % 3 == 0) threec++
        a++
        a = ch(a)
    }
    console.log(threec)
}