// 5
let n = 3
let k = 2
let nArr = [1,3,5]

// 3
let n = 5
let k = 5
let nArr = [1,2,1,1,1]

// 5
let n = 7
let k = 7
let nArr = [4,1,2,4,3,4,4]

// 991490326
let n = 3
let k = 524125987
let nArr = [923264237,374288891,535590429]


// 1000010000
const fs = require('fs')
const data = fs.readFileSync('dev/test')
const result = data.toString('ascii').trim().split('\n').map((item) => item.split(' '))
let n = parseInt(result[0][0])
let k = parseInt(result[0][1])
let nArr = result[1].map((i)=> parseInt(i))

console.log(maximumMedian(n, k, nArr))
