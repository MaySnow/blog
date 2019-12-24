// 斐波那契数列
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233……
// F(n) = 
//  0, 当 n = 0
//  1, 当 n = 1
//  F(n - 1) + F(n- 2), 当 n > 1
const fibonacci = (function(n) {
    let memory = {}
    return function (n) {
        if (n === 0 | n === 1) {
            return n
        }
        if (memory[n - 2] === undefined) {
            memory[n - 2] = fibonacci(n - 2)
        }
        if (memory[n - 1] === undefined) {
            memory[n - 1] = fibonacci(n - 1)
        }

        return memory[n] = memory[n - 1] + memory[n - 2]
    }
})();


console.log(fibonacci(6))