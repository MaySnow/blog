// 模拟promise
function Bromise(executor) {
  let onResolve_ = null
  let onReject_ = null
  // 模拟 resolve 和 then
  this.then = function (onResolve, onReject) {
    onResolve_ = onResolve
  }
  function resolve(value) {
    // 执行到此时，demo.then 还没执行，即 this.then 还未执行 onResolve_ 还未被赋值 会报错
    setTimeout(() => {
      // 使用setTimout 添加到宏任务中，demo.then 是微任务，demo.then 执行后才会执行 setTimeout 此时 onResolve_ 已被赋值
      // Promise 将此换成了微任务，提升代码效率
      // 由此可见，Promise 之所以使用微任务是由 Promise 回调函数延迟绑定技术导致的
      onResolve_(value)
    })

  }
  executor(resolve)
}

function executor(resolve, reject) {
  resolve(100)
}

let demo = new Bromise(executor)

function onResolve (value) {
  console.log(value)
}
demo.then(onResolve)
