// 给一个字符串，找出出现次数最多的元素
// 方法一： for 循环
function strMost(str) {
    if (!str) {
        return
    }
    let arr = str.split('')
    let res = {}
    let maxNum = 0
    let maxEl
    arr.forEach( item => {
        res[item] ? res[item]++ : res[item] = 1
        if (res[item] > maxNum) {
            maxNum = res[item]
            maxEl = item
        }
    });
    return maxEl
}

// 方法二: 递归
function reduceMost(str) {
    if (!str) {
        return
    }
    let arr = str.split('')
    let maxLength = 0
    let maxEl
    arr.reduce((res, cur) => {
        res[cur] ? res[cur]++ : res[cur] = 1
        if (res[cur] > maxLength) {
            maxLength = res[cur]
            maxEl = cur
        }
        return res
    }, {})
    return maxEl
}

console.log(strMost('abcabcaae'))
console.log(reduceMost('abcabcaae'))