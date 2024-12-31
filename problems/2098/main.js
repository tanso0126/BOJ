f=require("fs"),i=`${f.readFileSync(0)}`.split("\n")
n=+i.shift()
g=i.map(v=>{v=v.split(" ").map(Number);return v})
d=Array.from({length:n},()=>Array.from({length:1<<n},()=>0))
function F(x,v){
  if(v===(1<<n)-1){
    if(g[x][0]===0){return Infinity}
    return g[x][0]
  }
  if(d[x][v]!==0){return d[x][v]}
  d[x][v]=Infinity
  for(let i=1;i<n;i++){
    if(g[x][i]===0)continue
    if(v&(1<<i))continue
    d[x][v]=Math.min(d[x][v],F(i,v|(1<<i))+g[x][i])
  }
  return d[x][v]
}
console.log(F(0,1))