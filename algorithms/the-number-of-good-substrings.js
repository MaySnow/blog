// https://codeforces.com/problemset/problem/1217/C
let queryNum;
const readline = require('readline');
const process = require('process');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', (line) => {
  let cur = line.trim();
  if (!queryNum) {
    queryNum = Number(cur);
  } else {
    goodCount(cur)
  }
});
function goodCount(str) {
  let strLen = str.length;
  let count = 0;
  for(let l = 0; l < strLen; l++) {
    for (let r = l; r < strLen; r++) {
      if ((r - l + 1) === parseInt(str.substring(l, r + 1),2)) {
        count++
      }
    }
  }
  console.log(count)
}
