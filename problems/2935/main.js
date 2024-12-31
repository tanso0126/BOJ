let [a,xx,b] = require('fs').readFileSync(0).toString().trim().split("\n");

if(xx == "*") {
    console.log('1'+'0'.repeat(a.length + b.length - 2))
}else {
    if(a > b) {
        console.log('1'+'0'.repeat(a.length - b.length - 1) + b)
    }else if(a < b) {
        console.log('1'+'0'.repeat(b.length - a.length - 1) + a)
    }else {
        console.log('2'+'0'.repeat(a.length - 1))
    }
}