const readline = require('readline');
const process = require('process');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
let lineCount = 0;
let queriesNum;
let resultArr = [];
let temp = {};
rl.on('line', function(line){
  if (lineCount === 0) {
    queriesNum = Number(line.trim());
  } else {
    if (lineCount % 2 === 0) {
      temp.arr = line.trim().split('').map((item) => Number(item));
      console.log(gasPipeline(temp))
    } else {
      let dealLine = line.trim().split(' ');
      temp.n = Number(dealLine[0]);
      temp.a = Number(dealLine[1]);
      temp.b = Number(dealLine[2]);
    }
  }
  if (resultArr.length === queriesNum) {
    rl.close();
  }
  lineCount ++;
});

function total(tempArr, prev, next, a, b) {
  let len = tempArr.length;
  //TODO 原理？线性？
  let minRes = (len - 1 + (prev === undefined ? 0.5 : 1.5) + (next === undefined ? 0.5 : 1.5))*a + (len - 1)* b;
  let maxRes = (len - 1 + (prev === undefined ? 1.5 : 0.5) + (next === undefined ? 1.5 : 0.5))*a + (len - 1)*2* b;
  return Math.min(minRes, maxRes)
}

function gasPipeline(temp) {
  let {n, a, b, arr} = temp;
  let count = 0;
  let aMoney = 0;
  let bMoney = 2*b;
  let zeroTotal = 0;

  while (count < n) {
    let cur = arr[count];
    let prev = arr[count - 1];
    let temA = [];
    if (cur === 0) {
      while (cur === 0) {
        temA.push(cur);
        count++;
        cur = arr[count];
      }
      zeroTotal += total(temA, prev, arr[count], a, b);
      continue;
    }
    let tempB = [];
    while (cur === 1) {
      tempB.push(cur);
      count++;
      cur = arr[count];
    }
    let tempBLen = tempB.length;
    aMoney += tempBLen*a;
    bMoney += (tempBLen + 1)*2*b;
  }
  return zeroTotal + aMoney + bMoney;
}

// let n = 8, a = 2, b = 5;
// let arr = [0,0,1,1,0,0,1,0];

// let n = 8, a = 2, b = 5;
// let arr = [0,0,1,1,0,0,1,0];

// let n = 9, a = 100000000, b = 100000000;
// let arr = [0,1,0,1,0,1,0,1,0];

// let n = 2, a = 5, b = 1;
// let arr = [0,0];

// console.log(gasPipeline(n, a, b, arr))


