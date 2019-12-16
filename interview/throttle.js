// 节流
// 函数在一定的时间内（例如3秒）只调用一次，在这3秒内无视后面产生的函数调用请求，也不会延长时间间隔
// 函数节流适用于函数被频繁调用的场景，例如：window.onresize() mousemove 上传进度等情况

const throttle = (fn, wait = 50) => {
  // 上次执行的时间
  let previous = 0
  // 最后一次请求调用
  let timer
  // 将throttle处理结果当做函数返回
  return function (...args) {
    if (!previous) {
      // 第一次就调用
      fn.apply(this, args)
      previous = +new Date()
    } else {
      // 非首次调用
      if (timer) clearTimeout(timer)
      // 保证最后一次请求在等待时间结束后会被调用
      timer = setTimeout(function () {
        // 如果距离上次的调用时间大于等于等待时间，则调用fn
        if (+new Date() - previous >= wait) {
          fn.apply(this, args)
          previous = +new Date()
        }
      }, wait - (+new Date() - previous))
    }
  }
}
const betterFun = throttle(function () {
  console.log(`fn函数被执行了`)
}, 2000)

setInterval(betterFun, 10)
