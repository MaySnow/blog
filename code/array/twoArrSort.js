// 利用 A B 数组的顺序将 A B 合成一个新的升序数组

let arrA = [2,5,6,8,9,12,15]
let arrB = [3,6,9,10,11,20,29]

function getMore(arrA, arrB) {
    let aIdx = 0
    let bIdx = 0
    let aLength = arrA.length
    let bLength = arrB.length
    let res = []
    while (aIdx < aLength) {
        // 如果 B 数组的值比 A 数组当前的值小则放到 A 的前面
        while(arrB[bIdx] < arrA[aIdx]) {
            res.push(arrB[bIdx])
            bIdx++
        }
        // 插入 B 中比当前小的值后，再插入当前值
        res.push(arrA[aIdx])
        aIdx++
    }
    // A 数组已经遍历结束，但是 A 数组最后一个值比 B 数组的最后一个值小，则将 B 数组剩下的值放到放到最后
    if (bIdx < bLength) {
        res = [...res, ...arrB.slice(bIdx)]
    }
    return res
}

console.log(getMore(arrA, arrB))