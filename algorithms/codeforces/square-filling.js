const readline = require('readline');
const process = require('process');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
let lineCount = 0, n, m, resultArr = [];
rl.on('line', function(line){
  if (lineCount === 0) {
    let resOne = line.trim().split(' ');
    n = parseInt(resOne[0]);
    m = parseInt(resOne[1]);
  } else {
    resultArr.push(line.trim().split(' ').map((item) => parseInt(item)));
  }
  if (lineCount === n) {
    console.log(squareFilling(n, m, resultArr))
    rl.close();
  }
  lineCount ++;
});

// let n = 3;
// let m = 3;

// let resultArray = [
//     [1,1,1],
//     [1,1,1],
//     [0,1,1]
// ];
// let resultArray = [
//   [1,0,1],
//   [1,0,1],
//   [0,0,0]
// ];
// let resultArray = [
//   [0,0],
//   [0,0],
//   [0,0]
// ];

// console.log(squareFilling(n, m, resultArray));

function squareFilling (n, m, resultArray) {
  let operateCount = 0;
  let operateSelect = [];
  let x = 0;
  let y = 0;

  function getSquare (x, y) {
    try {
      return {
        topLeft: resultArray[x][y],
        topRight: resultArray[x + 1][y],
        bottomLeft: resultArray[x][y + 1],
        bottomRight: resultArray[x + 1][y + 1]
      }
    } catch (e) {
      return null
    }

  }

  function isConform (x, y) {
    let square = getSquare(x, y)
    if (!square) {
      return false
    }
    let { topLeft, topRight, bottomLeft, bottomRight } = square;
    return (topLeft * topRight * bottomLeft * bottomRight === 1);
  }

  while (x < n) {
    if (isConform(x, y)) {
      operateCount+=1;
      operateSelect.push([x + 1,y + 1]);
    } else if (resultArray[x][y] === 1) {
      // 看周围有没有可以满足的，如果没有，return -1
      if (!isConform(x-1, y-1) && !isConform(x, y-1) && !isConform(x-1, y)) {
        return -1;
      }
    }
    // 从0 开始，也就是偶数开始
    if (x % 2 === 0) {
      // 偶数 向右
      y+=1;
      if (y === m) {
        x += 1;
      }
    } else {
      // 奇数 向左
      y-=1;
      if (y === -1) {
        x += 1;
      }
    }
  }
  if (!operateSelect.length) {
    return 0;
  }
  let resStr = `${operateCount}\n`
  let resArr = []
  operateSelect.forEach((item) => {
    resArr.push(item.join(' '))
  });
  return resStr + resArr.join('\n');
}
