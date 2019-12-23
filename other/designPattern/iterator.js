// 迭代器模式
// 迭代器的实现
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols

function iteratorGenerator(list) {
    let idx = 0
    let len = list.length
    return {
        next: function() {
            // 如果索引没有超出集合长度，则迭代没有结束
            let done = idx >= len
            // 如果 done 为 false 继续取值
            let value = !done ? list[idx++] : undefined

            return {
                done: done,
                value: value
            }
        }
    }
}

let iterator = iteratorGenerator(['1号选手', '2号选手', '3号选手'])

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())