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
}
