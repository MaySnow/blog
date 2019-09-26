// https://codeforces.com/problemset/problem/1217/C
/*let queryNum;
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
});*/
goodCount('1000000000')
function goodCount(str) {
  let strLen = str.length;
  let count = 0;
  let curStr = str;
  let l = 0;
  let zeroCount = 0;

  while (l < strLen) {
    let curStrIndex =  curStr.indexOf('1');
    zeroCount = curStrIndex
    if (curStrIndex !== -1) {
      l += curStrIndex + 1;
      let tempStr = str.substring(l - 1);
      let temStrLen = tempStr.length;
      for (let i = 0; i < temStrLen; i++) {
        let tenNum = parseInt(tempStr.substring(0, i + 1),2);
        // 为线性，如果结果在这个范围内，则肯定有一个符合
        if ((i + 1) <= tenNum && tenNum <= (i + 1 + zeroCount)) {
          count++;
        }
      }
      zeroCount = 0;
    } else {
      let curStrLen = curStr.length;
      l += curStrLen;
    }
    curStr = str.substring(l)
  }
  console.log(count)
}
