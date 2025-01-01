var input = require('fs').readFileSync(0).toString().trim().split("\n");
var [N, K, M] = input[0].split(' ').map(e => parseInt(e));
K--;
M--;
input.shift();

var players = Array.from({ length: 4 }, () => Array(5).fill(0));

input.forEach(e => {
    var [a1, a2, a3, a4, s1, s2, s3, s4] = e.split(' ').map(e => parseInt(e));
    var a = [a1 - 1, a2 - 1, a3 - 1, a4 - 1];
    var s = [s1, s2, s3, s4];
    for (var j = 0; j < 4; j++) {
        players[a[j]][j]++;
        players[a[j]][4] += s[j];
    }
});

function solve(idx, d_i, players) {
    if (idx == 3) {
        d_i[3] = -(d_i[0] + d_i[1] + d_i[2]);
        if (d_i[3] < -100 || d_i[3] > d_i[2]) {
            return false;
        }
        var scores = Array.from({ length: 4 }, (_, i) => ({
            first: -players[i][4],
            second: i
        }));
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                scores[i].first -= players[i][j] * d_i[j];
            }
        }
        scores.sort((a, b) => a.first - b.first);
        if (scores[M].second == K) {
            console.log(d_i.join(' '));
            return true;
        }
        return false;
    }
    for (var i = (idx == 0 ? 100 : d_i[idx - 1]); i >= (idx == 0 ? 0 : -100); i--) {
        d_i[idx] = i;
        if (solve(idx + 1, d_i, players)) {
            return true;
        }
    }
    return false;
}

var d_i = Array(4).fill(0);
if (!solve(0, d_i, players)) {
    console.log("-1");
}