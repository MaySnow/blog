let arr = [1, 2, 3, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

/*function flatten (arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}
console.log([...new Set(flatten(arr))])*/
/*const flatten = arr => arr.reduce(((prev, cur) => {
  return Array.isArray(cur) ? [...prev, ...flatten(cur)] : [...prev, cur]
}), [])

console.log([...new Set(flatten(arr))])*/

// console.log([...new Set(arr.join(',').split(',').map(item => Number(item)))])

arr.flat(Infinity)
