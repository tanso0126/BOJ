var s = [0]

for(var i = 2; i <= 50000; i++) {
	for(var j = 2; j <= Math.sqrt(i); j++) {
		if(i % j === 0) {
			s.push(j)
			break
		}
	}
	if(s.length !== i) s.push(0)
}

console.log('[' + s.join(',') + ']')