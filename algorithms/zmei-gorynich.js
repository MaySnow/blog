/**
 * 击杀Zmei Gorynich 龙？
 * Zmei Gorynich 原始有x个头，n个技能，技能可以无限次使用
 * 技能包括一次击杀的头数d，和击杀后再长出的头数h
 * 使用技能后剩余的头数小于等于0，则可将它击杀
 * 3     ---要杀的龙的数量
 * 3 10  ---第1条龙 n=3 x=10， 有3个技能，原始有10个头
 * 6 3   ---第1条龙 第1个技能 d=6 h=3
 * 8 2   ---第1条龙 第2个技能 d=8 h=2
 * 1 4   ---第1条龙 第3个技能 d=1 h=4
 * 4 10  ---第2条龙 n=4 x=10， 有4个技能，原始有10个头
 * 4 1   ---第2条龙 第1个技能 d=4 h=1
 * 3 2   ---第2条龙 第2个技能 d=3 h=2
 * 2 6   ---第2条龙 第3个技能 d=2 h=6
 * 1 100 ---第2条龙 第4个技能 d=1 h=100
 * 2 15  ---第3条龙 n=2 x=15， 有2个技能，原始有15个头
 * 10 11 ---第3条龙 第1个技能 d=10 h=11
 * 14 100---第3条龙 第2个技能 d=14 h=100
 * 求：击杀一条龙所使用的技能数
 * https://codeforces.com/problemset/problem/1217/B
 */
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

