s='250\n17 16 16\n',e=16
while(e){for(i=1;i<e;i+=2)i-e+1?s+=`-16 ${-i} -${i+1}\n${i} ${i} ${i+1}\n${i+1} ${i+2} 16\n-${i+2} -${i+2} -16\n`:s+=`-16 ${-i} -${i-15?i+1:17}\n${i} ${i} ${i-15?i+1:17}\n${i-15?i+1:17} 16 16\n`;e--}
console.log(s+'16 17 17')