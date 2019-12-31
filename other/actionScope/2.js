setTimeout(function(){
    console.log(1)
}, 0)

var fn1 = new Promise(resolve => {
    console.log(2)
    resolve(3)
})

var fn2 = new Promise(resolve => {
    setTimeout(function() {
        // setTimeout 宏任务里面的微任务，要先将同步任务 console.log 执行完 再执行 resolve 微任务
        resolve(4)
        console.log(5)
    },0)
})

fn1.then((res) => {
    console.log(res)
})

fn2.then((res) => {
    console.log(res)
})
console.log(6)
