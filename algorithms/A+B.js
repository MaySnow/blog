const fs = require('fs')
const data = fs.readFileSync('dev/stdin')
const result = data.toString('ascii').trim().split(' ').map(x => parseInt(x)).reduce((accumulator, currentValue) => {
  // accumulator 累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue 即reduce的第二个参数，这里是0
  // currentValue 数组中正在处理的元素。
  return accumulator + currentValue
}, 0)
console.log(result)

