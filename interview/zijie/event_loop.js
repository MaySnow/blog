// 事件循环机制
// script start
// fun1 start
// fun2
// script end
// promise
// fun1 end
// setTimeout

// async/await 在底层转换成了 promise 和 then 回调函数，也就是说，这是 promise 的语法糖
// await 后面可以跟异步调用也可以跟普通函数
async function fun1 () {
  // 同步
  console.log('fun1 start')
  // 同步
  // 我们每次使用 await，解释器都 new 一个 promise 对象,然后把剩下async函数中的操作放到then回调函数中
  await fun2()
  // 相当于promise后的then放到微任务中
  console.log('fun1 end')
}

async function fun2 () {
  console.log('fun2')
}

console.log('script start')

setTimeout(() => {
  console.log('setTimeout')
},0)

fun1()

// new promise立即执行 then函数分发到微任务队列
new Promise((resolve) => {
  resolve()
}).then(() => console.log('promise'))

console.log('script end')
