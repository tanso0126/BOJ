let input = require('fs').readFileSync(0).toString().trim().split("\n");
input = input.map(e => e.split(" ").map(Number))

var a = ''
for(var i = 0; i < 999999999; i++) {
    if(input[i] == '0') break
    var l = []
    for(var j = 1; j <= input[i][0]; j++) {
        if(input[i][j] != l[l.length-1]) l.push(input[i][j])
    }
    a += l.join(" ") + ' $\n'
}

console.log(a)