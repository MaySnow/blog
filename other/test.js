

function reduce() {
    var x = [];

    // callback 执行数组中的每一个值（如果没有提供 initialValue 则第一个值除外）
    // 注意括号里的内容，第一个除外！！！！！！
    // push 返回该数组新的长度
    [3,2,1].reduce((i, currentVal) => {
        return x.push(i)
    })
    // [3, 1]
    console.log(x)
}
reduce()

function concat() {
    let arr = [1,2,3,4]
    // concat 返回 concat 后的数组，不改变原数组
    console.log('concat')
    console.log(`结果：${arr.concat([5,6])}`)
    console.log(`arr: ${arr}`)
}
