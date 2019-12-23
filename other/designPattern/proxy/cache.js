// 缓存代理
const addAll = function () {
    console.log('进行了一次计算')
    let arr = Array.from(arguments)
    return arr.reduce((res, cur) => {
        return res + cur
    })
}

const proxyAll = (function () {
    let resultCache = {}
    return function () {
        const args = Array.prototype.join(arguments, ',')
        if (args in resultCache) {
            return resultCache[args]
        }
        return resultCache[args] = addAll(...arguments)
    }
})();

console.log(proxyAll(1,2,3,4,5,6))
console.log(proxyAll(1,2,3,4,5,6))