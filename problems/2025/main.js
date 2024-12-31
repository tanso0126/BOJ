let input = require('fs').readFileSync(0).toString().trim().split("\n");
const N = parseInt(input[0]);
let [y, x] = input[1].split(' ').map(Number);

const visited = Array(N).fill(0).map(() => Array(N).fill(0));

function isVisited(y, x) {
  return (visited[y - 1][x - 1] === 1);
}

function setVisited(y, x) {
  visited[y - 1][x - 1] = 1;
}

function unsetVisited(y, x) {
  visited[y - 1][x - 1] = 0;
}

function degree(y, x) {
  const moves = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
  let count = 0;
  for (let [dy, dx] of moves) {
    const ny = y + dy, nx = x + dx;
    if (ny > 0 && ny <= N && nx > 0 && nx <= N && !isVisited(ny, nx)) {
      count++;
    }
  }
  return count;
}

const ans = [];

function tiebreaker(pt) {
  let md = 8, ret = [-1, -1];
  for (let [_1, _2, y, x] of pt) {
    setVisited(y, x);
    let d = 8;
    const moves = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
    for (let [dy, dx] of moves) {
      const ny = y + dy, nx = x + dx;
      if (ny > 0 && ny <= N && nx > 0 && nx <= N && !isVisited(ny, nx)) {
        d = Math.min(degree(ny, nx), d);
      }
    }
    if (d < md) {
      md = d;
      ret = [y, x];
    }
    unsetVisited(y, x);
  }
  return ret;
}

setVisited(y, x);

while (true) {
  ans.push([y, x]);
  const q = [];
  const moves = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
  for (let [dy, dx] of moves) {
    const ny = y + dy, nx = x + dx;
    if (ny > 0 && ny <= N && nx > 0 && nx <= N && !isVisited(ny, nx)) {
      q.push([degree(ny, nx), (((N + 1) / 2 - ny) ** 2 + ((N + 1) / 2 - nx) ** 2), ny, nx]);
    }
  }
  if (q.length === 0) break;
  let [deg, dist, nextY, nextX] = q.reduce((a, b) => (a[0] < b[0] || (a[0] == b[0] && a[1] > b[1])) ? a : b);
  const pt = q.filter(i => i[0] === deg && i[1] === dist);
  [y, x] = (pt.length > 1) ? tiebreaker(pt) : [nextY, nextX]
  if(x == -1 && y == -1) {break }else {setVisited(y, x)}
}

if (ans.length !== N * N) {
  console.log('-1 -1');
} else {
    var sw = ''
    ans.forEach((e) => sw += e[0] + " " + e[1] + '\n');
    console.log(sw)
}