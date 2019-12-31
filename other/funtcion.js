function multiply(x) {
    return function mul(y) {
        // 闭包 封住了 x 的值
        // y !== 'undefined'  当不传入y时依然是 true 可以改成 y !== undefined 或者 typeOf y !== 'undefined'
        if (typeof y !== 'undefined') {
            x = x*y
            // 如果用的是匿名函数，可以使用 arguments.callee : 引用该函数的函数体内当前正在执行的函数
            return mul
        } else {
            return x
        }
    }
}
console.log(multiply(2)(3)(4)())

function add(x) {
    return function(y) {
        if (typeof y !== 'undefined') {
            x = x + y;
            return arguments.callee;
        } else {
            return x;
        }
    };
}
// console.log(add(2)(3)(4)())