/*let str = `7
5 1000000000
2 1
1 10
1 1
4 1000000000
3 3
1 1000000000
5 1
2 999999999
3 1
2 10000000
4 10000000
10000000 999999999
9999900 12
9999999 55
9999999 1
2 1000000
1000000 1000000
999999 1
3 999999911
3 1
11 1000000000
10 9
3 1000000000
1231 1200
1000 800
1 100`;*/


/*let str = `1
23 1000000000
541492491 604094659
903670145 619687596
235335126 347116997
733189975 859578226
185626768 66423736
469771227 702926830
389940538 971765940
919416678 667555620
523799591 197687623
877981158 909829579
874536064 609401586
166105948 449485516
136534207 612381351
66528350 172406726
895345972 292037458
852039318 14729613
182738563 770956877
512089408 238976679
72487460 283181545
83370928 145627598
603639010 449182700
609919434 160220272
942021469 947287054`*/

/*let str = `3
3 10
6 3
8 2
1 4
4 10
4 1
3 2
2 6
1 100
2 15
10 11
14 100`;*/

let stdinArr = [];
const readline = require('readline');
const process = require('process');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', (line) => {
  stdinArr.push(line.trim().split(' ').map((item) => Number(item.trim())));
}).on('close', () => {
  zmeiGorynich(stdinArr);
});

function zmeiGorynich(stdinArr) {
  let queryNum = stdinArr[0][0];
  let curIndex = 1;
  while (queryNum--) {
    let n = stdinArr[curIndex][0];
    let x = stdinArr[curIndex][1];
    let typeArr = stdinArr.slice(curIndex + 1, curIndex + n + 1);
    console.log(singleQuery(x, typeArr));
    curIndex += (n + 1);
  }
}

function singleQuery(x, typeArr) {
  let maxItem = null;
  let maxBlow = 0;
  let maxType = 0;
  let typeArrLen = typeArr.length;
  for( let i = 0; i < typeArrLen; i++) {
    let item = typeArr[i];
    let d = item[0];
    let h = item[1];
    if (x <= d) {
      // 一击毙命
      return 1;
    }
    let cur = x - d + h;
    if (cur < x) {
      maxItem = item;
    }
    let blow = d-h;
    if (blow > 0 && blow > maxBlow) {
      maxBlow = blow;
    }
    maxType = d > maxType ? d : maxType
  }
  if (maxItem === null) {
    return -1;
  }
  // 减少到可以一击毙命
  let count = (x - maxType) / maxBlow;
  return Math.ceil(count) + 1;
}

