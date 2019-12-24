// 给任意数组arr=[1,2,2,2,3,3,3,4]，去掉重复元素。去重后的结果为arr=[1,2,3,4],并使用arr.unique()调用
Array.prototype.unique = function () {
    let arr = []
    this.forEach((item) => {
        if (arr.indexOf(item) === -1) {
            arr.push(item)
        }
    })
    this.length = 0
    arr.forEach((item) => {
        this.push(item)
    })
}

let arr = [1,1,12,2,2,2,3,3,3]
arr.unique()
console.log(arr)