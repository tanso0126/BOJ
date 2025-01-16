var [a,b,N,M,k] = require('fs').readFileSync(0).toString().trim().split(" ").map(e=>+e);
var [a,b,N,M] = [a,b,N,M].map(f=>BigInt(f))
var [a,b] = a<b?[a,b]:[b,a]
//2,3,4,6,8
if(k<2||k==5||k==7) {
    console.log(0)
}else {
    if(k==2) {
        console.log(String(4n*a*a))
    }else if(k==3) {
        console.log(String(a*(b-a)*8n))
    }else if(k==4) {
        console.log(String(4n*(b-a)*(b-a)+a*2n*(N+M-4n*b)))
    }else if(k==6) {
        console.log(String((b-a)*2n*(N+M-4n*b)))
    }else if(k==8) {
        console.log(String((N-2n*b)*(M-2n*b)))
    }
}