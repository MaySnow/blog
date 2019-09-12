
const fs = require('fs')
// const data = fs.readFileSync('dev/test')
const data = fs.readFileSync('dev/stdin')
const result = data.toString('ascii').trim().split('\n').map((item) => item.split(' '))
let n = parseInt(result[0][0])
let k = parseInt(result[0][1])
let nArr = result[1].map((i)=> parseInt(i))

maximumMedian(n, k, nArr)

function maximumMedian(n, k, nArr) {
  const sortFun = (a, b) => {
    if ( a < b) {
      return -1
    }
    if ( a > b) {
      return 1
    }
    return 0
  }

  let count = 0

  let sort = nArr.sort(sortFun)
  let medianAndRightArr = sort.splice(((n - 1)/2))


  function addOne(arr) {
    let sortRes = arr.sort(sortFun)
    if (count === k) {
      return sortRes[0]
    }
    count++
    if (sortRes[0] <= sortRes[1]) {
      sortRes[0] += 1
    } else {
      sortRes[1] += 1
    }
    return addOne(sortRes)
  }
  return addOne(medianAndRightArr)
}




