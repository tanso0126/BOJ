[a,b]=(''+require('fs').readFileSync(0)).split` `
console.log(a-1?a-2|b-1?-1:'1 2':'1 '.repeat(b))