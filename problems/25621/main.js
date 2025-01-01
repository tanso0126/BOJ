let input = require('fs').readFileSync(0).toString().trim().split("\n");
var [n,k] = input[0].split(' ').map(e => BigInt(e));
input.shift()
input.forEach(e => {
    var [r1,r2] = e.split(' ')
    var op1 = r1[0];
    var num1 = +r1.slice(1);
    var op2 = r2[0];
    var num2 = +r2.slice(1);
    if(op1 == '+'){
        if(op2 == '+'){
            k += BigInt(Math.max(num1,num2))
        }else if(op2 == '-'){
            k += BigInt(num1)
        }else {
            if(k<BigInt(10^9)) {
                k = Math.max(k+BigInt(num1),k*BigInt(num2))
            }else if(num2) {
                k *= BigInt(num2)
            }else {
                k += BigInt(num1)
            }
        }
    }else if(op1 == '-'){
        if(op2 == '+'){
            k += BigInt(num2)
        }else if(op2 == '-'){
            k -= BigInt(Math.min(num1,num2))
        }else {
            if(num2) {
                k *= BigInt(num2)
            }else {
                k -= BigInt(num1)
            }
        }
    }else {
        if(op2 == '+'){
            if(k<BigInt(10^9)) {
                k = Math.max(k+BigInt(num2),k*BigInt(num1))
            }else if(num1) {
                k *= BigInt(num1)
            }else {
                k += BigInt(num2)
            }
        }else if(op2 == '-'){
            if(num1) {
                k *= BigInt(num1)
            }else {
                k -= BigInt(num2)
            }
        }else {
            k *= BigInt(Math.max(num1,num2))
        }
    }
})

console.log(String(k%100000007n))