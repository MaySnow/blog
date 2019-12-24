/**
 * 快速排序
 * @param arr 
 */
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let pivotIndex = Math.floor(arr.length / 2)
    // 将基准数从数组中取出
    let pivot = arr.splice(pivotIndex, 1)[0]
    let left = []
    let right = []

    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i]
        if (cur < pivot) {
            // 小于基准数的放到基准数左边的数组
            left.push(cur)
        } else {
            // 大于等于基准数的放到基准数右边的数组
            right.push(cur)
        }
    }
    // 将数组组合，递归不断重复这个过程
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([85, 24, 63, 45, 17, 31, 96, 50]))