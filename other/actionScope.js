// 作用域
var a = 1

function Fun1() {
    var a = 2
    console.log(this.a + a)
}

function Fun2() {
    var a = 3
    Fun1()
}

Fun2()
// NAN  undefined + 1 = NAN

function Fun3() {
    this.a = 4
}

Fun3.prototype = {
    a: 5
}

var fun3 = new Fun3()
// Fun1 的作用域变为 Fun3 取值先从搜索自己的实例本身，没有再搜索原型对象，原型对象没有就再往上搜索
Fun1.call(fun3)
// 6

// 输出的值为 5 而不是 4，因为for结束后还有 i 为 5，setTimout 5 次几乎同时执行
for (var i = 0; i < 5; i++) {
    setTimeout(function () { 
        console.log(i) 
    }, 1000) 
}