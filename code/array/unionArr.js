// 合并 start end 交集
let arr = [{
    start: 2,
    end: 5
}, {
    start: 9,
    end: 10
},{
    start: 3,
    end: 7
}]
function union(arr) {
    // 做一下升序
    arr = arr.sort((prev, cur) => {
        return prev.start - cur.start
    })
    let resArr = [arr.shift()]
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i]
        let lastIdx = resArr.length - 1
        let lastRes = resArr[lastIdx]
        if (cur.start > lastRes.end) {
            // 如果当前的 start 大于目标的 end 说明断了
            resArr.push(cur)
        } else {
            // 因为数组做了升序，所以当前 start 肯定大于等于目标的 start，因此只需要取 end 最大的值更改就可以
            resArr[lastIdx].end = Math.max(lastRes.end, cur.end)
        }
    }
    return resArr
}

console.log(union(arr))