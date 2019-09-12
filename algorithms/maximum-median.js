const readline = require('readline');
const process = require('process');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
let lineCount = 0, n, k, nArr;
rl.on('line', function(line){
  if (lineCount === 0) {
    let resOne = line.trim().split(' ');
    n = parseInt(resOne[0]);
    k = parseInt(resOne[1]);
  }
  if (lineCount === 1) {
    nArr = line.trim().split(' ').map((item) => parseInt(item));
    console.log(maximumMedian(n, k, nArr));
    rl.close();
  }
  lineCount ++;
});

function maximumMedian(n, k, nArr) {
  if (n === 1) {
    return nArr[0] += k;
  }
  let sort = nArr.sort((a, b) => {
    if ( a < b) {
      return -1;
    }
    if ( a > b) {
      return 1;
    }
    return 0;
  });
  let rightArr = sort.splice(((n - 1)/2));
  let len = rightArr.length;
  let result = rightArr[0];
  let minIndex = rightArr.lastIndexOf(result);
  let tempIndex = minIndex;
  if ( k <= minIndex) {
    return result;
  }
  let count = k;
  while (count) {
    if (tempIndex + 1 === len) {
      // 全加满了，数组中数据完全相同
      // count 剩余的次数
      let lastCount = Math.floor(count / len);
      result += lastCount;
      break;
    } else {
      let resultNext = rightArr[tempIndex + 1];
      let gap = resultNext - result;
      if (gap > 0) {
        // 不一定能加完，看count还剩多少
        let curCount = gap * (tempIndex + 1)
        if (count < curCount) {
          // 剩余次数不够每个+gap 算出能加多少次
          result += Math.floor(count / (tempIndex + 1));
          break;
        }
        result += gap;
        count -= curCount;
      }
      if (count < 0) {
        // count 会<0
        break;
      }
      // 数组的下一个
      tempIndex += 1;
    }
  }
  return result;
}
